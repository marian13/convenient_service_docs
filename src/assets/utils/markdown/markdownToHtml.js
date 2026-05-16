import { marked } from "marked";
import renderer from "./renderer.js";

marked.use({ renderer });

const markdownToHtml = (md) => marked.parse(md);

export default markdownToHtml;
