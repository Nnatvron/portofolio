import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { FaSpotify, FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export default function Nav() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#service" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
    setActive("#home");

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNav = () => setIsOpen(false);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
    setActive(href);
    closeNav();
  };

  return (
    <header className={`${styles.header} ${visible ? styles.slideDown : ""}`}>
      <nav className={styles.pillNav}>
        
        {/* LEFT SIDE */}
        <div className={styles.leftSection}>
          <span className={styles.navTitle}>Natrxx.</span>

          <div className={styles.spotifyWrapper}>
            <div
              className={styles.spotifyIcon}
              onClick={() => setMusicOpen(!musicOpen)}
            >
              <FaSpotify />
            </div>

            {musicOpen && (
              <div className={styles.musicPlayer}>
                <div className={styles.songInfo}>
                  <span>Blinding Lights</span>
                  <small>The Weeknd</small>
                </div>

                <div className={styles.controls}>
                  <FaBackward />
                  <span onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </span>
                  <FaForward />
                </div>

                <div className={styles.wave}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.pill} ${active === item.href ? styles.active : ""}`}
              onClick={(e) => handleScrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <div
          className={`${styles.bars} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.pill} ${active === item.href ? styles.active : ""}`}
                onClick={(e) => handleScrollTo(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
  