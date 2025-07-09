/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Notiflix from "notiflix";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://lexbridgetrading-backend.onrender.com/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Notiflix.Notify.success("Login successful!");

        // **Store token in localStorage**
        localStorage.setItem("token", data.token);

        // Redirect to dashboard
        // window.location.href = "/dashboard";
        navigate("/dashboard");
      } else {
        Notiflix.Notify.failure(data.message || "Login failed!");
      }
    } catch (error) {
      Notiflix.Notify.failure("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://lexbridgetrading.com/css/style.css"
      />

      <section
        style={{
          backgroundImage: `url(https://lexbridgetrading.com/images/login.gif)`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
        className="position-relative page-header sign-in-headerparallax"
      >
        <div className="overlay overlay-dark opacity-7 z-index-1"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="page-titles whitecolor text-center padding_top padding_bottom">
                <h2 className="font-xlight">Log Into</h2>
                <h2 className="font-bold">Your Account To</h2>
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

      <section id="sign-in" className="bglight position-relative padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center wow fadeIn"
              data-wow-delay="300ms"
            >
              <h2 className="heading bottom30 darkcolor font-light2">
                <span className="font-normal">Log</span> In
                <span className="divider-center"></span>
              </h2>
              <div className="col-md-8 offset-md-2 heading_space">
                <p style={{ color: "gray" }}>
                  To access your dashboard and control your investment
                </p>
              </div>
            </div>
            <div className="col-lg-6 pr-lg-0 col-md-12 d-none d-lg-flex">
              <div className="image login-image h-100">
                <img
                  src="https://lexbridgetrading.com/images/login-section.jpg"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
            <div className="col-lg-6 pl-lg-0 col-md-12 whitebox">
              <div className="widget logincontainer">
                <h3 className="darkcolor bottom30 text-center text-lg-left">
                  Sign In
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="getin_form border-form"
                >
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group bottom35">
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Username:"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group bottom35 position-relative">
                        <input
                          className="form-control"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password:"
                          required
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            right: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            color: "gray",
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group bottom30 ml-1">
                        <div className="form-check text-left">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                            style={{ color: "gray" }}
                          >
                            Keep Me Signed In
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        className="button gradient-btn"
                        disabled={loading}
                      >
                        {loading ? "Logging In..." : "Login"}
                      </button>
                      <Link
                        to="/forgot"
                        className="ml-2 defaultcolor"
                        style={{ color: "gray" }}
                      >
                        Forget password?
                      </Link>
                      <p className="top30 mb-0" style={{ color: "gray" }}>
                        Don't have an account? &nbsp;
                        <Link to="/signup" className="defaultcolor">
                          Sign Up Now
                        </Link>
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

export default LoginPage;
