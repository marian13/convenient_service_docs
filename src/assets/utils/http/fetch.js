const fetch = (...args) => window.fetch(...args).catch((error) => console.error(error));

export default fetch;
