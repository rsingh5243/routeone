import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Product from "./Components/Product";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row ">
          <Router>
            <ul className="ul">
              <li className="li">
                <Link to="/">Home</Link>
              </li>
              <li className="li">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="li">
                <Link to="/product">Product</Link>
              </li>
              <li className="li">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Routes>
              <Route excat path="/" element={<Home />}></Route>
              <Route excat path="/contact" element={<Contact />}></Route>
              <Route excat path="/product" element={<Product />}></Route>
              <Route excat path="/about" element={<About />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
