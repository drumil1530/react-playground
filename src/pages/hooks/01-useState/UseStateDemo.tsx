import Counter from './components/Counter';
import LiveFormInput from './components/LiveFormnput';
import ToDo from './components/ToDo';

const UseStateDemo = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-500 font-semibold">useState Demo</h1>
      <div className="flex flex-wrap gap-2">
        <Counter />
        <ToDo />
        <LiveFormInput />
      </div>
    </>
  );
};

export default UseStateDemo;
