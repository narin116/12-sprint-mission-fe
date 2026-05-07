import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../commons/Navigation";
import Footer from "../commons/Footer";
import styles from "./layout.module.css";

const ProductsLayout = () => {
  return (
    <div className={styles.layout}>
      <div>
        <Navigation />
        <Outlet />
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductsLayout;
