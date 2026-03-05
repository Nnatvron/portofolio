// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import ServiceCSS from "./../Service/Service.module.css";

function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [view, setView] = useState("projects");
  const [activeCert, setActiveCert] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false); // untuk see more/less
  const titleRef = useRef(null);

  /* =========================
     SCRAMBLE TEXT
  ========================== */
  const scrambleText = (newText) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iterations = 0;

    const interval = setInterval(() => {
      if (!titleRef.current) return;

      titleRef.current.innerText = newText
        .split("")
        .map((char, i) => {
          if (i < iterations) return newText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iterations >= newText.length) clearInterval(interval);
      iterations += 0.5;
    }, 30);
  };

  const handleSwitch = (target) => {
    if (target === view) return;
    setView(target);
    scrambleText(target === "projects" ? "My Projects" : "My Certificates");
    setShowAllCerts(false); // reset saat pindah view
  };

  /* =========================
     DATA
  ========================== */
  const services = [
    {
      icon: "fa-solid fa-display",
      title: "QR CODE GENERATOR",
      desc: "QR Code Generator adalah website yang memungkinkan pengguna membuat QR code dari teks atau link.",
      link: "https://qr-code-nnatvron.vercel.app/",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "IT SUPPORT BEKASI",
      desc: "Website IT Support Bekasi untuk layanan jasa IT di Bekasi.",
      link: "https://itsupportbekasi.vercel.app/",
    },
    {
      icon: "fa-brands fa-ubuntu",
      title: "UBUNTU SERVER",
      desc: "Tutorial membangun Ubuntu Server menggunakan VirtualBox.",
      link: "https://ubuntu-natar.vercel.app/",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      title: "UBSI ONE+",
      desc: "Platform layanan akademik terpusat untuk mahasiswa UBSI.",
      link: "https://ubsioneplus.vercel.app/",
    },
  ];

  const certificates = [
    {
      id: "innovating with AI",
      title: "innovating with AI",
      org: "Plan Internasional Indonesia",
      year: "23 December 2025",
      image: "/ai.jpg",
    },
    {
      id: "datascience",
      title: "Data Science",
      org: "Dicoding",
      year: "24 November 2024",
      image: "/public/data-scientist.jpg",
    },
    {
      id: "Cyber Security",
      title: "Cyber Security",
      org: "Cisco Networking Academy",
      year: "2025",
      image: "/public/cybersecurity.jpg",
    },
    {
      id: "Basic AI",
      title: "Basic AI",
      org: "Dicoding",
      year: "11 December 2025",
      image: "/public/dasar-ai.jpg",
    },
    {
      id: "Data Science With Python",
      title: "Data Science With Python",
      org: "DqLab",
      year: "04 December 2024",
      image: "/public/data-scientist-python.jpg",
    },
    {
      id: "HTML",
      title: "HTML",
      org: "Mimo",
      year: "18 October 2024",
      image: "/public/hmtl-mimo.jpg",
    },
    {
      id: "Field Practice",
      title: "Field Practice",
      org: "PT. Asiatek Global Solusi",
      year: "05 July 2024",
      image: "/public/pkl.jpg",
    },
    {
      id: "Basic Structured Query Language",
      title: "Basic Structured Query Language",
      org: "Dicoding",
      year: "10 January 2025",
      image: "/public/sql.jpg",
    },
    {
      id: "Barista",
      title: "Barista",
      org: "Pintarnya",
      year: "18 May 2025",
      image: "/public/barista.jpg",
    },
    {
      id: "Social Media Specialist",
      title: "Social Media Specialist",
      org: "Pintarnya",
      year: "24 March 2025",
      image: "/public/social-media.jpg",
    },
  ];

  // ambil 6 pertama kalau showAllCerts false
  const displayedCerts = showAllCerts ? certificates : certificates.slice(0, 6);

  return (
    <section id="service" className={ServiceCSS.service}>
      {/* ===== HEADER ===== */}
      <div className={ServiceCSS.header} data-aos="fade-down">
        <button
          className={ServiceCSS.navBtn}
          onClick={() => handleSwitch("projects")}
          disabled={view === "projects"}
        >
          ◀
        </button>

        <h2 ref={titleRef}>
          {view === "projects" ? "My Projects" : "My Certificates"}
        </h2>

        <button
          className={ServiceCSS.navBtn}
          onClick={() => handleSwitch("certificates")}
          disabled={view === "certificates"}
        >
          ▶
        </button>
      </div>

      {/* ===== CONTENT ===== */}
      <AnimatePresence mode="wait">
        {view === "projects" && (
          <motion.div
            key="projects"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className={ServiceCSS.service_cards}>
              {services.map((service, index) => (
                <article key={index} className={ServiceCSS.Service_card}>
                  <i className={service.icon} id={ServiceCSS.icon}></i>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ServiceCSS.seeMoreBtn}
                  >
                    See More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </article>
              ))}
            </div>
          </motion.div>
        )}

        {view === "certificates" && (
          <motion.div
            key="certificates"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className={ServiceCSS.service_cards}>
              {displayedCerts.map((cert) => (
                <article key={cert.id} className={ServiceCSS.Service_card}>
                  <i
                    className="fa-solid fa-certificate"
                    id={ServiceCSS.icon}
                  ></i>

                  <h3>{cert.title}</h3>
                  <p>{cert.org}</p>
                  <span>{cert.year}</span>

                  <motion.button
                    layoutId={`cert-${cert.id}`}
                    className={ServiceCSS.seeMoreBtn}
                    onClick={() => setActiveCert(cert)}
                  >
                    View <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                  </motion.button>
                </article>
              ))}
            </div>

            {/* SEE MORE / SEE LESS BUTTON */}
            {certificates.length > 6 && (
              <button
                className={ServiceCSS.seeMoreBtn}
                style={{ marginTop: "20px" }}
                onClick={() => setShowAllCerts(!showAllCerts)}
              >
                {showAllCerts ? "See Less" : "See More"}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== FULLSCREEN MODAL ===== */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className={ServiceCSS.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className={ServiceCSS.modalWrapper}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`cert-${activeCert.id}`}
                src={activeCert.image}
                alt={activeCert.title}
                className={ServiceCSS.modalImage}
              />

              <button
                className={ServiceCSS.closeBtn}
                onClick={() => setActiveCert(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Service;
