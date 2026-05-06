import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import BestProducts from "./components/BestProducts";
import ProductsOnSale from "./components/ProductsOnSale";

const PcProducts = () => {
  const pCol = 5;
  const bCol = 4;
  return (
    <div className="all-products-container">
      <BestProducts bCol={bCol} />
      <ProductsOnSale pCol={pCol} />
    </div>
  );
};

export default PcProducts;
