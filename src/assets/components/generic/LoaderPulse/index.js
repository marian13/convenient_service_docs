import React from "react";
import cx from "classnames";
import { html } from "@utils/react";

const LoaderPulse = ({ className } = {}) => html`<span class=${cx("cs-loader-pulse", className)}></span>`;

export default LoaderPulse;
