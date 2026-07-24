import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>

      <h1>Ticket Booking Application</h1>

      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <hr />

      {isLoggedIn ? <UserPage /> : <GuestPage />}

    </div>
  );
}

export default App;