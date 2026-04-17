import { html } from "@utils/html";
import { SunIcon, MoonIcon } from "@icons";

export function ThemeToggle({ colorScheme, onToggle }) {
  return html`
    <button class="cs-theme-toggle" onClick=${onToggle} aria-label="Toggle color scheme">
      ${colorScheme === "light" ? html`<${SunIcon} />` : html`<${MoonIcon} />`}
    </button>
  `;
}
