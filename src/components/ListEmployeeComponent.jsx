import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ListEmployeeComponent() {
    const navigate = useNavigate();

    const [employess, setEmployess] = useState([]);

    function addEmployee() {
        navigate(`/add-employee/-1`);
    }

    const editEmployee = (empId) => {
        navigate(`/add-employee/${empId}`);
    };
    useEffect(() => {
        EmployeeService.getEmployees()
            .then((res) => setEmployess(res.data))
            .catch((err) => console.log(err));
    });

    const deleteEmployee = (empId) => {
        EmployeeService.deleteEmployee(empId).then((res) => {
            setEmployess(employess.filter((emp) => emp.id !== empId))
            });
        };

    const viewEmployee = (empId) => {
          navigate(`/view-employee/${empId}`);
        };
    

    return (
        <div>
            <h2 className="text-center">Employee Portal</h2>
            <div>
                <button className="btn btn-primary" onClick={addEmployee}>
                    Create
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped   ">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employess.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            editEmployee(employee.id)
                                        }
                                        className="btn btn-info"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            deleteEmployee(employee.id)
                                        }
                                        className="btn mx-2 btn-danger"
                                    >
                                        Delete
                                    </button>
                                
                               
                                    <button
                                        onClick={() =>
                                            viewEmployee(employee.id)
                                        }
                                        className="btn btn-info"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
