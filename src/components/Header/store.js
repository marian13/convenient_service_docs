import { create } from "zustand";

export const useHeaderStore = create((set) => ({
  theme: "light",
  toggleTheme: () => set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
}));
