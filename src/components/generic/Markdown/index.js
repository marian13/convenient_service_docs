import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { html } from "@utils/html";
import { fetch } from "@utils/http";

const Markdown = ({ src }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((r) => r.text())
      .then((md) => setContent(marked.parse(md)));
  }, [src]);

  return html`<main dangerouslySetInnerHTML=${{ __html: content }} />`;
};

export default Markdown;
