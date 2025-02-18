import React, { useState, useEffect } from 'react';


function ProductPreviewPopup(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    useEffect(() => {
        if (props.product) {
          const img = new Image();
          img.src = props.product.src;
          img.onload = () => setImageLoaded(true);
        }
      }, [props.product]);
    
    if (!props.product) return null; // If no product is selected, don't render anything

    return (
      <div className="popup">
        <div className="popup-content">
          <span className="close-btn" onClick={props.onClose}>
            x
          </span>
          {imageLoaded ? (
          <img
            className="product-img"
            src={props.product.src}
            alt={props.product.text}
          /> ) : (<div>Loading...</div>) }
          <h2>{props.product.text}</h2>
          <p className="product-desc">{props.product.description}</p>
          {/* Add other product details as needed */}
        </div>
      </div>
    );
  }

  export default ProductPreviewPopup;