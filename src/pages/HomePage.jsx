import FirstFooter from "../components/homePageSections/FirstFooter";
import HeroSection from "../components/homePageSections/HeroSection";
import ImgBg from "../components/homePageSections/ImgBg";
import InvestmentPlans from "../components/homePageSections/InvestmentPlans";
import LexReturns from "../components/homePageSections/LexReturns";
import LexSection from "../components/homePageSections/LexSection";
import LexSectors from "../components/homePageSections/LexSectors";
import MainSlider from "../components/homePageSections/MainSlider";
import ServiceSlider from "../components/homePageSections/ServiceSlider";
import PaymentMethod from "../components/homePageSections/PaymentMethod";
import SmartsuppLiveChat from "../components/SmartsuppLiveChat";
// import "../CSS/PAGES_CSS/HomePage.css";
// import "../App.css";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MainSlider />
      <ServiceSlider />
      <LexSection />
      <InvestmentPlans />
      <LexSectors />
      <PaymentMethod />
      <ImgBg />
      <FirstFooter />
      <LexReturns />
      <SmartsuppLiveChat />
    </div>
  );
};

export default HomePage;
