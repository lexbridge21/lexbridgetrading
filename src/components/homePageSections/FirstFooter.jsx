/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/FirstFooter.css";
import { Link } from "react-router-dom";

const FirstFooter = () => {
  return (
    <div className="first-footer">
      <div className="first-footer-content">
        <Link to="/">
          <img
            src="/lex-logo1.png"
            alt="Lexbridge Trading"
            className="first-footer-logo1"
          />
        </Link>
        <p className="first-footer-text">
          An investment with Lexbridge Trading is a smart one, we provide high
          liquidity of financial transactions due to the wise use of well
          analysed investment strategies as well as diversification into highly
          profitable financial markets. In the world, changes happen every day.
          Everyone wants to build a solid foundation for themselves and their
          families. Everyone thinks about the future and with our team of
          experienced and qualified financial analysts who are developing new
          strategies, Lexbridge Trading provides guarantees regarding
          reliability of investment into stable financial markets which in turn
          yields good profit returns with Zero risk. Here at Lexbridge Trading,
          we love to serve as your financial partner and with just over $9
          trillion in assets under management as of July 2021, Lexbridge Trading
          is licensed and regulated across multiple jurisdictions and operates
          globally with 30 offices in 70 countries and clients in over 150
          countries worldwide. Join our team and help build the future as
          Lexbridge Trading utilizes expertise & knowledge to ensure investors
          have maximum returns through our developed strategies.
        </p>
        <p className="first-footer-text">
          Lexbridge Trading originated and was designed in 1984 and launched
          into cryptocurrency in the year 2016. It will stay in existence in the
          crypto market for as long as cryptocurrency remains in existence,
          because Cryptocurrency is the future of the crypto digital market.
        </p>
        <div className="first-footer-heading">Assets-Backed</div>
        <p className="first-footer-text">
          Funds are secured at all times by assets-backed portfolios of
          over-collateralized investments. The collateral of each asset is
          subject to Custodial insurance of <strong>$210 million</strong>{" "}
          provided by the world's leading audited custodian BitGo and the
          insurance leader Lloyds of USA.
          <strong>$850 million</strong> processed. <br />
          <strong>$210 million</strong> insurance of custodial assets.
        </p>
      </div>
    </div>
  );
};

export default FirstFooter;
