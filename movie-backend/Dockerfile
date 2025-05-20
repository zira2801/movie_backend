FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy file package và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ project
COPY . .

# Chạy server
CMD ["npx", "nodemon", "src/index.js"]


# Mở cổng chạy server
EXPOSE 3000
