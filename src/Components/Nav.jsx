import NavCSS from './../Components/Nav.module.css'
import { useState } from "react";

function Nav(){
    AOS.init();
    let [navbar , setnavbar] = useState({height :0, padding : 0 }) ;

    const activeNav = ()=>{
        if(navbar.height == 0){
            setnavbar({height:"3600px", padding:"20px 8%"})
        }
        else{
            setnavbar({height:0 , padding:0})
        }
    }

    return(
        <>
            <section>
                <header className={NavCSS.header}>
                    <div className={NavCSS.logo} data-aos="fade" data-aos-duration="1500">
                        <h2>N<span>.S</span></h2>
                    </div>
                    <div className={NavCSS.nav}>
                        <a href="#home" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">Home</a>
                        <a href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">About Me</a>
                        <a href="#service" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Service</a>
                        <a href="#contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">Contact</a>
                    </div>
                    <div className={NavCSS.bars} onClick={activeNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </header>
            </section>
        </>
    )
}

export default Nav