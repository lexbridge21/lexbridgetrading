/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";

import AccountSidehead from "./AccountSidehead";
import AccountFooter from "./AccountFooter";

const AccountReferral = () => {
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
    <>
      <SideBar />
      <>
        <AccountSidehead />
        <div className="main-container">
          <main className="main-content overflow-hidden">
            <div id="dashboard" className="inner-body overflow-hidden">
              <div className="container-fluid pt-7 pb-3">
                <div className="row flex-wrap align-items-center py-3">
                  <div className="col mb-4 mb-md-0">
                    <div className="text-light">
                      <h3 className="fw-100 mb-1">
                        Welcome back, {user.username}!
                      </h3>
                      <span className="text-info">Your Referrals</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-auto"></div>
                </div>
                <div className="container-fluid">
                  <div
                    className="alert alert-theme alert-theme-outline border-left-4 rounded"
                    role="alert"
                  >
                    <br />
                    <table width={300} cellSpacing={1} cellPadding={1}>
                      <tbody>
                        <tr>
                          <td className="item">Referrals:</td>
                          <td className="item">0</td>
                        </tr>
                        <tr>
                          <td className="item">Active referrals:</td>
                          <td className="item">0</td>
                        </tr>
                        <tr>
                          <td className="item">Total referral commission:</td>
                          <td className="item">$0.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <div></div>
                  </div>
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

export default AccountReferral;
