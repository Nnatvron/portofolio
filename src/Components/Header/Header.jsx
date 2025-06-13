import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderCSS from './../Header/Header.module.css';
import element1 from './../../../public/element1.png';
import Hero from './../../../public/hero2.jpg';

function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <section id="home">
            <div className={HeaderCSS.hero}>
                <div className={HeaderCSS.hero_info}>
                    <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
                        Hi, I am 
                        <span>
                        Natravell Sitra
                        </span>
                    </h1>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1050">
                        Front End Web Developer
                    </h2>
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1100">
                        "The sky is the limit for those who are not afraid to fly."
                    </p>

                    <div className={HeaderCSS.social_icons}>
                        <a href="https://www.instagram.com/natar.05" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           data-aos="fade-up" 
                           data-aos-duration="1500" 
                           data-aos-delay="1200">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/natra.natra.3154/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           data-aos="fade-up" 
                           data-aos-duration="1500" 
                           data-aos-delay="1300">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/natravell-sitra-99994829b" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           data-aos="fade-up" 
                           data-aos-duration="1500" 
                           data-aos-delay="1400">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Nnatvron" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           data-aos="fade-up" 
                           data-aos-duration="1500" 
                           data-aos-delay="1500">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>

                    <div className={HeaderCSS.hero_btns}>
                        <button data-aos="fade-right" 
                                data-aos-duration="1500" 
                                data-aos-delay="1600">
                            <a href="https://wa.me/6285882494679" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Hire Me
                            </a>
                        </button>
                        <button data-aos="fade-right" 
                                data-aos-duration="1500" 
                                data-aos-delay="1700">
                            <a href="#contact">
                                Contact
                            </a>
                        </button>
                    </div>
                </div>

                <div className={HeaderCSS.hero_img} 
                     data-aos="fade-left" 
                     data-aos-duration="1500" 
                     data-aos-delay="1800">
                    <img src={Hero} alt="Natravell Sitra - Full Stack Developer"/>
                </div>
            </div>
        </section>
    );
}

export default Header;