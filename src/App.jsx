import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProfileCard from "./components/ProfileCard";
import ProductList from "./components/ProductList";
import Carousel from "./components/Carousel";
import dp from './assets/images/png/dp.webp'
import CounterApp from "./components/CounterApp";

function App() {
  return (
    <>
      <NavBar />
      <div className="p-4 ">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* <div className="min-h-screen  p-6">
              <ProfileCard
                name="Khushboo"
                image={dp}
                bio="Frontend Developer | Learner"
                contact="khushbook4979@gmail.com"
        />
        </div>
       
      <ProductList />
      <div className=" max-w-[1140px] mx-auto p-4">
        <h1 className="text-5xl font-bold mb-4 text-center text-red-600">Nature Images</h1>
        <Carousel />
      </div>
      <div className="max-w-[1140px] mx-auto p-4">
        <CounterApp />
      </div> */}
    </>
  );
}

export default App;
