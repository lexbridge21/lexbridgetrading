/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { FaClipboard, FaLaptop, FaGlobe } from "react-icons/fa";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/ServiceSlider.css";
import MainSlider from "./MainSlider";

const services = [
  {
    id: 1,
    icon: <FaClipboard />,
    title: "Effective strategies",
    description:
      "We emphasize the use of speculative strategies that are both diversified and profitable. Lexbridge Trading focuses on maximum transparency of investment activities.",
    bgColor: "black",
  },
  {
    id: 2,
    icon: <FaLaptop />,
    title: "Flexibility",
    description:
      "Our team is technically ready to respond flexibly to any market changes. The ability to work remotely allows us to collaborate globally.",
    bgColor: "blue",
  },
  {
    id: 3,
    icon: <FaGlobe />,
    title: "Risk control",
    description:
      "Our activities are supervised by experienced analysts and IR specialists, ensuring protection from mistakes of traders and brokers.",
    bgColor: "black",
  },
];

const ServiceSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleSwipe = (e) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: e.deltaX, behavior: "smooth" });
    }
  };

  return (
    <div className="service-slider-container">
      <div className="slider-wrapper" ref={sliderRef} onWheel={handleSwipe}>
        {services.map((service) => (
          <div key={service.id} className={`service-card ${service.bgColor}`}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
