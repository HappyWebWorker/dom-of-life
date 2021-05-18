import { useCallback, useEffect, useState } from "react";

const useTimer = (f: Function, delay: number) => {
  const [timer, setTimer] = useState<null | number>(null);

  const start = () => {
    if (timer) return;
    setTimer(setInterval(f, delay));
  };

  const stop = useCallback(() => {
    if (!timer) return;
    clearInterval(timer);
    setTimer(null);
  }, [timer]);

  const isRunning: boolean = timer != null;

  useEffect(() => stop, [stop]);

  return { start, stop, isRunning };
};

export default useTimer;
