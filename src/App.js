import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Soda from "./Soda";
import Home from "./Home";
import Chips from "./Chips";
import Sardines from "./Sardines";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/sardines" element={<Sardines />} />
          <Route path="/chips" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
