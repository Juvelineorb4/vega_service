"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-16 bg-gray-100" id="contact">
      <div className="container-custom max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-600 text-center text-lg">
            ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo
            pronto.
          </p>
        ) : (
          <form
            action="https://formsubmit.co/vegaadm2@gmail.com"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6"
          >
            {/* Antibot para FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://tusitio.com/gracias"
            />
            {/* Puedes cambiar esta URL si deseas redirigir al final */}

            {/* Nombre */}
            <div>
              <label className="block text-gray-700 font-medium">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
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
                required
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-gray-700 font-medium">
                Teléfono (Opcional)
              </label>
              <input
                type="tel"
                name="phone"
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
                rows={4}
                required
                className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-[#FBA442] focus:border-[#FBA442]"
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
