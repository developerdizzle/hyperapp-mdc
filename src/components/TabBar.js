import { h } from 'hyperapp';

import cc from "classcat"

const listeners = {};

const TabBar = ({
  disabled = false,
  class: class_,
  ...props,
}, children) => {
  const classes = cc([
    "mdc-tab-bar",
    class_,
  ]);

  return (
    <nav
      role="tablist"
      {...props}
      class={classes}
      >
      {children}
      <span class="mdc-tab-bar__indicator"></span>
    </nav>
  );
};

export default TabBar;
