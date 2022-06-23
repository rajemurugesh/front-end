import React, { Component } from 'react';
import axios from "axios";
class File extends Component {
    constructor(props) {
      super(props);
      this.state = {
        emp: [],
      };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/emp").then((res) => {
          const emp1 = res.data;
          console.log(emp1);
          this.setState({ emp: emp1 });
        });
      }
    render() {
        return (
          <React.Fragment>
            <div className="row text-center">
              <div className="container-fluid">
                <h3>Al MAHA MARBLE L.L.C-OMAN</h3>
                <h4> EMPLOYEE DATABASE</h4>
                {/* <p>Showing {this.state.emp.length} Employees in the database</p> */}
              </div>
            </div>
            <div className="container-fluid">
              <button type="button" className="btn btn-primary btn-sm">
                Add Employee
              </button>
            </div>
            <div className="container-fluid">
              <table className="table">
                <thead>
                  <tr>
                    <th>Emp_id</th>
                    <th>Emp_Name</th>
                    <th>Emp_Phone</th>
                    <th>Emp_Address</th>
                    <th>Modification</th>
                    <th>Modification</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.emp.map((m) => {
                    return (
                      <tr key={m.Emp_id}>
                        <td>{m.Emp_id}</td>
                        <td>{m.Emp_name}</td>
                        <td>{m.Emp_phone}</td>
                        <td>{m.Emp_Address}</td>
                        <td>
                          <button
                            onClick={() => this.handleUpdate(m)}
                            type="button"
                            className="btn btn-primary btn-sm"
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => this.handleDelete(m)}
                            type="button"
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        );
      }
    }
    export default File;