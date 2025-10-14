import { useState } from 'react';
import Button from '../../../components/Button';
import TestComponent1 from './TestComponent1';
import TestComponent2 from './TestComponent2';

const ReactMemoDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);

  return (
    <div className="w-full max-w-3xl bg-bg-100 p-4 rounded-2xl shadow-xl flex flex-col flex-wrap gap-2">
      <div className="flex gap-2 bg-bg-300 rounded-2xl shadow-md p-2">
        <div className="grow shadow rounded-2xl bg-bg-200 p-3">
          <p className="text-3xl">
            Count:{' '}
            <span className="font-mono">
              {count.toString().padStart(2, '0')}
            </span>
          </p>
          <Button onClick={() => setCount(count + 1)} className="me-2">
            Increase
          </Button>
          <Button variant="danger" onClick={() => setCount(count - 1)}>
            Decrease
          </Button>
        </div>

        <div className="grow shadow rounded-2xl bg-bg-200 p-3">
          <p className="text-3xl">
            Child Count:{' '}
            <span className="font-mono">
              {childCount.toString().padStart(2, '0')}
            </span>
          </p>
          <Button
            onClick={() => setChildCount(childCount + 1)}
            className="me-2"
          >
            Increase
          </Button>
          <Button
            variant="danger"
            onClick={() => setChildCount(childCount - 1)}
          >
            Decrease
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 shadow-md rounded-2xl bg-bg-200 p-2 *:bg-gray-200 *:rounded-2xl *:shadow-sm *:p-2 *:grow">
        <div>
          <TestComponent1
            count={childCount}
            obj={{ name: 'Qián Xīn' }}
            setCount={() => setChildCount(childCount + 1)}
          />
        </div>
        <div>
          <TestComponent2 />
        </div>
        <p className="italic text-gray-400 w-full">
          Renders are added twice because of strict mode.
        </p>
      </div>
    </div>
  );
};

export default ReactMemoDemo;
