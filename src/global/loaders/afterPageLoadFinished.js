import { renderIsland } from "@utils/island";
import usePageLoadState from "@global/stores/usePageLoadState";

customElements.define("cs-react-island", class extends HTMLElement {
  connectedCallback() {
    usePageLoadState.getState().increment();

    renderIsland(this)
      .then(() => usePageLoadState.getState().decrement())
      .catch((error) => usePageLoadState.getState().fail(error.message));
  }
});

if (document.readyState === "complete") {
  usePageLoadState.getState().fireLoad();
} else {
  window.addEventListener("load", () => {
    usePageLoadState.getState().fireLoad();
  });
}
