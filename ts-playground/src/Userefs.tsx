import { useRef, useEffect } from 'react';
import { useState} from 'react';


export const AutoFocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ padding: '20px', border: '2px dashed orange', marginTop: '20px' }}>
      <h2>useRef: DOM Access</h2>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Look, I'm already focused!" 
        style={{ padding: '10px', width: '80%' }}
      />
    </div>
  );
};
export const MutableTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div style={{ padding: '20px', border: '2px dashed red', marginTop: '20px' }}>
      <h2>useRef: Mutable Value Timer</h2>
      <h3>Your time is: {timer} seconds</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ marginLeft: '10px' }}>Stop</button>
    </div>
  );
};