export default function LogoBar() {
  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container" style={{ display: "flex", gap: 40, justifyContent: "center", opacity: 0.7 }}>
        <span>TIME</span>
        <span>Bloomberg</span>
        <span>FastCompany</span>
        <span>CNBC</span>
      </div>
    </section>
  );
}
