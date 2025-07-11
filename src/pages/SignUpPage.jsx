/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    email1: "",
    password: "",
    password2: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    else if (!/^[A-Za-z0-9_\-]+$/.test(formData.username))
      newErrors.username =
        "Username can only contain letters, numbers, underscores, or dashes";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (formData.email !== formData.email1)
      newErrors.email1 = "Emails do not match";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.password2)
      newErrors.password2 = "Passwords do not match";

    if (!formData.agree)
      newErrors.agree = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://lexbridgetrading-backend.onrender.com/api/users/register",
          {
            fullName: formData.fullname,
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }
        );

        if (response.data.success) {
          Notiflix.Notify.success(
            "Registration Successful! Redirecting to login..."
          );
          setTimeout(() => {
            navigate("/login"); // Redirect to login page
          }, 2000);
        }
      } catch (error) {
        Notiflix.Notify.failure(
          error.response?.data?.message || "Registration failed"
        );
      }
    }
  };

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundImage: "url(https://lexbridgetrading.com/images/login.gif)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
        id="main-banner-page"
        className="position-relative page-header sign-in-headerparallax section-nav-smooth"
      >
        <div className="overlay overlay-dark opacity-7 z-index-1"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="page-titles whitecolor text-center padding_top padding_bottom">
                <h2 className="font-xlight">Register</h2>
                <h2 className="font-bold">Create an Account</h2>
                <center>
                  <div
                    style={{
                      height: "250px",
                      backgroundImage:
                        "url(https://lexbridgetrading.com/images/head.png)",
                      backgroundPosition: "center",
                      width: "250px",
                      opacity: "0.9",
                    }}
                  ></div>
                </center>
              </div>
            </div>
          </div>
          <div className="gradient-bg title-wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 whitecolor">
                <h3 className="float-left">Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section id="sign-in" className="bglight position-relative padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading bottom30 darkcolor font-light2">
                <span className="font-normal">Sign</span> Up
                <span className="divider-center"></span>
              </h2>
              <div
                className="col-md-8 offset-md-2 heading_space"
                style={{ color: "gray" }}
              >
                <p>To access your dashboard and control your investment</p>
              </div>
            </div>
            <div className="col-lg-6 pr-lg-0 col-md-12 d-none d-lg-flex">
              <div className="image login-image h-100">
                <img
                  src="https://lexbridgetrading.com/images/register.png"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
            <div className="col-lg-6 pl-lg-0 col-md-12 whitebox">
              <div className="widget logincontainer">
                <form
                  onSubmit={handleSubmit}
                  className="getin_form border-form"
                  style={{ color: "gray" }}
                >
                  <div className="row">
                    {[
                      { name: "fullname", placeholder: "Full Name" },
                      { name: "username", placeholder: "Username" },
                      { name: "email", placeholder: "Email Address" },
                      { name: "email1", placeholder: "Retype Your Email" },
                      {
                        name: "password",
                        placeholder: "Enter Password",
                        type: "password",
                      },
                      {
                        name: "password2",
                        placeholder: "Confirm Password",
                        type: "password",
                      },
                    ].map(({ name, placeholder, type = "text" }) => (
                      <div className="col-md-12 col-sm-12" key={name}>
                        <div className="form-group bottom35">
                          <input
                            className="form-control"
                            style={{ fontSize: "16px" }} // Add this
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            placeholder={placeholder}
                          />
                          {errors[name] && (
                            <p className="error" style={{ color: "red" }}>
                              {errors[name]}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group bottom35">
                        <input
                          type="text"
                          placeholder="Upline : n/a"
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                      />{" "}
                      I agree with{" "}
                      <a href="?a=rules" style={{ color: "gray" }}>
                        Terms and conditions
                      </a>
                      {errors.agree && <p className="error">{errors.agree}</p>}
                    </div>

                    <div className="col-sm-12">
                      <button type="submit" className="button gradient-btn">
                        Register
                      </button>
                      <p className="top30 mb-0">
                        Already have an account? &nbsp;
                        <a href="/login" className="defaultcolor">
                          Login Now
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
