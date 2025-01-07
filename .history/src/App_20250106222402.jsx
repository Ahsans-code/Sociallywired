import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./Pages/Index";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
