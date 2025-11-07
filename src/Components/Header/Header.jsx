// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderCSS from "./../Header/Header.module.css";
import HeroImg from "./../../../public/hero2.jpg";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="home" className={HeaderCSS.hero}>
      {/* Container utama biar konten tetap center */}
      <div className={HeaderCSS.hero_container}>
        {/* Info Section */}
        <div className={HeaderCSS.hero_info}>
          <h1 data-aos="fade-right" data-aos-delay="400">
            Hi, I am <span>Natravell Sitra</span>
          </h1>

          <h2 data-aos="fade-right" data-aos-delay="600">
            Front-End Web Developer
          </h2>

          <p data-aos="fade-right" data-aos-delay="800">
            “The sky is the limit for those who are not afraid to fly.”
          </p>

          {/* Social Icons */}
          <div className={HeaderCSS.social_icons}>
            <a
              href="https://www.instagram.com/natar.05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/natra.natra.3154/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/natravell-sitra-99994829b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/Nnatvron"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          {/* Action Buttons */}
          <div className={HeaderCSS.hero_btns}>
            <a
              href="https://wa.me/6285882494679"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
              data-aos-delay="1300"
            >
              <button>Hire Me</button>
            </a>

            <a href="#contact" data-aos="fade-right" data-aos-delay="1400">
              <button>Contact</button>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={HeaderCSS.hero_img}
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <img
            src={HeroImg}
            alt="Natravell Sitra - Front-End Web Developer"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
