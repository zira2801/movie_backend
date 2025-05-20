const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../controllers/authController');
const prisma = new PrismaClient();

// Helper để chuẩn hóa response
const sendResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: statusCode,
        message,
        data,
    });
};

// Lấy thông tin User

const getInfoUser = async (req, res) => {
    try {
        // Lấy thông tin email từ token (được xử lý qua middleware authenticateToken)
        const userEmail = req.user.email;
        if (!userEmail) {
            return sendResponse(res, 400, 'Không tìm thấy thông tin người dùng');
        }

        // Tìm user trong database dựa vào email
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            select: {
                id: true,
                email: true,
                username: true,
                fullName: true,
                avatar: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!user) {
            return sendResponse(res, 404, 'Không tìm thấy người dùng');
        }

        // Trả về thông tin người dùng
        sendResponse(res, 200, 'Lấy thông tin người dùng thành công', user);

    }
    catch (err) {
        console.error('Lỗi khi lấy thông tin người dùng:', err);
        sendResponse(res, 500, 'Không thể lấy thông tin người dùng');
    }

}

module.exports = {
    getInfoUser,
}