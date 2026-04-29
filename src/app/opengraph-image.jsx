import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(34, 211, 238, 0.18), transparent 28%), radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.16), transparent 22%), #020617",
          color: "#E2E8F0",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "96px",
            height: "96px",
            borderRadius: "28px",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(34, 211, 238, 0.12)",
            border: "1px solid rgba(255,255,255,0.14)",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#67E8F9",
          }}
        >
          NA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
            Nabih Al Attar
          </div>
          <div style={{ fontSize: 30, color: "#A5F3FC" }}>
            Frontend Developer | React.js & Next.js Developer
          </div>
          <div style={{ maxWidth: 980, fontSize: 24, lineHeight: 1.5, color: "#CBD5E1" }}>
            Modern frontend portfolio showcasing responsive websites, e-commerce
            platforms, multilingual apps, API integrations, and desktop ERP solutions.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
