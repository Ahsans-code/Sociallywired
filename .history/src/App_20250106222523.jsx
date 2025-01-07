import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Index";
import {Footer, Navbar, PrivacyPolicy, ScrollToTop }from "./components/Components";

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
