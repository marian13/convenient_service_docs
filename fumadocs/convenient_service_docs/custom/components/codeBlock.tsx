/**
 * - https://github.com/fuma-nama/fumadocs/blob/47fb359b819559e6d742233b1e5167828e322b2e/apps/docs/components/code-block.tsx
 */
import * as Base from 'fumadocs-ui/components/codeblock';
import { getHighlighter, hastToJsx } from 'fumadocs-core/highlight';
// import { cn } from '@/utils/cn';
import { twMerge as cn } from 'tailwind-merge';

import type { BundledLanguage } from 'shiki';

export interface CodeBlockProps {
  code: string;
  wrapper?: Base.CodeBlockProps;
  lang: string;
}

const highlighter = await getHighlighter('js', {
  langs: ['ruby', 'bash'],
  themes: ['github-dark', 'github-light'],
});

export async function CodeBlock({ code, lang, wrapper }: CodeBlockProps) {
  await highlighter.loadLanguage(lang as BundledLanguage);
  const hast = highlighter.codeToHast(code, {
    lang,
    defaultColor: false,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });

  const rendered = hastToJsx(hast, {
    components: {
      pre: Base.Pre,
    },
  });

  return (
    <Base.CodeBlock {...wrapper} className={cn('my-0', wrapper?.className)}>
      {rendered}
    </Base.CodeBlock>
  );
}
