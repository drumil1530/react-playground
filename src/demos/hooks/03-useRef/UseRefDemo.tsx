import AutoFocusInput from './AutoFocusInput';
import StopwatchTimer from './StopwatchTimer';

const UseRefDemo = () => {
  return (
    <>
      <h1 className="text-4xl text-primary-500 font-semibold mb-2">useRef Demo</h1>
      <div className='flex flex-wrap gap-2'>
      <AutoFocusInput />
      <StopwatchTimer />
      </div>
    </>
  );
};

export default UseRefDemo;
