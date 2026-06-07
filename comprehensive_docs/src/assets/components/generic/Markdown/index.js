import React, { useState, useEffect } from "react";
import { html } from "@utils/react";
import { fetch } from "@utils/http";
import { markdownToHtml } from "@utils/markdown";

/**
 * NOTE: Accepts `src` (fetches from URL) or `content` (inline markdown string).
 *   <Markdown src="/docs/page.md" />
 *   <Markdown src="/docs/page.md" transformHtml={addLinks} />
 *   <Markdown content="# Hello" />
 *   <Markdown content="# Hello" transformHtml={addLinks} />
 */
const Markdown = ({ src, content, transformHtml = (html) => html }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  const getInitialMarkdown = () => content ? Promise.resolve(content) : fetch(src).then((response) => response.text());

  useEffect(() => {
    getInitialMarkdown()
      .then((markdown) => markdownToHtml(markdown))
      .then((html) => setMarkdownContent(transformHtml(html)));
  }, [src, content]);

  return html`<main dangerouslySetInnerHTML=${{ __html: markdownContent }} />`;
};

export default Markdown;
