import { create } from "zustand";

const usePageLoadState = create((set) => ({
  pending: 0,
  loadFired: false,
  increment: () => set((s) => ({ pending: s.pending + 1 })),
  decrement: () => set((s) => ({ pending: s.pending - 1 })),
  fireLoad: () => set({ loadFired: true }),
}));

usePageLoadState.subscribe((state) => {
  window.__ready__ = state.loadFired && state.pending === 0;
});

export default usePageLoadState;
