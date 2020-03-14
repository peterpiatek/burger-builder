import React from 'react';

import css from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => {
  
  return (
    <header className={css.Toolbar}>
      <button className={css.btnMenu} onClick={props.toggleSideDrawer}>MENU</button>
      <div className={css.LogoContainer}>
        <Logo />
      </div>
      <nav className={css.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}
export default toolbar;