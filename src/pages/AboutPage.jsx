/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../App.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(https://lexbridgetrading.com/aboutus.jpg)",
        }}
        id="main-banner-page"
        className="position-relative page-header about-headerparallax section-nav-smooth"
      >
        <div className="overlay overlay-dark opacity-7"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="page-titles whitecolor text-center padding_top padding_bottom"
                style={{ marginTop: "5rem" }}
              >
                <h2 className="font-xlight">A New Generational Ideas</h2>
                <h2 className="font-bold">Inspires Us To Lead</h2>
                <h2 className="font-xlight">Investors To Freedom</h2>
                <h3 className="font-light pt-2">
                  We Are Qualified & Of Experience In This Field
                </h3>
              </div>
            </div>
          </div>
          <div className="gradient-bg title-wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 whitecolor">
                <h3 className="float-left">About Our Company</h3>
                <ul
                  className="breadcrumb top10 bottom10 float-right"
                  style={{
                    background: "none",
                  }}
                >
                  <li className="breadcrumb-item hover-light">
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item hover-light">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="image">
        <img alt="SEO" src="https://lexbridgetrading.com/images/aboutus.jpg" />
      </span>

      <section
        id="aboutus"
        className="padding_top padding_bottom"
        style={{
          backgroundColor: "white",
          color: "#808080",
          marginTop: "3rem",
        }}
      >
        <div className="container aboutus">
          <div className="row align-items-center">
            <div className="col-lg-1 col-md-1 padding_bottom_half"></div>
            <div className="col-lg-9 offset-lg-1 col-md-10 padding_bottom_half text-center text-md-left">
              <h2 className="darkcolor font-normal bottom30">ABOUT US</h2>
              <p
                style={{ textAlign: "justify", color: "black" }}
                className="bottom35"
              >
                Lexbridge Trading works in the sphere of investment, legally
                registered in the UK with company No: 07808905. The importance
                of investment can not be overemphasized as this is the only
                avenue of letting your money work for you. In the financial
                market with very volatile trade risks, Lexbridge Trading bears
                the burden and let’s you enjoy well tailored investment plans to
                help you reach your financial goals. Employing fundamental and
                technical analysis using different financial tools. Lexbridge
                Trading trade under cryptocurrencies, commodities, stocks,
                ventures capital bonds, real estate, futures and money market
                and these are how your maximum revenues are generated. These
                spheres according to financial experts are the most durable.
                Unlike other investments sectors, IT are recognized as the
                direction of the future bearing longevity in mind. We takes you
                to that direction and at the same time with minimal risk. Our
                firm comprise of skilled financial analysts, traders and hedge
                fund managers with rich knowledge of the financial market. Our
                customer relations professionals work round the clock to ensure
                maximum customer satisfaction aided by our various support
                groups where your complaint and questions are attended to.
              </p>
              <a
                href="?a=login"
                className="button btnsecondary gradient-btn pagescroll"
                style={{ textDecoration: "none" }}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 padding_top_half text-center text-md-left">
              <h2 className="darkcolor font-normal bottom30">
                Financial<span className="defaultcolor">planning</span>
              </h2>
              <p className="bottom35" style={{ color: "black" }}>
                We all have dreams of a successful retirement, ensuring a legacy
                for our family, protecting our family from unexpected
                circumstances. Planning and taking action steps necessary to
                achieve these dreams can be difficult. We help our clients
                create a strategic plan and guide them along the way to ensure
                they reach their goals and objectives. We determine the
                financial resources available to work with and anticipate
                additional wealth that will be available in the future to help
                achieve your financial objectives Clearly define the goals and
                objectives important to your family Evaluate the various options
                and determine the appropriate planning strategies Start the
                journey – Determining the course of action to implement your
                plan Constantly evaluate – we all hit snags on this road called
                life. We continue to monitor the progress with our clients and
                make necessary adjustments
              </p>
            </div>

            <div className="col-lg-6 offset-lg-1 col-md-6 padding_top_half">
              <div className="progress-bars">
                {[
                  { title: "Financial planning", value: "98%" },
                  { title: "Wealth Creation", value: "99%" },
                  { title: "Risk Management", value: "86%" },
                ].map((item, index) => (
                  <div
                    className="progress"
                    style={{ color: "black" }}
                    key={index}
                  >
                    <p>{item.title}</p>
                    <div
                      className="progress-bar gradient-bg"
                      data-value={item.value}
                      style={{
                        width: item.value,
                        height: "20px",
                        borderRadius: "5px",
                      }}
                    >
                      <span
                        className="gradient-bg whitecolor"
                        style={{
                          display: "block",
                          textAlign: "right",
                          paddingRight: "10px",
                          color: "white",
                          background: "black",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-process" className="padding bgdark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div
                className="heading-title whitecolor wow fadeInUp"
                data-wow-delay="300ms"
              >
                <span>Joining steps</span>
                <h2 className="font-normal">Our Work Process</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ul className="process-wrapp">
              {[
                {
                  step: "01",
                  title: "REGISTER",
                  desc: "To outsource with us registration is required",
                },
                {
                  step: "02",
                  title: "LOGIN",
                  desc: "Login to your dashboard and place a deposit",
                },
                {
                  step: "03",
                  title: "DEPOSIT",
                  desc: "Select any of the official wallet address BTC, ETH, USDT on Ethereum network, or BUSD on the Ethereum network and make a deposit",
                },
                {
                  step: "04",
                  title: "CONFIRMATION",
                  desc: "Confirmation takes only 85 seconds. Once the payment is confirmed, the Contract agreement form will be sent to your registered email address the investor will have to fill out the form, keep a copy and send a copy back to the company support This serves as the legal evidence for the contract Once the form is confirmed to be filled and signed correctly, profits start counting Automaticaly.",
                },
                {
                  step: "05",
                  title: "CONTRACT AGREEMENT",
                  desc: "On filling the contract agreement form you are espected to fill your contract duration which should be not less than one week",
                },
                {
                  step: "06",
                  title: "PROFIT WITHDRAWAL",
                  desc: "withdrawal of profit can be made at the end of every week (Saturdays) this is optional",
                },
                {
                  step: "07",
                  title: "END/RENEWAL",
                  desc: "the day you chose to end your contract on contract duration, the investor must must withdraw all his / her funds and that marks the end of the contract",
                },
              ].map((item, index) => (
                <li
                  className="whitecolor wow fadeIn"
                  data-wow-delay={`${300 + index * 100}ms`}
                  key={index}
                >
                  <span className="pro-step bottom20">{item.step}</span>
                  <p className="fontbold bottom25">{item.title}</p>
                  <p className="mt-n2 mt-sm-0">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
