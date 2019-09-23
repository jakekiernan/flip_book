import { useEffect, useRef } from 'react';

const splitArr = text => {
  return text.split(" ");
};

const showWord = (arr, index) => {
  return arr[index];
};

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
};

const resetCounter = (callback, page) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
    if (page === 'home') {
      savedCallback.current();
    }
  });
};

const getFirstTen = text => {
  const arr = text.split(" ");
  const firstFive = arr.slice(0, 10);
  return firstFive.join(" ");
};

export { getFirstTen, resetCounter, showWord, splitArr, useInterval };
