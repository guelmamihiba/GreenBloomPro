import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />     
    </div>
  );
};

export default MainLayout;
