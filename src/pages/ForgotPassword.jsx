/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const isSubmitted = localStorage.getItem("forgotPasswordSubmitted");
    if (isSubmitted) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please type your email address!");
      return;
    }

    // Simulate password reset process
    console.log("Forgot Password Request Submitted for:", email);

    // Save state in localStorage
    localStorage.setItem("forgotPasswordSubmitted", "true");

    // Refresh the page
    window.location.reload();
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
        className="position-relative page-header sign-in-header parallax section-nav-smooth"
      >
        <div className="overlay overlay-dark opacity-7 z-index-1"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="page-titles whitecolor text-center padding_top padding_bottom">
                <h2 className="font-xlight">Forgot</h2>
                <h2 className="font-bold">Your Password</h2>
                <center>
                  <div
                    style={{
                      height: "250px",
                      backgroundImage:
                        "url(https://lexbridgetrading.com/images/head.png)",
                      backgroundPosition: "center",
                      width: "250px",
                      opacity: 0.9,
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

      {/* Sign-In Section */}
      <section id="sign-in" className="bglight position-relative padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center wow fadeIn"
              data-wow-delay="300ms"
            >
              <h2 className="heading bottom30 darkcolor font-light2">
                <span className="font-normal">Recover Password</span>
                <span className="divider-center"></span>
              </h2>
            </div>
            <div className="col-lg-6 pr-lg-0 col-md-12 d-none d-lg-flex">
              <div className="image login-image h-100">
                <img
                  src="https://lexbridgetrading.com/images/login-section.jpg"
                  alt="Login Section"
                  className="w-100 h-100"
                />
              </div>
            </div>
            <div className="col-lg-6 pl-lg-0 col-md-12 whitebox">
              <div className="widget logincontainer">
                <h3 className="darkcolor bottom30 text-center text-lg-left">
                  Restore Password
                </h3>

                {submitted ? (
                  <p className="alert alert-success">
                    Your account was found. Please check your e-mail address and
                    follow the confirmation URL to reset your password.
                  </p>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="getin_form border-form"
                  >
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group bottom35">
                          <label
                            htmlFor="loginEmail"
                            className="d-none"
                          ></label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Type Your Email Address:"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button type="submit" className="button gradient-btn">
                          Forgot
                        </button>
                        <Link to="/login" className="ml-2 defaultcolor">
                          Remember password? Login
                        </Link>
                        <p className="top30 mb-0">
                          Don't have an account? &nbsp;
                          <Link to="/signup" className="defaultcolor">
                            Sign Up Now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
