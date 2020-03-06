import React from "react";
import css from './Layout.module.scss';

const layout = props => (
  <>
    <div>Toolbar, SideDraver, Backdrop</div>
    <main className={css.Content}>{props.children}</main>
  </>
);

export default layout;
