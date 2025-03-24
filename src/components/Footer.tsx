"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  // Scroll suave a una sección
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#FBA442] mr-3" />
              <a
                href="tel:+584148014424"
                className="hover:text-[#FBA442] transition-colors"
              >
                +58 414-801-4424
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#FBA442] mr-3" />
              <a
                href="mailto:vegaadm2@gmail.com"
                className="hover:text-[#FBA442] transition-colors"
              >
                vegaadm2@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#FBA442] mr-3" />
              <span>Venezuela</span>
            </li>
          </ul>
        </div>

        {/* Enlaces como el navbar */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleScroll("hero")}
                className="hover:text-[#FBA442] transition-colors"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("reasons")}
                className="hover:text-[#FBA442] transition-colors"
              >
                ¿Por qué Elegirnos?
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-[#FBA442] transition-colors"
              >
                Nuestra Empresa
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("services")}
                className="hover:text-[#FBA442] transition-colors"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="hover:text-[#FBA442] transition-colors"
              >
                Proyectos Ejecutados
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="hover:text-[#FBA442] transition-colors"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Vega Servicios Eléctricos C.A. - Todos
        los derechos reservados.
      </div>
    </footer>
  );
}
