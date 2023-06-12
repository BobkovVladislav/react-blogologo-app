import React, { useEffect } from "react";
import { FormControlLabel } from "@mui/material";
import { CustomSwitch } from "./styles";
import { toggleTheme } from "store/features/themeSlice/themeSlice";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { setTheme } from "store/selectors/themeSelector";

export const ThemeToggler = () => {
  const { theme } = useAppSelector(setTheme);
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <FormControlLabel
      value="start"
      control={<CustomSwitch color="primary" />}
      label={theme === "light" ? "Dark" : "Light"}
      labelPlacement="start"
      onChange={handleTheme}
    />
  );
};
