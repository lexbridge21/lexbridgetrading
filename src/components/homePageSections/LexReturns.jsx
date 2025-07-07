/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const LexReturns = () => {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript("https://lexbridgetrading.com/js/wow.js");
    loadScript("https://lexbridgetrading.com/js/functions.js");
  }, []);

  return (
    <section style={{ padding: "3rem" }}>
      <div className="container">
        <div className="row d-flex align-items-center"></div>
        <div
          className="col-lg-10 offset-lg-1 col-md-10 col-sm-10 wow fadeInRight"
          data-wow-delay="300ms"
        >
          <div className="heading-title mb-4 text-center">
            <h2
              className="darkcolor font-normal bottom30"
              style={{ fontWeight: "bolder" }}
            >
              Returns<span className="defaultcolor"> </span>
            </h2>
          </div>
          <p className="bottom35 text-center" style={{ color: "black" }}>
            Investors are paid nice level interest rate on capitals, Lexbridge
            Trading understands the needs for investors to receive good
            commissions on their investments. At Lexbridge Trading, we know
            investors desire not only nice ROI, but they are looking for
            something more - a unique investing experience. This is why at
            Lexbridge Trading you will find the best alternative investing
            opportunities. Take a chance to earn more money by building an
            alternative finance stream and securing your profits. With better
            insights into the market, we shape our investment strategy according
            to the current market’s volatility for a better investment
            experience.
          </p>

          <div className="text-center mt-5">
            <div
              className="col-md-10 col-sm-10 text-center"
              style={{
                backgroundImage: "url(https://lexbridgetrading.com/high.jpg)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "400px",
              }}
            ></div>
            <div className="mt-4">
              <a
                href="?a=about"
                className="btn btn-primary gradient-btn pagescroll mb-sm-0 mb-4"
                style={{ float: "left" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LexReturns;
