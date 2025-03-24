"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container-custom flex flex-col md:flex-row items-center">
        {/* Imagen de la empresa */}
        <div className="md:w-1/2 flex justify-center">
          <div className="max-w-[400px] bg-white rounded-lg shadow-lg p-4">
            <Image
              src="/LOGOTIPO2.jpg"
              alt="Vega Servicios Eléctricos"
              width={300}
              height={300}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Información sobre la empresa */}
        <div className="md:w-1/2 md:pl-10 pr-6">
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

          {/* Misión */}
          <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
            Misión
          </h4>
          <p className="text-gray-600 text-justify mb-4">
            Consolidarnos como una empresa confiable y eficiente, ofreciendo
            opciones de servicios en materia de electricidad e instrumentación
            desde la etapa de diseño, construcción, puesta en marcha y
            posteriores servicios de mantenimiento, modernización y/o
            reparación, satisfaciendo las necesidades de los clientes.
          </p>

          {/* Visión */}
          <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
            Visión
          </h4>
          <p className="text-gray-600 text-justify">
            Ofrecer soluciones con tecnología, calidad y seguridad en el área de
            la electricidad e instrumentación industrial, logrando favorecer los
            objetivos empresariales de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
}
