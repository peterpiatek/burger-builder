import React, { Component } from "react";
import css from "./BurgerIngredient.module.scss";
import PropTypes from "prop-types";

export default class BurgerIngredient extends Component {
  ingredient = null;

  render = () => {
    switch (this.props.type) {
      case "bread-bottom":
        this.ingredient = <div className={css.BreadBottom}></div>;
        break;
      case "bread-top":
        this.ingredient = (
          <div className={css.BreadTop}>
            <div className={css.Seeds1}></div>
            <div className={css.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        this.ingredient = <div className={css.Meat}></div>;
        break;
      case "cheese":
        this.ingredient = <div className={css.Cheese}></div>;
        break;
      case "salad":
        this.ingredient = <div className={css.Salad}></div>;
        break;
      case "bacon":
        this.ingredient = <div className={css.Bacon}></div>;
        break;
      default:
        this.ingredient = null;
    }

    return (this.ingredient);
  };
}

BurgerIngredient.propTypes = {
  type: PropTypes.oneOf([
    "bread-top",
    "bread-bottom",
    "meat",
    "cheese",
    "salad",
    "bacon"
  ]).isRequired
};
