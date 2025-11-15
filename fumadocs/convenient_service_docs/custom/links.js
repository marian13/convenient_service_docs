import startsWith from 'lodash/startsWith'

export const docsLinkUrlWithPrefix = (url) => startsWith(url, '/') ? `/v1/docs${url}` : `/v1/docs/${url}`;
export const publicLinkUrlWithPrefix = (url) => startsWith(url, '/') ? `/v1${url}` : `/v1/${url}`;
