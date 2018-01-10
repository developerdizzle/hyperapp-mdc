import { h } from 'hyperapp';

import cc from "classcat"

const Switch = ({
  checked = false,
  value,
  class: class_,
  ...props,
}, children) => {
  const classes = cc([
    "mdc-switch",
    class_,
  ]);

  return (
    <div class={classes}>
      <input
        type="checkbox"
        {...props}
        checked={checked}
        class="mdc-switch__native-control"
        />
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
  );
};

export default Switch;
