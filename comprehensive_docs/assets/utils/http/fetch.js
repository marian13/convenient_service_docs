const fetch = (...args) => window.fetch(...args).catch((error) => {
  console.error(error);

  throw error;
});

export default fetch;
