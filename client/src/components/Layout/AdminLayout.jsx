import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import "./admin.css";
const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                {" "}
                <NavLink to="/admin/users" className="admin-nav">
                  <FaUser className="admin-icon" /> Users
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/admin/contacts">
                  {" "}
                  <FaMessage />
                  Contacts
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/services">
                  {" "}
                  <FaList />
                  Services
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
