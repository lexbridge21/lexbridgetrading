/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/PaymentMethod.css";

import img1 from "/payment1.png";
import img2 from "/payment2.png";
import img3 from "/payment3.png";
import img4 from "/payment4.png";
import img5 from "/payment5.png";
import img6 from "/payment6.png";
import img7 from "/payment7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

const PaymentMethod = () => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));
  const [hiddenImages, setHiddenImages] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    let timer;
    if (isSmallScreen) {
      let index = 0;
      timer = setInterval(() => {
        setVisibleImages([images[index]]);
        index = (index + 1) % images.length;
      }, 5000);
    } else {
      timer = setTimeout(() => {
        setHiddenImages(visibleImages.slice(0, 2)); // Hide 2 images
        setVisibleImages([...visibleImages.slice(2), ...images.slice(5)]); // Add remaining 2
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <section id="shop" className="payment-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <div className="heading-title">
              <center>
                <span className="highlight">Lexbridge Trading</span>
                <br />
                <br />
                <h2 className="title">PAYMENTS METHODS ACCEPTED</h2>
              </center>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <div className="partners-grid">
              {visibleImages.map((img, index) => (
                <div
                  key={index}
                  className={`partner-item ${
                    hiddenImages.includes(img) ? "hidden" : "visible"
                  }`}
                >
                  <img src={img} alt={`Payment Method ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <center className="center-c">
            <small className="text-m">
              Bitcoin was released in 2009 as a new digital currency known as a
              cryptocurrency and has proven to be a very large investing
              opportunity. You're here because you've completed some research
              and are starting to understand the opportunity and potential that
              cryptocurrency has! 99.9% of people do not invest in
              cryptocurrency because they've never heard of it, or don't
              understand it!
            </small>
          </center>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
