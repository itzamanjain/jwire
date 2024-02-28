import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import CareerPage from "./components/Career.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Product />} />
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
      <Route path="career" element={<CareerPage />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
