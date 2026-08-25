# 02 · Inventario de recursos — Clínica Nova

**Proyecto:** Rediseño web Clínica Nova
**Naturaleza:** propuesta privada de rediseño, a presentar a Clínica Nova
**Objetivo de esta fase:** inventariar todo el material público reutilizable para construir una **demo de alta fidelidad**
**Fuentes:** `docs/00-DIRECCION-PROYECTO.md`, `docs/01-AUDITORIA-CONTENIDO.md`, y los archivos de `/original`

Este documento **complementa** `01-AUDITORIA-CONTENIDO.md`, no lo reemplaza. Cuando un elemento ya está documentado allí se cita como **[A01 §n]** en lugar de repetirlo.

**Cambio de enfoque respecto a la fase anterior.** No hay contacto con la clínica y el proyecto no se detiene por ello. Donde antes se marcaba "requiere información del cliente", aquí se clasifica el material según lo que podemos hacer **hoy**:

| Marca | Significado |
|---|---|
| **DISPONIBLE** | Podemos usarlo tal cual en la demo |
| **DISPONIBLE COMO REFERENCIA** | Lo conocemos, pero hay que reorganizarlo o reescribirlo |
| **NO DISPONIBLE** | No existe en ninguna fuente consultable |
| **PLACEHOLDER NECESARIO** | Hay que representarlo visualmente sin dato real |
| **[NO CAPTURADA]** | Página enlazada cuyo contenido no está en `/original` |
| **[NO VERIFICADA]** | Se menciona o se intuye, pero no puede comprobarse |

> `/original` no ha sido modificada, renombrada ni reducida. Solo se ha leído.

---

## Hallazgos nuevos de esta fase

Tres cosas que no estaban en la auditoría anterior, obtenidas al analizar el CSS compilado:

1. **Existen dos imágenes de fondo del hero que no aparecen en el HTML.** Están declaradas únicamente en `et-core-unified-71.min.css` como `background-image` de las diapositivas 2 y 3. Son las **únicas fotografías de contexto a pantalla completa** de todo el sitio y, por tanto, el material más valioso para el hero de la demo. Detalle en §3.1.
2. **La paleta real del sitio es azul y turquesa, no la que sugiere el HTML.** Los `#008080` visibles en estilos en línea son un parche sobre una paleta subyacente construida en torno a `#1b6685`, `#266484` y `#27b0be`. Detalle en §8.
3. **El sistema de botones y títulos usa sombras duras desplazadas** (`box-shadow: 10px 10px 0 #333333`) y posicionamiento absoluto con desplazamientos negativos de 215 px. Es la causa técnica concreta de la sensación de plantilla antigua que el rediseño debe eliminar. Detalle en §11.

---

# 1. Inventario de URLs

## 1.1 Navegación

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Inicio | `/` | navegación | Interna | Capturada | **Sí** | **Alta** — única página con contenido completo |
| Nosotros | `/nosotros/` | navegación · institucional | Interna | **[NO CAPTURADA]** | No | Alta |
| Servicios | `/nuestros-servicios/` | navegación · procedimientos | Interna | **[NO CAPTURADA]** | No | **Alta** — URL más enlazada de la home (5 enlaces) |
| Especialistas | `/especialistas/` | navegación · especialistas | Interna | **[NO CAPTURADA]** | No | Alta |
| Contacto | `/contacto/` | navegación · contacto | Interna | **[NO CAPTURADA]** | No | Media |
| Galería | `/galeria/` | navegación · galería | Interna | **[NO CAPTURADA]** | No | Alta |
| Medios de pago | `/medios-de-pago/` | navegación · financiación | Interna | **[NO CAPTURADA]** | No | Media |
| Valoración virtual | `https://api.whatsapp.com/send?phone=573147796424&text=...` | navegación · valoración | Externa | Verificada | Sí (en HTML) | **Alta** |

## 1.2 Procedimientos

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Procedimientos Corporales | `/procedimientos-corporales/` | procedimientos | Interna | **[NO CAPTURADA]** | No | **Alta** |
| Corporales | `/procedimientos-corporales/` | procedimientos · CTA | Interna | **[NO CAPTURADA]** | No | Alta |
| Procedimientos Faciales | `/procedimientos-faciales/` | procedimientos | Interna | **[NO CAPTURADA]** | No | **Alta** |
| Faciales | `/procedimientos-faciales/` | procedimientos · CTA | Interna | **[NO CAPTURADA]** | No | Alta |
| Belleza íntima | `/ginecologia-estetica/` | procedimientos | Interna | **[NO CAPTURADA]** | No | **Alta** |
| Conoce nuestros servicios | `/nuestros-servicios/` | procedimientos · CTA hero | Interna | **[NO CAPTURADA]** | No | Media |
| Descubre más | `/nuestros-servicios/` | procedimientos · CTA hero | Interna | **[NO CAPTURADA]** | No | Media |

Etiqueta y URL no coinciden en Belleza íntima (`/ginecologia-estetica/`): una denominación es comercial y la otra clínica. Para la demo se usará **"Belleza íntima"**, que es la etiqueta visible al usuario.

## 1.3 Especialistas

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Especialistas | `/especialistas/` | especialistas | Interna | **[NO CAPTURADA]** | No | **Alta** |

Única URL de especialistas. No hay páginas individuales ni fichas enlazadas desde la home.

## 1.4 Institucional

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Nosotros | `/nosotros/` | institucional | Interna | **[NO CAPTURADA]** | No | Alta |
| Trabaja con nosotros | `https://forms.gle/Kqgj8bBfUR8q4CkX7` | institucional · formulario | Externa | Verificada | Sí (en HTML) | Baja |
| `robots.txt` | `/robots.txt` | técnico | Interna | Existe (HTTP 200, 69 B) — sin copia local | No | Baja |

## 1.5 Contacto

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Contacto | `/contacto/` | contacto | Interna | **[NO CAPTURADA]** | No | Media |
| Buscador del sitio | `/` (`GET`, parámetro `s`) | técnico | Interna | Verificada | Sí | Nula — se elimina |
| Teléfono (604) 604 6233 | — | contacto | — | Texto plano, **sin enlace** | Sí | **Alta** — dato real |
| Celular 314 779 6424 | — | contacto | — | Texto plano, **sin enlace** | Sí | **Alta** — dato real |

## 1.6 Galería / Resultados

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Galería | `/galeria/` | galería | Interna | **[NO CAPTURADA]** | No | Alta |
| *(9 imágenes en lightbox)* | `…/wp-content/uploads/…jpg` | recurso multimedia | Interna | URL verificadas | No (solo referencia) | **Alta** — ver §3 |

## 1.7 Valoración

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Valoración virtual | `https://api.whatsapp.com/send?phone=573147796424&text=Hola,%20estoy%20interesada%20en%20una%20cita%20de%20valoraci%C3%B3n%20virtual.%20Gracias.` | valoración | Externa | Verificada | Sí | **Alta** |
| Botón flotante WhatsApp | Generado por Joinchat con `573147796424` | valoración | Externa | Verificada | Sí | **Alta** |
| Asesor en línea | `https://bit.ly/3HPF8qh` | valoración | Externa | **Destino [NO VERIFICADA]** | Sí (el enlace) | Media |
| Seguimiento de clics | `/wp-json/joinchat/v1/track-click` | técnico | Interna | Verificada | Sí | Nula |

**No existe página de valoración.** "Valoración virtual" figura en el menú como si lo fuera, pero es un enlace directo a WhatsApp.

## 1.8 Financiación

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Medios de pago | `/medios-de-pago/` | financiación | Interna | **[NO CAPTURADA]** | No | Media |
| Conoce más | `/medios-de-pago/` | financiación · CTA | Interna | **[NO CAPTURADA]** | No | Media |
| Servicrédito | — | financiación | — | Solo logo, **sin enlace** | No (solo URL de imagen) | **Alta** — logo usable |
| CFA | — | financiación | — | Solo logo, **sin enlace** | No (solo URL de imagen) | **Alta** — logo usable |
| 10 convenios | — | financiación · alianzas | — | Solo logos, **sin enlace** | No | Baja |

## 1.9 FAQ

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Preguntas frecuentes | `https://clinicanova.com.co/preguntas-frecuentes/` | FAQ | Interna | **[NO CAPTURADA]** | No | Media |

Único enlace del sitio con dominio **sin `www`**. Solo alcanzable desde el pie.

## 1.10 Legal

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Política de Tratamiento y Protección de Datos | `/2023/11/14/politica-de-tratamiento-y-proteccion-de-datos/` | legal | Interna | **[NO CAPTURADA]** | No | Media |
| PQRS-F | `https://forms.gle/MtaS5vaJcu5NWape9` | legal · formulario | Externa | Verificada | Sí | Baja |
| Satisfacción del Servicio | `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqFzPouOa99qhZtgNx0DA7PMjVDdzF-V1IqK_7HinOjbuOWg/formResponse` | legal · formulario | Externa | **ROTO** — apunta al endpoint de envío | Sí | Baja |

## 1.11 Redes sociales

| Texto | URL | Tipo | Int/Ext | Estado | Disponible localmente | Relevancia |
|---|---|---|---|---|---|---|
| Icono 1 del pie | **Ninguna** | redes sociales | — | **Imagen sin `href`** | No | Media |
| Icono 2 del pie | **Ninguna** | redes sociales | — | **Imagen sin `href`** | No | Media |

**No existe ni un solo enlace a redes sociales en toda la home.** Ver §10.5.

## 1.12 Servicios externos

| Servicio | URL / identificador | Tipo | Relevancia |
|---|---|---|---|
| Google Analytics 4 | `www.googletagmanager.com/gtag/js?id=G-7FQ2WF5JEG` — **carga por `http://`** | servicios externos | Baja |
| Google Ads | `AW-16453751151` · `googleadservices.com`, `google.com/pagead/1p-user-list/16453751151/` | servicios externos | Nula |
| Metricool | `tracker.metricool.com/app/resources/be.js` · hash `2997283e114c2c3051c8e2b2af279cdc` | servicios externos | Nula |
| Google Fonts | `fonts.gstatic.com` · `fonts.googleapis.com/css?family=Quicksand:...` | servicios externos | Baja |
| Font Awesome 4.7.0 | `maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css` | servicios externos | Nula |
| GTranslate | `/wp-content/plugins/gtranslate/js/popup.js` + banderas SVG | servicios externos | Nula |
| Bit.ly | `https://bit.ly/3HPF8qh` | servicios externos | Media |

## 1.13 Otros (endpoints técnicos)

`/feed/` · `/comments/feed/` · `/wp-json/` · `/wp-json/wp/v2/pages/71` · `/wp-json/oembed/1.0/embed` · `/xmlrpc.php` (**403**) · `/wp-admin/admin-ajax.php` — **relevancia nula**, desaparecen con WordPress.

## 1.14 Recuento

| Categoría | URL |
|---|---|
| Internas de página | **12** (1 capturada, 11 **[NO CAPTURADA]**) |
| Externas funcionales | 6 |
| Externas técnicas / seguimiento | 7 |
| Endpoints de WordPress | 7 |
| Recursos multimedia referenciados | **~36** |
| Redes sociales | **0** |

---

# 2. Mapa de la navegación actual

Verificación de la estructura propuesta en el encargo contra los datos reales de `/original`.

| Ruta esperada | ¿Verificada? | URL real confirmada | Ubicación del enlace |
|---|---|---|---|
| Inicio | **Verificada** | `/` | Menú principal, posición 1 |
| Nosotros | **Verificada** | `/nosotros/` | Menú principal, posición 2 |
| Servicios | **Verificada** | `/nuestros-servicios/` | Menú principal, posición 3 (con submenú) |
| → Procedimientos corporales | **Verificada** | `/procedimientos-corporales/` | Submenú 3.1 + botón en la home |
| → Procedimientos faciales | **Verificada** | `/procedimientos-faciales/` | Submenú 3.2 + botón en la home |
| → Belleza íntima | **Verificada** | `/ginecologia-estetica/` | Submenú 3.3 + botón en la home |
| Especialistas | **Verificada** | `/especialistas/` | Menú principal, posición 4 |
| Contacto | **Verificada** | `/contacto/` | Menú principal, posición 5 |
| Galería | **Verificada** | `/galeria/` | Menú **secundario** superior |
| Valoración virtual | **Verificada, con matiz** | No es página: enlace a `api.whatsapp.com` | Menú **secundario** superior |
| Medios de pago | **Verificada** | `/medios-de-pago/` | Menú **secundario** superior |
| Preguntas frecuentes | **Verificada, con matiz** | `clinicanova.com.co/preguntas-frecuentes/` — **sin `www`** | **Solo en el pie**, en ningún menú |

**Las 12 rutas quedan verificadas.** Ninguna queda como [NO VERIFICADA]. Dos matices importantes: "Valoración virtual" no es una página, y "Preguntas frecuentes" no está en ningún menú de navegación.

## 2.1 Estructura real: tres menús, no uno

| Menú | Selector | Entradas | Observación |
|---|---|---|---|
| Principal | `#top-menu` | Inicio, Nosotros, Servicios (+3), Especialistas, Contacto | El submenú es la única jerarquía de segundo nivel |
| Secundario superior | `#et-secondary-nav` | Galería, Valoración virtual, Medios de pago, selector de idioma | Barra superior, tipografía menor |
| Pie | `#menu-footerclinicanova` + bloques de widget | Trabaja con nosotros, Preguntas frecuentes, Satisfacción, PQRS-F, Política de datos | Enlaces dispersos en widgets sueltos |
| Móvil | `#mobile_menu` | Fusiona principal + secundario | Confirma que la separación es solo de escritorio |

**Problema de arquitectura confirmado:** Galería y Medios de pago —dos páginas de alto valor comercial— viven en la barra secundaria, visualmente subordinada. Preguntas frecuentes, contenido decisivo para quien evalúa un procedimiento, solo existe en el pie.

## 2.2 Navegación destino

Según `00-DIRECCION-PROYECTO.md` §6, se pasa de **3 menús y 13 entradas** a **1 menú de 6 entradas + CTA**:

`Inicio` · `Procedimientos` · `Especialistas` · `Resultados` · `La clínica` · `Tu proceso` · **[Agendar valoración]**

Este inventario confirma que **toda la estructura actual encaja en esos seis contenedores sin dejar contenido huérfano**.

---

# 3. Inventario de imágenes

Base común de todas las URL: `https://www.clinicanova.com.co/wp-content/uploads/`

**Ninguna imagen está descargada.** El único archivo de imagen físicamente presente en `/original` es `es.svg` (bandera de GTranslate). Todo lo demás son referencias verificadas. No se ha descargado nada en esta fase.

## 3.1 Hero — fondos a pantalla completa (hallazgo nuevo)

Estas dos imágenes **no aparecen en el HTML**: están declaradas solo como `background-image` en `et-core-unified-71.min.css`. Son las únicas fotografías de contexto a pantalla completa del sitio.

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 1 | `2023/11/cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-esteticos-1.jpg` | `cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-esteticos-1` | `.jpg` | Hero, diapositiva 2 (`.et_pb_slide_1`) | Fondo a sangre completa | **No declaradas** | **Hero** | **1** |
| 2 | `2023/11/cirugia-plastica-en-medellin-cirujanos-plasticos-en-colombia-clinica-nova-procedimientos-esteticos-1.jpg` | `cirugia-plastica-en-medellin-cirujanos-plasticos-en-colombia-clinica-nova-procedimientos-esteticos-1` | `.jpg` | Hero, diapositiva 3 (`.et_pb_slide_2`) | Fondo a sangre completa | **No declaradas** | **Hero** | **1** |

Sobre ambas se aplica una superposición turquesa `#27b0be` y una sombra de texto `0 0 0.3em #000000`. El contenido real de las fotografías es **[NO VERIFICADA]** — el nombre de archivo sugiere contexto clínico y equipo médico, pero no puede confirmarse sin descargarlas.

**Por qué son prioridad 1:** el hero de la demo necesita una imagen a sangre de alta calidad. Estas dos son las únicas candidatas reales del material existente, y al ser fondos de pantalla completa es probable que su resolución supere los 700 px de las demás.

## 3.2 Hero — marca

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 3 | `2023/12/Clinica-Nova_Logo-Blanco.png` | `Clinica-Nova_Logo-Blanco` | `.png` | Hero, diapositiva 1 | Logo negativo sobre vídeo | **8000×2925** | **Logo** | **1** |

Sirve como logo en blanco sobre fondo oscuro. Sus 8000 px de ancho son desproporcionados para web; en la demo se usará reescalado.

## 3.3 Procedimientos — imágenes de categoría

Formato vertical 2:3, con variante `200x300` disponible.

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 4 | `2023/12/cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-corporales.jpg` | `…-procedimientos-corporales` | `.jpg` | Nuestros servicios | Imagen de categoría Corporales | **400×600** | **Procedimiento** | **1** |
| 5 | `2023/12/cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-faciales.jpg` | `…-procedimientos-faciales` | `.jpg` | Nuestros servicios | Imagen de categoría Faciales | **400×600** | **Procedimiento** | **1** |
| 6 | `2023/12/cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-de-belleza-intima.jpg` | `…-procedimientos-de-belleza-intima` | `.jpg` | Nuestros servicios | Imagen de categoría Belleza íntima | **400×600** | **Procedimiento** | **1** |

**Son las tres imágenes más valiosas del inventario para la demo**: cubren exactamente las tres tarjetas de la sección Procedimientos de la home nueva, y su formato vertical encaja con una retícula editorial. Su limitación es la resolución.

## 3.4 Clínica / instalaciones — galería institucional

Formato 7:5, con variante `480x343`.

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 7 | `2023/12/cirujanos-plasticos-en-medellin-cirugia-plastica-y-estetica-colombia-clinica-nova.jpg` | id `wp-image-500` | `.jpg` | ¿Por qué Clínica Nova? | Galería, imagen 1 | **700×500** | **Clínica** / posible **Especialista** | **2** |
| 8 | `2023/11/clinica-nova-cirugia-plastica-cirugia-estetica-colombia.jpg` | id `wp-image-207` | `.jpg` | ¿Por qué Clínica Nova? | Galería, imagen 2 | **700×500** | **Clínica** | **2** |
| 9 | `2023/11/clinica-nova-cirugia-plastica-y-estetica-en-medellin.jpg` | id `wp-image-208` | `.jpg` | ¿Por qué Clínica Nova? | Galería, imagen 3 | **700×500** | **Clínica** | **2** |
| 10 | `2023/11/abdominoplastia-mamoplastia-mastopexia-cirugia-plastica-cirugia-estetica-medellin.jpg` | id `wp-image-293` | `.jpg` | ¿Por qué Clínica Nova? | Galería, imagen 4 | **700×500** | **Clínica** / **Procedimiento** | **2** |
| 11 | `2023/11/cirugia-plastica-en-colombia-clinica-nova-medellin.jpg` | id `wp-image-294` | `.jpg` | ¿Por qué Clínica Nova? | Galería, imagen 5 | **700×500** | **Clínica** | **2** |
| 12 | `2023/11/clinica-nova-cirugia-plastica-y-estetica-en-medellin-colombia.jpg` | id `wp-image-295` | `.jpg` | ¿Por qué Clínica Nova? | Galería, imagen 6 | **700×500** | **Clínica** | **2** |

La imagen 7 es la única cuyo nombre menciona explícitamente *"cirujanos plásticos"*, por lo que es la candidata más probable a contener fotografía del equipo. **[NO VERIFICADA]**.

## 3.5 Resultados — antes / después

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 13 | `2023/11/antes-y-despues-rinoplastia-cirugia-plastica-medellin-colombia.jpg` | id `wp-image-298` | `.jpg` | Galería de resultados | Antes/después — rinoplastia **[NO VERIFICADA]** | **700×500** | **Testimonio / Resultado** | **3** |
| 14 | `2023/11/antes-y-despues-abdominoplastia-lipoadbomino-liposuccion-cirugia-plastica-medellin-colombia.jpg` | id `wp-image-296` | `.jpg` | Galería de resultados | Antes/después — abdominoplastia/lipo **[NO VERIFICADA]** | **700×500** | **Testimonio / Resultado** | **3** |
| 15 | `2023/11/antes-y-despuesblefaroplastia-cirugia-plastica-medellin-colombia.jpg` | id `wp-image-297` | `.jpg` | Galería de resultados | Antes/después — blefaroplastia **[NO VERIFICADA]** | **700×500** | **Testimonio / Resultado** | **3** |

**Prioridad 3 deliberada.** Aunque son públicas y técnicamente reutilizables, son imágenes de pacientes reales. En una propuesta que se presentará a la propia clínica, mostrar sus fotos de pacientes sin saber el alcance del consentimiento es un riesgo innecesario y evitable. **La sección Resultados se diseñará con la estructura completa y placeholders**, demostrando el tratamiento visual sin exponer material sensible. Ver §12.3 y §13.

## 3.6 Financiación — logos de terceros

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 16 | `2023/11/logo-servicredito.png` | `logo-servicredito` | `.png` | Financiación | Logo de aliado financiero | **589×343** | **Logo** (tercero) | **2** |
| 17 | `2023/11/logo-cfa.png` | `logo-cfa` | `.png` | Financiación | Logo de aliado financiero | **337×150** | **Logo** (tercero) | **2** |

Variantes disponibles: `480x280` y `300x134`. Son **datos reales verificables** —dos aliados financieros concretos— y por eso son valiosos: permiten que la sección Financiación de la demo muestre información cierta en lugar de inventada.

## 3.7 Convenios — logos de terceros

Diez logos de **250×100** en `2023/11/`, sin enlace, sin `alt` y sobre fondo blanco.

| # | Archivo | Entidad deducida del nombre |
|---|---|---|
| 18 | `convenio-fodelsa-logo.jpg` | Fodelsa |
| 19 | `convenio-winsting-salem-logo.jpg` | Winston Salem *(errata en el archivo)* |
| 20 | `convenio-athletic-gym-logo.jpg` | Athletic Gym |
| 21 | `convenio-unica-ips-logo.jpg` | Única IPS |
| 22 | `convenio-bioreferencia-logo.jpg` | Bioreferencia |
| 23 | `covenio-escano-logo.jpg` | Escaño *(errata: "covenio")* |
| 24 | `convenio-hotel-los-recuerdos-logo.jpg` | Hotel Los Recuerdos |
| 25 | `convenio-dr-jorge-ivan-echavarria-logo.jpg` | Dr. Jorge Iván Echavarría |
| 26 | `convenio-los-reuerdos-hotel-2-logo.jpg` | Los Recuerdos Hotel 2 *(errata: "reuerdos")* |
| 27 | `convenio-sara-lopez-cejas-logo.jpg` | Sara López Cejas |

**Tipo:** Logo (terceros) · **Prioridad: 3.** JPG de 250×100 con fondo blanco, inservibles en un diseño premium. Nombres de entidad **[NO VERIFICADA]**.

## 3.8 Marca y pie

| # | URL | Archivo | Ext. | Sección | Función | Dimensiones | Tipo | Prioridad |
|---|---|---|---|---|---|---|---|---|
| 28 | `2023/10/Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` | `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA` | `.png` | Navbar | **Logo principal** | **1721×500** | **Logo** | **1** |
| 29 | `2023/11/Banner-Redes-logo.png` | `Banner-Redes-logo` | `.png` | Pie | Logo del pie | **4500×2859** | **Logo** | **2** |
| 30 | `2023/11/footer_Mesa-de-trabajo-1-copia-5.png` | `footer_Mesa-de-trabajo-1-copia-5` | `.png` | Pie | Icono, probablemente red social | **523×523** | **Icono** | **3** |
| 31 | `2023/11/footer_Mesa-de-trabajo-1-copia-6-1.png` | `footer_Mesa-de-trabajo-1-copia-6-1` | `.png` | Pie | Icono, probablemente red social | **523×523** | **Icono** | **3** |

Los iconos 30 y 31 están insertados **sin `<a>` y sin `alt`**: el elemento visual existe y el destino no. Su significado es **[NO VERIFICADA]**.

## 3.9 Favicons

Cuatro recortes del mismo isotipo, en `2023/10/`:

| # | Archivo | Dimensiones | Función |
|---|---|---|---|
| 32 | `cropped-ICONO-WEB_ICONO-WEB-CLINICA-NOVA-32x32.png` | 32×32 | Favicon |
| 33 | `cropped-ICONO-WEB_ICONO-WEB-CLINICA-NOVA-192x192.png` | 192×192 | Icono Android |
| 34 | `cropped-ICONO-WEB_ICONO-WEB-CLINICA-NOVA-180x180.png` | 180×180 | Apple touch icon |
| 35 | `cropped-ICONO-WEB_ICONO-WEB-CLINICA-NOVA-270x270.png` | 270×270 | MS Tile |

**Tipo:** Logo / Icono · **Prioridad: 2** — permiten que la demo tenga favicon de marca real.

## 3.10 Único archivo local

| # | Ruta | Dimensiones | Función | Prioridad |
|---|---|---|---|---|
| 36 | `original/NovaOri_files/es.svg` | 24×24 | Bandera de idioma de GTranslate | **Nula** — se elimina |

## 3.11 Resumen y lectura estratégica

| Clasificación | Cantidad | Prioridad dominante |
|---|---|---|
| Hero (fondos) | 2 | **1** |
| Procedimiento (categoría) | 3 | **1** |
| Clínica / instalaciones | 6 | 2 |
| Testimonio / Resultado | 3 | 3 |
| Logo — Clínica Nova | 3 + 4 favicons | **1–2** |
| Logo — terceros | 12 | 2–3 |
| Icono | 3 | 3 |
| **Total** | **~36** | — |

**Lo que esto permite:** hay material real y suficiente para el hero, las tres tarjetas de procedimientos, el bloque institucional, la financiación y toda la marca. Es decir, **la mayor parte de la home puede construirse con fotografía auténtica de Clínica Nova**, que es exactamente lo que hace creíble una demo de alta fidelidad.

**Lo que no permite:** fichas de especialista (no hay retratos), casos de resultados presentables (existen, pero se descartan por criterio), y cualquier composición que exija más de 700 px de ancho salvo los dos fondos del hero y los logos.

**Nota técnica:** la resolución máxima general es 700×500. Para una demo con imagen a sangre habrá que trabajar recortes cerrados, tratamientos de color o composiciones que no exijan ampliación. La ausencia de originales en alta se convierte así en una restricción de dirección de arte, no en un bloqueo.

---

# 4. Inventario de vídeos

| Recurso | URL | Formato | Ubicación | Función | Prioridad |
|---|---|---|---|---|---|
| **Vídeo del hero** | `2023/12/banner-web.mp4` | MP4 (H.264) | **Hero, diapositiva 1** — `.et_pb_section_video_bg` | Fondo en bucle | **1** |

**Marcado explícitamente: sí, existe un vídeo en el Hero.** Es el único recurso audiovisual de todo el sitio.

Características verificadas en el HTML:

| Atributo | Valor |
|---|---|
| Duración | **~4 s** (`mejs-duration` marca `00:04`) |
| Relación de aspecto | `data-ratio="2"` → 2:1 |
| Reproducción | `loop`, `autoplay`, `muted`, `playsinline` |
| `preload` | `none` |
| Reproductor | MediaElement.js (WordPress) |
| Superpuesto | Logo blanco + titular "Exaltamos tu belleza" |

**Valoración para la demo:** un bucle de 4 s tiende a percibirse como un parpadeo, y el reproductor de WordPress añade una capa innecesaria. Para la demo, la decisión recomendada es **usar el archivo como fondo con `<video>` nativo**, con transición suave y, si el material lo permite, ralentizado. Si el resultado no sostiene la calidad que pide *Clinical Luxury*, se sustituye por uno de los dos fondos fijos del §3.1. Ambas rutas son viables sin depender de nadie.

**Vídeos externos:** ninguno. El plugin *YouTube Feeds* está cargado pero **no hay ningún `iframe` ni embed** en la home. Si hay vídeo en páginas interiores es **[NO VERIFICADA]**.

---

# 5. Logos

## 5.1 Logo principal y variantes de Clínica Nova

| Variante | URL | Dimensiones | Dónde aparece | Prioridad |
|---|---|---|---|---|
| **Principal (color)** | `2023/10/Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` | 1721×500 | **Navbar**, enlazado a `/` · `alt="Clínica Nova"` — la única imagen del sitio con `alt` correcto | **1** |
| **Negativo (blanco)** | `2023/12/Clinica-Nova_Logo-Blanco.png` | 8000×2925 | **Hero**, diapositiva 1, sobre el vídeo | **1** |
| **Pie** | `2023/11/Banner-Redes-logo.png` | 4500×2859 | **Pie**, primera columna, mostrado a 275 px | 2 |
| **Isotipo** | `2023/10/cropped-ICONO-WEB_ICONO-WEB-CLINICA-NOVA-*.png` | 32 / 180 / 192 / 270 px | Favicon, Apple touch, MS Tile | 2 |

**Observación relevante:** los nombres de archivo delatan el origen. `Perfil-para-redes_...` y `Banner-Redes-logo` son piezas diseñadas **para redes sociales**, reutilizadas en la web. No hay ningún logo producido específicamente para uso web, ni versión vectorial, ni versión horizontal compacta para navbar fija.

**Consecuencia práctica:** las proporciones disponibles son 3.44:1 (navbar), 2.74:1 (hero) y 1.57:1 (pie). Ninguna es óptima para una barra de navegación fija y esbelta. En la demo habrá que **recortar y reencuadrar** a partir del PNG de mayor resolución.

**Formato:** todo PNG. **No hay SVG.** Para la demo se aceptará PNG reescalado; el vectorial se identifica en §13 como *placeholder necesario* en términos de calidad de reproducción.

## 5.2 Logos de terceros — financiación

| Entidad | URL | Dimensiones | Dónde aparece |
|---|---|---|---|
| **Servicrédito** | `2023/11/logo-servicredito.png` | 589×343 | Sección de financiación, columna derecha |
| **CFA** | `2023/11/logo-cfa.png` | 337×150 | Sección de financiación, columna derecha |

Ambos sin enlace. "CFA" solo consta como sigla dentro de la imagen; su razón social completa es **NO DISPONIBLE**.

## 5.3 Logos de terceros — convenios

Los 10 logos del §3.7, en un carrusel MetaSlider de 250×100. Sin enlaces, sin `alt`, sin texto explicativo, sobre fondo blanco y con tres erratas en los nombres de archivo.

## 5.4 Elementos de branding sin identificar

Los dos PNG de 523×523 del pie (`footer_Mesa-de-trabajo-1-copia-5/6-1`). El nombre *"Mesa de trabajo"* indica que son exportaciones directas de Illustrator sin renombrar, lo que sugiere que forman parte de un set gráfico de marca más amplio. Qué representan es **[NO VERIFICADA]**.

---

# 6. Iconos

El sitio mezcla **cuatro sistemas de iconos distintos**, ninguno coherente con los demás.

## 6.1 ETmodules — fuente de iconos de Divi

| Uso | Detalle |
|---|---|
| Flechas de botón | Atributo `data-icon="="` en los botones Corporales, Faciales y Belleza íntima, renderizado vía `content: attr(data-icon)` con `font-family: ETmodules` |
| Icono del botón "Asesor en línea" | `data-icon` con carácter privado, color `#FFFFFF`, en `::before` |
| Hamburguesa móvil | `.mobile_menu_bar::before/::after` |
| Lupa de búsqueda | `#et_search_icon` |
| Flechas de carrusel | `.et-pb-arrow-prev` / `.et-pb-arrow-next` |

**Decisión:** eliminar con el tema.

## 6.2 Font Awesome 4.7.0 — CDN externo

Cargado desde `maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css` por los plugins de Smash Balloon. **Versión de 2016.** No se ha detectado ningún icono de Font Awesome renderizado en la home: es peso muerto.

## 6.3 Joinchat — SVG en línea

Icono del globo de WhatsApp, con dos trazados (`joinchat__pa`, `joinchat__pb`) en un `viewBox="0 0 400 400"`. Es el **único icono del sitio en formato vectorial y de calidad**.

## 6.4 GTranslate — banderas SVG

Diez banderas en `/wp-content/plugins/gtranslate/flags/svg/{código}.svg`. Solo `es.svg` está presente localmente. Se eliminan con el traductor.

## 6.5 Iconos de contacto y redes

| Elemento | Estado |
|---|---|
| Iconos de red social | Dos **PNG de 523×523 sin `href` y sin `alt`** en el pie (§3.8) |
| Icono de teléfono | **No existe** |
| Icono de email | **No existe** |
| Icono de dirección / mapa | **No existe** |
| Icono de horario | **No existe** |

## 6.6 Conclusión

**No hay ningún set de iconos reutilizable.** Los únicos aprovechables conceptualmente son el SVG de WhatsApp de Joinchat y las flechas de navegación, y ambos se rediseñarán.

Esto encaja con `00-DIRECCION-PROYECTO.md`, que pide evitar el exceso de iconos: la demo usará **un set propio mínimo**, limitado a navegación, contacto y WhatsApp. Es una decisión que no depende de ningún recurso externo, así que **no bloquea nada**.

---

# 7. Tipografías

Extraído de las declaraciones `font-family` reales del CSS compilado. No se asume ninguna fuente no verificada.

## 7.1 Familias encontradas

| Familia | Cómo se carga | Uso real | Verificación |
|---|---|---|---|
| **Quicksand** | Google Fonts, incrustada por Divi como `@font-face` en línea apuntando a `fonts.gstatic.com` | **Tipografía principal de todo el sitio.** Pila declarada: `'Quicksand', Helvetica, Arial, Lucida, sans-serif` | **Verificada** |
| **Open Sans** | Declarada en el reset de Divi: `font-family: Open Sans, Arial, sans-serif` | Valor por defecto del `body` antes de que Quicksand lo sobrescriba. Fallback efectivo | **Verificada** |
| **ETmodules** | Fuente de iconos propia de Divi | Solo iconos, no texto | **Verificada** |
| `Arial, Baskerville, monospace` | Declaración aislada en el CSS de Divi | Uso residual, probablemente `<code>` o `<pre>`. No se ha observado en la home | **Verificada como declaración**, uso **[NO VERIFICADA]** |

**No se ha encontrado ninguna otra familia.** El sitio es, tipográficamente, monofamiliar: **Quicksand para todo**.

## 7.2 Pesos de Quicksand cargados

Declarados en el `@font-face` en línea, con `font-display: swap` y tres formatos por peso (`woff2`, `woff`, `ttf`):

| Peso | Valor | Cargado |
|---|---|---|
| Light | 300 | Sí |
| Regular | 400 | Sí |
| Medium | 500 | Sí |
| SemiBold | 600 | Sí |
| Bold | 700 | Sí |

**Cinco pesos, sin cursivas.** La URL de origen: `fonts.googleapis.com/css?family=Quicksand:300,regular,500,600,700&subset=latin,latin-ext&display=swap`.

## 7.3 Escala tipográfica encontrada

Valores declarados en el CSS compilado. Algunos provienen de distintos puntos de ruptura, por lo que **no representan una escala única**, sino el conjunto de declaraciones existentes:

| Elemento | Tamaños declarados |
|---|---|
| `.et_pb_slide_title` | **33px**, `font-weight: bold` |
| `h1` | **22px** |
| `h2` | **11px**, **13px** |
| `h3` | **16px** |
| `h5` | **11px** |
| `h6` | **10px**, **15px** |
| `body` | **17px** para párrafos de entrada |
| `.et_pb_slide_content` | **19px** |
| Botones 0 / 2 | **25px** / **22px** |
| Botón 4 | **23px** |

**Lo verificable:** los tamaños de encabezado se declaran en múltiples lugares con valores contradictorios, varios encabezados quedan **por debajo del tamaño del cuerpo de texto** (17px), y los botones llegan a ser mayores que el `h1`. No existe una escala tipográfica coherente.

## 7.4 Dirección para la demo

Según `00-DIRECCION-PROYECTO.md` §10: **Cormorant Garamond** (display) + **Manrope** (texto).

**Quicksand se elimina por completo.** Es una geométrica redondeada de carácter amable y ligeramente infantil, en las antípodas del registro editorial que pide *Clinical Luxury*. El cambio a una serif de contraste alto más una sans neutra es, probablemente, la decisión que producirá el salto perceptivo más grande de todo el rediseño.

**No hay ninguna dependencia externa:** ambas familias son de Google Fonts y se auto-alojarán en la implementación. Esta sección no bloquea nada.

---

# 8. Colores

Extraídos por frecuencia de aparición del CSS compilado (`et-core-unified-71.min.css`, `et-divi-dynamic-71.css`) y de los estilos en línea del HTML.

## 8.1 Colores realmente encontrados

| Color | Frecuencia | Uso verificado | Rol |
|---|---|---|---|
| `#1b6685` | **12** | **Fondo de la sección "¿Por qué Clínica Nova?"**, fondo de la tarjeta de testimonio 4, fondo de los bloques de título de sección | **Azul principal** |
| `#2EA3F2` | **11** | Azul por defecto de Divi. **No se ha observado renderizado** en la home | Residual del tema |
| `#ffffff` | **10** | Fondos de sección 2 y 6, texto sobre fondos oscuros, bloques de título | Blanco |
| `#266484` | **9** | **Color de todos los encabezados** `h1`–`h6`, y de `h6` | **Azul de encabezados** |
| `#176585` | 6 | Variante de azul, estados | Azul secundario |
| `#1e6686` | 6 | Color de `h4`, variante de azul | Azul secundario |
| `#27b0be` | **5** | **Superposición del hero**, fondo de la tarjeta de testimonio 3, fondo del botón "Asesor en línea" | **Turquesa de acento** |
| `#82c0c7` | 4 | Turquesa claro | Acento suave |
| `#00b0be` | 1 | Turquesa saturado | Acento |
| `#1e6664` | 1 | Verde azulado | Residual |
| `#333333` | 3 | **Color del texto del cuerpo**, y color de las **sombras duras** de los bloques de título | **Gris de texto** |
| `#f4f4f4` | 1 | **Fondo de la sección "Te asesoramos"** | Gris de fondo |
| `#f5f5f5` | 3 | Fondos y separadores | Gris de fondo |
| `#000000` | 2 | `text-shadow` de los títulos del hero | Negro |
| `rgba(230,228,229,0.28)` | — | **Fondo de la sección "Nuestros servicios"** | Gris cálido translúcido |
| `#008080` | **11 (en HTML)** | **Estilos en línea**: titulares "¡Luce tu figura soñada!", "Financia tu cirugía con", "¿Por qué Clínica Nova?" y párrafos | Teal aplicado a mano |
| `#333300` | 1 (en HTML) | Estilo en línea de un párrafo de "Te asesoramos" | Oliva, aparentemente accidental |
| `hsl(197,100%,26%)` | — | Variables de Joinchat: `--ch:197; --cs:100%; --cl:26%` | Azul del widget de WhatsApp |

Otros grises de interfaz encontrados una vez cada uno: `#e2e2e2`, `#fcfcfc`, `#e8e8e7`, `#e5e5e5`, `#1f1f1f`, `#f3f3f3`, `#bdbdbd`, `#0b0b0b`, `#e9e9e9`, `#222222`, `#e0e0e0`.

## 8.2 Paleta funcional reconstruida

Lo que **se puede afirmar** a partir de los datos:

| Rol | Color | Evidencia |
|---|---|---|
| **Principal** | `#1b6685` — azul medio | Fondo de sección completa y de bloques de título |
| **Encabezados** | `#266484` — azul | Declarado para `h1`–`h6` |
| **Acento** | `#27b0be` — turquesa | Superposición del hero, testimonios, botón de CTA |
| **Texto** | `#333333` — gris oscuro | Color del `body` |
| **Fondos** | `#FFFFFF`, `#f4f4f4`, `rgba(230,228,229,0.28)` | Fondos de sección alternados |
| **Teal en línea** | `#008080` | Aplicado a mano sobre titulares |

## 8.3 Interpretación (no dato)

Lo que sigue es **lectura de diseño, no información extraída**:

- La identidad cromática real es **azul clínico con acentos turquesa**. Es exactamente la estética que `00-DIRECCION-PROYECTO.md` pide evitar: "exceso de azul médico" y "estética de hospital genérico".
- Coexisten **al menos seis azules distintos** (`#1b6685`, `#266484`, `#176585`, `#1e6686`, `#2EA3F2`, `hsl(197,100%,26%)`) y **cuatro turquesas** (`#27b0be`, `#82c0c7`, `#00b0be`, `#008080`). No es una paleta: es una acumulación.
- El `#008080` de los titulares está aplicado mediante `<span style="color:...">` en el HTML, no desde el sistema de estilos. Es un parche manual sobre un tema que ya definía otro azul — síntoma de edición sin sistema.
- Las tarjetas de testimonio tienen **colores de fondo distintos entre sí** (`#27b0be` una, `#1b6685` otra, ninguno las otras dos), lo que rompe la coherencia de un mismo componente repetido.

## 8.4 Paleta destino

La aprobada en `00-DIRECCION-PROYECTO.md` §9:

| Rol | Valor |
|---|---|
| Primary | `#183C35` |
| Primary Dark | `#102D28` |
| Background | `#F5F2EC` |
| White | `#FFFFFF` |
| Muted | `#6F746F` |
| Sand | `#D9D0C2` |
| Accent | `#B7A47A` |

**Cero solapamiento con la paleta actual.** El giro de azul/turquesa sobre blanco a verde profundo sobre fondo cálido arenoso es el cambio más radical del rediseño, y no depende de ningún recurso externo. **No bloquea nada.**

**Implicación para las imágenes:** la fotografía existente fue producida para convivir con azules y turquesas. Sobre un fondo `#F5F2EC` con acentos `#B7A47A` podrá desentonar. En la demo será necesario un **tratamiento de color uniforme** —calidez, contraste, posible viraje o duotono discreto— para integrar el material fotográfico en la nueva paleta. Es una decisión de dirección de arte a tomar en la fase de diseño.

---

# 9. Copy y contenido

Todo lo que sigue está transcrito literalmente de la home. Se omiten los párrafos ya reproducidos íntegros en [A01 §2] y se prioriza lo reutilizable.

## 9.1 Titulares del hero

| Slide | Titular | Subtítulo | CTA | Reutilización |
|---|---|---|---|---|
| 1 | **"Exaltamos tu belleza"** | — | — | Descartar — genérico |
| 2 | **"Hacemos tus sueños una realidad"** | "Descubre tu belleza, encuentra tu confianza y **vive tu proceso junto a nuestros expertos**" | "Conoce nuestros servicios" | **Transformar** — la parte en negrita es el activo verbal más valioso del sitio |
| 3 | **"Resaltamos tu belleza"** | "Expertos en Cirugía Plástica y Estética. **Tu viaje comienza aquí**" | "Descubre más" | **Transformar** |

Los tres titulares dicen lo mismo ("exaltamos / resaltamos tu belleza") y compiten entre sí. Lo aprovechable no son los titulares, sino **dos fragmentos de los subtítulos**: *"vive tu proceso junto a nuestros expertos"* y *"tu viaje comienza aquí"*. Ambos conectan directamente con el concepto secundario aprobado, *"Tu transformación, acompañada por expertos"*.

## 9.2 Encabezados de sección

| Actual | Nuevo propuesto |
|---|---|
| "Nuestros servicios" | **Procedimientos** |
| "¿Por qué Clínica Nova?" | **Por qué Nova** |
| "Testimonios" | **Testimonios** |
| "Te asesoramos" | **CTA final** |
| "Nuestros convenios" | *Absorbido en Tu proceso* |

La secuencia narrativa actual —servicios → razones → prueba social → asesoría → alianzas— coincide en gran medida con la estructura de home aprobada. **La arquitectura editorial del sitio actual es más sólida que su ejecución visual.**

## 9.3 CTAs existentes

| Texto | Destino | Reutilización |
|---|---|---|
| "Conoce nuestros servicios" | `/nuestros-servicios/` | → "Explorar procedimientos" |
| "Descubre más" | `/nuestros-servicios/` | Descartar — vago |
| "Corporales" / "Faciales" / "Belleza íntima" | Categorías | **Mantener** como etiquetas |
| "Conoce más" | `/medios-de-pago/` | → "Conocer opciones de financiación" |
| "Asesor en línea" | `bit.ly/3HPF8qh` | → **"Agendar valoración"** |
| "Conversar" | Widget de WhatsApp | **Mantener** — buen registro |

**El sitio actual tiene seis CTA distintos apuntando a cinco destinos.** La dirección aprobada consolida todo en uno: **Agendar valoración**.

## 9.4 Frases de marca reutilizables

Las tres piezas de copy con mayor valor, en orden:

1. **"¡Tu transformación comienza con una simple conversación!"** — de la sección "Te asesoramos". Prácticamente idéntica al mensaje de CTA final ya definido en `00-DIRECCION-PROYECTO.md` §8/10 ("Tu transformación comienza con una conversación"). **Confirma que la dirección verbal aprobada nace del propio lenguaje de la clínica**, lo cual es un argumento fuerte en la presentación.
2. **"vive tu proceso junto a nuestros expertos"** — sostiene el concepto secundario.
3. **"Nuestro equipo de asesoras está listo para guiarte en el viaje hacia tu mejor versión. ¡Comunícate con nosotros hoy mismo para agendar tu cita de valoración personalizada!"** — la única descripción del proceso de contacto. Base para "Tu proceso", reduciendo el tono exclamativo.

## 9.5 Descripción institucional

La fuente más completa es el `<title>`, de 353 caracteres [A01 §2.6]. Lo verificable y usable:

| Dato | Valor |
|---|---|
| Actividad | "clínica de servicios especializados en **cirugía plástica, estética y reconstructiva**" |
| Ubicación | "**Envigado, Antioquia**" |
| Propuesta declarada | "ofrecer a cada uno de nuestros pacientes **bienestar, salud y belleza**" |

**Cuidado:** el mismo `<title>` afirma "tecnología de punta" y "altos estándares de calidad", y el bloque "¿Por qué Clínica Nova?" añade "resultados excepcionales que superan las expectativas", "equipo altamente calificado" y "tecnología de vanguardia". `00-DIRECCION-PROYECTO.md` §5 prohíbe expresamente este registro. **No se reutilizan.** La introducción de la demo se construirá sobre los hechos verificables: actividad, ubicación, sede, tres categorías, acompañamiento.

## 9.6 Testimonios

Cuatro testimonios reales, firmados con nombre de pila, sin fotografía. Transcritos íntegros en [A01 §5]. Para la demo:

| Firma | Uso |
|---|---|
| **Luisa** | Usable **corrigiendo la errata** ("manos tan mágicas **as** del cirujano" → "las"). Contiene "No duele ni un pelo": **recortar esa frase**, es una afirmación sobre dolor postoperatorio |
| **Diana** (recepción/enfermería) | **El más usable.** Habla del trato humano, sin afirmaciones clínicas — encaja con el eje "elegancia humana" |
| **Vanesa** | Usable |
| **Diana** (mamoplastia) | Usable **recortando** "elegí la mejor clínica" — superlativo prohibido por §5 |

**DISPONIBLE COMO REFERENCIA.** Son contenido auténtico y por tanto valioso para la demo, pero requieren edición ligera. La atribución se mantendrá tal cual (nombre de pila), que es como los publica hoy la propia clínica.

## 9.7 Categorías de servicio

| Etiqueta | URL | Estado |
|---|---|---|
| Corporales | `/procedimientos-corporales/` | **DISPONIBLE** — categoría confirmada |
| Faciales | `/procedimientos-faciales/` | **DISPONIBLE** — categoría confirmada |
| Belleza íntima | `/ginecologia-estetica/` | **DISPONIBLE** — categoría confirmada |

**Procedimientos individuales: NO DISPONIBLE.** Las menciones sueltas (abdominoplastia, mastopexia, mamoplastia de aumento, rinoplastia, blefaroplastia, liposucción) proceden de testimonios y nombres de archivo. Son **[NO VERIFICADA]** y **no constituyen catálogo** [A01 §3.2].

**Para la demo:** las tarjetas de categoría se construyen con datos reales. Los listados de procedimientos dentro de cada categoría se representan con **PLACEHOLDER NECESARIO**, marcado visualmente como `[CONTENIDO POR CONFIRMAR]`. Mostrar la estructura sin inventar nombres es, además, un argumento de rigor ante el cliente.

## 9.8 Financiación

| Dato | Estado |
|---|---|
| Existe financiación con dos aliados | **DISPONIBLE** |
| Servicrédito | **DISPONIBLE** — nombre y logo |
| CFA | **DISPONIBLE** — sigla y logo; razón social **NO DISPONIBLE** |
| "¡Luce tu figura soñada! / Financia tu cirugía con" | **DISPONIBLE COMO REFERENCIA** — reescribir el tono |
| Condiciones, plazos, tasas, requisitos, precios | **NO DISPONIBLE** |

## 9.9 Contacto

Todos los datos son reales y verificados [A01 §7]:

| Dato | Valor | Estado |
|---|---|---|
| Sede | NOVA Torre Médica, 2.º y 3.er piso | **DISPONIBLE** |
| Dirección | Cra. 48 # 32 B Sur 30, Envigado, Antioquia, Colombia | **DISPONIBLE** |
| Fijo | (604) 604 6233 — ext. 100 / 101 | **DISPONIBLE** |
| Celular / WhatsApp | 314 779 6424 · `573147796424` | **DISPONIBLE** |
| Email | — | **NO DISPONIBLE** |
| Horarios | — | **NO DISPONIBLE** → **PLACEHOLDER NECESARIO** |
| Mapa | — | **NO DISPONIBLE** — la dirección permite generar uno |

## 9.10 Mensajes de WhatsApp

Ambos verificados y **DISPONIBLES** tal cual:

- Menú: *"Hola, estoy interesada en una cita de valoración virtual. Gracias."*
- Widget: *"¡Hola! Quiero agendar mi cita de valoración."*
- Burbuja: *"¡Hola👋! Gracias por comunicarte con Clínica Nova. Cuéntanos en qué podemos ayudarte."*
- Botón: *"Conversar"*

Bien redactados y en el registro cálido que busca la marca. **Se conservan.**

## 9.11 Copyright

"© Clínica Nova · Todos los derechos reservados · **2023**" — **DISPONIBLE COMO REFERENCIA**, con el año actualizado en la demo.

## 9.12 Nombres propios

**Especialistas: NO DISPONIBLE.** Cero nombres [A01 §4].

El único nombre propio de todo el sitio es **"Dr. Jorge Iván Echavarría"**, y aparece como **convenio externo**, no como parte del equipo. **No se usará como especialista en la demo.**

---

# 10. Recursos externos

## 10.1 WhatsApp

| Elemento | Valor |
|---|---|
| Número | `573147796424` (+57 314 779 6424) |
| Enlace | `https://api.whatsapp.com/send?phone=573147796424&text=...` |
| Widget | Joinchat / Creame WhatsApp me 6.3.2 |
| Configuración | Posición derecha, retardo 1 s, aparece tras 2 vistas, mensaje a los 10 s, sin QR, sin WhatsApp Web |
| Seguimiento | `/wp-json/joinchat/v1/track-click` |

**Es el canal de conversión principal del sitio.** Se conserva en la demo como componente propio.

## 10.2 Google Forms

| Formulario | URL | Estado |
|---|---|---|
| Trabaja con nosotros | `https://forms.gle/Kqgj8bBfUR8q4CkX7` | Funcional · vigencia **[NO VERIFICADA]** |
| PQRS-F | `https://forms.gle/MtaS5vaJcu5NWape9` | Funcional · vigencia **[NO VERIFICADA]** |
| Satisfacción del Servicio | `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqFzPouOa99qhZtgNx0DA7PMjVDdzF-V1IqK_7HinOjbuOWg/formResponse` | **ROTO** — apunta a `/formResponse` en vez de `/viewform` |

En la demo se representan como enlaces del footer, manteniendo su función y **corrigiendo el roto**.

## 10.3 Google Maps

**No existe ninguna integración.** Ni `iframe`, ni script, ni enlace, ni coordenadas. La dirección es texto plano en el pie.

**Oportunidad:** con la dirección real (Cra. 48 # 32 B Sur 30, Envigado) se puede generar un mapa para la demo sin necesitar nada del cliente.

## 10.4 Google Analytics y publicidad

| Servicio | Identificador | Nota |
|---|---|---|
| Google Analytics 4 (vía MonsterInsights 11.1.2) | `G-7FQ2WF5JEG` | **Se carga por `http://`** — riesgo de contenido mixto |
| Google Ads (remarketing) | `AW-16453751151` | Confirma inversión publicitaria activa o reciente |
| Metricool | hash `2997283e114c2c3051c8e2b2af279cdc` | Herramienta de gestión de redes sociales |

Ninguno se replica en la demo. **Dato de valor para la presentación:** la presencia de Google Ads y Metricool indica que la clínica **ya invierte en captación digital**, lo que refuerza el argumento de que la web debe convertir mejor.

## 10.5 Redes sociales

| Plataforma | Enlace | Elemento visual |
|---|---|---|
| Instagram | **No** | Posible, sin `href` |
| Facebook | **No** | Posible, sin `href` |
| YouTube | **No** | No |
| TikTok | **No** | No |
| Google Business | **No** | No |

**Cero enlaces a redes sociales en toda la home**, pese a tener instalados **cuatro plugins de feed social** (Instagram, Facebook, YouTube, Reviews) y a que los propios logos se llaman "Perfil para redes" y "Banner Redes".

En la demo el footer incluirá iconos de redes **funcionales visualmente** con destino **PLACEHOLDER NECESARIO**.

## 10.6 Traductor

**GTranslate 3.1.1**, traducción automática a 10 idiomas (`ar`, `zh-CN`, `nl`, `en`, `fr`, `de`, `it`, `pt`, `ru`, `es`). Todos los enlaces del selector apuntan a `#`. **Se elimina:** traducir automáticamente contenido médico es un riesgo de precisión.

## 10.7 Vídeos externos

**Ninguno.** El plugin *YouTube Feeds* está cargado pero no hay ningún embed. El único vídeo es local (§4).

## 10.8 Fuentes externas

| Recurso | URL |
|---|---|
| Google Fonts — Quicksand | `fonts.gstatic.com` · `fonts.googleapis.com` |
| Font Awesome 4.7.0 | `maxcdn.bootstrapcdn.com` |

Ambos se eliminan: `next/font` auto-alojará Cormorant Garamond y Manrope.

## 10.9 Plugins de WordPress

Trece plugins identificados sobre WordPress 6.8.8 + Divi 4.27.3 [A01 §17]. Los que **tienen salida visible** en la home: MetaSlider, Joinchat, GTranslate. Los que **cargan sin renderizar nada**: Contact Form 7, Before & After Images for Divi, y los cuatro de Smash Balloon.

**Dato de valor para la presentación:** seis plugins descargan CSS y JavaScript en cada visita a la portada sin producir ningún resultado visible. Es un argumento de rendimiento concreto y medible a favor del rediseño.

## 10.10 Otros

`Salvattore`, `Magnific Popup`, `FitVids`, `jQuery Mobile`, `MediaElement.js`, `jQuery` + `jQuery Migrate`. Todo desaparece con WordPress.

---

# 11. Problemas y oportunidades

Solo elementos **comprobables** desde los archivos disponibles. El listado completo de 27 problemas está en [A01 §14 del documento de inventario de URLs] y [A01 §9.8, §17]. Aquí se recogen los **hallazgos nuevos de esta fase** y las oportunidades que abren.

## 11.1 Hallazgos nuevos: el sistema visual

| # | Problema verificado | Evidencia en CSS | Oportunidad |
|---|---|---|---|
| 1 | **Sombras duras desplazadas** | `box-shadow: 10px 10px 0px 0px #333333` en los bloques de título de sección (`et_pb_text_2/4/5/7`) y `10px 10px 0px 0px rgba(0,0,0,0.3)` en los botones 0/1/2 | Es la causa concreta del aspecto de plantilla antigua. La dirección aprobada pide evitar el exceso de sombras: eliminarlas produce un salto inmediato |
| 2 | **Posicionamiento absoluto frágil** | Los tres botones de categoría usan `position: relative; top: -215px` con desplazamientos laterales distintos (`left: 65px / 85px / 55px`) | Maquetación por desplazamiento manual, garantía de rotura en móvil. Una retícula real lo resuelve |
| 3 | **Bloques de título al 34 % de ancho** | `width: 34%` fijo en `et_pb_text_2/4/5/7` | Ancho arbitrario no responsivo |
| 4 | **Sombra de texto sobre el hero** | `text-shadow: 0em 0em 0.3em #000000` en `.et_pb_slide_description` | Parche para legibilidad sobre imagen. Se resuelve con gradientes o superposiciones controladas |
| 5 | **Mismo componente, colores distintos** | Testimonio 3 con fondo `#27b0be`, testimonio 4 con `#1b6685`, testimonios 1 y 2 sin fondo | Un sistema de componentes coherente lo elimina por diseño |
| 6 | **Escala tipográfica incoherente** | `h1` a 22px, `h2` a 11px y 13px, `h6` a 10px y 15px, botones a 22–25px, cuerpo a 17px | Varios encabezados por debajo del cuerpo de texto y botones mayores que el `h1`. Una escala modular resuelve la jerarquía |
| 7 | **Paleta acumulada, no diseñada** | Al menos **6 azules** y **4 turquesas** coexistiendo (§8.3) | Siete tokens de color bien definidos sustituyen a más de veinte valores dispersos |
| 8 | **Color aplicado en el HTML** | `#008080` en 11 estilos en línea; un `#333300` aparentemente accidental | Demuestra edición sin sistema. Los design tokens lo hacen imposible |
| 9 | **Imágenes de fondo invisibles en el HTML** | Los dos fondos del hero solo existen en el CSS compilado (§3.1) | Contenido crítico atrapado en CSS generado: imposible de gestionar, optimizar o dar `alt` |

## 11.2 Problemas ya documentados

Referencia, sin repetir el análisis:

| Ámbito | Resumen | Referencia |
|---|---|---|
| **Indexación** | Sitio en producción con `noindex, nofollow` | [A01 §0] |
| **Enlace roto** | "Satisfacción del Servicio" apunta a `/formResponse` | [A01 §15] |
| **Redes sin enlace** | Dos iconos en el pie sin `<a>` y sin `alt` | §10.5 |
| **URL inconsistente** | Preguntas frecuentes sin `www` | [A01 §1.2] |
| **Recurso HTTP** | Google Tag Manager por `http://` | §10.4 |
| **Copyright antiguo** | Congelado en 2023 | §9.11 |
| **Etiqueta ≠ URL** | "Belleza íntima" → `/ginecologia-estetica/` | §1.2 |
| **Legal como blog** | Política de datos en `/2023/11/14/...` | [A01 §1.2] |
| **`alt` vacíos** | Prácticamente todas las imágenes | [A01 §9.8] |
| **Sin consentimiento de cookies** | Tres sistemas de seguimiento sin banner | [A01 §17.4] |
| **Metadatos** | `description` vacío, sin Open Graph ni datos estructurados, `<title>` de 353 caracteres | [A01 §2.7] |
| **Peso muerto** | Seis plugins cargando sin renderizar | §10.9 |
| **Imágenes desproporcionadas** | Logo del hero a 8000×2925 px | §3.2 |
| **Arquitectura** | Tres menús; Galería y Medios de pago en la barra secundaria; FAQ solo en el pie | §2.1 |

## 11.3 Oportunidades de UX comprobables

| Oportunidad | Situación actual verificada |
|---|---|
| **CTA único** | Hoy hay 6 CTA distintos hacia 5 destinos (§9.3) |
| **Contacto accionable** | Ni teléfono ni dirección son clicables; sin email, horario ni mapa (§9.9) |
| **Navegación unificada** | De 3 menús y 13 entradas a 1 menú de 6 + CTA (§2.2) |
| **FAQ visible** | Hoy enterrada en el pie (§1.9) |
| **Hero con un solo mensaje** | Hoy 3 diapositivas en rotación automática que dicen lo mismo (§9.1) |
| **Prueba social enlazada** | 4 testimonios sin fuente citable, y cero enlaces a redes (§9.6, §10.5) |
| **Rendimiento** | jQuery + 13 plugins + Divi + CDN externo, frente a Next.js con imágenes optimizadas |
| **Accesibilidad** | `alt` vacíos, controles de carrusel como `<a href="#">`, dirección en un `<h6>` |

---

# 12. Recursos prioritarios para la demo

## PRIORIDAD 1 — Imprescindibles

Sin estos, la demo no resulta creíble como Clínica Nova.

| Recurso | Por qué |
|---|---|
| **Logo principal** `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` | Identidad. Sin él no es Clínica Nova |
| **Logo negativo** `Clinica-Nova_Logo-Blanco.png` | Imprescindible para navbar sobre hero oscuro y footer |
| **Los 2 fondos del hero** (§3.1) | Únicas fotografías a sangre completa disponibles. Material clave del hero |
| **Vídeo del hero** `banner-web.mp4` | Único recurso audiovisual. Aporta movimiento real de la clínica |
| **Las 3 imágenes de categoría** (§3.3) | Cubren exactamente las tres tarjetas de Procedimientos |
| **Las 3 categorías** (Corporales, Faciales, Belleza íntima) | Dato estructural confirmado |
| **Datos de contacto reales** (§9.9) | Sede, dirección, fijo con extensiones, celular |
| **WhatsApp + mensajes precargados** | CTA principal y canal de conversión real |
| **Los 4 testimonios** (con la edición de §9.6) | Prueba social auténtica |
| **Descripción institucional verificable** (§9.5) | Actividad, ubicación, sede |
| **Frases de marca** (§9.4) | Demuestran que la dirección verbal nace de la propia clínica |
| **Favicon** | Detalle que eleva la percepción de acabado |

## PRIORIDAD 2 — Recomendados

Mejoran significativamente la presentación.

| Recurso | Por qué |
|---|---|
| **Las 6 imágenes institucionales** (§3.4) | Alimentan Introducción, La clínica y Por qué Nova con fotografía real |
| **Logos de Servicrédito y CFA** | Permiten que Financiación muestre datos ciertos |
| **Logo del pie** `Banner-Redes-logo.png` | Variante de marca para el footer |
| **Mapa generado desde la dirección real** | Convierte el footer en algo accionable sin depender de nadie |
| **Copy de "Te asesoramos"** (§9.4) | Base directa del CTA final |
| **Paleta y tipografía actuales documentadas** | Material de la presentación: el antes y el después |
| **Captura de la home actual** | Comparativa visual, argumento más potente que cualquier explicación |

## PRIORIDAD 3 — Prescindibles

Se reemplazan con diseño propio sin pérdida.

| Recurso | Reemplazo |
|---|---|
| **Las 3 imágenes antes/después** | **Se descartan por criterio** (§3.5): son pacientes reales sin consentimiento verificable. La sección Resultados se diseña con estructura completa y placeholders |
| **Los 10 logos de convenio** | JPG de 250×100 con fondo blanco, tres con erratas. Si la sección se conserva, se rediseña |
| **Los 2 iconos del pie** | Sin `href`, sin `alt`, significado desconocido. Set de iconos propio |
| **Todos los iconos** (ETmodules, Font Awesome, banderas) | Set propio mínimo |
| **Quicksand** | Cormorant Garamond + Manrope |
| **Paleta azul/turquesa** | Paleta *Clinical Luxury* |
| **Bandera `es.svg`** | Se elimina con el traductor |
| **Sombras, botones y maquetación de Divi** | Sistema de diseño propio |
| **13 plugins y todo WordPress** | Next.js |

## 12.1 Nota práctica sobre el uso del material

El material es público y su uso en una propuesta privada dirigida a la propia clínica es coherente: se le muestra a Clínica Nova su propio contenido, mejor presentado.

Conviene distinguir dos escenarios, porque cambian el riesgo:

- **Presentación privada a la clínica:** sin problema para todo el material de prioridad 1 y 2.
- **Demo publicada en una URL accesible** (por ejemplo en Vercel): el logo, las fotos de instalaciones y los textos siguen siendo defendibles como maqueta, pero **las imágenes de pacientes no**. Si la demo se publica, conviene además `noindex` mientras sea una propuesta no aprobada.

Por eso las imágenes antes/después están en prioridad 3 pese a ser públicas: el coste de excluirlas es bajo (la sección se demuestra igual con placeholders) y el riesgo de incluirlas no es cero.

---

# 13. Contenido faltante

Clasificado por lo que permite hacer **hoy**, no por lo que habría que pedir.

## DISPONIBLE

Utilizable tal cual en la demo.

| Elemento | Fuente |
|---|---|
| Nombre, marca y logos (3 variantes + 4 favicons) | §5.1 |
| Actividad: cirugía plástica, estética y reconstructiva | §9.5 |
| Ubicación: Envigado, Antioquia | §9.5 |
| Sede: NOVA Torre Médica, 2.º y 3.er piso | §9.9 |
| Dirección completa | §9.9 |
| Teléfono fijo con extensiones | §9.9 |
| Celular y WhatsApp | §9.9, §10.1 |
| Mensajes precargados de WhatsApp | §9.10 |
| Las 3 categorías de procedimientos | §9.7 |
| 3 imágenes de categoría | §3.3 |
| 2 fondos de hero | §3.1 |
| Vídeo del hero | §4 |
| 6 imágenes institucionales | §3.4 |
| Servicrédito y CFA (nombre + logo) | §9.8 |
| 4 testimonios con nombre de pila | §9.6 |
| Frases de marca | §9.4 |
| Paleta y tipografía actuales | §7, §8 |
| Estructura de navegación completa | §2 |
| 12 URL internas verificadas | §1 |

## DISPONIBLE COMO REFERENCIA

Lo conocemos, pero hay que reorganizarlo o reescribirlo.

| Elemento | Qué hay que hacer |
|---|---|
| Titulares del hero (3) | Consolidar en un mensaje único desde la dirección verbal aprobada |
| "¿Por qué Clínica Nova?" | **Reescribir por completo**: contiene tres afirmaciones prohibidas por §5 |
| `<title>` de 353 caracteres | Extraer los hechos, redactar metadatos nuevos |
| "¡Luce tu figura soñada!" | Reescribir en registro sobrio |
| Los 4 testimonios | Corregir errata, recortar la mención al dolor y el superlativo |
| Los 6 CTA | Consolidar en **Agendar valoración** |
| Encabezados de sección | Renombrar al lenguaje nuevo |
| Estructura de la home | Reordenar según §8 de la dirección del proyecto |
| Los 10 convenios | Nombres con erratas; rediseñar o descartar |
| Copyright 2023 | Actualizar |
| Los 3 Google Forms | Conservar función, corregir el roto |

## NO DISPONIBLE

No existe en ninguna fuente consultable. **No se inventa.**

| Elemento | Detalle |
|---|---|
| **Especialistas** | Cero nombres, fotos, especialidades, registros y biografías |
| **Catálogo de procedimientos** | Ningún procedimiento confirmado en ninguna categoría |
| Contenido de 11 páginas interiores | **[NO CAPTURADA]** |
| Misión, visión, valores, historia | — |
| Razón social, NIT, habilitación sanitaria / REPS | — |
| Certificaciones y acreditaciones | — |
| Estadísticas institucionales | — |
| Email | — |
| Horarios de atención | — |
| URL de redes sociales | — |
| Condiciones de financiación, precios | — |
| Razón social completa de CFA | — |
| Preguntas frecuentes | Ni una pregunta |
| Consentimientos y documentos PDF | Ninguno encontrado |
| Destino de `bit.ly/3HPF8qh` | — |
| Logos vectoriales | Todo en PNG |
| Fotografía por encima de 700 px | Salvo hero y logos |

## PLACEHOLDER NECESARIO

Hay que representarlo visualmente sin dato real. Todos se marcarán como `[CONTENIDO POR CONFIRMAR]`.

| Elemento | Cómo representarlo |
|---|---|
| **Fichas de especialista** | Plantilla completa —retrato, nombre, especialidad, formación, procedimientos— con retrato en placeholder y campos marcados. Es la sección que más necesita demostrarse visualmente |
| **Listados de procedimientos** | Estructura de listado dentro de cada categoría, con nombres marcados |
| **Casos de resultados** | Comparador antes/después funcional con imágenes neutras |
| **Horarios** | Bloque de horario en el footer y en Contacto |
| **Email** | Campo de contacto en el footer |
| **Iconos de redes** | Iconos funcionales visualmente, destino pendiente |
| **Mapa** | Generado desde la dirección real |
| **Condiciones de financiación** | Estructura de tabla o pasos, cifras marcadas |
| **"Tu proceso" (5 pasos)** | Los 5 pasos de la dirección del proyecto §8/06, con descripciones marcadas |
| **Pilares de "Por qué Nova"** | Estructura de pilares, contenido marcado |
| **FAQ** | Acordeón con preguntas marcadas |
| **Textos legales** | Páginas maquetadas con contenido marcado |
| **Datos de registro sanitario** | Bloque en el footer |

**Criterio:** el placeholder debe ser **evidente como placeholder**. Una demo que marca con honestidad lo que falta comunica rigor; una que rellena con datos inventados destruye la credibilidad de toda la propuesta — y en contenido médico, además, es inaceptable.

---

# 14. Mapa de migración

## 14.1 Páginas y secciones

| Web actual | Nueva web | Acción |
|---|---|---|
| Inicio | Inicio | **Rediseñar** |
| Nosotros | **La clínica** | **Reubicar** + **Pendiente** (contenido) |
| Servicios | **Procedimientos** (índice) | **Fusionar** con las 3 categorías |
| Procedimientos Corporales | Procedimientos / Corporales | **Reubicar** + **Pendiente** (listado) |
| Procedimientos Faciales | Procedimientos / Faciales | **Reubicar** + **Pendiente** (listado) |
| Belleza íntima | Procedimientos / Belleza íntima | **Reubicar** + **Pendiente** (listado) |
| Especialistas | **Especialistas** | **Mantener** la sección + **Pendiente** (todo el contenido) |
| Galería | **Resultados** | **Reubicar** + **Rediseñar** |
| Contacto | **Footer + CTA** | **Fusionar** |
| Medios de pago | **Tu proceso / Financiación** | **Fusionar** + **Pendiente** (condiciones) |
| Valoración virtual | **Agendar valoración** | **Rediseñar** (de enlace a flujo propio) |
| Preguntas frecuentes | **Tu proceso / FAQ** | **Fusionar** + **Pendiente** |
| Política de datos (`/2023/11/14/...`) | Página legal con URL limpia | **Reubicar** + **Pendiente** |
| — | **Tu proceso** (5 pasos) | **Pendiente** (sección nueva) |

## 14.2 Secciones de la home

| Web actual | Nueva web | Acción |
|---|---|---|
| Hero: 3 diapositivas en rotación | 01 — Hero único y fijo | **Rediseñar** |
| — | 02 — Introducción a Clínica Nova | **Pendiente** |
| "Nuestros servicios" (3 tarjetas) | 03 — Procedimientos | **Mantener** categorías + **Rediseñar** |
| — | 04 — Especialistas | **Pendiente** |
| Galería antes/después | 05 — Resultados | **Reemplazar** por placeholders (§3.5) |
| — | 06 — Tu proceso | **Pendiente** |
| "¿Por qué Clínica Nova?" | 07 — Por qué Nova | **Reemplazar** el texto (afirmaciones prohibidas) |
| Testimonios (4) | 08 — Testimonios | **Mantener** contenido + **Rediseñar** |
| Financiación (Servicrédito, CFA) | 09 — Financiación | **Mantener** el hecho + **Rediseñar** el tono |
| "Te asesoramos" | 10 — CTA final | **Rediseñar** |
| Pie | 11 — Footer | **Rediseñar** |
| Galería institucional (6 fotos) | 02 / 07 — apoyo visual | **Reubicar** |
| Carrusel de 10 convenios | Tu proceso | **Pendiente** (rediseñar o eliminar) |

## 14.3 Navegación y mecanismos

| Web actual | Nueva web | Acción |
|---|---|---|
| Menú principal (5 + submenú) | Menú único de 6 + CTA | **Fusionar** |
| Menú secundario superior | Absorbido en menú y footer | **Fusionar** |
| Menú del pie | Footer — enlaces legales | **Mantener** + **Rediseñar** |
| Botón flotante de WhatsApp (Joinchat) | Componente propio | **Mantener** función + **Rediseñar** |
| Mensajes de WhatsApp | Los mismos textos | **Mantener** |
| "Asesor en línea" → `bit.ly` | Absorbido en el CTA | **Reemplazar** |
| Teléfono y dirección (texto plano) | Footer con `tel:` y mapa | **Mantener** dato + **Rediseñar** |
| Buscador | — | **Eliminar** |
| Selector de 10 idiomas | — | **Eliminar** |
| Iconos de redes sin `href` | Footer con iconos propios | **Reemplazar** + **Pendiente** (URL) |
| Google Forms (3) | Enlaces del footer | **Mantener** + corregir el roto |

## 14.4 Sistema visual y plataforma

| Web actual | Nueva web | Acción |
|---|---|---|
| Quicksand (5 pesos) | Cormorant Garamond + Manrope | **Reemplazar** |
| Paleta azul/turquesa (6 azules, 4 turquesas) | 7 tokens *Clinical Luxury* | **Reemplazar** |
| Sombras duras `10px 10px 0` | Sin sombras duras | **Eliminar** |
| Botones cuadrados de 22–25px con sombra | Sistema de botones propio | **Reemplazar** |
| 4 sistemas de iconos | Set propio mínimo | **Reemplazar** |
| Escala tipográfica incoherente | Escala modular | **Reemplazar** |
| Maquetación con `top: -215px` | Retícula responsiva | **Reemplazar** |
| WordPress 6.8.8 + Divi 4.27.3 + 13 plugins | Next.js + React en Vercel | **Reemplazar** |
| Google Analytics `G-7FQ2WF5JEG` | Analítica sin plugin, por HTTPS | **Mantener** servicio + **Rediseñar** |
| Google Ads, Metricool | — | **Pendiente** |
| Google Fonts + Font Awesome externos | Fuentes auto-alojadas, iconos propios | **Eliminar** |
| `/feed/`, `/wp-json/`, `xmlrpc.php` | — | **Eliminar** |
| `noindex, nofollow` | Indexación + sitemap + datos estructurados | **Pendiente** |
| Copyright 2023 | Año dinámico | **Rediseñar** |

---

# 15. Reutilización futura

El sistema debe poder aplicarse a otra clínica estética si Clínica Nova no contrata el proyecto. Eso exige separar desde el principio **estructura** de **contenido de marca**.

## 15.1 Principio de separación

Tres capas independientes:

| Capa | Contenido | Cambia entre clínicas |
|---|---|---|
| **Sistema** | Componentes, layouts, retícula, lógica de navegación, animaciones, accesibilidad | **No** |
| **Tokens** | Colores, tipografías, radios, sombras, espaciado, densidad | **Sí** — mediante configuración |
| **Contenido** | Textos, imágenes, procedimientos, especialistas, testimonios, datos de contacto | **Sí** — mediante datos |

**Regla:** ningún componente debe contener literales de marca. Ni "Clínica Nova", ni `#183C35`, ni "Cormorant Garamond", ni rutas de imagen fijas. Todo llega por props, tokens o datos.

## 15.2 Elementos que deben ser independientes del branding

| Elemento | Cómo debe abstraerse |
|---|---|
| **Componentes de UI** | Botones, tarjetas, acordeones, carruseles, comparador antes/después, formularios. Sin colores ni textos propios |
| **Navegación** | Generada desde una estructura de datos: etiquetas, rutas y jerarquía configurables. Nada de menús escritos a mano |
| **Procedimientos** | Colección de datos con categoría, nombre, descripción, imagen y especialistas asociados. Número variable por categoría sin tocar el diseño |
| **Especialistas** | Colección con nombre, especialidad, retrato, formación, registro y procedimientos. La plantilla debe funcionar con 1 o con 12 |
| **Testimonios** | Colección con texto, autor, procedimiento opcional y fuente opcional. Sin depender de que exista foto |
| **Resultados** | Colección de casos con imágenes, procedimiento y descripción. El comparador debe ser un componente reutilizable |
| **CTA** | Etiqueta y destino configurables. "Agendar valoración" es contenido, no código |
| **Financiación** | Colección de aliados con nombre, logo, descripción y enlace opcional. De 0 a N sin romper el diseño |
| **Formularios** | Esquema de campos configurable, con destino y validación desacoplados de la presentación |
| **Contacto** | Objeto único con sede, dirección, teléfonos, WhatsApp, email, horarios, coordenadas y redes. Consumido por footer, Contacto y datos estructurados |
| **Design tokens** | Fuente única de verdad para color, tipografía, espaciado, radios y sombras |
| **Contenido editorial** | Todos los textos fuera de los componentes |
| **Metadatos y SEO** | Títulos, descripciones, Open Graph y datos estructurados generados desde la configuración |
| **Marca** | Logo en varias variantes, favicon y nombre, referenciados desde un único punto |

## 15.3 Qué debe poder cambiarse sin reconstruir nada

| Cambio | Debe requerir |
|---|---|
| Logo | Sustituir archivos y una referencia |
| Nombre de la clínica | Un valor de configuración |
| Colores | Editar los tokens |
| Tipografías | Editar los tokens y la carga de fuentes |
| Fotografías | Sustituir archivos y referencias en los datos |
| Textos | Editar los archivos de contenido |
| Procedimientos | Editar la colección de datos |
| Especialistas | Editar la colección de datos |
| Testimonios, financiación, convenios | Editar sus colecciones |
| Datos de contacto y redes | Editar un único objeto |
| Estructura de navegación | Editar la estructura de datos |

## 15.4 Ventaja para esta propuesta

Esta arquitectura no es solo un seguro por si el proyecto no se cierra: **es la que resuelve el problema de la información que hoy falta**. Si Especialistas y Procedimientos se construyen como colecciones de datos con placeholders, la llegada del contenido real será rellenar datos, no rediseñar. Y si el contenido nunca llega, el sistema se reorienta a otro cliente sin trabajo perdido.

Es también un argumento de venta concreto: el sitio quedará mantenible y ampliable por la propia clínica, frente a los 13 plugins y la maquetación por desplazamientos manuales del sitio actual.

---

# Conclusión

## Qué sabemos

- **La arquitectura completa del sitio actual:** 12 URL internas verificadas una por una, 3 menús, y la confirmación de que todo encaja en los 6 contenedores de la arquitectura nueva sin dejar contenido huérfano.
- **Todo el contenido de la home**, incluidos titulares, CTA, 4 testimonios, texto institucional, financiación y datos de contacto.
- **El inventario completo de ~36 recursos multimedia** con sus URL exactas, dimensiones, ubicación y función — incluidos **dos fondos de hero que solo existían en el CSS**.
- **El sistema visual real del sitio:** Quicksand en 5 pesos, una paleta acumulada de 6 azules y 4 turquesas en torno a `#1b6685`, `#266484` y `#27b0be`, sombras duras `10px 10px 0`, escala tipográfica incoherente y maquetación por desplazamientos absolutos.
- **La plataforma:** WordPress 6.8.8, Divi 4.27.3 y 13 plugins, de los que 6 cargan sin renderizar nada.
- **Los datos de contacto reales** y el número de WhatsApp que sostiene la conversión.
- **Los problemas confirmados**, entre ellos el `noindex`, un enlace roto, iconos de redes sin destino y un recurso por HTTP.

## Qué podemos utilizar

Material suficiente para una demo de alta fidelidad **creíble como Clínica Nova**:

- Marca completa: 3 variantes de logo y 4 favicons.
- **11 fotografías reales** utilizables: 2 fondos de hero, 3 de categoría y 6 institucionales.
- El **vídeo del hero**, único recurso audiovisual.
- Las **3 categorías de procedimientos**, dato estructural confirmado.
- **Datos de contacto verificados**, con los que además se puede generar un mapa.
- Los **4 testimonios**, con edición ligera.
- Los **dos aliados financieros** con nombre y logo.
- Las **frases de marca** que, notablemente, ya contienen el mensaje de CTA aprobado — la dirección verbal nace del propio lenguaje de la clínica, lo que es un argumento fuerte en la presentación.

**En términos prácticos: la mayor parte de la home puede construirse con contenido auténtico.** Solo Especialistas y Resultados requieren representación completa con placeholders.

## Qué debemos representar con placeholders

- **Fichas de especialista** — la sección más necesitada de demostración visual y la que carece por completo de datos.
- **Listados de procedimientos** dentro de cada categoría.
- **Casos de resultados**, con comparador funcional e imágenes neutras (decisión de criterio, no de disponibilidad).
- **Horarios, email y URL de redes sociales.**
- **Condiciones de financiación.**
- **Los 5 pasos de "Tu proceso"** y los **pilares de "Por qué Nova"**.
- **FAQ y textos legales.**
- **Datos de registro sanitario.**

Todos marcados de forma inequívoca como `[CONTENIDO POR CONFIRMAR]`. Un placeholder honesto comunica rigor; un dato inventado destruye la propuesta, y en contenido médico es inaceptable.

## Qué debemos investigar después

Sin bloquear nada, y por orden de utilidad:

1. **Descargar y examinar los 11 recursos fotográficos de prioridad 1 y 2**, para conocer su resolución y contenido real. Es lo único que condiciona decisiones de dirección de arte, especialmente los dos fondos del hero, cuyas dimensiones no están declaradas.
2. **Verificar la resolución real disponible** más allá de los tamaños declarados en el HTML.
3. **Comprobar el vídeo del hero**: si 4 segundos sostienen un fondo o conviene sustituirlo por imagen fija.
4. **Consultar las páginas interiores en el sitio público** cuando sea posible, empezando por `/especialistas/`, las tres de procedimientos y `/nosotros/`. El `noindex` frenó al rastreador, no impide la consulta directa.
5. **Buscar los perfiles de redes sociales** de la clínica, que muy probablemente existen aunque la web no los enlace.
6. **Resolver el destino de `bit.ly/3HPF8qh`.**
7. **Definir el tratamiento de color de la fotografía** para integrarla en la paleta *Clinical Luxury*: la existente fue producida para convivir con azules y turquesas.

---

## Nota de método

- `/original` no ha sido modificada, renombrada ni reducida. Solo se ha leído.
- No se ha programado, ni creado componentes, ni instalado dependencias, ni iniciado el proyecto Next.js.
- No se ha descargado ninguna imagen ni vídeo. Solo se ha documentado su ubicación.
- No se ha repetido la auditoría de `01-AUDITORIA-CONTENIDO.md`; se cita como **[A01 §n]**.
- No se ha inventado ningún dato factual. Colores, tipografías, dimensiones y URL provienen de extracciones verificables del HTML y del CSS de `/original`.
- Cuando un dato no está disponible se indica con **NO DISPONIBLE**, **[NO VERIFICADA]** o **[NO CAPTURADA]**.
- En §8.3 se distingue explícitamente entre los colores encontrados y su interpretación de diseño.

**El proyecto no queda bloqueado por información faltante.** Con lo inventariado aquí se puede construir la demo de alta fidelidad completa.
