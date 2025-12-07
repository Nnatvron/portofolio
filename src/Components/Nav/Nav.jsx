import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false); // untuk animasi masuk

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#service" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // tampilkan navbar dengan animasi
    setVisible(true);

    // selalu mulai dari top/home saat refresh
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
        {/* Title */}
        <span className={styles.navTitle}>Natrxx.</span>

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

        {/* Hamburger Mobile */}
        <div
          className={`${styles.bars} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={styles.mobileMenu}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "10px",
            }}
          >
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
