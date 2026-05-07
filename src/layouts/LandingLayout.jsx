import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer";
import styles from "./layout.module.css";

const LandingLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingLayout;
