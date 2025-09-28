import React, { useState } from "react";

const SignUpPage = () => {
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const send = (e) => {
    e.preventDefault();
    fetch("http://192.168.1.182:5000/register", {
      // Replace with your API URL
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Sending JSON
      },
      body: JSON.stringify({
        fullname: fullname,
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        return response.json(); // Parse JSON response if any
      })
      .then((data) => {
        console.log("Success:", data);
        const token = data.msg;
        console.log(token);
        if(data.ok == false){
          alert(token)
        }else localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setemail("");
    setfullname("");
    setpassword("");
    setusername("");
  };

  return (
    <div className="big-ass-wrapper w-[100%] h-screen flex justify-center items-center">
      <div className="flex flex-col w-[90%] mx-auto max-w-xl shadow-xl rounded-xl p-10 bg-gray-50 border-3 border-greenish ">
        <h1 className="text-center text-4xl font-bold">Sign up</h1>
        <form className="flex flex-col gap-10 mt-15 items-center w-full">
          <div className="form-wrapper flex flex-col w-full transition-all">
            <label>Full Name</label>
            <input
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-greenish focus:bg-white"
              type="text"
              name="Username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-wrapper flex flex-col w-full transition-all">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-greenish focus:bg-white"
              type="text"
              name="Username"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-wrapper flex flex-col w-full transition-all">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-greenish focus:bg-white"
              type="email"
              name="Password"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-wrapper flex flex-col w-full transition-all">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="border-3 rounded outline-0 py-2 px-5 border-gray-300 transition-all focus:border-greenish focus:bg-white"
              type="password"
              name="Password"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={send}
            className="bg-[#8DD3BB] p-3 rounded w-30 hover:shadow-xl hover:bg-[#7bb7a2] hover:text-white transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
