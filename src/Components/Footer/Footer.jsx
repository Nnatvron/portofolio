// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterCSS from './../Footer/Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

    return (
        <footer className={FooterCSS.footer}>
            <p>
                &copy; {currentYear} Natrxx. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;