const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../controllers/authController'); // Import middleware
const prisma = new PrismaClient();

// Helper để chuẩn hóa response
const sendResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
      status: statusCode,
      message,
      data,
    });
  };

  //Lấy thông tin của tập phim

  const getEpisodeById = async (req, res) => {
    const [episodeId] = req.originalUrl.split('/').slice(-1);
  
    try {
      const episode = await episode.prisma.episode.findUnique({
        where: {
          id: parseInt(episodeId),
        },
        include: {
          movie: {
            select: {
              id: true,
              title: true,
              description: true,
              poster: true,
              trailer: true,
              releaseDate: true,
              duration: true,
              episodes: { select: { id: true, episodeNumber: true, title: true, videoUrl: true } },
              movieGenres: { select: { genre: { select: { id: true, name: true } } } },
              movieActors: { select: { actor: { select: { id: true, name: true } } } },
              movieDirectors: { select: { director: { select: { id: true, name: true } } } },
            },
          }
        },
      });
  
      if (!episode) {
        return sendResponse(res, 404, 'Tập phim không tồn tại');
      }
  
      // Trả về response ngắn gọn
      return sendResponse(res, 200, 'Lấy thông tin tập phim thành công', {
        episode,
        movie: episode.movie,
      });
    } catch (error) {
      console.error('Lỗi khi lấy thông tin tập phim:', error);
      return sendResponse(res, 500, 'Lỗi server');
    }
  };

  // Đóng Prisma Client khi server tắt
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = {
  getEpisodeById
};