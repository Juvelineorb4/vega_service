"use client";

import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Héctor Irigoyen",
      position: "Gerente General",
      image: "https://ext.same-assets.com/placeholder1.jpg", // 🖼 Reemplaza con una imagen real
      description:
        "Responsable de la planificación, organización y control de todas las actividades de la empresa.",
    },
    {
      id: 2,
      name: "Juan Irigoyen",
      position: "Gerente de Operaciones",
      image: "https://ext.same-assets.com/placeholder2.jpg", // 🖼 Reemplaza con una imagen real
      description:
        "Supervisa las actividades diarias de la empresa y asegura el cumplimiento de los planes operativos.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Nuestro Equipo
        </h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conoce a los líderes de Vega Servicios Eléctricos C.A., quienes
          trabajan día a día para garantizar soluciones de calidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="border border-[#FBA442] rounded-md p-3 bg-white/10 backdrop-blur-sm">
                    <p className="text-xl font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-[#FBA442]">{member.position}</p>
                    <p className="text-white text-sm mt-2">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
