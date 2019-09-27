import { useState, useMemo, useCallback } from 'react';

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const reset = useCallback(() => {
    setCount(initialCount);
  }, [initialCount]);

  return useMemo(() => ({
    count, 
    setCount,
    reset,
  }))
}

const useText = (initialText = '', initialAuthorKey = '') => {
  const [text, setText] = useState(initialText);
  const [authorKey, setAuthorKey] = useState(initialAuthorKey);

  return useMemo(() => ({
    text, 
    setText,
    authorKey,
    setAuthorKey,
  }))
}

export { useCounter, useText };