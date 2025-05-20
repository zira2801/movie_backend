const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const OTP_EXPIRY = 10 * 60 * 1000;
const MAX_REFRESH_TOKENS = 5;

const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({
    status: statusCode,
    message,
    data,
  });
};

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: `"MovieVerse" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '🎬 Xác thực tài khoản - Mã OTP của bạn',
    html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background: #1e1e1e; color: #ffffff;">
          <h2 style="text-align: center; color: #ff3c00;">🎬 MovieVerse</h2>
          <p>Xin chào,</p>
          <p>Bạn đang thực hiện đăng ký tài khoản tại <strong>MovieVerse</strong>.</p>
          <p>Vui lòng sử dụng mã OTP dưới đây để xác minh tài khoản của bạn:</p>
          <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; background: #ffffff; color: #1e1e1e; padding: 10px 20px; border-radius: 8px; display: inline-block;">${otp}</span>
          </div>
          <p>Mã OTP có hiệu lực trong <strong>10 phút</strong>.</p>
          <p>Nếu bạn không yêu cầu điều này, hãy bỏ qua email này.</p>
          <hr style="border: none; border-top: 1px solid #444;" />
          <p style="font-size: 12px; text-align: center; color: #aaa;">
            © 2025 MovieVerse. All rights reserved.
          </p>
        </div>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (emailError) {
    console.error('Lỗi gửi email:', emailError);
    throw new Error('Không thể gửi OTP qua email');
  }
};

const generateUserCode = (user) => {
  return `USR-2025-${String(user.id).padStart(6, '0')}`;
};

const generateAccessToken = (user) => {
  const payload = {
    sub: generateUserCode(user),
    email: user.email,
    iat: Math.floor(Date.now() / 1000),
    iss: 'movie-app',
    aud: 'movie-app-users',
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

const generateRefreshToken = (user) => {
  const payload = {
    sub: generateUserCode(user),
    email: user.email,
    iat: Math.floor(Date.now() / 1000),
    iss: 'movie-app',
    aud: 'movie-app-users',
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

const register = async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return sendResponse(res, 400, 'Email, mật khẩu và tên người dùng là bắt buộc');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return sendResponse(res, 400, 'Email không hợp lệ');
  }
  if (password.length < 6) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 6 ký tự');
  }
  if (!/[A-Z]/.test(password)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 ký tự viết hoa');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt');
  }
  if (!/[0-9]/.test(password)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 số');
  }
  if (!/[a-zA-Z]/.test(password)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 chữ cái');
  }
  if (username.length < 3) {
    return sendResponse(res, 400, 'Tên người dùng phải có ít nhất 3 ký tự');
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return sendResponse(res, 400, 'Email đã được sử dụng');
    }

    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return sendResponse(res, 400, 'Tên người dùng đã được sử dụng');
    }

    const existingTempUser = await prisma.tempUser.findUnique({ where: { email } });
    if (existingTempUser) {
      await prisma.tempUser.delete({ where: { email } });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + OTP_EXPIRY);
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.tempUser.create({
      data: {
        email,
        username,
        password: hashedPassword,
        otp,
        otpExpires,
      },
    });

    await sendOtpEmail(email, otp);
    sendResponse(res, 200, 'Mã OTP đã được gửi đến email của bạn');
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error);
    sendResponse(res, 500, error.message || 'Không thể xử lý đăng ký');
  }
};

const verifyOtpRegister = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return sendResponse(res, 400, 'Email và OTP là bắt buộc');
  }

  try {
    const tempUser = await prisma.tempUser.findUnique({ where: { email } });
    if (!tempUser || tempUser.otp !== otp || tempUser.otpExpires < new Date()) {
      return sendResponse(res, 400, 'OTP không hợp lệ hoặc đã hết hạn');
    }

    const newUser = await prisma.user.create({
      data: {
        email: tempUser.email,
        username: tempUser.username,
        password: tempUser.password,
      },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        avatar: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    await prisma.tempUser.delete({ where: { email } });

    const accessToken = generateAccessToken(newUser);
    const refreshToken = generateRefreshToken(newUser);

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: newUser.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const responseData = {
      accessToken,
      refreshToken,
      user: newUser,
    };
    sendResponse(res, 200, 'Đăng ký thành công', responseData);
  } catch (error) {
    console.error('Lỗi khi xác thực OTP:', error);
    sendResponse(res, 500, 'Không thể hoàn tất đăng ký');
  }
};

const verifyOtpResetPassword = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return sendResponse(res, 400, 'Email và OTP là bắt buộc');
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.otp !== otp || user.otpExpires < new Date()) {
      return sendResponse(res, 400, 'OTP không hợp lệ hoặc đã hết hạn');
    }

    await prisma.user.update({
      where: { email },
      data: { otp: null, otpExpires: null },
    });

    sendResponse(res, 200, 'Xác thực thành công');
  } catch (error) {
    console.error('Lỗi khi xác thực OTP:', error);
    sendResponse(res, 500, 'Không thể hoàn tất xác thực OTP');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, 400, 'Email và mật khẩu là bắt buộc');
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      return sendResponse(res, 400, 'Email hoặc mật khẩu không đúng');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendResponse(res, 400, 'Email hoặc mật khẩu không đúng');
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await prisma.refreshToken.deleteMany({ where: { userId: user.id } });

    const tokenCount = await prisma.refreshToken.count({ where: { userId: user.id } });
    if (tokenCount >= MAX_REFRESH_TOKENS) {
      const oldestToken = await prisma.refreshToken.findFirst({
        where: { userId: user.id },
        orderBy: { createdAt: 'asc' },
      });
      if (oldestToken) {
        await prisma.refreshToken.delete({ where: { id: oldestToken.id } });
      }
    }

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const infoUser = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        avatar: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const responseData = {
      accessToken,
      refreshToken,
      user: infoUser,
    };

    sendResponse(res, 200, 'Đăng nhập thành công', responseData);
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    sendResponse(res, 500, 'Không thể xử lý đăng nhập');
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return sendResponse(res, 400, 'Email không được để trống');
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return sendResponse(res, 404, 'Email không tồn tại trong hệ thống');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + OTP_EXPIRY);

    await prisma.user.update({
      where: { email },
      data: { otp, otpExpires },
    });

    await sendOtpEmail(email, otp);

    sendResponse(res, 200, 'Mã OTP đã được gửi đến email của bạn');
  } catch (error) {
    console.error('Lỗi khi gửi OTP:', error);
    sendResponse(res, 500, 'Không thể gửi mã OTP');
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  if (!newPassword) {
    return sendResponse(res, 400, 'Mật khẩu mới không được để trống');
  }

  if (newPassword.length < 6) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 6 ký tự');
  }
  if (!/[A-Z]/.test(newPassword)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 ký tự viết hoa');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt');
  }
  if (!/[0-9]/.test(newPassword)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 số');
  }
  if (!/[a-zA-Z]/.test(newPassword)) {
    return sendResponse(res, 400, 'Mật khẩu phải có ít nhất 1 chữ cái');
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    sendResponse(res, 200, 'Cập nhật mật khẩu thành công');
  } catch (error) {
    console.error('Lỗi khi cập nhật mật khẩu:', error);
    sendResponse(res, 500, 'Không thể cập nhật mật khẩu');
  }
};

const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return sendResponse(res, 400, 'Refresh Token là bắt buộc');
  }

  try {
    const storedToken = await prisma.refreshToken.findFirst({
      where: { token: refreshToken },
      include: { user: true },
    });

    if (!storedToken || storedToken.expiresAt < new Date()) {
      return sendResponse(res, 401, 'Refresh Token không hợp lệ hoặc đã hết hạn');
    }

    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    const accessToken = generateAccessToken(storedToken.user);

    sendResponse(res, 200, 'Tạo Access Token mới thành công', { accessToken });
  } catch (error) {
    console.error('Lỗi khi làm mới token:', error);
    return sendResponse(res, 403, 'Refresh Token không hợp lệ');
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return sendResponse(res, 400, 'Refresh Token là bắt buộc');
  }

  try {
    await prisma.refreshToken.deleteMany({ where: { token: refreshToken } });
    sendResponse(res, 200, 'Đăng xuất thành công');
  } catch (error) {
    console.error('Lỗi khi đăng xuất:', error);
    sendResponse(res, 500, 'Không thể đăng xuất');
  }
};

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return sendResponse(res, 401, 'Yêu cầu Access Token');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Lỗi xác thực token:', error);
    if (error.name === 'TokenExpiredError') {
      return sendResponse(res, 401, 'Access Token đã hết hạn, vui lòng sử dụng Refresh Token');
    }
    return sendResponse(res, 403, 'Token không hợp lệ');
  }
};

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = {
  register,
  verifyOtpRegister,
  verifyOtpResetPassword,
  login,
  forgotPassword,
  resetPassword,
  refreshAccessToken,
  logout,
  authenticateToken,
};