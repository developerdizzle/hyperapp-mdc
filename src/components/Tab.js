import { h } from 'hyperapp';

import cc from "classcat";

const Tab = ({
  active = false,
  class: class_,
  ...props,
}, children) => {
  const classes = cc([
    "mdc-tab",
    {
      "mdc-tab": {
        "--active": active,
      },
    },
    class_,
  ]);

  return (
    <a
      role="tab"
      {...props}
      class={classes}
      >
      {children}
    </a>
  );
};

export default Tab;
