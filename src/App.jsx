import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

import StudentLogin from "./components/StudentLogin";
import StudentDetails from "./components/StudentDetails";
import UserRegistrationForm from "./components/UserRegistrationForm";
import "./assets/CSS/Nav.css"

const App = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });

  return (
    <>
    <Router>
      <div>
              <div>My React App</div>
          <nav className="navbarCls">
            <ul style={{ display: "flex", gap: "2rem",}}>
              <li><Link to="/StudentLogin">StudentLogin</Link></li>
              <li><Link to="/StudentDetails">StudentDetails</Link></li>
              <li><Link to="/UserRegistrationForm">UserRegistrationForm</Link></li>
            </ul>
          </nav>
        </div>

      <Routes>
        <Route
          path="/StudentLogin"
          element={
            <StudentLogin setStudent={setStudent}>
              <h3>Welcome Student! Please Login</h3> 
            </StudentLogin>
          }
        />

        <Route
          path="/UserRegistrationForm"
           element={<UserRegistrationForm />}/>
       <Route
          path="/SudentDetails"
          element={<StudentDetails student={student} />} 

        />
      </Routes>
    </Router>
        </>

  );
};

export default App;