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
    'tldr',
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
        'basics/services',
        'basics/results',
        'basics/service_goals',
        'basics/errors',
        'basics/failures',
        'basics/success',
        'basics/results_are_ducks',
        'basics/steps',
        'basics/step_to_result_translation_table',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'guides/how_to_set_up_in_rails',
        'guides/how_to_set_up_in_rspec',
        'guides/how_to_pass_value_to_step_class_or_instance_scope',
        'guides/how_to_debug_services_via_callbacks',
        'guides/how_to_find_result_parents',
        'guides/how_to_find_result_step',
        'guides/how_to_access_result_attributes_without_checking_its_status',
        'guides/how_to_rescue_all_result_unhandled_exceptions',
        {
          type: 'category',
          label: 'Advanced',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/advanced/how_to_debug_lib',
            {
              type: 'category',
              label: 'Logging',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'guides/advanced/logging/how_to_print_lib_logs',
              ],
            },
            'guides/advanced/how_to_migrate_from_standard_v1',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
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
                    'api/plugins/common/assigns_attributes_in_constructor/using_dry_initializer',
                  ],
                },
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
                  label: 'Matchers',
                  link: {
                    type: 'generated-index',
                  },
                  collapsed: true,
                  items: [
                    'api/tests/rspec/matchers/delegate_to',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'troubleshooting/added_config_but_middleware_never_called',
        'troubleshooting/i18n_translate_wrong_number_of_arguments',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'best_practices/avoid_error_shadowing',
        'best_practices/service_has_only_one_success',
        'best_practices/services_with_or_conditionals',
        'best_practices/skip_result_call_for_boolean_services',
      ],
    },
    {
      type: 'category',
      label: 'Frequently Asked Questions',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'faq/is_it_possible_to_modify_step_collection_from_callback',
        'faq/what_is_purpose_of_v1_config',
        'faq/why_case_when_does_not_work_with_jus_result_codes',
      ],
    },
    {
      type: 'category',
      label: 'Glossary',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'glossary/boolean_service',
        'glossary/clean_code',
        {
          type: 'category',
          label: 'FDD',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'glossary/fdd/entry',
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
            'glossary/advanced/decorator_middleware',
            'glossary/advanced/proxy_middleware',
            'glossary/advanced/standard_v1',
          ],
        },
      ],
    },
    'deprecations'
  ],
};

module.exports = sidebars;
