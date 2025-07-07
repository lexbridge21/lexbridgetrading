/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/MainSlider.css";

const slides = [
  {
    id: 1,
    className: "slider1",
    bgImage: "slide1.jpg",
    text: ["Smarter Investors", "Are Here!", "You", "Should Be Here Too"],
  },
  {
    id: 2,
    className: "slider2",
    bgImage: "slide2.jpg",
    text: [
      "Think Digital?",
      "Thinking",
      "Decentralized?",
      "Be Financially Free!",
    ],
  },
  {
    id: 3,
    className: "slider3",
    bgImage: "slide3.jpg",
    text: [
      "We Have Global",
      "Recognition",
      "Anytime",
      "We are Located in London",
    ],
  },
];

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const changeSlide = (index) => {
    if (index !== currentSlide) {
      setIsExiting(true); // Start exit animation
      setTimeout(() => {
        setCurrentSlide(index);
        setIsExiting(false); // Reset for enter animation
      }, 800); // Delay to match CSS animation duration
    }
  };

  useEffect(() => {
    const autoSlide = () => {
      changeSlide((currentSlide + 1) % slides.length);
    };

    const interval = setInterval(autoSlide, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="main-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${slide.className} ${
            index === currentSlide ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="overlay"></div>
          <div className={`slide-content ${isExiting ? "exit" : "enter"}`}>
            {slide.text.map((word, i) => (
              <span key={i} className={`text-part text-${i + 1}`}>
                {word}
                <br />
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Left-side Indicators (Only for large screens) */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSlider;
