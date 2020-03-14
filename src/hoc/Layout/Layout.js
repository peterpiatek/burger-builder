import React, { Component } from "react";
import css from "./Layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

export default class Layout extends Component {

  state = {
    sideDrawerState: false
  }

  toggleSideDrawer(){
    this.setState({sideDrawerState: !this.state.sideDrawerState})
  }
  
  render() {
    return (
      <>
        <SideDrawer show={this.state.sideDrawerState} />
        <Backdrop show={this.state.sideDrawerState} closeBackdrop={this.toggleSideDrawer.bind(this)} />
        <Toolbar toggleSideDrawer={this.toggleSideDrawer.bind(this)} />
        <div>Toolbar, SideDraver, Backdrop</div>
        <main className={css.Content}>{this.props.children}</main>
      </>
    );
  }
}
