import React from 'react';
import { useState } from 'react';

// import { open } from 'fs/promises';

import Button from './Button.jsx';
import Timer from './Timer.jsx';

const BUTTONS = [
  {
    name: 'Learn',
    key: 'learn',
  },
  {
    name: 'Code',
    key: 'code',
  },
  {
    name: 'Meet',
    key: 'meet',
  },
  {
    name: 'Think',
    key: 'think',
  },
];

function App() {
  const [iButtonSelected, setIButtonSelected] = useState(null);
  const [startDate, setStartDate] = useState(null);

  function handleClick(i) {
    if (startDate !== null) {
      endTimer(new Date());
    };

    if (i === iButtonSelected) {
      setIButtonSelected(null);
      return;
    };

    setIButtonSelected(i);
    setStartDate(new Date());
    return;
  };

  function endTimer(endDate) {
    const deltaMilliseconds = endDate.getTime() - startDate.getTime();
    console.log(BUTTONS[iButtonSelected].name + ': ' + (deltaMilliseconds / 1000) + 'sec');

    window.api.appendTime([BUTTONS[iButtonSelected].name, deltaMilliseconds, startDate, endDate]);
    setStartDate(null);
  };

  return (
    <>
      <h1>Time Tracker</h1>
      <Timer
        startDate={startDate}
      />
      {BUTTONS.map((btn, i) => (
        <Button
          {...btn}
          onClick={handleClick}
          isPressed={i === iButtonSelected}
          i={i}
          key={btn.key}
        />
      ))}
    </>
  );
};

export default App;
