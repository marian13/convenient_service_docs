/**
 * Runs synchronously before CSS renders to avoid flash of default theme.
 * Cannot use ES module imports — must remain a plain script.
 * Uses ERB to inline src/utils/theme/getTheme.js, src/utils/theme/applyTheme.js, src/utils/colorScheme/getColorScheme.js, and src/utils/colorScheme/applyColorScheme.js.
*/
(() => {
  /**
   * NOTE: In dev server, `window.__cs__` is not set before this script runs, so it is initialized here with `build: false`. In build mode, Ferrum injects `window.__cs__` with `build: true` before any page scripts run, so the existing value is preserved.
   */
  window.__cs__ = window.__cs__ || { build: false, ready: { status: "started" } };

  const getDefaultTheme = () => "flexoki-inspired";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");

const getTheme = () => getStoredTheme() || getDefaultTheme();

  const applyTheme = (theme) => document.documentElement.setAttribute("data-theme", theme);

  const getDefaultColorScheme = () => "light";
const getUserPreferredColorScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const getStoredColorScheme = () => sessionStorage.getItem("cs:colorScheme");

const getColorScheme = () => getStoredColorScheme() || getUserPreferredColorScheme() || getDefaultColorScheme();

  const applyColorScheme = (colorScheme) => document.documentElement.setAttribute("data-color-scheme", colorScheme);


  applyTheme(getTheme());
  applyColorScheme(getColorScheme());
})();
