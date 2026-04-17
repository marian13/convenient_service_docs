import { useState } from "react";

import { html } from "@utils/html";
import { SunIcon, MoonIcon } from "@icons";
import { isLightColorScheme, toggleColorSchemeAsync } from "@utils/colorScheme";

export const ColorSchemeToggle = () => {
  const [shouldTrigger, setShouldTrigger] = useState(false);

  const handleClick = () => {
    setShouldTrigger(true);

    toggleColorSchemeAsync().then(() => setShouldTrigger(false));
  };

  return html`
    <button class="cs-color-scheme-toggle" onClick=${handleClick} aria-label="Toggle theme color scheme">
      ${isLightColorScheme() ? html`<${SunIcon} />` : html`<${MoonIcon} />`}
    </button>
  `;
};
