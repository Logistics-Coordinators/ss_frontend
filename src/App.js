import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports
import Landing from "./Pages/Landing/Landing";
import Employee from "./Pages/Employee/Employee";
import Company from "./Pages/Company/Company";
import EmployeeApplication from "./Pages/EmployeeApplication/EmployeeApplication";

function App() {
  return (
    <React.StrictMode>
      <Router>
        {/* <Switch> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/company" element={<Company />} />
          <Route path="employeeform" element={<EmployeeApplication />} />

          {/* </Switch> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
