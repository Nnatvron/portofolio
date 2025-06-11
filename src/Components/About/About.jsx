import React from "react";
import AboutCSS from './../About/About.module.css';
import About_img from './../../../public/about.jpg'

function About() {
    AOS.init();
    return(
        <>
        <section id="about">
            <div claasName={AboutCSS.glass}>
            <div className={AboutCSS.about}>
            <div className={AboutCSS.about_img} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
                <img src={About_img} alt="" />
            </div>

            <div className={AboutCSS.about_info}>
                <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">Natravell Sitra</h2>
                <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">Hi I am <span>Front End</span> Developer</h3>
                <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">Saya adalah Natravell Sitra, seorang siswa yang menekuni bidang Teknik Komputer dan Jaringan dengan fokus pada pengembangan Front-End dan Design Web. Saya memiliki tekad yang kuat untuk terus belajar dan mengasah keterampilan saya demi mencapai kesempurnaan. Selalu berusaha untuk menemukan solusi terbaik dalam setiap projek yang saya kerjakan dan memiliki minat besar di bidang Front-End dan Design Web.</p>
                <button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1200">Download CV</button>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default About;