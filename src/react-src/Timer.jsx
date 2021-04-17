import React from 'react';
import { useState, useEffect } from 'react';

const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

function getTime(time) {
  const hours = Math.floor(time / HOUR);
  time -= hours * HOUR;

  const minutes = Math.floor(time / MINUTE);
  time -= minutes * MINUTE;

  const seconds = Math.floor(time / SECOND);
  time -= seconds * SECOND;

  return `${hours}:${minutes}:${seconds}.${time}`;
}

function Timer(props) {
  const [elapsedTime, setElapsedTime] = useState(null);

  useEffect(() => {
    let timerID = null;


    if (props.startDate !== null) {
      if (elapsedTime === null) {
        setElapsedTime(0);
      };

      timerID = setTimeout((_) => {
        setElapsedTime(Date.now() - props.startDate.getTime());
      }, 100);
    } else {
      setElapsedTime(null);
    };

    return () => {
      clearTimeout(timerID);
    };
  });

  return (
    <>
    {props.startDate !== null && elapsedTime !== null &&
      <p>
        {getTime(elapsedTime)}
      </p>
    }
    </>
  );
};

export default Timer;
