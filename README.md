# Burgos Financial · React + Vite para Builder.io Code

Proyecto completo y editable del catálogo de Burgos Financial. Conserva las imágenes, los textos, el diseño responsive, las animaciones y las 17 variantes con sus precios de la versión 2 publicada en Sites. Esta es una exportación independiente para GitHub y Builder.io Code; no modifica el sitio publicado en Sites.

## Inicio rápido en tu Mac

1. Instala **Node.js 24** desde [nodejs.org](https://nodejs.org/). Incluye npm. El proyecto admite Node 22.12 o superior; usa 24 para coincidir con la versión mayor probada.
2. Descomprime este ZIP y abre la carpeta `burgos-financial-builder` en tu editor.
3. Abre Terminal dentro de esa carpeta, donde se encuentra `package.json`.
4. Ejecuta:

```bash
npm ci
npm run dev
```

Abre **http://localhost:5173**. Mantén la terminal abierta mientras editas. Los cambios en React y CSS se actualizan en el navegador.

Si ya usas nvm, puedes ejecutar `nvm install` y `nvm use`; `.nvmrc` selecciona Node 24.

### Comandos disponibles

| Comando           | Resultado                                                |
| ----------------- | -------------------------------------------------------- |
| `npm ci`          | Instala las dependencias con las versiones del lockfile  |
| `npm run dev`     | Inicia Vite en el puerto 5173 con recarga al editar      |
| `npm start`       | Alternativa a `npm run dev`                              |
| `npm test`        | Comprueba datos, precios, imágenes y lógica del catálogo |
| `npm run build`   | Genera el sitio de producción en `dist/`                 |
| `npm run preview` | Sirve la compilación en http://localhost:4173            |
| `npm run format`  | Ordena el formato de los archivos editables              |

`npm run preview` requiere haber ejecutado `npm run build`. Si 5173 o 4173 están ocupados, detén el proceso que los usa o cambia el puerto en `vite.config.js` y también en Builder. No abras el `index.html` de código fuente con doble clic: necesita el servidor de Vite.

## Compatibilidad con Builder.io Code

La versión original usa HTML, CSS y JavaScript directo. La documentación de repositorios editables de Builder enumera React, Vue, Svelte y Angular; no garantiza ese mismo flujo para HTML sin framework. Por eso esta entrega está adaptada a **React + Vite**, una combinación que encaja en su flujo de repositorios y servidor de desarrollo.

Se crearon componentes React reales para la portada, navegación, categorías, catálogo, tarjetas, fichas y pie legal. No se usa un iframe del sitio anterior ni se inyecta la página entera como una cadena HTML. Los elementos y textos están disponibles en JSX para continuar la edición visual y mediante código.

**Se comprobó el proyecto localmente, pero no se conectó a tu cuenta de Builder ni a tu GitHub.** La comprobación final del editor visual requiere importar el repositorio en tu cuenta. Builder puede añadir su propia instrumentación durante Auto Setup. No se necesita una API key de Builder Content, una base de datos ni variables secretas para ejecutar esta aplicación.

## Subir a GitHub

Crea un repositorio vacío para el proyecto y sube **el contenido descomprimido**, no únicamente el ZIP. La raíz debe contener `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `src/` y `public/`.

Puedes usar GitHub Desktop desde tu Mac para crear un repositorio a partir de esta carpeta, guardar un commit y publicarlo. O, con Git instalado, ejecuta estos comandos sustituyendo la URL del ejemplo por la URL que te dé tu repositorio:

```bash
git init
git add .
git commit -m "Preparar catálogo Burgos Financial para Builder"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

GitHub solicitará autenticación mediante el método que tengas configurado. No escribas contraseñas ni tokens en archivos del proyecto. El `.gitignore` excluye `node_modules/`, `dist/`, archivos `.env`, registros y archivos locales de macOS. Si optas por cargar archivos desde la web de GitHub, conserva también los archivos de configuración que empiezan con punto.

## Conectar a Builder.io Code

1. En Builder, abre **Projects → Connect Repo** y conecta GitHub.
2. Autoriza el repositorio de este proyecto y selecciónalo.
3. Elige **Setup Visual Editing → Start Auto Setup**. Si solicita configuración manual, usa la tabla siguiente.
4. Termina con **Finish Setup** y comprueba que aparezca la portada.
5. Usa el modo de diseño para seleccionar elementos o pide modificaciones por prompt. Los productos y precios se editan en `src/data/products.js`.
6. Revisa los cambios y utiliza **Send PR** para enviarlos a GitHub. La publicación en tu hosting depende de la integración que configures allí.

### Ajustes del proyecto en Builder

| Campo                                    | Valor                                                    |
| ---------------------------------------- | -------------------------------------------------------- |
| Carpeta del proyecto / Root Directory    | Raíz del repositorio                                     |
| Rama principal                           | `main`, o la rama que hayas elegido                      |
| Runtime / Node                           | `24`                                                     |
| Setup Script / Dependency install script | `npm ci`                                                 |
| Dev command / Development Server Command | `npm run dev`                                            |
| Development Server Port                  | `5173`                                                   |
| Dev server URL                           | Auto-Detect; en ejecución local, `http://localhost:5173` |
| Validation command                       | `npm test && npm run build`                              |
| Variables de entorno obligatorias        | Ninguna                                                  |

Usa el comando de desarrollo, no `npm run preview`, para la edición visual. Con la aplicación de escritorio de Builder puedes elegir una ejecución local en tu Mac; también puedes utilizar su conexión alojada al repositorio. Las opciones disponibles dependen de tu cuenta.

Si Builder muestra **Blocked request / host is not allowed**, toma el nombre exacto del host que muestra ese error y agrega en los ajustes de entorno de Builder `BUILDER_ALLOWED_HOSTS` con ese host, sin `https://` ni ruta; reinicia el servidor. Para varios hosts, sepáralos por comas. `vite.config.js` admite esa variable; no es una clave privada. No hay que desactivar la validación de hosts.

## Archivos para editar

| Archivo o carpeta                                                                   | Qué modifica                                                     |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `src/App.jsx`                                                                       | Orden de las secciones y estado general                          |
| `src/components/HeroSlides.jsx`                                                     | Imágenes, textos y botones de los cuatro slides                  |
| `src/components/Hero.jsx`                                                           | Transición, pausa, teclado y gesto táctil del slider             |
| `src/components/Header.jsx`                                                         | Menú de escritorio y celular                                     |
| `src/components/Categories.jsx`                                                     | Tarjetas de categorías                                           |
| `src/components/Catalog.jsx`                                                        | Buscador, filtros y distribución del catálogo                    |
| `src/components/ProductCard.jsx`                                                    | Tarjetas y precios                                               |
| `src/components/ProductDialog.jsx`                                                  | Fichas, variantes y copia del modelo                             |
| `src/components/LegalNotice.jsx`                                                    | Aviso legal completo debajo del footer                           |
| `src/components/Footer.jsx`                                                         | Pie de página                                                    |
| `src/components/TabletBanner.jsx`, `HowItWorks.jsx`, `FinalCTA.jsx`, `Benefits.jsx` | Bloques de contenido                                             |
| `src/data/products.js`                                                              | Los 17 productos, capacidades, precios y fotos                   |
| `src/config.js`                                                                     | Enlace de WhatsApp, rutas de imágenes y formato monetario        |
| `src/catalog.js`                                                                    | Búsqueda y ordenación                                            |
| `src/styles.css`                                                                    | Colores, tipografía, tamaños, animaciones y puntos de adaptación |
| `public/assets/`                                                                    | Todas las imágenes, logotipo y favicon                           |
| `scripts/catalog.test.mjs`                                                          | Pruebas del catálogo                                             |

Para cambiar un precio, edita `priceFrom` como número sin `$` ni comas. La leyenda «Precio desde» se mantiene en la tarjeta y la ficha. No se incluye la columna «Precio BF».

### Tipografías e imágenes

La fuente original es **Arial, Helvetica, sans-serif**, disponible a través del sistema operativo. Se conserva la misma pila tipográfica; no existían archivos `.woff` o `.ttf` propios que exportar. Todas las imágenes de portada y productos están incluidas en `public/assets/` con sus bytes originales. No hay descargas de fuentes o imágenes externas para mostrar el diseño.

### Adaptación a celular

Se conservaron los estilos y puntos de adaptación del sitio original. Se revisaron ventanas de escritorio y marcos de 390 y 320 px en navegador. Para revisar en un teléfono real, con el Mac y el teléfono en la misma red, abre la URL de red que imprime Vite al ejecutar `npm run dev`. Si macOS solicita acceso de red para Node, autorízalo según las políticas de tu equipo. El botón de copiar usa portapapeles cuando está disponible y tiene una alternativa para contextos sin HTTPS.

## Compilar y publicar

```bash
npm ci
npm test
npm run build
```

El resultado está en **`dist/`**. Para un hosting tradicional, sube el **contenido de `dist/`** a la carpeta pública del dominio. No subas `src/` como si fuera un sitio ya compilado. Se incluye una compilación verificada en este ZIP; vuelve a compilar tras editar.

Para Vercel, importa el repositorio con preset **Vite**, instalación `npm ci`, compilación `npm run build` y salida `dist`. `vercel.json` incluye esos valores. También se incluye `netlify.toml` con compilación y salida. No hay rutas de servidor ni backend: es un catálogo que deriva la cotización a WhatsApp.

Las rutas de recursos usan la base relativa `./`, para permitir publicación en una subcarpeta. El dominio final y su DNS se configuran en tu proveedor. Para una vista previa social con tu dominio, agrega `og:url` y `og:image` con URLs absolutas correctas en `index.html`; se retiraron las referencias al antiguo dominio de Sites de esas etiquetas.

## Alcance de la verificación

Consulta `VERIFICACION.md` para los comandos ejecutados y las comprobaciones del navegador. Las dependencias están declaradas y fijadas en `package.json` y `package-lock.json`; sus archivos se descargan con `npm ci`. Se excluyen `node_modules`, contraseñas, claves privadas, archivos `.env`, configuración de cuentas y metadatos de Sites.

Los favoritos se almacenan en el navegador de cada visitante. No se añadió panel administrador, inventario en tiempo real, cobro ni evaluación de créditos. Los datos se conservaron: la Tab A11 mantiene 64 GB del archivo original, aunque la lista posterior de precios decía 54 GB; su precio sigue siendo $4,599.

## Documentación de referencia

Compatibilidad y pasos consultados el 29 de octubre de 2026:

- [Builder: conexión de repositorios y frameworks](https://www.builder.io/c/docs/projects-github/)
- [Builder Code: proyectos desde repositorios](https://www.builder.io/c/docs/builder-code-projects-from-repositories)
- [Builder Code: ajustes del proyecto](https://www.builder.io/c/docs/builder-code-project-settings)
- [Builder: opciones de ejecución y conexión local](https://www.builder.io/c/docs/builder-code-projects-setup-overview)
- [Vite: requisitos e inicio](https://vite.dev/guide/)
- [GitHub: agregar archivos al repositorio](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
