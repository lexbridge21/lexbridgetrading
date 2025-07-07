/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/LexSectors.css";

const LexSectors = () => {
  const sectors = [
    {
      img: "/sec1.webp",
      title: "PLANNING SERVICES",
      text: "BUSINESS SERVICES",
      link: "/planning-services",
    },
    {
      img: "/sec2.jpg",
      title: "SECTORS",
      text: "ENERGY & SUSTAINABILITY",
      link: "/sectors",
    },
    {
      img: "/sec3.webp",
      title: "PLANNING SERVICES",
      text: "RETIREMENT PLANNING",
      link: "/retirement-planning",
    },
  ];

  const contents = [
    {
      title: "INVESTOR RELATIONS",
      text: "Lexbridge Trading provides advanced investment strategies and wealth management solutions to forward-thinking investors around the world. Through its distinct investment brands Lexbridge Trading Management, we offer a diversity of investment approaches, encompassing bottom-up fundamental active management, Responsible Investing, systematic investing, and customized implementation of client-specified portfolio exposures. Exemplary service, timely innovation, and attractive returns across market cycles have been hallmarks of Lexbridge Trading since the origin.",
      img: "/sec4.jpg",
    },
    {
      title: "OUR DIVERSITY & INCLUSION STRATEGY",
      text: "At Lexbridge Trading, we want every person to have the opportunity to succeed based on merit, regardless of race, color, religion, creed, ancestry, national origin, sex, age, disability, marital status, citizenship status, sexual orientation, gender identity expression, military or veteran status, or any other criterion. Why is this so important? To us, diverse and inclusive teams enriched with people of distinctive backgrounds make us better. They help us generate better ideas, reach more balanced decisions, engage our communities and help our clients achieve better outcomes.",
      img: "/sec5.jpg",
    },
    {
      title: "FINANCIAL PLANNING",
      text: "These days, it's more important than ever to have a plan. Our version of financial planning not only gives you the confidence to know you're ready for anything but is also designed to help you reach all your goals in the days ahead.",
      img: "/sec6.jpg",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <div className="lex-sectors">
      {/* Image Grid Section */}
      <div className="sector-grid">
        {sectors.map((item, index) => (
          <div
            key={index}
            className={`sector-item ${animate ? "slide-left" : ""}`}
          >
            <Link to={item.link} className="sector-link">
              <img src={item.img} alt={item.title} />
            </Link>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      {contents.map((content, index) => (
        <div key={index} className="content-section">
          <div className={`content-text ${animate ? "slide-left" : ""}`}>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
          </div>
          <div
            className={`content-img-wrapper ${animate ? "slide-right" : ""}`}
          >
            <img
              src={content.img}
              alt={content.title}
              className="content-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LexSectors;
