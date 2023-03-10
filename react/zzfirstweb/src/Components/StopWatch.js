import { useEffect, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTimer(0);
    setIsActive(false);
  };
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <center>
      <div className="StopWatch">
        <h2>Stopwatch</h2>
        <span className="StopWatch-time">{timer}</span>
        <div className="row">
          <button onClick={toggle} className="button button-primary">
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={reset} className="button">
            reset{" "}
          </button>
        </div>
      </div>
    </center>
  );
};

export default StopWatch;
