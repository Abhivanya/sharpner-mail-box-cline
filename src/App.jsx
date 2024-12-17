import React, { useState } from "react";
import Header from "./components/layout/Header";
import Signup from "./pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SendMail from "./pages/SendMail";
import Inbox from "./pages/Inbox";
import Sidebar from "./components/layout/Sidebar";
import SentMails from "./pages/SentMails";
import ViewEmail from "./components/ViewEmail";

const App = () => {
  const [unReadEmail, setUnreadEmail] = useState(0);
  return (
    <>
      <Header />
      <div className="  flex  ">
        <Sidebar totalUnreadEmail={unReadEmail} />
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<Home />} />

            <Route path="/sendmail" element={<SendMail />} />
            <Route
              path="/inbox"
              element={<Inbox setUnreadEmail={setUnreadEmail} />}
            />
            <Route path="/sentmails" element={<SentMails />} />
            <Route path="/email/:type/:emailKey" element={<ViewEmail />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
