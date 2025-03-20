"use client";

export default function HeroSection() {
  return (
    <div
      className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://ext.same-assets.com/2438022090/380756966.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="container-custom relative z-10">
        <div className="max-w-xl mx-auto mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-8">
            Soluciones Eléctricas Industriales
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white mt-3 drop-shadow-md">
            Ingeniería, Construcción y Mantenimiento
          </h3>
          <h4 className="text-xl md:text-1xl font-semibold text-white mt-3 drop-shadow-md">
            Más de 15 años brindando servicios eléctricos con calidad y
            seguridad.
          </h4>
        </div>
        <div className="max-w-xl mx-auto">
          <a href="/contacto" className="bg-[#FBA442] text-white px-6 py-3 ">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
