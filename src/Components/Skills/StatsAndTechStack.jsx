import React from "react";
import './../Skills/StatsAndTechStack.css'; // Fixed: Direct CSS import, fixed typo

const StatCard = ({ number, label, icon, delay }) => (
  <div className="stat-card" style={{ animationDelay: `${delay}s` }}>
    <div className="stat-icon">{icon}</div>
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const TechBadge = ({ name, color, level, delay }) => (
  <div 
    className="tech-badge" 
    style={{ 
      backgroundColor: color,
      animationDelay: `${delay}s`
    }}
  >
    <div className="tech-name">{name}</div>
    <div className="tech-level">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`level-bar ${i < level ? 'filled' : ''}`}
        />
      ))}
    </div>
  </div>
);

// Fixed: Component name matches export
const StatsAndTechStack = () => {
  const stats = [
    { 
      number: '12+', 
      label: 'CERTIFICATES',
      icon: '🏆'
    },
    { 
      number: '4+', 
      label: 'PROJECTS',
      icon: '💼'
    },
    { 
      number: '1+', 
      label: 'YEARS EXP',
      icon: '⚡'
    },
    { 
      number: '1+', 
      label: 'CLIENTS',
      icon: '👥'
    }
  ];

  const techStack = [
    { name: 'HTML5', color: '#E34F26', level: 5 },
    { name: 'CSS3', color: '#1572B6', level: 5 },
    { name: 'JavaScript', color: '#F7DF1E', level: 4 },
    { name: 'React.js', color: '#61DAFB', level: 4 },
    { name: 'TypeScript', color: '#3178C6', level: 3 },
    { name: 'Node.js', color: '#339933', level: 4 },
    { name: 'Python', color: '#3776AB', level: 3 },
    { name: 'Tailwind CSS', color: '#06B6D4', level: 4 },
    { name: 'Material UI', color: '#007FFF', level: 4 },
    { name: 'Vite', color: '#646CFF', level: 4 },
    { name: 'Git', color: '#F05032', level: 4 },
    { name: 'GitHub', color: '#181717', level: 4 },
    { name: 'Vercel', color: '#000000', level: 4 },
    { name: 'Firebase', color: '#FFCA28', level: 3 },
    { name: 'MongoDB', color: '#47A248', level: 3 },
    { name: 'Figma', color: '#F24E1E', level: 4 }
  ];

  return (
    <div className="enhanced-wrapper">
      {/* Header Section */}
      <div className="section-header">
        <h2 className="section-title">My Journey in Numbers</h2>
        <p className="section-subtitle">
          Passionate developer with a growing expertise in modern web technologies
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-section">
        <div className="tech-header">
          <h3 className="tech-title">Technical Skills</h3>
          <p className="tech-subtitle">Technologies I work with</p>
        </div>
        
        <div className="tech-stack-container">
          {techStack.map((tech, index) => (
            <TechBadge
              key={index}
              name={tech.name}
              color={tech.color}
              level={tech.level}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </div>
  );
};

export default StatsAndTechStack;