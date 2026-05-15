import React from "react";
import ReactDOM from "react-dom/client";

/**
 * NOTE: isPrerendered - has content now.
 */
const isPrerendered = (root) => root.children.length > 0;

/**
 * wasPrerenderedOnBuild - was captured on build.
 */
const wasPrerenderedOnBuild = (root) => root.hasAttribute("prerendered-on-build");

const getComponent = async (root) => {
  const name = root.getAttribute("component");
  const props = JSON.parse(root.getAttribute("props") || "{}");
  const { default: Component } = await import(`@components/${name}`);

  return { name, props, Component };
};

/**
 * NOTE: To prerender an island at build time, add the `prerender-on-build` attribute:
 * <cs-react-island component="generic/Markdown" props='{"src":"..."}' prerender-on-build></cs-react-island>
 *
 * - Dev  (task start)     — renders normally, `prerender-on-build` is ignored at runtime
 * - Build (task build)    — headless browser renders the island, then MarkAsPrerenderedOnBuild
 *                           swaps the attribute to `prerendered-on-build` before capturing the HTML
 * - Prod  (dist/)         — island loads with prerendered HTML and `prerendered-on-build` attribute,
 *                           renderIsland skips hydration and leaves the captured content as-is
 */
export const renderIsland = async (root) => {
  if (isPrerendered(root) && wasPrerenderedOnBuild(root)) return;

  const { Component, props } = await getComponent(root);
  const element = React.createElement(Component, props);

  isPrerendered(root)
    ? ReactDOM.hydrateRoot(root, element)
    : ReactDOM.createRoot(root).render(element);
};

