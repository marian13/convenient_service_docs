import { create } from "zustand";

const usePageLoadState = create((set) => ({
  pending: 0,
  loadFired: false,
  error: null,
  increment: () => set((s) => ({ pending: s.pending + 1 })),
  decrement: () => set((s) => ({ pending: s.pending - 1 })),
  fireLoad: () => set({ loadFired: true }),
  fail: (message) => set({ error: message }),
}));

usePageLoadState.subscribe((state) => {
  if (state.error) {
    window.__ready__ = { status: "failure", message: state.error };
  } else if (state.loadFired && state.pending === 0) {
    window.__ready__ = { status: "success" };
  } else {
    window.__ready__ = null;
  }
});

export default usePageLoadState;
