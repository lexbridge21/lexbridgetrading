/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";
import SideBar from "./SideBar";
import AccountSidehead from "./AccountSidehead";
import AccountFooter from "./AccountFooter";

const AccountEdit = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
    bitcoin: "",
    eth: "",
  });

  // Load saved form data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        Notiflix.Notify.failure("No token found! Please log in.");
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

        // Update form only if localStorage does not have data
        setFormData((prev) => {
          const updatedFormData = {
            ...prev,
            fullName: prev.fullName || data.user.fullName || "",
            email: prev.email || data.user.email || "",
            bitcoin: prev.bitcoin || data.user.bitcoin || "",
            eth: prev.eth || data.user.eth || "",
          };
          localStorage.setItem("formData", JSON.stringify(updatedFormData)); // Ensure it's stored
          return updatedFormData;
        });
      } catch (error) {
        Notiflix.Notify.failure(
          "Error fetching user data. Please try again later."
        );
      }
    };

    fetchUserData();
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.fullName) {
      Notiflix.Notify.warning("Please type your full name!");
      return false;
    }
    if (formData.password !== formData.password2) {
      Notiflix.Notify.warning("Passwords do not match!");
      return false;
    }
    if (!formData.email.match(/^[^@]+@[^@]+\.\w{2,4}$/)) {
      Notiflix.Notify.warning("Please enter a valid email address!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Notiflix.Notify.success("Profile updated successfully!");
      } else {
        Notiflix.Notify.failure("Error updating profile: " + data.message);
      }
    } catch (error) {
      Notiflix.Notify.failure("Server error, please try again later.");
    }
  };

  if (!user) return <p>Loading user data...</p>;

  return (
    <>
      <SideBar />
      <div className="main-container">
        <AccountSidehead />
        <main className="main-content overflow-hidden">
          <div className="inner-body overflow-hidden">
            <div className="container-fluid pt-7 pb-3">
              <div className="row flex-wrap align-items-center py-3">
                <div className="col mb-4 mb-md-0">
                  <div className="text-light">
                    <h3 className="fw-100 mb-1">
                      Welcome back, {user.username}!
                    </h3>
                    <span className="text-info">Edit Account</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div
                className="alert alert-theme alert-theme-outline border-left-4 rounded"
                role="alert"
              >
                <form onSubmit={handleSubmit}>
                  <table cellSpacing={0} cellPadding={2} border={0}>
                    <tbody>
                      <tr>
                        <td>Account Name:</td>
                        <td>{user.fullName}</td>
                      </tr>
                      {/* <tr>
                        <td>Registration date:</td>
                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                      </tr> */}
                      <tr>
                        <td>Your Full Name:</td>
                        <td>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="inpts"
                            size={30}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>New Password:</td>
                        <td>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="inpts"
                            size={30}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Retype Password:</td>
                        <td>
                          <input
                            type="password"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            className="inpts"
                            size={30}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Your BITCOIN Address:</td>
                        <td>
                          <input
                            type="text"
                            name="bitcoin"
                            value={formData.bitcoin}
                            onChange={handleChange}
                            className="inpts"
                            size={30}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Your ETH Address:</td>
                        <td>
                          <input
                            type="text"
                            name="eth"
                            value={formData.eth}
                            onChange={handleChange}
                            className="inpts"
                            size={30}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Your E-mail address:</td>
                        <td>
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="inpts"
                            size={30}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>
                          <input
                            type="submit"
                            value="Update"
                            className="my-3 mx-1 btn btn-primary"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <AccountFooter />
        </main>
      </div>
    </>
  );
};

export default AccountEdit;
