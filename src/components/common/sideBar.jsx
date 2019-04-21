import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ selectedItem }) => {
  const style = { color: "black", textDecoration: "none" };
  return (
    <ul className="list-group">
      <li
        className={
          "list-group-item" +
          (selectedItem === "员工管理" ? " list-group-item-dark" : "")
        }
      >
        <Link to="/employees" style={style}>
          员工管理
        </Link>
      </li>

      <li
        className={
          "list-group-item" +
          (selectedItem === "权限管理" ? " list-group-item-dark" : "")
        }
      >
        <Link to="/permissions" style={style}>
          权限管理
        </Link>
      </li>
      <li
        className={
          "list-group-item" +
          (selectedItem === "菜单管理" ? " list-group-item-dark" : "")
        }
      >
        <Link to="/menus" style={style}>
          菜单管理
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
