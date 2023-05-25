import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmploueeComponent() {
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate()

    const { empId } = useParams();
    useEffect(() => {
        EmployeeService.getEmployeeById(empId).then((res) => {
            setEmployee(res.data);
        });
    });
    return (
        <div className="container  m-4">
            <div className="card col-md-6 offset-md-3 ">
                <h3 className="text-center p-2">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>First Name:</label>
                        <h6> {employee.firstName}</h6>
                    </div>
                    <div className="row">
                        <label>Last Name:</label>
                        <h6> {employee.lastName}</h6>
                    </div>
                    <div className="row">
                        <label>Email Id:</label>
                        <h6> {employee.emailId}</h6>
                    </div>
                </div>
                <button
                    className="btn btn-info "
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default ViewEmploueeComponent;
