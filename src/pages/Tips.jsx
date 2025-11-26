import React, { useState } from 'react';

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/j1k2EiojIQU",
    title: "Cómo trasplantar un mini cactus (con Audio Descriptivo)",
    description: "Versión con audio descriptivo para gente con discapacidad visual.",
    featureType: "Audio Descriptivo"
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/ZvBizpZAjUc",
    title: "Cómo trasplantar un mini cactus (con Closed Captions)",
    description: "Versión con pista de subtitulos para personas con discapacidad auditiva.",
    featureType: "Closed Captions"
  }
];

const Tips = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const toggleVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const currentVideo = videos[currentVideoIndex];
  const nextVideo = videos[(currentVideoIndex + 1) % videos.length];
  return (
    <section>
      <h2>Consejo del dia</h2>
      
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
        <h3>Video: {currentVideo.title}</h3>
        <iframe
          width="100%"
          height="315"
          src={currentVideo.url}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p><small>{currentVideo.description}</small></p>
        <button onClick={toggleVideo} style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
          Cambiar a Versión con {nextVideo.featureType}
        </button>
      </div>

      <h2>Galería de Mini Cactus</h2>
      <p>
        Los mini cactus son plantas fascinantes y muy resistentes, perfectas para espacios pequeños
        y para quienes se inician en el mundo de la jardinería. Su capacidad para almacenar agua
        les permite sobrevivir en condiciones de sequía.
      </p>
      <p>
        Existen cientos de variedades, con formas y flores únicas. Son ideales para decorar
        escritorios y ventanas, ya que requieren muy poco mantenimiento y añaden un toque
        desértico y moderno a cualquier ambiente.
      </p>

      {/* Requisito: Imagen NO decorativa (con alt descriptivo) [cite: 31, 32] */}
      <figure>
        <img 
          src="/cactus.png" 
          alt="Fotografía de una colección de mini cactus en pequeñas macetas de colores sobre un estante" 
        />
        <figcaption>Colección de mini cactus variados.</figcaption>
      </figure>
    </section>
  );
};

export default Tips;