import { useState } from 'react';
import Button from '../../../../components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const addNum = () => {
    if (count >= 20) {
      setError('Count cannot be more than 20!');
      return;
    }
    setCount(count + 1);
    setError('');
  };

  const removeNum = () => {
    if (count <= 0) {
      setError('Count cannot be less than 0!');
      return;
    }
    setCount(count - 1);
    setError('');
  };

  const reset = () => {
    setCount(0);
    setError('');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-80 px-4 py-6 my-2 rounded-2xl shadow-xl">
      <p className="text-3xl mb-2 font-semibold">
        Total Count:{' '}
        <span className="font-mono">{count.toString().padStart(2, '0')}</span>
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        <Button text={'Increase'} radius="xl" padding='px-3 py-1' onClick={addNum} />
        <Button
          bgColor="red"
          text={'Decrease'}
          radius="xl"
          padding='px-3 py-1'
          onClick={removeNum}
        />
      </div>
      <Button
        bgColor="neutral"
        text={'Reset'}
        radius="xl"
        padding='px-3 py-1'
        onClick={reset}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default Counter;
