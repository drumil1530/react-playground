import { useRef, useState, type ChangeEvent } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const AutoFocusInput = () => {
  const [inputVal, setInputVal] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  function getInput(e: ChangeEvent<HTMLInputElement>): void {
    setInputVal(e.target.value);
  }

  return (
    <div className="w-full max-w-md p-4 shadow-xl rounded-2xl bg-bg-200">
      <h1 className="text-3xl text-primary-500 font-semibold">
        Auto Focus Input
      </h1>
      <Input
        onChange={(e) => getInput(e)}
        ref={inputRef}
        placeholder="type something..."
      />
      <Button onClick={focusInput} variant="primary" className="mt-2">
        Focus
      </Button>
      <p className="mt-2 italic">
        This input will be focused when the button is clicked.
      </p>
      <p className="mt-2">
        Ref Current Value (non-reactive): {inputRef.current?.value}
      </p>
      <p className="mt-2">State Input Value (reactive): {inputVal}</p>
    </div>
  );
};

export default AutoFocusInput;
