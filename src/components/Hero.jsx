// src/components/Hero.jsx
import { motion } from "framer-motion";
import logo from "../assets/logo.png";  // Asegúrate de que este sea el nombre correcto

export default function Hero() {
  return (
    <section
      className="
        w-screen        /* Ocupa todo el ancho de la pantalla */
        h-screen        /* Ocupa toda la altura de la pantalla */
        flex
        flex-col
        justify-center
        items-center
        bg-white        /* Fondo blanco; cámbialo si quieres otro color */
      "
    >
      {/* LOGO */}
      <motion.img
        src={logo}
        alt="Logo Nochebuena"
        className="w-[340px] md:w-[420px] h-auto mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* TÍTULO */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-[#233445] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        El poder de la simplicidad
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        La simplicidad no es debilidad, es inteligencia estratégica.<br />
        En tiempos complejos, lo urgente se apodera de lo central.
      </motion.p>
    </section>
  );
}
