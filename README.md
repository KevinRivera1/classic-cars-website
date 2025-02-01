# 🚗 Classic Cars Marketplace

![Banner](./src/assets/banner.png)

Bienvenido al repositorio de **Classic Cars**, una página web dedicada a la compra y venta de carros antiguos. Este proyecto está diseñado para conectar a entusiastas de los autos clásicos con vendedores confiables, ofreciendo una experiencia intuitiva y visualmente atractiva.

---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Características Principales](#características-principales)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)

---

## 🌟 Descripción del Proyecto

**Classic Cars Marketplace** es una plataforma web que permite a los usuarios explorar, comprar y vender carros antiguos. La página está diseñada para destacar la belleza y la historia de estos vehículos, brindando información detallada sobre cada modelo, incluyendo fotos, especificaciones técnicas y precios.

Este proyecto busca crear una comunidad en torno a los autos clásicos, donde los usuarios puedan interactuar, compartir conocimientos y realizar transacciones de manera segura.

---

## 🔧 Características Principales

- **Catálogo de Vehículos**: Explora una amplia variedad de carros antiguos con detalles completos.
- **Filtros Avanzados**: Encuentra el auto perfecto utilizando filtros por marca, año, precio y más.
- **Interfaz Responsiva**: Diseño adaptable para dispositivos móviles y escritorio.

---

## 💻 Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Frontend**:
  - Astro
  - CSS3 (con framework TailwindCSS)
  - JavaScript

---

## 🚀 Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/KevinRivera1/classic-cars-website
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd classic-cars-website
   ```
3. Instala las dependencias:
   ```bash
    $ npm install
    $ bun install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   $ npm run dev
   $ bun run dev
   ```
5. Abre tu navegador y accede a `http://localhost:4321`.

---

## 📝 Uso

Una vez que el proyecto esté en funcionamiento, puedes:

- Navegar por el catálogo de carros antiguos.
- Filtrar resultados según tus preferencias.
- Registrarte como usuario para acceder a funciones adicionales.
- Publicar o gestionar anuncios si eres un vendedor.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
└── 📁src
    └── 📁assets
        └── astro.svg
        └── background.svg
        └── banner.png
        └── banner.webp
        └── car-1.webp
        └── car-2.avif
        └── car-2.webp
        └── car-3.avif
        └── car-3.webp
    └── 📁components
        └── 📁atoms
            └── Button.astro
            └── ImageBanner.astro
            └── InputSearch.astro
        └── 📁containers
            └── ProductContainer.astro
        └── 📁molecules
            └── Banner.astro
            └── Card.astro
            └── FilterSearch.astro
        └── 📁organisms
            └── FilterPanel.astro
            └── ProductList.astro
        └── SectionContainer.astro
        └── 📁seo
            └── SeoTags.astro
        └── 📁shared
            └── 📁controllers
                └── menu.js
            └── Footer.astro
            └── Header.astro
            └── Sidebar.astro
        └── 📁templates
            └── ProductTemplate.astro
    └── 📁core
        └── 📁domain
            └── 📁menu
                └── menu.entity.ts
            └── 📁products
                └── products.entity.ts
        └── 📁repositories
        └── 📁usecases
    └── 📁data
        └── 📁filters
        └── 📁menu
            └── menu.data.ts
        └── 📁products
            └── products.data.ts
    └── 📁layouts
        └── Layout.astro
    └── 📁pages
        └── index.astro
        └── robots.txt.ts
    └── 📁styles
        └── global.css
```

---

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |