import React from 'react';
import { useState, useEffect } from 'react';

const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

function getTimeFormatted(time) {
  if (!time) {
    return null;
  };

  const hours = Math.floor(time / HOUR);
  time -= hours * HOUR;

  const minutes = Math.floor(time / MINUTE);
  time -= minutes * MINUTE;

  const seconds = Math.floor(time / SECOND);
  time -= seconds * SECOND;

  return `${hours}:${minutes}:${seconds}`;
}

function Timer(props) {
  const [tick, setTick] = useState(true);

  function getElapsedTime() {
    const startTime = props.startDate ? props.startDate.getTime() : null;
    return props.startDate ? Date.now() - startTime : null;
  };

  useEffect(() => {
      const timerID = props.startDate && setTimeout((_) => {
        setTick(!tick);
      }, 1000);

      return () => {
        clearTimeout(timerID);
      };
  });

  const elapsedTime = getElapsedTime();
  return (
    <p>
      {getTimeFormatted(elapsedTime)}
    </p>
  );
};

export default Timer;
