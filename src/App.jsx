// src/App.jsx
import React from "react";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar.jsx"; // si lo quieres
import Hero   from "./components/Hero.jsx";

export default function App() {
  return (
    <>
      {/* —–––––––––––––––––––––––––––––––––––––––– */}
      {/* CABECERA (opcional) */}
      {/* —–––––––––––––––––––––––––––––––––––––––– */}
      <Navbar />

      {/* —–––––––––––––––––––––––––––––––––––––––– */}
      {/* HERO FULL-BLEED (100vw × 100vh) */}
      {/* —–––––––––––––––––––––––––––––––––––––––– */}
      <Hero />

      {/* —–––––––––––––––––––––––––––––––––––––––– */}
      {/* EL RESTO DEL CONTENIDO EN UN CONTAINER */}
      {/* —–––––––––––––––––––––––––––––––––––––––– */}
      <main className="container mx-auto px-6 py-12">
        {/* Otras secciones aquí */}
      </main>
    </>
  );
}
