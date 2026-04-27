const getDefaultTheme = () => "flexoki-inspired";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");
const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

export const getTheme = () => getStoredTheme() || getDefaultTheme();

export const getAvailableThemes = () => [
  { id: "flexoki-inspired",      label: "Flexoki-inspired" },
  { id: "github-inspired",       label: "GitHub-inspired" },
  { id: "rose-pine-inspired",    label: "Rosé Pine-inspired" },
  { id: "gruvbox-inspired",      label: "Gruvbox-inspired" },
  { id: "catppuccin-inspired",   label: "Catppuccin-inspired" },
];

export const setTheme = (theme) => {
  setStoredTheme(theme);

  document.documentElement.setAttribute("data-theme", theme);
};
