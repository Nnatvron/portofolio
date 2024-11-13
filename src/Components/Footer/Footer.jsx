import React from "react";
import FooterCSS from './../Footer/Footer.module.css'

function Footer() {
    AOS.init
    return(
        <>
            <section>
                <div className={FooterCSS.footer}>
                    <div className={FooterCSS.links} data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
                        <h1>Natravell Sitra</h1>
                        <p>lorem</p>

                        <div className={FooterCSS.social}>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
                <div className={FooterCSS.links} data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Portofolio</a>
                        </li>
                    </ul>
                </div>
                <div className={FooterCSS.links} data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
                    <h3>Information</h3>
                    <ul>
                        <li>
                            <a href="#">Membership</a>
                        </li>
                        <li>
                            <a href="#">Privacy & Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & Condition</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Footer