import React from "react";

const logOut = () => {
  const username = "Guest";
  const isLoggedIn = true;
  const message = "Goodbye and come back soon!";

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="logout-container">
      <h2>Log Out Page</h2>
      <p>Welcome, {username}</p>
      <button onClick={handleLogout}>Logout</button>
      <p>{message}</p>
    </div>
  );
};

export default logOut;
