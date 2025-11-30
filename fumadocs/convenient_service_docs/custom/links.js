import startsWith from 'lodash/startsWith';
import replace from 'lodash/replace';

const getHost = () => process.env.HOST || 'http://localhost:3000';
const ensureLeadingSlash = (url) => startsWith(url, '/') ? url : `/${url}`;
const joinUrlParts = (...parts) => parts.reduce((url, part) => startsWith(part, '/') ? `${url}${part}` : `${url}/${part}`);
const deletePrefix = (url, prefix) => replace(url, new RegExp(`^${prefix}`), '');

export const docsLinkUrlWithPrefix = (url) => {
  if (startsWith(url, 'http')) return url; // Absolute URL.

  const host = getHost();
  const relativeUrl = ensureLeadingSlash(url);

  if (relativeUrl === '/') return joinUrlParts(host, 'v1'); // Relative `/`.
  if (startsWith(relativeUrl, '/v1/docs/')) return joinUrlParts(host, 'v1', 'docs', deletePrefix(relativeUrl, '/v1/docs')); // Relative URL like `/v1/docs/basics/failures`.
  if (startsWith(relativeUrl, '/v1/')) return joinUrlParts(host, 'v1', 'docs', deletePrefix(relativeUrl, '/v1')); // Relative URL like '/v1/basics/failures'.

  return joinUrlParts(host, 'v1', 'docs', relativeUrl); // Relative URL like '/basics/failures'.
};

export const publicLinkUrlWithPrefix = (url) => {
  if (startsWith(url, 'http')) return url; // Absolute URL.

  const host = getHost();
  const relativeUrl = ensureLeadingSlash(url);

  return joinUrlParts(host, 'v1', relativeUrl);
};
