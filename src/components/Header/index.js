import { useState } from "react";
import { html } from "@utils/html";
import { getColorScheme, toggleColorScheme } from "@utils/colorScheme";
import { getPalette, setPallete, getAvailablePalletes } from "@utils/palette";
import { ThemeSelector } from "@components/ThemeSelector";
import { ThemeToggle } from "@components/ThemeToggle";

export function Header() {
  const [colorScheme, setColorScheme] = useState(getColorScheme);
  const [palette, setPalette] = useState(getPalette);

  const handleToggle = () => {
    toggleColorScheme();
    setColorScheme(getColorScheme());
  };

  const handlePaletteSelect = (id) => {
    setPallete(id);
    setPalette(id);
  };

  return html`
    <header>
      <${ThemeSelector} palette=${palette} palettes=${getAvailablePalletes()} onSelect=${handlePaletteSelect} />
      <${ThemeToggle} colorScheme=${colorScheme} onToggle=${handleToggle} />
    </header>
  `;
}
