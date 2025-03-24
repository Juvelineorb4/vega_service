"use client";

import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: "/proyects/jackup.jpg", // 🖼 Reemplaza con una imagen real
      title: "Ingeniería y construcción del sistema eléctrico",
      description:
        "Sistema de potencia, control hidráulico y detección de incendio en 'Jack-Up Eagle One', Venezuela.",
    },
    {
      id: 2,
      image: "/proyects/pozos.jpg", // 🖼 Reemplaza con una imagen real
      title: "Calibración de instrumentos en plataformas WHP",
      description:
        "Adecuación de pozos productores AP-03 y AP-04, en Campo Corocoro, Petrosucre, Estado Sucre, Venezuela.",
    },
    {
      id: 3,
      image: "/proyects/corocoro.jpg", // 🖼 Reemplaza con una imagen real
      title: "Desmantelamiento de sistemas en Corocoro",
      description:
        "Sistema mecánico, eléctrico y control 'IPF' en Campo Corocoro, Estado Sucre, Venezuela.",
    },
    {
      id: 4,
      image: "/proyects/sst.jpg", // 🖼 Reemplaza con una imagen real
      title: "Instalación de detección de incendio",
      description:
        "Sistema de detección de incendio en 'SST Huasteca', Puerto de Guanta, Estado Anzoátegui, Venezuela.",
    },
    {
      id: 5,
      image: "/proyects/insladeaves.jpg", // 🖼 Reemplaza con una imagen real
      title: "Levantamiento del sistema eléctrico",
      description:
        "Base Científico Naval Simón Bolívar, Isla de Aves, Venezuela.",
    },
    {
      id: 6,
      image: "/proyects/petripiar.jpg", // 🖼 Reemplaza con una imagen real
      title: "Pruebas y diagnóstico eléctrico",
      description:
        "Sistema de puesta a tierra en la sala de control de Petropiar, Estado Anzoátegui, Venezuela.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Proyectos Ejecutados
        </h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Con más de 15 años de experiencia, hemos ejecutado proyectos clave en
          ingeniería, construcción y mantenimiento eléctrico para diversas
          industrias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 p-4">
                <h4 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {project.title}
                </h4>
                <p className="text-white text-sm text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
