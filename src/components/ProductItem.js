import React from "react";

const ProductItem = ({ product, curr, onProductSelect }) => {
  return (
    <div className="productItem">
      <img className="picture" src={product.urls.small_s3}></img>
      <div className="prodBtn">
        <button>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
      <div className="name">{product.alt_description}</div>
      <div className="price">
        {curr}
        {product.likes}
      </div>
    </div>
  );
};

export default ProductItem;
