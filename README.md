# Clínica Nova — rediseño

Propuesta de rediseño de alta fidelidad para [Clínica Nova](https://www.clinicanova.com.co). Concepto: *Precisión médica. Elegancia humana.*

**Demo:** [clinica-nova-five.vercel.app](https://clinica-nova-five.vercel.app) · **Stack:** Next.js 16 (App Router), React, TypeScript, Tailwind CSS, Vercel

> **Aviso:** proyecto de portafolio independiente. No está afiliado ni avalado por Clínica Nova; su nombre, logotipo, textos e imágenes pertenecen a sus titulares. El código se publica solo para consulta: **todos los derechos reservados** (ver [LICENSE](LICENSE)). No se permite copiarlo, modificarlo ni reutilizarlo sin permiso escrito del autor.

La aplicación vive en **`nuevo/`**. Esa carpeta es el directorio raíz en Vercel.

| Carpeta | Qué es |
|---|---|
| `nuevo/` | Sitio Next.js 16 (App Router). Esto es lo que se despliega. |
| `docs/` | Especificación: dirección, auditoría, inventario, arquitectura y design system. |
| `original/` | Copia local de referencia del sitio actual. **No se sube al repositorio.** |

---

## Cómo verlo en local

Hace falta Node.js 20 o superior.

```bash
cd nuevo
npm install
npm run dev
```

Abre `http://localhost:3000`.

```bash
npm run build
npm start
```

Los scripts de `dev` y `build` usan webpack. En esta máquina Windows, Control de aplicaciones bloquea el binario nativo de Next (Turbopack). En Vercel (Linux) también funciona.

```bash
npm run lint
```

---

## Despliegue en Vercel

El repositorio no está en la raíz de Next.js. Si dejas Root Directory vacío, el build falla.

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New… → Project** e importa este repositorio.
3. En **Root Directory** pulsa *Edit* y elige **`nuevo`**.
4. Framework Preset debe quedar en **Next.js**. Vercel lo detecta solo.
5. Añade esta variable de entorno (Production y Preview):

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SITE_URL` | La URL de Vercel, por ejemplo `https://clinica-nova-redisenio.vercel.app`, **sin barra al final**. |

6. Deploy.

Cuando tengas dominio propio, cambia `NEXT_PUBLIC_SITE_URL` a `https://tudominio.com` y vuelve a desplegar.

### Importante mientras sea una propuesta

El sitio sale con `noindex` (`app/layout.tsx` y `app/robots.ts`) para no competir con clinicanova.com.co. **No quites ese bloque** hasta el lanzamiento real.

Los formularios de valoración y de novedades **no envían datos**. WhatsApp y el teléfono sí llegan a la clínica.

---

## Qué falta confirmar con la clínica

No se ha inventado. En la interfaz aparece como “Por confirmar” o no se muestra:

- Correo electrónico
- Registro profesional y formación de cada especialista
- Fotografía de la Dra. Lina Gómez
- Perfiles de TikTok y YouTube (existen en datos, no se publican en el pie)
- Logotipo vectorial / versión horizontal; los PNG actuales conservan el azul anterior
- Quitar el `noindex` solo al pasar a producción
