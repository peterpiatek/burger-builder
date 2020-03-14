import React from 'react';

import css from './NavigationItem.module.scss';

const navigationItem = props => {
  
  return (
    <li className={css.Link}><a className={props.active ? css.active : null} href={props.link}>{props.children}</a></li>
  );
}
export default navigationItem;