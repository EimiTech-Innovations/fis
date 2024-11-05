import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Components/NotFound";
import { ContactUs } from "./Components/ContactUs";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Mission from "./Components/Mission";
import { Work } from "./Components/Work";
import { AboutUs } from "./Components/AboutUs";
import Community from "./Components/Community";
const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<Work />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
