# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

esto es l que utilice para hacer mi proyecto

1. npm create vite@latest -- --template
sale:
Project name: nombre del proyecto
Select a framework:React
Select a variant:JavaScript

despues sale esto:
  cd react-setup-initial
  npm install
  npm run dev

2. instalacion de tailwind

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

ahora en tailwind.config.js pegar en content esto
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

debe quedar asi:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Incorporación en CSS: En index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

CARRUSEL:
npm install react-slick slick-carousel

4. call to action
Instalar FontAwesome para el ícono:
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

5. 9/10/24 instale npm install react-icons para arreglar m i menu hamburgues


Coleccion de postman
https://elements.getpostman.com/redirect?entityId=38911519-31a53e4a-7934-40f5-b06b-d44685397df4&entityType=collection