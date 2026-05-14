/**
 * NOTE: DITA `shortdesc` — a brief description of the topic that appears before the body. Used in all topic types.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/shortdesc.html
 */
class CsDitaShortDescription extends HTMLElement {}
customElements.define("cs-dita-short-description", CsDitaShortDescription);

/**
 * NOTE: DITA `conbody` — the body of a concept topic. Contains explanatory prose with no steps or prerequisites.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/conbody.html
 */
class CsDitaConceptBody extends HTMLElement {}
customElements.define("cs-dita-concept-body", CsDitaConceptBody);

/**
 * NOTE: DITA `prereq` — the prerequisites section of a task topic. Lists what the reader must have or know before starting.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/prereq.html
 */
class CsDitaTaskPrerequisites extends HTMLElement {}
customElements.define("cs-dita-task-prerequisites", CsDitaTaskPrerequisites);

/**
 * NOTE: DITA `steps` — the ordered sequence of actions in a task topic. Each step is a single, concrete action.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/steps.html
 */
class CsDitaTaskSteps extends HTMLElement {}
customElements.define("cs-dita-task-steps", CsDitaTaskSteps);

/**
 * NOTE: DITA `result` — the expected outcome after completing all steps in a task topic.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/result.html
 */
class CsDitaTaskResult extends HTMLElement {}
customElements.define("cs-dita-task-result", CsDitaTaskResult);

/**
 * NOTE: DITA `refsyn` — the syntax or signature section of a reference topic. Shows how the element is declared or called.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/refsyn.html
 */
class CsDitaReferenceSyntax extends HTMLElement {}
customElements.define("cs-dita-reference-syntax", CsDitaReferenceSyntax);

/**
 * NOTE: DITA `properties` — a table of properties in a reference topic. Used for parameter/attribute/requirement lookup tables.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/properties.html
 */
class CsDitaReferenceProperties extends HTMLElement {}
customElements.define("cs-dita-reference-properties", CsDitaReferenceProperties);

/**
 * NOTE: DITA `example` — an example that illustrates the topic. Can appear in any topic type.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/example.html
 */
class CsDitaExample extends HTMLElement {}
customElements.define("cs-dita-example", CsDitaExample);

/**
 * NOTE: DITA `related-links` — links to related topics. Can appear in any topic type.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/related-links.html
 */
class CsDitaRelatedLinks extends HTMLElement {}
customElements.define("cs-dita-related-links", CsDitaRelatedLinks);
