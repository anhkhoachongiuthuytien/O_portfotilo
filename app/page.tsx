import Image from "next/image";
import { Sparkles } from "lucide-react";
import { profile, siteContent } from "@/src/data/portfolio";
import { Reveal } from "@/src/components/VisualEffects";
import { ConstellationSkills, LivingEarth, MagneticLink, SolarFlareButton } from "@/src/components/SectionSignatures";

const skills = [
  { name: "Tổ chức dữ liệu", detail: "Quản lý tệp có cấu trúc, đặt tên rõ ràng và biết khôi phục khi cần." },
  { name: "Tư duy thông tin", detail: "Thiết kế từ khóa, đối chiếu và đánh giá nguồn trước khi sử dụng." },
  { name: "Làm việc cùng AI", detail: "Viết prompt có bối cảnh, kiểm chứng và biên tập đầu ra." },
  { name: "Cộng tác có trách nhiệm", detail: "Phân vai, chia sẻ tiến độ và minh bạch đóng góp của công cụ." },
];

export default function Home() {
  return (
    <>
      <section className="thematic-section theme-hero relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-32 md:pt-36">
        <div className="container home-hero-grid grid gap-10">
          <div className="hero-copy">
            <Reveal><p className="eyebrow">Digital portfolio {siteContent.portfolioYear}</p></Reveal>
            <Reveal delay={.08}><h1 className="hero-title mt-7">Từ thao tác số đến <em>tư duy có trách nhiệm.</em></h1></Reveal>
            <Reveal delay={.16}><p className="muted mt-8 max-w-[55ch] text-base leading-8 md:text-lg">Mình là {profile.name}, sinh viên ngành {profile.major}. Đây là hành trình mình học cách tổ chức dữ liệu, kiểm chứng thông tin, cộng tác và sử dụng AI có chủ đích.</p></Reveal>
            <Reveal delay={.24}><div className="mt-9 flex flex-wrap gap-3"><MagneticLink href="/projects" className="btn-primary">Khám phá dự án</MagneticLink><a href="#about" className="btn">Tìm hiểu về mình</a></div></Reveal>
          </div>
          <Reveal className="hero-visual" delay={.12}>
            <SolarFlareButton />
            <div className="orbit-ring" />
            <div className="portrait-frame card-shell">
              <div className="card-core overflow-hidden p-2"><Image src={profile.avatar} alt={`Ảnh đại diện của ${profile.name}`} width={680} height={850} priority className="aspect-[4/5] w-full rounded-[18px] object-cover" /></div>
            </div>
            <div className="hero-note"><div className="flex items-center justify-between text-sm font-semibold"><span>Một lát cắt cá nhân</span><Sparkles size={16} className="text-[var(--accent)]" strokeWidth={1.5} /></div><p className="muted mt-2 text-xs leading-5">Ngoài giờ học, mình yêu thích {profile.interests.join(" và ").toLowerCase()}.</p></div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="thematic-section theme-earth section">
        <LivingEarth />
        <div className="container home-about-grid grid gap-14">
          <Reveal><p className="eyebrow">Về mình</p><h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-.06em] md:text-6xl">Một portfolio để thấy mình <span className="text-[var(--accent)]">học như thế nào.</span></h2></Reveal>
          <Reveal delay={.1}><div className="space-y-8"><p className="max-w-2xl text-xl leading-9 text-[var(--muted-strong)]">{profile.bio}</p><div className="feature-grid"><div className="card-shell"><div className="card-core h-full p-6 md:p-8"><p className="text-sm font-semibold text-[var(--accent)]">Mục tiêu của portfolio</p><p className="mt-5 max-w-md text-2xl font-semibold leading-tight">Lưu lại sản phẩm, giải thích quá trình và tự đánh giá điều mình thực sự học được.</p></div></div><div className="card-shell"><div className="card-core h-full p-6"><p className="muted text-xs uppercase tracking-[.16em]">Thông tin</p><div className="mt-5"><div className="stat-line"><span className="muted text-sm">Mã sinh viên</span><strong className="text-right text-sm">{profile.studentId}</strong></div><div className="stat-line"><span className="muted text-sm">Lớp</span><strong className="text-right text-sm">{profile.className}</strong></div><div className="stat-line"><span className="muted text-sm">Khoa</span><strong className="text-right text-sm">{profile.major}</strong></div><div className="stat-line"><span className="muted text-sm">Trường</span><strong className="text-right text-sm">{profile.school}</strong></div><div className="stat-line"><span className="muted text-sm">Sở thích</span><strong className="text-right text-sm">{profile.interests.join(", ")}</strong></div></div></div></div></div></div></Reveal>
        </div>
      </section>

      <section className="thematic-section theme-cyan section border-y border-white/10">
        <div className="container home-skills-grid grid gap-14">
          <Reveal><p className="eyebrow">Mục tiêu học tập</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.06em] md:text-6xl">Không chỉ biết dùng, mà còn <span className="text-[var(--accent)]">biết vì sao.</span></h2><p className="muted mt-6 max-w-md leading-7">{profile.learningGoals}</p><p className="muted mt-4 max-w-md text-sm leading-7">Định hướng tiếp theo: {profile.careerDirection}</p></Reveal>
          <ConstellationSkills skills={skills} />
        </div>
      </section>

      <section className="thematic-section theme-sun section pt-4">
        <div className="container">
          <Reveal><div className="card-shell solar-corona-card"><div className="card-core relative overflow-hidden p-8 md:p-16"><div className="solar-corona-glow" /><p className="eyebrow">Điểm tiếp theo</p><h2 className="relative mt-5 max-w-3xl text-4xl font-semibold tracking-[-.07em] md:text-7xl">Đọc trọn vẹn <span className="text-[var(--accent)]">sáu hồ sơ bài tập.</span></h2><p className="muted relative mt-6 max-w-xl leading-7">Mỗi hồ sơ có nội dung đã biên tập, minh chứng và file bài nộp đầy đủ hiển thị trực tiếp.</p><MagneticLink href="/projects" className="btn-primary relative mt-8">Khám phá dự án</MagneticLink></div></div></Reveal>
        </div>
      </section>
    </>
  );
}
