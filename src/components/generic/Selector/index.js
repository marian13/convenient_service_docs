import { useState } from "react";
import cx from "classnames";
import { useFloating, useClick, useDismiss, useInteractions, offset, shift } from "@floating-ui/react";

import { html } from "@utils/html";
import { ChevronIcon } from "@icons";

const useFloatingUI = ({ open, onOpenChange, placement }) => {
  /**
   * NOTE: Floating UI accepts only px. 4 = 0.25rem at 16px base. Matches header padding-right so dropdown aligns with controls.
   * - https://floating-ui.com/docs/shift#padding
   */
  const { refs, floatingStyles, context } = useFloating({ open, onOpenChange, placement, middleware: [offset(8), shift({ padding: 4 })] });
  const { getReferenceProps, getFloatingProps } = useInteractions([useClick(context), useDismiss(context)]);

  return {
    triggerRef: refs.setReference,
    dropdownRef: refs.setFloating,
    dropwondStyles: floatingStyles,
    getTriggerProps: getReferenceProps,
    getDropdownProps: getFloatingProps
  };
};

const useSelector = ({ value, options, onChange, trigger, placement }) => {
  const [open, setOpen] = useState(false);

  const floatingUI = useFloatingUI({ open, onOpenChange: setOpen, placement });

  const currentOption = options.find((option) => option.id === value);

  const handleOptionClick = (id) => {
    onChange(id);

    setOpen(false);
  };

  const renderTrigger = () => {
    if (trigger) return trigger;

    return html`
      <span>${currentOption?.label}</span>

      <${ChevronIcon} />
    `;
  };

  return {
    open,
    floatingUI,
    handleOptionClick,
    renderTrigger
  };
};

const Selector = ({ value, options, onChange, trigger, placement, className, dropdownClassName }) => {
  const { open, floatingUI, handleOptionClick, renderTrigger } = useSelector({ value, options, onChange, trigger, placement });

  return html`
    <div class=${cx("cs-selector", className)}>
      <button class="cs-selector__trigger" ref=${floatingUI.triggerRef} ...${floatingUI.getTriggerProps()}>
        ${renderTrigger()}
      </button>

      ${open && html`
        <div class=${cx("cs-selector__dropdown", dropdownClassName)} ref=${floatingUI.dropdownRef} style=${floatingUI.dropwondStyles} ...${floatingUI.getDropdownProps()}>
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

export default Selector;
