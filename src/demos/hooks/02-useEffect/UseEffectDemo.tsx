import ConsoleMessage from './ConsoleMessage';
import FetchApi from './FetchApi';
import Timer from './Timer';

const UseEffectDemo = () => {
  return (
    <>
      <h1 className="text-4xl text-primary-500 font-semibold">useState Demo</h1>
      <div className="flex flex-wrap gap-2 *:bg-bg-200">
        <FetchApi />
        <Timer />
        <ConsoleMessage />
      </div>
    </>
  );
};

export default UseEffectDemo;
