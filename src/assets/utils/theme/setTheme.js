import { applyTheme } from "./applyTheme.js";

const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

export const setTheme = (theme) => {
  setStoredTheme(theme);
  applyTheme(theme);
};
