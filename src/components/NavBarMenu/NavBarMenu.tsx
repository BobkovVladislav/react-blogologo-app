import { FavoritesIcon } from "../../assets";
import { Search } from "../Search/Search";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { UserAccount } from "../UserAccount/UserAccount";
import React, { memo } from "react";
import { ROUTE } from "../../routes/routes";
import { SearchWrapper, StyledFavoritesLink, StyledNav } from "./styles";

interface NavBarMenuProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -2000 },
  idle: {},
};

export const NavBarMenu = memo(
  ({ isMobile, isOpen, handleClose }: NavBarMenuProps) => {
    const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

    return (
      <StyledNav
        animate={currentVariant}
        variants={menuVariants}
        initial="idle"
      >
        {isMobile ? (
          <SearchWrapper>
            <Search
              placeholder="Search ..."
              type={"text"}
              onClick={handleClose}
            />
          </SearchWrapper>
        ) : (
          <Search
            placeholder="Search ..."
            type={"text"}
            onClick={handleClose}
          />
        )}
        <StyledFavoritesLink to={ROUTE.FAVORITES} onClick={handleClose}>
          {isMobile ? <span>Favorites</span> : <FavoritesIcon />}
        </StyledFavoritesLink>
        <UserAccount handleClose={handleClose} />
        {isMobile && <ThemeToggler />}
      </StyledNav>
    );
  }
);