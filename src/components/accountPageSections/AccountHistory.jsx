/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import AccountSidehead from "./AccountSidehead";
import AccountFooter from "./AccountFooter";

const AccountHistory = () => {
  const [user, setUser] = useState(null);

  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("");
  const [currency, setCurrency] = useState("");
  const [fromMonth, setFromMonth] = useState("");
  const [toMonth, setToMonth] = useState("");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format numbers like 1234 => "1,234"
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };

  const fetchTransactions = async () => {
    if (!user) return;
    try {
      const { data } = await axios.get(
        `https://lexbridgetrading-backend.onrender.com/api/transactions/${user._id}`,
        {
          params: {
            type,
            currency,
            fromMonth,
            toMonth,
          },
        }
      );
      setTransactions(data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    if (user) fetchTransactions();
  }, [user]);

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
                      <span className="text-info">History</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <select
                          className="form-control"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="">All transactions</option>
                          <option value="deposit">Deposit</option>
                          <option value="withdrawal">Withdrawal</option>
                          <option value="earning">Earning</option>
                          <option value="commissions">
                            Referral commission
                          </option>
                        </select>
                        <br />
                        <select
                          className="form-control"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          <option value="">All eCurrencies</option>
                          <option value="BITCOIN">BITCOIN</option>
                          <option value="ETH">ETH</option>
                        </select>
                      </td>
                      <td align="right">
                        <label>From:</label>
                        <select
                          value={fromMonth}
                          onChange={(e) => setFromMonth(e.target.value)}
                          className="form-control"
                        >
                          <option value="">From</option>
                          {months.map((month, i) => (
                            <option key={i} value={i}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <br />
                        <label>To:</label>
                        <select
                          value={toMonth}
                          onChange={(e) => setToMonth(e.target.value)}
                          className="form-control"
                        >
                          <option value="">To</option>
                          {months.map((month, i) => (
                            <option key={i} value={i}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={fetchTransactions}
                        >
                          Go
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />

                <div
                  className="alert alert-theme alert-theme-outline border-left-4 rounded"
                  role="alert"
                >
                  <table className="table" width="100%">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th width="200">Amount</th>
                        <th width="170">Date</th>
                      </tr>
                    </thead>
                    <tbody style={{ textTransform: "capitalize" }}>
                      {transactions.length === 0 ? (
                        <tr>
                          <td colSpan="3" align="center">
                            No transactions found
                          </td>
                        </tr>
                      ) : (
                        transactions.map((txn) => (
                          <tr key={txn._id}>
                            <td>{txn.type}</td>
                            <td>
                              $ {formatNumber(txn.amount)} {txn.currency}
                            </td>
                            <td>
                              {new Date(txn.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>

                  <ul className="pagination">
                    <li className="page-item">
                      <a className="prev page-link disabled">&lt;&lt;</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="next page-link disabled">&gt;&gt;</a>
                    </li>
                  </ul>
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

export default AccountHistory;
