const makeAsync = (fn) => (...args) => {
  const result = fn(...args);

  if (result instanceof Promise) return result;

  return Promise.resolve(result);
};

export default makeAsync;
