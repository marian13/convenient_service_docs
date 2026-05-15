import React, { useState, useEffect } from "react";
import { html } from "@utils/react";
import { fetch } from "@utils/http";
import { markdownToHtml } from "@utils/markdown";

const Markdown = ({ src, transformHtml = (html) => html }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((md) => markdownToHtml(md))
      .then((html) => setContent(transformHtml(html)));
  }, [src]);

  return html`<main dangerouslySetInnerHTML=${{ __html: content }} />`;
};

export default Markdown;
