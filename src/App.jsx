// src/App.jsx
import React from "react";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar.jsx"; // o comenta si no lo quieres
import Hero   from "./components/Hero.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto px-6 py-12">
        {/* otras secciones */}
      </main>
    </>
  );
}
