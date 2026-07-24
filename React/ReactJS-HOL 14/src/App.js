import React, { useState } from "react";
import EmployeeList from "./Components/EmployeeList";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {

  const [theme] = useState("light");

  const employees = [
    {
      id: 1,
      name: "John",
      designation: "Software Engineer",
    },
    {
      id: 2,
      name: "David",
      designation: "Tester",
    },
    {
      id: 3,
      name: "Peter",
      designation: "Project Manager",
    },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">

        <h1>Employee Management Application</h1>

        <EmployeeList employees={employees} />

      </div>
    </ThemeContext.Provider>
  );
}

export default App;