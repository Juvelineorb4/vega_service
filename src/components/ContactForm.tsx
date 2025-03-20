"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa los campos obligatorios.");
      return;
    }

    // Aquí podrías enviar los datos a una API o backend
    console.log("Datos enviados:", formData);
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container-custom max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-600 text-center text-lg">
            ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
            pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-gray-700 font-medium">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
                required
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block text-gray-700 font-medium">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
                required
              />
            </div>

            {/* Teléfono (Opcional) */}
            <div>
              <label className="block text-gray-700 font-medium">
                Teléfono (Opcional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-gray-700 font-medium">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
                required
              />
            </div>

            {/* Botón de Enviar */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FBA442] text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
