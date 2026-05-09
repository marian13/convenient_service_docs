import React, { useState, useEffect } from "react";
import { html } from "@utils/html";
import { fetch } from "@utils/http";
import { markdownToHtml } from "@utils/markdown";

const Markdown = ({ src }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((r) => r.text())
      .then((md) => setContent(markdownToHtml(md)));
  }, [src]);

  return html`<main dangerouslySetInnerHTML=${{ __html: content }} />`;
};

export default Markdown;
