import React from "react";

import css from "./Button.module.scss";

const button = props => {
  let btnClass;

  switch (props.btnType) {
    case "primary":
      btnClass = css.primary;
      break;

    case "secondary":
      btnClass = css.secondary;
      break;

    case "alert":
      btnClass = css.alert;
      break;

    default:
      break;
  }

  return (
    <button className={[css.Button, btnClass].join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
  );
};
export default button;
