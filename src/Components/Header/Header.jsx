// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderCSS from "./../Header/Header.module.css";

function Header() {
  const cursorRef = useRef(null);

  const texts = [
    "Natravell Sitra",
    "Natar",
    "Avell",
    "Natt"
  ];

  const [displayText,setDisplayText] = useState(texts[0]);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(()=>{

    AOS.init({
      duration: 100,
      once: false,
      mirror: true,
      offset: 0,
    });

    /* =========================
       SCRAMBLE TEXT
    ========================== */

    let textIndex = 0;

    const scrambleTo = (target)=>{

      let iteration = 0;

      const maxLength = Math.max(displayText.length,target.length);

      const interval = setInterval(()=>{

        const scrambled = Array.from({length:maxLength})
        .map((_,i)=>{

          if(i < iteration){
            return target[i] || "";
          }

          return letters[Math.floor(Math.random()*letters.length)];

        })
        .join("");

        setDisplayText(scrambled);

        if(iteration >= target.length){
          clearInterval(interval);
          setDisplayText(target);
        }

        iteration += 0.5;

      },40);

    };

    const glitchInterval = setInterval(()=>{

      textIndex = (textIndex + 1) % texts.length;

      scrambleTo(texts[textIndex]);

    },4000);

    /* =========================
       MAGNETIC SMOOTH
    ========================== */

    const lerp = (start,end,amt) => (1-amt)*start + amt*end;

    const handleMouseMove = (e)=>{

      const x = e.clientX;
      const y = e.clientY;

      document.documentElement.style.setProperty("--mouse-x",x+"px");
      document.documentElement.style.setProperty("--mouse-y",y+"px");

      document.querySelectorAll(`.${HeaderCSS.hero_btns} button`).forEach((btn)=>{

        const rect = btn.getBoundingClientRect();

        const btnX = rect.left + rect.width/2;
        const btnY = rect.top + rect.height/2;

        const dist = Math.hypot(x-btnX,y-btnY);

        if(dist < 150){

          const targetX = (x-btnX)*0.25;
          const targetY = (y-btnY)*0.25;

          const current = btn.style.transform.match(/-?\d+\.?\d*/g);

          const cx = current ? parseFloat(current[0]) : 0;
          const cy = current ? parseFloat(current[1]) : 0;

          const nx = lerp(cx,targetX,0.15);
          const ny = lerp(cy,targetY,0.15);

          btn.style.transform = `translate(${nx}px,${ny}px) scale(1.05)`;

        }else{

          btn.style.transform = `translate(0px,0px) scale(1)`;

        }
      });

      document.querySelectorAll(`.${HeaderCSS.social_icons} i`).forEach((icon)=>{

        const rect = icon.getBoundingClientRect();

        const iconX = rect.left + rect.width/2;
        const iconY = rect.top + rect.height/2;

        const dist = Math.hypot(x-iconX,y-iconY);

        if(dist < 120){

          const targetX = (x-iconX)*0.2;
          const targetY = (y-iconY)*0.2;

          icon.style.transform = `translate(${targetX}px,${targetY}px) scale(1.08)`;

        }else{

          icon.style.transform = `translate(0px,0px) scale(1)`;

        }
      });

      if(cursorRef.current){
        cursorRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      }
    };

    window.addEventListener("mousemove",handleMouseMove);

    return ()=>{

      window.removeEventListener("mousemove",handleMouseMove);
      clearInterval(glitchInterval);

    };

  },[displayText]);

  return (

    <section id="home" className={HeaderCSS.hero}>

      <div ref={cursorRef} className={HeaderCSS.cursor}></div>

      <div className={HeaderCSS.hero_container}>

        <div className={HeaderCSS.hero_info}>

          <h1 data-aos="fade-down" data-aos-delay="550">
            Hi, I am{" "}
            <span className={HeaderCSS.glitch}>
              {displayText}
            </span>
          </h1>

          <h2 data-aos="fade-down" data-aos-delay="650">
            Front-End Web Developer
          </h2>

          <p data-aos="fade-up" data-aos-delay="700">
            “The sky is the limit for those who are not afraid to fly.”
          </p>

          <div className={HeaderCSS.social_icons}>

            <a href="https://www.instagram.com/natar.05" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/natra.natra.3154/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://www.linkedin.com/in/natravell-sitra-99994829b" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/Nnatvron" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

          </div>

          <div className={HeaderCSS.hero_btns}>

            <a
              href="https://wa.me/6285882494679"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <button>Hire Me</button>
            </a>

            <a
              href="#contact"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <button>Live Chat</button>
            </a>

          </div>

        </div>

        <div className={HeaderCSS.hero_img} data-aos="fade-down" data-aos-delay="400">

          <model-viewer
            src="/models/gun_satellite_panel_computer.glb"
            alt="3D Computer"
            auto-rotate
            camera-controls
            ar
            style={{width:"100%",height:"420px"}}
          ></model-viewer>

        </div>

      </div>

    </section>

  );

}

export default Header;