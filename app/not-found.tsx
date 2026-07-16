import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return <section className="thematic-section theme-redshift section flex min-h-[72dvh] items-center"><div className="container"><p className="eyebrow">Không tìm thấy trang</p><h1 className="mt-6 max-w-3xl text-6xl font-semibold tracking-[-.08em] md:text-8xl">Đường dẫn này đã trôi vào <span className="text-[var(--accent)]">vũ trụ.</span></h1><p className="muted mt-6 max-w-lg leading-7">Trang bạn tìm không tồn tại hoặc đã được di chuyển. Hãy quay về điểm bắt đầu.</p><Link className="btn btn-primary mt-8" href="/">Về trang chủ <span className="btn-icon"><ArrowRight size={15} strokeWidth={1.5} /></span></Link></div></section>;
}
