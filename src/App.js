import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserContext } from "./Context/UserContext.js";

// Imports
import Landing from "./Pages/Landing/Landing";
import Login from "./Components/Login/Login";
// import Employee from "./Pages/Employee/Employee";
// import Company from "./Pages/Company/Company";
import EmployeeApplication from "./Pages/EmployeeApplication/EmployeeApplication";
import EmployeeVerification from "./Pages/EmployeeVerification/EmployeeVerification";

function App() {
  const [user, setUser] = useState(""); // For getting user details
  const [isLoggedIn, setIsLoggedIn] = useState(null); //For knowing whether user is loggedin
  const [role, setRole] = useState(""); //For passing the role of the user

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      role,
      setRole,
      user,
      setUser,
    }),
    [isLoggedIn, setIsLoggedIn, role, setRole, user, setUser]
  );

  return (
    <UserContext.Provider value={value}>
      <React.StrictMode>
        <Router>
          {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/employee" element={<Employee />} />
          <Route path="/company" element={<Company />} /> */}
            <Route path="employeeform" element={<EmployeeApplication />} />
            <Route path="verifyEmployee" element={<EmployeeVerification />} />
            <Route path="/login" element={<Login />} />
            {/* </Switch> */}
          </Routes>
        </Router>
      </React.StrictMode>
    </UserContext.Provider>
  );
}

export default App;
