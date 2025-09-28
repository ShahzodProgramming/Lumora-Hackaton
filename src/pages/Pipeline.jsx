import React, { useEffect, useState } from "react";
import PipelineCard from "../components/PipelineCard";
import Navbar from "../components/Navbar";

const Pipeline = () => {
  const [pipelineData, setpipelineData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://192.168.1.182:5000/startups", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        console.log("Response status:", response.status);
        const text = await response.text();
        console.log("Raw response text:", text);

        if (!response.ok) {
          throw new Error(`Network response was not OK: ${response.status}`);
        }

        return JSON.parse(text);
      })
      .then((data) => {
        console.log("Data fetched:", data);

        setpipelineData(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Pipeline - List of Start-Ups
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pipelineData.map((startup, idx) => (
            <PipelineCard key={idx} {...startup} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pipeline;
