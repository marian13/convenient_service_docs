import parseHtmlFromString from "./parseHtmlFromString.js";
import generateStringFromHtml from "./generateStringFromHtml.js";

const mutateHtmlFromString = (html, mutate) => {
  const doc = parseHtmlFromString(html);

  mutate(doc);

  return generateStringFromHtml(doc);
};

export default mutateHtmlFromString;
