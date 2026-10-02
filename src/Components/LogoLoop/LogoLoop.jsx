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
  const loopLogos = [...logos, ...logos];

  return (
    <div
      className={`logo-loop-container ${
        pauseOnHover ? "pause-on-hover" : ""
      } ${className}`.trim()}
      style={{
        "--speed": `${speed}s`,
        "--gap": `${gap}px`,
      }}
    >
      <div className="logo-loop-track">
        {loopLogos.map((logo, index) => (
          <img
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={logo.alt || "Technology logo"}
            className="logo-loop-img"
            style={{ height: `${height}px` }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}