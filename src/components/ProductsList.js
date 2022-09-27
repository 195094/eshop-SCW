import React from "react";
import ProductItem from "./ProductItem";
import ProductItemv2 from "./ProductItemv2";

const ProductsList = ({ products, curr, onProductSelect }) => {
  const renderedList = products.map((product) => {
    return <ProductItemv2 key={product.id} product={product} curr={curr} />;
  });
  return <div className="productList">{renderedList}</div>;
};

export default ProductsList;
