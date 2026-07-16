import { ImageResponse } from "next/og";
import { profile, siteContent } from "@/src/data/portfolio";

export const alt = `${profile.name} | Digital Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#080812",
          color: "#f7f5ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-120px -40px -80px 480px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 45% 45%, #fff1a9 0 3%, #f7b84f 17%, #cf5b25 37%, rgba(207,91,37,.18) 58%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 76% 48%, rgba(255,190,82,.16), transparent 40%), linear-gradient(120deg, rgba(8,8,18,.2), #080812 72%)",
          }}
        />
        <div style={{ display: "flex", width: "100%", padding: "74px 78px", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#ffd17c", fontSize: 24, letterSpacing: 3 }}>
            <span style={{ display: "flex", width: 18, height: 18, borderRadius: "50%", background: "#ffd17c", boxShadow: "0 0 30px rgba(255,209,124,.7)" }} />
            DIGITAL PORTFOLIO {siteContent.portfolioYear}
          </div>
          <div style={{ display: "flex", maxWidth: 760, flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -5, fontWeight: 700 }}>{profile.name}</div>
            <div style={{ maxWidth: 680, color: "#d0cde0", fontSize: 30, lineHeight: 1.25 }}>Hành trình học công nghệ số và ứng dụng AI có trách nhiệm.</div>
          </div>
          <div style={{ display: "flex", color: "#a7a5bd", fontSize: 22 }}>{siteContent.courseName}</div>
        </div>
      </div>
    ),
    size,
  );
}
