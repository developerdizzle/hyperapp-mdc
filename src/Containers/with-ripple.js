import cc from "classcat";

import { MDCRipple } from '@material/ripple';

const oncreate = (element) => {
  element.mdcRipple = new MDCRipple(element);
};

const ondestroy = (element) => {
  if (element.mdcRipple) {
    element.mdcRipple.destroy();
    delete element.mdcRipple;
  }
};

const withRipple = (InnerComponent) => (props, children) => {
  const classes = cc([
    "mdc-ripple-upgraded",
    props.class,
  ]);

  return InnerComponent({
    ...props,
    class: classes,
    oncreate: (element) => {
      props.oncreate && props.oncreate(element);
      oncreate(element);
    },
    ondestroy: (element) => {
      props.ondestroy && props.ondestroy(element);
      ondestroy(element);
    },
  }, children);
};

export default withRipple;
