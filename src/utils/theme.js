const getDefaultTheme = () => "ai-style";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");
const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

export const getTheme = () => getStoredTheme() || getDefaultTheme();

export const getAvailableThemes = () => [
  { id: "ai-style",     label: "AI Style" },
  { id: "cool-neutral", label: "Cool Neutral" },
  { id: "warm-neutral", label: "Warm Neutral" },
  { id: "flexoki-inspired",      label: "Flexoki-inspired" },
  { id: "catppuccin-inspired",   label: "Catppuccin-inspired" },
  { id: "rose-pine-inspired",    label: "Rosé Pine-inspired" },
  { id: "gruvbox-inspired",      label: "Gruvbox-inspired" },
];

export const setTheme = (theme) => {
  setStoredTheme(theme);

  document.documentElement.setAttribute("data-theme", theme);
};
