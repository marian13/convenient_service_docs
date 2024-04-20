"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/","docId":"introduction"},{"type":"link","label":"TL;DR","href":"/tldr","docId":"tldr"},{"type":"link","label":"Requirements","href":"/requirements","docId":"requirements"},{"type":"link","label":"Installation","href":"/installation","docId":"installation"},{"type":"category","label":"Basics","collapsed":true,"items":[{"type":"link","label":"Services","href":"/basics/services","docId":"basics/services"},{"type":"link","label":"Results","href":"/basics/results","docId":"basics/results"},{"type":"link","label":"Service Goals","href":"/basics/service_goals","docId":"basics/service_goals"},{"type":"link","label":"Errors","href":"/basics/errors","docId":"basics/errors"},{"type":"link","label":"Failures","href":"/basics/failures","docId":"basics/failures"},{"type":"link","label":"Success","href":"/basics/success","docId":"basics/success"},{"type":"link","label":"Result-Ducks","href":"/basics/results_are_ducks","docId":"basics/results_are_ducks"},{"type":"link","label":"Steps","href":"/basics/steps","docId":"basics/steps"},{"type":"link","label":"Translation table","href":"/basics/step_to_result_translation_table","docId":"basics/step_to_result_translation_table"}],"collapsible":true,"href":"/category/basics"},{"type":"category","label":"Guides","collapsed":true,"items":[{"type":"link","label":"Setup in a Rails project","href":"/guides/how_to_set_up_in_rails","docId":"guides/how_to_set_up_in_rails"},{"type":"link","label":"Setup in RSpec","href":"/guides/how_to_set_up_in_rspec","docId":"guides/how_to_set_up_in_rspec"},{"type":"link","label":"How to pass a value to step from class/instance scope?","href":"/guides/how_to_pass_value_to_step_class_or_instance_scope","docId":"guides/how_to_pass_value_to_step_class_or_instance_scope"},{"type":"link","label":"How to debug services via callbacks?","href":"/guides/how_to_debug_services_via_callbacks","docId":"guides/how_to_debug_services_via_callbacks"},{"type":"link","label":"How to find result parents?","href":"/guides/how_to_find_result_parents","docId":"guides/how_to_find_result_parents"},{"type":"link","label":"How to find result step?","href":"/guides/how_to_find_result_step","docId":"guides/how_to_find_result_step"},{"type":"link","label":"How to access result attributes without checking its status?","href":"/guides/how_to_access_result_attributes_without_checking_its_status","docId":"guides/how_to_access_result_attributes_without_checking_its_status"},{"type":"link","label":"How to rescue all result unhandled exceptions?","href":"/guides/how_to_rescue_all_result_unhandled_exceptions","docId":"guides/how_to_rescue_all_result_unhandled_exceptions"},{"type":"category","label":"Advanced","collapsed":true,"items":[{"type":"link","label":"How to debug the lib?","href":"/guides/advanced/how_to_debug_lib","docId":"guides/advanced/how_to_debug_lib"},{"type":"category","label":"Logging","collapsed":true,"items":[{"type":"link","label":"How to print library logs?","href":"/guides/advanced/logging/how_to_print_lib_logs","docId":"guides/advanced/logging/how_to_print_lib_logs"}],"collapsible":true,"href":"/category/logging"},{"type":"link","label":"How to migrate from `Standard::V1`?","href":"/guides/advanced/how_to_migrate_from_standard_v1","docId":"guides/advanced/how_to_migrate_from_standard_v1"}],"collapsible":true,"href":"/category/advanced"}],"collapsible":true,"href":"/category/guides"},{"type":"category","label":"API","collapsed":true,"items":[{"type":"category","label":"Plugins","collapsed":true,"items":[{"type":"category","label":"Common","collapsed":true,"items":[{"type":"category","label":"Assigns attributes in constructor","collapsed":true,"items":[{"type":"link","label":"Assigns attributes in constructor using Dry::Initializer","href":"/api/plugins/common/assigns_attributes_in_constructor/using_dry_initializer","docId":"api/plugins/common/assigns_attributes_in_constructor/using_dry_initializer"}],"collapsible":true,"href":"/category/assigns-attributes-in-constructor"}],"collapsible":true,"href":"/category/common"}],"collapsible":true,"href":"/category/plugins"},{"type":"category","label":"Tests","collapsed":true,"items":[{"type":"category","label":"RSpec","collapsed":true,"items":[{"type":"category","label":"Matchers","collapsed":true,"items":[{"type":"link","label":"delegate_to","href":"/api/tests/rspec/matchers/delegate_to","docId":"api/tests/rspec/matchers/delegate_to"}],"collapsible":true,"href":"/category/matchers"}],"collapsible":true,"href":"/category/rspec"}],"collapsible":true,"href":"/category/tests"}],"collapsible":true,"href":"/category/api"},{"type":"category","label":"Troubleshooting","collapsed":true,"items":[{"type":"link","label":"My plugin is added to the config, but its middleware is never called","href":"/troubleshooting/added_config_but_middleware_never_called","docId":"troubleshooting/added_config_but_middleware_never_called"},{"type":"link","label":"I18n.translate wrong number of arguments","href":"/troubleshooting/i18n_translate_wrong_number_of_arguments","docId":"troubleshooting/i18n_translate_wrong_number_of_arguments"}],"collapsible":true,"href":"/category/troubleshooting"},{"type":"category","label":"Best Practices","collapsed":true,"items":[{"type":"link","label":"Avoid error shadowing","href":"/best_practices/avoid_error_shadowing","docId":"best_practices/avoid_error_shadowing"},{"type":"link","label":"Service has only one `success`","href":"/best_practices/service_has_only_one_success","docId":"best_practices/service_has_only_one_success"},{"type":"link","label":"Services with `or` conditionals","href":"/best_practices/services_with_or_conditionals","docId":"best_practices/services_with_or_conditionals"},{"type":"link","label":"Skip `result` call for boolean services","href":"/best_practices/skip_result_call_for_boolean_services","docId":"best_practices/skip_result_call_for_boolean_services"}],"collapsible":true,"href":"/category/best-practices"},{"type":"category","label":"Frequently Asked Questions","collapsed":true,"items":[{"type":"link","label":"Is it possible to modify the step collection from a callback?","href":"/faq/is_it_possible_to_modify_step_collection_from_callback","docId":"faq/is_it_possible_to_modify_step_collection_from_callback"},{"type":"link","label":"What is the purpose of Standard::V1::Config?","href":"/faq/what_is_purpose_of_v1_config","docId":"faq/what_is_purpose_of_v1_config"},{"type":"link","label":"Why `case/when` does NOT work with just result codes?","href":"/faq/why_case_when_does_not_work_with_jus_result_codes","docId":"faq/why_case_when_does_not_work_with_jus_result_codes"}],"collapsible":true,"href":"/category/frequently-asked-questions"},{"type":"category","label":"Glossary","collapsed":true,"items":[{"type":"link","label":"Boolean Service","href":"/glossary/boolean_service","docId":"glossary/boolean_service"},{"type":"link","label":"Clean Code","href":"/glossary/clean_code","docId":"glossary/clean_code"},{"type":"category","label":"FDD","collapsed":true,"items":[{"type":"link","label":"Entry","href":"/glossary/fdd/entry","docId":"glossary/fdd/entry"}],"collapsible":true,"href":"/category/fdd"},{"type":"category","label":"Advanced","collapsed":true,"items":[{"type":"link","label":"Decorator Middleware","href":"/glossary/advanced/decorator_middleware","docId":"glossary/advanced/decorator_middleware"},{"type":"link","label":"Proxy Middleware","href":"/glossary/advanced/proxy_middleware","docId":"glossary/advanced/proxy_middleware"},{"type":"link","label":"Standard::V1::Config","href":"/glossary/advanced/standard_v1","docId":"glossary/advanced/standard_v1"}],"collapsible":true,"href":"/category/advanced-1"}],"collapsible":true,"href":"/category/glossary"},{"type":"category","label":"Deprecations","collapsed":true,"items":[{"type":"link","label":"JSend meaning of failure and error","href":"/deprecations/jsend_meaning_of_failure_and_error","docId":"deprecations/jsend_meaning_of_failure_and_error"},{"type":"link","label":"Imports and exports via dependency containers","href":"/deprecations/imports_and_exports_via_dependency_containers","docId":"deprecations/imports_and_exports_via_dependency_containers"}],"collapsible":true,"href":"/category/deprecations"}]},"docs":{"api/plugins/common/assigns_attributes_in_constructor/using_dry_initializer":{"id":"api/plugins/common/assigns_attributes_in_constructor/using_dry_initializer","title":"Assigns attributes in constructor using Dry::Initializer","description":"It is so common to write constructors and attributes in Ruby like so:","sidebar":"docs"},"api/tests/rspec/matchers/delegate_to":{"id":"api/tests/rspec/matchers/delegate_to","title":"delegate_to","description":"What is delegate_to?","sidebar":"docs"},"basics/errors":{"id":"basics/errors","title":"Errors","description":"What is an error?","sidebar":"docs"},"basics/failures":{"id":"basics/failures","title":"Failures","description":"What is a failure?","sidebar":"docs"},"basics/results":{"id":"basics/results","title":"Results","description":"Motivation behind results","sidebar":"docs"},"basics/results_are_ducks":{"id":"basics/results_are_ducks","title":"Result-Ducks","description":"Why Results are Ducks?","sidebar":"docs"},"basics/service_goals":{"id":"basics/service_goals","title":"Service Goals","description":"What is the service goal?","sidebar":"docs"},"basics/services":{"id":"basics/services","title":"Services","description":"What is a service?","sidebar":"docs"},"basics/step_to_result_translation_table":{"id":"basics/step_to_result_translation_table","title":"Translation table","description":"This page contains a table of demonstrative translations of step definitions into result invocations.","sidebar":"docs"},"basics/steps":{"id":"basics/steps","title":"Steps","description":"After a while service logic may grow into more complicated and less straightforward.","sidebar":"docs"},"basics/success":{"id":"basics/success","title":"Success","description":"What is a success?","sidebar":"docs"},"best_practices/avoid_error_shadowing":{"id":"best_practices/avoid_error_shadowing","title":"Avoid error shadowing","description":"What is an error shadowing?","sidebar":"docs"},"best_practices/service_has_only_one_success":{"id":"best_practices/service_has_only_one_success","title":"Service has only one `success`","description":"Most of the time it is relatively easy to follow this rule.","sidebar":"docs"},"best_practices/services_with_or_conditionals":{"id":"best_practices/services_with_or_conditionals","title":"Services with `or` conditionals","description":"Convenient Service shines very brightly when you have and conditional logic.","sidebar":"docs"},"best_practices/skip_result_call_for_boolean_services":{"id":"best_practices/skip_result_call_for_boolean_services","title":"Skip `result` call for boolean services","description":"Let\'s check the following boolean service:","sidebar":"docs"},"deprecations/imports_and_exports_via_dependency_containers":{"id":"deprecations/imports_and_exports_via_dependency_containers","title":"Imports and exports via dependency containers","description":"The purpose of entry is significantly simpler to explain than import/export.","sidebar":"docs"},"deprecations/jsend_meaning_of_failure_and_error":{"id":"deprecations/jsend_meaning_of_failure_and_error","title":"JSend meaning of failure and error","description":"Usage of ConvenientService::Config.","sidebar":"docs"},"faq/is_it_possible_to_modify_step_collection_from_callback":{"id":"faq/is_it_possible_to_modify_step_collection_from_callback","title":"Is it possible to modify the step collection from a callback?","description":"No\u2757","sidebar":"docs"},"faq/what_is_purpose_of_v1_config":{"id":"faq/what_is_purpose_of_v1_config","title":"What is the purpose of Standard::V1::Config?","description":"Convenient Service is a young library in the constant process of polishing its public interface.","sidebar":"docs"},"faq/why_case_when_does_not_work_with_jus_result_codes":{"id":"faq/why_case_when_does_not_work_with_jus_result_codes","title":"Why `case/when` does NOT work with just result codes?","description":"Sometimes it may feel idiomatic to check the result code in the following way:","sidebar":"docs"},"glossary/advanced/decorator_middleware":{"id":"glossary/advanced/decorator_middleware","title":"Decorator Middleware","description":"A decorator middleware is a kind of middleware that always calls the next middleware in a chain.","sidebar":"docs"},"glossary/advanced/proxy_middleware":{"id":"glossary/advanced/proxy_middleware","title":"Proxy Middleware","description":"A proxy middleware is a kind of middleware that may skip calling the next middleware in a chain.","sidebar":"docs"},"glossary/advanced/standard_v1":{"id":"glossary/advanced/standard_v1","title":"Standard::V1::Config","description":"ConvenientService::Config is an outdated service configuration.","sidebar":"docs"},"glossary/boolean_service":{"id":"glossary/boolean_service","title":"Boolean Service","description":"- Boolean service is a service that confirms/denies the concrete assumption.","sidebar":"docs"},"glossary/clean_code":{"id":"glossary/clean_code","title":"Clean Code","description":"When:","sidebar":"docs"},"glossary/fdd/entry":{"id":"glossary/fdd/entry","title":"Entry","description":"Entry is a single part of the feature\'s public interface.","sidebar":"docs"},"guides/advanced/how_to_debug_lib":{"id":"guides/advanced/how_to_debug_lib","title":"How to debug the lib?","description":"Convenient Service has already more than 5000 unit and integration tests.","sidebar":"docs"},"guides/advanced/how_to_migrate_from_standard_v1":{"id":"guides/advanced/how_to_migrate_from_standard_v1","title":"How to migrate from `Standard::V1`?","description":"Consider the following old service that is using the outdated ConvenientService::Config.","sidebar":"docs"},"guides/advanced/logging/how_to_print_lib_logs":{"id":"guides/advanced/logging/how_to_print_lib_logs","title":"How to print library logs?","description":"Log levels","sidebar":"docs"},"guides/how_to_access_result_attributes_without_checking_its_status":{"id":"guides/how_to_access_result_attributes_without_checking_its_status","title":"How to access result attributes without checking its status?","description":"Unsafe methods exist only to simplify the debugging process.","sidebar":"docs"},"guides/how_to_debug_services_via_callbacks":{"id":"guides/how_to_debug_services_via_callbacks","title":"How to debug services via callbacks?","description":"Use after result","sidebar":"docs"},"guides/how_to_find_result_parents":{"id":"guides/how_to_find_result_parents","title":"How to find result parents?","description":"Use Resultparents","sidebar":"docs"},"guides/how_to_find_result_step":{"id":"guides/how_to_find_result_step","title":"How to find result step?","description":"Use Resultstep","sidebar":"docs"},"guides/how_to_pass_value_to_step_class_or_instance_scope":{"id":"guides/how_to_pass_value_to_step_class_or_instance_scope","title":"How to pass a value to step from class/instance scope?","description":"Let\'s consider the following service:","sidebar":"docs"},"guides/how_to_rescue_all_result_unhandled_exceptions":{"id":"guides/how_to_rescue_all_result_unhandled_exceptions","title":"How to rescue all result unhandled exceptions?","description":"Use RescuesResultUnhandledExceptions plugin","sidebar":"docs"},"guides/how_to_set_up_in_rails":{"id":"guides/how_to_set_up_in_rails","title":"Setup in a Rails project","description":"- As always, add a new entry to your Gemfile as the first step.","sidebar":"docs"},"guides/how_to_set_up_in_rspec":{"id":"guides/how_to_set_up_in_rspec","title":"Setup in RSpec","description":"- Add the following line to your spechelper.rb or railshelper.rb.","sidebar":"docs"},"installation":{"id":"installation","title":"Installation","description":"There are multiple installation methods. Pick the one that best fits your needs.","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"#StandWithUkraine","sidebar":"docs"},"requirements":{"id":"requirements","title":"Requirements","description":"Convenient Service has exactly the same public API and behavior for all supported Ruby versions.","sidebar":"docs"},"tldr":{"id":"tldr","title":"TL;DR","description":"I have no time to read tons of docs.","sidebar":"docs"},"troubleshooting/added_config_but_middleware_never_called":{"id":"troubleshooting/added_config_but_middleware_never_called","title":"My plugin is added to the config, but its middleware is never called","description":"Some plugins are order-dependent.","sidebar":"docs"},"troubleshooting/i18n_translate_wrong_number_of_arguments":{"id":"troubleshooting/i18n_translate_wrong_number_of_arguments","title":"I18n.translate wrong number of arguments","description":"This exception may happen when HasResultParamsValidations::UsingActiveModelValidations plugin is used in an environemnt with Ruby 3+ and Rails 5.","sidebar":"docs"}}}')}}]);