const getDefaultPalette = () => "ai-style";
const getStoredPalette = () => sessionStorage.getItem("cs:palette");
const setStoredPalette = (palette) => sessionStorage.setItem("cs:palette", palette);

export const getPalette = () => getStoredPalette() || getDefaultPalette();

export const getAvailablePalletes = () => [
  { id: "ai-style",     label: "AI Style" },
  { id: "cool-neutral", label: "Cool Neutral" },
  { id: "warm-neutral", label: "Warm Neutral" },
  { id: "flexoki",      label: "Flexoki" },
  { id: "catppuccin",   label: "Catppuccin" },
  { id: "rose-pine",    label: "Rosé Pine" },
  { id: "gruvbox",      label: "Gruvbox" },
];

export const setPallete = (pallete) => {
  setStoredPalette(pallete);

  document.getElementById("theme-stylesheet").href = `./src/global/styles/themes/${pallete}.css`;
};
