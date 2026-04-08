import { useState, useEffect, useLayoutEffect, useRef } from "react";


const ACCENT = "#38bdf8";
const DANGER = "#f87171";
const GREEN = "#4ade80";
const PURPLE = "#c084fc";
const AMBER = "#fbbf24";

// ── Persona avatars ───────────────────────────────────────────────────────────
const KidAvatar = ({ size = 64, color }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill={color + "22"} />
    <ellipse cx="32" cy="22" rx="13" ry="11" fill={color + "99"} />
    <ellipse cx="17" cy="20" rx="4" ry="5" fill={color + "99"} transform="rotate(-20 17 20)" />
    <ellipse cx="47" cy="20" rx="4" ry="5" fill={color + "99"} transform="rotate(20 47 20)" />
    <circle cx="32" cy="34" r="11" fill="#FDDBB4" />
    <circle cx="28" cy="32" r="1.8" fill="#3d2b1f" />
    <circle cx="36" cy="32" r="1.8" fill="#3d2b1f" />
    <path d="M27 37 Q32 41 37 37" stroke="#c0836a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="26" cy="35.5" r="2.5" fill="#f4a5a5" opacity="0.45" />
    <circle cx="38" cy="35.5" r="2.5" fill="#f4a5a5" opacity="0.45" />
    <path d="M21 64 Q21 53 32 51 Q43 53 43 64Z" fill={color + "55"} />
  </svg>
);
const TeenAvatar = ({ size = 64, color }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill={color + "22"} />
    <ellipse cx="32" cy="21" rx="13" ry="10" fill={color + "99"} />
    <rect x="19" y="20" width="5" height="14" rx="2.5" fill={color + "99"} />
    <rect x="40" y="20" width="5" height="14" rx="2.5" fill={color + "99"} />
    <circle cx="32" cy="33" r="11" fill="#FDDBB4" />
    <circle cx="28" cy="31" r="1.8" fill="#3d2b1f" />
    <circle cx="36" cy="31" r="1.8" fill="#3d2b1f" />
    <path d="M28 36.5 Q32 39 36.5 36" stroke="#c0836a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <rect x="41" y="38" width="7" height="11" rx="1.5" fill={color + "66"} />
    <path d="M21 64 Q21 53 32 51 Q43 53 43 64Z" fill={color + "55"} />
  </svg>
);
const EmpAvatar = ({ size = 64, color }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill={color + "22"} />
    <ellipse cx="32" cy="21" rx="12" ry="9" fill="#5c3d2e" />
    <circle cx="32" cy="33" r="11" fill="#FDDBB4" />
    <rect x="24" y="29" width="7" height="5" rx="2" stroke={color} strokeWidth="1.4" fill="none" />
    <rect x="33" y="29" width="7" height="5" rx="2" stroke={color} strokeWidth="1.4" fill="none" />
    <line x1="31" y1="31.5" x2="33" y2="31.5" stroke={color} strokeWidth="1.4" />
    <circle cx="27.5" cy="31.5" r="1.1" fill="#3d2b1f" />
    <circle cx="36.5" cy="31.5" r="1.1" fill="#3d2b1f" />
    <path d="M28 37 Q32 40 36 37" stroke="#c0836a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <path d="M21 64 Q21 53 27 50 L32 54 L37 50 Q43 53 43 64Z" fill={color + "55"} />
    <path d="M27 50 L32 54 L37 50" stroke={color} strokeWidth="1.2" fill="none" />
  </svg>
);
const SeniorAvatar = ({ size = 64, color }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill={color + "22"} />
    <ellipse cx="32" cy="21" rx="13" ry="10" fill="#d1d5db" />
    <ellipse cx="18" cy="24" rx="4" ry="6" fill="#d1d5db" transform="rotate(-10 18 24)" />
    <ellipse cx="46" cy="24" rx="4" ry="6" fill="#d1d5db" transform="rotate(10 46 24)" />
    <ellipse cx="32" cy="34" rx="12" ry="11" fill="#F2C9A0" />
    <circle cx="28" cy="32.5" r="1.6" fill="#3d2b1f" />
    <circle cx="36" cy="32.5" r="1.6" fill="#3d2b1f" />
    <path d="M27 38 Q32 42 37 38" stroke="#c0836a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="25" cy="36" r="3" fill="#f4a5a5" opacity="0.38" />
    <circle cx="39" cy="36" r="3" fill="#f4a5a5" opacity="0.38" />
    <path d="M20 64 Q20 53 32 51 Q44 53 44 64Z" fill={color + "55"} />
  </svg>
);

const PERSONAS = [
  { Av: KidAvatar,    color: "#34d399", who: "Students",  age: "Ages 8–12"  },
  { Av: TeenAvatar,   color: "#60a5fa", who: "Teenagers", age: "Ages 13–17" },
  { Av: EmpAvatar,    color: "#f59e0b", who: "Employees", age: "Ages 18–64" },
  { Av: SeniorAvatar, color: "#f87171", who: "Seniors",   age: "Ages 65+"   },
];

const Tag = ({ label, color }) => (
  <span style={{ background: `${color}22`, color, border: `1px solid ${color}44`, borderRadius: 20, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 0.5 }}>{label}</span>
);

const SlideShell = ({ children, bg = "linear-gradient(160deg,#0a0f1e,#0f1e38)", accent = ACCENT, badge, title, subtitle }) => (
  <div style={{ display: "flex", flexDirection: "column", background: bg, padding: "24px 36px 28px" }}>
    {badge && <span style={{ color: accent, fontWeight: 700, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>{badge}</span>}
    {title && <h2 style={{ color: "white", fontWeight: 800, fontSize: 28, margin: "0 0 4px", lineHeight: 1.2 }}>{title}</h2>}
    {subtitle && <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 16px" }}>{subtitle}</p>}
    {children}
  </div>
);

const Divider = ({ color = "#1e293b" }) => <div style={{ height: 1, background: color, margin: "14px 0" }} />;

const slides = [
  {
    label: "Cover",
    content: () => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "44px 52px 40px", background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 55%,#0e7490 100%)", position: "relative" }}>
        {/* Concentric rings */}
        {[500, 330, 180].map(s => (
          <div key={s} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(125,211,252,${s === 500 ? "0.06" : s === 330 ? "0.09" : "0.14"})`, top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        ))}
        {/* SVG logo */}
        <svg width="82" height="82" viewBox="0 0 80 80" fill="none" style={{ marginBottom: 14, filter: "drop-shadow(0 0 20px rgba(56,189,248,0.4))" }}>
          <circle cx="40" cy="40" r="39" stroke="rgba(125,211,252,0.2)" strokeWidth="1.5" />
          <circle cx="34" cy="34" r="18" fill="rgba(14,116,144,0.3)" stroke="#38bdf8" strokeWidth="2.2" />
          <circle cx="34" cy="34" r="13" fill="rgba(56,189,248,0.1)" />
          <path d="M26 34.5 L32 41 L44 27" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="48" y1="48" x2="63" y2="63" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="64" cy="64" r="3" fill="#0e7490" />
          <circle cx="61" cy="20" r="2" fill="#7dd3fc" opacity="0.7" />
        </svg>
        <h1 style={{ color: "white", fontWeight: 900, fontSize: 52, letterSpacing: -2, lineHeight: 1, marginBottom: 10 }}>TruthLens</h1>
        <p style={{ color: "#7dd3fc", fontSize: 16, fontWeight: 600, marginBottom: 24 }}>One platform. Built differently for every person who uses it.</p>
        {/* Four persona avatars */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}>
          {PERSONAS.map(({ Av, color, who, age }) => (
            <div key={who} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ borderRadius: "50%", overflow: "hidden", border: `2.5px solid ${color}66`, boxShadow: `0 0 14px ${color}33` }}>
                <Av size={60} color={color} />
              </div>
              <p style={{ color, fontSize: 12, fontWeight: 800, margin: 0 }}>{who}</p>
              <p style={{ color: "#94a3b8", fontSize: 10, margin: 0 }}>{age}</p>
            </div>
          ))}
        </div>
        <div style={{ width: "60%", height: 1, background: "linear-gradient(90deg,transparent,rgba(56,189,248,0.3),transparent)", marginBottom: 12 }} />
        {/* Team names */}
        <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: 6, marginBottom: 10 }}>
          {["Michael Seddoh", "Pranav Waghmare", "Qiaohui Gao", "Soumya Singh", "Vaishnavi Kulkarni"].map(n => (
            <span key={n} style={{ background: "rgba(125,211,252,0.12)", color: "#e2e8f0", borderRadius: 20, padding: "4px 11px", fontSize: 10.5, border: "1px solid rgba(125,211,252,0.35)", whiteSpace: "nowrap" }}>{n}</span>
          ))}
        </div>
        <p style={{ color: "#64748b", fontSize: 11, letterSpacing: 1.2 }}>INFO 7385 · NORTHEASTERN UNIVERSITY · SPRING 2026</p>
      </div>
    )
  },
  {
    label: "Problem",
    content: () => (
      <div style={{ display: "flex", flexDirection: "column", padding: "28px 44px 32px", background: "linear-gradient(160deg,#0f172a,#1a0808)" }}>
        <span style={{ color: "#f87171", fontWeight: 700, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 6 }}>The Problem</span>
        <h2 style={{ color: "white", fontWeight: 900, fontSize: 28, lineHeight: 1.2, margin: "0 0 2px" }}>Misinformation hits everyone differently.</h2>
        <p style={{ color: "#f87171", fontWeight: 700, fontSize: 16, margin: "0 0 14px" }}>Nobody is protecting any of them.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, flex: 1, marginBottom: 12 }}>
          {[
            { Av: KidAvatar,    color: "#34d399", who: "Students",  age: "Ages 8–12",  damage: "Shared a deepfake.",     stat: "Thinks she got it right." },
            { Av: TeenAvatar,   color: "#60a5fa", who: "Teenagers", age: "Ages 13–17", damage: "Scammed 4,000 people.",  stat: "With one tap. Didn't check." },
            { Av: EmpAvatar,    color: "#f59e0b", who: "Employees", age: "Ages 18–64", damage: "$80K gone.",             stat: "One convincing email." },
            { Av: SeniorAvatar, color: "#f87171", who: "Seniors",   age: "Ages 65+",   damage: "Savings gone. 10 mins.", stat: "AI cloned his grandson's voice." },
          ].map(({ Av, color, who, age, damage, stat }) => (
            <div key={who} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "12px 10px", border: `1px solid ${color}30`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 7 }}>
              <p style={{ color, fontWeight: 900, fontSize: 14, lineHeight: 1.2, margin: 0 }}>{damage}</p>
              <div style={{ borderRadius: "50%", overflow: "hidden", border: `2.5px solid ${color}55`, boxShadow: `0 0 12px ${color}22` }}>
                <Av size={54} color={color} />
              </div>
              <div>
                <p style={{ color: "#e2e8f0", fontWeight: 800, fontSize: 12, margin: "0 0 2px" }}>{who}</p>
                <p style={{ color: "#475569", fontSize: 10, margin: "0 0 3px" }}>{age}</p>
                <p style={{ color: "#64748b", fontSize: 10, fontStyle: "italic", margin: 0 }}>{stat}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(248,113,113,0.07)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 10, padding: "12px 18px", textAlign: "center" }}>
          <p style={{ color: "#fca5a5", fontSize: 14, fontWeight: 800, margin: 0 }}>Every generation is exposed. Every threat is different. <span style={{ color: "white" }}>No product today protects all of them.</span></p>
        </div>
      </div>
    )
  },
  {
    label: "Solution",
    content: () => (
      <div style={{ display: "flex", flexDirection: "column", padding: "28px 44px 32px", background: "linear-gradient(160deg,#0f172a,#061520)" }}>
        <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 5 }}>The Solution</span>
        <h2 style={{ color: "white", fontWeight: 900, fontSize: 27, lineHeight: 1.2, margin: "0 0 2px" }}>One platform. Two ways it works.</h2>
        <p style={{ color: "#38bdf8", fontWeight: 700, fontSize: 15, margin: "0 0 12px" }}>A completely different experience for every person.</p>
        {/* Product strip */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: 0, marginBottom: 12, alignItems: "center" }}>
          <div style={{ background: "rgba(248,113,113,0.07)", borderRadius: 12, padding: "10px 14px", border: "1px solid rgba(248,113,113,0.22)", textAlign: "center" }}>
            <div style={{ fontSize: 22, marginBottom: 3 }}>🧩</div>
            <p style={{ color: "white", fontWeight: 800, fontSize: 13, margin: "0 0 3px" }}>Browser Extension</p>
            <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>Catches fake and AI-generated content in real time — for everyone, as they browse.</p>
          </div>
          <div style={{ textAlign: "center", color: "#334155", fontSize: 22, fontWeight: 900 }}>+</div>
          <div style={{ background: "rgba(56,189,248,0.07)", borderRadius: 12, padding: "10px 14px", border: "1px solid rgba(56,189,248,0.22)", textAlign: "center" }}>
            <div style={{ fontSize: 22, marginBottom: 3 }}>🎮</div>
            <p style={{ color: "white", fontWeight: 800, fontSize: 13, margin: "0 0 3px" }}>Learning Experience</p>
            <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>Tailored to each person's age — games for kids, drills for employees, simple guides for seniors.</p>
          </div>
        </div>
        {/* Per-persona breakdown */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, flex: 1 }}>
          {[
            { Av: KidAvatar,    color: "#34d399", who: "Students",  ext: "Flags fakes in class chats.",          learn: "Games that feel like fun." },
            { Av: TeenAvatar,   color: "#60a5fa", who: "Teenagers", ext: "Catches manipulated social posts.",    learn: "'Would you share this?' challenges." },
            { Av: EmpAvatar,    color: "#f59e0b", who: "Employees", ext: "Detects phishing at work.",            learn: "Live drills. Battle-ready teams." },
            { Av: SeniorAvatar, color: "#f87171", who: "Seniors",   ext: "One-tap scam alert. Family notified.", learn: "Jargon-free. Large text. Simple." },
          ].map(({ Av, color, who, ext, learn }) => (
            <div key={who} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "12px 10px", border: `1px solid ${color}30`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 7 }}>
              <div style={{ borderRadius: "50%", overflow: "hidden", border: `2.5px solid ${color}66`, boxShadow: `0 0 14px ${color}33` }}>
                <Av size={52} color={color} />
              </div>
              <p style={{ color, fontWeight: 900, fontSize: 12, margin: 0 }}>{who}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5, width: "100%" }}>
                <div style={{ background: "rgba(248,113,113,0.08)", borderRadius: 8, padding: "6px 8px", border: "1px solid rgba(248,113,113,0.18)" }}>
                  <p style={{ color: "#fca5a5", fontSize: 9, fontWeight: 700, letterSpacing: 1, margin: "0 0 2px" }}>🧩 EXTENSION</p>
                  <p style={{ color: "#cbd5e1", fontSize: 10, lineHeight: 1.4, margin: 0 }}>{ext}</p>
                </div>
                <div style={{ background: "rgba(56,189,248,0.08)", borderRadius: 8, padding: "6px 8px", border: `1px solid ${color}25` }}>
                  <p style={{ color, fontSize: 9, fontWeight: 700, letterSpacing: 1, margin: "0 0 2px" }}>🎮 LEARNING</p>
                  <p style={{ color: "#cbd5e1", fontSize: 10, lineHeight: 1.4, margin: 0 }}>{learn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    label: "Market",
    content: () => {
      const segCards = [
        <img key="kid"  src="/kid-tablet.png"          alt="Kid using tablet"          style={{ width: "100%", height: "120px", objectFit: "cover" }} />,
        <img key="teen" src="/overconfident-natives.png" alt="Teen using phone"          style={{ width: "100%", height: "120px", objectFit: "cover" }} />,
        <img key="pro"  src="/professionals.png"        alt="Professional using phone"  style={{ width: "100%", height: "120px", objectFit: "cover" }} />,
        <img key="sr"   src="/senior-couple.png"        alt="Senior couple using phone" style={{ width: "100%", height: "120px", objectFit: "cover" }} />,
      ];
      const segments = [
        { age: "Ages 8–12", label: "Digital Beginners", pain: "Can't distinguish credible info from falsehood", solution: "Gamified modules · 25 states have media literacy laws", color: "#34d399" },
        { age: "Ages 13–17", label: "Overconfident Natives", pain: "Worst at detecting misinformation of any generation", solution: "Browser extension · Viral content evaluation", color: ACCENT },
        { age: "Ages 18–64", label: "Professionals & Parents", pain: "52% can't tell true from false news", solution: "Corporate training · Family dashboard", color: AMBER },
        { age: "Ages 65+", label: "High-Stakes, Underserved", pain: "$4.8B lost to fraud annually", solution: "Large-text interface · Family monitoring", color: DANGER },
      ];
      return (
        <SlideShell badge="Target Market" title="Four Segments. One Platform." subtitle="~130M U.S. households · $95.7B digital education market by 2030 (CAGR 24.2%)" accent={PURPLE} bg="linear-gradient(160deg,#0a0f1e,#130a1e)">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
            {segments.map((s, i) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, overflow: "hidden", border: `1px solid ${s.color}44`, display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: 120, overflow: "hidden" }}>
                  {segCards[i]}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.75) 100%)" }} />
                  <div style={{ position: "absolute", bottom: 8, left: 10 }}>
                    <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, textShadow: "0 1px 4px rgba(0,0,0,0.9)", display: "block" }}>{s.label}</span>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 10 }}>{s.age}</span>
                  </div>
                </div>
                <div style={{ padding: "10px 12px", flex: 1 }}>
                  <p style={{ color: "#f87171", fontSize: 11, margin: "0 0 6px", lineHeight: 1.4 }}>⚠️ {s.pain}</p>
                  <p style={{ color: `${s.color}cc`, fontSize: 11, margin: 0, lineHeight: 1.4 }}>✅ {s.solution}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, background: "rgba(167,139,250,0.08)", borderRadius: 10, padding: "8px 16px", border: "1px solid rgba(167,139,250,0.2)" }}>
            <p style={{ color: "#c4b5fd", fontSize: 12, margin: 0, textAlign: "center" }}>📊 TAM: ~130M U.S. households · Digital education market projected at $95.7B by 2030 (CAGR 24.2%)</p>
          </div>
        </SlideShell>
      );
    }
  },
  {
    label: "Competition",
    content: () => {
      const Check = () => <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 6, background: "#16a34a", fontSize: 14 }}>✓</span>;
      const Cross = () => <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 6, background: "#dc2626", fontSize: 13, fontWeight: 900, color: "white" }}>✕</span>;
      const rows = [
        { name: "Snopes / PolitiFact",  aud: "Adults only",      edu: true,  detect: false, fam: false, ages: false, hl: false },
        { name: "Common Sense Media",   aud: "Kids & Parents",   edu: true,  detect: false, fam: false, ages: false, hl: false },
        { name: "News Literacy Project",aud: "Students only",    edu: true,  detect: false, fam: false, ages: false, hl: false },
        { name: "GPTZero / Copyleaks",  aud: "B2B / Academic",   edu: false, detect: true,  fam: false, ages: false, hl: false },
        { name: "FactFlow",             aud: "Journalists only", edu: false, detect: true,  fam: false, ages: false, hl: false },
        { name: "🔍 TruthLens",         aud: "All Ages (8–65+)", edu: true,  detect: true,  fam: true,  ages: true,  hl: true  },
      ];
      return (
        <SlideShell badge="Competitive Landscape" title="No One Does What We Do" subtitle="Every competitor solves a fragment. TruthLens solves the whole." accent={AMBER} bg="linear-gradient(160deg,#0a0f1e,#1a1200)">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #334155" }}>
                {["Platform", "Audience", "Education", "AI Detection", "Family Dashboard", "All Ages"].map(h => (
                  <th key={h} style={{ color: "#64748b", fontWeight: 600, textAlign: h === "Platform" || h === "Audience" ? "left" : "center", padding: "6px 10px", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: row.hl ? "rgba(56,189,248,0.07)" : "transparent" }}>
                  <td style={{ padding: "9px 10px", borderLeft: row.hl ? "3px solid #38bdf8" : "3px solid transparent" }}>
                    <span style={{ color: row.hl ? "#38bdf8" : "#e2e8f0", fontWeight: row.hl ? 700 : 400, fontSize: 12 }}>{row.name}</span>
                  </td>
                  <td style={{ padding: "9px 10px", color: "#94a3b8", fontSize: 12 }}>{row.aud}</td>
                  <td style={{ padding: "9px 10px", textAlign: "center" }}>{row.edu ? <Check /> : <Cross />}</td>
                  <td style={{ padding: "9px 10px", textAlign: "center" }}>{row.detect ? <Check /> : <Cross />}</td>
                  <td style={{ padding: "9px 10px", textAlign: "center" }}>{row.fam ? <Check /> : <Cross />}</td>
                  <td style={{ padding: "9px 10px", textAlign: "center" }}>{row.ages ? <Check /> : <Cross />}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)", borderRadius: 10, padding: "10px 16px", marginTop: 12 }}>
            <p style={{ color: "#fde68a", fontSize: 13, margin: 0, textAlign: "center" }}>🏆 TruthLens is the <strong>only platform</strong> combining all-age education + real-time AI detection + family dashboard under one roof</p>
          </div>
        </SlideShell>
      );
    }
  },
  {
    label: "Business Model",
    content: () => (
      <SlideShell badge="Business Model" title="Freemium + B2B2C Hybrid" subtitle="Free tier drives adoption · Five revenue streams diversify from day one" accent={GREEN} bg="linear-gradient(160deg,#0a0f1e,#071a0f)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
          {[
            { n: "🆓", title: "Free Tier", detail: "$0 · 1 age group module + browser extension limited to 10 scans/day · Conversion funnel into paid plans", tag: "Always On", color: "#94a3b8" },
            { n: "01", title: "Individual & Family Subscriptions", detail: "$7.99/mo individual · $14.99/mo family (6 accounts)", tag: "Year 1 · Primary", color: GREEN },
            { n: "02", title: "School & District Licensing", detail: "~$3/student/year · Policy-driven demand from 25 states with media literacy mandates", tag: "Year 2", color: ACCENT },
            { n: "03", title: "Enterprise Training (B2B)", detail: "~$15/employee/year · Phishing simulators & AI detection for HR & security teams", tag: "Year 2", color: AMBER },
            { n: "04", title: "Government & NGO Grants", detail: "FTC, FCC & state grants · Senior digital safety as funded national policy priority", tag: "Year 2–3", color: PURPLE },
            { n: "05", title: "API Licensing", detail: "Usage-based · Embedded detection for news orgs, social platforms & edtech", tag: "Year 3", color: "#fb923c" },
          ].map(({ n, title, detail, tag, color }) => (
            <div key={n} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}33`, borderRadius: 12, padding: "12px 14px", display: "flex", gap: 12 }}>
              <span style={{ color, fontWeight: 900, fontSize: 22, minWidth: 28, lineHeight: 1 }}>{n}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 13, margin: 0 }}>{title}</p>
                  <Tag label={tag} color={color} />
                </div>
                <p style={{ color: "#475569", fontSize: 11, margin: 0 }}>{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 10, padding: "10px 16px" }}>
          <p style={{ color: "#86efac", fontSize: 13, margin: 0, textAlign: "center" }}>📌 CAC = $25 · LTV ≈ $500 · <strong>LTV:CAC = 20:1</strong> — capital-efficient, scalable acquisition model</p>
        </div>
      </SlideShell>
    )
  },
  {
    label: "Financials",
    content: () => (
      <SlideShell badge="Financial Projections" title="Path to $13.1M Revenue by Year 3" subtitle="Conservative bottom-up model · Break-even reached in Year 2" accent={ACCENT} bg="linear-gradient(160deg,#0a0f1e,#061830)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { year: "Year 1", rev: "$600K", subs: "5,000 subscribers", profit: "($1.2M) net loss", color: DANGER, tag: "Seed Stage" },
            { year: "Year 2", rev: "$3.7M", subs: "25,000 subscribers", profit: "$500K profit", color: AMBER, tag: "Break-even ✅" },
            { year: "Year 3", rev: "$13.1M", subs: "80,000 subscribers", profit: "$6.1M profit", color: GREEN, tag: "Scale Stage" },
          ].map(({ year, rev, subs, profit, color, tag }) => (
            <div key={year} style={{ background: `${color}09`, border: `1px solid ${color}44`, borderRadius: 12, padding: 16, textAlign: "center" }}>
              <Tag label={tag} color={color} />
              <p style={{ color: "#64748b", fontSize: 11, fontWeight: 600, textTransform: "uppercase", margin: "8px 0 4px" }}>{year}</p>
              <p style={{ color, fontWeight: 900, fontSize: 30, lineHeight: 1, margin: "0 0 6px" }}>{rev}</p>
              <p style={{ color: "#94a3b8", fontSize: 12, margin: "0 0 4px" }}>{subs}</p>
              <p style={{ color: profit.startsWith("(") ? DANGER : GREEN, fontSize: 12, fontWeight: 600, margin: 0 }}>{profit}</p>
            </div>
          ))}
        </div>
        <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #1e293b" }}>
              {["Cost Category", "Year 1", "Year 2", "Year 3"].map(h => (
                <th key={h} style={{ color: "#475569", textAlign: "left", padding: "4px 8px", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Product & Engineering", "$900K", "$1.4M", "$2.8M"],
              ["Sales & Marketing", "$500K", "$900K", "$2.0M"],
              ["Operations & Support", "$250K", "$500K", "$1.2M"],
              ["Legal & Compliance", "$150K", "$200K", "$500K"],
            ].map(([cat, ...vals]) => (
              <tr key={cat}>
                <td style={{ padding: "5px 8px", color: "#64748b" }}>{cat}</td>
                {vals.map((v, i) => <td key={i} style={{ padding: "5px 8px", color: "#94a3b8" }}>{v}</td>)}
              </tr>
            ))}
            <tr style={{ background: "rgba(56,189,248,0.06)", borderTop: "1px solid #1e293b" }}>
              <td style={{ padding: "6px 8px", color: ACCENT, fontWeight: 700 }}>Total Costs</td>
              {["$1.8M", "$3.2M", "$7.0M"].map((v, i) => <td key={i} style={{ padding: "6px 8px", color: ACCENT, fontWeight: 700 }}>{v}</td>)}
            </tr>
          </tbody>
        </table>
      </SlideShell>
    )
  },
  {
    label: "Investment",
    content: () => (
      <SlideShell badge="Investment Ask" title="Raising $2M Seed Round" subtitle="18 months of runway · Cash-flow positive by Month 18 without a Series A" accent={PURPLE} bg="linear-gradient(160deg,#0a0f1e,#12071e)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { icon: "⚙️", use: "Product Development", amount: "$900K", pct: "45%", desc: "AI detection engine, mobile app, browser extension", color: ACCENT },
            { icon: "📣", use: "Marketing & Acquisition", amount: "$500K", pct: "25%", desc: "Digital campaigns, school referral programs, influencer seeding", color: GREEN },
            { icon: "🛠️", use: "Operations & Support", amount: "$300K", pct: "15%", desc: "Customer support, cloud infrastructure, QA", color: AMBER },
            { icon: "⚖️", use: "Legal & Compliance", amount: "$200K", pct: "10%", desc: "Data privacy (COPPA, GDPR), regulatory & IP protection", color: PURPLE },
          ].map(({ icon, use, amount, pct, desc, color }) => (
            <div key={use} style={{ background: `${color}09`, border: `1px solid ${color}33`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 13, margin: 0 }}>{use}</p>
              </div>
              <p style={{ color: "#475569", fontSize: 11, margin: "0 0 8px" }}>{desc}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ color, fontWeight: 800, fontSize: 20 }}>{amount}</span>
                <span style={{ color: "#334155", fontSize: 12 }}>{pct}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(192,132,252,0.08)", border: "1px solid rgba(192,132,252,0.25)", borderRadius: 12, padding: "14px 20px", textAlign: "center" }}>
          <p style={{ color: "#e9d5ff", fontSize: 14, fontWeight: 600, margin: "0 0 4px" }}>
            🚀 Year 3 revenue of <strong style={{ color: "white" }}>$13.1M</strong> at 5× multiple = <strong style={{ color: PURPLE }}>$65M valuation</strong>
          </p>
          <p style={{ color: "#7c3aed", fontSize: 13, margin: 0 }}>Potential <strong style={{ color: "#f0abfc" }}>32× return</strong> on $2M seed investment within 3 years</p>
        </div>
      </SlideShell>
    )
  },
  {
    label: "Team",
    content: () => (
      <SlideShell badge="The Team" title="Built to Execute" subtitle="Five founders. Five domains. One mission." accent={ACCENT} bg="linear-gradient(160deg,#0a0f1e,#061830)">
        <div style={{ marginBottom: 14, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(56,189,248,0.2)", boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}>
          <img src="/team-photo.png" alt="TruthLens team" style={{ width: "100%", height: "230px", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { role: "CEO", domain: "Strategy & Vision",    desc: "Vaishnavi A Kulkarni",                     color: ACCENT,  icon: "🧭" },
            { role: "CTO", domain: "AI & Engineering",     desc: "Pranav A Waghmare · Vaishnavi A Kulkarni", color: GREEN,   icon: "⚙️" },
            { role: "CPO", domain: "Product & Curriculum", desc: "Soumya Singh · Qiaohui Gao",               color: PURPLE,  icon: "🎨" },
            { role: "CMO", domain: "Marketing & Growth",   desc: "Michael Seddoh · Soumya Singh",            color: AMBER,   icon: "📣" },
            { role: "CFO", domain: "Finance & Operations", desc: "Qiaohui Gao · Pranav A Waghmare",          color: DANGER,  icon: "📊" },
          ].map(({ role, domain, desc, color, icon }) => (
            <div key={role} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}33`, borderRadius: 12, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ background: `${color}18`, borderRadius: 8, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                  <p style={{ color: "white", fontWeight: 700, fontSize: 13, margin: 0 }}>{role}</p>
                  <Tag label={domain} color={color} />
                </div>
                <p style={{ color: "#475569", fontSize: 11, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.15)", borderRadius: 10, padding: "10px 16px", textAlign: "center" }}>
          <p style={{ color: "#7dd3fc", fontSize: 13, margin: 0 }}>🎓 <strong>Northeastern University</strong> · INFO 7385: Managerial Communication for Engineers · Spring 2026</p>
        </div>
      </SlideShell>
    )
  },
  {
    label: "Conclusion",
    content: () => (
      <div style={{ background: "linear-gradient(135deg,#020817 0%,#0c1a35 50%,#0e3554 100%)", display: "flex", flexDirection: "column", padding: "28px 36px 32px", position: "relative" }}>
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.06),transparent 70%)", bottom: -80, right: -80, pointerEvents: "none" }} />
        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>Conclusion & Call to Action</span>
        <h2 style={{ color: "white", fontWeight: 800, fontSize: 24, margin: "0 0 12px", lineHeight: 1.3 }}>Everyone Deserves to Know What's Real.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
          {[
            { icon: "📊", stat: "$95B", label: "Market opportunity", sub: "Growing at 24.2% CAGR through 2030" },
            { icon: "🏆", stat: "0", label: "Direct all-in-one competitors", sub: "First mover in an uncontested category" },
            { icon: "💰", stat: "5", label: "Revenue streams", sub: "Break-even by Year 2 · $13.1M by Year 3" },
          ].map(({ icon, stat, label, sub }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{icon}</div>
              <p style={{ color: "white", fontWeight: 900, fontSize: 26, margin: "0 0 2px" }}>{stat}</p>
              <p style={{ color: "#38bdf8", fontWeight: 600, fontSize: 12, margin: "0 0 4px" }}>{label}</p>
              <p style={{ color: "#475569", fontSize: 11, margin: 0 }}>{sub}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
          {[
            { who: "💼 Investors", cta: "Raising $2M seed · Let's walk through the full roadmap", color: ACCENT },
            { who: "🏫 Schools", cta: "Free semester pilot · No budget approval · No IT headache", color: GREEN },
            { who: "🏢 Enterprises", cta: "Free phishing simulation for your team · Zero commitment", color: AMBER },
          ].map(({ who, cta, color }) => (
            <div key={who} style={{ background: `${color}09`, border: `1px solid ${color}33`, borderRadius: 12, padding: "12px 16px" }}>
              <p style={{ color, fontWeight: 700, fontSize: 13, margin: "0 0 6px" }}>{who}</p>
              <p style={{ color: "#64748b", fontSize: 11, margin: 0 }}>{cta}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <span style={{ color: "#334155", fontSize: 13 }}>🌐 truthlens.io</span>
          <span style={{ color: "#1e293b" }}>·</span>
          <span style={{ color: "#334155", fontSize: 13 }}>📧 hello@truthlens.io</span>
        </div>
      </div>
    )
  }
];

export default function PitchDeck() {
  const [cur, setCur]         = useState(0);
  const [navStyle, setNavStyle] = useState(1); // 0=Classic  1=Pill  2=Minimal
  const [printing, setPrinting] = useState(false);
  const [zoom, setZoom]       = useState(1);
  const pageRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const prev = () => setCur(c => Math.max(0, c - 1));
  const next = () => setCur(c => Math.min(slides.length - 1, c + 1));

  // Fit to BOTH width and height — runs synchronously before paint to avoid flicker
  useLayoutEffect(() => {
    const update = () => {
      const page    = pageRef.current;
      const content = contentRef.current;
      if (!page || !content) return;

      const availW = page.offsetWidth - 32;   // 16px padding each side
      const availH = window.innerHeight - 40; // 20px padding top+bottom

      // Temporarily reset zoom to measure true natural height
      content.style.zoom = "1";
      const naturalH = content.scrollHeight;

      const z = Math.min(1, availW / 840, availH / naturalH);
      content.style.zoom = String(z);
      setZoom(z);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cur]); // re-measure on slide change (each slide has different height)

  // PDF export
  useEffect(() => {
    if (!printing) return;
    const id = setTimeout(() => {
      window.print();
      window.addEventListener("afterprint", () => setPrinting(false), { once: true });
    }, 200);
    return () => clearTimeout(id);
  }, [printing]);

  // ── Dots ──────────────────────────────────────────────────────────────────
  const Dots = () => (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      {slides.map((_, i) => (
        <div key={i} onClick={() => setCur(i)}
          style={{ width: i === cur ? 22 : 6, height: 6, borderRadius: 3, background: i === cur ? ACCENT : "#1e293b", cursor: "pointer", transition: "all 0.3s" }} />
      ))}
    </div>
  );

  // ── Side-button appearance per nav style ──────────────────────────────────
  const btnBase: React.CSSProperties = {
    flexShrink: 0, fontSize: 22, lineHeight: "1", transition: "all 0.2s",
    display: "flex", alignItems: "center", justifyContent: "center",
    width: 46, height: 46,
  };
  const sideBtn = (disabled: boolean, isNext: boolean): React.CSSProperties => {
    if (navStyle === 0) return { // Classic — rounded rect
      ...btnBase,
      background: disabled ? "rgba(255,255,255,0.02)" : isNext ? "linear-gradient(135deg,#0ea5e9,#6366f1)" : "rgba(255,255,255,0.08)",
      color: disabled ? "#1e293b" : "white",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 10,
      cursor: disabled ? "not-allowed" : "pointer",
    };
    if (navStyle === 1) return { // Pill — circle with glow
      ...btnBase,
      background: disabled ? "rgba(255,255,255,0.03)" : isNext ? "linear-gradient(135deg,#38bdf8,#818cf8)" : "rgba(255,255,255,0.07)",
      color: disabled ? "#1e293b" : isNext ? "white" : "#e2e8f0",
      border: `1px solid ${disabled ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.18)"}`,
      borderRadius: 40,
      boxShadow: (!disabled && isNext) ? "0 4px 20px rgba(56,189,248,0.35)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
    };
    return { // Minimal — no background
      ...btnBase,
      background: "none", border: "none",
      color: disabled ? "#1e293b" : "#475569",
      cursor: disabled ? "not-allowed" : "pointer",
      width: 36, height: 36,
    };
  };

  const navStyleDefs = [
    { id: 0, label: "Classic" },
    { id: 1, label: "Pill" },
    { id: 2, label: "Minimal" },
  ];

  const Slide = slides[cur].content;

  // ── Print view ─────────────────────────────────────────────────────────────
  if (printing) {
    return (
      <>
        <style>{`
          @media print {
            @page { size: letter landscape; margin: 0; }
            html, body { margin: 0; padding: 0; background: #020617 !important; }
            .tl-pslide {
              width: 11in; height: 8.5in; overflow: hidden;
              page-break-after: always; break-after: page; box-sizing: border-box;
            }
            .tl-pslide:last-child { page-break-after: avoid; break-after: avoid; }
            .tl-pinner {
              zoom: 1.257;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
          .tl-pinner { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        `}</style>
        <div style={{ background: "#020617" }}>
          {slides.map((s, i) => { const S = s.content; return (
            <div key={i} className="tl-pslide"><div className="tl-pinner"><S /></div></div>
          ); })}
        </div>
      </>
    );
  }

  // ── Interactive view ───────────────────────────────────────────────────────
  return (
    <div ref={pageRef} style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#020617", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 16px", boxSizing: "border-box" }}>

      {/* 840px content box — zoom scales it to fit both width & height */}
      <div ref={contentRef} style={{ width: 840, zoom } as React.CSSProperties}>

        {/* Top bar */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: 8, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🔍</div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 15, letterSpacing: -0.5 }}>TruthLens</span>
              <span style={{ color: "#1e293b", fontSize: 14 }}>|</span>
              <span style={{ color: "#334155", fontSize: 12 }}>Investor Pitch Deck · Spring 2026</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Tag label="CONFIDENTIAL" color={DANGER} />
              <span style={{ color: "#334155", fontSize: 12 }}>{cur + 1} / {slides.length}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {slides.map((s, i) => (
              <button key={i} onClick={() => setCur(i)}
                style={{ background: i === cur ? "linear-gradient(135deg,#0ea5e9,#6366f1)" : "rgba(255,255,255,0.04)", color: i === cur ? "white" : "#475569", border: "1px solid " + (i === cur ? "transparent" : "rgba(255,255,255,0.06)"), borderRadius: 6, padding: "4px 12px", fontSize: 11, cursor: "pointer", fontWeight: i === cur ? 700 : 400, transition: "all 0.2s" }}>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Slide with side buttons ───────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

          {/* Prev button */}
          <button onClick={prev} disabled={cur === 0} style={sideBtn(cur === 0, false)}>‹</button>

          {/* Slide frame */}
          <div style={{ flex: 1, borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Slide />
          </div>

          {/* Next button */}
          <button onClick={next} disabled={cur === slides.length - 1} style={sideBtn(cur === slides.length - 1, true)}>›</button>

        </div>

        {/* Dots indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
          <Dots />
        </div>

        {/* Controls: nav style switcher + PDF export */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#334155", fontSize: 11, marginRight: 2 }}>Nav:</span>
            {navStyleDefs.map(n => (
              <button key={n.id} onClick={() => setNavStyle(n.id)}
                style={{ background: navStyle === n.id ? "rgba(56,189,248,0.1)" : "rgba(255,255,255,0.03)", color: navStyle === n.id ? ACCENT : "#475569", border: `1px solid ${navStyle === n.id ? "rgba(56,189,248,0.35)" : "rgba(255,255,255,0.06)"}`, borderRadius: 6, padding: "4px 12px", fontSize: 11, cursor: "pointer", fontWeight: navStyle === n.id ? 700 : 400, transition: "all 0.15s" }}>
                {n.label}
              </button>
            ))}
          </div>
          {/* PDF export button hidden temporarily */}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, padding: "8px 4px", borderTop: "1px solid #0f172a" }}>
          <span style={{ color: "#1e293b", fontSize: 11 }}>© 2026 TruthLens Inc. All rights reserved.</span>
          <span style={{ color: "#1e293b", fontSize: 11 }}>Confidential & Proprietary · Not for Distribution</span>
          <span style={{ color: "#1e293b", fontSize: 11 }}>hello@truthlens.io</span>
        </div>

      </div>
    </div>
  );
}
