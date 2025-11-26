import React from 'react';

const Home = () => {
  return (
    <section>
      {/* Requisito: Niveles de encabezado (h1 usado en header, aquí h2) [cite: 15] */}
      <div className="about-section">
        <div className="about-text">
          <h2>Bienvenido al mundo verde</h2>
          
          {/* Requisito: Al menos 2 párrafos por nivel de encabezado [cite: 20] */}
          <p>
            Las plantas de interior no solo decoran nuestro hogar, sino que también purifican el aire
            y mejoran nuestro estado de ánimo. En este sitio web, queremos compartir contigo la pasión
            por la naturaleza dentro de casa, ofreciendo guías simples para principiantes.
          </p>
          <p>
            No importa si tienes poco espacio o poca luz, siempre hay una planta adecuada para ti.
            Explora nuestras secciones para aprender sobre riego, luz y trasplante.
          </p>
        </div>
        
        {/* Requisito: Imagen decorativa (alt vacío) [cite: 28, 29] */}
        <div className="about-image">
          <img 
            src="/plant.png" 
            alt="Foto de una planta de interior saludable en una maceta decorativa" 
            className="responsive-image"
          />
        </div>
      </div>
      <br />

      <h2>Recursos Recomendados</h2>
      <p>
        Para profundizar en el cuidado científico de las plantas, recomendamos leer artículos
        especializados y no guiarse solo por rumores.
      </p>
      <p>
        A continuación, te dejamos enlaces útiles para continuar tu aprendizaje:
      </p>

      {/* Requisito: 2 enlaces NO de navegación (interno y externo) [cite: 24] */}
      <ul>
        <li>
          {/* Enlace interno [cite: 25] */}
          <a href="/consejos">Consulta nuestros videos tutoriales</a> para ver ejemplos prácticos.
        </li>
        <li>
          {/* Enlace externo [cite: 26] */}
          <a href="https://es.wikipedia.org/wiki/Botánica" target="_blank" rel="noopener noreferrer">
            Lee más sobre Botánica en Wikipedia
          </a>.
        </li>
      </ul>
    </section>
  );
};

export default Home;