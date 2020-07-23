import React, { useEffect } from "react";
import "../styles/Form.scss";

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
        <h3>Registration</h3>
        <span>Please enter a name and password</span>
        <form data-ms-form="signup">
          <br></br>
          <br></br>
          <input ms-field="email" placeholder="Email" />
          <br></br>
          <br></br>
          <input ms-field="password" placeholder="Password" />
          <br></br>
          <br></br>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}
