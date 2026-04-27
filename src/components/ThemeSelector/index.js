import { useState } from "react";

import { html } from "@utils/html";
import Selector from "@components/generic/Selector";
import { getTheme, setTheme, getAvailableThemes } from "@utils/theme";
import { isLightColorScheme } from "@utils/colorScheme";
import { PaletteIcon } from "@icons";

const ThemeSelector = () => {
  const [theme, setThemeState] = useState(getTheme);

  const handleChange = (id) => {
    setTheme(id);
    setThemeState(id);
  };

  const options = getAvailableThemes().map((theme) => ({
    ...theme,
    label: isLightColorScheme() ? theme.lightLabel : theme.darkLabel,
  }));

  return html`
    <${Selector}
      value=${theme}
      options=${options}
      onChange=${handleChange}
      trigger=${html`<${PaletteIcon} />`}
      placement="top"
      className="cs-theme-selector"
      dropdownClassName="cs-theme-selector__dropdown"
    />
  `;
};

export default ThemeSelector;
