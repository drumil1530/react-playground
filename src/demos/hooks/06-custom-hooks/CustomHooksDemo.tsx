import { useState, type FormEvent } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useCounter from './useCounter';
import useLocalStorage from './useLocalStorage';
import useToggle from './useToggle';
import useWindowSize from './useWindowSize';
import useDebounce from './useDebounce';
import { useFetch } from './useFetch';

const CustomHooksDemo = () => {
  const [bool, setBool] = useToggle(true);
  const { count, increment, decrement, reset } = useCounter(0);
  const [value, setValue] = useLocalStorage('test', 'initial');
  const [inputVal, setInputVal] = useState('');
  const { width, height } = useWindowSize();
  const [id, setId] = useState(1);
  
  const data = useDebounce(id, 500);
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users/${data}`
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(inputVal);
    setInputVal('');
  };

  return (
    <div className="rounded-2xl shadow-2xl p-2 bg-bg-200">
      <h2 className="text-3xl text-primary-500 font-semibold">
        Custom Hooks Demo
      </h2>
      <div className="flex flex-wrap gap-2 rounded-2xl shadow-2xl p-2 *:rounded-2xl *:shadow *:p-3 *:bg-bg-100 *:grow">
        <div>
          <h3 className="text-2xl font-semibold text-secondary-500">
            Toogle Hook
          </h3>
          <p>{bool ? 'True' : 'False'}</p>
          <Button onClick={setBool}>Toggle</Button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-secondary-500">
            Counter Hook
          </h3>
          <p className="text-xl">
            Count:{' '}
            <span className="font-mono">
              {count.toString().padStart(2, '0')}
            </span>
          </p>
          <div className="flex gap-1">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement} variant="danger">
              Decrement
            </Button>
            <Button onClick={reset} variant="warning">
              Reset
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-secondary-500">
            Local Storage Hook
          </h3>
          <p className="text-xl my-2">Storage Value: {value}</p>
          <form className="flex gap-2" onSubmit={(e) => handleSave(e)}>
            <Input
              placeholder="Enter value to store"
              value={inputVal}
              onChange={handleChange}
            />
            <Button>Set Value</Button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-secondary-500">
            Window Size Hook
          </h3>
          <p>Width: {width}</p>
          <p>Height: {height}</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary-500">
            Debounce Hook
          </h3>
          <div>
            <Input
              type="number"
              value={id}
              onChange={(e) => setId(Number(e.target.value))}
              placeholder="Enter user ID"
            />

            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHooksDemo;
