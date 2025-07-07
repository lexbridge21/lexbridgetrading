/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/InvestmentPlans.css";
import MonthlyPlans from "./MonthlyPlans";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "SILVER PLAN",
    duration: "2.30% Daily for 7 days",
    percent: "16.1%",
    amount: [
      { label: "MIN", value: "$100", tag: "min" },
      { label: "MAX", value: "$999", tag: "max" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
  {
    name: "GOLD PLAN",
    duration: "2.60% Daily for 7 days",
    percent: "18.2%",
    amount: [
      { label: "MIN", value: "$1,000", tag: "min" },
      { label: "MAX", value: "$9,999", tag: "max" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
  {
    name: "DIAMOND PLAN",
    duration: "2.80% Daily for 7 days",
    percent: "19.6%",
    amount: [
      { label: "MIN", value: "$10,000", tag: "min" },
      { label: "MAX", value: "$29,999", tag: "max" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
  {
    name: "LEVEL 4 Plan",
    duration: "3.00% Daily for 7 days",
    percent: "21.0%",
    amount: [
      { label: "MIN", value: "$30,000", tag: "min" },
      { label: "MAX", value: "$50,000", tag: "max" },
      { label: "REFERRAL", value: "10%", tag: "referral" },
    ],
  },
];

const InvestmentPlans = () => {
  return (
    <>
      <div className="investment-plans">
        <h2>OUR EASY INVESTMENT PLAN</h2>
        <span className="weekly-plan">WEEKLY PLANS</span>

        <div className="plans-container">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <b className="plan-name">{plan.name}</b>
              <div className="line"></div>
              <p className="plan-duration">{plan.duration}</p>
              <div className="line"></div>
              <b className="plan-percent">{plan.percent}</b>
              <span className="plan-in"> in 7 </span>
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
      <MonthlyPlans />
    </>
  );
};

export default InvestmentPlans;
