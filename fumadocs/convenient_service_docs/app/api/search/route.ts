import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// export const { GET } = createFromSource(source, {
//   // https://docs.orama.com/docs/orama-js/supported-languages
//   language: 'english',
// });

/**
 * - https://fumadocs.dev/docs/headless/search/orama#static-export
 */
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source, { language: 'english' });
