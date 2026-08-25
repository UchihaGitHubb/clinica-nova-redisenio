# Clínica Nova — aplicación

Sitio Next.js del rediseño. La especificación está en `/docs`.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
npm run lint
```

## Entorno

Copia `.env.example` a `.env.local` si quieres fijar la URL en local. En Vercel define `NEXT_PUBLIC_SITE_URL` con la URL pública, sin barra final.

## Stack

| Pieza | Elección |
|---|---|
| Framework | Next.js 16 · App Router |
| Lenguaje | TypeScript estricto |
| Estilos | CSS Modules + custom properties |
| Tipografías | `next/font/google` (Cormorant + Manrope) |
| Runtime | solo `next`, `react`, `react-dom` |

## Estructura

```
app/                 Rutas: home, procedimientos, especialistas,
                     resultados, la clínica, tu proceso, agendar, legales
components/          layout, home, procedures, specialists, results,
                     process, booking, clinic, legal, ui
lib/content/         Copy y colecciones
lib/site.ts          Nombre, navegación, contacto
lib/images.ts        Manifiesto de fotografía
public/images/       Fotografía y logotipos
styles/tokens/       Design tokens
```

Ningún componente contiene un literal de marca ni una ruta de imagen fija.

## Estado

Sitio completo para la propuesta: home, catálogo, especialistas, resultados, proceso, financiación, FAQ, valoración, clínica y páginas legales.

Los formularios se ven completos y **no envían**. El sitio permanece en `noindex` hasta el lanzamiento real.

Pendiente de la clínica: correo, RM/formación, foto de la Dra. Lina Gómez, TikTok/YouTube, logotipo vectorial.

## Despliegue

El directorio raíz en Vercel es **`nuevo`**. Instrucciones en el README de la raíz del repositorio.
