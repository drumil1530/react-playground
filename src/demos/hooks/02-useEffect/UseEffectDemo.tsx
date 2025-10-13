import ConsoleMessage from './ConsoleMessage';
import FetchApi from './FetchAPI';
import Timer from './Timer';

const UseEffectDemo = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-500 font-semibold">useState Demo</h1>
      <div className="flex flex-wrap gap-2">
        <FetchApi />
        <Timer />
        <ConsoleMessage />
      </div>
    </>
  );
};

export default UseEffectDemo;
