import React from "react";
import SkillsCSS from './../Skills/Skills.module.css'

const Skills = () => {
    const stats = [
        { number: "50+", label: "CLIENTS", colorClass: "stats-emerald" },
        { number: "200+", label: "PROJECTS", colorClass: "stats-cyan" },
        { number: "3+", label: "YEARS EXP", colorClass: "stats-red" }
      ];
    
      const technologies = [
        { name: "Flutter", colorClass: "tech-blue" },
        { name: "Next JS", colorClass: "tech-gray" },
        { name: "Python", colorClass: "tech-blue" },
        { name: "React JS", colorClass: "tech-gray" },
        { name: "Laravel", colorClass: "tech-red" },
        { name: "Express JS", colorClass: "tech-gray" },
        { name: "Vue JS", colorClass: "tech-emerald" },
        { name: "MySQL", colorClass: "tech-blue" },
        { name: "Golang", colorClass: "tech-cyan" },
        { name: "Firebase", colorClass: "tech-orange" },
      ];
};

export default Skills;