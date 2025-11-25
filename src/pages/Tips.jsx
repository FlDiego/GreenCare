import React from 'react';

const Tips = () => {
  return (
    <section>
      <h2>Guía Visual de Cuidados</h2>
      
      <p>
        El riego es la parte más delicada del cuidado de las plantas. Muchas personas cometen el error
        de regar en exceso, lo que pudre las raíces. Es fundamental tocar la tierra antes de añadir agua.
      </p>
      <p>
        La luz también es crucial. Observa cómo incide el sol en tu ventana durante el día para
        elegir la ubicación perfecta para tu nueva compañera verde.
      </p>

      {/* Requisito: Video con CC y AD [cite: 35] */}
      <div style={{ margin: '2rem 0', border: '1px solid #ccc', padding: '1rem' }}>
        <h3>Video: Cómo trasplantar suculentas</h3>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/kHc9kKOmsKM"
          title="Cómo trasplantar TUS SUCULENTAS"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p><small>Video de YouTube que muestra cómo trasplantar suculentas.</small></p>
      </div>

      <h2>Galería de Plantas Resistentes</h2>
      <p>
        Existen plantas que soportan condiciones adversas, ideales para quienes viajan mucho
        o suelen olvidar el riego. La Sansevieria es la reina de la resistencia.
      </p>
      <p>
        Otra opción excelente es el Potos, que crece rápidamente y te avisa cuando necesita agua
        poniendo sus hojas lacias.
      </p>

      {/* Requisito: Imagen NO decorativa (con alt descriptivo) [cite: 31, 32] */}
      <figure>
        <img 
          src="https://via.placeholder.com/400x200" 
          alt="Fotografía de una planta Sansevieria en una maceta blanca sobre una mesa de madera" 
        />
        <figcaption>Ejemplo de Sansevieria (Lengua de Suegra).</figcaption>
      </figure>
    </section>
  );
};

export default Tips;