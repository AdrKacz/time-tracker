import React from 'react';

function Button(props) {
  return (
    <button
      className='button'
      onClick={() => props.handleClick(props.i)}
      aria-pressed={props.isPressed}
    >
      {props.name}
    </button>
  );
};

export default Button;
