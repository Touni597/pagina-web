// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero   from "./components/Hero";
// importa aquí el resto de secciones, p.ej.
// import Section2 from "./components/Section2";

export default function App() {
  return (
    <>
      {/* 1) Navbar dentro de su propio contenedor */}
      <Navbar />

      {/* 2) Hero COMO HERMANO de Navbar y afuera de cualquier <div className="container"> */}
      <Hero />

      {/* 3) El resto del contenido DENTRO de un container para centrarlo */}
      <main className="container mx-auto px-4">
        {/* <Section2 /> */}
        {/* ...tus otras secciones aquí... */}
      </main>
    </>
  );
}
