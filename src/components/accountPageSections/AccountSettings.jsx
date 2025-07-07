/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SideBar from "./SideBar";
import AccountSidehead from "./AccountSidehead";
import AccountFooter from "./AccountFooter";

const AccountSettings = () => {
  const [ipSensitivity, setIpSensitivity] = useState("disabled");
  const [browserChange, setBrowserChange] = useState("disabled");
  const [twoFactorCode, setTwoFactorCode] = useState("");

  const handleIpChange = (e) => setIpSensitivity(e.target.value);
  const handleBrowserChange = (e) => setBrowserChange(e.target.value);
  const handleTwoFactorCodeChange = (e) => setTwoFactorCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[0-9]{6}$/.test(twoFactorCode)) {
      alert("Please enter a valid 6-digit code!");
      return;
    }
    alert("Settings updated successfully!");
  };

  return (
    <>
      <SideBar />
      <>
        <AccountSidehead />
        <div className="main-container">
          <main className="main-content overflow-hidden">
            <div className="container-fluid pt-7 pb-3">
              <div className="row flex-wrap align-items-center py-3">
                <div className="col mb-4">
                  <div className="text-light">
                    <h3 className="fw-100 mb-1">Welcome back, frankrichie!</h3>
                    <span className="text-info">
                      Advanced login security settings
                    </span>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="alert alert-theme alert-theme-outline border-left-4 rounded">
                  <form>
                    <h4>Detect IP Address Change Sensitivity</h4>
                    {["disabled", "medium", "high", "always"].map((level) => (
                      <div key={level}>
                        <input
                          type="radio"
                          name="ip"
                          value={level}
                          checked={ipSensitivity === level}
                          onChange={handleIpChange}
                        />{" "}
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </div>
                    ))}
                    <h4>Detect Browser Change</h4>
                    <div>
                      <input
                        type="radio"
                        name="browser"
                        value="disabled"
                        checked={browserChange === "disabled"}
                        onChange={handleBrowserChange}
                      />{" "}
                      Disabled
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="browser"
                        value="enabled"
                        checked={browserChange === "enabled"}
                        onChange={handleBrowserChange}
                      />{" "}
                      Enabled
                    </div>
                    <button type="submit" className="my-3 mx-1 btn btn-primary">
                      Set
                    </button>
                  </form>

                  <h3>Two-Factor Authentication</h3>
                  <form onSubmit={handleSubmit}>
                    <p>
                      Install{" "}
                      <a
                        href="http://m.google.com/authenticator"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Authenticator
                      </a>{" "}
                      on your mobile device.
                    </p>
                    {/* <p>
                      Your Secret Code is: <b>VSP4MTTGFGJBNTZB</b>
                    </p> */}

                    <p>Enter the two-factor authentication code:</p>
                    <input
                      type="text"
                      value={twoFactorCode}
                      onChange={handleTwoFactorCodeChange}
                      className="inpts"
                    />
                    <button type="submit" className="my-3 mx-1 btn btn-primary">
                      Enable
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <AccountFooter />
          </main>
        </div>
      </>
    </>
  );
};

export default AccountSettings;
