import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getEmployeeById(empId) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + empId);
    }
    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    updateEmployee(empId, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + empId, employee);
    }
    deleteEmployee(empId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + empId);
    }
}
export default new EmployeeService();
