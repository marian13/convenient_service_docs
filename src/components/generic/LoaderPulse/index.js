import React from "react";
import cx from "classnames";
import { html } from "@utils/html";

const LoaderPulse = ({ className } = {}) => html`<span class=${cx("cs-loader-pulse", className)}></span>`;

export default LoaderPulse;
