import { makeAsync } from "./makeAsync.js";

export const callAsync = (fn, ...args) => makeAsync(fn)(...args);
