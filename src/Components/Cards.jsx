import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import styles from "../global.module.scss";
import { useInView } from "react-intersection-observer";

function Cards() {
  const [selectedProduct, setselectedProduct] = useState(null);
  const cardData = [
    // Array of card data with additional product details if necessary
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Peanut Butter Bacon Treats",
        description: "Description for Peanut Butter Bacon Treats",
        label: "Treat",
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Pumpkin Carrot Bites",
        description: "Description for Pumpkin Carrot Bites",
        label: "Treat",
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Honey Biscuits",
        description: "Description for Honey Biscuits",
        label: "Treat",
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Apple Carrot Biscuits",
        description: "Description for Apple Carrot Biscuits",
        label: "Treat",
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Banana Pup Cake",
        description: "Description for Banana Pup Cake",
        label: "Dessert",
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Peanut Butter Pumpkin Cake",
        description: "Description for Peanut Butter Pumpkin Cake",
        label: "Dessert",
              },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Chicken Medley",
        description: "Description for Chicken Medley",
        label: "Meal",
              },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Beef Medley",
        description: "Description for Beef Medley",
        label: "Meal",
              },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Turkey Medley",
        description: "Description for Turkey Medley",
        label: "Meal",
              },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Salmon Medley",
        description: "Description for Salmon Medley",
        label: "Meal",
        
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Supreme Meat Medley",
        description: "Description for Supreme Meat Medley",
        label: "Meal",
        
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Turkey Casserole",
        description: "Description for Turkey Casserole",
        label: "Meal",
        
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Chicken Casserole",
        description: "Description for Chicken Casserole",
        label: "Meal",
        
      },
      {
        src: "/kaijusgrub/images/dogfoodingredients.jpeg",
        text: "Custom Meal",
        description: "Description for Custom Meal",
        label: "Special",
        
      }
    ];
    
    useEffect(() => {
      // Preload all images
      cardData.forEach(card => {
        const img = new Image();
        img.src = card.src;
      });
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
    setselectedProduct(product)
  }

  function hidePreview() {
    // Reset the state to null
    setselectedProduct(null)
  }

  function ProductPreviewPopup(props) {
    if (!props.product) return null; // If no product is selected, don't render anything

    return (
      <div className="popup">
        <div className="popup-content">
          <span className="close-btn" onClick={props.onClose}>
            x
          </span>
          <img className="product-img" src={props.product.src} alt={props.product.text} />
          <h2>{props.product.text}</h2>
          <p className="product-desc">{props.product.description}</p>
          {/* Add other product details as needed */}
        </div>
      </div>
    );
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
