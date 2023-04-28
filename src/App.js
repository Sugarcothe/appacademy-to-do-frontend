import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./components/SignIn";
import Register from "./components/Signup";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
