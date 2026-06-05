"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <strong>Tomorrow</strong>

          <nav className="nav-desktop">
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Developers</a>
            <a href="#">Learn</a>
            <a href="#" className="cta">Get Demo</a>
          </nav>

          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {["Products", "Solutions", "Developers", "Learn", "Get Demo"].map(t => (
            <a key={t} href="#" onClick={() => setOpen(false)}>
              {t}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
