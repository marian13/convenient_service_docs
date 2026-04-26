import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { html } from "@utils/html";

export const Markdown = ({ src }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((r) => r.text())
      .then((md) => setContent(marked.parse(md)));
  }, [src]);

  return html`<main dangerouslySetInnerHTML=${{ __html: content }} />`;
};
