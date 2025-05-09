// src/App.jsx
import React from "react";
import Hero from "./components/Hero.jsx";  // asegúrate de la extensión y la ruta
// Si usas App.css para estilos generales, impórtalo aquí:
// import "./App.css";

export default function App() {
  return (
    <>
      {/* Si no tienes Navbar, quítalo */}
      {/* <Navbar /> */}

      {/* Hero full-width */}
      <Hero />

      {/* Si tienes más secciones, las pones aquí */}
      {/* <Section2 /> */}
    </>
  );
}
