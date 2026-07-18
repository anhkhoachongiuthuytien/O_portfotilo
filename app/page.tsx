import Image from "next/image";
import { Sparkles } from "lucide-react";
import { profile, siteContent } from "@/src/data/portfolio";
import { Reveal } from "@/src/components/VisualEffects";
import { LivingEarth, MagneticLink, SolarFlareButton } from "@/src/components/SectionSignatures";

const learningPriorities = [
  { label: "Tổ chức", detail: "Sắp xếp dữ liệu và ghi chú theo một cấu trúc dễ tìm lại." },
  { label: "Kiểm chứng", detail: "Đối chiếu nguồn và kiểm tra dữ kiện trước khi sử dụng." },
  { label: "Trình bày", detail: "Diễn đạt rõ ý, có căn cứ và tự rà soát trước khi nộp." },
];

const developmentPillars = [
  "Năng lực ngoại ngữ",
  "Giao tiếp liên văn hóa",
  "Làm việc trong môi trường số",
];

const portfolioTopics = [
  "Quản lý tệp tin",
  "Nghiên cứu học thuật",
  "Viết prompt hiệu quả",
  "Cộng tác trực tuyến",
  "Sáng tạo cùng AI",
  "AI có trách nhiệm",
];

export default function Home() {
  return (
    <>
      <section className="thematic-section theme-hero relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-32 md:pt-36">
        <div className="container home-hero-grid grid gap-10">
          <div className="hero-copy">
            <Reveal><p className="eyebrow">Digital portfolio {siteContent.portfolioYear}</p></Reveal>
            <Reveal delay={0.08}><h1 className="hero-title mt-7">Từ thao tác số đến <em>tư duy có trách nhiệm.</em></h1></Reveal>
            <Reveal delay={0.16}><p className="muted mt-8 max-w-[55ch] text-base leading-8 md:text-lg">Mình là {profile.name}, sinh viên Khoa {profile.major}. Đây là hành trình mình kết nối năng lực ngoại ngữ với cách tổ chức dữ liệu, kiểm chứng thông tin, cộng tác và sử dụng AI có chủ đích.</p></Reveal>
            <Reveal delay={0.24}><div className="mt-9 flex flex-wrap gap-3"><MagneticLink href="/projects" className="btn-primary">Khám phá dự án</MagneticLink><a href="#about" className="btn">Tìm hiểu về mình</a></div></Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.12}>
            <SolarFlareButton />
            <div className="orbit-ring" />
            <div className="portrait-frame card-shell">
              <div className="card-core overflow-hidden p-2"><Image src={profile.avatar} alt={`Ảnh đại diện của ${profile.name}`} width={680} height={850} priority className="aspect-[4/5] w-full rounded-[18px] object-cover" /></div>
            </div>
            <div className="hero-note"><div className="flex items-center justify-between text-sm font-semibold"><span>Một lát cắt cá nhân</span><Sparkles size={16} className="text-[var(--accent)]" strokeWidth={1.5} /></div><p className="muted mt-2 text-xs leading-5">Âm nhạc và múa giúp mình giữ nhịp sáng tạo ngoài giờ học.</p></div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="thematic-section theme-earth section home-introduction-section">
        <LivingEarth />
        <div className="container">
          <div className="home-intro-composition">
            <Reveal className="home-intro-main">
              <p className="eyebrow">Chân dung học tập</p>
              <h2 className="home-chapter-title">Giới thiệu ngắn</h2>
              <p className="home-intro-lead">{profile.bio}</p>
              <div className="home-interests" aria-label="Sở thích cá nhân">
                <span className="home-interests-label">Nguồn năng lượng ngoài giờ học</span>
                {profile.interests.map((interest) => <span className="home-interest" key={interest}>{interest}</span>)}
              </div>
            </Reveal>

            <Reveal className="home-profile-index" delay={0.1}>
              <p className="home-index-label">Hồ sơ học tập</p>
              <dl className="home-profile-list">
                <div><dt>Mã sinh viên</dt><dd>{profile.studentId}</dd></div>
                <div><dt>Lớp</dt><dd>{profile.className}</dd></div>
                <div><dt>Khoa</dt><dd>{profile.major}</dd></div>
                <div><dt>Trường</dt><dd>{profile.school}</dd></div>
              </dl>
              <p className="home-profile-note">Mình xem mỗi bài thực hành như một bước nhỏ để hình thành cách học rõ ràng, chủ động và có trách nhiệm hơn.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="thematic-section theme-cyan section home-development-section border-y border-white/10">
        <div className="container">
          <Reveal className="home-development-heading">
            <p className="eyebrow">Quỹ đạo phát triển</p>
            <h2>Học ngoại ngữ trong một môi trường <span>đang đổi mới.</span></h2>
            <p>Đích đến của mình không chỉ là sử dụng được công cụ, mà là biết chọn công cụ phù hợp và chịu trách nhiệm với kết quả mình tạo ra.</p>
          </Reveal>

          <div className="home-development-grid">
            <Reveal className="home-learning-chapter" delay={0.08}>
              <article>
                <header className="home-chapter-header"><span className="home-chapter-orb" aria-hidden="true" /><div><p>Trọng tâm hiện tại</p><h3>Mục tiêu học tập</h3></div></header>
                <p className="home-chapter-copy">{profile.learningGoals}</p>
                <ul className="learning-priority-list">
                  {learningPriorities.map((priority) => <li key={priority.label}><span>{priority.label}</span><p>{priority.detail}</p></li>)}
                </ul>
              </article>
            </Reveal>

            <Reveal className="home-direction-chapter" delay={0.16}>
              <article>
                <header className="home-chapter-header"><span className="home-chapter-orb" aria-hidden="true" /><div><p>Đường dài</p><h3>Định hướng phát triển</h3></div></header>
                <p className="home-chapter-copy">{profile.careerDirection}</p>
                <ul className="development-pillar-list">
                  {developmentPillars.map((pillar) => <li key={pillar}><i aria-hidden="true" /><span>{pillar}</span></li>)}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="thematic-section theme-sun section home-portfolio-purpose">
        <div className="container">
          <Reveal>
            <div className="portfolio-purpose-layout">
              <div className="portfolio-purpose-copy">
                <p className="eyebrow">Hồ sơ năng lực số</p>
                <h2>Mục tiêu của <span>Portfolio</span></h2>
                <p>{profile.portfolioPurpose}</p>
                <MagneticLink href="/projects" className="btn-primary">Mở sáu hồ sơ bài tập</MagneticLink>
              </div>

              <div className="portfolio-topic-map" aria-label="Sáu nội dung chính của portfolio">
                <div className="portfolio-topic-core" aria-hidden="true"><strong>06</strong><span>hồ sơ</span></div>
                <ol className="portfolio-topic-list">
                  {portfolioTopics.map((topic, index) => <li className={`portfolio-topic-${index + 1}`} key={topic}><span>{String(index + 1).padStart(2, "0")}</span><p>{topic}</p></li>)}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
