// LogoLoop.jsx
import React from "react";
import "./LogoLoop.css";

export default function LogoLoop({
  logos = [],
  speed = 20,
  height = 50,
  gap = 40,
  pauseOnHover = true,
  className = "",
}) {
  return (
    <div
      className={`logo-loop-container ${pauseOnHover ? "pause-on-hover" : ""} ${className}`}
      style={{ "--speed": `${speed}s`, "--gap": `${gap}px` }}
    >
      <div className="logo-loop-track">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo-loop-img"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}
