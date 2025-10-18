/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when screen resizes to large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Always close on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sidebar Toggle Button (Always Visible) */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            src="https://lexbridgetrading.com/logo.png"
            className="logo"
            alt="Logo"
          />
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link to="/dashboard">Account Main</Link>
          </li>
          <li>
            <Link to="/deposit">Make Deposit</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/withdrawal">Withdraw</Link>
          </li>
          <li>
            <Link to="/referral">Referrals</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
