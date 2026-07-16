export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  studentId: string;
  major: string;
  className: string;
  school: string;
  bio: string;
  interests: string[];
  learningGoals: string;
  careerDirection: string;
  email?: string;
  avatar: string;
  socialLinks: SocialLink[];
};

export type ProjectDocument = {
  pdfUrl: string;
  docxUrl: string;
  fileName: string;
  pages: number;
};

export type Project = {
  id: number;
  slug: string;
  order: string;
  title: string;
  shortTitle: string;
  description: string;
  objective: string;
  context: string;
  process: string[];
  tools: string[];
  result: string;
  artifacts: string[];
  lessons: string;
  tags: string[];
  thumbnail: string;
  document: ProjectDocument;
  status: string;
};

/**
 * THÔNG TIN DÙNG CHUNG
 * Chỉnh tên môn học và năm thực hiện portfolio tại đây.
 */
export const siteContent = {
  portfolioYear: 2026,
  courseName: "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo",
};

/**
 * THÔNG TIN CÁ NHÂN
 * Đây là nơi duy nhất cần sửa khi cập nhật hồ sơ, ảnh đại diện hoặc liên hệ.
 * Không thêm email hay mạng xã hội nếu chưa muốn công khai.
 */
export const profile: Profile = {
  name: "Trịnh Thị Kiều Oanh",
  studentId: "25041302",
  major: "Ngôn ngữ và Văn hóa Nga",
  className: "25R1",
  school: "Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội",
  bio: "Mình là sinh viên Khoa Ngôn ngữ và Văn hóa Nga. Qua portfolio này, mình ghi lại quá trình đi từ những thao tác số cơ bản đến cách tìm kiếm, cộng tác, sáng tạo và sử dụng AI có trách nhiệm.",
  interests: ["Nghe nhạc", "Múa"],
  learningGoals: "Xây dựng nền tảng kỹ năng số vững chắc, biết kiểm chứng thông tin và sử dụng AI như một công cụ hỗ trợ thay vì phụ thuộc vào công cụ.",
  careerDirection: "Kết hợp năng lực ngoại ngữ với kỹ năng số và AI để học tập, nghiên cứu và làm việc hiệu quả trong môi trường đa văn hóa.",
  avatar: "/avatar-oanh-white.png",
  socialLinks: [],
};

/**
 * SÁU BÀI TẬP THÀNH PHẦN
 * Nội dung dưới đây được biên tập từ sáu file Word đã hoàn thành.
 * Khi thay bài nộp, cập nhật đồng thời `document`, nội dung mô tả và ảnh bìa.
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: "quan-ly-tep-tin",
    order: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    shortTitle: "Quản lý tệp tin",
    description: "Thực hành trọn vẹn vòng đời của tệp và thư mục trên Windows: tạo mới, đổi tên, sao chép, di chuyển, xóa và khôi phục.",
    objective: "Nắm chắc thao tác quản lý dữ liệu cơ bản, hình thành cấu trúc lưu trữ rõ ràng và biết xử lý an toàn khi xóa hoặc khôi phục tệp.",
    context: "Bài thực hành được thực hiện trong File Explorer với một thư mục riêng. Từng thao tác đều được ghi lại bằng ảnh chụp màn hình để chứng minh quá trình, thay vì chỉ trình bày kết quả cuối.",
    process: [
      "Mở File Explorer bằng tổ hợp Windows + E và chọn vị trí lưu trữ ngoài thư mục hệ thống.",
      "Tạo thư mục thực hành, tạo tệp GhiChu.txt rồi đổi tên thành GhiChuQuanTrong.txt.",
      "Tạo thư mục con TaiLieu và sao chép tệp vào đúng vị trí bằng Copy/Paste.",
      "Tạo tệp DiChuyen.txt, dùng Cut/Paste để phân biệt thao tác di chuyển với sao chép.",
      "Thực hành xóa vào Recycle Bin, xóa vĩnh viễn bằng Shift + Delete và nhận biết sự khác nhau.",
      "Mở Recycle Bin và khôi phục tệp về vị trí ban đầu, sau đó kiểm tra lại cấu trúc thư mục.",
    ],
    tools: ["Windows File Explorer", "Notepad", "Recycle Bin"],
    result: "Hoàn thành đúng chuỗi thao tác quản lý tệp và thư mục, kèm 18 ảnh chụp minh chứng xuyên suốt 10 trang báo cáo.",
    artifacts: [
      "Cấu trúc thư mục thực hành gồm thư mục chính và thư mục con TaiLieu.",
      "Các tệp được tạo, đổi tên, sao chép và di chuyển theo từng tình huống.",
      "Minh chứng thao tác xóa tạm thời, xóa vĩnh viễn và khôi phục dữ liệu.",
    ],
    lessons: "Một quy tắc đặt tên dễ hiểu và thói quen kiểm tra vị trí tệp trước khi xóa giúp hạn chế nhầm lẫn. Recycle Bin là lớp an toàn hữu ích, nhưng không thay thế cho việc tổ chức dữ liệu có chủ đích.",
    tags: ["Nền tảng số", "Dữ liệu"],
    thumbnail: "/artwork/project-01-files.webp",
    document: {
      pdfUrl: "/documents/bai-1-quan-ly-tep.pdf",
      docxUrl: "/documents/bai-1-quan-ly-tep.docx",
      fileName: "Trịnh Thị Kiều Oanh BT1-1.4.docx",
      pages: 10,
    },
    status: "Hoàn thành",
  },
  {
    id: 2,
    slug: "thong-tin-hoc-thuat",
    order: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    shortTitle: "Đánh giá thông tin",
    description: "Xây dựng chiến lược tìm kiếm tài liệu về ứng dụng AI trong kinh doanh và đánh giá nguồn bằng một bộ tiêu chí thống nhất.",
    objective: "Biết xác định phạm vi nghiên cứu, thiết kế từ khóa, tìm trên nhiều cơ sở dữ liệu và đánh giá độ tin cậy trước khi đưa tài liệu vào bài viết.",
    context: "Chủ đề được chọn là ứng dụng trí tuệ nhân tạo trong kinh doanh, tập trung vào phân tích dự báo, hỗ trợ ra quyết định, lợi ích, rào cản và đạo đức dữ liệu trong giai đoạn 2020–2026.",
    process: [
      "Khoanh vùng chủ đề, thời gian và hai ngôn ngữ tìm kiếm là tiếng Việt và tiếng Anh.",
      "Thiết kế các cụm từ khóa như “AI in business analytics”, “Machine learning for decision making” và “Ứng dụng AI trong kinh doanh”.",
      "Tìm kiếm trên Google Scholar, ResearchGate và ScienceDirect; đồng thời tham khảo sách và báo cáo chuyên ngành.",
      "Sàng lọc tài liệu theo tác giả, đơn vị xuất bản, phương pháp, mức độ được trích dẫn và tính cập nhật.",
      "Lập bảng so sánh 10 nguồn, chấm mức độ tin cậy và phân tích điểm mạnh của từng nhóm tài liệu.",
      "Tổng hợp kết luận về cách kết hợp nền tảng học thuật với dữ liệu thị trường một cách thận trọng.",
    ],
    tools: ["Google Scholar", "ResearchGate", "ScienceDirect", "Microsoft Word"],
    result: "Tạo báo cáo 4 trang với bảng đánh giá 10 nguồn theo năm tiêu chí, đồng thời giải thích chiến lược tìm kiếm và cách loại bỏ những nguồn thiếu căn cứ.",
    artifacts: [
      "Bộ từ khóa song ngữ và phạm vi tìm kiếm 2020–2026.",
      "Bảng đánh giá nguồn theo tác giả, nhà xuất bản, phương pháp, trích dẫn và tính cập nhật.",
      "Phần phân tích sự khác nhau giữa bài báo bình duyệt, sách chuyên khảo và báo cáo thị trường.",
    ],
    lessons: "Kết quả đứng đầu chưa chắc là nguồn phù hợp nhất. Một nguồn chỉ thực sự hữu ích khi vừa liên quan đến câu hỏi, vừa có xuất xứ rõ ràng và phương pháp đủ thuyết phục để người đọc kiểm tra lại.",
    tags: ["Nghiên cứu", "Dữ liệu"],
    thumbnail: "/artwork/project-02-research.webp",
    document: {
      pdfUrl: "/documents/bai-2-thong-tin-hoc-thuat.pdf",
      docxUrl: "/documents/bai-2-thong-tin-hoc-thuat.docx",
      fileName: "Trịnh Thị Kiều Oanh Bt2-2.4.docx",
      pages: 4,
    },
    status: "Hoàn thành",
  },
  {
    id: 3,
    slug: "prompt-hoc-tap",
    order: "03",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    shortTitle: "Prompt hiệu quả",
    description: "So sánh ba cấp độ prompt cho ba nhiệm vụ học tập để quan sát cách vai trò, bối cảnh và định dạng đầu ra làm thay đổi câu trả lời của AI.",
    objective: "Biết chuyển một yêu cầu ngắn thành prompt có vai trò, ngữ cảnh, đối tượng và tiêu chí đầu ra rõ ràng; sau đó đánh giá và tiếp tục tinh chỉnh.",
    context: "Ba tình huống được lựa chọn gồm phân tích văn bản pháp luật, giải thích khái niệm tài sản và xây dựng câu hỏi về bảo vệ môi trường. Mỗi tình huống được thử ở mức cơ bản và hai lần nâng cấp.",
    process: [
      "Viết prompt cơ bản để xác định chất lượng đầu ra ban đầu và những điểm còn mơ hồ.",
      "Bổ sung yêu cầu về cấu trúc, ví dụ, độ dài và hình thức trình bày ở phiên bản nâng cấp thứ nhất.",
      "Thiết lập vai trò chuyên môn, bối cảnh, đối tượng người đọc và mục tiêu cụ thể ở phiên bản nâng cấp thứ hai.",
      "Đặt ba phiên bản cạnh nhau để so sánh mức độ chính xác, chuyên sâu, dễ hiểu và khả năng sử dụng ngay.",
      "Khái quát kinh nghiệm theo mô hình CLEAR: Context, Role, Explicit Instruction, Audience và Refine.",
    ],
    tools: ["Công cụ AI tạo sinh", "Mô hình CLEAR", "Microsoft Word"],
    result: "Hoàn thành báo cáo 7 trang gồm ba chuỗi prompt, bảng so sánh kết quả và 12 ảnh chụp minh chứng quá trình tương tác với AI.",
    artifacts: [
      "Ba tình huống học tập với chín phiên bản prompt từ cơ bản đến chuyên sâu.",
      "Bảng so sánh cho thấy tác động của vai trò, bối cảnh, đối tượng và định dạng đầu ra.",
      "Bộ nguyên tắc cá nhân để viết và tinh chỉnh prompt theo mô hình CLEAR.",
    ],
    lessons: "Prompt tốt không phải là prompt dài nhất. Điều quan trọng là người viết hiểu rõ mục tiêu, cung cấp đủ bối cảnh và biết chia yêu cầu phức tạp thành những bước có thể đánh giá được.",
    tags: ["AI", "Tư duy"],
    thumbnail: "/artwork/project-03-prompt.webp",
    document: {
      pdfUrl: "/documents/bai-3-viet-prompt.pdf",
      docxUrl: "/documents/bai-3-viet-prompt.docx",
      fileName: "Trịnh Thị Kiều Oanh BT3-3.4.docx",
      pages: 7,
    },
    status: "Hoàn thành",
  },
  {
    id: 4,
    slug: "hop-tac-truc-tuyen",
    order: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    shortTitle: "Hợp tác trực tuyến",
    description: "Thiết kế quy trình một tuần để nhóm cùng hoàn thành bài thuyết trình và báo cáo về chuyển đổi số trong giảng dạy đại học.",
    objective: "Tổ chức vai trò, tiến độ, tài liệu và giao tiếp của nhóm trên một không gian số chung, giúp mỗi thành viên biết rõ việc cần làm và thời hạn cần hoàn thành.",
    context: "Nhóm thực hiện bài thuyết trình 10 phút và báo cáo 4 trang về tác động của chuyển đổi số tới giảng dạy đại học. Trong phân công cá nhân, Kiều Oanh phụ trách cơ sở lý thuyết và trích dẫn nguồn.",
    process: [
      "Họp khởi động trên Zoom để thống nhất đề tài, sản phẩm, vai trò và mốc thời gian.",
      "Tạo tài liệu chung trên Google Docs để cùng viết, bình luận và theo dõi lịch sử chỉnh sửa.",
      "Tổ chức tệp trên Google Drive, thiết lập quyền truy cập và dùng một liên kết thống nhất cho nhóm.",
      "Mô hình hóa tiến độ bằng các trạng thái To do, In progress, Review và Done; gắn người phụ trách, thời hạn và tài liệu liên quan.",
      "Cập nhật tiến độ hằng ngày, tổng hợp nội dung, hoàn thiện slide, rà soát báo cáo và nộp sản phẩm vào ngày thứ bảy.",
    ],
    tools: ["Zoom", "Google Docs", "Google Drive", "Trello", "Slack"],
    result: "Xây dựng kế hoạch làm việc 7 ngày, phân công rõ trách nhiệm và ghi lại minh chứng về cuộc họp, tài liệu cộng tác cùng không gian lưu trữ của nhóm.",
    artifacts: [
      "Bảng phân công vai trò và lịch trình từ khởi động đến nộp bài.",
      "Minh chứng họp Zoom, chỉnh sửa Google Docs và chia sẻ Google Drive.",
      "Phân tích ưu điểm, hạn chế và cách phối hợp công cụ trong một quy trình thống nhất.",
    ],
    lessons: "Công cụ chỉ phát huy tác dụng khi đi cùng quy ước rõ ràng. Phân vai, một nguồn tài liệu chung, lịch dùng chung và cập nhật ngắn mỗi ngày giúp giảm tình trạng bỏ sót hoặc làm trùng việc.",
    tags: ["Cộng tác", "Dự án"],
    thumbnail: "/artwork/project-04-collaboration.webp",
    document: {
      pdfUrl: "/documents/bai-4-hop-tac-truc-tuyen.pdf",
      docxUrl: "/documents/bai-4-hop-tac-truc-tuyen.docx",
      fileName: "Trịnh Thị Kiều Oanh Bt4-4.4.docx",
      pages: 5,
    },
    status: "Hoàn thành",
  },
  {
    id: 5,
    slug: "ai-tao-sinh",
    order: "05",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    shortTitle: "Sáng tạo với AI",
    description: "Kết hợp AI viết, AI tạo ảnh và AI thiết kế để đi từ ý tưởng ban đầu đến một sản phẩm trình bày hoàn chỉnh có sự biên tập của con người.",
    objective: "Hiểu vai trò riêng của từng công cụ trong quy trình sáng tạo, biết chọn lọc đầu ra và giữ quyền quyết định về nội dung, hình ảnh và thông điệp cuối cùng.",
    context: "Bài tập thử nghiệm ba chặng: xây dựng bản nháp nội dung bằng ChatGPT, tạo các phương án hình ảnh bằng Creative Agent và đưa nội dung đã chọn vào một bộ trình bày 10 slide về Cyber Security bằng Canva AI.",
    process: [
      "Dùng ChatGPT để tạo dàn ý và bản nháp về quan điểm sử dụng mạng xã hội của giới trẻ, sau đó chỉnh độ dài và mạch lập luận.",
      "Yêu cầu Creative Agent tạo bốn phương án hình ảnh cầu thủ nâng cúp với góc máy, ánh sáng và cảm xúc khác nhau.",
      "So sánh các phương án, chọn hình phù hợp và tiếp tục tinh chỉnh những chi tiết phục vụ thông điệp.",
      "Đưa phần chữ và hình đã kiểm tra vào Canva AI để xây dựng bộ 10 slide Cyber Security.",
      "Chỉnh lại bố cục, kích thước, bảng màu và thứ tự nội dung để sản phẩm có phong cách thống nhất.",
      "Đánh giá ưu điểm, giới hạn và rủi ro của từng công cụ trước khi kết luận về vai trò của con người.",
    ],
    tools: ["ChatGPT", "Creative Agent", "Canva AI", "Microsoft Word"],
    result: "Hoàn thành báo cáo 6 trang mô tả quy trình đa công cụ, kèm bốn hình minh chứng và phân tích cụ thể về giá trị lẫn giới hạn của AI trong sáng tạo.",
    artifacts: [
      "Bản nháp nội dung được tạo, kiểm tra và biên tập lại thay vì sử dụng nguyên văn.",
      "Bốn phương án hình ảnh để so sánh và lựa chọn theo tiêu chí thị giác.",
      "Bộ trình bày 10 slide với nội dung, hình ảnh và phong cách được thống nhất trong Canva AI.",
    ],
    lessons: "AI có thể rút ngắn đáng kể giai đoạn thử ý tưởng, nhưng chất lượng cuối cùng vẫn phụ thuộc vào khả năng đặt tiêu chí, chọn lọc, kiểm chứng và biên tập của người sử dụng.",
    tags: ["AI", "Sáng tạo"],
    thumbnail: "/artwork/project-05-creative-ai.webp",
    document: {
      pdfUrl: "/documents/bai-5-sang-tao-voi-ai.pdf",
      docxUrl: "/documents/bai-5-sang-tao-voi-ai.docx",
      fileName: "Trịnh Thị Kiều Oanh Bt5-5.4.docx",
      pages: 6,
    },
    status: "Hoàn thành",
  },
  {
    id: 6,
    slug: "ai-co-trach-nhiem",
    order: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    shortTitle: "AI có trách nhiệm",
    description: "Phân tích ranh giới giữa hỗ trợ và gian lận, kiểm chứng một bài viết có AI hỗ trợ, rồi xây dựng sáu nguyên tắc sử dụng AI cho bản thân.",
    objective: "Biết khai báo việc sử dụng AI, kiểm chứng đầu ra, bảo vệ dữ liệu và giữ đóng góp trí tuệ của người học trong mọi sản phẩm học thuật.",
    context: "Bài tập lấy chủ đề học phần VNU1001 tại Đại học Quốc gia Hà Nội làm tình huống thực hành. AI được dùng để tổng hợp, lập dàn ý và tạo bản nháp; người viết đánh giá, bổ sung dẫn chứng, chỉnh giọng văn và công khai mức độ hỗ trợ.",
    process: [
      "Tổng hợp thông tin về mục tiêu, cấu trúc và ý nghĩa của học phần VNU1001 từ các nguồn liên quan.",
      "Thiết kế chuỗi bốn prompt: tóm tắt thông tin, lập dàn ý, viết bản nháp và gợi ý chỉnh sửa.",
      "Đánh giá điểm mạnh, điểm hạn chế và những câu mang tính chung chung trong đầu ra của AI.",
      "Bổ sung dẫn chứng, góc nhìn cá nhân, chỉnh lại câu chữ và ghi rõ phần việc AI đã hỗ trợ.",
      "Phân tích liêm chính học thuật, sở hữu trí tuệ, trích dẫn, nguy cơ phụ thuộc và tác động tới kỹ năng.",
      "Xây dựng sáu nguyên tắc cá nhân để điều chỉnh cách sử dụng AI theo từng bối cảnh học tập.",
    ],
    tools: ["Grok (xAI)", "Microsoft Word", "Nguồn thông tin chính thức"],
    result: "Hoàn thành báo cáo 9 trang, trong đó có bài luận trước và sau chỉnh sửa, phần khai báo sử dụng AI, phân tích ba nhóm vấn đề đạo đức và bộ sáu nguyên tắc cá nhân.",
    artifacts: [
      "Chuỗi prompt và bản nháp AI được lưu lại để quá trình có thể kiểm tra.",
      "Bản cuối đã bổ sung dẫn chứng, góc nhìn cá nhân và tuyên bố mức độ hỗ trợ của AI.",
      "Sáu nguyên tắc: minh bạch, AI không phải tác giả, kiểm chứng, phát triển kỹ năng, tôn trọng sở hữu trí tuệ và tuân thủ quy định.",
    ],
    lessons: "Trách nhiệm không dừng ở việc ghi tên công cụ. Người học phải hiểu, kiểm tra và chịu trách nhiệm với từng lập luận; AI nên mở rộng năng lực tư duy chứ không thay thế quá trình tư duy.",
    tags: ["AI", "Đạo đức số"],
    thumbnail: "/artwork/project-06-responsible-ai.webp",
    document: {
      pdfUrl: "/documents/bai-6-ai-co-trach-nhiem.pdf",
      docxUrl: "/documents/bai-6-ai-co-trach-nhiem.docx",
      fileName: "Trịnh Thị Kiều Oanh BT6-6.4.docx",
      pages: 9,
    },
    status: "Hoàn thành",
  },
];
