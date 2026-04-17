import { useState } from "react";

import { html } from "@utils/html";
import { Selector } from "@components/Selector";
import { getTheme, setTheme, getAvailableThemes } from "@utils/theme";

export const ThemeSelector = () => {
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
    />
  `;
};
