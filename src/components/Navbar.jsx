// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        <nav className="space-x-6 text-[#233445]">
          <a href="#consultorio">Consultorio</a>
          <a href="#sesiones">Sesiones</a>
          <a href="#acompanamientos">Acompañamientos</a>
          <a href="#manifiesto">Manifiesto</a>
          <a href="#agendar">Agendar</a>
        </nav>
      </div>
    </header>
  );
}
