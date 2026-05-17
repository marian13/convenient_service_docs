import { create } from "zustand";

const useConvenientServiceConfigStore = create((set) => ({
  defaultConfig: "Standard",
  config: "Standard",
  setConfig: (config) => set({ config }),
}));

export default useConvenientServiceConfigStore;
