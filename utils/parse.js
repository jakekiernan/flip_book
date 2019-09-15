import { useEffect, useRef } from 'react';

const splitArr = text => {
  return text.split(" ");
}

const showWord = (arr, index) => {
  return arr[index];
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export {splitArr, showWord, useInterval};
