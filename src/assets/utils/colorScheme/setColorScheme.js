import { applyColorScheme } from "./applyColorScheme.js";

const setStoredColorScheme = (colorScheme) => sessionStorage.setItem("cs:colorScheme", colorScheme);

export const setColorScheme = (colorScheme) => {
  setStoredColorScheme(colorScheme);
  applyColorScheme(colorScheme);
};
