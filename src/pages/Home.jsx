import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="bg-greenish p-5 mt-5">
          <h1 className="text-3xl">Welcome to Investor OS</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
