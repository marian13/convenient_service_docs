import { html } from "@utils/html";
import { useHeaderStore, PALETTES } from "./store.js";

export function Header() {
  const { colorScheme, palette, toggleColorScheme, setPalette } = useHeaderStore();

  return html`
    <header>
      <select value=${palette} onChange=${(e) => setPalette(e.target.value)}>
        ${PALETTES.map(({ id, label }) => html`
          <option key=${id} value=${id}>${label}</option>
        `)}
      </select>
      <button onClick=${toggleColorScheme}>${colorScheme === "light" ? "🌙" : "☀️"}</button>
    </header>
  `;
}
