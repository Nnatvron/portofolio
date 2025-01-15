import React from "react";
import ServiceCSS from './../Service/Service.module.css'

function Service () {
    AOS.init();
    return(
        <>
            <section id="project">
                <div className={ServiceCSS.service}>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Project</h2>
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">MY ALL PROJECT</p>

                    <div className={ServiceCSS.service_cards}>
                        <div className={ServiceCSS.Service_card} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                            <i className="fa-solid fa-display"></i>
                            <h1>QR CODE GENERATOR</h1>
                            <p>QR Code Generator adalah website yang memungkinkan pengguna membuat QR code dari teks atau link yang mereka masukkan.</p>

                            <a href="https://qr-code-nnatvron.vercel.app/?fbclid=PAY2xjawGhYIRleHRuA2FlbQIxMQABpt9IlI8xTVe2RcDzT1w_ELbdiacrbzFDIM-_8TSdmbzVZHLJMTwhc9sXCA_aem_Cw_cSGOCvnHZUxySSVhMpw">
                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>

                        <div className={ServiceCSS.Service_card} data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                        <i className="fa-solid fa-chart-line" id={ServiceCSS.icon}></i>
                            <h1>IT SUPPORT BEKASI</h1>
                            <p>Website IT Support Bekasi adalah proyek yang saya kerjakan atas permintaan guru disekolah untuk menyediakan jasa layanan IT di Bekasi.</p>

                            <a href="https://itsupportbekasi.vercel.app/" >
                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>

                        <div className={ServiceCSS.Service_card} data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                        <i className="fa-solid fa-chart-line" id={ServiceCSS.icon}></i>
                            <h1>UBUNTU SERVER</h1>
                            <p>Website Ubuntu Server adalah tutorial atau langkah-langkah untuk membuat ubuntu server menggunakan linux pada virtual box.</p>

                            <a href="https://ubuntu-natar.vercel.app/" >
                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service