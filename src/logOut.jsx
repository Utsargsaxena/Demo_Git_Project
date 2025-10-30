import React from "react";

const logOut = () => {
  // 🟥 conflicting change — Dev1 editing same line
  const username = "User-One";  

  const isLoggedIn = true;
  // 🟥 conflicting change — Dev1 editing same line
  const message = "See you soon, User-One!"; 

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="logout-container">
      {/* 🟥 conflicting change */}
      <h2>Goodbye User-One</h2>

      <p>Welcome, {username}</p>
      <button onClick={handleLogout}>Logout</button>
      <p>{message}</p>

      {/* 🟩 safe - Dev1 adds own code */}
      <p>We hope you visit again!</p>
      <p>Logout completed successfully.</p>
    </div>
  );
};

export default logOut;
