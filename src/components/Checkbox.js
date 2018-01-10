import { h } from 'hyperapp';

import cc from "classcat"

const Checkbox = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  value,
  class: class_,
  ...props,
}, children) => {
  const classes = cc([
    "mdc-checkbox",
    {
      "mdc-checkbox": {
        "--disabled": disabled,
      },
    },
    class_,
  ]);

  return (
    <div
      class={classes}
      >
      <input
        type="checkbox"
        {...props}
        checked={checked}
        disabled={disabled}
        class="mdc-checkbox__native-control"
        />
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
          viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark__path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
  );
};

export default Checkbox;
