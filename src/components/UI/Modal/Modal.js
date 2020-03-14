import React, { Component } from "react";

import css from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";

export default class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.modalState !== this.props.modalState;
  }

  componentDidUpdate (){
    console.log('modal Updated')
  }
  
  render () {
    return (
      <>
        <div className={`${css.Modal} ${this.props.modalState ? "" : css.hidden}`}>
          {this.props.children}
        </div>
        <Backdrop closeBackdrop={this.props.closeBackdrop} show={this.props.modalState} />
      </>
    );
  };
}
