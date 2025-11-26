import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage('¡Gracias! Te responderemos lo mas pronto posible.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setConfirmationMessage('');
    }, 5000);
  };

  return (
    <section>
      <h2>Contáctanos</h2>
      <p>
        ¿Tienes dudas sobre una planta específica? Llena el siguiente formulario y te ayudaremos
        a diagnosticar el problema lo antes posible.
      </p>
      <p>
        También aceptamos sugerencias para futuros artículos o videos. Nos encanta escuchar
        a nuestra comunidad.
      </p>

      {/* Requisito: Formulario con 3 campos (Nombre, Email, Mensaje) [cite: 37, 38] */}
      <form style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        
        {/* Campo 1: Nombre */}
        <div className="form-group">
          {/* Requisito: Labels explícitos vinculados con htmlFor  */}
          <label htmlFor="name">
            Nombre 
            {/* Requisito: Campo requerido visual (*) y no visual (aria-required)  */}
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="name" 
          />
        </div>

        {/* Campo 2: Email */}
        <div className="form-group">
          <label htmlFor="email">
            Correo Electrónico
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>

        {/* Campo 3: Mensaje */}
        <div className="form-group">
          <label htmlFor="message">
            Mensaje
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Enviar Mensaje
        </button>
      </form>

      
      {/* La región ARIA-live siempre debe estar en el DOM para anunciar los cambios de contenido */}
      <div aria-live="assertive" role="status" style={{ marginTop: '20px', color: 'green', fontWeight: 'bold', minHeight: '1.5em' }}>
        {confirmationMessage}
      </div>

      <section aria-labelledby="response-heading" className="response-section" style={{ marginTop: '1.5rem' }}>
        <h2 id="response-heading">Tiempo de respuesta y privacidad</h2>
        <p>
          Normalmente respondemos dentro de 2 días hábiles. Si tu consulta requiere diagnóstico de una planta,
          es posible que te pidamos fotos adicionales o detalles para ofrecer una respuesta más precisa.
          Para eso necesitas mandar un correo electronico a nuestro correo oficial: info@greencare.com
        </p>
        <p>
          Respetamos tu privacidad: no compartimos tu información de contacto con terceros y usamos los
          mensajes únicamente para mejorar nuestros contenidos y responder a tus dudas.
        </p>
      </section>

    </section>
  );
};

export default Contact;