const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { authenticateToken } = require('../controllers/authController');
// CRUD Routes cho Movie
router.post('/', authenticateToken,movieController.getAllMovies); // Lấy danh sách phim
router.post('/create',authenticateToken, movieController.createMovie); // Tạo phim mới
router.get('/:id',authenticateToken, movieController.getMovieById); // Lấy phim theo ID
router.put('/:id',authenticateToken, movieController.updateMovie); // Cập nhật phim
router.delete('/:id',authenticateToken, movieController.deleteMovie); // Xóa phim

module.exports = router;