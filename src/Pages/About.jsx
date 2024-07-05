import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../global.module.scss"

const About = () => {
const {ref, inView} = useInView({
  triggerOnce: true,
  threshold: .1
});
const {ref: info2, inView:info2InView} = useInView({
  triggerOnce: true,
  threshold: .1
});
const {ref: info3, inView: info3InView} = useInView({
  triggerOnce: true,
  threshold: .1
});
const {ref: aboutImg, inView: aboutImgInView} = useInView({
  triggerOnce: true,
  threshold: .1
});
const {ref: about, inView: aboutInView} = useInView({
  triggerOnce: true,
  threshold: .1
})

  return (
    <div className="about-container" id="about">
      <div className="filler2"></div>
      <h1 ref={about} className={`${aboutInView ? styles.fadeIn : styles.hidden}`}>About</h1>
      <div ref={ref} className="about-info-1" >
        <p className={`${inView? styles.fadeRight : styles.hidden}`}>
          Hello, and welcome to Kaiju's Grub! My name is Emily, and I am female
          Army Veteran with 12 and a half years of services to my country. My
          basenji, the inspiration for Kaiju's Grub, is the first dog that I
          have had as an adult for close to 6 years now. I wanted to give him
          the care regarding food that I thought would benefit him the most.{" "}
        </p>
      </div>
      <div className="section-container">
        <div ref={aboutImg} className="about-img-container">
          <img className={`${aboutImgInView? styles.fadeRight : styles.hidden}`} src="/kaijusgrub/images/kaijutreat.jpg" alt="" id="about-img" />
        </div>
        <div ref={info2} className="about-info-container">
          <p className={`${info2InView? styles.fadeRight : styles.hidden}`}>
            When Kaiju was a pup, I immediately noticed that he did not take
            well to dry food. I would always have to add additional ingredients
            to make the dry food tastier and enjoyable for him. I also
            noticed how expensive dry foods and treats were in the market. With
            this in mind, I decided to do a little math and found that making
            his food and treats at home would come at a much cheaper cost!
            Seeing how he would eat with better ingredients convinced me that he
            would prefer home cooked meals over processed, store-bought foods. I
            started out by making small treats and it not only proved to be more
            economical,but it also brought me peace of mind as I knew exactly what
            wholesome ingredients were in his food! I tried my hand at making
            his meals soon after so I could include vegetables and other healthy
            ingredients, and the rest is history.
          </p>
        </div>
      </div>
      <div ref={info3} className="about-info-2">
        <p className={`${info3InView? styles.fadeRight : styles.hidden}`}>
          Six weeks after I changed his diet and started feeding him homemade
          food and treats, I noticed his energy levels had increased, he lost
          excess weight without the need of extra exercise, and most important
          of all his gut health became more consistent leading to better potty
          breaks! We have come a long way from where we started and will
          continue to strive to improve our look and taste for all of the dogs
          that rely on us to care for them!
        </p>
      </div>
    </div>
  );
};

export default About;
