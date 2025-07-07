/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const AccountFooter = () => {
  return (
    <footer className="footer panel">
      <div className="footer-body text-primary">
        <div className="row no-gutters align-items-center">
          <div className="col-12 col-sm-auto">
            <div className="text-center text-sm-left fw-400 mb-2 mb-sm-0">
              Copyright © All Rights Reserved.
            </div>
          </div>
          <div className="col-12 col-sm">
            <div className="nav nav-bold-style justify-content-center justify-content-sm-end text-uppercase mx--4">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AccountFooter;
