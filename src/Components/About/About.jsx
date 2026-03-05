import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutCSS from "./../About/About.module.css";
import About_img from "./../../../public/about.jpg";

function About() {
  const buttonRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });

    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

      const magnetStrength = 0.25;
      if (distance < 150) {
        buttonRef.current.style.transform = `translate(${(e.clientX - btnX) * magnetStrength}px, ${(e.clientY - btnY) * magnetStrength}px) scale(1.05)`;
        buttonRef.current.style.boxShadow = "0 0 20px rgba(255,49,49,0.7)";
      } else {
        buttonRef.current.style.transform = "translate(0,0) scale(1)";
        buttonRef.current.style.boxShadow = "0 0 10px rgba(255,49,49,0.4)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className={AboutCSS.about_section}>
      <div className={AboutCSS.about}>
        <div
          className={AboutCSS.about_img}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <img
            src={About_img}
            alt="Natravell Sitra - Front End Developer"
          />
        </div>

        <div className={AboutCSS.about_info}>
          <h2 data-aos="fade-down" data-aos-delay="250">
            Natravell Sitra
          </h2>
          <h3 data-aos="fade-down" data-aos-delay="300">
            Hi, I am <span>Front-End Web</span> Developer
          </h3>
          <p data-aos="fade-up" data-aos-delay="350">
            Saya adalah Natravell Sitra, seorang siswa yang menekuni bidang
            Teknik Komputer dan Jaringan dengan fokus pada pengembangan
            Front-End dan Dunia IT. Saya memiliki tekad yang kuat untuk terus
            belajar dan mengasah keterampilan saya demi mencapai kesempurnaan.
            Selalu berusaha untuk menemukan solusi terbaik dalam setiap proyek
            yang saya kerjakan dan memiliki minat besar di bidang Front-End dan
            Dunia IT.
          </p>
          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="https://drive.google.com/file/d/1h4gvGk4K1DUWssGxt0JMGxii0ZVNd73x/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              ref={buttonRef}
              style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                backgroundColor: "#ff3131",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                fontSize: "16px",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(255,49,49,0.4)",
              }}
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;