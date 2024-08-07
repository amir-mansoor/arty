import React from "react";

const LoginScreen = () => {
  return (
    <div className="mt-4">
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button className="btn-small">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
