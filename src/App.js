import "./App.css";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { Route, Routes } from "react-router-dom";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ListEmployeeComponent />}></Route>
                    <Route
                        path="/employees"
                        element={<ListEmployeeComponent />}
                    ></Route>
                    <Route
                        path="/add-employee/:empId"
                        element={<CreateEmployeeComponent />}
                    ></Route>
                    <Route
                        path="/view-employee/:empId"
                        element={<ViewEmployeeComponent />}
                    ></Route>
                </Routes>
            </div>

            <FooterComponent />
        </>
    );
}

export default App;
