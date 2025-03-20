"use client";

import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Ingeniería de Proyectos Eléctricos",
      description:
        "Diseño y ejecución de proyectos eléctricos e instrumentación con los más altos estándares de calidad.",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Automatización y Control Industrial",
      description:
        "Implementamos sistemas avanzados de control y automatización para optimizar la producción.",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Mantenimiento y Montajes Eléctricos",
      description:
        "Servicios de mantenimiento preventivo y correctivo para instalaciones eléctricas industriales.",
      icon: "🔧",
    },
    {
      id: 4,
      title: "Tableros Eléctricos",
      description:
        "Fabricación, instalación y mantenimiento de tableros eléctricos industriales.",
      icon: "📟",
    },
    {
      id: 5,
      title: "Iluminación Industrial Inteligente",
      description:
        "Soluciones de iluminación eficientes y automatizadas para optimizar el consumo energético.",
      icon: "💡",
    },
    {
      id: 6,
      title: "Instalación y Calibración de Instrumentos",
      description:
        "Montaje y calibración de instrumentos para sistemas eléctricos e industriales.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container-custom">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Nuestros Servicios
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl">{service.icon}</span>
                <p className="text-xl font-semibold ml-3">{service.title}</p>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
