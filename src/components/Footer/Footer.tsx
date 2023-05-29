import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { StyledFooter, CopyRight } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <CopyRight>©2023 Blogologo</CopyRight>
      <ThemeToggler />
    </StyledFooter>
  );
};
