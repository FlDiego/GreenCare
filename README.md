# GreenCare: Guía de Cuidado de Plantas Accesible

GreenCare es una aplicación web desarrollada con React y Vite, diseñada para ser una guía accesible y fácil de usar sobre el cuidado de plantas. El proyecto se enfoca en ofrecer una experiencia de usuario inclusiva, siguiendo las mejores prácticas de accesibilidad web.

## Características

- **Guía Visual:** Consejos prácticos sobre riego y luz, presentados de forma clara.
- **Galería de Plantas:** Una selección de plantas resistentes, ideales para principiantes.
- **Formulario de Contacto Accesible:** Un formulario que permite a los usuarios enviar sus dudas y sugerencias, implementado con características de accesibilidad como `aria-live` para notificaciones.
- **Contenido Multimedia Accesible:** Videos con subtítulos y descripciones de audio para garantizar que todo el contenido sea accesible para personas con discapacidades.

## Cómo empezar

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/greencare.git
   ```
2. **Instala las dependencias:**
   ```bash
   cd greencare
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta el linter para revisar el código.
- `npm run preview`: Sirve la compilación de producción localmente.

## Despliegue en Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

Puedes desplegar este proyecto en [Render](https://render.com/) usando el botón de arriba o siguiendo estos pasos manualmente:

1.  **Sube tu código a un repositorio de GitHub.**
2.  **Crea una cuenta en Render** y conecta tu cuenta de GitHub.
3.  **Crea un nuevo "Blueprint Service"** en tu dashboard de Render.
4.  **Selecciona tu repositorio de GitHub.** Render detectará el archivo `render.yaml` y configurará el servicio automáticamente.
5.  **Haz clic en "Create"** y Render se encargará del resto. Cada vez que hagas un `push` a tu rama principal, Render desplegará los cambios automáticamente.
