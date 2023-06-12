import React from "react";
import { Outlet } from "react-router-dom";
import { OutletWrapper, StyledMainTemplate } from "./styles";
import { Footer, NavBar } from "components";

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
