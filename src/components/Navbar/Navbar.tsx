import { Navigation, StyledNavLink } from "./styles";

import { useToggle } from "../../hooks/useToggle";
import { Logo } from "../../assets";
import { ROUTE } from "../../routes/routes";

export const NavBar = () => {
  const [isActive, setIsActive] = useToggle();
  return (
    <Navigation>
      <StyledNavLink to={ROUTE.HOME}>
        <Logo />
      </StyledNavLink>
    </Navigation>
  );
};
