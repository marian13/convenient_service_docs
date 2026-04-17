import { useState, useEffect, useRef } from "react";
import { html } from "@utils/html";
import { ChevronIcon } from "@icons";

export const Selector = ({ value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = options.find((o) => o.id === value);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return html`
    <div class="cs-selector" ref=${ref}>
      <button class="cs-selector__trigger" onClick=${() => setOpen(!open)}>
        <span>${current?.label}</span>
        <${ChevronIcon} />
      </button>
      ${open && html`
        <div class="cs-selector__dropdown">
          ${options.map(({ id, label }) => html`
            <div
              key=${id}
              class="cs-selector__option ${id === value ? "cs-selector__option--active" : ""}"
              onClick=${() => { onChange(id); setOpen(false); }}
            >
              ${label}
            </div>
          `)}
        </div>
      `}
    </div>
  `;
};
