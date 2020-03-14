import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      // 'bread-top': 1,
      // 'bread-bottom': 1,
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    totalPrice: 4,
    purchaseable: false,
    modalState: false
  };

  updateModalState() {
    this.setState({ modalState: true });
  }

  updatePurchaseable(ingredientsArr) {
    const sum = Object.keys(ingredientsArr)
      .map(ingKey => ingredientsArr[ingKey])
      .reduce((sum, next) => sum + next, 0);
    this.setState({
      purchaseable: sum > 0 ? true : false
    });
  }

  addIngredientHandler = type => {
    const ingredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] + 1
    };
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients,
      totalPrice
    });
    this.updatePurchaseable(ingredients);
  };

  removeIngredientHandler = type => {
    const ingredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] - 1
    };
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    if (this.state.ingredients[type] === 0) return;
    this.setState({
      ingredients,
      totalPrice
    });
    this.updatePurchaseable(ingredients);
  };

  updateIng(data) {
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [data.ingredient]: data.value
      }
    });
  }

  closeBackdrop() {
    this.setState({ modalState: false });
  }

  render() {
    return (
      <>
        <Modal
          closeBackdrop={this.closeBackdrop.bind(this)}
          modalState={this.state.modalState}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice.toFixed(2)}
            closeBackdrop={this.closeBackdrop.bind(this)}
          />
        </Modal>
        <Burger ingredients={{ ...this.state.ingredients }} />
        <BurgerControls
          addIng={this.addIngredientHandler}
          remIng={this.removeIngredientHandler}
          disabled={{ ...this.state.ingredients }}
          totalPrice={this.state.totalPrice.toFixed(2)}
          purchaseable={this.state.purchaseable}
          updateModalState={this.updateModalState.bind(this)}
        />
      </>
    );
  }
}
