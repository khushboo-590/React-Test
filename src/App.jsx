import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Carousel from "./components/Carousel";
import CounterApp from "./components/CounterApp";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-16 bg-gray-400 shadow-md">
        <NavBar />
        </div>
      <div className="p-4 mx-auto  bg-gray-400">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
     
      <div className="  p-4 bg-gray-400">
        <h1 className="text-5xl font-bold mb-4 text-center text-blue-600 pt-10"> Images</h1>
        <Carousel />
      </div>
      <div className="  p-4 bg-gray-400">
        <CounterApp />
      </div>
    </>
  );
}

export default App;
