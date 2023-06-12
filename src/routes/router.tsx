import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainTemplate, RequireAuth } from "components";

import { ROUTE } from "./routes";
import {
  AccountPage,
  BlogPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ResetPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.CONTENT} element={<BlogPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route element={<RequireAuth />}>
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
