import React from 'react';
import './App.css';
import bgDesktop from "./assets/Background.jpg";
import bgTablet  from "./assets/Background Mob.png";
import bgMobile  from "./assets/Background Mob.png";
import logoIcon  from "./assets/Logo.png";

function App() {
  return (
    <div
      className="layer-1-background"
      style={{
        '--bg-desktop': `url(${bgDesktop})`,
        '--bg-tablet':  `url(${bgTablet})`,
        '--bg-mobile':  `url(${bgMobile})`
      }}
    >

      {/* ── LAYER 3: Logo & Studio Name ── */}
      <header className="layer-3-branding">
        <div className="logo-icon">
          <img src={logoIcon} alt="My/th Studios Logo" />
        </div>
        <p className="studio-name">
          <span className="font-myth">My/th</span>
          {' '}
          <span className="font-studios">Studios</span>
        </p>
      </header>

      {/* ── LAYER 2: Central Content ── */}
      <main className="layer-2-text">

        <div className="center-text">

          {/* Title + Date row */}
          <div className="title-group">
            <h1 className="title">LAUNCHING</h1>
            <div className="date-row">
              <span>SOON</span>
              <span>IN</span>
              <span>SUMMER</span>
              <span>2026</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="subtitle">WHERE THE STORY BEGINS</p>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="bottom-text">

          {/* Left — Copyright */}
          <span className="copyright">
            © 2026 My/th Studios. All Rights Reserved.
          </span>

          {/* Center — CTA */}
          <a href="mailto:hello@mythstudios.in" className="cta">
            GET IN TOUCH
          </a>

          {/* Right — Email pill */}
          <a href="mailto:hello@mythstudios.in" className="email">
            <span className="icon">✉</span>
            hello@mythstudios.in
          </a>

        </div>

      </main>

    </div>
  );
}

export default App;
