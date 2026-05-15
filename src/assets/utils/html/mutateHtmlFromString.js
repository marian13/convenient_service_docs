import { parseHtmlFromString } from "./parseHtmlFromString.js";
import { generateStringFromHtml } from "./generateStringFromHtml.js";

export const mutateHtmlFromString = (html, mutate) => {
  const doc = parseHtmlFromString(html);
  mutate(doc);
  return generateStringFromHtml(doc);
};
