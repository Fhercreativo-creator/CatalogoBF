# Verificación de la entrega

Exportación preparada el 29 de octubre de 2026 a partir de la versión 2 de Burgos Financial en Sites.

## Entorno y comandos ejecutados

- Entorno de comprobación: Linux, Node.js 24.22.1, npm 11.9.0; navegador Chromium remoto.
- `npm ci --no-audit --no-fund`: instalación limpia correcta desde `package-lock.json`.
- `npm test`: 4 pruebas aprobadas, 0 fallos.
- `npm run dev`: servidor Vite iniciado y página renderizada en navegador mediante el entorno de vista previa.
- `npm run build`: compilación de producción correcta con Vite 8.3.5, 35 módulos transformados.
- React y React DOM: 19.3.1. Plugin React para Vite: 6.1.2.
- Las dependencias opcionales para macOS ARM64 e Intel están presentes en el lockfile; no se incluyen binarios instalados de Linux.

## Comprobaciones realizadas

- Los 17 identificadores, precios «Precio desde» y fotos coinciden con el catálogo exportado.
- Categorías: 7 iPhone, 8 Samsung sin tablets, 2 plegables y 2 tablets.
- Búsqueda por modelo y capacidad; búsqueda sin acentos y estado sin resultados.
- Ordenación por capacidad sin modificar los datos originales.
- Slider: renderizado de sus cuatro escenas, controles y cambio de slide.
- En navegador: búsqueda S25 devuelve dos variantes; la ficha muestra $19,099 para 256 GB y cambia a $20,199 para 512 GB.
- Guardado en favoritos, filtrado y conservación al recargar.
- Botón de mostrar todos: 17 tarjetas renderizadas.
- Menú móvil: apertura y navegación.
- Marcos móviles de 390 y 320 px: sin desbordamiento horizontal del documento.
- Ficha móvil: precio $25,199 del iPhone 17 Pro, apertura/cierre y ancho de 366 px dentro de una ventana de 390 px.
- Los estilos, animaciones CSS, texto legal y enlaces de contacto se conservan. Las imágenes no se recomprimieron.
- No se observaron errores de la aplicación en la consola durante las pruebas. Los mensajes de la extensión del navegador de pruebas se excluyeron por no pertenecer al sitio.
- ZIP validado: integridad, imágenes de origen idénticas, recursos de compilación existentes y ausencia de carpetas o archivos de credenciales.

## Límites de la comprobación

No se ejecutó en un Mac físico ni en Safari/iPhone real; la revisión móvil se realizó con marcos de navegador. No se inició sesión en GitHub o Builder.io ni se creó un proyecto en esas cuentas. La compatibilidad con Builder se basa en su documentación oficial para repositorios React y en el arranque correcto del proyecto; la edición visual debe terminar de validarse después de Connect Repo / Setup Visual Editing.

No se efectuaron cotizaciones, envíos de WhatsApp ni transacciones. El proyecto no incluye credenciales de cuentas, SDK de Builder Content ni una integración de contenido remoto.

El entorno de vista previa requirió permitir su hostname local de pruebas en Vite. Ese hostname se retiró de la entrega. Si Builder utiliza un hostname que Vite rechaza, configura `BUILDER_ALLOWED_HOSTS` como se indica en el README.
