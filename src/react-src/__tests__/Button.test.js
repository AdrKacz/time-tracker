import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "../Button.jsx";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with correct class name', () => {
  act(() => {
    render(<Button />, container);
  });

  const button = container.querySelector("button");
  expect(button.className).toBe("button");
});

it('calls handle click', () => {
  const handleClick = jest.fn();

  act(() => {
    render(<Button onClick={handleClick}/>, container);
  });
  const button = container.querySelector("button");

  act(() => {
    for (let i = 0; i < 10; i++) {
      button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    };
  });

  expect(handleClick).toHaveBeenCalledTimes(10);
});

it('calls handle click with i', () => {
  const handleClick = jest.fn();

  act(() => {
    render(<Button i={0} onClick={handleClick}/>, container);
  });
  const button = container.querySelector("button");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  });

  expect(handleClick).toHaveBeenCalledWith(0);
});
