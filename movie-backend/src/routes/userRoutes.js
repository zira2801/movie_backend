const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../controllers/authController');

router.get('/get-info', authenticateToken, userController.getInfoUser);

module.exports = router;