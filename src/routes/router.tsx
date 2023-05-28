import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { ROUTE } from "./routes";
import { HomePage } from "../pages/HomePage/HomePage";
import { BlogPage } from "../pages/BlogPage/BlogPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SingUpPage/SignUpPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
// import { AccountPage } from "../pages/AccountPage/AccountPage";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.CONTENT} element={<BlogPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      {/* <Route element={<RequireAuth />}>
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route> */}
    </Route>
  ),
  { basename: "/BlogoLogo" }
);
