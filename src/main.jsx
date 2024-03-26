import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import CareerPage from "./components/Career.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </Layout>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
