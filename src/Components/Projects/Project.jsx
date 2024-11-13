import React from "react";
import ProjectCSS from './../Projects/Project.module.css'
import Img1 from './../../../public/project1.png'
import Img2 from './../../../public/project2.png'

function Project() {
    AOS.init();
    return(
        <>
            <section id="projects" >
                <div className={ProjectCSS.project}>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Projects</h2>
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">Lorem</p>
                    <div className={ProjectCSS.project_card} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                        <img src={Img1} alt="Project-img-1" />

                        <div>
                            <h4>Web Development - Front End Developer</h4>
                            <p>My Project</p>

                            <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className={ProjectCSS.project} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">
                    <div className={ProjectCSS.project_card}>
                        <img src={Img2} alt="Project-img-2" />

                        <div>
                            <h4>Web Development - Front End Developer</h4>
                            <p>lorem</p>

                            <a href="#">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project