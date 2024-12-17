import React from "react";
import Header from "./components/layout/Header";
import Signup from "./pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SendMail from "./pages/SendMail";
import Inbox from "./pages/Inbox";
import Sidebar from "./components/layout/Sidebar";
import SentMails from "./pages/SentMails";

const App = () => {
  return (
    <>
      <Header />
      <div className="  flex  bg-red-400 ">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<Home />} />

            <Route path="/sendmail" element={<SendMail />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/sentmails" element={<SentMails />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
