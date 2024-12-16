import React from "react";
import Header from "./components/layout/Header";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SendMail from "./pages/SendMail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sendmail" element={<SendMail />} />
      </Routes>
    </>
  );
};

export default App;
