import { getTheme } from "./theme/getTheme.js";
import { applyTheme } from "./theme/applyTheme.js";

const getAvailableThemes = () => [
  { id: "rose-pine-inspired",  lightLabel: "Rosé Pine Dawn-inspired",  darkLabel: "Rosé Pine Main-inspired" },
  { id: "flexoki-inspired",    lightLabel: "Flexoki-inspired",    darkLabel: "Flexoki-inspired" },
  { id: "github-inspired",     lightLabel: "GitHub Light Default-inspired",     darkLabel: "GitHub Soft Dark-inspired" },
  { id: "basecoat-inspired",   lightLabel: "Basecoat Default-inspired",   darkLabel: "Basecoat Default-inspired" },
  { id: "gruvbox-inspired",    lightLabel: "Gruvbox-inspired",    darkLabel: "Gruvbox-inspired" },
  { id: "catppuccin-inspired", lightLabel: "Catppuccin-inspired", darkLabel: "Catppuccin-inspired" },
];

const getStoredTheme = () => sessionStorage.getItem("cs:theme");

const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

const setTheme = (theme) => {
  setStoredTheme(theme);
  applyTheme(theme);
};

export {
  getTheme,
  getAvailableThemes,
  applyTheme,
  setTheme
};
