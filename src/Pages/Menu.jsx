import React from "react";
// import photo carousel
import Carousel from "../Components/Carousel";
import { useInView } from "react-intersection-observer";
import styles from "../global.module.scss"



const Menu = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: .1
  });

  const {ref: menuInfo, inView: menuInfoInView} = useInView({
    triggerOnce: true,
    threshold: .1
  });

  return (
    <div id="menu">
      <div className="filler2" ></div> 
      <div >
        <h1 ref={ref} className={`${inView ? styles.fadeIn : styles.hidden}`}>Kaiju's Menu!</h1>
        <div ref={menuInfo} className="menu-info">
          <p id="menu-message" className={ `${menuInfoInView ? styles.fadeRight : styles.hidden}`}>
            At Kaiju's Grub, we take pride in creating nutritious homemade meals and
            snacks for our furry best friends. Here, you will find a menu with
            the treats that we currently have available for sale. 
          </p>
        </div>
        <Carousel />
        <div className="menu-container">
          <h1>Menu</h1>
          <h2>Specialized meals available</h2>
          <h3>
            *Prices subject to quantity and/or weight. Contact for pricing
            information.
          </h3>
          <h1>Treats</h1>
          <h2>Peanut Butter Bacon Treats</h2>
          <h2>Pumpkin Carrot Bites</h2>
          <h2>Honey Biscuits</h2>
          <h2>Apple Carrot Biscuits</h2>
          <h1>Dessert</h1>
          <h2>Banana Pup Cake</h2>
          <h2>Peanut Butter Pumpkin Cake</h2>
          <h1>Meals</h1>
          <h2>Chicken Medley</h2>
          <h2>Beef Medley</h2>
          <h2>Turkey Medley</h2>
          <h2>Salmon Medley</h2>
          <h2>Supreme Meat Medley</h2>
          <h2>Turkey Casserole</h2>
          <h2>Chicken Casserole</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
