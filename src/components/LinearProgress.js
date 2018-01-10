import { h } from 'hyperapp';

import cc from "classcat";

const LinearProgress = ({
  indeterminate = false,
  reversed = false,
  closed = false,
  value = 0.5,
  bufferValue = 1,
  class: class_,
  ...props,
}, children) => {
  const classes = cc([
    "mdc-linear-progress",
    {
      "mdc-linear-progress": {
        "--indeterminate": indeterminate,
        "--reversed": reversed,
        "--closed": closed,
      },
    },
    class_,
  ]);

  return (
    <div
      role="progressbar"
      {...props}
      class={classes}
      >
      <div class="mdc-linear-progress__buffering-dots"></div>
      <div class="mdc-linear-progress__buffer" style={{ transform: `scaleX(${bufferValue})` }}></div>
      <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ transform: `scaleX(${value})` }}>
        <span class="mdc-linear-progress__bar-inner"></span>
      </div>
      <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
      </div>
    </div>
  );
};

export default LinearProgress;
