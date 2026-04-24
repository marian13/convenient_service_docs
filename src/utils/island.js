import React from "react";
import ReactDOM from "react-dom/client";

export const renderIsland = async (root) => {
  if (isPrerendered(root) && isStatic(root)) return;

  const { Component, props } = await getComponent(root);
  const element = React.createElement(Component, props);

  isPrerendered(root) && !isForced(root)
    ? ReactDOM.hydrateRoot(root, element)
    : ReactDOM.createRoot(root).render(element);
};

const isForced = (root) => root.hasAttribute("force");
const isPrerendered = (root) => root.children.length > 0;
const isStatic = (root) => root.hasAttribute("static");

const getComponent = async (root) => {
  const name = root.getAttribute("component");
  const props = JSON.parse(root.getAttribute("props") || "{}");
  const { [name]: Component } = await import(`/src/components/${name}/index.js`);

  return { name, props, Component };
};

