import { h } from 'hyperapp';

import cc from "classcat";

const Radio = ({
  disabled = false,
  checked = false,
  class: class_,
  ...props,
}, children) => {

  const classes = cc([
    "mdc-radio",
    {
      "mdc-radio": {
        "--disabled": disabled,
      },
    },
    class_,
  ]);

  return (
    <div class={classes}>
      <input
        {...props}
        class="mdc-radio__native-control"
        type="radio"
        />
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>
  );
};

export default Radio;
