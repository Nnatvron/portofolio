import { useEffect, useState } from "react";
import { FaGithub, FaUser, FaCode } from "react-icons/fa";

import "./Loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 4) + 1;

      if (currentProgress >= 100) {
        currentProgress = 100;

        clearInterval(timer);

        setTimeout(() => {
          setExiting(true);

          setTimeout(() => {
            setVisible(false);
          }, 700);
        }, 350);
      }

      setProgress(currentProgress);
    }, 45);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-container ${exiting ? "loader-exit" : ""}`}>
      {/* Background */}
      <div className="loader-grid"></div>

      <div className="loader-glow loader-glow-one"></div>
      <div className="loader-glow loader-glow-two"></div>

      <div className="loader-scanline"></div>

      {/* Main Content */}
      <div className="loader-content">

        {/* System Status */}
        <div className="loader-status">
          <span className="status-dot"></span>
          <span>
            {progress >= 100
              ? "SYSTEM READY"
              : "INITIALIZING SYSTEM"}
          </span>
        </div>

        {/* Icons */}
        <div className="loader-icons">
          <div className="loader-icon-box">
            <FaGithub className="loader-icon" />
          </div>

          <div className="loader-icon-box active">
            <FaUser className="loader-icon" />
          </div>

          <div className="loader-icon-box">
            <FaCode className="loader-icon" />
          </div>
        </div>

        {/* Name */}
        <div className="loader-text">
          <span>Natravell</span>
          <span className="loader-name-highlight"> Sitra</span>
        </div>

        {/* Subtext */}
        <div className="loader-subtext">
          A FRONT END WEB DEVELOPER
        </div>

        {/* Progress */}
        <div className="loader-progress-wrapper">
          <div className="loader-progress-info">
            <span>
              {progress >= 100
                ? "PORTFOLIO READY"
                : "LOADING PORTFOLIO..."}
            </span>

            <span>{progress}%</span>
          </div>

          <div className="loader-progress-track">
            <div
              className="loader-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Meta */}
        <div className="loader-meta">
          <span>PORTFOLIO.EXE</span>
          <span>V.2026</span>
          <span>ONLINE</span>
        </div>
      </div>
    </div>
  );
}