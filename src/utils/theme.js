const getDefaultTheme = () => "flexoki-inspired";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");
const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

export const getTheme = () => getStoredTheme() || getDefaultTheme();

export const getAvailableThemes = () => [
  { id: "rose-pine-inspired",  lightLabel: "Rosé Pine Dawn-inspired",  darkLabel: "Rosé Pine Main-inspired" },
  { id: "flexoki-inspired",    lightLabel: "Flexoki-inspired",    darkLabel: "Flexoki-inspired" },
  { id: "github-inspired",     lightLabel: "GitHub Light Default-inspired",     darkLabel: "GitHub Soft Dark-inspired" },
  { id: "basecoat-inspired",   lightLabel: "Basecoat Default-inspired",   darkLabel: "Basecoat Default-inspired" },
  { id: "gruvbox-inspired",    lightLabel: "Gruvbox-inspired",    darkLabel: "Gruvbox-inspired" },
  { id: "catppuccin-inspired", lightLabel: "Catppuccin-inspired", darkLabel: "Catppuccin-inspired" },
];

export const setTheme = (theme) => {
  setStoredTheme(theme);

  document.documentElement.setAttribute("data-theme", theme);
};
