import { useEffect, useState } from "react";
import { FaGithub, FaUser, FaCode } from "react-icons/fa"; // npm install react-icons
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Total delay loader (sesuaikan dengan fadeOut di CSS)
    const timer = setTimeout(() => setVisible(false), 15000); 
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-container">
      {/* Icons atas */}
      <div className="loader-icons">
        <FaGithub className="loader-icon" />
        <FaUser className="loader-icon" />
        <FaCode className="loader-icon" />
      </div>

      {/* Teks utama */}
      <div className="loader-text">Natravell Sitra</div>

      {/* Subtext bawah */}
      <div className="loader-subtext">A FRONT END WEB DEVELOPER</div>
    </div>
  );
}
