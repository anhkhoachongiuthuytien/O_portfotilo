import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/src/data/portfolio";
import { DocumentViewer } from "@/src/components/DocumentViewer";
import { ProjectTableOfContents } from "@/src/components/ProjectTableOfContents";
import { Reveal } from "@/src/components/VisualEffects";
import { getPlanetForDetail } from "@/src/data/planets";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const planet = getPlanetForDetail(project.id);
  const title = `${project.title} | ${planet.label}`;
  const description = `${project.description} Xem trực tiếp bài nộp ${project.document.pages} trang.`;
  const url = `/projects/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];
  const planet = getPlanetForDetail(project.id);

  return (
    <section className={`thematic-section project-detail-shell theme-planet ${planet.className} section pt-36 md:pt-44`}>
      <div className="container">
        <div className="project-detail-breadcrumb">
          <Link href="/projects" className="detail-back-link"><ArrowLeft size={15} strokeWidth={1.5} /> Tất cả dự án</Link>
          <span className="detail-breadcrumb-line" aria-hidden="true" />
          <span className="detail-breadcrumb-label">Bài {project.order} / 06</span>
        </div>
        <div className="project-detail-layout mt-10 grid gap-12">
          <article>
            <Reveal>
              <div className="project-detail-hero-grid">
                <div>
                  <div className={`project-detail-planet-label ${planet.className}`}><span className="planet-chip-orb" /> {planet.label}<span className="project-detail-planet-note">{planet.note}</span></div>
                  <p className="eyebrow mt-5">{project.tags.join(" / ")} / Bài {project.order}</p>
                  <h1 className="project-detail-title mt-6 font-semibold tracking-[-.075em]">{project.title}</h1>
                  <p className="muted mt-7 max-w-2xl text-lg leading-8">{project.description}</p>
                  <div className="project-detail-facts" aria-label="Thông tin nhanh về bài tập">
                    <div><span>Mục tiêu</span><strong>{project.objective}</strong></div>
                    <div><span>Hồ sơ</span><strong><i aria-hidden="true" /> {project.status}<br />{project.document.pages} trang</strong></div>
                  </div>
                </div>
                <div className={`project-detail-planet-card ${planet.className}`}>
                  <span className="project-detail-planet-index">{project.order} / 06</span>
                  <Image src={`/planets/${planet.name.toLowerCase()}.webp`} alt={`Hành tinh ${planet.label}`} width={420} height={420} className="project-detail-planet-image" />
                  <span className="project-detail-planet-caption">Tọa độ nội dung<br /><b>{planet.label}</b></span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={.08}><figure className="project-detail-artwork relative mt-12 overflow-hidden rounded-[24px] border border-white/10"><Image src={project.thumbnail} alt={`Ảnh bìa của ${project.shortTitle}`} width={1600} height={800} className="aspect-[16/8] w-full object-cover" /><figcaption className="muted relative z-10 p-3 text-xs">Ảnh bìa chủ đề · {planet.label}: {planet.note}. Minh chứng đầy đủ nằm trong tài liệu bài nộp bên dưới.</figcaption></figure></Reveal>
            <div className="mt-14 space-y-14">
              <DetailSection id="objective" number="01" title="Mục tiêu"><p>{project.objective}</p></DetailSection>
              <DetailSection id="context" number="02" title="Bối cảnh"><p>{project.context}</p></DetailSection>
              <DetailSection id="process" number="03" title="Quá trình thực hiện"><ol className="detail-process-list">{project.process.map((item, itemIndex) => <li key={item}><span className="detail-process-number">0{itemIndex + 1}</span><span>{item}</span></li>)}</ol></DetailSection>
              <DetailSection id="tools" number="04" title="Công cụ đã sử dụng"><div className="detail-tool-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></DetailSection>
              <DetailSection id="result" number="05" title="Kết quả và minh chứng"><p>{project.result}</p><ul className="detail-artifact-list">{project.artifacts.map((artifact) => <li key={artifact}>{artifact}</li>)}</ul></DetailSection>
              <DetailSection id="lessons" number="06" title="Bài học rút ra"><p>{project.lessons}</p></DetailSection>
              <DetailSection id="document" number="07" title="Bài nộp đầy đủ" wide><DocumentViewer document={project.document} title={project.title} /></DetailSection>
            </div>
            <nav className="detail-project-nav mt-20" aria-label="Điều hướng giữa các bài tập">{previous ? <Link href={`/projects/${previous.slug}`} className="detail-project-nav-link is-previous"><span><ArrowLeft size={16} strokeWidth={1.5} /> Bài trước</span><strong>{previous.shortTitle}</strong></Link> : <span className="detail-project-nav-space" />}{next ? <Link href={`/projects/${next.slug}`} className="detail-project-nav-link is-next"><span>Bài tiếp theo <ArrowRight size={16} strokeWidth={1.5} /></span><strong>{next.shortTitle}</strong></Link> : <span className="detail-project-nav-space" />}</nav>
          </article>
          <aside className="project-detail-aside"><ProjectTableOfContents /></aside>
        </div>
      </div>
    </section>
  );
}

function DetailSection({ id, number, title, children, wide = false }: { id: string; number: string; title: string; children: React.ReactNode; wide?: boolean }) {
  return <section id={id} className="detail-section scroll-mt-32"><div className="detail-section-heading"><span>{number}</span><h2>{title}</h2></div><div className={`detail-section-body ${wide ? "detail-section-body-wide" : ""}`}>{children}</div></section>;
}
