import React from "react";

const Login = ({switchToRegister}) => {
  return (
    <div>
      <div className="user-login">
        <h1>LOG IN</h1>
        <form className="login-form">
          <input type="text" placeholder="Username" className="form-input" />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />{" "}
          <br />
          <button className="login-button">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <button onClick={switchToRegister}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
