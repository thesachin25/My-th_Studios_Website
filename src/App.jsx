import React from 'react';
import './App.css'; 
import bgImage from "./assets/Background.jpg"; 
import logoIcon from "./assets/Logo.png";

function App() {
  return (
    <div className="layer-1-background" style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* LAYER 3: The Logo and Name */}
      <header className="layer-3-branding">
          <div className="logo-icon">
              <img src={logoIcon} alt="My/th Logo" />
          </div>
          <div className="studio-name">
              {/* Separated the words to apply different fonts */}
              <span className="font-myth">My/th</span> <span className="font-studios">Studios</span>
          </div>
      </header>

     {/* LAYER 2: All the Text Content */}
     <main className="layer-2-text">
          <div className="center-text">
              
              {/* NEW WRAPPER to perfectly align the title and dates */}
              <div className="title-group">
                  <h1 className="title">LAUNCHING</h1>
                  <div className="date-row">
                      <span>SOON</span>
                      <span>IN</span>
                      <span>SUMMER</span>
                      <span>2026</span>
                  </div>
              </div>
              
              <p className="subtitle">WHERE THE STORIES BEGINS</p>
          </div>

          <div className="bottom-text">
    <a href="mailto:hello@mythstudios.in" className="email">
        <span className="icon">✉</span> hello@mythstudios.in
    </a>
    
    {/* Get in Touch is now positioned cleanly by the flex container */}
    <a href="#" className="cta">GET IN TOUCH</a>
    
    <span className="copyright">© 2026 My/th Studios. All Rights Reserved.</span>
</div>
      </main>

    </div>
  );
}

export default App;