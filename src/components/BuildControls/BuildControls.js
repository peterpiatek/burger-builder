import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import css from "./BuildControls.module.scss";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const controlsList = props => {
  return controls.map((ctrl, i) => {
    return (
      <BuildControl
        key={ctrl.label + "" + i}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
        addIng={() => props.addIng(ctrl.type)}
        remIng={() => props.remIng(ctrl.type)}
      />
    );
  });
};

const buildControls = props => {
  return (
    <>
      <div className={css.BurgerControl}>
        <div>
          Total price: <strong>{props.totalPrice}</strong>
        </div>
        <div>{controlsList(props)}</div>
        <button onClick={props.updateModalState} disabled={!props.purchaseable} className={css.OrderButton}>Order</button>
      </div>
      ;
    </>
  );
};
export default buildControls;
