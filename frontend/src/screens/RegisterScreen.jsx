import React from "react";

const RegisterScreen = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input type="password" id="password" />
          <button>Select File</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
