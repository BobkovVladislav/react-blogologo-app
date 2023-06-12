import { StyledIcon, StyledInitials, StyledNavLink, UserInfo } from "./styles";
import { NavLink } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelector";
import { memo } from "react";

interface UserAccountProps {
  handleClose: () => void;
}

export const UserAccount = memo(({ handleClose }: UserAccountProps) => {
  const { isAuth, name } = useAppSelector(getUserInfo);

  return (
    <>
      {" "}
      {isAuth ? (
        <UserInfo onClick={handleClose}>
          <StyledInitials>
            {name && name.split(" ").length > 1
              ? name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
              : name && name.split(" ").length < 2
              ? name[0].toUpperCase()
              : ""}
          </StyledInitials>
          <NavLink to={ROUTE.ACCOUNT}>
            {name && name.split(" ").length > 1
              ? name
                  .replace(/  +/g, " ")
                  .split(" ")
                  .map((n: string) => n[0].toUpperCase() + n.slice(1))
                  .join(" ")
              : name && name.split(" ").length < 2
              ? name[0].toUpperCase() + name.substring(1, name.length)
              : " "}
          </NavLink>
        </UserInfo>
      ) : (
        <UserInfo onClick={handleClose}>
          <StyledIcon />
          <StyledNavLink to={ROUTE.SIGN_IN}>Sign In</StyledNavLink>
        </UserInfo>
      )}
    </>
  );
});
