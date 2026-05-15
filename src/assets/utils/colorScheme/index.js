import { getColorScheme } from "./colorScheme/getColorScheme.js";
import { applyColorScheme } from "./colorScheme/applyColorScheme.js";

const getStoredColorScheme = () => sessionStorage.getItem("cs:colorScheme");

const isLightColorScheme = () => getColorScheme() === "light";
const isDarkColorScheme = () => getColorScheme() === "dark";

const setStoredColorScheme = (colorScheme) => sessionStorage.setItem("cs:colorScheme", colorScheme);

const setColorScheme = (colorScheme) => {
  setStoredColorScheme(colorScheme);
  applyColorScheme(colorScheme);
};

const toggleColorScheme = () => {
  const colorScheme = getColorScheme();
  const nextColorScheme = colorScheme === "light" ? "dark" : "light";

  setColorScheme(nextColorScheme);
};

export {
  getColorScheme,
  isLightColorScheme,
  isDarkColorScheme,
  applyColorScheme,
  setColorScheme,
  toggleColorScheme
};
