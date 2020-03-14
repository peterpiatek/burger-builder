import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import css from './NavigationItems.module.scss';

const navigationItems = props => {
  
  return (
    <ul className={css.NavigationItems}>
      <NavigationItem active link='/'>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Orders</NavigationItem>
    </ul>
  );
}
export default navigationItems;