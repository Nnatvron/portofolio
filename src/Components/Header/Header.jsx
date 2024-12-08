import React from "react";
import HeaderCSS from './../Header/Header.module.css'
import element1 from './../../../public/element1.png'
import Hero from './../../../public/hero2.jpg'

function Header(){
    AOS.init();
    return(
        <>
        <section id="home" >
            <div className={HeaderCSS.hero} >
                <div className={HeaderCSS.hero_info} >
                    <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">Hi, I am<span> Natravell Sitra </span></h1>
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1100">"The sky is the limit for those who are not afraid to fly."</p>

                    <div className={HeaderCSS.social_icons}>
                        <i> <a href="https://www.instagram.com/natar.05" className="fa-brands fa-instagram" data-aos="fade" data-aos-duration="1500" data-aos-delay="1200"></a></i>
                        <i> <a href="https://www.facebook.com/natra.natra.3154/" className="fa-brands fa-facebook" data-aos="fade" data-aos-duration="1500" data-aos-delay="1300"></a></i>
                        <i> <a href="https://www.linkedin.com/in/natravell-sitra-99994829b?" className="fa-brands fa-linkedin" data-aos="fade" data-aos-duration="1500" data-aos-delay="1400"></a></i>
                        <i> <a href="https://github.com/Nnatvron" className="fa-brands fa-github" data-aos="fade" data-aos-duration="1500" data-aos-delay="1500"></a></i>
                    </div>

                    <div className={HeaderCSS.hero_btns}>
                        <button> <a href="https://wa.me/6285882494679" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1600">Hire Me</a></button>
                        <button> <a href="#contact" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1700">Contact</a></button>
                    </div>
                </div>

                <div className={HeaderCSS.hero_img} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1800">
                    <img src={Hero} alt="Hero_img"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Header