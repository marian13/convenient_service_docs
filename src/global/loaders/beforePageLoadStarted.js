/**
 * Runs synchronously before CSS renders to avoid flash of default theme.
 * Cannot use ES module imports — must remain a plain script.
 * Duplicates logic from src/utils/theme.js and src/utils/colorScheme.js.
 * If defaults or storage keys change there, update this file too.
*/

(() => {
  const restoreTheme = () => {
    const theme = sessionStorage.getItem("cs:theme") || "ai-style";

    document.documentElement.setAttribute("data-theme", theme);
  };

  const restoreColorScheme = () => {
    const colorScheme = sessionStorage.getItem("cs:colorScheme")
      || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    document.documentElement.setAttribute("data-color-scheme", colorScheme);
  };

  restoreTheme();
  restoreColorScheme();
})();
