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
      <h2>Bye Bye SuperUser!</h2>

      <p>Welcome, {username}</p>
      <button onClick={handleLogout}>Logout</button>
      <p>{message}</p>

      {/* 🟩 safe additions */}
      <p>Thanks for being with us!</p>
      <p>Your session has ended.</p>
      <p>Come back anytime!</p>
    </div>
  );
};

export default logOut;
