import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Landing/Home";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Terms from "./Terms/Terms";
import Policy from "./Policy/Policy";
import Contact2 from "./Contact2/Contact2"
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <Contact2 />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/terms" element={<><Navbar /><Terms /><Footer /></>} />
        <Route path="/policy" element={<><Navbar /><Policy /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;