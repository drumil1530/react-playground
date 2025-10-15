/*
 * Create a custom hook called useCounter.
 * - It should take an initial number (default 0).
 * - Return: current count and three functions — increment, decrement, reset.
 *
 * Example:
 * const { count, increment, decrement, reset } = useCounter(5);
 */

import { useCallback, useState } from 'react';

const useCounter = (initialValue?: number) => {
  const [count, setCount] = useState(initialValue || 0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = useCallback(() => setCount(initialValue || 0), [initialValue]);

  return { count, increment, decrement, reset };
};

export default useCounter;
