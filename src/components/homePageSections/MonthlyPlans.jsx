/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/InvestmentPlans.css";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "FIAT CURRENCY",
    duration: "5.60% Daily for 35 days",
    percent: "196.0%",
    amount: [
      { label: "MIN", value: "$500", tag: "min" },
      { label: "MAX", value: "$9,999", tag: "max" },
      { label: "WITHDRAWAL", value: "Anytime", tag: "max" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
  {
    name: "FOREX MARKET",
    duration: "5.80% Daily for 35 days",

    percent: "203.0%",
    amount: [
      { label: "MIN", value: "$10,000", tag: "min" },
      { label: "MAX", value: "$49,999", tag: "max" },
      { label: "WITHDRAWAL", value: "Anytime", tag: "max" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
  {
    name: "STOCK MARKET",
    duration: "6.00% Daily for 35 days",

    percent: "210.0% ",
    amount: [
      { label: "MIN", value: "$50,000", tag: "min" },
      { label: "MAX", value: "$99,999", tag: "max" },
      { label: "WITHDRAWAL", value: "Anytime", tag: "withdrawal" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
  {
    name: "FUTURE MARKET",
    duration: "6.40% Daily for 35 days",

    percent: "224.0%",
    amount: [
      { label: "MIN", value: "$1,000,000", tag: "min" },
      { label: "MAX", value: "$UNLIMITED", tag: "max" },
      { label: "WITHDRAWAL", value: "Anytime", tag: "withdrawal" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
];

const MonthlyPlans = () => {
  return (
    <div className="investment-plans monthly">
      <h2>OUR EASY INVESTMENT PLAN</h2>
      <span className="weekly-plan">MONTHLY PLANS</span>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <b className="plan-name">{plan.name}</b>
            <div className="line"></div>
            <p className="plan-duration">{plan.duration}</p>
            <div className="line"></div>
            <b className="plan-percent">{plan.percent}</b>
            <span className="plan-in"> in 35 </span>
            <br />
            <span className="days">days</span>
            <div className="line"></div>
            <ul className="plan-details">
              {plan.amount.map((item, i) => (
                <li key={i} className={item.tag}>
                  <div className="mark-icon">✓</div>
                  <span className="amount-label">{item.label} </span>
                  <span className="amount-value">{item.value}</span>
                </li>
              ))}
            </ul>
            <Link to="/login">
              <button className="invest-btn">Invest Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyPlans;
