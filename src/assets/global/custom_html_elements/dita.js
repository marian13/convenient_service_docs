/**
 * NOTE: DITA `shortdesc` — a brief description of the topic that appears before the body. Used in all topic types.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/shortdesc.html
 */
customElements.define("cs-dita-short-description", class extends HTMLElement {});

/**
 * NOTE: DITA `conbody` — the body of a concept topic. Contains explanatory prose with no steps or prerequisites.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/conbody.html
 */
customElements.define("cs-dita-concept-body", class extends HTMLElement {});

/**
 * NOTE: DITA `prereq` — the prerequisites section of a task topic. Lists what the reader must have or know before starting.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/prereq.html
 */
customElements.define("cs-dita-task-prerequisites", class extends HTMLElement {});

/**
 * NOTE: DITA `steps` — the ordered sequence of actions in a task topic. Each step is a single, concrete action.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/steps.html
 */
customElements.define("cs-dita-task-steps", class extends HTMLElement {});

/**
 * NOTE: DITA `result` — the expected outcome after completing all steps in a task topic.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/result.html
 */
customElements.define("cs-dita-task-result", class extends HTMLElement {});

/**
 * NOTE: DITA `refsyn` — the syntax or signature section of a reference topic. Shows how the element is declared or called.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/refsyn.html
 */
customElements.define("cs-dita-reference-syntax", class extends HTMLElement {});

/**
 * NOTE: DITA `properties` — a table of properties in a reference topic. Used for parameter/attribute/requirement lookup tables.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/properties.html
 */
customElements.define("cs-dita-reference-properties", class extends HTMLElement {});

/**
 * NOTE: DITA `example` — an example that illustrates the topic. Can appear in any topic type.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/example.html
 */
customElements.define("cs-dita-example", class extends HTMLElement {});

/**
 * NOTE: DITA `related-links` — links to related topics. Can appear in any topic type.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/related-links.html
 */
customElements.define("cs-dita-related-links", class extends HTMLElement {});
