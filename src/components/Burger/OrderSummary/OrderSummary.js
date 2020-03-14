import React, { Component } from "react";
import Button from "../../UI/Button/Button";

export default class OrderSummary extends Component {

  // this component could be functioncal
  // changed to class based to check componentdidupdate lifecycle hook to see if performance optimisation is possible
  // in current scenario ordersummary is wrapped by modal component in only place in the app - this way shouldComponentUpdate - if used from Modal component will also stop ordersummary to refresh each time we add an ingredient

  componentDidUpdate() {
    console.log('[ordersummary]');
  }
  
  render = () => {
    const ingredients = this.props.ingredients;

    const populateIngredients = () => {
      const listElements = [];
      for (const key in ingredients) {
        if (ingredients.hasOwnProperty(key)) {
          listElements.push(
            <li key={key}>
              <span>{key}</span>{" "}
              <span>
                <strong>{ingredients[key]}</strong>
              </span>
            </li>
          );
        }
      }
      return listElements;
    };

    return (
      <>
        <p>Here is your delicius hamburger:</p>
        <ul>{populateIngredients()}</ul>
        <p>Total Price:</p>
        <p>
          <strong>{this.props.totalPrice}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="primary">Continue</Button>
        <Button clicked={this.props.closeBackdrop} btnType="secondary">
          Cancel
        </Button>
      </>
    );
  };
}
