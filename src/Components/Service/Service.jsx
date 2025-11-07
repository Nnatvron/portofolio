// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCSS from "./../Service/Service.module.css";

function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      icon: "fa-solid fa-display",
      title: "QR CODE GENERATOR",
      desc: "QR Code Generator adalah website yang memungkinkan pengguna membuat QR code dari teks atau link yang mereka masukkan.",
      link: "https://qr-code-nnatvron.vercel.app/?fbclid=PAY2xjawGhYIRleHRuA2FlbQIxMQABpt9IlI8xTVe2RcDzT1w_ELbdiacrbzFDIM-_8TSdmbzVZHLJMTwhc9sXCA_aem_Cw_cSGOCvnHZUxySSVhMpw",
      delay: 100,
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "IT SUPPORT BEKASI",
      desc: "Website IT Support Bekasi adalah proyek yang saya kerjakan atas permintaan guru di sekolah untuk menyediakan jasa layanan IT di Bekasi.",
      link: "https://itsupportbekasi.vercel.app/",
      delay: 300,
    },
    {
      icon: "fa-brands fa-ubuntu",
      title: "UBUNTU SERVER",
      desc: "Website Ubuntu Server adalah tutorial atau langkah-langkah untuk membuat server Ubuntu menggunakan Linux pada VirtualBox.",
      link: "https://ubuntu-natar.vercel.app/",
      delay: 500,
    },
  ];

  return (
    <section id="service" className={ServiceCSS.service}>
      <h2 data-aos="fade-right" data-aos-delay="100">
        My Projects
      </h2>
      <p data-aos="fade-right" data-aos-delay="300">
        Koleksi proyek web yang saya buat dengan teknologi modern
      </p>

      <div className={ServiceCSS.service_cards}>
        {services.map((service, index) => (
          <article
            key={index}
            className={ServiceCSS.Service_card}
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <i className={service.icon} id={ServiceCSS.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <a href={service.link} target="_blank" rel="noopener noreferrer">
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service;
