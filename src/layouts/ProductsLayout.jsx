import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../commons/Navigation";
import Footer from "../commons/Footer";

const ProductsLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProductsLayout;
