import { html } from "@utils/html";
import { Selector } from "@components/Selector";
import { getTheme, setTheme, getAvailableThemes } from "@utils/theme";

export const ThemeSelector = () => html`
  <${Selector}
    value=${getTheme()}
    options=${getAvailableThemes()}
    onChange=${setTheme}
  />
`;
