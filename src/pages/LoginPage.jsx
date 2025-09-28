import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col mx-auto max-w-xl mt-10 shadow rounded-xl p-10">
      <h1 className="text-center text-4xl font-bold">Log in</h1>
      <form className="flex flex-col gap-10 mt-15 items-center w-full">
        <div className="form-wrapper flex flex-col w-full transition-all">
          <label>Username</label>
          <input
          className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-blue-300"
            type="text"
            name="Username"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-wrapper flex flex-col w-full transition-all">
          <label>Password</label>
          <input
          className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-blue-300"
            type="password"
            name="Password"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-[#8DD3BB] p-3 rounded w-30">Confirm</button>
      </form>
    </div>
  );
};

export default LoginPage;
