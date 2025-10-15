/*
 * Create a custom hook called useToggle.
 * - It should take an initial boolean value (default false).
 * - It should return the current state and a function to toggle it.
 *
 * Example:
 * const [isOpen, toggleIsOpen] = useToggle();
 * toggleIsOpen(); // switches between true ↔ false
 */

import { useState } from 'react';

const useToggle = (value: boolean) => {
  const [boolValue, setBoolValue] = useState(value);

  const toggleValue = () => {
    setBoolValue(!boolValue);
  };

  return [boolValue, toggleValue] as const;
};

export default useToggle;
