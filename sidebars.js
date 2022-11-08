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
          label: 'Common',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Assigns attributes in constructor',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'plugins/common/assigns_attributes_in_constructor/using_active_model_attribute_assignment',
                'plugins/common/assigns_attributes_in_constructor/using_dry_initializer',
              ],
            },
            'plugins/common/caches_constructor_params',
            'plugins/common/caches_return_value',
            'plugins/common/can_be_copied',
            'plugins/common/has_around_callbacks',
            'plugins/common/has_attributes',
            'plugins/common/has_callbacks',
            'plugins/common/has_constructor',
            'plugins/common/has_internals',
            'plugins/common/normalizes_env',
          ],
        },
        {
          type: 'category',
          label: 'Service',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'plugins/service/can_recalculate_result',
            'plugins/service/has_result',
            'plugins/service/has_result_method_steps',
            'plugins/service/has_result_params_validations',
            'plugins/service/has_result_short_syntax',
            'plugins/service/has_result_steps',
            'plugins/service/raises_on_double_result',
            'plugins/service/wraps_result_in_db_transaction',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'advanced/concern',
        'advanced/middleware',
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
    'motivation',
    'limitations',
    'glossary',
  ],
};

module.exports = sidebars;
