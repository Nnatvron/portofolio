import React from "react";
import './../Skills/StatsAndTectStack.css'

const StatCard = ({ number, label }) => (
  <div className="stat-card">
    <div className={`stat-number ${number.includes('+') ? 'green' : 'red'}`}>
      {number}
    </div>
    <div className="stat-label">{label}</div>
  </div>
);

const TechBadge = ({ name, color }) => (
  <span className="tech-badge" style={{ backgroundColor: color }}>
    {name}
  </span>
);

const StatsAndTechStack = () => {
  const stats = [
    { number: '5', label: 'CERTIFICATES' },
    { number: '3', label: 'PROJECTS' },
    { number: '1', label: 'YEARS EXP' }
  ];

  const techStack = [
    { name: 'Html', color: '#FF4500' },
    { name: 'Css', color: '#FFCA28' },
    { name: 'Python', color: '#3776AB' },
    { name: 'React.JS', color: '#61DAFB' },
    { name: 'Vite', color: '#b56edc' },
    { name: 'Tailwind', color: '#00ADD8' },
    { name: 'Vercel', color: '#00' },
    { name: 'Node.JS', color: '#00A86B' },
    { name: 'Material UI', color: '#00ADD8' },
    { name: 'Github', color: '#696969' }
  ];

  return (
    <div className="wrapper">
      {/* Stats Section */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack-container">
        {techStack.map((tech, index) => (
          <TechBadge
            key={index}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsAndTechStack;