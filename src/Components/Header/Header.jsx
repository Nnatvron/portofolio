// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderCSS from "./../Header/Header.module.css";

function Header() {
  const cursorRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
      mirror: true,
      offset: 0,
    });

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // CSS vars untuk liquid ripple & aurora
      document.documentElement.style.setProperty("--mouse-x", x + "px");
      document.documentElement.style.setProperty("--mouse-y", y + "px");
      document.documentElement.style.setProperty("--x", x + "px");
      document.documentElement.style.setProperty("--y", y + "px");

      // Magnetic buttons
      document.querySelectorAll(`.${HeaderCSS.hero_btns} button`).forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;
        const distance = Math.hypot(x - btnX, y - btnY);
        const magnetStrength = 0.25;
        if (distance < 150) {
          btn.style.transform = `translate(${(x - btnX) * magnetStrength}px, ${(y - btnY) * magnetStrength}px) scale(1.05)`;
        } else {
          btn.style.transform = "translate(0,0) scale(1)";
        }
      });

      // Magnetic social icons
      document.querySelectorAll(`.${HeaderCSS.social_icons} i`).forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const iconX = rect.left + rect.width / 2;
        const iconY = rect.top + rect.height / 2;
        const distance = Math.hypot(x - iconX, y - iconY);
        const magnetStrength = 0.2;
        if (distance < 120) {
          icon.style.transform = `translate(${(x - iconX) * magnetStrength}px, ${(y - iconY) * magnetStrength}px) scale(1.07)`;
        } else {
          icon.style.transform = "translate(0,0) scale(1)";
        }
      });

      // Custom cursor follow
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className={HeaderCSS.hero}>

      {/* Custom cursor */}
      <div ref={cursorRef} className={HeaderCSS.cursor}></div>

      {/* Container utama */}
      <div className={HeaderCSS.hero_container}>

        {/* Info Section */}
        <div className={HeaderCSS.hero_info}>
          <h1 data-aos="fade-down" data-aos-delay="550" data-aos-offset="0">
            Hi, I am <span>Natravell Sitra</span>
          </h1>

          <h2 data-aos="fade-down" data-aos-delay="650" data-aos-offset="0">
            Front-End Web Developer
          </h2>

          <p data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
            “The sky is the limit for those who are not afraid to fly.”
          </p>

          {/* Social Icons */}
          <div className={HeaderCSS.social_icons}>
            <a href="https://www.instagram.com/natar.05" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-aos="fade-right" data-aos-delay="750">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/natra.natra.3154/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-aos="fade-right" data-aos-delay="800">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/natravell-sitra-99994829b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-aos="fade-left" data-aos-delay="900">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Nnatvron" target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-aos="fade-left" data-aos-delay="850">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          {/* Action Buttons */}
          <div className={HeaderCSS.hero_btns}>
            <a href="https://wa.me/6285882494679" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="900">
              <button>Hire Me</button>
            </a>
            <a href="#contact" data-aos="fade-up" data-aos-delay="900">
              <button>Live Chat</button>
            </a>
          </div>
        </div>

        {/* Hero 3D Model Section */}
        <div className={HeaderCSS.hero_img} data-aos="fade-down" data-aos-delay="400">
          <model-viewer
            src="/models/gun_satellite_panel_computer.glb"
            alt="3D Computer"
            auto-rotate
            camera-controls
            ar
            style={{ width: "100%", height: "400px", borderRadius: "2px" }}
          ></model-viewer>
        </div>

      </div>
    </section>
  );
}

export default Header;