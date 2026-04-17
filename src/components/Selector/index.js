import { useState, useEffect, useRef } from "react";
import cx from "classnames";

import { html } from "@utils/html";
import { ChevronIcon } from "@icons";

export const Selector = ({ value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const currentOption = options.find((option) => option.id === value);

  useEffect(() => {
    if (!open) return;

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleTriggerClick = () => setOpen(!open);

  const handleOptionClick = (id) => {
    onChange(id);

    setOpen(false);
  };

  return html`
    <div class="cs-selector" ref=${containerRef}>
      <button class="cs-selector__trigger" onClick=${handleTriggerClick}>
        <span>${currentOption?.label}</span>

        <${ChevronIcon} />
      </button>

      ${open && html`
        <div class="cs-selector__dropdown">
          ${options.map(({ id, label }) => html`
            <div
              key=${id}
              class=${cx("cs-selector__option", { "cs-selector__option--active": id === value })}
              onClick=${() => handleOptionClick(id)}
            >
              ${label}
            </div>
          `)}
        </div>
      `}
    </div>
  `;
};
