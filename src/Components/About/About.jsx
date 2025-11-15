import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutCSS from "./../About/About.module.css";
import About_img from "./../../../public/about.jpg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section id="about" className={AboutCSS.about_section}>
      <div className={AboutCSS.about}>
        <div
          className={AboutCSS.about_img}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <img src={About_img}  alt="Natravell Sitra - Front End Developer" />
        </div>

        <div
          className={AboutCSS.about_info}
        >
          <h2 data-aos="fade-down" data-aos-delay="250">Natravell Sitra</h2>
          <h3 data-aos="fade-down" data-aos-delay="300">
            Hi, I am <span>Front-End Web</span> Developer
          </h3>
          <p data-aos="fade-up" data-aos-delay="350">
            Saya adalah Natravell Sitra, seorang siswa yang menekuni bidang
            Teknik Komputer dan Jaringan dengan fokus pada pengembangan
            Front-End dan Design Web. Saya memiliki tekad yang kuat untuk terus
            belajar dan mengasah keterampilan saya demi mencapai kesempurnaan.
            Selalu berusaha untuk menemukan solusi terbaik dalam setiap proyek
            yang saya kerjakan dan memiliki minat besar di bidang Front-End dan
            Design Web.
          </p>
          <a
            data-aos="fade-up" data-aos-delay="400"
            href="/Natravell_Sitra_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button data-aos="fade-up" data-aos-delay="450">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
