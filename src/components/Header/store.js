import { create } from "zustand";

export const PALETTES = [
  { id: "ai-style",     label: "AI Style" },
  { id: "cool-neutral", label: "Cool Neutral" },
  { id: "warm-neutral", label: "Warm Neutral" },
  { id: "flexoki",      label: "Flexoki" },
  { id: "catppuccin",   label: "Catppuccin" },
  { id: "rose-pine",    label: "Rosé Pine" },
  { id: "gruvbox",      label: "Gruvbox" },
];

const applyColorScheme = (scheme) => document.documentElement.setAttribute("data-theme", scheme);

const applyPalette = (id) => {
  document.getElementById("theme-stylesheet").href = `./src/styles/theme-${id}.css`;
};

export const useHeaderStore = create((set) => {
  applyColorScheme("light");
  applyPalette("ai-style");
  return {
    colorScheme: "light",
    palette: "ai-style",
    toggleColorScheme: () => set((s) => {
      const next = s.colorScheme === "light" ? "dark" : "light";
      applyColorScheme(next);
      return { colorScheme: next };
    }),
    setPalette: (id) => {
      applyPalette(id);
      set({ palette: id });
    },
  };
});
