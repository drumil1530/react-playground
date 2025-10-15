/*
 * Rebuild the useLocalStorage hook yourself.
 * - Accept a key and an initialValue.
 * - Read the key from localStorage on mount.
 * - Update localStorage whenever the value changes.
 * - Return a [value, setValue] pair.
 *
 * Bonus: Handle JSON.parse errors safely.
 */

import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {

      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch(err) {
      console.warn(`Error reading localStorage key “${key}”:`, err);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
