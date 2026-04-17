import { useState, useEffect, useRef } from "react";
import { html } from "@utils/html";
import { ChevronIcon } from "@icons";

export function ThemeSelector({ palette, palettes, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = palettes.find((p) => p.id === palette);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return html`
    <div class="cs-theme-selector" ref=${ref}>
      <button class="cs-theme-selector__trigger" onClick=${() => setOpen(!open)}>
        <span>${current?.label}</span>
        <${ChevronIcon} />
      </button>
      ${open && html`
        <div class="cs-theme-selector__dropdown">
          ${palettes.map(({ id, label }) => html`
            <div
              key=${id}
              class="cs-theme-selector__option ${id === palette ? "cs-theme-selector__option--active" : ""}"
              onClick=${() => { onSelect(id); setOpen(false); }}
            >
              ${label}
            </div>
          `)}
        </div>
      `}
    </div>
  `;
}
