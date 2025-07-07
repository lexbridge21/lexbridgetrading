/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import AccountFooter from "./AccountFooter";
import AccountSidehead from "./AccountSidehead";
import { Link } from "react-router-dom";

const AccountWithdrawal = () => {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [wallet, setWallet] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const VALID_TOKEN = "A1X3Z8R2L0M5YQ"; // Fixed valid token

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

  // Format numbers like 1234 => "1,234"
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };

  const handleWithdrawClick = () => {
    setShowForm(true);
    setError("");
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!wallet || !token) {
      setError("Please fill out all fields.");
      return;
    }

    if (token !== VALID_TOKEN) {
      setError("Invalid Security ID.");
      return;
    }

    setSuccessMsg("Withdrawal request submitted successfully.");
    setError("");
    setShowForm(false);
    // Optionally, send withdrawal request to server here
  };

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
                      <span className="text-info">Ask for withdrawal</span>
                    </div>
                  </div>
                </div>

                <div className="container-fluid">
                  <div
                    className="alert alert-theme alert-theme-outline border-left-4 rounded"
                    role="alert"
                  >
                    <form>
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Account Balance:</td>
                            <td>
                              $<b>{formatNumber(user.balance)}</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Pending Withdrawals:</td>
                            <td>
                              $<b>{formatNumber(user.withdrawal)}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th></th>
                            <th> My Wallets</th>
                            <th>Available</th>
                            <th>Pending Withdrawal</th>
                            <th>Accounts</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                              <img
                                src="https://lexbridgetrading.com/images/1000.gif"
                                width="44"
                                height="17"
                                alt="Bitcoin"
                              />{" "}
                              BITCOIN
                            </td>
                            <td>
                              <b style={{ color: "green" }}>
                                $<b>{formatNumber(user.earning)}</b>
                              </b>
                            </td>
                            <td>
                              <b style={{ color: "red" }}>
                                $<b>0.00</b>
                              </b>
                            </td>
                            <td>Wallet will be requested below</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <img
                                src="https://lexbridgetrading.com/images/1001.gif"
                                width="44"
                                height="17"
                                alt="ETH"
                              />{" "}
                              ETH
                            </td>
                            <td>
                              <b style={{ color: "green" }}>
                                $<b>{formatNumber(user.deposit)}</b>
                              </b>
                            </td>
                            <td>
                              <b style={{ color: "red" }}>
                                $<b>0.00</b>
                              </b>
                            </td>
                            <td>Wallet will be requested below</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="text-center mt-4">
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={handleWithdrawClick}
                        >
                          Withdraw Funds
                        </button>
                      </div>
                    </form>

                    {showForm && (
                      <div className="mt-4 p-4 border rounded bg-dark text-light">
                        <h5>Enter Withdrawal Details</h5>
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Enter Your Wallet Address</label>
                            <input
                              type="text"
                              className="form-control"
                              value={wallet}
                              onChange={(e) => setWallet(e.target.value)}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Enter Security ID</label>
                            <input
                              type="text"
                              className="form-control"
                              maxLength={14}
                              value={token}
                              onChange={(e) => setToken(e.target.value)}
                            />
                            <small className="text-muted">
                              Enter 14-character Security ID
                            </small>
                          </div>
                          {error && <p className="text-danger mt-2">{error}</p>}
                          {successMsg && (
                            <p className="text-success mt-2">{successMsg}</p>
                          )}
                          <button
                            className="btn btn-success mt-3"
                            type="submit"
                          >
                            Confirm Withdrawal
                          </button>
                        </form>
                      </div>
                    )}
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

export default AccountWithdrawal;
