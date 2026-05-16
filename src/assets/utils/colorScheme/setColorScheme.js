import applyColorScheme from "./applyColorScheme.js";

const setStoredColorScheme = (colorScheme) => sessionStorage.setItem("cs:colorScheme", colorScheme);

const setColorScheme = (colorScheme) => {
  setStoredColorScheme(colorScheme);
  applyColorScheme(colorScheme);
};

export default setColorScheme;
