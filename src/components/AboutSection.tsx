"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container-custom flex flex-col md:flex-row items-center">
        {/* Imagen de la empresa */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Image
            src="https://ext.same-assets.com/empresa-vega.jpg" // 🖼 Reemplaza con una imagen real
            alt="Vega Servicios Eléctricos"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Información sobre la empresa */}
        <div className="md:w-1/2 md:pl-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestra Empresa
          </h3>
          <p className="text-gray-600 text-justify mb-4">
            Vega Servicios Eléctricos C.A. es una empresa con más de 15 años de
            experiencia, dedicada a brindar servicios integrales en sistemas
            electromecánicos, ingeniería, diseño, implementación, construcción y
            mantenimiento industrial. Nos destacamos por ofrecer soluciones
            innovadoras y seguras, adaptándonos a las necesidades de cada
            cliente.
          </p>
          <p className="text-gray-600 text-justify mb-6">
            Nuestra misión es garantizar la satisfacción de nuestros clientes a
            través del cumplimiento de altos estándares de calidad y normativas
            internacionales. Apostamos por la innovación y el uso de
            herramientas tecnológicas avanzadas para cada uno de nuestros
            proyectos.
          </p>
        </div>
      </div>
    </div>
  );
}
