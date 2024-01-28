// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convenient Service',
  tagline: 'Yet another approach to revisit the service object pattern, but this time focusing on the unique, opinionated features',
  url: 'https://marian13.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marian13', // Usually your GitHub org/user name.
  projectName: 'convenient_service_docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          /**
           * NOTE: How to set docs as homepage for Docusaurus
           * https://ricard.dev/how-to-set-docs-as-homepage-for-docusaurus/
           */
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/marian13/convenient_service_docs/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Convenient Service',
        logo: {
          alt: 'Convenient Service Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'installation',
            position: 'left',
            label: 'Installation',
          },
          {
            type: 'doc',
            docId: '/category/basics',
            position: 'left',
            label: 'Basics',
          },
          {
            href: 'https://github.com/marian13/convenient_service',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/installation',
              },
              {
                label: 'Basics',
                to: '/category/basics',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/tags/convenient-service',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/marian13/convenient_service',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Convenient Service. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      /**
       * NOTE: Algolia configuration template was copied from:
       * - https://docusaurus.io/docs/search#using-algolia-docsearch
       *
       * NOTE: Credentials are taken from the Algolia registration email.
       *
       * NOTE: More Algolia configuration options can be found here:
       * - https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template
       *
       * NOTE: Docusaurus classic preset already contains Algolia. That is why NO new npm package is installed.
       */
      algolia: {
        /**
         * The application ID provided by Algolia.
         */
        appId: '28FNFYWD0P',

        /**
         * Public API key: it is safe to commit it.
         * - https://docsearch.algolia.com/docs/legacy/faq/#can-i-share-the-apikey-in-my-repo
         * - https://dashboard.algolia.com/account/api-keys/all?applicationId=28FNFYWD0P
         * - https://www.algolia.com/doc/guides/security/api-keys/#create-and-manage-your-api-keys
         */
        apiKey: '42110676756fcfbcdf9d0f0fef8cb56d',

        /**
         * Index name. Can be found in the Algolia Dashboard.
         * - https://dashboard.algolia.com/apps/28FNFYWD0P/explorer/browse/convenient_service?searchMode=search
         */
        indexName: 'convenient_service',

        /**
         * https://docusaurus.io/docs/search#contextual-search
         */
        contextualSearch: true,

        /**
         * Path for search page that enabled by default (`false` to disable it).
         */
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
