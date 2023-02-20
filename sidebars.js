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
        'basics/results_are_ducks',
        'basics/steps',
        'basics/step_to_result_translation_table',
        'basics/configs',
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
        'guides/how_to_create_custom_config',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'advanced_guides/concern',
        'advanced_guides/middleware',
        'advanced_guides/internals',
        'advanced_guides/how_to_debug_lib',
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
                'api/plugins/common/overview',
                {
                  type: 'category',
                  label: 'Assigns attributes in constructor',
                  link: {
                    type: 'generated-index',
                  },
                  collapsed: true,
                  items: [
                    'api/plugins/common/assigns_attributes_in_constructor/using_active_model_attribute_assignment',
                    'api/plugins/common/assigns_attributes_in_constructor/using_dry_initializer',
                  ],
                },
                'api/plugins/common/caches_constructor_params',
                'api/plugins/common/caches_return_value',
                'api/plugins/common/can_be_copied',
                'api/plugins/common/has_around_callbacks',
                'api/plugins/common/has_attributes',
                'api/plugins/common/has_callbacks',
                'api/plugins/common/has_constructor',
                'api/plugins/common/has_internals',
                'api/plugins/common/normalizes_env',
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
                'api/plugins/service/overview',
                'api/plugins/service/can_recalculate_result',
                'api/plugins/service/has_result',
                'api/plugins/service/has_result_method_steps',
                {
                  type: 'category',
                  label: 'Has result params validations',
                  link: {
                    type: 'generated-index',
                  },
                  collapsed: true,
                  items: [
                    'api/plugins/service/has_result_params_validations/using_active_model_validations',
                    'api/plugins/service/has_result_params_validations/using_dry_validation',
                  ],
                },
                'api/plugins/service/has_result_short_syntax',
                'api/plugins/service/has_result_steps',
                'api/plugins/service/raises_on_double_result',
                'api/plugins/service/wraps_result_in_db_transaction',
              ],
            },
            {
              type: 'category',
              label: 'Result',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'api/plugins/result/overview',
                'api/plugins/result/can_recalculate_result',
                'api/plugins/result/has_result_short_syntax',
                'api/plugins/result/marks_result_status_as_checked',
                'api/plugins/result/raises_on_not_checked_result_status',
              ],
            },
            {
              type: 'category',
              label: 'Step',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'api/plugins/step/overview',
              ],
            },
            {
              type: 'category',
              label: 'Internals',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              items: [
                'api/plugins/internals/overview',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Configs',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'api/configs/standard',
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
                    'api/tests/rspec/helpers/wrap_method',
                  ],
                },
                {
                  type: 'category',
                  label: 'Matchers',
                  link: {
                    type: 'generated-index',
                  },
                  collapsed: true,
                  items: [
                    'api/tests/rspec/matchers/delegate_to',
                    {
                      type: 'category',
                      label: 'Results',
                      link: {
                        type: 'generated-index',
                      },
                      collapsed: true,
                      items: [
                        'api/tests/rspec/matchers/results/be_failure',
                        'api/tests/rspec/matchers/results/be_error',
                        'api/tests/rspec/matchers/results/be_success',
                      ],
                    },
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
        'troubleshooting/i_am_a_convenient_service_debuggerer',
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
        'best_practices/prefer_memoized_instance_variables_over_arguments_passing',
        'best_practices/avoid_mixing_private_methods_for_independent_operations',
        'best_practices/do_not_use_direct_puts_in_services',
        'best_practices/write_specs_not_only_for_conditionals',
        'best_practices/leverage_powerful_ruby_ecosystem',
        'best_practices/avoid_mutation_when_possible',
        'best_practices/use_collection_closure_methods_for_array_services',
        'best_practices/no_validation_checks_for_successful_results',
        'best_practices/delegate_iteration_in_array_services',
        'best_practices/no_success_data_in_boolean_services',
        'best_practices/try_services_always_return_success',
        'best_practices/start_service_names_with_verb'
      ],
    },
    'motivation',
    'limitations',
    {
      type: 'category',
      label: 'Glossary',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'glossary/decorator_middleware',
        'glossary/proxy_middleware',
      ],
    },
  ],
};

module.exports = sidebars;
