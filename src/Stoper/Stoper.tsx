import { useEffect, useState } from 'react';
import { formatTime } from './formatTime';

export const Stoper = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevValue) => prevValue + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const { second, miliSecond } = formatTime(time);
  console.log(`Kot ${second}`);

  return (
    <div>
      Stoper {second}:{miliSecond}
    </div>
  );
};
