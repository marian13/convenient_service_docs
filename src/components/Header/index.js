import { html } from "@utils/html";
import { ThemeSelector } from "@components/ThemeSelector";
import { ColorSchemeToggle } from "@components/ColorSchemeToggle";

export const Header = () =>
  html`
    <header class="cs-header">
      <${ThemeSelector} />
      <${ColorSchemeToggle} />
    </header>
  `;
