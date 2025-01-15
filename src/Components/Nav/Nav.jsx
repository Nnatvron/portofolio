import React, { useState } from "react";
import NavCSS from "./../Nav/Nav.module.css";

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen((prevState) => !prevState);
    };

    return (
        <>
            <section>
                <header className={NavCSS.header}>
                    <div className={NavCSS.logo}>
                        <h2>
                            Natrxx<span></span>
                        </h2>
                    </div>
                    <nav
                        className={`${NavCSS.nav} ${
                            isNavOpen ? NavCSS.navOpen : NavCSS.navClosed
                        }`}
                    >
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Project</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <div className={NavCSS.bars} onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </header>
            </section>
        </>
    );
}

export default Nav;