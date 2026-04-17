import { html } from "@utils/html";
import { SunIcon, MoonIcon } from "@icons";
import { isLightColorScheme, toggleColorScheme } from "@utils/colorScheme";

export const ColorSchemeToggle = () => (
  html`
    <button class="cs-color-scheme-toggle" onClick=${toggleColorScheme} aria-label="Toggle theme color scheme">
      ${isLightColorScheme() ? html`<${SunIcon} />` : html`<${MoonIcon} />`}
    </button>
  `
);
