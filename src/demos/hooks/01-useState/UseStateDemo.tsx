import Counter from './Counter';
import LiveFormInput from './LiveFormnput';
import ToDo from './ToDo';

const UseStateDemo = () => {
  return (
    <>
      <h1 className="text-4xl text-primary-500 font-semibold">useState Demo</h1>
      <div className="flex flex-wrap gap-2 *:bg-bg-200">
        <Counter />
        <ToDo />
        <LiveFormInput />
      </div>
    </>
  );
};

export default UseStateDemo;
