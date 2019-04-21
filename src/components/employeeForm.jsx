import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "./common/pagination";
import _ from "lodash";
import SideBar from "./common/sideBar";

class EmployeeForm extends Component {
  state = {
    employees: [],
    pageSize: 7,
    currentPage: 1
  };

  items = ["员工管理", "权限管理", "菜单管理"];

  async componentDidMount() {
    try {
      const { data: employees } = await axios.get("/api/employees");
      this.setState({ employees: this.mapToViewModel(employees) });
    } catch (ex) {
      toast.error("Cannot load employees");
    }
  }

  mapToViewModel(employees) {
    const es = employees.map(e => {
      delete e.roles;
      return e;
    });
    return es;
  }

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, employees: allEmployees } = this.state;

    // 排序
    const ordered = _.orderBy(allEmployees, "department.name");
    // 分页
    const employees = ordered.slice(
      pageSize * (currentPage - 1),
      pageSize * (currentPage - 1) + pageSize
    );

    return (
      <div className="row">
        <div className="col-auto">
          <SideBar selectedItem="员工管理" />
        </div>
        <div className="col">
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              添加员工
            </button>
            <input
              className="form-control ml-sm-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <table
            className="table table-hover table-responsive-sm"
            style={{ marginTop: "10px" }}
          >
            <thead>
              <tr className="table">
                <th scope="col">姓名</th>
                <th scope="col">部门</th>
                <th scope="col">电话</th>
                <th scope="col">邮箱</th>
                <th scope="col">入职时间</th>
                <th scope="col">状态</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(e => (
                <tr key={e.id}>
                  <td>{e.username}</td>
                  <td>{e.department.name}</td>
                  <td>{e.tel}</td>
                  <td>{e.email}</td>
                  <td>{e.registime}</td>
                  <td>{e.state ? "在职" : "离职"}</td>
                  <td>
                    <button className="btn btn-info btn-sm">修改</button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm">删除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={allEmployees.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default EmployeeForm;
