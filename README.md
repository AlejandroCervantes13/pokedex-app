# Pokédex App

Aplicación web construida con React y Redux Toolkit que consume la PokéAPI para mostrar Pokémon con buscador, paginación y vista detalle.

## Tecnologías utilizadas

- React 18
- Redux Toolkit
- Vite
- PokéAPI (https://pokeapi.co/)

## Requisitos previos

- Node.js v18 o superior
- npm

## Instalación

1. Clona el repositorio
2. Entra a la carpeta del proyecto
3. Instala las dependencias
4. Corre el servidor local

## Comandos

npm install
npm run dev

Abre el navegador en http://localhost:5173

## Funcionalidades

- Muestra 6 Pokémon por página
- Buscador en tiempo real por nombre
- Paginación con botones Anterior y Siguiente
- Vista detalle al hacer clic en un Pokémon
- Tarjetas con color según el tipo de cada Pokémon
- Modal con estadísticas, altura, peso y tipos
- Diseño responsivo para móvil y escritorio

## Estructura del proyecto

src
 ├── components
 │   ├── PokemonCard.jsx
 │   ├── PokemonModal.jsx
 │   ├── SearchBar.jsx
 │   └── Pagination.jsx
 ├── pages
 │   └── Home.jsx
 ├── store
 │   ├── store.js
 │   └── pokemonSlice.js
 └── App.jsx

## Documentación técnica

- La app consume la PokéAPI para obtener 150 Pokémon al inicio
- El estado global se maneja con Redux Toolkit (pokemons, loading, searchTerm, currentPage)
- El buscador filtra en tiempo real sobre los datos ya cargados
- La paginación calcula las páginas dinámicamente según los resultados filtrados
- Al hacer clic en una tarjeta se abre un modal con información detallada

## Documentación funcional

- El usuario ve 6 Pokémon por página al entrar a la app
- Puede escribir en el buscador para filtrar por nombre
- Puede navegar entre páginas con los botones Anterior y Siguiente
- Al hacer clic en un Pokémon ve su imagen oficial, tipos, altura, peso y estadísticas
- Puede cerrar el modal haciendo clic en la X o fuera del modal