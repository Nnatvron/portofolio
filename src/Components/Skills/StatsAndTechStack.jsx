// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./../Skills/StatsAndTechStack.css";
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORT FIX — pastikan path ini benar
import LogoLoop from "../LogoLoop/LogoLoop";

// ================= STAT CARD =====================
const StatCard = ({ number, label, icon, delay }) => (
  <div
    className="stat-card"
    style={{ animationDelay: `${delay}s` }}
    data-aos="zoom-in-up"
    data-aos-delay={delay * 1000}
  >
    <div className="stat-icon">{icon}</div>
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

// ================= MAIN COMPONENT =================
function StatsAndTechStack() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { number: "13+", label: "CERTIFICATES", icon: "🏆" },
    { number: "5+", label: "PROJECTS", icon: "💼" },
    { number: "2+", label: "YEARS EXP", icon: "⚡" },
    { number: "2+", label: "CLIENTS", icon: "👥" },
  ];

  // ================= TECH LOGOS ====================
  const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", alt: "Vercel" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", alt: "Vite" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
    {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",alt: "Vercel"},
  ];

  return (
    <div className="fullscreen-container" id="skills">
      <div className="enhanced-wrapper">
        
        {/* Section Header */}
        <section className="section-header">
          <h1 className="section-title" data-aos="fade-down" data-aos-delay="200">
            My Journey In Numbers
          </h1>
          <p className="section-subtitle" data-aos="fade-down" data-aos-delay="250">
            Passionate developer with growing expertise in modern web technologies.
          </p>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                delay={index * 0.2}
              />
            ))}
          </div>
        </section>

        {/* Technical Skills Title */}
        <section className="technical-skill-section">
          <h3 className="technical-skill-title" data-aos="fade-down" data-aos-delay="300">
            My Tech Stack
          </h3>
          <p className="tech-subtitle" data-aos="fade-down" data-aos-delay="350">
            Tools & technologies I use
          </p>
        </section>

        {/* TECH LOGO LOOP */}
        <section className="tech-section">
          <LogoLoop
            logos={techLogos}
            speed={25}
            height={40}
            gap={45}
            pauseOnHover={true}
            className="tech-logo-loop"
          />
        </section>

        {/* Floating Background Elements */}
        <div className="background-elements" aria-hidden="true">
          <div className="floating-element element-1" />
          <div className="floating-element element-2" />
          <div className="floating-element element-3" />
        </div>
      </div>
    </div>
  );
}

export default StatsAndTechStack;
