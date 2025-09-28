import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pipeline from "./pages/Pipeline";
import NotFound from "./pages/NotFound";

const Approutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
};

export default Approutes;
