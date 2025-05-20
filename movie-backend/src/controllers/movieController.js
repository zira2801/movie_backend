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

// Lấy danh sách phim với lọc theo thể loại và từ khóa
const getAllMovies = async (req, res) => {
  try {
    // Lấy dữ liệu từ body (thay vì req.query)
    const { page = 1, limit = 10, filters = {} } = req.body;

    // Kiểm tra và parse đầu vào
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    if (isNaN(pageNum) || pageNum < 1 || isNaN(limitNum) || limitNum < 1) {
      return sendResponse(res, 400, 'Trang và giới hạn phải là số dương');
    }

    // Lấy keywords và genreIds từ filters
    const { keywords, genreIds } = filters;

    // Xây dựng điều kiện lọc
    const where = {};

    // Lọc theo thể loại
    if (genreIds && Array.isArray(genreIds) && genreIds.length > 0) {
      const genreIdArray = genreIds.map(id => parseInt(id)).filter(id => !isNaN(id));
      if (genreIdArray.length === 0) {
        return sendResponse(res, 400, 'Danh sách ID thể loại không hợp lệ');
      }
      where.movieGenres = {
        some: {
          genreId: { in: genreIdArray },
        },
      };
    }

    // Tìm kiếm theo từ khóa
    if (keywords) {
      const trimmedKeywords = keywords.trim();
      if (trimmedKeywords) {
        where.OR = [
          { title: { contains: trimmedKeywords, mode: 'insensitive' } },
          { description: { contains: trimmedKeywords, mode: 'insensitive' } },
        ];
      }
    }

    // Tính toán phân trang
    const skip = (pageNum - 1) * limitNum;

    // Truy vấn phim
    const [movies, total] = await Promise.all([
      prisma.movie.findMany({
        where,
        include: {
          movieGenres: { include: { genre: true } },
          episodes: true,
        },
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.movie.count({ where }),
    ]);

    // Chuẩn bị dữ liệu trả về
    const responseData = {
      movies,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };

    sendResponse(res, 200, 'Lấy danh sách phim thành công', responseData);
  } catch (error) {
    console.error('Lỗi khi lấy danh sách phim:', error);
    sendResponse(res, 500, 'Không thể lấy danh sách phim');
  }
};

// Tạo phim mới
// Hàm tạo phim mới
const createMovie = async (req, res) => {
  const { title, description, poster, releaseDate, duration, genreIds } = req.body; // Lấy dữ liệu từ body của request

  // Kiểm tra tiêu đề
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return sendResponse(res, 400, 'Tiêu đề phim là bắt buộc và phải là chuỗi hợp lệ'); // Báo lỗi nếu tiêu đề không hợp lệ
  }
  // Kiểm tra danh sách thể loại
  if (genreIds && !Array.isArray(genreIds)) {
    return sendResponse(res, 400, 'Danh sách thể loại phải là một mảng'); // Báo lỗi nếu genreIds không phải mảng
  }
  // Kiểm tra thời lượng
  if (duration && (typeof duration !== 'number' || duration <= 0)) {
    return sendResponse(res, 400, 'Thời lượng phải là số dương'); // Báo lỗi nếu thời lượng không hợp lệ
  }

  try {
    // Tạo phim mới trong cơ sở dữ liệu
    const movie = await prisma.movie.create({
      data: {
        title, // Lưu tiêu đề
        description: description?.trim() || null, // Lưu mô tả (nếu có, bỏ khoảng trắng thừa)
        poster: poster?.trim() || null, // Lưu poster (nếu có, bỏ khoảng trắng thừa)
        duration: duration || null, // Lưu thời lượng (nếu có),
        releaseDate: releaseDate || null, // Lưu ngày phát hành (nếu có),
        movieGenres: genreIds?.length // Liên kết thể loại nếu có
          ? {
            create: genreIds.map(genreId => ({
              genre: { connect: { id: parseInt(genreId) } }, // Kết nối với thể loại theo ID
            })),
          }
          : undefined, // Nếu không có genreIds, bỏ qua
      },
      include: {
        movieGenres: { include: { genre: true } }, // Lấy thông tin thể loại
        episodes: true, // Lấy thông tin tập phim
      },
    });
    sendResponse(res, 200, 'Thêm phim mới thành công', movie); // Trả về phim vừa tạo
  } catch (error) {
    console.error('Error creating movie:', error); // In lỗi ra console
    sendResponse(res, 400, 'Không thể tạo phim'); // Báo lỗi cho client
  }
};


//include là cách Prisma tải các quan hệ liên quan (eager loading).
//  Nếu không có include, chỉ thông tin cơ bản của phim (như title, description, poster) được trả về.

// 1. include
// Ý nghĩa: Dùng để lấy thêm dữ liệu từ các bảng liên quan (các quan hệ - relations) khi truy vấn.
// Khi nào dùng?: Khi bạn muốn lấy thông tin từ bảng chính (như Movie) và các bảng liên kết (như Episode, Genre) cùng lúc.
// Ngoài ra thì include dùng để lấy các quan hệ liên quan đến bảng chính mà không cần phải thực hiện nhiều truy vấn riêng lẻ (Lấy thông tin của 
// một bản ghi có quan hệ với bảng đó).


// 2. select
// Ý nghĩa: Dùng để chỉ định các trường cụ thể mà bạn muốn lấy từ bảng.
// Khi nào dùng?: Khi bạn chỉ cần một vài cột (fields) để tiết kiệm tài nguyên và tăng tốc truy vấn.
// Ví dụ: Nếu bạn chỉ cần lấy title và description của phim mà không cần các thông tin khác, bạn có thể dùng select để chỉ định các trường này.

// 3.take
// Mục đích: Giới hạn số lượng bản ghi trả về (tương tự LIMIT trong SQL).
// take: 10 // Lấy 10 bản ghi đầu tiên

// 4.skip
// Mục đích: Bỏ qua số lượng bản ghi đầu tiên (tương tự OFFSET trong SQL). Thường dùng cho phân trang.
// skip: 20 // Bỏ qua 20 bản ghi đầu tiên

// 5.orderBy
// Mục đích: Sắp xếp bản ghi theo một hoặc nhiều trường.
// orderBy: [{ createdAt: 'desc' }, { title: 'asc' }]

// 6.where
// Mục đích: Đặt điều kiện lọc bản ghi. Tương tự như WHERE trong SQL.
// where: { id: 1, title: { contains: "action" } }

// 7. cursor
// Mục đích: Hỗ trợ phân trang dựa trên con trỏ (cursor-based pagination), thường dùng khi danh sách lớn.
// cursor: { id: 100 } // Bắt đầu từ bản ghi có id=100


// 8. distinct
// Mục đích: Loại bỏ các bản ghi trùng lặp dựa trên một hoặc nhiều trường.
// distinct: ['title'] // Chỉ lấy các phim có tiêu đề duy nhất


// 9. relationLoadStrategy (Prisma 4.7.0 trở lên)
// Mục đích: Kiểm soát cách tải dữ liệu quan hệ (query hoặc join). Thường dùng để tối ưu hiệu suất.
// relationLoadStrategy: 'join' // Sử dụng SQL JOIN thay vì truy vấn riêng


// 10.transaction
// Mục đích: Thực hiện truy vấn trong một giao dịch (transaction) để đảm bảo tính toàn vẹn dữ liệu.
// await prisma.$transaction([
/*   prisma.movie.findMany({ where: { id: 1 } }),
      prisma.movie.update({ where: { id: 1 }, data: { views: 100 } }),
    ]);
  
  */


// 11. rawQuery
// Mục đích: Thực hiện truy vấn SQL thô (raw SQL query) nếu cần thiết.
// const result = await prisma.$queryRaw`SELECT * FROM Movie WHERE id = ${movieId}`;



// Các phương thức truy vấn chính trong Prisma:

// findMany: Lấy nhiều bản ghi (như đoạn code của bạn).
// findUnique: Lấy một bản ghi duy nhất dựa trên khóa duy nhất (unique key).
// findFirst: Lấy bản ghi đầu tiên thỏa mãn điều kiện.
// create, update, delete, v.v.: Dùng các thuộc tính như data, where, include.

// Lấy phim theo ID
const getMovieById = async (req, res) => {
  // 1. Lấy ID từ params và chuyển thành số nguyên
  const { id } = req.params;
  const movieId = parseInt(id);


  // 2. Kiểm tra ID hợp lệ
  if (isNaN(movieId)) {
    return sendResponse(res, 400, 'ID phim không hợp lệ');
  }

  try {
    // 3. Truy vấn phim từ database bằng Prisma
    const movie = await prisma.movie.findUnique({
      where: { id: movieId },
      include: {
        episodes: {
          select: {
            id: true,
            episodeNumber: true,
            title: true,
            videoUrl: true,
          },
        },
        movieGenres: {
          select: {
            genre: { select: { id: true, name: true } },
          },
        },
        movieActors: {
          select: {
            actor: { select: { id: true, name: true } },
          },
        },
        movieDirectors: {
          select: {
            director: { select: { id: true, name: true } },
          },
        },

        comments: true,
      },

    });

    // 4. Kiểm tra xem phim có tồn tại không
    if (!movie) {
      return sendResponse(res, 404, 'Không tìm thấy phim');
    }

    // 5. Lấy danh sách ID thể loại của phim hiện tại
    const genreIds = movie.movieGenres.map(genre => genre.genre.id);

    // 6. Truy vấn phim đề xuất dựa trên thể loại
    const recommendedMovies = await prisma.movie.findMany({
      where: {
        id: { not: movieId }, // Loại trừ phim hiện tại
        movieGenres: {
          some: {
            genreId: { in: genreIds }, // Phim có ít nhất một thể loại trùng
          },
        },
      },
      include: {
        movieGenres: {
          select: {
            genre: { select: { id: true, name: true } },
          },
        },
      },
      take: 10, // Giới hạn số lượng phim đề xuất (ví dụ: 5 phim)
      orderBy: { createdAt: 'desc' }, // Sắp xếp theo ngày tạo (mới nhất trước)
    });

    // 7. Chuẩn bị dữ liệu trả về
    const responseData = {
      movie,
      recommendedMovies, // Thêm danh sách phim đề xuất
    };

    // 8. Trả về thông tin phim và phim đề xuất
    sendResponse(res, 200, 'Lấy thông tin phim thành công', responseData);
  } catch (error) {
    // 9. Xử lý lỗi nếu truy vấn thất bại
    console.error('Error fetching movie:', error);
    sendResponse(res, 500, 'Không thể lấy thông tin phim');
  }
};

// Cập nhật phim
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description, poster, duration, genreIds } = req.body;
  const movieId = parseInt(id);

  // Kiểm tra ID
  if (isNaN(movieId)) {
    return sendResponse(res, 400, 'ID phim không hợp lệ');
  }

  // Kiểm tra đầu vào
  if (title && (typeof title !== 'string' || title.trim() === '')) {
    return sendResponse(res, 400, 'Tiêu đề phim phải là chuỗi hợp lệ');
  }
  if (genreIds && !Array.isArray(genreIds)) {
    return sendResponse(res, 400, 'Danh sách thể loại phải là một mảng');
  }
  if (duration && (typeof duration !== 'number' || duration <= 0)) {
    return sendResponse(res, 400, 'Thời lượng phải là số dương');
  }

  try {
    // Kiểm tra phim tồn tại
    const existingMovie = await prisma.movie.findUnique({ where: { id: movieId } });
    if (!existingMovie) {
      return sendResponse(res, 404, 'Không tìm thấy phim');
    }

    // Cập nhật phim
    const movie = await prisma.movie.update({
      where: { id: movieId },
      data: {
        title: title?.trim() || existingMovie.title,
        description: description?.trim() || existingMovie.description,
        poster: poster?.trim() || existingMovie.poster,
        duration: duration || existingMovie.duration,
        movieGenres: genreIds
          ? {
            deleteMany: {}, // Xóa các thể loại cũ
            create: genreIds.map(genreId => ({
              genre: { connect: { id: parseInt(genreId) } },
            })),
          }
          : undefined,
      },
      include: {
        movieGenres: { include: { genre: true } },
        episodes: true,
      },
    });
    sendResponse(res, 200, 'Cập nhật phim thành công', movie);
  } catch (error) {
    console.error('Error updating movie:', error);
    sendResponse(res, 400, 'Không thể cập nhật phim');
  }
};

// Xóa phim
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movieId = parseInt(id);

  // Kiểm tra ID
  if (isNaN(movieId)) {
    return sendResponse(res, 400, 'ID phim không hợp lệ');
  }

  try {
    // Kiểm tra phim tồn tại
    const existingMovie = await prisma.movie.findUnique({ where: { id: movieId } });
    if (!existingMovie) {
      return sendResponse(res, 404, 'Không tìm thấy phim');
      3956

      // Xóa phim
      await prisma.movie.delete({ where: { id: movieId } });
      sendResponse(res, 200, 'Xóa phim thành công');
    }
  } catch (error) {
    console.error('Error deleting movie:', error);
    sendResponse(res, 500, 'Không thể xóa phim');
  }
};

// Đóng Prisma Client khi server tắt
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
};