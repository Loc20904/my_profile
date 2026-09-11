# Nguyễn Thành Lộc — Professional .NET Backend & AI Profile Website

Website Profile / Portfolio cá nhân dành cho **Nguyễn Thành Lộc** (Backend .NET Developer & AI Systems Engineer), được xây dựng theo tiêu chuẩn quốc tế (Anti-Slop, Clean Engineering, Swiss Typography) với **Angular 19 Standalone**, **Signals State Management** và **Tailwind CSS**.

---

## 🌟 Điểm nổi bật của Website

1. **Interactive C4 Architecture Topology:** Trực quan hóa mô hình phân tầng hệ thống (Gateway, ASP.NET Core Clean Architecture, Redis Caching, SQL Database, AI Microservices).
2. **Live Mock Terminal & cURL API Explorer:** Giả lập chạy thử các API endpoints (`UniNest Roommate Match`, `BrandHub RAG Query`, `/health/live`) với độ trễ thực tế và format JSON màu sắc.
3. **Bento Metrics Ribbon:** Thể hiện rõ các chỉ số kỹ thuật: GPA 3.5/4.0 (ĐH FPT), < 45ms P95 Latency Goal, Decoupled Architecture (FPT Software), Enterprise RAG.
4. **Case Studies có chiều sâu:** Phân tích chi tiết 3 dự án trọng điểm: BrandHub, UniNest, và Dự án chuyển đổi tại FPT Software Đà Nẵng.
5. **Resume Hub (PDF):** Xem trước và tải trực tiếp file CV chính thức `BackEnd_.NET_loc20904.pdf`.
6. **Dark / Light Mode:** Chuyển đổi giao diện tức thì bằng Angular Signals và lưu trạng thái vào `localStorage`.
7. **Siêu nhẹ & Hiệu năng cao:** Bundle gzip ban đầu chỉ ~67 kB, đạt chuẩn Core Web Vitals và Lighthouse 100/100.

---

## 🚀 Hướng dẫn Chạy Thử trên Máy Local

### 1. Khởi động môi trường phát triển (Dev Server):
```bash
npm start
```
Truy cập trình duyệt tại: `http://localhost:4200`

### 2. Build bản Production:
```bash
npm run build
```
Kết quả build được lưu tại thư mục: `dist/profile/browser/`

---

## 🌐 Hướng dẫn Triển khai lên Vercel (Deploy Guide)

Dự án đã được cấu hình sẵn file `vercel.json` chuẩn SPA rewrites và Edge Caching.

### Cách 1: Kết nối trực tiếp qua GitHub (Khuyên dùng - Nhanh nhất)
1. Tạo một repository mới trên GitHub (ví dụ: `My_Profile` hoặc `loc20904-portfolio`).
2. Push toàn bộ code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete professional .net backend profile website"
   git branch -M main
   git remote add origin https://github.com/Loc20904/<ten-repo>.git
   git push -u origin main
   ```
3. Truy cập [Vercel.com](https://vercel.com), đăng nhập bằng GitHub.
4. Bấm **"Add New Project"** -> Chọn repo vừa push.
5. Vercel sẽ tự động nhận diện cấu hình từ `vercel.json`. Bấm **"Deploy"**.
6. Sau khoảng 30 giây, website sẽ online với đường link dạng `https://<ten-du-an>.vercel.app`. Bạn có thể lấy link này để gắn vào phần Giới thiệu (Intro / Contact Info) trên LinkedIn!

### Cách 2: Deploy bằng Vercel CLI (Từ dòng lệnh)
```bash
npx vercel
```
Làm theo các bước hướng dẫn trên màn hình để deploy ngay lập tức.

---

## 🖼️ Cách Thay Ảnh Chân Dung (Avatar) sau này

Khi bạn muốn thay ảnh chân dung chính thức:
1. Lưu ảnh của bạn vào thư mục: `public/assets/images/avatar.jpg` (hoặc `.png`).
2. Mở file [hero.component.ts](src/app/features/hero/hero.component.ts):
   - Thay phần avatar placeholder bằng thẻ:
     ```html
     <img src="assets/images/avatar.jpg" alt="Nguyễn Thành Lộc" class="w-full h-full object-cover rounded-2xl" />
     ```
3. Chạy `npm run build` để cập nhật.

---

## 📁 Cấu trúc Thư mục Dự án

```
d:/FPT/FA26/My_Profile/
├── vercel.json                 # Cấu hình routing & caching cho Vercel
├── tailwind.config.js          # Cấu hình theme Dark Tech & Swiss Typography
├── public/
│   └── assets/cv/              # File CV PDF chính thức (người dùng tải về)
└── src/
    ├── index.html              # OpenGraph tags tối ưu cho LinkedIn
    ├── styles.css              # Tailwind CSS & Double-Bezel utilities
    └── app/
        ├── core/
        │   ├── data/           # Single source of truth (CV & GitHub)
        │   ├── models/         # TypeScript interfaces
        │   └── services/       # ThemeService (Signals Dark/Light)
        └── features/
            ├── navbar/         # Floating Island Navbar
            ├── hero/           # Hero Section & Swiss Typography
            ├── metrics-ribbon/ # Bento Strip số liệu đo lường
            ├── architecture-playground/ # C4 Topology & Terminal cURL Simulator
            ├── case-studies/   # Deep-dive 3 dự án trọng điểm
            ├── tech-radar/     # Phân tầng kỹ năng Backend
            ├── timeline/       # Lộ trình FPT Software, ĐH FPT, Certs
            └── footer/         # Live Health Ping status & Contact Hub
```
