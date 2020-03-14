import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'

import css from './SideDrawer.module.scss';
import Logo from '../../Logo/Logo';

const sideDrawer = props => {
  
  return (
    <div className={[css.SideDrawer, !props.show && css.hidden ].join(' ')}>
      <div className={css.LogoContainer}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>  
  );
}
export default sideDrawer;