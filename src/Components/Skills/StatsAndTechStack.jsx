// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./../Skills/StatsAndTechStack.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

const TechBadge = ({ name, color, level, delay }) => (
  <div
    className="tech-badge"
    style={{
      backgroundColor: "rgba(255,255,255,0.05)",
      borderColor: color,
      animationDelay: `${delay}s`,
    }}
    data-aos="fade-up"
    data-aos-delay={delay * 1000}
  >
    <div className="tech-name">{name}</div>
    <div className="tech-level">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`level-bar ${i < level ? "filled" : ""}`} />
      ))}
    </div>
  </div>
);

function StatsAndTechStack() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { number: "12+", label: "CERTIFICATES", icon: "🏆" },
    { number: "4+", label: "PROJECTS", icon: "💼" },
    { number: "1+", label: "YEARS EXP", icon: "⚡" },
    { number: "1+", label: "CLIENTS", icon: "👥" },
  ];

  const techStack = [
    { name: "HTML", color: "#E34F26", level: 5 },
    { name: "CSS", color: "#1572B6", level: 5 },
    { name: "JavaScript", color: "#F7DF1E", level: 4 },
    { name: "React.js", color: "#61DAFB", level: 4 },
    { name: "Node.js", color: "#339933", level: 4 },
    { name: "Python", color: "#3776AB", level: 4 },
    { name: "Tailwind CSS", color: "#06B6D4", level: 4 },
    { name: "Material UI", color: "#007FFF", level: 4 },
    { name: "Vite", color: "#646CFF", level: 4 },
    { name: "Git", color: "#F05032", level: 4 },
    { name: "GitHub", color: "#181717", level: 5 },
    { name: "Vercel", color: "#000000", level: 5 },
    { name: "Firebase", color: "#FFCA28", level: 3 },
    { name: "MongoDB", color: "#47A248", level: 2 },
  ];

  const techGroup1 = techStack.slice(0, 9);
  const techGroup2 = techStack.slice(9, 16);

  return (
    <div className="fullscreen-container">
      <div className="enhanced-wrapper">
        {/* Section Header */}
        <section className="section-header">
          <h1 className="section-title" data-aos="fade-down" data-aos-delay="200">My Journey In Numbers</h1>
          <p className="section-subtitle" data-aos="fade-down" data-aos-delay="250">
            Passionate developer with growing expertise in modern web
            technologies.
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
          <h3 className="technical-skill-title" data-aos="fade-down" data-aos-delay="300">Technical Skills</h3>
          <p className="tech-subtitle" data-aos="fade-down" data-aos-delay="350">Technologies I work with</p>
        </section>

        {/* Tech Slider */}
        <section className="tech-section">
          <div className="tech-slider-container">
            <div className="tech-slider">
              {[techGroup1, techGroup2, techGroup1].map((group, idx) => (
                <div key={idx} className="tech-slide">
                  <div className="tech-grid">
                    {group.map((tech, index) => (
                      <TechBadge
                        key={tech.name + index}
                        {...tech}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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