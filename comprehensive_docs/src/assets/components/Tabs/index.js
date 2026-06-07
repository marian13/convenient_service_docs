import React from "react";
import { html } from "@utils/react";
import { cn } from "@utils/classnames";
import CSMarkdown from "@components/CSMarkdown";
import { useConvenientServiceConfigStore } from "@stores";

const Tabs = ({ tabs = [] }) => {
  const { config, defaultConfig, setConfig } = useConvenientServiceConfigStore();

  const activeTab = tabs.find((tab) => tab.label === config) || tabs.find((tab) => tab.label === defaultConfig) || {};

  return html`
    <div class="cs-tabs">
      <div class="cs-tabs__bar">
        ${tabs.map((tab) => html`
          <button
            key=${tab.label}
            class=${cn("cs-tabs__tab", { "cs-tabs__tab--active": tab.label === activeTab.label })}
            onClick=${() => setConfig(tab.label)}
          >
            ${tab.label}
          </button>
        `)}
      </div>

      <div class="cs-tabs__content">
        <${CSMarkdown} content=${activeTab.content || ""} />
      </div>
    </div>
  `;
};

export default Tabs;
