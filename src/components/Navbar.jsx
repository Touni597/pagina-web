// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo Nochebuena" className="h-12" />
        <nav className="space-x-6 text-[#233445]">
          <a href="#consultorio"     className="hover:underline">Consultorio</a>
          <a href="#sesiones"        className="hover:underline">Sesiones Nochebuena</a>
          <a href="#acompanamientos" className="hover:underline">Acompañamientos</a>
          <a href="#manifiesto"      className="hover:underline">Manifiesto</a>
          <a href="#agendar"         className="hover:underline">Agendar</a>
        </nav>
      </div>
    </header>
  );
}
