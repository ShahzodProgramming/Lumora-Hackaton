import React, { useEffect, useState } from "react";

const LoginPage = () => {


  useEffect(() => {
    fetch('')
  }, []);

  return (
    <div className="big-ass-wrapper w-[100%] h-screen flex justify-center items-center">
      <div className="flex flex-col w-[90%] mx-auto max-w-xl shadow-xl rounded-xl p-10 bg-gray-50 border-3 border-greenish ">
        <h1 className="text-center text-4xl font-bold">Log in</h1>
        <form className="flex flex-col gap-10 mt-15 items-center w-full">
          <div className="form-wrapper flex flex-col w-full transition-all">
            <label>Username</label>
            <input
              className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-greenish focus:bg-white"
              type="text"
              name="Username"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-wrapper flex flex-col w-full transition-all">
            <label>Password</label>
            <input
              className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-greenish focus:bg-white"
              type="password"
              name="Password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-[#8DD3BB] p-3 rounded w-30 hover:shadow-xl hover:bg-[#7bb7a2] hover:text-white transition">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
