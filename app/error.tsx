"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Portfolio route error", error); }, [error]);
  return <main className="thematic-section theme-warning section error-state" role="alert"><div className="container"><p className="eyebrow">Có lỗi xảy ra</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.07em] md:text-7xl">Trang cần một lần thử lại.</h1><p className="muted mt-5 max-w-xl leading-7">Nội dung chưa thể tải ngay lúc này. Bạn có thể thử lại hoặc quay về trang chủ.</p><div className="mt-8 flex flex-wrap gap-3"><button type="button" className="btn btn-primary" onClick={() => reset()}>Thử lại</button><Link className="btn" href="/">Về trang chủ</Link></div></div></main>;
}
