export const isBuildEnvironment = () => {
  const param = new URLSearchParams(location.search).get('build');
  if (param !== null) return param === 'true';
  return window.__cs__?.build ?? false;
};
