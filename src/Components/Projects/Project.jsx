// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCSS from "./../Projects/Project.module.css";
import Img1 from "./../../../public/project1.png";
import Img2 from "./../../../public/project2.png";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="projects" className={ProjectCSS.project}>
      <div className={ProjectCSS.project_container}>
        {/* Section Title */}
        <h2 data-aos="fade-up" data-aos-delay="100">
          Projects
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Some of my featured projects showcasing design and front-end skills.
        </p>

        {/* Project Cards */}
        <div className={ProjectCSS.project_Cards}>
          {/* Card 1 */}
          <div
            className={ProjectCSS.project_card}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img src={Img1} alt="Portfolio Project 1" />

            <div>
              <h4>Web Development — Front-End Developer</h4>
              <p>Modern portfolio site built with React and Vite.</p>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={ProjectCSS.project_card}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img src={Img2} alt="Portfolio Project 2" />

            <div>
              <h4>Responsive Web App — Front-End Developer</h4>
              <p>Landing page designed with smooth animations and clean UI.</p>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
