import applyTheme from "./applyTheme.js";

const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

const setTheme = (theme) => {
  setStoredTheme(theme);
  applyTheme(theme);
};

export default setTheme;
