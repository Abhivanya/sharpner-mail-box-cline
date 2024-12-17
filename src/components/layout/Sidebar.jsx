import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-[250px] bg-white h-full rounded-md p-3 gap-3 flex flex-col ">
      <Link
        to="/sendMail"
        className="bg-blue-600 text-white w-full p-2 text-center hover:bg-blue-400"
      >
        Compose
      </Link>
      <ul className="w-full flex flex-col">
        <li className="w-full hover:bg-blue-400 p-1 text-xl rounded-md ">
          <Link to="/inbox">Inbox</Link>
        </li>
        <li className="w-full hover:bg-blue-400 p-1 text-xl rounded-md">
          <Link to="sentmails">Sent</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
