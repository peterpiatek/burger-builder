import React from "react";
import css from "./BuildControl.module.scss";

const buildControl = props => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.label}</div>
      <div>{props.disabled}</div>
      <button onClick={props.addIng} className={css.Less}>Add</button>
      <button onClick={props.remIng} className={css.More} disabled={props.disabled === 0 ? true : false}>Remove</button>
    </div>
  );
};
export default buildControl;
