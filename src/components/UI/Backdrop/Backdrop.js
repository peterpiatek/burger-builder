import React from 'react';

import css from './Backdrop.module.scss';

const backdrop = props => {
  
  return (
    props.show ? <div onClick={props.closeBackdrop} className={css.Backdrop}></div> : null
  );
}
export default backdrop;