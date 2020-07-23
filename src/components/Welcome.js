import React from "react";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <form action="/#/ms/logout">
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}
