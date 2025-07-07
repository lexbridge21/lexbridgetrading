/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

import "./Faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "Innovation",
      content:
        "We take great pride in the fact that we have been around since the earliest days of investment...",
    },
    {
      title: "Our Goals",
      content:
        "For long, we have been a leader in the global Investment revolution...",
    },
    {
      title: "How to be a member",
      content:
        "To become a member, sign up on our website and follow the registration process.",
    },
    {
      title: "Is it safe to invest?",
      content:
        "Yes, funds are securely stored with lexbridgetrading.com. We provide the best trading conditions possible...",
    },
    {
      title: "Simplicity",
      content:
        "One of our main goals is to remove barriers and make online trading more accessible...",
    },
    {
      title: "Our platform",
      content:
        "Our platform is intuitive and user-friendly, making investment a simple and interactive experience.",
    },
    {
      title: "Quality",
      content:
        "A meticulous thought process guides us to deliver the best experience for all users...",
    },
  ];

  return (
    <>
      <Helmet>{/* External CSS Links */}</Helmet>

      {/* Page Header */}
      <section
        style={{
          backgroundImage: "url(https://lexbridgetrading.com/images/faq.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        id="main-banner-page"
        className="position-relative page-header faq-headerparallax section-nav-smooth"
      >
        <div className="overlay overlay-dark opacity-8 z-index-1"></div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 offset-lg-2 text-center text-white padding_top padding_bottom"
              style={{ color: "white" }}
            >
              <h2 className="font-xlight">Read These</h2>
              <h2 className="font-bold">Before Asking Any More</h2>
              <h2 className="font-xlight">Questions</h2>
              <h3 className="font-light pt-2">
                Might Be Your Problem-Solving Answer Is Here
              </h3>
            </div>
          </div>
          <div className="gradient-bg title-wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 whitecolor">
                <h3 className="float-left">FAQ's</h3>
                <ul
                  className="breadcrumb top10 bottom10 float-right"
                  style={{
                    background: "none",
                  }}
                ></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="ourfaq" className="bglight position-relative padding">
        <div className="container">
          <div className="row text-center">
            <div
              className="col-md-12 animated wow fadeIn"
              data-wow-delay="300ms"
            >
              <h2 className="heading bottom30 darkcolor font-light2">
                Frequently Asked <span className="font-normal">Questions</span>
                <span className="divider-center"></span>
              </h2>
              <div className="col-md-8 offset-md-2">
                <p className="heading_space" style={{ color: "gray" }}>
                  If you have questions, we have all the answers you need
                </p>
              </div>
            </div>
          </div>

          {/* Custom Dropdown Accordion */}
          <div className="col-md-12 col-sm-12">
            <div id="faq-dropdown">
              {faqData.map((faq, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <h5 className="mb-0">
                      <button
                        className={` btn-block text-left ${
                          openIndex === index ? "active" : ""
                        }`}
                        onClick={() => toggleDropdown(index)}
                        style={{ backgroundColor: "transparent" }}
                      >
                        {faq.title}
                        <span className="float-right">
                          <i
                            className={`fas fa-chevron-${
                              openIndex === index ? "up" : "down"
                            }`}
                          ></i>
                        </span>
                      </button>
                    </h5>
                  </div>
                  {openIndex === index && (
                    <div className="card-body">{faq.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
