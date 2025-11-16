import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';

import FumadocsLink from 'fumadocs-core/link';

import isEmpty from 'lodash/isEmpty';
import startsWith from 'lodash/startsWith';
import replace from 'lodash/replace';

const FumadocsMarkdonwCard = defaultMdxComponents.Card;
const FumadocsMarkdownLink = defaultMdxComponents.a;

// TODO: Cleanup.
const Card = ({ href, ...restProps }) => (
  <FumadocsMarkdonwCard
    {...restProps}
    href={!isEmpty(href) && startsWith(href, '/v1') ? replace(href, '/v1', '') : href}
  />
)

const Link = ({ href, ...restProps }) => (
  <FumadocsLink
    {...restProps}
    href={!isEmpty(href) && startsWith(href, '/v1') ? replace(href, '/v1', '') : href}
  />
)

const a = ({ href, ...restProps }) => (
  <FumadocsMarkdownLink
    {...restProps}
    href={!isEmpty(href) ? (startsWith(href, '/') ? `/docs${href}` : `/docs/${href}`) : href}
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
