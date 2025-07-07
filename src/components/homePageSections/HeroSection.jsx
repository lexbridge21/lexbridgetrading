/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 4000); // Show video after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container">
      {/* Background Overlay for Darkening Effect */}
      <div className="bg-overlay"></div>

      {/* Background Image */}
      {!showVideo && <div className="bg-img"></div>}

      {/* Background Video */}
      {showVideo && (
        <video autoPlay loop muted className="bg-video">
          <source src="Aerial-View.mp4" type="video/mp4" />
        </video>
      )}

      {/* TradingView Widgets */}
      <div className="tradingview-widgets">
        <div className="tradingview-widget-container widget-1">
          <iframe
            scrolling="no"
            allowTransparency="true"
            frameBorder="0"
            className="tradingview-widget"
            src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22compact%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A72%7D"
            title="ticker tape TradingView widget"
          ></iframe>
        </div>

        <div className="tradingview-widget-container widget-2">
          <iframe
            scrolling="no"
            allowTransparency="true"
            frameBorder="0"
            className="tradingview-widget"
            src="https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=NASDAQ%3AAAPL#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A173%7D"
            title="symbol info TradingView widget"
          ></iframe>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          Building <br />
          Prosperity <br />
          Security & Opportunity
        </h1>
        <div className="btn-group">
          <Link to="/signup">
            <button className="btn signup">Signup</button>
          </Link>
          <Link to="/login">
            <button className="btn login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
