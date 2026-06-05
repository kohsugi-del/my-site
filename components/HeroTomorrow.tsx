"use client";

import { useEffect, useState } from "react";

export default function HeroTomorrow() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-inner">

        {/* TEXT */}
        <div>
          <h1 style={{ fontSize: "clamp(36px,6vw,56px)", lineHeight: 1.05 }}>
            Unlock Your
            <br />
            <span style={{ color: "#38bdf8" }}>Resilience</span>
          </h1>

          <p style={{ maxWidth: 520, margin: "24px 0 40px", color: "rgba(255,255,255,0.75)" }}>
            AIとリアルタイムデータを統合し、
            予測・判断・運用を一気通貫で支える
            次世代インテリジェンス基盤。
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a className="btn-primary">Get Started</a>
            <a className="btn-outline">View Platform</a>
          </div>
        </div>

        {/* FLOW */}
        <div className="glass glow flow flow-box">
          {["Proprietary Data", "AI / ML", "Weather Intelligence", "Operational Decision"].map(t => (
            <div key={t} className="flow-item">{t}</div>
          ))}
        </div>

        {/* 🌍 EARTH */}
        <img
          src="/earth.webp"
          alt="Earth"
          className="hero-earth"
          style={{ transform: `translateY(calc(-50% + ${offset}px))` }}
        />
      </div>
    </section>
  );
}
