// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavCSS from "./../Nav/Nav.module.css";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={NavCSS.header}>
      {/* Logo */}
      <div className={NavCSS.logo}>
        <h2>
          Natrxx<span>.</span>
        </h2>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${NavCSS.nav} ${isNavOpen ? NavCSS.navOpen : ""}`}
      >
        <a href="#home" onClick={closeNav}>Home</a>
        <a href="#skills" onClick={closeNav}>Skills</a>
        <a href="#about" onClick={closeNav}>About</a>
        <a href="#service" onClick={closeNav}>Project</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
      </nav>

      {/* Hamburger Button */}
      <div
        className={`${NavCSS.bars} ${isNavOpen ? NavCSS.active : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Nav;
