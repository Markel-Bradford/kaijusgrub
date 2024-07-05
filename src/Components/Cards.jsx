import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import styles from "../global.module.scss";
import { useInView } from "react-intersection-observer";
import ProductPreviewPopup from "./ProductPreview";

function Cards() {
  const [selectedProduct, setselectedProduct] = useState(null);
  const cardData = [
    // Array of card data with additional product details if necessary
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Peanut Butter Bacon Treats",
      description: "Description for Peanut Butter Bacon Treats Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      label: "Treat",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Pumpkin Carrot Bites",
      description: "Description for Pumpkin Carrot Bites",
      label: "Treat",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Honey Biscuits",
      description: "Description for Honey Biscuits",
      label: "Treat",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Apple Carrot Biscuits",
      description: "Description for Apple Carrot Biscuits",
      label: "Treat",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Banana Pup Cake",
      description: "Description for Banana Pup Cake",
      label: "Dessert",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Peanut Butter Pumpkin Cake",
      description: "Description for Peanut Butter Pumpkin Cake",
      label: "Dessert",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Chicken Medley",
      description: "Description for Chicken Medley",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Beef Medley",
      description: "Description for Beef Medley",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Turkey Medley",
      description: "Description for Turkey Medley",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Salmon Medley",
      description: "Description for Salmon Medley",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Supreme Meat Medley",
      description: "Description for Supreme Meat Medley",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Turkey Casserole",
      description: "Description for Turkey Casserole",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Chicken Casserole",
      description: "Description for Chicken Casserole",
      label: "Meal",
    },
    {
      src: "/kaijusgrub/images/mainlogo.png",
      text: "Custom Meal",
      description: "Description for Custom Meal",
      label: "Special",
    },
  ];

  useEffect(() => {
    // Preload all images
    const preloadImages = (images) => {
      images.forEach(image => {
        const img = new Image();
        img.src = image.src;
      });
    };

    preloadImages(cardData);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: cards, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  function showPreview(product) {
    // Set the state to the selected product
    setselectedProduct(product);
  }

  function hidePreview() {
    // Reset the state to null
    setselectedProduct(null);
  }

  return (
    <div className="cards">
      <div ref={ref}></div>
      <div ref={cards} className={`${styles.cardsContainer}`}>
        <div
          className={`${styles.cardsWrapper} ${
            cardsInView ? styles.animationFade : styles.hidden
          }`}>
          <ul className="cardsItems">
            {cardData.map((card, index) => (
              <Carditems
                key={index}
                product={card}
                src={card.src}
                text={card.text}
                label={card.label}
                description={card.description}
                onClick={showPreview}
              />
            ))}
          </ul>
        </div>
      </div>
      {selectedProduct && (
        <ProductPreviewPopup product={selectedProduct} onClose={hidePreview} />
      )}
    </div>
  );
}

export default Cards;
