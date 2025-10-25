import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import MyPlans from "./pages/MyPlans";


export default function App() {
  return (
    <div className="container">
      <header
        className="row"
        style={{ justifyContent: "space-between", marginBottom: 16 }}
      >
        <h1 style={{ margin: 0 }}>Learning Path Recommender</h1>
      <nav className="row" style={{ gap: 12 }}>
  <Link
    to="/"
    className="nav-btn"
  >
    Generate
  </Link>
  <Link
    to="/saved"
    className="nav-btn"
  >
    Saved
  </Link>
  <Link
    to="/my-plans"
    className="nav-btn"
  >
    My Plans
  </Link>
</nav>

      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/my-plans" element={<MyPlans />} />
      </Routes>
    </div>
  );
}
