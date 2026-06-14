import { html } from "@utils/react";
import { BookOpenIcon } from "@icons";

const TocLink = () => html`
  <a href="/docs/toc.html" class="cs-toc-link" aria-label="Table of contents">
    <${BookOpenIcon} />
  </a>
`;

export default TocLink;
