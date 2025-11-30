import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';

import FumadocsLink from 'fumadocs-core/link';

import { docsLinkUrlWithPrefix } from './custom/links';

const FumadocsMarkdonwCard = defaultMdxComponents.Card;
const FumadocsMarkdownLink = defaultMdxComponents.a;

const Card = ({ href, ...restProps }) => (
  <FumadocsMarkdonwCard
    {...restProps}
    href={docsLinkUrlWithPrefix(href)}
  />
)

const Link = ({ href, ...restProps }) => (
  <FumadocsLink
    {...restProps}
    href={docsLinkUrlWithPrefix(href)}
  />
)

const a = ({ href, ...restProps }) => (
  <FumadocsMarkdownLink
    {...restProps}
    href={docsLinkUrlWithPrefix(href)}
  />
)

export function getMDXComponents(components?: MDXComponents): any {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    Card,
    a,
    Link
  };
}
