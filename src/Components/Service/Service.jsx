import React, { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { AnimatePresence, motion } from "framer-motion";

import ServiceCSS from "./../Service/Service.module.css";

function Service() {
  const [view, setView] = useState("projects");
  const [activeCert, setActiveCert] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const titleRef = useRef(null);

  /* =========================
     AOS
  ========================== */

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 150,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();
  }, []);

  /* =========================
     SCRAMBLE TEXT
  ========================== */

  const scrambleText = (newText) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iterations = 0;

    const interval = setInterval(() => {
      if (!titleRef.current) {
        clearInterval(interval);
        return;
      }

      titleRef.current.innerText = newText
        .split("")
        .map((char, index) => {
          if (index < iterations) {
            return newText[index];
          }

          return chars[
            Math.floor(Math.random() * chars.length)
          ];
        })
        .join("");

      if (iterations >= newText.length) {
        clearInterval(interval);
        titleRef.current.innerText = newText;
      }

      iterations += 0.5;
    }, 30);
  };

  const handleSwitch = (target) => {
    if (target === view) return;

    setView(target);

    scrambleText(
      target === "projects"
        ? "My Projects"
        : "My Certificates"
    );

    setShowAllCerts(false);
  };

  /* =========================
     PROJECT DATA
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
    {
      icon: "fa-brands fa-instagram",
      title: "UNFOLLOW TRACKER INSTAGRAM",
      desc: "Website untuk mengecek akun Instagram yang tidak follow back dan memantau daftar unfollowers.",
      link: "https://unfollowtrackersinstagram.vercel.app/",
    },
    {
      icon: "fa-solid fa-book-open",
      title: "SMART STUDY HUB",
      desc: "Smart Study Hub adalah platform belajar berbasis AI yang mengintegrasikan ringkasan materi, presentasi otomatis, latihan soal, flashcard, dan alat produktivitas untuk membantu proses belajar menjadi lebih cepat dan terorganisir.",
      link: "https://smartsstudyhub.vercel.app/",
    },
    {
      icon: "fa-solid fa-book-open",
      title: "NATARA HUB",
      desc: "Platform belajar dan materi kuliah yang membantu mahasiswa mengakses materi, progress belajar, quiz, bookmark, dan berbagai kebutuhan akademik dalam satu tempat.",
      link: "https://natara-hub.vercel.app/",
    },
  ];

  /* =========================
     CERTIFICATE DATA
  ========================== */

  const certificates = [
    {
      id: "innovating-with-ai",
      title: "Innovating with AI",
      org: "Plan International Indonesia",
      year: "23 December 2025",
      image: "/ai.jpg",
    },
    {
      id: "datascience",
      title: "Data Science",
      org: "Dicoding",
      year: "24 November 2024",
      image: "/data-scientist.jpg",
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      org: "Cisco Networking Academy",
      year: "2025",
      image: "/cybersecurity.jpg",
    },
    {
      id: "basic-ai",
      title: "Basic AI",
      org: "Dicoding",
      year: "11 December 2025",
      image: "/dasar-ai.jpg",
    },
    {
      id: "data-science-python",
      title: "Data Science With Python",
      org: "DQLab",
      year: "04 December 2024",
      image: "/data-scientist-python.jpg",
    },
    {
      id: "html",
      title: "HTML",
      org: "Mimo",
      year: "18 October 2024",
      image: "/hmtl-mimo.jpg",
    },
    {
      id: "field-practice",
      title: "Field Practice",
      org: "PT. Asiatek Global Solusi",
      year: "05 July 2024",
      image: "/pkl.jpg",
    },
    {
      id: "basic-sql",
      title: "Basic Structured Query Language",
      org: "Dicoding",
      year: "10 January 2025",
      image: "/sql.jpg",
    },
    {
      id: "barista",
      title: "Barista",
      org: "Pintarnya",
      year: "18 May 2025",
      image: "/barista.jpg",
    },
    {
      id: "social-media-specialist",
      title: "Social Media Specialist",
      org: "Pintarnya",
      year: "24 March 2025",
      image: "/social-media.jpg",
    },
  ];

  /* =========================
     DISPLAYED CERTIFICATES
  ========================== */

  const displayedCerts = showAllCerts
    ? certificates
    : certificates.slice(0, 6);

  /* =========================
     RENDER
  ========================== */

  return (
    <section
      id="service"
      className={ServiceCSS.service}
    >
      {/* ================= HEADER ================= */}

      <div
        className={ServiceCSS.header}
        data-aos="fade-down"
      >
        <button
          type="button"
          className={ServiceCSS.navBtn}
          onClick={() => handleSwitch("projects")}
          disabled={view === "projects"}
          aria-label="View projects"
        >
          ◀
        </button>

        <h2 ref={titleRef}>
          {view === "projects"
            ? "My Projects"
            : "My Certificates"}
        </h2>

        <button
          type="button"
          className={ServiceCSS.navBtn}
          onClick={() => handleSwitch("certificates")}
          disabled={view === "certificates"}
          aria-label="View certificates"
        >
          ▶
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      <AnimatePresence mode="wait">
        {view === "projects" && (
          <motion.div
            key="projects"
            initial={{
              x: -60,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: 60,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <div className={ServiceCSS.service_cards}>
              {services.map((service) => (
                <article
                  key={service.title}
                  className={ServiceCSS.Service_card}
                >
                  <i
                    className={service.icon}
                    id={ServiceCSS.icon}
                    aria-hidden="true"
                  />

                  <h3>{service.title}</h3>

                  <p>{service.desc}</p>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ServiceCSS.seeMoreBtn}
                  >
                    See More{" "}
                    <i
                      className="fa-solid fa-arrow-right-long"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              ))}
            </div>
          </motion.div>
        )}

        {view === "certificates" && (
          <motion.div
            key="certificates"
            initial={{
              x: 60,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -60,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <div className={ServiceCSS.service_cards}>
              {displayedCerts.map((cert) => (
                <article
                  key={cert.id}
                  className={ServiceCSS.Service_card}
                >
                  <i
                    className="fa-solid fa-certificate"
                    id={ServiceCSS.icon}
                    aria-hidden="true"
                  />

                  <h3>{cert.title}</h3>

                  <p>{cert.org}</p>

                  <span>{cert.year}</span>

                  <motion.button
                    type="button"
                    layoutId={`cert-${cert.id}`}
                    className={ServiceCSS.seeMoreBtn}
                    onClick={() => setActiveCert(cert)}
                  >
                    View{" "}
                    <i
                      className="fa-solid fa-up-right-and-down-left-from-center"
                      aria-hidden="true"
                    />
                  </motion.button>
                </article>
              ))}
            </div>

            {/* SEE MORE / SEE LESS */}

            {certificates.length > 6 && (
              <button
                type="button"
                className={ServiceCSS.seeMoreBtn}
                style={{ marginTop: "20px" }}
                onClick={() =>
                  setShowAllCerts((prev) => !prev)
                }
              >
                {showAllCerts ? "See Less" : "See More"}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FULLSCREEN MODAL ================= */}

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className={ServiceCSS.modalOverlay}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className={ServiceCSS.modalWrapper}
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`cert-${activeCert.id}`}
                src={activeCert.image}
                alt={activeCert.title}
                className={ServiceCSS.modalImage}
              />

              <button
                type="button"
                className={ServiceCSS.closeBtn}
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate preview"
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