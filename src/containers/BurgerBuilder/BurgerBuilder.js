import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends Component {

  state = {
    ingredients: {
      // 'bread-top': 1,
      // 'bread-bottom': 1,
      'meat': 2,
      'cheese': 2,
      'salad': 1,
      'bacon': 1
    }
  }
  
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
        {/* <BurgerControls /> */}
      </>
    );
  }
}
