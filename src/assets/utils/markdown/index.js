import { marked } from "marked";
import renderer from "./renderer.js";

marked.use({ renderer });

export const markdownToHtml = (md) => marked.parse(md);
