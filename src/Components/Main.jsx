import React from "react";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import { useInView } from "react-intersection-observer";
import styles from "../global.module.scss"
import HeroSerction from "./HeroSerction";

const Main = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: .1
  });
  const {ref: fillerImg, inView: fillerInView} = useInView({
    triggerOnce: true,
    threshold: .1
  });

  return (  
    <div>  
      <div id="top">
      <HeroSerction />
      </div>
      <div className="sections">
        <div className="about-break">
          <About />
        </div>
        <div className="filler" ref={ref}>
        <img src="/kaijusgrub/images/dogfoodingredients.jpeg" alt="" id="treat" className={inView ? styles.imgFade : styles.hidden}/>
        </div>
        <div className="menu-break">
          <Menu />
        </div>
        <div className="filler" ref={fillerImg}>
        <img src="/kaijusgrub/images/eattreat.jpeg" alt="" id="treat" className={fillerInView ? styles.imgFade : styles.hidden}/>
        </div>
        <div className="contact-break">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
