const parseHtmlFromString = (html) => new DOMParser().parseFromString(html, "text/html");

export default parseHtmlFromString;
