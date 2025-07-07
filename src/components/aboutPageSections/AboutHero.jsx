/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/COMPONENTS_CSS/aboutPageSectionsCSS/AboutHero.css";

const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <div className="hero-text">
          <h1>
            A New Generational <br /> Ideas <br />
            Inspires Us To Lead <br />
            Investors To Freedom <br />
            We Are Qualified & Of Experience In This Field
          </h1>
        </div>
        <div className="breadcrumb">
          <h2>About Our Company</h2>
          <p>Home / About</p>
        </div>
      </div>
      <div className="about-image">
        <img
          src="https://lexbridgetrading.com/images/aboutus.jpg"
          alt="About Us"
        />
      </div>
    </>
  );
};
export default AboutHero;
