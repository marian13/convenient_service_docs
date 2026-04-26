import { useState } from "react";

import { html } from "@utils/html";
import Selector from "@components/generic/Selector";
import { getTheme, setTheme, getAvailableThemes } from "@utils/theme";
import { PaletteIcon } from "@icons";

const ThemeSelector = () => {
  const [theme, setThemeState] = useState(getTheme);

  const handleChange = (id) => {
    setTheme(id);
    setThemeState(id);
  };

  return html`
    <${Selector}
      value=${theme}
      options=${getAvailableThemes()}
      onChange=${handleChange}
      trigger=${html`<${PaletteIcon} />`}
      className="cs-theme-selector"
      dropdownClassName="cs-theme-selector__dropdown"
    />
  `;
};

export default ThemeSelector;
