import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products, onProductSelect }) => {
  const renderedList = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <div className="productList">{renderedList}</div>;
};

export default ProductsList;
