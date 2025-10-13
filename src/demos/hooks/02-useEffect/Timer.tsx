import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const start = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000)

    return () => clearInterval(start);
  }, []);

  return (
    <div className="p-4 shadow-xl rounded-2xl">
      <p className="text-xl">Timer: <span className="font-mono">{time.toString().padStart(2, '0')}</span></p>
    </div>
  );
};

export default Timer;