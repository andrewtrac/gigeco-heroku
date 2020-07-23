import React, { useEffect } from "react";
import "../styles/form.scss";

export default function Login() {
  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://api.memberstack.io/static/memberstack.js?custom";
    script.setAttribute(
      "data-memberstack-id",
      "335d53e2477f259d83f9b05ece497148"
    );
    script.async = true;
    script.onload = function () {
      console.log("Memberstack Loaded");
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="div-form">
      <div className="div-form-contents">
        <h3>Login</h3>
        <span>Please enter your name and password</span>
        <form data-ms-form="login">
          <br></br>
          <br></br>
          <input data-ms-member="email" placeholder="email" />
          <br></br>
          <br></br>
          <input data-ms-member="password" placeholder="password" />
          <br></br>
          <br></br>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
