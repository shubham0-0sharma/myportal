import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
    const navigate = useNavigate();
    let { empId } = useParams();
    const [myEmpId, setMyempid] = useState(empId);
    console.log("myEmpId", myEmpId);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmail] = useState("");
    const changeFirstNameHandler = (e) => {
        setFirstName(e.target.value);
    };
    const changeLastNameHandler = (e) => {
        setLastName(e.target.value);
    };
    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        if (myEmpId == "-1") {
            return;
        } else {
            EmployeeService.getEmployeeById(myEmpId).then((res) => {
                const employee = res.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.emailId);
            });
        }
    },[empId]);
    
    const editEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName,
            lastName,
            emailId,
        };
        
        if (myEmpId == "-1") {
            EmployeeService.addEmployee(employee)
                .then((res) => {
                    navigate("/employees");
                })
                .catch((err) => console.log(err.message));
            ;
        } else {
            EmployeeService.updateEmployee(empId, employee)
                .then((res) => navigate("/employees"))
                .catch((err) => console.log(err.message));
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">
                        {myEmpId == -1 ? "Add Employee " : "Update Employee"}
                    </h3>
                    <div className="card-body">
                        <form method="POST">
                            <div className="row mb-3">
                                <label
                                    htmlFor="firstname"
                                    className="col-sm-2 col-form-label"
                                >
                                    First Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        value={firstName}
                                        onChange={(e) =>
                                            changeFirstNameHandler(e)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label
                                    htmlFor="lastname"
                                    className="col-sm-2 col-form-label"
                                >
                                    Last Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        value={lastName}
                                        onChange={(e) =>
                                            changeLastNameHandler(e)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="email"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={emailId}
                                        onChange={(e) => changeEmailHandler(e)}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button
                                    type="submit"
                                    onClick={(e) => editEmployee(e)}
                                    className="btn btn-primary d-block"
                                >
                                    {myEmpId === "-1" ? "Add" : "Update"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => navigate(-1)}
                                    className="btn btn-secondary py-10 d-block"
                                >
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;
