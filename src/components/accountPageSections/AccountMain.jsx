/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

import AccountSidehead from "./AccountSidehead";
import AccountFooter from "./AccountFooter";

const AccountMain = () => {
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

  useEffect(() => {
    if (!user) return;

    const chartInstances = [];

    const chartConfigs = [
      {
        id: "chart-sm-01",
        label: "Balance",
        data: [
          user.balance * 0.5,
          user.balance * 0.6,
          user.balance * 0.7,
          user.balance * 0.85,
          user.balance * 0.95,
          user.balance,
          user.balance * 1.1,
        ],
        borderColor: "#4bc0c0",
      },
      {
        id: "chart-sm-02",
        label: "Earnings",
        data: [
          user.earning * 0.2,
          user.earning * 0.3,
          user.earning * 0.5,
          user.earning * 0.65,
          user.earning * 0.8,
          user.earning * 0.9,
          user.earning,
        ],
        borderColor: "#36a2eb",
      },
      {
        id: "chart-sm-03",
        label: "Withdrawals",
        data: [
          user.withdrawal * 0.1,
          user.withdrawal * 0.25,
          user.withdrawal * 0.4,
          user.withdrawal * 0.5,
          user.withdrawal * 0.6,
          user.withdrawal * 0.8,
          user.withdrawal,
        ],
        borderColor: "#ff6384",
      },
      {
        id: "chart-sm-04",
        label: "Deposit",
        data: [
          user.deposit * 0.3,
          user.deposit * 0.4,
          user.deposit * 0.55,
          user.deposit * 0.7,
          user.deposit * 0.8,
          user.deposit * 0.9,
          user.deposit,
        ],
        borderColor: "#ffce56",
      },
    ];

    chartConfigs.forEach((config) => {
      const canvas = document.getElementById(config.id);
      if (!canvas) return;

      // Destroy old chart if it exists
      if (canvas.chartInstance) {
        canvas.chartInstance.destroy();
      }

      const ctx = canvas.getContext("2d");

      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
          datasets: [
            {
              label: config.label,
              data: config.data,
              borderColor: config.borderColor,
              backgroundColor: "transparent",
              fill: true,
              tension: 1,
              cubicInterpolationMode: "monotone",

              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        },
      });

      canvas.chartInstance = chart;
      chartInstances.push(chart);
    });

    return () => {
      chartInstances.forEach((chart) => chart.destroy());
    };
  }, [user]);

  // Format numbers like 1234 => "1,234"
  const formatNumber = (num) => {
    return Number(num).toLocaleString();
  };

  if (!user) return <p>Loading user data...</p>;

  return (
    <div className="main-container">
      <AccountSidehead />
      <main className="main-content overflow-hidden">
        <div id="dashboard" className="inner-body overflow-hidden">
          <div className="container-fluid pt-7 pb-3">
            <div className="row flex-wrap align-items-center py-3">
              <div className="col mb-4 mb-md-0">
                <div className="text-light">
                  <h3 className="fw-100 mb-1" style={{ marginRight: "-3rem" }}>
                    Welcome back, {user.username} !
                  </h3>
                  <span className="text-info">Dashboard</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col d-flex align-items-center py-1">
                <ul
                  className="panel-tab-group flex-nowrap nav nav-tabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="day-tab"
                      data-toggle="tab"
                      href="#day"
                      role="tab"
                      aria-controls="day"
                      aria-selected="true"
                    >
                      Up to Today
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content" id="defaultTabContent">
              <div
                className="tab-pane fade show active"
                id="day"
                role="tabpanel"
                aria-labelledby="day-tab"
              >
                <div className="card-row row mb-7">
                  <div className="card-item col-md-6 col-lp-3 mb-6 mb-lp-3">
                    <div className="main-card card text-light">
                      <div className="mb-2">
                        <span className="text-uppercase fw-600 text-glow-white-sm">
                          Total Balance
                        </span>
                      </div>
                      <div className="d-flex align-items-center w-100">
                        <div className="flex-1">
                          <h3 className="fw-300 mb-0">
                            $<b>{formatNumber(user.balance)}</b>
                          </h3>

                          <span className="small">
                            <span className="text-success fw-600">
                              <i class="fas fa-arrow-up ml-1"></i>
                            </span>
                          </span>
                        </div>
                        <div className="w-50" style={{ height: "50px" }}>
                          <canvas
                            id="chart-sm-01"
                            style={{ height: "50px" }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-item col-md-6 col-lp-3 mb-6 mb-lp-3">
                    <div className="main-card card text-light">
                      <div className="mb-2">
                        <span className="text-uppercase fw-600 text-glow-white-sm">
                          Total Earnings
                        </span>
                      </div>
                      <div className="d-flex align-items-center w-100">
                        <div className="flex-1">
                          <h3 className="fw-300 mb-0">
                            $<b>{formatNumber(user.earning)}</b>
                          </h3>
                          <span className="small">
                            <span className="text-success fw-600">
                              <i class="fas fa-arrow-up ml-1"></i>
                            </span>
                          </span>
                        </div>
                        <div className="w-50" style={{ height: "50px" }}>
                          <canvas
                            id="chart-sm-02"
                            style={{ height: "50px" }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-item col-md-6 col-lp-3 mb-6 mb-lp-3">
                    <div className="main-card card text-light">
                      <div className="mb-2">
                        <span className="text-uppercase fw-600 text-glow-white-sm">
                          Pending Withdrawals
                        </span>
                      </div>
                      <div className="d-flex align-items-center w-100">
                        <div className="flex-1">
                          <h3 className="fw-300 mb-0">
                            $<b>{formatNumber(user.withdrawal)}</b>
                          </h3>
                          <span className="small">
                            <span className="text-success fw-600">
                              <i class="fas fa-arrow-up ml-1"></i>
                            </span>
                          </span>
                        </div>
                        <div className="w-50" style={{ height: "50px" }}>
                          <canvas
                            id="chart-sm-03"
                            style={{ height: "50px" }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-item col-md-6 col-lp-3 mb-6 mb-lp-3">
                    <div className="main-card card text-light">
                      <div className="mb-2">
                        <span className="text-uppercase fw-600 text-glow-white-sm">
                          Active Deposit
                        </span>
                      </div>
                      <div className="d-flex align-items-center w-100">
                        <div className="flex-1">
                          <h3 className="fw-300 mb-0">
                            $<b>{formatNumber(user.deposit)}</b>
                          </h3>
                          <span className="small">
                            <span className="text-danger fw-600">
                              <i class="fas fa-arrow-down ml-1"></i>
                            </span>
                          </span>
                        </div>
                        <div className="w-50" style={{ height: "50px" }}>
                          <canvas
                            id="chart-sm-04"
                            style={{ height: "50px" }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Section */}
          <div className="container-fluid mb-4">
            <div className="row no-gutters panel-top-line panel-fill rounded">
              <div className="col-xl-9 panel-header-oly px-4">
                <header>
                  <div className="nav d-flex align-items-center py-5">
                    <div className="d-flex align-items-center w-100">
                      <h4 className="fw-300 mb-0">Details</h4>
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
              <div className="col-xl-9 order-xl-3 pl-lg-0 panel-top-line">
                <div className="pr-4 pr-lg-0 pl-4 pt-6">
                  <div className="shop-olist row">
                    <div className="shop-oitem col-md-12">
                      <div className="product-item">
                        <div className="row align-items-center no-gutters">
                          <div className="col-lg-7 col-xl-7 col-lp-8 flex-1 mb-5 mb-lg-0">
                            <table className="table table-borderless table-hover">
                              <tbody>
                                <tr>
                                  <td>User Name:</td>
                                  <td>{user.username}</td>
                                </tr>
                                {/* <tr>
                                  <td>Registration Date:</td>
                                  <td>
                                    {new Date(
                                      user.createdAt
                                    ).toLocaleDateString()}
                                  </td>
                                </tr> */}
                                <tr>
                                  <td>Last Access:</td>
                                  <td>Today</td>
                                </tr>
                                <tr>
                                  <td>Referral Link:</td>
                                  <td>
                                    https://lexbridgeinternationaltrading.com/?ref=
                                    {user.username}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Withdrew Total:</td>
                                  <td>
                                    $<b>{user.withdrawal}</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 order-4 panel-xl-left-line panel-top-line char-sFill">
                <div className="d-flex flex-column px-4 py-3">
                  <a href="https://www.livecoinwatch.com/static/lcw-widget.js"></a>
                  <div
                    className="livecoinwatch-widget-5"
                    lcw-base="USD"
                    lcw-color-tx="#999999"
                    lcw-marquee-1="coins"
                    lcw-marquee-2="movers"
                    lcw-marquee-items="10"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AccountFooter />
      </main>
    </div>
  );
};

export default AccountMain;
