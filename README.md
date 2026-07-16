# Digital Portfolio

Portfolio học tập cho môn “Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo”. Website được xây dựng bằng Next.js App Router, React, TypeScript, Tailwind CSS và Motion.

## Yêu cầu môi trường

- Node.js 20.9 trở lên
- npm 10 trở lên

## Chạy trên máy

```bash
npm ci
copy .env.example .env.local
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra trước khi triển khai

```bash
npm run verify
```

Lệnh này chạy ESLint, TypeScript strict mode và production build. Có thể thử bản production trên máy bằng:

```bash
npm run start
```

## Nơi chỉnh nội dung thật

- Thông tin cá nhân, tên môn học và toàn bộ 6 bài tập: `src/data/portfolio.ts`
- Ánh xạ hành tinh và mô tả chủ đề: `src/data/planets.ts`
- Ảnh hành tinh: `public/planets/`
- Ảnh bìa bài tập: `public/artwork/`
- File Word và PDF của 6 bài nộp: `public/documents/`
- Design tokens và giao diện: `app/globals.css`

Mỗi bài tập có hai bản tài liệu cùng tên cơ sở: `.docx` để tải xuống và `.pdf` để hiển thị trực tiếp trong trang chi tiết. Khi thay một file Word, hãy xuất lại PDF tương ứng, giữ nguyên tên file trong `public/documents/`, rồi cập nhật số trang tại `src/data/portfolio.ts`.

Ví dụ Bài 1:

```text
public/documents/bai-1-quan-ly-tep.docx
public/documents/bai-1-quan-ly-tep.pdf
```

Website không phụ thuộc Google Drive hay liên kết bài tập bên ngoài, vì vậy toàn bộ bài nộp vẫn xem được sau khi triển khai lên Vercel.

## Đưa website lên mạng bằng Vercel

Phương án khuyến nghị là GitHub + Vercel vì mỗi lần đẩy code lên nhánh `main`, Vercel tự build lại; các nhánh khác có đường dẫn Preview riêng.

### 1. Đưa dự án lên GitHub

Tạo một repository trống trên GitHub, sau đó chạy trong thư mục dự án:

```bash
git init
git add .
git commit -m "Prepare digital portfolio"
git branch -M main
git remote add origin https://github.com/TEN_TAI_KHOAN/TEN_REPOSITORY.git
git push -u origin main
```

### 2. Kết nối Vercel

1. Đăng nhập `vercel.com` bằng GitHub.
2. Chọn **Add New > Project**, rồi import repository vừa tạo.
3. Giữ Framework Preset là **Next.js** và bấm **Deploy**.
4. Sau lần deploy đầu, sao chép domain production dạng `https://ten-du-an.vercel.app`.
5. Trong **Project Settings > Environment Variables**, thêm:

```env
NEXT_PUBLIC_SITE_URL=https://ten-du-an.vercel.app
```

6. Redeploy bản production để canonical URL, Open Graph, sitemap và robots dùng đúng domain.

Đường dẫn `https://ten-du-an.vercel.app` lúc này là link công khai có thể gửi cho mọi người. Nếu có tên miền riêng, thêm tại **Project Settings > Domains**, cập nhật `NEXT_PUBLIC_SITE_URL` rồi redeploy.

### Triển khai nhanh bằng CLI

```bash
npx vercel
npx vercel --prod
```

Vẫn cần đặt `NEXT_PUBLIC_SITE_URL` trong Vercel và deploy lại sau khi có domain production.

## Sau mỗi lần sửa nội dung

```bash
npm run verify
git add .
git commit -m "Update portfolio content"
git push
```

Vercel sẽ tự tạo bản triển khai mới từ commit vừa đẩy.
