import { useState } from "react";

const ACCENT = "#38bdf8";
const DANGER = "#f87171";
const GREEN = "#4ade80";
const PURPLE = "#c084fc";
const AMBER = "#fbbf24";

const Tag = ({ label, color }) => (
  <span style={{ background: `${color}22`, color, border: `1px solid ${color}44`, borderRadius: 20, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 0.5 }}>{label}</span>
);

const SlideShell = ({ children, bg = "linear-gradient(160deg,#0a0f1e,#0f1e38)", accent = ACCENT, badge, title, subtitle }) => (
  <div style={{ height: "100%", display: "flex", flexDirection: "column", background: bg, padding: "28px 36px 24px" }}>
    {badge && <span style={{ color: accent, fontWeight: 700, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>{badge}</span>}
    {title && <h2 style={{ color: "white", fontWeight: 800, fontSize: 28, margin: "0 0 4px", lineHeight: 1.2 }}>{title}</h2>}
    {subtitle && <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 18px" }}>{subtitle}</p>}
    {children}
  </div>
);

const Divider = ({ color = "#1e293b" }) => <div style={{ height: 1, background: color, margin: "14px 0" }} />;

const slides = [
  {
    label: "Cover",
    content: () => (
      <div style={{ height: "100%", background: "linear-gradient(135deg,#020817 0%,#0c1a35 50%,#0e3554 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "36px 48px", position: "relative", overflow: "hidden" }}>
        {/* bg glow */}
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.08),transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <div style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", borderRadius: 20, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, marginBottom: 20, boxShadow: "0 8px 32px rgba(14,165,233,0.4)" }}>🔍</div>
        <h1 style={{ color: "white", fontWeight: 900, fontSize: 48, letterSpacing: -2, margin: "0 0 8px" }}>TruthLens</h1>
        <p style={{ color: "#7dd3fc", fontSize: 16, fontStyle: "italic", margin: "0 0 24px", fontWeight: 300 }}>"One Platform. Every Age. Smarter Media for Everyone."</p>
        <Divider color="rgba(255,255,255,0.08)" />
        <p style={{ color: "#475569", fontSize: 13, margin: "16px 0 20px" }}>Combating Misinformation in the Digital Age</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          {["CEO","CTO","CPO","CMO","CFO"].map(r => (
            <span key={r} style={{ background: "rgba(56,189,248,0.08)", color: "#bae6fd", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 20, padding: "4px 14px", fontSize: 12 }}>{r}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Tag label="INFO 7385" color={ACCENT} />
          <Tag label="Northeastern University" color={ACCENT} />
          <Tag label="Spring 2026" color={ACCENT} />
        </div>
      </div>
    )
  },
  {
    label: "Problem",
    content: () => (
      <SlideShell badge="The Problem" title="AI Has Turned Misinformation Into a Weapon" subtitle="The threat is no longer human error — it's machine-generated, scalable, and virtually undetectable." accent={DANGER} bg="linear-gradient(160deg,#0a0f1e,#1a0a0a)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { icon: "🤖", stat: "900%", label: "Growth in deepfake content", sub: "2019–2023 · Anyone can now create convincing fakes with zero technical skill", color: DANGER },
            { icon: "⚡", stat: "6×", label: "Faster spread of AI fake news", sub: "AI-generated misinformation travels 6× faster than real news on social media", color: "#fb923c" },
            { icon: "👴", stat: "$4.8B", label: "Lost by seniors to AI scams", sub: "Up 43% YoY · Deepfake voice calls impersonate family, doctors, executives", color: AMBER },
            { icon: "🧬", stat: "#1", label: "Global risk — WEF 2024", sub: "Ranked above climate change & geopolitical conflict for the first time ever", color: PURPLE },
          ].map(({ icon, stat, label, sub, color }) => (
            <div key={stat} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}33`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 22 }}>{icon}</span>
                <span style={{ color, fontWeight: 800, fontSize: 28, lineHeight: 1 }}>{stat}</span>
              </div>
              <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 13, margin: "0 0 4px" }}>{label}</p>
              <p style={{ color: "#475569", fontSize: 11, margin: 0, lineHeight: 1.5 }}>{sub}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.25)", borderRadius: 10, padding: "12px 16px" }}>
          <p style={{ color: "#fca5a5", fontSize: 13, margin: 0, fontWeight: 500 }}>⚠️ <strong>The gap:</strong> No single platform defends <em>all age groups</em> against AI-generated misinformation — kids, teens, adults, and seniors are all left to fend for themselves.</p>
        </div>
      </SlideShell>
    )
  },
  {
    label: "Solution",
    content: () => (
      <SlideShell badge="The Solution" title="TruthLens" subtitle="One platform. Real-time AI detection. Age-adaptive literacy. Every generation protected." accent={ACCENT} bg="linear-gradient(160deg,#0a0f1e,#061e30)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { icon: "🎓", title: "Age-Adaptive Modules", items: ["🧒 Games & quizzes for kids", "📱 Social challenges for teens", "💼 Phishing simulators for adults", "👴 Scam-recognition drills for seniors"], color: GREEN },
            { icon: "🧩", title: "AI Browser Extension", items: ["Detects AI-generated text", "Flags deepfake images & video", "Plain-language confidence score", "Works across all major browsers"], color: ACCENT },
            { icon: "👨‍👩‍👧", title: "Family Dashboard", items: ["1 subscription, 6 accounts", "Parents track kids' progress", "Families support seniors' safety", "Cross-generational, first of its kind"], color: PURPLE },
          ].map(({ icon, title, items, color }) => (
            <div key={title} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}33`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
              <p style={{ color, fontWeight: 700, fontSize: 13, margin: "0 0 10px" }}>{title}</p>
              {items.map(i => <p key={i} style={{ color: "#94a3b8", fontSize: 11, margin: "0 0 5px" }}>• {i}</p>)}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { label: "Free Tier", desc: "Core access, no credit card", color: "#475569" },
            { label: "$7.99 / mo", desc: "Individual Plan", color: ACCENT },
            { label: "$14.99 / mo", desc: "Family Plan · 6 accounts", color: GREEN },
          ].map(({ label, desc, color }) => (
            <div key={label} style={{ flex: 1, background: `${color}11`, border: `1px solid ${color}33`, borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
              <p style={{ color, fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>{label}</p>
              <p style={{ color: "#475569", fontSize: 11, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </SlideShell>
    )
  },
  {
    label: "Market",
    content: () => (
      <SlideShell badge="Target Market" title="Four Segments. One Platform." subtitle="~130M U.S. households · $95.7B digital education market by 2030 (CAGR 24.2%)" accent={PURPLE} bg="linear-gradient(160deg,#0a0f1e,#130a1e)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { emoji: "🧒", age: "Ages 8–12", label: "Digital Beginners", pain: "Can't distinguish credible from false — yet highly confident", solution: "Gamified classroom modules · 25 states have media literacy laws", color: GREEN },
            { emoji: "📱", age: "Ages 13–17", label: "Overconfident Natives", pain: "Worst generation at detecting misinformation (66K-person global study)", solution: "Viral content evaluation · Social media-native browser extension", color: ACCENT },
            { emoji: "💼", age: "Ages 18–64", label: "Professionals & Parents", pain: "52% can't tell true from false news · 60% of breaches = human error", solution: "Phishing simulators · Corporate training · Family dashboard", color: AMBER },
            { emoji: "👴", age: "Ages 65+", label: "High-Stakes, Underserved", pain: "$4.8B lost to AI scams · Only 26% confident spotting misinformation", solution: "Simplified alerts · Large-text UI · Family safety monitoring", color: DANGER },
          ].map(({ emoji, age, label, pain, solution, color }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}33`, borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>{emoji}</span>
                <div>
                  <p style={{ color, fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1 }}>{label}</p>
                  <p style={{ color: "#334155", fontSize: 10, margin: 0 }}>{age}</p>
                </div>
              </div>
              <p style={{ color: "#64748b", fontSize: 11, margin: "0 0 6px" }}>⚠️ {pain}</p>
              <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>✅ {solution}</p>
            </div>
          ))}
        </div>
      </SlideShell>
    )
  },
  {
    label: "Competition",
    content: () => (
      <SlideShell badge="Competitive Landscape" title="No One Does What We Do" subtitle="Every competitor solves a fragment. TruthLens solves the whole." accent={AMBER} bg="linear-gradient(160deg,#0a0f1e,#1a1200)">
        <div style={{ overflowX: "auto", marginBottom: 12 }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 5px", fontSize: 12 }}>
            <thead>
              <tr>
                {["Platform", "Audience", "Education", "AI Detection", "Family Dashboard", "All Ages"].map(h => (
                  <th key={h} style={{ color: "#475569", fontWeight: 600, textAlign: "left", padding: "4px 10px", borderBottom: "1px solid #1e293b", fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Snopes / PolitiFact", aud: "Adults only", edu: "✅", ai: "❌", fam: "❌", all: "❌", hl: false },
                { name: "Common Sense Media", aud: "Kids & Parents", edu: "✅", ai: "❌", fam: "❌", all: "❌", hl: false },
                { name: "News Literacy Project", aud: "Students only", edu: "✅", ai: "❌", fam: "❌", all: "❌", hl: false },
                { name: "GPTZero / Copyleaks", aud: "B2B / Academic", edu: "❌", ai: "✅", fam: "❌", all: "❌", hl: false },
                { name: "FactFlow", aud: "Journalists only", edu: "❌", ai: "✅", fam: "❌", all: "❌", hl: false },
                { name: "🔍 TruthLens", aud: "All Ages (8–65+)", edu: "✅", ai: "✅", fam: "✅", all: "✅", hl: true },
              ].map(({ name, aud, edu, ai, fam, all, hl }) => (
                <tr key={name} style={{ background: hl ? "rgba(56,189,248,0.07)" : "rgba(255,255,255,0.02)" }}>
                  {[name, aud, edu, ai, fam, all].map((v, i) => (
                    <td key={i} style={{ padding: "8px 10px", color: hl ? (i < 2 ? "#38bdf8" : "white") : (i < 2 ? "#94a3b8" : "#475569"), fontWeight: hl && i === 0 ? 700 : 400, fontSize: i >= 2 ? 15 : 12, border: hl ? (i === 0 ? "1px solid rgba(56,189,248,0.2)" : "1px solid transparent") : "none", borderLeft: hl && i === 0 ? "3px solid #38bdf8" : undefined }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)", borderRadius: 10, padding: "10px 16px" }}>
          <p style={{ color: "#fde68a", fontSize: 13, margin: 0, textAlign: "center" }}>🏆 TruthLens is the <strong>only platform</strong> combining all-age education + real-time AI detection + family dashboard under one roof</p>
        </div>
      </SlideShell>
    )
  },
  {
    label: "Business Model",
    content: () => (
      <SlideShell badge="Business Model" title="Freemium + B2B2C Hybrid" subtitle="Free tier drives adoption · Five revenue streams diversify from day one" accent={GREEN} bg="linear-gradient(160deg,#0a0f1e,#071a0f)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
          {[
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { role: "CEO", domain: "Strategy & Vision", desc: "Leads business strategy, investor relations & partnerships", color: ACCENT, icon: "🧭" },
            { role: "CTO", domain: "AI & Engineering", desc: "Architects the AI detection engine and full-stack platform", color: GREEN, icon: "⚙️" },
            { role: "CPO", domain: "Product & Curriculum", desc: "Designs age-adaptive UX and educational content modules", color: PURPLE, icon: "🎨" },
            { role: "CMO", domain: "Marketing & Growth", desc: "Drives user acquisition, brand, and institutional partnerships", color: AMBER, icon: "📣" },
            { role: "CFO", domain: "Finance & Operations", desc: "Manages financial planning, compliance, and cost structure", color: DANGER, icon: "📊" },
          ].map(({ role, domain, desc, color, icon }) => (
            <div key={role} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}33`, borderRadius: 12, padding: "12px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: `${color}18`, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: 0 }}>{role}</p>
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
      <div style={{ height: "100%", background: "linear-gradient(135deg,#020817 0%,#0c1a35 50%,#0e3554 100%)", display: "flex", flexDirection: "column", padding: "28px 36px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.06),transparent 70%)", bottom: -80, right: -80, pointerEvents: "none" }} />
        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>Conclusion & Call to Action</span>
        <h2 style={{ color: "white", fontWeight: 800, fontSize: 26, margin: "0 0 16px", lineHeight: 1.3 }}>Everyone Deserves to Know What's Real.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
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
  const [cur, setCur] = useState(0);
  const Slide = slides[cur].content;

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#020617", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 16px" }}>
      {/* Top bar */}
      <div style={{ width: "100%", maxWidth: 840, marginBottom: 12 }}>
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
        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCur(i)} style={{ background: i === cur ? "linear-gradient(135deg,#0ea5e9,#6366f1)" : "rgba(255,255,255,0.04)", color: i === cur ? "white" : "#475569", border: "1px solid " + (i === cur ? "transparent" : "rgba(255,255,255,0.06)"), borderRadius: 6, padding: "4px 12px", fontSize: 11, cursor: "pointer", fontWeight: i === cur ? 700 : 400, transition: "all 0.2s" }}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slide */}
      <div style={{ width: "100%", maxWidth: 840, borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.7)", minHeight: 470, border: "1px solid rgba(255,255,255,0.07)" }}>
        <Slide />
      </div>

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
        <button onClick={() => setCur(Math.max(0, cur - 1))} disabled={cur === 0} style={{ background: cur === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.08)", color: cur === 0 ? "#1e293b" : "white", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 22px", cursor: cur === 0 ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 600 }}>← Prev</button>
        <div style={{ display: "flex", gap: 5 }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 22 : 6, height: 6, borderRadius: 3, background: i === cur ? ACCENT : "#1e293b", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
        <button onClick={() => setCur(Math.min(slides.length - 1, cur + 1))} disabled={cur === slides.length - 1} style={{ background: cur === slides.length - 1 ? "rgba(255,255,255,0.02)" : "linear-gradient(135deg,#0ea5e9,#6366f1)", color: cur === slides.length - 1 ? "#1e293b" : "white", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 22px", cursor: cur === slides.length - 1 ? "not-allowed" : "pointer", fontSize: 13, fontWeight: 600 }}>Next →</button>
      </div>

      {/* Footer */}
      <div style={{ width: "100%", maxWidth: 840, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14, padding: "8px 4px", borderTop: "1px solid #0f172a" }}>
        <span style={{ color: "#1e293b", fontSize: 11 }}>© 2026 TruthLens Inc. All rights reserved.</span>
        <span style={{ color: "#1e293b", fontSize: 11 }}>Confidential & Proprietary · Not for Distribution</span>
        <span style={{ color: "#1e293b", fontSize: 11 }}>hello@truthlens.io</span>
      </div>
    </div>
  );
}
