# Checklist thay dữ liệu mẫu bằng thông tin thật

## Hồ sơ cá nhân

- Thay họ tên, mã sinh viên, ngành, lớp, trường và email trong `src/data/portfolio.ts`.
- Viết lại `bio`, sở thích, mục tiêu học tập và định hướng nghề nghiệp bằng giọng văn cá nhân.
- Thay ảnh đại diện bằng ảnh rõ nét, ưu tiên file WebP đặt trong `public/`.
- Kiểm tra LinkedIn, GitHub và email; xóa liên kết nào không sử dụng.
- Không công khai số điện thoại, địa chỉ hoặc dữ liệu riêng tư không cần thiết.

## Sáu bài tập

- Thay `LINK_BAI_1` đến `LINK_BAI_6` bằng URL thật.
- Rà lại tiêu đề, mục tiêu, quy trình, công cụ, kết quả và bài học của từng bài.
- Mỗi `gallery` nên có 2–3 ảnh minh chứng rõ nội dung, cùng tỷ lệ và không chứa dữ liệu nhạy cảm.
- Thay thumbnail nếu ảnh hiện tại không phản ánh đúng bài tập.
- Mở thử từng link ở cửa sổ ẩn danh để chắc chắn người chấm có quyền truy cập.

## Nội dung và trình bày

- Kiểm tra chính tả, tên môn học, tên trường và cách viết hoa.
- Kiểm tra ảnh ở màn hình điện thoại; ảnh quan trọng không bị cắt mất nội dung.
- Duyệt đủ `/`, `/projects`, `/reflection` và cả 6 trang chi tiết.
- Thử tìm kiếm, bộ lọc, menu mobile, lightbox, nút tạm dừng chuyển động và bàn phím.
- Thử chế độ giảm chuyển động của hệ điều hành.

## Trước khi công khai

Tạo biến môi trường trên Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://ten-du-an.vercel.app
```

Chạy kiểm tra cuối:

```bash
npm ci
npm run verify
```

Sau khi deploy, mở link production bằng cửa sổ ẩn danh và kiểm tra:

- Trang chủ tải được, không có màn hình lỗi hoặc cảnh báo console.
- Tất cả route và nút điều hướng hoạt động.
- Ảnh Open Graph xuất hiện khi dán link vào công cụ kiểm tra chia sẻ.
- `https://ten-du-an.vercel.app/robots.txt` và `/sitemap.xml` truy cập được.
- Link bài tập thật không yêu cầu đăng nhập ngoài ý muốn.
