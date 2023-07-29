import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

export default function App() {
  const link = "/explore_section";

  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={link} element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
