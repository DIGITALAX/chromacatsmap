import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Questions from "./pages/Questions";
import Hotel from "./pages/Hotel";
import Unknown from "./pages/Unknown";
import Slide from "./pages/Slide";
import Longbridge from "./pages/Longbridge";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import Mint from "./pages/Mint";

function App() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Unknown" element={<Unknown />} />
        <Route path="Hotel" element={<Hotel />} />
        <Route path="???" element={<Questions />} />
        <Route path="Longbridge" element={<Longbridge />} />
        <Route path="Slide" element={<Slide />} />
        <Route path="Cafe" element={<Cafe />} />
        <Route path="Mint" element={<Mint />} />
      </Routes>
    </div>
  );
}

export default App;


