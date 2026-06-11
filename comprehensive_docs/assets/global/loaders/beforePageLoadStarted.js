/**
 * Runs synchronously before CSS renders to avoid flash of default theme.
 * Cannot use ES module imports — must remain a plain script.
 * Uses ERB to inline src/assets/utils/theme/getTheme.js, src/assets/utils/theme/applyTheme.js, src/assets/utils/colorScheme/getColorScheme.js, and src/assets/utils/colorScheme/applyColorScheme.js.
*/
(() => {
  const getDefaultTheme = () => "flexoki-inspired";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");

const getTheme = () => getStoredTheme() || getDefaultTheme();

getTheme;

  const applyTheme = (theme) => document.documentElement.setAttribute("data-theme", theme);

applyTheme;

  const getDefaultColorScheme = () => "light";
const getUserPreferredColorScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const getStoredColorScheme = () => sessionStorage.getItem("cs:colorScheme");

const getColorScheme = () => getStoredColorScheme() || getUserPreferredColorScheme() || getDefaultColorScheme();

getColorScheme;

  const applyColorScheme = (colorScheme) => {
  document.documentElement.setAttribute("data-color-scheme", colorScheme);

  document.querySelector('[data-syntax-highlight-theme="light"]').media = colorScheme === "light" ? "" : "not all";
  document.querySelector('[data-syntax-highlight-theme="dark"]').media = colorScheme === "dark" ? "" : "not all";
};

applyColorScheme;


  applyTheme(getTheme());
  applyColorScheme(getColorScheme());
})();
