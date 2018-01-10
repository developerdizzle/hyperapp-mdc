import { h } from 'hyperapp';

import cc from "classcat";

const TextField = ({
  box = false,
  outlined = false,
  fullWidth = false,
  textarea = false,
  disabled = false,
  dense = false,
  class: class_,
  ...props,
}) => {
  const classes = cc([
    "mdc-text-field",
    {
      "mdc-text-field": {
        "--box": box,
        "--outlined": outlined,
        "--fullwidth": fullWidth,
        "--textarea": textarea,
        "--disabled": disabled,
        "--dense": dense,
      },
    },
    class_,
  ]);

  return (
    <div class={classes}>
      {textarea && (
        <textarea
          {...props}
          disabled={disabled}
          class="mdc-text-field__input"
          />
      ) || (
        <input
          type="text"
          {...props}
          disabled={disabled}
          class="mdc-text-field__input"
          />
      )}
      {outlined && (
      <div class="mdc-text-field__outline">
        <svg>
          <path class="mdc-text-field__outline-path"/>
        </svg>
      </div>
      )}
      {outlined && (
      <div class="mdc-text-field__idle-outline"></div>
      ) || (
      <div class="mdc-text-field__bottom-line"></div>
      )}
    </div>
  );
};

export default TextField;
