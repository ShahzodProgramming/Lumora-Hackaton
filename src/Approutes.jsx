import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Pipeline from "./pages/Pipeline";
import NotFound from "./pages/NotFound";
import MorningBrief from "./pages/MorningBrief";

const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignUpPage />} />
        
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/mb" element={<MorningBrief />} />
      </Routes>
    </div>
  );
};

export default Approutes;
