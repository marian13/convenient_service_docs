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
        {
          type: 'category',
          label: 'Setup',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/setup/how_to_set_up_in_ruby',
            'guides/setup/how_to_set_up_in_rails',
            'guides/setup/how_to_set_up_in_rspec',
            'guides/setup/how_to_set_up_in_minitest',
          ],
        },
        {
          type: 'category',
          label: 'Usage',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/usage/how_to_create_and_invoke_services',
            'guides/usage/how_to_use_results',
            'guides/usage/how_to_pass_value_to_step_class_or_instance_scope',
          ],
        },
        {
          type: 'category',
          label: 'Debugging',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/debugging/how_to_debug_services_via_callbacks',
            'guides/debugging/how_to_find_result_parents',
            'guides/debugging/how_to_find_result_step',
            'guides/debugging/how_to_access_result_attributes_without_checking_its_status',
          ],
        },
        {
          type: 'category',
          label: 'Exception handling',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions',
          ],
        },
        {
          type: 'category',
          label: 'FDD',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Usage',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'guides/fdd/usage/how_to_use_entries',
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
            {
              type: 'category',
              label: 'Debugging',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'guides/advanced/debugging/how_to_debug_lib',
              ],
            },
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
            {
              type: 'category',
              label: 'Deprecations',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'guides/advanced/deprecations/how_to_migrate_from_standard_v1',
              ],
            },
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
        {
          type: 'category',
          label: 'FDD',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'best_practices/fdd/describe_feature_public_interface_using_entries',
            'best_practices/fdd/cast_feature_arguments_inside_entries',
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
            'best_practices/advanced/invoke_proxy_middleware_behavior_via_public_method',
          ],
        },
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
        'faq/why_both_failure_and_error',
        'faq/why_error_not_exception',
        'faq/is_it_possible_to_modify_step_collection_from_callback',
        'faq/why_case_when_does_not_work_with_jus_result_codes',
        'faq/what_is_purpose_of_v1_config',
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
        'troubleshooting/awesome_print_inspect_does_not_colorize_results',
        'troubleshooting/amazing_print_inspect_does_not_colorize_results',
        'troubleshooting/i18n_translate_wrong_number_of_arguments',
        'troubleshooting/added_config_but_middleware_never_called',
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
    {
      type: 'category',
      label: 'Deprecations',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'deprecations/jsend_meaning_of_failure_and_error',
        'deprecations/imports_and_exports_via_dependency_containers',
      ],
    },
    'index',
  ],
};

module.exports = sidebars;
