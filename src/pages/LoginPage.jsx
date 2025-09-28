import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <form className="flex flex-col gap-10">
        <div className="form-wrapper flex flex-col w-1/2">
          <label>Username</label>
          <input
          className="border-3 rounded outline-0 py-2 px-5 border-gray-300 focus:border-blue-300"
            type="text"
            name="Username"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-wrapper flex flex-col w-1/2">
          <label>Password</label>
          <input
          className="border-3 rounded outline-0 py-2 px-5 border-gray-300 focus:border-blue-300"
            type="password"
            name="Password"
            placeholder="Enter your password"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
