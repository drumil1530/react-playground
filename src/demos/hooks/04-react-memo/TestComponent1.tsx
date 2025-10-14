import { memo, useRef } from 'react';
import Button from '../../../components/Button';

type testProp = {
  count: number;
  obj: { name: string };
  setCount: () => void;
};

const TestComponent1 = ({ count, obj, setCount }: testProp) => {
  const rendered = useRef<number>(0);
  rendered.current = rendered.current + 1;
  
  return (
    <>
      <p className="text-md text-gray-600">
        Component with Memo rendered {rendered.current} times.
      </p>
      <p className="mb-4">Reders when prop is changed.</p>
      <div>
        <p>Prop Number: {count}</p>
        <p>
          Object Value: {obj.name}
        </p>
        <Button onClick={setCount}>Increase</Button>
      </div>
    </>
  );
};

export default memo(TestComponent1);
