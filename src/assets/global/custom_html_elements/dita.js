class CsNoOpElement extends HTMLElement {}

/**
 * NOTE: DITA `shortdesc` — a brief description of the topic that appears before the body. Used in all topic types.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/shortdesc.html
 */
customElements.define("cs-dita-short-description", CsNoOpElement);

/**
 * NOTE: DITA `conbody` — the body of a concept topic. Contains explanatory prose with no steps or prerequisites.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/conbody.html
 */
customElements.define("cs-dita-concept-body", CsNoOpElement);

/**
 * NOTE: DITA `prereq` — the prerequisites section of a task topic. Lists what the reader must have or know before starting.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/prereq.html
 */
customElements.define("cs-dita-task-prerequisites", CsNoOpElement);

/**
 * NOTE: DITA `steps` — the ordered sequence of actions in a task topic. Each step is a single, concrete action.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/steps.html
 */
customElements.define("cs-dita-task-steps", CsNoOpElement);

/**
 * NOTE: DITA `result` — the expected outcome after completing all steps in a task topic.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/result.html
 */
customElements.define("cs-dita-task-result", CsNoOpElement);

/**
 * NOTE: DITA `properties` — a table of properties in a reference topic. Used for parameter/method/attribute lookup tables.
 * - https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/langRef/base/properties.html
 */
customElements.define("cs-dita-reference-properties", CsNoOpElement);
