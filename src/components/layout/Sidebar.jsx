import React from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ totalUnreadEmail }) => {
  return (
    <div className=" w-[250px] bg-white h-[90vh] rounded-md p-3 gap-3 flex flex-col border-r-2 ">
      <Link
        to="/sendMail"
        className="bg-blue-600 text-white w-full p-2 text-center hover:bg-blue-400"
      >
        Compose
      </Link>
      <ul className="w-full flex flex-col">
        <li className="w-full hover:bg-blue-400 p-1 text-xl rounded-md">
          <NavLink
            to="/inbox"
            className={({ isActive }) =>
              `w-full flex justify-between  p-1 rounded-md ${
                isActive ? "text-blue-500 font-bold" : "text-gray-500"
              }`
            }
          >
            Inbox{" "}
            <span className="text-[16px] text-gray-500 place-self-end ">
              {totalUnreadEmail > 0 && totalUnreadEmail}
            </span>
          </NavLink>
        </li>
        <li className="w-full hover:bg-blue-400 p-1 text-xl rounded-md">
          <NavLink
            to="sentmails"
            className={({ isActive }) =>
              `w-full block p-1 rounded-md ${
                isActive ? "text-blue-500 font-bold" : "text-gray-500"
              }`
            }
          >
            Sent
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
