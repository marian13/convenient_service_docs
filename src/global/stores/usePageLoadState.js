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
    window.__cs__.ready = { status: "failed", message: state.error };
  } else if (state.loadFired && state.pending === 0) {
    window.__cs__.ready = { status: "completed" };
  } else if (state.pending > 0) {
    window.__cs__.ready = { status: "in_progress" };
  } else {
    window.__cs__.ready = { status: "started" };
  }
});

export default usePageLoadState;
