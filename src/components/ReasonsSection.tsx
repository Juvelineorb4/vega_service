"use client";

export default function ReasonsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-3xl font-semibold text-center mb-10">
          ¿Por qué elegir Vega Servicios Eléctricos?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Más de 15 años de experiencia */}
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                🔧
              </div>
              <p className="text-xl font-semibold mb-2">
                Más de 15 años de experiencia
              </p>
              <p className="text-gray-600">
                Contamos con un equipo altamente capacitado en ingeniería,
                diseño e instalación de sistemas eléctricos industriales y de
                potencia.
              </p>
            </div>
          </div>

          {/* Cumplimiento de normativas */}
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                📜
              </div>
              <p className="text-xl font-semibold mb-2">
                Cumplimos con normativas
              </p>
              <p className="text-gray-600">
                Nuestros proyectos cumplen con todas las regulaciones y
                normativas legales aplicables en el sector eléctrico e
                industrial.
              </p>
            </div>
          </div>

          {/* Innovación y tecnología */}
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                ⚡
              </div>
              <p className="text-xl font-semibold mb-2">
                Innovación y tecnología
              </p>
              <p className="text-gray-600">
                Utilizamos herramientas y tecnologías de vanguardia para ofrecer
                soluciones eficientes y seguras en cada proyecto.
              </p>
            </div>
          </div>

          {/* Seguridad en cada proyecto */}
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                🏗️
              </div>
              <p className="text-xl font-semibold mb-2">
                Seguridad en cada proyecto
              </p>
              <p className="text-gray-600">
                Nos aseguramos de implementar estrictos protocolos de seguridad
                para proteger tanto a nuestro equipo como a nuestros clientes.
              </p>
            </div>
          </div>

          {/* Atención personalizada */}
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                🤝
              </div>
              <p className="text-xl font-semibold mb-2">
                Atención personalizada
              </p>
              <p className="text-gray-600">
                Brindamos un servicio cercano y personalizado, adaptándonos a
                las necesidades de cada cliente.
              </p>
            </div>
          </div>

          {/* Soluciones integrales */}
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                🔄
              </div>
              <p className="text-xl font-semibold mb-2">
                Soluciones integrales
              </p>
              <p className="text-gray-600">
                Desde el diseño y planificación hasta la implementación y
                mantenimiento, ofrecemos un servicio completo para nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
