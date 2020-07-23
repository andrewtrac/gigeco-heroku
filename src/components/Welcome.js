import React from "react";
//import '../styles/Welcome.scss'

export default function Welcome() {
  return (
    <div className="welcome-page">
      <h3>Welcome Page</h3>
      <form action="/#/ms/logout">
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}
