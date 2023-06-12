import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelector";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
