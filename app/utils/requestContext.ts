import 'server-only';
import { cache } from 'react';

// https://www.rockyblog.dev/posts/JEST/react-cache-problem-in-jest
const isNotTest = process.env.NODE_ENV !== "test";

//this is my bypass function only works in NODE_ENV === test
function testCache<T extends Function>(func: T) {
  return func;
}

//cache is actual react.cache
const cachedFunc = isNotTest ? cache : testCache;

// https://github.com/vercel/next.js/discussions/45543#discussioncomment-4859075
const requestContext = cachedFunc(() => {
  return new Map<string, string>();
});

export const setRequestContext = (key: string, value: string) =>
  requestContext().set(key, value);

export const getRequestContext = (key: string) => requestContext().get(key);