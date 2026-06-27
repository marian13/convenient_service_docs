const appendQueryParams = (src, params) => {
  if (!src) return src;

  const url = new URL(src, window.location.origin);

  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  return url.pathname + url.search;
};

export default appendQueryParams;
