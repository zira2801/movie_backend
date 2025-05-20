const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
const app = express();
app.use(express.json());

// Route mặc định
app.get('/', (req, res) => {
  res.send('API server is running...');
});

// API routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movies', movieRoutes);
app.use('/api/v1/user', userRoutes);
// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error('== Lỗi được bắt tại middleware ==');
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});


// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
