import { html } from "@utils/html";
import { useHeaderStore } from "./store.js";

export function Header() {
  const { theme, toggleTheme } = useHeaderStore();
  return html`
    <header>
      <button onClick=${toggleTheme}>${theme === "light" ? "🌙" : "☀️"}</button>
    </header>
  `;
}
