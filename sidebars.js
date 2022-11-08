/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'requirements',
    'installation',
    {
      type: 'category',
      label: 'Basics',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'basics/tldr',
        'basics/services',
        'basics/results',
        'basics/failures',
        'basics/errors',
        'basics/success',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Service',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'plugins/service/caches_repeated_results',
            'plugins/service/can_adjust_foreign_result',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tests',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'RSpec',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Helpers',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'tests/rspec/helpers/wrap_method',
              ],
            },
          ],
        },
      ],
    },
    'glossary',
  ],
};

module.exports = sidebars;
