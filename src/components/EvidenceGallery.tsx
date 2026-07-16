"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { EvidenceImage } from "@/src/data/portfolio";

export function EvidenceGallery({ items }: { items: EvidenceImage[] }) {
  const [active, setActive] = useState<EvidenceImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [active]);

  return (
    <div className="evidence-gallery-shell">
      <div className="evidence-gallery-intro">
        <div>
          <span className="evidence-gallery-kicker">Ảnh minh chứng trực tiếp</span>
          <p>Ảnh được tách từ file Word gốc để tránh lớp nén của PDF. Chọn một ảnh để xem lớn hơn.</p>
        </div>
        <span className="evidence-gallery-count">{items.length.toString().padStart(2, "0")} ảnh</span>
      </div>

      <div className="evidence-gallery">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="evidence-thumb card-shell"
            onClick={(event) => { triggerRef.current = event.currentTarget; setActive(item); }}
            aria-label={`Mở ảnh minh chứng ${index + 1}: ${item.caption}`}
          >
            <span className="evidence-thumb-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="evidence-thumb-image">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                quality={100}
                unoptimized
                loading="lazy"
              />
            </span>
            <span className="evidence-thumb-caption">{item.caption}</span>
            <span className="evidence-thumb-expand" aria-hidden="true"><Expand size={14} strokeWidth={1.5} /></span>
          </button>
        ))}
      </div>

      {active ? (
        <div className="evidence-lightbox" role="dialog" aria-modal="true" aria-label={active.caption} onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
          <div className="evidence-lightbox-panel">
            <div className="evidence-lightbox-toolbar">
              <span>{active.caption}</span>
              <button ref={closeButtonRef} type="button" className="icon-button" onClick={() => setActive(null)} aria-label="Đóng ảnh minh chứng"><X size={18} strokeWidth={1.5} /></button>
            </div>
            <div className="evidence-lightbox-image">
              <Image src={active.src} alt={active.alt} width={active.width} height={active.height} quality={100} unoptimized priority />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
