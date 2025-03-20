"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-[#FBA442] transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/empresa"
                className="hover:text-[#FBA442] transition-colors"
              >
                Nuestra Empresa
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="hover:text-[#FBA442] transition-colors"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                className="hover:text-[#FBA442] transition-colors"
              >
                Proyectos Ejecutados
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="hover:text-[#FBA442] transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              className="hover:text-[#FBA442] transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-[#FBA442] transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-[#FBA442] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
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
