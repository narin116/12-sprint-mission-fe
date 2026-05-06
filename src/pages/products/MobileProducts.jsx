import React from "react";
import BestProducts from "./components/BestProducts";
import ProductsOnSale from "./components/ProductsOnSale";

const MobileProducts = () => {
  const pCol = 2;
  const bCol = 1;
  return (
    <div className="all-products-container">
      <BestProducts bCol={bCol} />
      <ProductsOnSale pCol={pCol} />
    </div>
  );
};

export default MobileProducts;
