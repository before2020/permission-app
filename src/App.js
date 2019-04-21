import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar";
import EmployeeForm from "./components/employeeForm";
import { ToastContainer } from "react-toastify";
import PermissionForm from "./components/permissionForm";
import MenuForm from "./components/menuForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/employees" component={EmployeeForm} />
            <Route path="/permissions" component={PermissionForm} />
            <Route path="/menus" component={MenuForm} />
            <Redirect to="/employees" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
