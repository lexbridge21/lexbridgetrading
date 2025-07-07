import { useEffect, useState } from "react";
import "../../CSS/COMPONENTS_CSS/homePageSectionsCSS/LexSection.css";

const sectors = [
  {
    title: `INSTITUTIONAL 
     INVESTMENT MANAGEMENT`,
    description:
      "When you select Lexbridge Trading to manage institutional assets, you will discover why we've earned the reputation for solid performance and equally solid relationships.",
    img: "lex1.jpg",
  },
  {
    title: "ASSETS MANAGEMENT",
    description:
      "We create customized, integrated investment solutions to meet the unique needs of insurers and pension plans.",
    img: "lex2.jpg",
  },
  {
    title: "WEALTH MANAGEMENT",
    description:
      "As a pioneer in alternative investing, Lexbridge Trading has a Your financial goals are uniquely your own, so Lexbridge Trading will design a wealth management strategy that is just for you.",
    img: "lex3.jpg",
  },
];

const LexSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("lex-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="lex-section"
      className={`lex-container ${isVisible ? "visible" : ""}`}
    >
      <h2 className="lex-title">LEXBRIDGE TRADING SECTORS</h2>
      <div className="lex-content">
        {sectors.map((sector, index) => (
          <div key={index} className="lex-card">
            <img src={sector.img} alt={sector.title} className="lex-img" />
            <div className="hs">
              <h4 className="lex-heading">{sector.title}</h4>
              <span className="lex-text">{sector.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LexSection;
