Hãy xây dựng hoàn chỉnh một website Digital Portfolio cá nhân cho môn
“Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo”.

Đây không phải landing page đơn giản. Hãy tạo một sản phẩm portfolio cao cấp,
có thiết kế độc đáo, trải nghiệm mượt mà, nội dung rõ ràng và đủ chất lượng để
hướng đến mức đánh giá Xuất sắc 8.1–10 điểm.

Trước khi bắt đầu:
1. Kiểm tra cấu trúc thư mục hiện tại.
2. Đọc và áp dụng các skill đã cài trong `.agents/skills`.
3. Lập kế hoạch cấu trúc website và component.
4. Sau đó triển khai toàn bộ website, không dừng ở bản demo.
5. Không hỏi lại thông tin cá nhân chưa có; hãy dùng dữ liệu mẫu dễ chỉnh sửa.
6. Không để TODO, code giả, nút không hoạt động hoặc phần chưa hoàn thành.

==================================================
1. CÔNG NGHỆ SỬ DỤNG
==================================================

Sử dụng phiên bản ổn định mới nhất của:

- Next.js 16 với App Router
- React 19
- TypeScript strict mode
- Tailwind CSS 4
- Motion for React cho animation và page transition
- shadcn/ui và Radix UI primitives cho component có accessibility tốt
- Lucide React cho icon
- Lenis chỉ khi thật sự cần smooth scrolling nâng cao
- React Three Fiber hoặc Three.js chỉ cho hiệu ứng galaxy nhẹ ở Hero
- Next/Image để tối ưu ảnh
- Next/Font để tối ưu font
- Vercel để triển khai

Không cài quá nhiều thư viện trùng chức năng.

Ưu tiên CSS, Tailwind và Motion for React. Chỉ dùng GSAP hoặc Three.js khi
hiệu ứng đó không thể làm tốt bằng giải pháp nhẹ hơn.

==================================================
2. MỤC TIÊU THIẾT KẾ
==================================================

Thiết kế website theo phong cách:

- Premium Digital Portfolio
- Futuristic Galaxy
- Tím, violet, indigo, xanh đêm
- Hiện đại, có chiều sâu và giàu tính thị giác
- Sáng tạo nhưng vẫn phù hợp môi trường học thuật
- Không giống template portfolio AI phổ biến
- Không làm giao diện trẻ con, sơ sài hoặc giống trang nộp bài thông thường

Cảm giác tổng thể phải là:

- Chuyên nghiệp
- Công nghệ
- Cá nhân hóa
- Có tính khám phá
- Mượt mà
- Dễ sử dụng
- Dễ đọc
- Gây ấn tượng ngay khi mở trang

Website cần đẹp cả khi đứng yên, không phụ thuộc hoàn toàn vào animation.

==================================================
3. DESIGN SYSTEM
==================================================

Tạo design system nhất quán bằng CSS variables.

Bảng màu gợi ý:

- Background chính: #070711
- Background phụ: #0D0B1F
- Surface: rgba(255,255,255,0.06)
- Surface hover: rgba(255,255,255,0.10)
- Purple chính: #8B5CF6
- Violet sáng: #A855F7
- Indigo: #6366F1
- Pink accent: #EC4899
- Cyan accent dùng rất ít: #22D3EE
- Text chính: #F8FAFC
- Text phụ: #A8A8BD
- Border: rgba(255,255,255,0.12)

Tạo các token cho:

- màu sắc
- border radius
- shadow
- glow
- spacing
- container width
- transition duration
- easing curve
- typography

Typography:

- Font tiêu đề hiện đại, đậm, có cá tính nhưng dễ đọc
- Font nội dung sạch, rõ ràng
- Dùng fluid typography với `clamp()`
- Tiêu đề Hero nổi bật nhưng không chiếm hết màn hình
- Chiều dài đoạn văn không quá rộng
- Line-height thoải mái
- Phân cấp H1, H2, H3 rõ ràng

Layout:

- Max-width khoảng 1200–1280px
- Khoảng trắng rộng, có nhịp điệu
- Grid linh hoạt
- Không nhồi quá nhiều nội dung trong một màn hình
- Không dùng bento grid tràn lan
- Các section phải có sự liên kết thị giác với nhau

==================================================
4. CẤU TRÚC WEBSITE
==================================================

Tạo các route:

- `/` — Trang Giới thiệu
- `/projects` — Danh sách 6 bài tập
- `/projects/[slug]` — Trang chi tiết từng bài
- `/reflection` — Trang Tổng kết
- Trang 404 được thiết kế đồng bộ

Navbar phải có:

- Tên hoặc logo cá nhân
- Giới thiệu
- Dự án
- Tổng kết
- Trạng thái active
- Thanh tiến trình đọc trang
- Navbar nền trong suốt khi ở đầu trang
- Chuyển sang nền blur khi cuộn
- Mobile menu toàn màn hình hoặc dạng sheet
- Đóng menu bằng phím Escape
- Điều hướng được hoàn toàn bằng bàn phím

Footer phải có:

- Tên mẫu
- Môn học
- Email mẫu
- Liên kết mạng xã hội mẫu
- Năm hiện tại
- Nút quay lại đầu trang

==================================================
5. TRANG GIỚI THIỆU
==================================================

Hero phải tạo ấn tượng mạnh nhưng vẫn tải nhanh.

Nội dung Hero:

- Nhãn nhỏ: “Digital Portfolio 2026”
- Họ tên mẫu
- Ngành học mẫu
- Một câu giới thiệu ngắn
- Nút “Khám phá dự án”
- Nút “Tìm hiểu về tôi”
- Ảnh đại diện hoặc visual placeholder
- Chỉ báo kéo xuống

Hiệu ứng Hero:

- Nền galaxy chuyển động rất nhẹ
- Aurora gradient tím
- Các hạt sáng nhỏ có chiều sâu
- Glow bám nhẹ theo con trỏ trên desktop
- Text reveal theo từng dòng
- CTA xuất hiện theo stagger
- Parallax nhẹ giữa foreground và background
- Không dùng hiệu ứng mạnh trên điện thoại yếu
- Không làm nội dung bị che bởi hiệu ứng

Sau Hero, tạo các section:

1. Giới thiệu bản thân
2. Mục tiêu học tập
3. Định hướng phát triển
4. Mục tiêu của Portfolio
5. Các kỹ năng số nổi bật
6. Tổng quan 6 bài tập
7. CTA dẫn đến trang Dự án

Thông tin mẫu:

- Họ tên: Nguyễn Văn A
- Ngành học: [Ngành học]
- Lớp: [Lớp]
- Trường: [Tên trường]
- Sở thích: Công nghệ, thiết kế, sáng tạo nội dung
- Mục tiêu: Phát triển kỹ năng số và ứng dụng AI hiệu quả
- Email: example@email.com

==================================================
6. TRANG DỰ ÁN
==================================================

Hiển thị 6 bài tập:

1. Thao tác cơ bản với tệp tin và thư mục
2. Tìm kiếm và đánh giá thông tin học thuật
3. Viết Prompt hiệu quả cho các tác vụ học tập
4. Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm
5. Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung
6. Sử dụng AI có trách nhiệm trong học tập và nghiên cứu

Mỗi project card phải có:

- Số thứ tự
- Tiêu đề
- Mô tả ngắn
- Nhóm kỹ năng
- Công cụ sử dụng
- Trạng thái hoàn thành
- Ảnh thumbnail mẫu
- Nút “Xem chi tiết”
- Nút “Mở bài tập”
- Hover effect
- Focus state rõ ràng
- Card spotlight hoặc border glow nhẹ

Các link bài tập sử dụng placeholder:

- LINK_BAI_1
- LINK_BAI_2
- LINK_BAI_3
- LINK_BAI_4
- LINK_BAI_5
- LINK_BAI_6

Khi link chưa được cập nhật:

- Không chuyển đến trang lỗi
- Hiển thị toast: “Liên kết bài tập đang được cập nhật”
- Nút vẫn có trạng thái hợp lý
- Không dùng href giả như `#`

Khi có link thật:

- Mở trong tab mới
- Có `rel="noopener noreferrer"`
- Có icon external link
- Có aria-label đầy đủ

Trang Projects cần có:

- Hero nhỏ giới thiệu danh sách bài
- Bộ lọc theo kỹ năng hoặc loại công cụ
- Thanh tìm kiếm bài tập
- Nút đổi giữa grid và timeline nếu hợp lý
- Hiển thị số lượng dự án
- Empty state đẹp khi không có kết quả
- Animation xuất hiện theo từng card
- Không chạy animation lại liên tục gây khó chịu

==================================================
7. TRANG CHI TIẾT TỪNG BÀI
==================================================

Mỗi route `/projects/[slug]` hiển thị:

- Breadcrumb
- Số bài
- Tiêu đề
- Mô tả
- Mục tiêu
- Bối cảnh
- Quá trình thực hiện
- Công cụ đã sử dụng
- Kết quả đạt được
- Hình ảnh minh chứng mẫu
- Bài học rút ra
- Nút mở bài tập gốc
- Nút chuyển bài trước và bài sau

Tạo mục lục cố định trên desktop cho trang bài dài.

Mục lục phải:

- Theo dõi section đang đọc
- Cuộn mượt đến section
- Không che nội dung
- Chuyển thành dropdown hoặc sheet trên mobile

Hình ảnh minh chứng:

- Dùng placeholder có tỷ lệ nhất quán
- Có caption
- Có thể mở lightbox
- Có alt text
- Lazy load
- Không gây layout shift

==================================================
8. TRANG TỔNG KẾT
==================================================

Trang Tổng kết gồm:

- Cảm nhận về quá trình làm Portfolio
- Kiến thức quan trọng đã học
- Kỹ năng đã phát triển
- Điều tâm đắc nhất
- Khó khăn đã gặp
- Cách giải quyết
- Định hướng ứng dụng trong tương lai

Trình bày bằng:

- Timeline hành trình học tập
- Reflection cards
- Khối “Bài học lớn nhất”
- Danh sách kỹ năng trước và sau môn học
- CTA quay lại xem toàn bộ dự án

Dùng nội dung mẫu tự nhiên, ngắn gọn, dễ sửa.

Không viết nội dung quá khoa trương hoặc có văn phong máy móc.

==================================================
9. ANIMATION VÀ MICRO-INTERACTION
==================================================

Animation phải hỗ trợ trải nghiệm, không chỉ để trang trí.

Sử dụng:

- Page transition nhẹ giữa các route
- Scroll reveal
- Stagger cho danh sách card
- Hover lift tối đa khoảng 4px
- Scale nút rất nhẹ
- Animated underline cho navigation
- Number counter khi vào viewport
- Progress indicator
- Card spotlight theo con trỏ trên desktop
- Glow theo hover
- Image reveal
- Text reveal có kiểm soát
- Crossfade khi lọc dự án
- Toast animation
- Mobile menu transition

Quy tắc animation:

- Animation thông thường khoảng 200–500ms
- Không animation mọi thành phần cùng lúc
- Không làm chữ bay quá xa
- Không dùng bounce quá mức
- Không dùng continuous animation cho nội dung chính
- Ưu tiên transform và opacity
- Tránh animation thuộc tính gây layout reflow
- Giữ cảm giác gần 60fps
- Tắt hoặc giảm animation với `prefers-reduced-motion`
- Tắt hiệu ứng theo con trỏ trên thiết bị cảm ứng
- Giảm hạt galaxy trên màn hình nhỏ hoặc máy yếu

==================================================
10. TỐI ĐA HÓA TRẢI NGHIỆM NGƯỜI DÙNG
==================================================

Thiết kế theo nguyên tắc mobile-first.

Desktop:

- Bố cục rộng nhưng không loãng
- Có hover và cursor interaction tinh tế
- Mục lục cố định ở trang chi tiết
- Project grid 2 hoặc 3 cột tùy kích thước

Tablet:

- Grid 2 cột
- Khoảng cách và typography cân đối
- Không phụ thuộc hover

Mobile:

- Grid 1 cột
- Không có horizontal overflow
- Nút bấm tối thiểu khoảng 44px
- Navbar dễ sử dụng bằng một tay
- Nội dung chính xuất hiện trước visual
- Tắt hoặc đơn giản hóa 3D/parallax
- Khoảng cách an toàn cho màn hình nhỏ
- Không để chữ quá bé
- Không để card quá cao hoặc quá nhiều hiệu ứng

UX bắt buộc:

- Có Skip to content
- Có focus-visible rõ ràng
- Tab order hợp lý
- Escape đóng modal/menu/lightbox
- Body scroll được khóa đúng khi mở overlay
- Không dùng màu sắc làm tín hiệu duy nhất
- Trạng thái hover, focus, active, disabled rõ ràng
- Form hoặc ô tìm kiếm có label
- Icon-only button phải có aria-label
- Không autoplay âm thanh hoặc video
- Không có pop-up gây khó chịu
- Không che nội dung bằng hiệu ứng con trỏ
- Không sử dụng custom cursor trên mobile
- Giữ vị trí cuộn hợp lý khi quay lại trang trước

==================================================
11. ACCESSIBILITY
==================================================

Đảm bảo:

- Semantic HTML
- Chỉ có một H1 chính trên mỗi trang
- Heading hierarchy đúng
- Contrast tốt theo WCAG
- Alt text cho ảnh
- Label cho input
- Focus trap đúng trong dialog
- Hỗ trợ bàn phím
- `prefers-reduced-motion`
- `aria-current` cho navigation active
- Screen reader đọc được trạng thái toast và loading
- Không dùng div thay cho button hoặc link

==================================================
12. HIỆU SUẤT
==================================================

Tối ưu mạnh hiệu suất:

- Server Component mặc định
- Chỉ thêm `"use client"` khi thực sự cần
- Dynamic import cho Three.js, lightbox hoặc component nặng
- Lazy load phần ngoài màn hình
- Tối ưu ảnh bằng Next/Image
- Dùng AVIF hoặc WebP
- Không tải video nền dung lượng lớn
- Không tải toàn bộ thư viện animation cho một hiệu ứng nhỏ
- Không dùng quá nhiều blur kích thước lớn
- Không render hàng trăm hạt bằng DOM
- Tránh hydration mismatch
- Tránh cumulative layout shift
- Không để console error hoặc warning
- Không để request không cần thiết

Mục tiêu:

- Lighthouse Performance từ 90 trở lên
- Accessibility từ 95 trở lên
- Best Practices từ 95 trở lên
- SEO từ 95 trở lên
- Không có horizontal scroll
- Không có layout shift rõ ràng
- Tương tác ban đầu nhanh

Nếu hiệu ứng galaxy làm giảm hiệu suất, ưu tiên hiệu suất và khả năng đọc.

==================================================
13. SEO VÀ CHIA SẺ
==================================================

Tạo:

- Metadata cho từng trang
- Title template
- Description
- Open Graph metadata
- Twitter card
- Favicon mẫu
- Sitemap
- robots.txt
- Canonical URL placeholder
- JSON-LD phù hợp cho ProfilePage hoặc Person nếu hợp lý

Trang chi tiết từng bài phải có metadata riêng.

==================================================
14. QUẢN LÝ DỮ LIỆU
==================================================

Không viết cứng nội dung dự án trong nhiều component.

Tạo file dữ liệu tập trung, ví dụ:

`src/data/portfolio.ts`

Dữ liệu cá nhân gồm:

- name
- studentId
- major
- className
- school
- bio
- interests
- learningGoals
- careerDirection
- email
- avatar
- socialLinks

Mỗi project gồm:

- id
- slug
- order
- title
- shortTitle
- description
- objective
- process
- tools
- result
- lessons
- tags
- thumbnail
- gallery
- externalUrl
- status

Tạo dữ liệu mẫu đầy đủ cho cả 6 bài.

Đặt chú thích rõ trong file dữ liệu để tôi biết nơi thay:

- thông tin cá nhân
- nội dung bài
- thumbnail
- ảnh minh chứng
- link bài tập

==================================================
15. COMPONENT CẦN CÓ
==================================================

Component hóa hợp lý, ví dụ:

- Navbar
- MobileNavigation
- ScrollProgress
- PageTransition
- GalaxyBackground
- HeroSection
- SectionHeading
- ProjectCard
- ProjectGrid
- ProjectFilter
- ProjectSearch
- ProjectStatusBadge
- ProjectTableOfContents
- EvidenceGallery
- ReflectionTimeline
- SkillCard
- ExternalLinkButton
- BackToTop
- Toast
- Footer
- ReducedMotionProvider

Không chia component quá nhỏ nếu không tạo giá trị.

==================================================
16. TRẠNG THÁI GIAO DIỆN
==================================================

Thiết kế đầy đủ các trạng thái:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Empty
- Error
- Link chưa cập nhật
- Không tìm thấy dự án
- 404

Tạo skeleton loading đồng bộ với bố cục thật nếu có loading state.

Không để màn hình trắng khi component đang tải.

==================================================
17. NHỮNG ĐIỀU KHÔNG ĐƯỢC LÀM
==================================================

- Không tạo giao diện giống template mặc định
- Không dùng gradient tím trên mọi phần tử
- Không lạm dụng glassmorphism
- Không đặt quá nhiều card trong card
- Không để toàn bộ nội dung căn giữa
- Không dùng icon không cần thiết
- Không dùng animation mạnh ở mọi section
- Không làm chữ bị gradient đến mức khó đọc
- Không dùng custom cursor gây cản trở thao tác
- Không làm nền galaxy cạnh tranh với nội dung
- Không để button giả không hoạt động
- Không dùng link `#` cho tính năng chưa có
- Không để lorem ipsum
- Không để TODO
- Không bỏ dở code
- Không tạo component chỉ đẹp trên desktop
- Không hy sinh accessibility để đổi lấy hiệu ứng
- Không cài nhiều thư viện chỉ để tạo một hiệu ứng nhỏ

==================================================
18. TIÊU CHÍ HOÀN THÀNH
==================================================

Chỉ coi dự án hoàn thành khi:

1. Tất cả route hoạt động.
2. Navbar và mobile menu hoạt động.
3. Có đủ 6 bài tập.
4. Trang chi tiết động hoạt động cho cả 6 bài.
5. Tìm kiếm và lọc dự án hoạt động.
6. Placeholder link được xử lý đúng.
7. Website responsive hoàn chỉnh.
8. Keyboard navigation hoạt động.
9. Reduced motion hoạt động.
10. Không có lỗi TypeScript.
11. Không có lỗi ESLint nghiêm trọng.
12. Không có console error.
13. Không có horizontal overflow.
14. Không có ảnh gây layout shift.
15. Build production thành công.
16. Nội dung dễ chỉnh sửa trong một file dữ liệu.
17. README có hướng dẫn chạy và thay thông tin.
18. Giao diện đẹp, nhất quán và có bản sắc galaxy tím.

==================================================
19. KIỂM TRA SAU KHI LẬP TRÌNH
==================================================

Sau khi hoàn thành, hãy tự chạy:

- Cài dependency
- Type check
- Lint
- Production build

Sửa toàn bộ lỗi phát hiện được trước khi kết thúc.

Kiểm tra thủ công các kích thước:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Kiểm tra:

- menu mobile
- project filter
- tìm kiếm
- link placeholder
- trang chi tiết
- keyboard navigation
- reduced motion
- 404
- dark galaxy background
- tốc độ và độ mượt animation

Cuối cùng, báo cáo ngắn gọn:

1. Những gì đã tạo
2. Cấu trúc thư mục chính
3. File nào dùng để sửa nội dung
4. Lệnh chạy dự án
5. Kết quả lint, type-check và build

Hãy bắt đầu triển khai trực tiếp trong thư mục hiện tại.
Không chỉ mô tả hoặc lập kế hoạch; hãy viết toàn bộ source code và hoàn thiện website.