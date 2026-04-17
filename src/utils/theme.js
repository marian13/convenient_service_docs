const getDefaultTheme = () => "ai-style";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");
const setStoredTheme = (theme) => sessionStorage.setItem("cs:theme", theme);

export const getTheme = () => getStoredTheme() || getDefaultTheme();

export const getAvailableThemes = () => [
  { id: "ai-style",     label: "AI Style" },
  { id: "cool-neutral", label: "Cool Neutral" },
  { id: "warm-neutral", label: "Warm Neutral" },
  { id: "flexoki",      label: "Flexoki" },
  { id: "catppuccin",   label: "Catppuccin" },
  { id: "rose-pine",    label: "Rosé Pine" },
  { id: "gruvbox",      label: "Gruvbox" },
];

export const setTheme = (theme) => {
  setStoredTheme(theme);

  document.getElementById("theme-stylesheet").href = `./src/global/styles/themes/${theme}.css`;
};
