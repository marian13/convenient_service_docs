import makeAsync from "./makeAsync.js";

const callAsync = (fn, ...args) => makeAsync(fn)(...args);

export default callAsync;
