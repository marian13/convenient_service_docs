import { createMDX } from 'fumadocs-mdx/next';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: {
    /**
     * NOTE:
     *   Next.js also looks for yarn.lock in the parent folders.
     *   The config below disables that behaviour.
     *   Otherwise, `yarn build` has warnings.
     */
    root: __dirname
  },

  /**
   * - https://fumadocs.dev/docs/ui/static-export
   * - https://nextjs.org/docs/pages/guides/static-exports
   */
  output: 'export',
  distDir: 'build/v1',

  /**
   * - https://nextjs.org/docs/pages/api-reference/config/next-config-js/basePath
   * - http://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix
   */
  basePath: "/v1",
  assetPrefix: "/v1"
};

export default withMDX(config);
