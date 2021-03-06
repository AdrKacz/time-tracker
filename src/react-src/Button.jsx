import React from 'react';

function Button(props) {
  return (
    <button
      className='button'
      onClick={() => props.onClick(props.i)}
      aria-pressed={props.isPressed}
    >
      {props.name}
    </button>
  );
};

export default Button;
