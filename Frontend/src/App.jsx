// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Specialties from "./components/Specialties";
import Articles from "./components/Articles";
import Testimonials from "./components/Testimonials";
import HealthcareSearch from "./components/HealthcareSearch";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/search" element={<HealthcareSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
