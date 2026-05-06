import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer";

const LandingLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
