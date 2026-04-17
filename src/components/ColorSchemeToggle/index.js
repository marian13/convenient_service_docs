import { useState, useEffect } from "react";

import { html } from "@utils/html";
import { SunIcon, MoonIcon } from "@icons";
import { isLightColorScheme, toggleColorScheme } from "@utils/colorScheme";

export const ColorSchemeToggle = () => {
  const [isLight, setIsLight] = useState(isLightColorScheme);
  const [shouldToggle, setShouldToggle] = useState(false);

  useEffect(() => {
    if (!shouldToggle) return;

    toggleColorScheme();

    setShouldToggle(false);
  }, [shouldToggle]);

  const handleClick = () => {
    setIsLight(!isLight);

    setShouldToggle(true);
  };

  return html`
    <button class="cs-color-scheme-toggle" onClick=${handleClick} aria-label="Toggle theme color scheme">
      ${isLight ? html`<${SunIcon} />` : html`<${MoonIcon} />`}
    </button>
  `;
};
