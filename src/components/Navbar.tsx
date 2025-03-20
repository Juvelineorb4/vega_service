"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para hacer scroll suave a la sección deseada
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Cierra el menú en móvil después del clic
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          <span className="text-[#FBA442]">Vega</span>{" "}
          <span className="text-gray-800">Servicios Eléctricos C.A.</span>
        </h1>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Menú en desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleScroll("hero")} className="nav-button">
            Inicio
          </button>
          <button
            onClick={() => handleScroll("reasons")}
            className="nav-button"
          >
            ¿Por qué Elegirnos?
          </button>
          <button onClick={() => handleScroll("about")} className="nav-button">
            La Empresa
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="nav-button"
          >
            Servicios
          </button>
          <button onClick={() => handleScroll("team")} className="nav-button">
            Nuestro Equipo
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="nav-button"
          >
            Proyectos
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="nav-button"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <button onClick={() => handleScroll("hero")} className="nav-button">
              Inicio
            </button>
            <button
              onClick={() => handleScroll("reasons")}
              className="nav-button"
            >
              ¿Por qué Elegirnos?
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="nav-button"
            >
              La Empresa
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="nav-button"
            >
              Servicios
            </button>
            <button onClick={() => handleScroll("team")} className="nav-button">
              Nuestro Equipo
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="nav-button"
            >
              Proyectos
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="nav-button"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
