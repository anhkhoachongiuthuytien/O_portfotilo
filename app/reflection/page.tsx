import Link from "next/link";
import { ArrowRight, Check, Compass, Layers3, Search, ShieldCheck } from "lucide-react";
import { Reveal } from "@/src/components/VisualEffects";
import { PlanetLegend } from "@/src/components/PlanetLegend";
import { SaturnMilestone } from "@/src/components/SectionSignatures";

const journey = [
  {
    title: "Tạo nền tảng có trật tự",
    detail: "Bài 1 và 2 giúp mình nhận ra kỹ năng số bắt đầu từ những việc rất cụ thể: biết dữ liệu nằm ở đâu, đặt tên thế nào và dựa vào tiêu chí nào để tin một nguồn.",
    icon: Layers3,
  },
  {
    title: "Biến công cụ thành quy trình",
    detail: "Từ Bài 3 đến Bài 5, mình học cách viết yêu cầu rõ hơn, phân công công việc minh bạch và kết hợp nhiều công cụ mà vẫn giữ quyền lựa chọn cuối cùng.",
    icon: Search,
  },
  {
    title: "Đặt trách nhiệm ở trung tâm",
    detail: "Bài 6 khiến mình nhìn lại ranh giới giữa hỗ trợ và phụ thuộc. Minh bạch, kiểm chứng và đóng góp cá nhân trở thành ba câu hỏi phải trả lời trước khi nộp bài.",
    icon: ShieldCheck,
  },
];

const challenges = [
  {
    title: "Quá nhiều kết quả nhưng chưa chắc đáng tin",
    solution: "Mình thu hẹp phạm vi, thiết kế từ khóa song ngữ và đánh giá nguồn theo tác giả, đơn vị xuất bản, phương pháp, trích dẫn và tính cập nhật.",
  },
  {
    title: "Công việc nhóm dễ rời rạc khi mỗi người dùng một kênh",
    solution: "Nhóm thống nhất vai trò, một nơi lưu tài liệu, lịch bảy ngày và nhịp cập nhật ngắn để mọi người nhìn thấy cùng một tiến độ.",
  },
  {
    title: "Đầu ra AI nhanh nhưng đôi khi chung chung",
    solution: "Mình so sánh nhiều phiên bản prompt, thêm bối cảnh và tiêu chí, sau đó kiểm tra, viết lại bằng giọng của mình và khai báo phần AI hỗ trợ.",
  },
];

export default function Reflection() {
  return (
    <section className="thematic-section theme-saturn reflection-page section pt-0">
      <div className="planet-focus-hero">
        <div className="container planet-focus-grid">
          <Reveal className="planet-focus-copy">
            <p className="eyebrow">Tổng kết hành trình</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.08em] md:text-7xl">Điều còn lại sau <span className="text-[var(--accent)]">sáu bài tập.</span></h1>
            <p className="muted mt-7 max-w-md text-base leading-7 md:text-lg md:leading-8">Một bản tự đánh giá về kiến thức, thói quen và trách nhiệm của mình khi học tập trong môi trường số.</p>
            <div className="reflection-hero-stats" aria-label="Tổng quan quá trình học">
              <div><strong>06</strong><span>bài đã hoàn thành</span></div>
              <div><strong>41</strong><span>trang minh chứng</span></div>
              <div><strong>01</strong><span>quy trình cá nhân</span></div>
            </div>
          </Reveal>
          <Reveal className="planet-focus-legend" delay={.14}><PlanetLegend /></Reveal>
        </div>
      </div>

      <div className="container planet-content-deck">
        <div className="reflection-summary-grid mt-20 grid gap-16">
          <Reveal>
            <div className="reflection-summary-sticky">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--accent)]">Bài học lớn nhất</p>
              <p className="mt-5 text-3xl font-semibold leading-tight tracking-[-.05em] md:text-5xl">Công cụ chỉ có giá trị khi mình hiểu mục tiêu, kiểm tra đầu ra và chịu trách nhiệm với lựa chọn cuối cùng.</p>
            </div>
          </Reveal>
          <div className="space-y-7 text-lg leading-8 text-[var(--muted-strong)]">
            <Reveal delay={.08}><p>Trước môn học, mình thường nghĩ kỹ năng số chủ yếu là biết sử dụng một phần mềm. Sau sáu bài tập, mình hiểu nó là cả một chuỗi năng lực liên kết: tổ chức dữ liệu, tìm đúng nguồn, đặt câu hỏi rõ, phối hợp với người khác, biên tập sản phẩm và bảo vệ tính trung thực của bài làm.</p></Reveal>
            <Reveal delay={.14}><p>Điều mình tâm đắc nhất là tốc độ không còn là tiêu chí duy nhất. AI có thể tạo bản nháp nhanh, nhưng một sản phẩm đáng tin vẫn cần góc nhìn cá nhân, nguồn có thể kiểm tra và những quyết định mà mình giải thích được.</p></Reveal>
            <Reveal delay={.2}><p>Portfolio cũng giúp mình nhìn thấy quá trình thay vì chỉ nhìn kết quả. Khi đặt các bài cạnh nhau, mình nhận ra mỗi kỹ năng nhỏ đều chuẩn bị cho bước tiếp theo: tệp được tổ chức tốt giúp cộng tác tốt hơn; nguồn được kiểm chứng giúp prompt và nội dung chính xác hơn; còn minh bạch giúp việc dùng AI trở nên có trách nhiệm.</p></Reveal>
          </div>
        </div>

        <div className="reflection-journey mt-24">
          {journey.map(({ title, detail, icon: Icon }, index) => (
            <Reveal key={title} delay={index * .08}>
              <article className="card-shell saturn-journey-card h-full">
                <div className="card-core h-full p-6 md:p-7">
                  <SaturnMilestone index={index + 1} />
                  <Icon size={18} className="mt-6 text-[var(--accent)]" strokeWidth={1.5} />
                  <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                  <p className="muted mt-3 text-sm leading-7">{detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <section className="reflection-challenge-panel card-shell" aria-labelledby="challenge-heading">
            <div className="card-core p-7 md:p-10">
              <div className="reflection-challenge-heading">
                <div>
                  <p className="eyebrow">Khó khăn và cách giải quyết</p>
                  <h2 id="challenge-heading" className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-.05em] md:text-5xl">Không né tránh điểm khó, mà biến chúng thành một quy trình rõ hơn.</h2>
                </div>
                <Compass size={34} strokeWidth={1.25} className="text-[var(--accent)]" aria-hidden="true" />
              </div>
              <div className="reflection-challenge-list">
                {challenges.map((item, index) => (
                  <article className="reflection-challenge-row" key={item.title}>
                    <span>0{index + 1}</span>
                    <div><h3>{item.title}</h3><p>{item.solution}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <div className="reflection-direction-grid mt-24 grid gap-8">
          <Reveal>
            <section className="card-shell h-full">
              <div className="card-core h-full p-7 md:p-9">
                <p className="eyebrow">Trước và sau môn học</p>
                <div className="mt-8 space-y-5">
                  <SkillRow label="Dữ liệu" before="Lưu theo thói quen" after="Có cấu trúc và quy tắc" />
                  <SkillRow label="Nguồn tin" before="Ưu tiên kết quả đầu" after="Đánh giá bằng tiêu chí" />
                  <SkillRow label="Prompt" before="Hỏi một câu ngắn" after="Có vai trò và bối cảnh" />
                  <SkillRow label="AI" before="Chú ý đầu ra" after="Kiểm chứng cả quá trình" />
                </div>
              </div>
            </section>
          </Reveal>
          <Reveal delay={.1}>
            <section className="card-shell h-full">
              <div className="card-core h-full p-7 md:p-9">
                <p className="eyebrow">Hướng ứng dụng tiếp theo</p>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-.05em]">Đưa kỹ năng số vào việc học ngoại ngữ một cách có chọn lọc.</h2>
                <p className="muted mt-5 leading-7">Trong thời gian tới, mình muốn áp dụng quy trình tìm và đánh giá nguồn cho các bài nghiên cứu về ngôn ngữ, dùng AI để luyện diễn đạt hoặc tạo phương án học tập, đồng thời vẫn tự kiểm tra sắc thái, ngữ cảnh văn hóa và độ chính xác trước khi sử dụng.</p>
                <p className="muted mt-4 leading-7">Với dự án nhóm, mình sẽ tiếp tục dùng không gian tài liệu chung, phân vai rõ và ghi lại phiên bản. Với AI, mình giữ sáu nguyên tắc cá nhân như một bộ kiểm tra trước khi nộp bất kỳ sản phẩm học thuật nào.</p>
                <Link href="/projects" className="btn btn-primary mt-8">Xem lại toàn bộ dự án <span className="btn-icon"><ArrowRight size={15} strokeWidth={1.5} /></span></Link>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ label, before, after }: { label: string; before: string; after: string }) {
  return <div className="grid grid-cols-[72px_1fr] gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"><span className="text-sm font-semibold text-[var(--accent)]">{label}</span><div className="grid gap-2 text-sm sm:grid-cols-2"><span className="muted">{before}</span><span className="inline-flex items-center gap-2 text-[var(--muted-strong)]"><Check size={14} className="text-[var(--accent)]" strokeWidth={1.5} />{after}</span></div></div>;
}
