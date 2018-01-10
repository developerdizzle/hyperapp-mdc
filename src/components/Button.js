import { h } from 'hyperapp';

import cc from "classcat";

const Button = ({
  raised = false,
  unelevated = false,
  stroked = false,
  dense = false,
  compact = false,
  disabled = false,
  class: class_,
  ...props,
}, children) => {

  const classes = cc([
    "mdc-button",
    {
      "mdc-button": {
        "--raised": raised,
        "--unelevated": unelevated,
        "--stroked": stroked,
        "--dense": dense,
        "--compact": compact,
      },
    },
    class_,
  ]);

  return (
    <button
      {...props}
      disabled={disabled}
      class={classes}
      >
      {children}
    </button>
  );
};

export default Button;
