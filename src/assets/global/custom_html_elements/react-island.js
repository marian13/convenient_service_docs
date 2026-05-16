import { renderIsland } from "@utils/react/island";

customElements.define("cs-react-island", class extends HTMLElement {
  connectedCallback() {
    renderIsland(this).catch((error) => console.error(error));
  }
});
