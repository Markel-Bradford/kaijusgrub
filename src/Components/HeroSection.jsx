import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../global.module.scss"

const HeroSection = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: .1
  });

  return (
    <div className="hero">
      <div>
        <h1 id="home-welcome" ref={ref} className={`${inView ? styles.fadeIn : styles.hidden}`}>Welcome to Kaiju's Grub!</h1>
        {/* <div className="logo-container"> */}
          <video
            src="/kaijusgrub/videos/healthyfood.mp4"
            autoPlay
            playsInline
            loop
            muted
            preload="auto"></video>
          {/* <img src="/kaijusgrub/images/mainlogo.png" alt="Kaiju's Grub Logo" id="homeLogo" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
