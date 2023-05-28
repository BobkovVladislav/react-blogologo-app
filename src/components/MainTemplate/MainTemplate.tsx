import React from "react";
import { Outlet } from "react-router-dom";
import { OutletWrapper, StyledMainTemplate } from "./styles";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navbar/Navbar";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <NavBar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </StyledMainTemplate>
  );
};
