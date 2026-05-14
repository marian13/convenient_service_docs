/**
 * NOTE: Marks a doc page as reviewed on a specific date. Hidden from readers — metadata only.
 * Usage: <cs-doc-reviewed date="2026-05-15"></cs-doc-reviewed>
 */
class CsDocReviewed extends HTMLElement {}
customElements.define("cs-doc-reviewed", CsDocReviewed);
