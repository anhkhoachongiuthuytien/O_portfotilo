import { PlanetLegend } from "@/src/components/PlanetLegend";
import { ProjectExplorer } from "@/src/components/ProjectExplorer";
import { MagneticLink } from "@/src/components/SectionSignatures";
import { Reveal } from "@/src/components/VisualEffects";
import { projects } from "@/src/data/portfolio";

const projectStats = [
  { value: String(projects.length).padStart(2, "0"), label: "hồ sơ hoàn chỉnh" },
  { value: String(projects.reduce((total, project) => total + project.document.pages, 0)), label: "trang bài nộp" },
  { value: "03", label: "trục năng lực" },
];

export default function Projects() {
  return (
    <>
      <section className="thematic-section theme-earth projects-page section pt-0">
        <div className="planet-focus-hero">
          <div className="container planet-focus-grid">
          <Reveal className="planet-focus-copy">
            <p className="eyebrow">06 bài tập thành phần</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.08em] md:text-7xl">
              Từ thao tác đến <span className="text-[var(--accent)]">năng lực số.</span>
            </h1>
            <p className="muted mt-7 max-w-md text-base leading-7 md:text-lg md:leading-8">
              Mỗi hồ sơ ghi lại mục tiêu, quy trình, công cụ, kết quả và toàn bộ bài nộp gốc — có thể đọc trực tiếp ngay trên website.
            </p>
            <div className="projects-hero-stats" aria-label="Tổng quan hồ sơ">
              {projectStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </Reveal>
          <Reveal className="planet-focus-legend" delay={.14}><PlanetLegend /></Reveal>
          </div>
        </div>
        <div className="container planet-content-deck">
          <ProjectExplorer />
        </div>
      </section>

      <section className="thematic-section theme-saturn projects-next-chapter section pt-4">
        <div className="container">
          <Reveal>
            <div className="card-shell">
              <div className="card-core relative overflow-hidden p-8 md:p-14">
                <p className="eyebrow">Nhìn lại hành trình</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.06em] md:text-6xl">
                  Sáu bài tập đã thay đổi <span className="text-[var(--accent)]">cách mình học.</span>
                </h2>
                <p className="muted mt-6 max-w-xl leading-7">
                  Đi tiếp đến phần tổng kết để xem những thay đổi trong cách tổ chức dữ liệu, đánh giá nguồn, hợp tác và sử dụng AI có trách nhiệm.
                </p>
                <MagneticLink href="/reflection" className="btn-primary mt-8">
                  Đọc tổng kết
                </MagneticLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
