import React from "react";
import office from "./office.jpg";
import "./App.css";

function App() {

  const offices = [
    {
      id: 1,
      name: "SmartWorks",
      rent: 55000,
      address: "Bangalore"
    },
    {
      id: 2,
      name: "WeWork",
      rent: 75000,
      address: "Hyderabad"
    },
    {
      id: 3,
      name: "Regus",
      rent: 48000,
      address: "Chennai"
    },
    {
      id: 4,
      name: "Innov8",
      rent: 85000,
      address: "Pune"
    }
  ];

  return (

    <div className="container">

      <h1>Office Space Rental App</h1>

      <img src={office} alt="Office" width="600" height="300" />

      <br /><br />

      {
        offices.map((office) => (

          <div key={office.id} className="card">

            <h2>Office Name : {office.name}</h2>

            <h3
              style={{
                color: office.rent < 60000 ? "red" : "green"
              }}
            >
              Rent : ₹{office.rent}
            </h3>

            <h3>Address : {office.address}</h3>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default App;