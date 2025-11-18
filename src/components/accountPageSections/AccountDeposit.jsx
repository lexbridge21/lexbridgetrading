/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountSidehead from "./AccountSidehead";
import SideBar from "./SideBar";
import Notiflix from "notiflix";
import { useNavigate } from "react-router-dom";
import AccountFooter from "./AccountFooter";

const AccountDeposit = () => {
  const [user, setUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [amount, setAmount] = useState("100.00");
  const navigate = useNavigate();
  // Format numbers like 1234 => "1,234"
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };

  const plans = [
    {
      id: 1,
      name: "SILVER PLAN",
      min: "100.00",
      max: "999.00",
      profit: "2.30%",
      days: 15,
    },
    {
      id: 2,
      name: "GOLD PLAN",
      min: "1000.00",
      max: "9999.00",
      profit: "2.60%",
      days: 30,
    },
    {
      id: 3,
      name: "DIAMOND PLAN",
      min: "10000.00",
      max: "29999.00",
      profit: "2.80%",
      days: 30,
    },
    {
      id: 4,
      name: "LEVEL 4 PLAN",
      min: "30000.00",
      max: "50000.00",
      profit: "3.00%",
      days: 30,
    },
    {
      id: 5,
      name: "FIAT CURRENCY",
      min: "500.00",
      max: "9999.00",
      profit: "5.60%",
      days: 30,
    },
    {
      id: 6,
      name: "FOREX MARKET",
      min: "10000.00",
      max: "49999.00",
      profit: "5.80%",
      days: 45,
    },
  ];

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

  const handleSubmit = () => {
    if (!selectedPlan || !selectedCurrency || !amount) {
      Notiflix.Notify.failure(
        "Please select a plan, currency, and enter an amount."
      );
      return;
    }

    const depositData = {
      plan: selectedPlan.name, // Store only the plan name
      profit: selectedPlan.profit, // Store the profit percentage
      currency: selectedCurrency,
      amount,
    };

    localStorage.setItem("depositData", JSON.stringify(depositData));
    Notiflix.Notify.success("Deposit details saved successfully!");

    // Navigate to ConfirmDeposit page
    setTimeout(() => {
      navigate("/confirm"); // Adjust route if needed
    }, 1000);
  };

  return (
    <>
      <SideBar />
      <div className="main-container">
        {/* Header */}

        <AccountSidehead />
        <main className="main-content overflow-hidden">
          <div className="container-fluid">
            <div id="dashboard" className="inner-body overflow-hidden">
              <div className="container-fluid pt-7 pb-3">
                <div className="row flex-wrap align-items-center py-3">
                  <div className="col mb-4 mb-md-0">
                    <div className="text-light">
                      <h3 className="fw-100 mb-1">
                        Welcome back, {user.username}!
                      </h3>
                      <span className="text-info">Deposit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid mb-4">
                <div className="row no-gutters panel-top-line panel-fill rounded">
                  <div className="col-xl-9 panel-header-oly px-4">
                    <header>
                      <div className="nav d-flex align-items-center py-5">
                        <div className="d-flex align-items-center w-100 pl-lg-0">
                          <div className="d-flex align-items-center w-100">
                            <div>
                              <h4 className="fw-300 mb-0">Deposit Plans</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </header>
                  </div>
                  <div className="col-xl-3 order-3 order-xl-2 panel-top-line border-xl-top-0 panel-xl-left-line">
                    <div className="d-flex align-items-center justify-content-center w-100 h-100 bg-light_A-5 py-6 py-xl-0">
                      <span className="fw-600 ls-1 text-uppercase lead-1">
                        Additional Info
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-3 order-4 panel-xl-left-line panel-top-line char-sFill">
                    <div className="d-flex flex-column px-4 py-3">
                      <div>
                        <span className="small-2">Processing</span>
                      </div>
                      <div>
                        <hr className="my-3 panel-hr" />
                      </div>

                      <table cellSpacing={0} cellPadding={2} border={0}>
                        <tbody>
                          <tr>
                            <td>Account Balance:</td>
                            <td>
                              $<b>{formatNumber(user.balance)}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <table cellSpacing={0} cellPadding={2} border={0}>
                        <thead>
                          <tr>
                            <th>Processing</th>
                            <th>Topup</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://lexbridgetrading.com/images/1000.gif"
                                width="44"
                                height="17"
                                alt="Bitcoin"
                              />{" "}
                              BITCOIN:
                            </td>
                            <td>
                              <input
                                type="radio"
                                name="type"
                                value="BTC"
                                onChange={() => setSelectedCurrency("BTC")}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                name="type"
                                value="account_1000"
                                data-fiat=""
                                disabled
                              />{" "}
                              $0.00
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="https://lexbridgetrading.com/images/1001.gif"
                                width="44"
                                height="17"
                                alt="ETH"
                              />{" "}
                              ETH:
                            </td>
                            <td>
                              <input
                                type="radio"
                                name="type"
                                value="ETH"
                                onChange={() => setSelectedCurrency("ETH")}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                name="type"
                                value="account_1001"
                                data-fiat=""
                                disabled
                              />{" "}
                              $0.00
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div>
                        <hr className="my-3 panel-hr" />
                      </div>

                      <div>
                        <table cellSpacing={0} cellPadding={2} border={0}>
                          <tbody>
                            <tr>
                              <td>Amount to Spend ($):</td>
                              <td align="right">
                                <input
                                  type="text"
                                  name="amount"
                                  defaultValue="100.00"
                                  className="inpts"
                                  size={15}
                                  style={{ textAlign: "right" }}
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr id="coumpond_block" style={{ display: "none" }}>
                              <td>Compounding(%):</td>
                              <td align="right">
                                <select
                                  name="compound"
                                  className="inpts"
                                  id="compound_percents"
                                ></select>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <input
                                  type="submit"
                                  value="Spend"
                                  className="my-3 mx-1 btn btn-primary"
                                  onClick={handleSubmit}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-xl-9 order-xl-3 pl-lg-0 panel-top-line">
                    <div className="pr-4 pr-lg-0 pl-4 pt-6">
                      <div className="shop-olist row">
                        <div className="shop-oitem col-md-12">
                          <div className="product-item">
                            <div className="row align-items-center no-gutters">
                              <div className="col">
                                <form name="spendform">
                                  <input type="hidden" name="form_id" />
                                  <input
                                    type="hidden"
                                    name="a"
                                    value="deposit"
                                  />
                                  <p>Select a plan:</p>
                                  {[
                                    {
                                      id: 1,
                                      name: "SILVER PLAN",
                                      min: "100.00",
                                      max: "999.00",
                                      profit: "2.30%",
                                    },
                                    {
                                      id: 2,
                                      name: "GOLD PLAN",
                                      min: "1000.00",
                                      max: "9999.00",
                                      profit: "2.60%",
                                    },
                                    {
                                      id: 3,
                                      name: "DIAMOND PLAN",
                                      min: "10000.00",
                                      max: "29999.00",
                                      profit: "2.80%",
                                    },
                                    {
                                      id: 4,
                                      name: "LEVEL 4 PLAN",
                                      min: "30000.00",
                                      max: "50000.00",
                                      profit: "3.00%",
                                    },
                                    {
                                      id: 5,
                                      name: "FIAT CURRENCY",
                                      min: "500.00",
                                      max: "9999.00",
                                      profit: "5.60%",
                                    },
                                    {
                                      id: 6,
                                      name: "FOREX MARKET",
                                      min: "10000.00",
                                      max: "49999.00",
                                      profit: "5.80%",
                                    },
                                  ].map((plan) => (
                                    <table key={plan.id} className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="3">
                                            <input
                                              type="radio"
                                              name="h_id"
                                              value={plan.id}
                                              onChange={() =>
                                                setSelectedPlan(plan)
                                              }
                                            />
                                            <b>
                                              {plan.profit} daily for 30 days
                                            </b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="inheader">Plan</td>
                                          <td className="inheader" width="200">
                                            Spent Amount (
                                            <span className="fiat">$</span>)
                                          </td>
                                          <td className="inheader" width="100">
                                            <nobr>Daily Profit (%)</nobr>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="item">{plan.name}</td>
                                          <td className="item" align="right">
                                            <span className="min_deposit">
                                              {plan.min}
                                            </span>{" "}
                                            -{" "}
                                            <span className="max_deposit">
                                              {plan.max}
                                            </span>
                                          </td>
                                          <td className="item" align="right">
                                            {plan.profit}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  ))}
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="col-xl-9 order-xl-3 pl-lg-0 panel-top-line">
                    <div className="pr-4 pr-lg-0 pl-4 pt-6">
                      <div className="shop-olist row">
                        <div className="shop-oitem col-md-12">
                          <div className="product-item">
                            <div className="row align-items-center no-gutters">
                              <div className="col">
                                <form name="spendform">
                                  <input type="hidden" name="form_id" />
                                  <input
                                    type="hidden"
                                    name="a"
                                    value="deposit"
                                  />

                                  <p>Select a plan:</p>

                                  {plans.map((plan) => (
                                    <table key={plan.id} className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="3">
                                            <input
                                              type="radio"
                                              name="h_id"
                                              value={plan.id}
                                              onChange={() =>
                                                setSelectedPlan(plan)
                                              }
                                            />
                                            <b>
                                              {plan.profit} daily for{" "}
                                              {plan.days} days
                                            </b>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td className="inheader">Plan</td>
                                          <td className="inheader" width="200">
                                            Spent Amount (
                                            <span className="fiat">$</span>)
                                          </td>
                                          <td className="inheader" width="100">
                                            <nobr>Daily Profit (%)</nobr>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td className="item">{plan.name}</td>
                                          <td className="item" align="right">
                                            <span className="min_deposit">
                                              {plan.min}
                                            </span>
                                            {" - "}
                                            <span className="max_deposit">
                                              {plan.max}
                                            </span>
                                          </td>
                                          <td className="item" align="right">
                                            {plan.profit}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  ))}
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AccountFooter />
        </main>
      </div>
    </>
  );
};

export default AccountDeposit;
