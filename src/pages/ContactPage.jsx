/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      style={{
        backgroundImage: "url(https://lexbridgetrading.com/images/cont.jpg)",
        backgroundPosition: "start",
      }}
      className="position-relative page-header contact-headerparallax "
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="page-titles whitecolor text-center padding">
              <h2 className="font-bold">Contact Us</h2>
              <h3 className="font-light py-3">We'd Love To Hear From You.</h3>
            </div>
          </div>
        </div>
        <div className="gradient-bg title-wrap mt-n5">
          <div className="row">
            <div className="col-lg-12 col-md-12 whitecolor">
              <h3 className="float-left">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>

      <section
        id="stayconnect1"
        className="bglight position-relative padding noshadow"
      >
        <div className="container whitebox">
          <div className="widget py-5">
            <div className="row">
              <div className="col-md-12 text-center wow fadeIn mt-n3">
                <h2 className="heading bottom30 darkcolor font-light2 pt-1">
                  <span className="font-normal">Contact</span> Us
                  <span className="divider-center"></span>
                </h2>
                <div className="col-md-8 offset-md-2 bottom35">
                  <p style={{ color: "gray" }}>
                    Our team and experts are available to take your request and
                    give you an instant feedback.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-6 order-sm-2">
                <div className="contact-meta px-2 text-center text-md-left">
                  <div className="heading-title">
                    <h2 className="darkcolor font-normal mb-4">
                      Our Agency Office In Almere
                    </h2>
                  </div>
                  <p className="bottom10" style={{ color: "gray" }}>
                    Address: 22 Market Square, London, United Kingdom, E14 6BU
                  </p>
                  <p className="bottom10">
                    <a
                      href="mailto:support@lexbridgetrading.com"
                      style={{ color: "gray" }}
                    >
                      support@lexbridgetrading.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="heading-title wow fadeInUp">
                  {!submitted ? (
                    <form
                      onSubmit={handleSubmit}
                      className="getin_form wow fadeInUp"
                    >
                      <div className="row px-2">
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Name:"
                              name="name"
                              value={formData.name}
                              style={{ fontSize: "16px" }} // Add this
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Email:"
                              name="email"
                              value={formData.email}
                              style={{ fontSize: "16px" }} // Add this
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Message:"
                              name="message"
                              value={formData.message}
                              style={{ fontSize: "16px" }} // Add this
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <button
                            type="submit"
                            className="button gradient-btn w-100"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-4">
                      <span style={{ color: "gray" }}>
                        Message has been successfully sent. We will back to you
                        in next 24 hours. Thank you.
                      </span>
                      <p>We will get back to you as soon as possible.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
