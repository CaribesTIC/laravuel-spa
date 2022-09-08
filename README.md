# laravuel-spa

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## CLI

```sh
npm init vue@latest

✔ Project name: … llaravuel-spa
✔ Add TypeScript? … Yes
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit Testing? … Yes
✔ Add Cypress for End-to-End testing? … No
✔ Add ESLint for code quality? … No

Done. Now run:

  cd llaravuel-spa
  nvm install node
  npm install
  npm run dev
```
# Installing Tailwind

Install `tailwindcss` and its peer dependencies via `npm`, and then run the `init` command to generate both `tailwind.config.js` and `postcss.config.js`.

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Next, add the paths to all of your template files in your `tailwind.config.js` file.

```{3,4,5,6}js
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Copy and paste `asset/css/` folder and update `main.ts` file with the following line:

```ts{3}
// omitted for brevity ...
// import './assets/main.css'
import '@/assets/css/app.css'

// omitted for brevity ...
```

## Containerizing with Docker

Copy the following files and paste them in the root folder of the project:

- [`docker-compose.dev.yml`](https://github.com/CaribesTIC/vue-frontend-ts/blob/main/docker-compose.dev.yml)
- [`docker-compose.yml`](https://github.com/CaribesTIC/vue-frontend-ts/blob/main/docker-compose.yml)
- [`Dockerfile`](https://github.com/CaribesTIC/vue-frontend-ts/blob/main/Dockerfile)
- [`nginx.conf`](https://github.com/CaribesTIC/vue-frontend-ts/blob/main/nginx.conf)

## Vite.config.ts

```ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // uncomment these lines to containerize
   //server: { 
   //  host: '0.0.0.0',
   // port: '80'
  //}, 
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {
      // comment this line to containerize
      VUE_APP_API_URL: "http://localhost:8000",
      // uncomment this line to containerize
      //VUE_APP_API_URL: "http://api.laravuel.dev.com"
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
```

## Axios

```
npm i axios
```

## fontawesome
```sh
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/vue-fontawesome@3.0.0-5
```
https://www.npmjs.com/package/@fortawesome/vue-fontawesome/v/3.0.0-5

## VueUse

```sh
npm i @vueuse/core
```

## Lodash
```h
npm i lodash
```

## public folders

Copy the following folders and paste them in the `public` folder of the project:

- `menu/`
- `images/` 





