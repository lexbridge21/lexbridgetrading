/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import StayConnected from "../components/homePageSections/StayConnected";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <StayConnected />
      <footer id="site-footer" className="bgdark padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer_panel padding_bottom_half bottom20">
                <a href="/" className="footer_logo bottom25">
                  <img
                    src="https://lexbridgetrading.com/logo1.png"
                    alt="access"
                  />
                </a>
                <p className="whitecolor bottom25">
                  We have molded an all-around client-driven experience that
                  focuses on the latest value-adding market insights and
                  customizing our broad range of investment opportunities to
                  meet the diverse needs of high-net-worth and institutional
                  clients.
                </p>
                <div className="d-table w-100 address-item whitecolor bottom25">
                  <span className="d-table-cell align-middle">
                    <i className="fas fa-mail-alt"></i>
                  </span>
                  <p className="d-table-cell align-middle bottom0">
                    Contact E-Mail:
                    <a
                      className="d-block"
                      href="mailto:support@lexbridgetrading.com"
                    >
                      support@lexbridgeinternationaltrading.com
                    </a>
                    <a
                      className="d-block"
                      href="mailto:contact@lexbridgetrading.com"
                    >
                      contact@lexbridgeinternationaltrading.com
                    </a>
                  </p>
                </div>
                <ul>
                  <li>
                    <h4 style={{ color: "red" }}>Office Address:</h4>
                    <p style={{ color: "white" }}>
                      Suite 18 95 Miles Road, Mitcham, Surrey, England, CR4 3FH.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                <h3 className="whitecolor bottom25">Our Services</h3>
                <ul className="links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/about">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/faq">Faq's</Link>
                  </li>
                </ul>
                <br />
                <br />
                <h3 className="whitecolor bottom25">Legal</h3>
                <ul className="links">
                  <li>
                    <a href="https://lexbridgetrading.com/certificate.pdf">
                      Certificate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer_panel padding_bottom_half bottom20 text-center">
                <h3 className="whitecolor bottom25">
                  Lexbridge Trading Limited
                </h3>
                <p className="whitecolor bottom25">
                  Click the link below to download our company profile.
                </p>
                <a
                  style={{
                    backgroundColor: "#FF6600",
                    color: "#FFFFFF",
                    boxShadow: "0px 0px 2px #FFFFFF",
                  }}
                  className="button"
                  href="https://find-and-update.company-information.service.gov.uk/company/07808905"
                >
                  Company's Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center wow fadeIn animated"
              data-wow-delay="300ms"
            >
              <p className="m-0 py-3">Copyright © All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
