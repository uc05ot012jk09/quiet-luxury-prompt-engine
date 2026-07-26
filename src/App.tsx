import React, { useState } from "react";

// ==========================================
// 1. スタイル定義（CSSの代わりとなるインラインスタイル）
// ==========================================
const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#0d0d0d", // Quiet Luxuryなダーク背景
    color: "#f5f5f7",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 40px",
    borderBottom: "1px solid #262626",
    backgroundColor: "#161617",
  },
  brand: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#86868b",
  },
  nav: {
    display: "flex",
    gap: "24px",
  },
  navItem: {
    fontSize: "12px",
    color: "#86868b",
    textDecoration: "none",
  },
  main: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "80px",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "80px",
  },
  section: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
    padding: "40px",
    backgroundColor: "#161617",
    borderRadius: "12px",
    border: "1px solid #262626",
  },
  title: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#f5f5f7",
    margin: 0,
  },
  subtitle: {
    fontSize: "16px",
    color: "#86868b",
    margin: 0,
    maxWidth: "600px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#1d1d1f",
    borderRadius: "8px",
    border: "1px solid #262626",
    padding: "24px",
    fontSize: "14px",
    color: "#f5f5f7",
    lineHeight: "1.6",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: "8px",
    color: "#f5f5f7",
  },
  cardDescription: {
    fontSize: "13px",
    color: "#86868b",
    margin: 0,
  },
  // プレビュー画面用のスタイル
  previewShell: {
    backgroundColor: "#1d1d1f",
    borderRadius: "8px",
    border: "1px solid #262626",
    padding: "24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0d0d0d",
    border: "1px solid #262626",
    borderRadius: "6px",
    color: "#f5f5f7",
    fontSize: "14px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#f5f5f7",
    color: "#0d0d0d",
    border: "none",
    borderRadius: "6px",
    fontWeight: 500,
    fontSize: "14px",
    cursor: "pointer",
  },
  buttonGhost: {
    padding: "12px 24px",
    backgroundColor: "transparent",
    color: "#f5f5f7",
    border: "1px solid #262626",
    borderRadius: "6px",
    fontWeight: 500,
    fontSize: "14px",
    cursor: "pointer",
  },
};

// ==========================================
// 3. メインアプリケーションコンポーネント（すべてを統合）
// ==========================================
export const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const mockPresets = [
    { name: "Quiet Portrait", desc: "Soft-lit, editorial-style portraits with subtle depth." },
    { name: "Gallery Light", desc: "Museum-grade lighting for artworks and product shots." },
    { name: "Architectural Noir", desc: "High-end architectural scenes with cinematic shadows." },
  ];

  const mockLayerSteps = [
    { name: "1. Intent Refinement", status: "✔ Completed" },
    { name: "2. Style Calibration", status: "✔ Completed" },
    { name: "3. Detail Structuring", status: "● Active" },
    { name: "4. Risk & Artifact Guard", status: "○ Pending" },
  ];

  const mockResult = "Soft-lit editorial portrait of a designer in a minimal studio, neutral tones, gallery-style lighting, subtle depth of field, high-end magazine aesthetic.";

  return (
    <div style={styles.root}>
      {/* 共通ヘッダー（AppShellの責務） */}
      <header style={styles.header}>
        <div style={styles.brand}>Imagen Master Prompt Engine</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navItem}>Overview</a>
          <a href="#" style={styles.navItem}>Docs</a>
          <a href="#" style={styles.navItem}>Pricing</a>
        </nav>
      </header>

      {/* メインレイアウト（LandingPageの責務） */}
      <main style={styles.main}>
        <div style={styles.content}>
          
          {/* Hero Section */}
          <div style={{...styles.section, textAlign: "center", alignItems: "center"}}>
            <h1 style={{fontSize: "42px", fontWeight: 700, margin: 0}}>Quiet prompts for loud ideas.</h1>
            <p style={styles.subtitle}>A layered engine designed for teams who care about every pixel.</p>
          </div>

          {/* Problem Section */}
          <div style={styles.section}>
            <h2 style={styles.title}>When prompts are almost right, but never quite there.</h2>
            <div style={styles.grid}>
              <div style={styles.card}>Prompts feel inconsistent across projects and designers.</div>
              <div style={styles.card}>High-quality image outputs require too many manual iterations.</div>
              <div style={styles.card}>Brand-safe, production-ready prompts are hard to standardize.</div>
            </div>
          </div>

          {/* Solution Section */}
          <div style={styles.section}>
            <h2 style={styles.title}>A layered engine for quietly powerful image prompts.</h2>
            <div style={styles.grid}>
              <div style={styles.card}>Layered prompt refinement that turns vague ideas into precise directions.</div>
              <div style={styles.card}>Smart presets that encode Quiet Luxury aesthetics into reusable blocks.</div>
              <div style={styles.card}>Production-ready outputs designed for real pipelines and stable workflows.</div>
            </div>
          </div>

          {/* Feature Section */}
          <div style={styles.section}>
            <h2 style={styles.title}>Designed for teams who care about every pixel.</h2>
            <div style={styles.grid}>
              {mockPresets.map((preset, i) => (
                <div key={i} style={styles.card}>
                  <div style={styles.cardTitle}>{preset.name}</div>
                  <p style={styles.cardDescription}>{preset.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Preview Section */}
          <div style={styles.section}>
            <h2 style={styles.title}>See the prompt engine in action.</h2>
            <div style={styles.previewShell}>
              <input 
                style={styles.inputField} 
                type="text" 
                readOnly 
                value="Describe the image you want to create..." 
              />
              <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                {mockLayerSteps.map((step, i) => (
                  <div key={i} style={{display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#86868b"}}>
                    <span>{step.name}</span>
                    <span style={{color: step.status.includes("Completed") ? "#34c759" : "#ff9500"}}>{step.status}</span>
                  </div>
                ))}
              </div>
              <div style={{backgroundColor: "#0d0d0d", padding: "16px", borderRadius: "6px", border: "1px solid #262626"}}>
                <p style={{margin: 0, fontSize: "14px", color: "#e5e5ea", lineHeight: "1.6"}}>{mockResult}</p>
              </div>
              <button 
                style={styles.button} 
                onClick={() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                {copied ? "✓ Copied" : "Copy Production Prompt"}
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{...styles.section, textAlign: "center", alignItems: "center", gap: "32px"}}>
            <h2 style={styles.title}>Craft your next prompt with Quiet Luxury.</h2>
            <p style={styles.subtitle}>Start with a base idea, choose a preset, and let the engine guide you to a production-ready prompt.</p>
            <div style={{display: "flex", gap: "16px"}}>
              <button style={styles.button}>Start free preview</button>
              <button style={styles.buttonGhost}>View documentation</button>
            </div>
          </div>

          {/* Footer Section */}
          <footer style={{...styles.header, borderTop: "1px solid #262626", borderBottom: "none", padding: "40px 0px"}}>
            <div style={styles.brand}>© {new Date().getFullYear()} Imagen Master.</div>
            <div style={styles.nav}>
              <a href="#" style={styles.navItem}>Docs</a>
              <a href="#" style={styles.navItem}>Pricing</a>
              <a href="#" style={styles.navItem}>Contact</a>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};
