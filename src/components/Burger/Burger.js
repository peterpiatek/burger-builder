import React from 'react'
import css from './Burger.module.scss'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {

  let ingredientsArr = Object.keys(props.ingredients).map(ingName => {
    return [...Array(props.ingredients[ingName])].map((_, i) => {
      return (
        <BurgerIngredient key={ingName + i} type={ingName} />
      )
    })
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if(ingredientsArr.length === 0) {
    ingredientsArr = <p>Please add Ingredients</p>;
  }

  return (
    <div className={css.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredientsArr}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
  
}

export default burger;