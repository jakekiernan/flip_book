import { useState, useMemo, useCallback, useRef } from 'react';


export function useCounter(initialCount = 0) {
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