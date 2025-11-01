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
  }
};

export default withMDX(config);
