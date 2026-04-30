import { renderIsland } from "@utils/island";
import usePageLoadState from "@global/stores/usePageLoadState";

customElements.define("cs-react-island", class extends HTMLElement {
  connectedCallback() {
    usePageLoadState.getState().increment();

    renderIsland(this).finally(() => {
      usePageLoadState.getState().decrement();
    });
  }
});

window.addEventListener("load", () => {
  usePageLoadState.getState().fireLoad();
});
