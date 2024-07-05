import React from "react";
import Carditems from "./Carditems";
import styles from "../global.module.scss"
import { useInView } from "react-intersection-observer";

function Cards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: cards, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className="cards">
      <div ref={ref}>
      </div>
      <div ref={cards} className={`${styles.cardsContainer}`}>
        <div
          className={`${styles.cardsWrapper} ${
            cardsInView ? styles.animationFade : styles.hidden
          }`}>
          <ul className="cardsItems">
            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Peanut Butter Bacon Treats"
              label="Treat"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Pumpkin Carrot Bites"
              label="Treat"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Honey Biscuits"
              label="Treat"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Apple Carrot Biscuits"
              label="Treat"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Banana Pup Cake"
              label="Dessert"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Peanut Butter Pumpkin Cake"
              label="Dessert"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Chicken Medley"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Beef Medley"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Turkey Medley"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Salmon Medley"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Supreme Meat Medley"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Turkey Casserole"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Chicken Casserole"
              label="Meal"
              
            />

            <Carditems
              src="/kaijusgrub/images/dogfoodingredients.jpeg"
              text="Custom Meal"
              label="Special Request"
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
