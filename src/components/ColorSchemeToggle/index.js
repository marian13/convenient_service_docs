import { useState } from "react";

import { html } from "@utils/html";
import LoaderPulse from "@components/generic/LoaderPulse";
import { SunIcon, MoonIcon } from "@icons";
import { isLightColorScheme, toggleColorSchemeAsync } from "@utils/colorScheme";
import { isBuildEnvironment } from "@utils/env";

const ColorSchemeToggle = () => {
  const [shouldTrigger, setShouldTrigger] = useState(false);

  const handleClick = () => {
    setShouldTrigger(true);

    toggleColorSchemeAsync().then(() => setShouldTrigger(false));
  };

  return html`
    <button class="cs-color-scheme-toggle" onClick=${handleClick} aria-label="Toggle theme color scheme">
      ${shouldTrigger || isBuildEnvironment() ? html`<${LoaderPulse} className="cs-color-scheme-toggle__loader" />` : isLightColorScheme() ? html`<${SunIcon} />` : html`<${MoonIcon} />`}
    </button>
  `;
};

export default ColorSchemeToggle;
