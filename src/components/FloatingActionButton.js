import { h } from 'hyperapp';

import cc from "classcat";

const FloatingActionButton = ({
  mini = false,
  class: class_,
  ...props,
}, children) => {
  const classes = cc([
    "mdc-fab",
    {
      "mdc-fab": {
        "--mini": mini,
      },
    },
    class_,
  ]);

  return (
    <button
      {...props}
      class={classes}
      >
      <span class="mdc-fab__icon">
        {children}
      </span>
    </button>
  );
};

export default FloatingActionButton;
