# Portafolio — Juan Guillermo Cardenas Miranda

Portafolio web profesional desarrollado con **Angular 20**. Muestra la experiencia, proyectos, formación y habilidades del autor como Desarrollador Full Stack.

## Tecnologías

- **Angular 20** — standalone components, signals, lazy loading
- **TypeScript**
- **CSS puro** — sin Tailwind (estilos propios)
- **Font Awesome 6** — iconos
- **Google Fonts (Poppins)** — tipografía
- **Firebase Hosting** — despliegue

## Características

- 6 rutas con **lazy loading** (`loadComponent`) — cada página se descarga al navegar
- **Idioma ES/EN** con cambio instantáneo desde el header
- **Tema claro/oscuro** persistente (`localStorage`)
- **Meta tags dinámicos** por ruta e idioma (title, description, Open Graph)
- **Scroll-spy** — el enlace activo del header se actualiza al scrollear
- **Animaciones fadeInUp** escalonadas en todas las cards
- **Página 404** personalizada
- **Glass cards** con backdrop-filter

## Estructura del proyecto

```
src/
├── index.html
├── main.ts
├── styles.css                     # Estilos globales + tema claro + animaciones
└── app/
    ├── app.ts                     # Componente raíz (meta tags, scroll al navegar)
    ├── app.html
    ├── app.css
    ├── app.routes.ts              # Rutas con lazy loading
    ├── app.config.ts
    ├── layout/                    # Componentes compartidos
    │   ├── header/                # Navbar fijo con lang/theme toggle
    │   ├── footer/                # Footer con copyright
    │   ├── carousel/              # Carrusel de imágenes para proyectos
    │   ├── goodbye/               # Sección de despedida final
    │   └── scroll-top/            # Botón flotante "volver arriba"
    ├── pages/                     # Páginas (una por ruta)
    │   ├── home/                  # Presentación personal
    │   ├── experience/            # Experiencia laboral
    │   ├── projects/              # Proyectos personales
    │   ├── training/              # Formación académica
    │   ├── skills/                # Habilidades técnicas
    │   └── not-found/             # 404
    └── services/
        ├── lang.service.ts        # Señal del idioma actual
        └── translate/             # Servicios de traducción por componente
            ├── header-translate.service.ts
            ├── home-translate.service.ts
            ├── experience-translate.service.ts
            ├── projects-translate.service.ts
            ├── training-translate.service.ts
            ├── skills-translate.service.ts
            ├── footer-translate.service.ts
            └── goodbye-translate.service.ts
```

## Rutas

| Ruta          | Página             |
|---------------|--------------------|
| `/home`       | Inicio             |
| `/experience` | Experiencia        |
| `/projects`   | Proyectos          |
| `/training`   | Formación          |
| `/skills`     | Habilidades        |
| *(404)*       | Página no encontrada |

## Descargar y ejecutar localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/JuanGuillermo09/juan-cardenas-portafolio.git
cd juan-cardenas-portafolio

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo (http://localhost:4200)
npm start

# 4. Build producción (se genera en dist/)
npm run build
```

## Scripts disponibles

| Comando         | Descripción                     |
|-----------------|---------------------------------|
| `npm start`     | Servidor de desarrollo          |
| `npm run build` | Build producción                |
| `npm run watch` | Build en modo desarrollo + watch |
| `npm test`      | Pruebas unitarias (Karma)       |

## Despliegue

El proyecto está desplegado en **Firebase Hosting**. Para desplegar una nueva versión:

```bash
ng build
firebase deploy
```

## Assets

Cada proyecto en `public/` tiene su propia carpeta con capturas de pantalla usadas por el carrusel. Los diplomas, avatar y hoja de vida también están en `public/`.
