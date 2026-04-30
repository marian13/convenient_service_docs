import { getColorScheme } from "./colorScheme/getColorScheme.js";
import { applyColorScheme } from "./colorScheme/applyColorScheme.js";

const getStoredColorScheme = () => sessionStorage.getItem("cs:colorScheme");
const setStoredColorScheme = (colorScheme) => sessionStorage.setItem("cs:colorScheme", colorScheme);

export const setColorScheme = (colorScheme) => {
  setStoredColorScheme(colorScheme);
  applyColorScheme(colorScheme);
};

export const toggleColorScheme = () => {
  const colorScheme = getColorScheme();
  const nextColorScheme = colorScheme === "light" ? "dark" : "light";

  setColorScheme(nextColorScheme);
};

export const toggleColorSchemeAsync = () => Promise.resolve().then(toggleColorScheme);

export const isLightColorScheme = () => getColorScheme() === "light";
export const isDarkColorScheme = () => getColorScheme() === "dark";

export { getColorScheme, applyColorScheme };
