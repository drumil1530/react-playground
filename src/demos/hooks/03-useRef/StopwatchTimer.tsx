import { useRef, useState } from 'react';
import Button from '../../../components/Button';

const StopwatchTimer = () => {
  const [time, setTime] = useState<number>(0);
  const [isStopped, setIsStopped] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);

  function toggleTimer() {
    if (isStopped) {
      setIsStopped(false);
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      intervalRef.current = interval;
    } else {
      setIsStopped(true);
      clearInterval(intervalRef.current!);
    }
  }

  function resetTimer() {
    setIsStopped(true);
    clearInterval(intervalRef.current!);
    setTime(0);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-4 shadow-xl rounded-2xl bg-bg-200">
      <p className="text-4xl mb-2 font-semibold text-primary-500">
        Timer:{' '}
        <span className="font-mono text-primary-700 font-medium">
          {time.toString().padStart(2, '0')}
        </span>
      </p>
      <div className="flex gap-2">
        <Button
          variant={isStopped ? 'primary' : 'secondary'}
          onClick={toggleTimer}
        >
          {isStopped ? 'Start' : 'Stop'}
        </Button>
        <Button
          variant={isStopped ? 'secondary' : 'danger'}
          styleOverrides={{cursor: isStopped ? 'cursor-not-allowed' : 'cursor-pointer'}}
          onClick={resetTimer}
          disabled={isStopped}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default StopwatchTimer;
