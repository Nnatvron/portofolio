import React from "react";
import ContactCSS from './../Contact/Contact.module.css'

function Contact () {
    AOS.init();
    return(
        <>
            <section id="contact">
                <div className={ContactCSS.contact}>
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Contact Me</h2>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">lorem</p>
                    </div>

                    <form data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
                        <label>Name :</label>
                        <input type="text" placeholder="Enter Name" id="name" required/>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" id="email" required/>
                        <label>Phone</label>
                        <input type="phone" placeholder="Enter Phone" id="phone" required/>

                        <button>Contact</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact