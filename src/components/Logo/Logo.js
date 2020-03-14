import React from 'react';

import css from './Logo.module.scss';

import LogoImg from '../../assets/logo.png';

const logo = props => {
  
  return (
    <div className={[css.Logo, props.height].join(' ')}>
      <img src={LogoImg} alt="Burger Builder Logo"/>  
    </div>
  );
}
export default logo;