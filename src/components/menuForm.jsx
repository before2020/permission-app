import React, { Component } from "react";
import SideBar from "./common/sideBar";
class MenuForm extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-auto">
          <SideBar selectedItem="菜单管理" />
        </div>
        <div className="col">
          <h1>MENU FORM</h1>
        </div>
      </div>
    );
  }
}

export default MenuForm;
