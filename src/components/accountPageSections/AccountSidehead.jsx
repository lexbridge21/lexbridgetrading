/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AccountSidehead = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("⚠️ No token found in localStorage");
        return;
      }

      try {
        const { data } = await axios.get(
          "https://lexbridgetrading-backend.onrender.com/api/users/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(data.user);
      } catch (error) {
        console.error(
          "❌ API Error:",
          error.response ? error.response.data : error
        );
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <p>Loading user data...</p>;

  return (
    <header className="main-header">
      {/* nav */}
      <nav className="main-navbar navbar navbar-expand-lg  ">
        <div
          className="ml-auto position-absolute mt-3  px-4 pl-lg-9 "
          style={{ right: window.innerWidth >= 992 ? "20rem" : "9rem" }}
        >
          <ul className="nav sec-nav navbar-nav flex-row">
            <li className="user-item nav-item dropdown">
              <a
                className="user-link nav-link d-inline-flex align-items-center h-50 small-1 pl-1 pl-sm-3 pr-0"
                href="#"
                id="dropdownAdmin_02"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-avatar rounded-circle mr-sm-3"
                  src="https://lexbridgetrading.com/user.jpg"
                  alt="Avatar"
                />
                <div className="d-none d-sm-block lh-1">
                  <span className="small-5 fw-300">Welcome,</span>
                  <div className="lh-5 text-primary">{user.username}</div>
                </div>
                <span className="fa fa-chevron-down small-8 ml-3"></span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow-1 py-3 position-absolute mt-2"
                aria-labelledby="dropdownAdmin"
              >
                <div className="px-5 text-center">
                  <div
                    className="img-md position-relative br-n bp-c bs-c ar-1_1 mx-auto rounded-circle mb-3"
                    style={{
                      backgroundImage:
                        "url(https://lexbridgetrading.com/user.jpg)",
                    }}
                  >
                    <span className="position-absolute b-0 r--1 text-light small-6 d-block bg-primary p-2 rounded-circle lh-1">
                      <input
                        type="file"
                        className="custom-file-input position-absolute l-0 t-0 b-0 h-auto"
                        id="customFile"
                      />
                      <i className="fas fa-pen"></i>
                    </span>
                  </div>
                  <div className="lh-5 small-2 fw-500">{user.username}</div>
                  <hr className="my-4" />
                </div>
                <Link to="/profile" className="dropdown-item">
                  <span className="fa fa-user"></span>
                  My Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  <span className="fa fa-cog mr-2"></span>Settings
                </Link>
                <Link to="/login" className="dropdown-item">
                  <span className="fa fa-power-off mr-2"></span>Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* /.nav */}
    </header>
  );
};

export default AccountSidehead;
