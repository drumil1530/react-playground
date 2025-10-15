/*
 * Create a hook useDebounce.
 * - Accepts (value, delay) as parameters.
 * - Returns the debounced value.
 * - If value changes rapidly, wait until the delay passes before updating.
 *
 * Example:
 * const debouncedSearch = useDebounce(searchTerm, 500);
 */

import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
