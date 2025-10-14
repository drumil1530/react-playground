import { useRef } from "react";

const TestComponent2 = () => {
  const rendered = useRef<number>(0);
  rendered.current = rendered.current + 1;

  return (
    <p className="text-md text-gray-600">Component without Memo rendered {rendered.current} times</p>
  );
};

export default TestComponent2;