import { useCallback, useState } from 'react';
import Button from '../../../components/Button';
import GetSortedList from './components/GetSortedList';

const ExpensiveListDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [length, setLength] = useState<number>(100);
  const [minValue, setMinValue] = useState<number>(0);

  const [error, setError] = useState<string>('');

  const changeLength = (add: boolean) => {
    if (add) {
      setLength(length + 100);
      setError('');
    } else {
      if (length <= 0) {
        setError('Length cannot be less than 0!');
        return;
      }
      setLength(length - 100);
    }
  };

  const filterList = useCallback(
    (arr: number[]) => {
      return arr.filter((n) => n >= minValue);
    },
    [minValue]
  );

  return (
    <div>
      <p>Count: {count}</p>
      <Button
        variant="primary"
        className="my-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>

      <hr className="text-primary-500" />

      <div className="flex items-center gap-2 my-2">
        <p>Length Value: {length}</p>

        <Button variant="primary" onClick={() => changeLength(true)}>
          +100
        </Button>
        <Button variant="danger" onClick={() => changeLength(false)}>
          -100
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <p>Filter Min Value: {minValue}</p>
        <Button onClick={() => setMinValue((v) => v + 10)}>+10</Button>
        <Button variant="danger" onClick={() => setMinValue((v) => v - 10)}>
          -10
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}

      <GetSortedList length={length} filterFn={filterList} />
    </div>
  );
};

export default ExpensiveListDemo;
