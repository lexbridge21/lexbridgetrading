import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
// import SideBar from "./components/accountPageSections/SideBar";
import AccountMain from "./components/accountPageSections/AccountMain";
import Dashboard from "./components/accountPageSections/Dashboard";
import AccountDeposit from "./components/accountPageSections/AccountDeposit";
import AccountHistory from "./components/accountPageSections/AccountHistory";
import AccountWithdrawal from "./components/accountPageSections/AccountWithdrawal";
import AccountReferral from "./components/accountPageSections/AccountReferral";
import AccountEdit from "./components/accountPageSections/AccountEdit";
import AccountSettings from "./components/accountPageSections/AccountSettings";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmDeposit from "./components/accountPageSections/ConfirmDeposit";
import ScrollToTop from "../ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <MainLayout />
    </BrowserRouter>
  );
};

// Separate component for conditional rendering
const MainLayout = () => {
  const location = useLocation();
  const hideFor = [
    "/sidebar",
    "/main",
    "/dashboard",
    "/deposit",
    "/history",
    "/withdrawal",
    "/referral",
    "/profile",
    "/settings",
    "/confirm",
  ]; // Paths to hide NavBar and Footer

  return (
    <>
      {!hideFor.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {/* <Route path="/sidebar" element={<SideBar />} /> */}
        <Route path="/main" element={<AccountMain />} />
        <Route path="/deposit" element={<AccountDeposit />} />
        <Route path="/history" element={<AccountHistory />} />
        <Route path="/withdrawal" element={<AccountWithdrawal />} />
        <Route path="/referral" element={<AccountReferral />} />
        <Route path="/profile" element={<AccountEdit />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/confirm" element={<ConfirmDeposit />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      {!hideFor.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
