import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
