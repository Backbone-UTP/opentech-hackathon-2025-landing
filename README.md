# OpenTech Hackathon 2025 - Landing Page

Este repositorio contiene la landing page oficial para el OpenTech Hackathon 2025. Es una aplicación de una sola página construida con React, Vite y Tailwind CSS, diseñada para proporcionar toda la información necesaria para los participantes, incluyendo la agenda, reglas, premios e información de contacto.

## Tecnologías Utilizadas

- **Framework**: [React](https://reactjs.org/)
- **Herramienta de Construcción**: [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Enrutamiento**: [React Router DOM](https://reactrouter.com/)

## Estructura del Proyecto

El proyecto está organizado siguiendo una arquitectura basada en componentes para asegurar la modularidad y reutilización.

- `src/components/`: Contiene componentes que son específicos de la página de inicio principal.
- `src/pages/`: Contiene los componentes de página de nivel superior como `CodeOfConduct.tsx` y `TermsOfEvent.tsx`.
- `src/shared/`: Contiene componentes reutilizables que se comparten entre diferentes características o páginas.
- `src/App.tsx`: El componente principal de la página de inicio.
- `src/main.tsx`: El punto de entrada de la aplicación donde se configura el enrutador.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) para verla en el navegador.

La página se recargará si realizas ediciones.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.
Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

### `npm run lint`

Revisa los archivos del proyecto en busca de problemas de calidad de código.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. **Haz un Fork** del repositorio.
2. Crea una nueva rama para tu fonctionnalité (`git checkout -b feature/nueva-funcionalidad`).
3. **Haz tus cambios** y realiza commits (`git commit -m 'Añade nueva funcionalidad'`).
4. **Empuja tus cambios** a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request** para que podamos revisar tus cambios.

## Reporte de Bugs

Si encuentras un bug, por favor ayúdanos reportándolo. Sigue estos pasos:

1. Ve a la sección de **Issues** del repositorio.
2. Revisa si el bug ya ha sido reportado.
3. Si no es así, crea un nuevo issue.
4. **Describe el bug** detalladamente, incluyendo:
    - Pasos para reproducirlo.
    - Comportamiento esperado.
    - Comportamiento actual.
    - Capturas de pantalla (si es posible).

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

---
