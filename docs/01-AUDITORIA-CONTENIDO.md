# 01 · Auditoría de contenido — Clínica Nova

**Proyecto:** Rediseño web Clínica Nova
**Dirección visual aprobada:** Clinical Luxury — *Precisión médica. Elegancia humana.*
**Fuente auditada:** carpeta `/original` (copias estáticas de referencia)
**Estado:** auditoría de contenido — sin desarrollo, sin dependencias, sin componentes
**Fecha de captura del material original:** 15 de agosto de 2026 (según `hts-log.txt`)

> `/original` no ha sido modificada. Este documento sólo la lee.

---

## 0. Resumen ejecutivo

Tres hallazgos condicionan todo el trabajo posterior:

**1. Sólo existe la página de inicio.** La carpeta `/original` contiene tres copias del *mismo* documento: la home. Ninguna página interior (Nosotros, Servicios, Especialistas, Contacto, Galería, Medios de pago, Preguntas frecuentes) fue capturada. La arquitectura completa de la web actual se conoce únicamente por los enlaces del menú, no por su contenido.

**2. La captura se detuvo por una etiqueta `noindex, nofollow`.** El log de HTTrack registra literalmente `Warning: Link https://www.clinicanova.com.co/ not scanned (follow robots meta tag)`, y ambas copias del HTML contienen `<meta name="robots" content="noindex, nofollow">`. Esto significa dos cosas: que el rastreador se detuvo tras la primera página, y que **el sitio en producción está actualmente excluido de los motores de búsqueda**. Es un problema de negocio, no sólo de captura, y debe confirmarse con el cliente si es intencional.

**3. No hay un solo archivo de imagen o vídeo real en `/original`.** El único recurso gráfico presente es `es.svg`, la bandera del traductor GTranslate. Todas las fotografías, logos, el vídeo del hero y los favicons existen sólo como *referencias* (URL) dentro del HTML. Para el rediseño hay que solicitar los originales al cliente o descargarlos del sitio en vivo.

**Consecuencia práctica:** esta auditoría documenta con precisión la home y el mapa de navegación, pero **el 80 % del contenido de la web actual sigue sin auditar**. La sección 18 lista el material que hay que pedir antes de poder escribir el documento de arquitectura de contenido.

---

## 1. Páginas encontradas

### 1.1 Páginas efectivamente presentes en `/original`

| # | Archivo | Qué es | Reutilizable | Requiere validación | Decisión |
|---|---|---|---|---|---|
| 1 | `original/NovaOri.html` | Home guardada desde el navegador ("Guardar página como"), con recursos en `NovaOri_files/`. **Es la copia más completa y la fuente principal de esta auditoría.** URL de origen: `https://www.clinicanova.com.co/?utm_source=chatgpt.com` | Sí, como referencia de contenido | No | Mantener como referencia · No convertir |
| 2 | `original/original/Clinica Nova Original/www.clinicanova.com.co/index.html` | La misma home, capturada por HTTrack. Su valor añadido: conserva las **URL absolutas y reales** de todos los recursos (`wp-content/uploads/...`), lo que la convierte en el mapa para recuperar los archivos originales | Sí, como índice de recursos | No | Mantener como referencia · No convertir |
| 3 | `original/original/index.html` | Página índice generada por HTTrack ("List of available projects"). Contenido genérico del programa, nada de Clínica Nova | No | No | Ignorar |
| 4 | `original/original/Clinica Nova Original/index.html` | Redirección interna de HTTrack hacia la copia del sitio | No | No | Ignorar |
| 5 | `original/original/Clinica Nova Original/www.clinicanova.com.co/xmlrpc.html` | Captura de un error HTTP 403 al intentar acceder a `xmlrpc.php`. Sin contenido | No | No | Ignorar |

Archivos de control de la captura, sin contenido editorial: `hts-log.txt`, `hts-cache/new.txt`, `hts-cache/new.lst`, `hts-cache/doit.log`, `hts-cache/readme.txt`, `hts-cache/winprofile.ini`.

### 1.2 Páginas que existen en el sitio real pero NO están en `/original`

Todas se conocen sólo por su enlace en el menú o el pie. **Su contenido es desconocido y debe solicitarse.**

| Página | URL | Ubicación del enlace | Destino en la nueva arquitectura |
|---|---|---|---|
| Nosotros | `/nosotros/` | Menú principal | → **La clínica** |
| Servicios | `/nuestros-servicios/` | Menú principal (padre) | → **Procedimientos** (índice) |
| Procedimientos Corporales | `/procedimientos-corporales/` | Submenú Servicios | → **Procedimientos** (categoría) |
| Procedimientos Faciales | `/procedimientos-faciales/` | Submenú Servicios | → **Procedimientos** (categoría) |
| Belleza íntima | `/ginecologia-estetica/` | Submenú Servicios | → **Procedimientos** (categoría) |
| Especialistas | `/especialistas/` | Menú principal | → **Especialistas** |
| Contacto | `/contacto/` | Menú principal | → **Footer + CTA** |
| Galería | `/galeria/` | Menú secundario | → **Resultados** |
| Medios de pago | `/medios-de-pago/` | Menú secundario | → **Tu proceso / Financiación** |
| Preguntas frecuentes | `https://clinicanova.com.co/preguntas-frecuentes/` | Pie de página | → **Tu proceso** (FAQ) — decisión pendiente |
| Política de Tratamiento y Protección de Datos | `/2023/11/14/politica-de-tratamiento-y-proteccion-de-datos/` | Menú del pie | → Página legal |

Dos observaciones sobre estos enlaces:

- **Preguntas frecuentes** apunta a `clinicanova.com.co` **sin `www`**, mientras el resto del sitio usa `www.`. Es una inconsistencia de dominio que puede provocar un salto de redirección o un enlace roto.
- **Política de datos** está publicada como una *entrada de blog* fechada (`/2023/11/14/...`), no como página. En el rediseño debe ser una página legal estable con URL limpia.

### 1.3 Endpoints técnicos detectados (no son páginas de contenido)

`/feed/`, `/comments/feed/`, `/wp-json/`, `/xmlrpc.php` (responde 403), `/wp-admin/admin-ajax.php`. **Eliminar** todos: son propios de WordPress y no tienen equivalente en Next.js.

---

## 2. Contenido reutilizable

Todo el texto de esta sección está transcrito literalmente de la home. La columna "Decisión" indica el tratamiento propuesto para *Clinical Luxury*.

### 2.1 Hero (carrusel de 3 diapositivas, autoplay 7 s)

| Slide | Contenido literal | Decisión |
|---|---|---|
| 1 | **"Exaltamos tu belleza"** — sobre vídeo de fondo, con el logo blanco superpuesto. Sin CTA | Rediseñar |
| 2 | **"Hacemos tus sueños una realidad"** / *"Descubre tu belleza, encuentra tu confianza y vive tu proceso junto a nuestros expertos"* / CTA: "Conoce nuestros servicios" | Rediseñar — la subida de línea es la más cercana al concepto de marca |
| 3 | **"Resaltamos tu belleza"** / *"Expertos en Cirugía Plástica y Estética. Tu viaje comienza aquí"* / CTA: "Descubre más" | Rediseñar |

**Valoración:** las tres diapositivas dicen esencialmente lo mismo ("exaltamos / resaltamos tu belleza") y compiten entre sí. El carrusel automático es además un patrón que la nueva dirección debe evitar. **Recomendación:** un hero único y fijo. El material aprovechable es la frase *"vive tu proceso junto a nuestros expertos"*, que conecta directamente con el concepto de marca **"Tu transformación, acompañada por expertos."** Copy final: [CONTENIDO POR CONFIRMAR].

### 2.2 Texto institucional — "¿Por qué Clínica Nova?"

> "En Clínica Nova, nos dedicamos a transformar vidas a través de procedimientos estéticos. Nuestra pasión radica en lograr resultados excepcionales que superan las expectativas. Con un equipo de cirujanos altamente calificado y tecnología de vanguardia, te ofrecemos una experiencia única para descubrir tu mejor versión."

- **Dónde:** home, sección "¿Por qué Clínica Nova?"
- **Reutilizable:** parcialmente, como base editorial
- **Requiere validación:** **sí, con prioridad alta.** Contiene tres afirmaciones no verificables — *"resultados excepcionales que superan las expectativas"*, *"equipo altamente calificado"* y *"tecnología de vanguardia"*. En publicidad de servicios de salud en Colombia este tipo de promesa está sujeta a restricción, y ninguna está respaldada por datos en la web actual
- **Decisión:** **rediseñar el mensaje.** El sitio nuevo debe sostener la sección "Por qué Nova" sobre hechos verificables (equipo con nombre y registro, sede, procedimientos que realmente se ofrecen) en lugar de superlativos. Hechos concretos: [CONTENIDO POR CONFIRMAR]

### 2.3 Bloque de asesoría — "Te asesoramos"

> "¡Tu transformación comienza con una simple conversación!"
> "Nuestro equipo de asesoras está listo para guiarte en el viaje hacia tu mejor versión. ¡Comunícate con nosotros hoy mismo para agendar tu cita de valoración personalizada!"
> CTA: "Asesor en línea" → `https://bit.ly/3HPF8qh`

- **Reutilizable:** sí, es el texto más alineado con la marca de toda la home
- **Requiere validación:** el destino del enlace acortado (ver §13)
- **Decisión:** **mantener el mensaje, rediseñar la ejecución.** *"Tu transformación comienza con una simple conversación"* funciona muy bien como CTA final del nuevo home. El botón debe pasar de "Asesor en línea" al CTA principal aprobado: **"Agendar valoración"**

### 2.4 Bloque de financiación

> "¡Luce tu figura soñada!"
> "Financia tu cirugía con"
> CTA: "Conoce más" → `/medios-de-pago/`
> Logos: Servicrédito, CFA

- **Decisión:** **mantener el hecho** (existe financiación con dos aliados), **rediseñar el tono.** "¡Luce tu figura soñada!" es lenguaje promocional que choca con *Clinical Luxury* → tratar como sección "Financiación" sobria dentro de **Tu proceso**. Ver §8

### 2.5 Encabezados de sección reutilizables como estructura

`Nuestros servicios` · `¿Por qué Clínica Nova?` · `Testimonios` · `Te asesoramos` · `Nuestros convenios`

- **Decisión:** conservar el *esqueleto* narrativo (servicios → razones → prueba social → asesoría → alianzas), que coincide en gran parte con la propuesta de home aprobada. Renombrar los títulos al lenguaje nuevo: "Procedimientos", "Por qué Nova", "Testimonios", "Tu proceso"

### 2.6 Título de la página (`<title>`)

> "Clínica Nova | Somos una clínica de servicios especializados en cirugía plástica, estética y reconstructiva ubicados en Envigado, Antioquia. Nos dedicamos a ofrecer a cada uno de nuestros pacientes bienestar, salud y belleza a través de procedimientos soportados con tecnología de punta, altos estándares de calidad y personal comprometido y competente."

- **Reutilizable:** **el contenido sí, el formato no.** Son 353 caracteres en una etiqueta que debería tener ~60. Pero es la **descripción institucional más completa de todo el material disponible**: define la clínica como *"servicios especializados en cirugía plástica, estética y reconstructiva"* y sitúa la sede en *"Envigado, Antioquia"*
- **Decisión:** **rediseñar.** Extraer la definición como texto institucional de "La clínica" y escribir un `<title>` corto nuevo. Las afirmaciones *"tecnología de punta"* y *"altos estándares de calidad"* requieren la misma validación que §2.2

### 2.7 Metadatos ausentes o problemáticos

| Elemento | Estado actual | Decisión |
|---|---|---|
| `<meta name="description">` | **Vacío** | Redactar en el rediseño |
| `<meta name="keywords">` | Vacío | Eliminar (obsoleto) |
| `<meta name="robots">` | **`noindex, nofollow`** | **Corregir — bloquea la indexación del sitio** |
| Open Graph / Twitter Cards | **No existen** | Crear |
| `<link rel="canonical">` | `https://www.clinicanova.com.co/` | Mantener el criterio |
| Datos estructurados (Schema.org) | **No existen** | Crear — `MedicalClinic` / `MedicalBusiness` con datos verificados |
| Idioma declarado | `es-CO` | Mantener |

---

## 3. Procedimientos encontrados

### 3.1 Categorías (las tres únicas confirmadas)

| Categoría | Enlace | Imagen asociada | Decisión |
|---|---|---|---|
| **Corporales** | `/procedimientos-corporales/` | `cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-corporales.jpg` (400×600) | Mantener como categoría · Rediseñar presentación |
| **Faciales** | `/procedimientos-faciales/` | `cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-faciales.jpg` (400×600) | Mantener como categoría · Rediseñar presentación |
| **Belleza íntima** | `/ginecologia-estetica/` | `cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-de-belleza-intima.jpg` (400×600) | Mantener como categoría · Rediseñar presentación · Revisar el desajuste entre etiqueta ("Belleza íntima") y URL ("ginecologia-estetica") |

### 3.2 Procedimientos individuales

**No hay ningún listado de procedimientos en la home.** Los nombres que aparecen a continuación se han deducido de los testimonios y de los nombres de archivo de las imágenes. **No constituyen un catálogo de servicios** y no deben publicarse como tal sin confirmación.

| Procedimiento | Dónde aparece | Naturaleza de la evidencia |
|---|---|---|
| Mastopexia | Testimonio de "Luisa" | Mención de una paciente |
| Abdominoplastia | Testimonio de "Luisa"; nombres de archivo | Mención de una paciente |
| Mamoplastia de aumento | Testimonio de "Diana" | Mención de una paciente |
| Rinoplastia | Nombre de archivo de imagen antes/después | Nombre de archivo |
| Blefaroplastia | Nombre de archivo de imagen antes/después | Nombre de archivo |
| Liposucción / lipoabdominoplastia | Nombre de archivo de imagen antes/después | Nombre de archivo |

- **Reutilizable:** **no como catálogo.** Sólo como pista para preguntarle al cliente
- **Requiere validación:** **sí, absoluta**
- **Decisión:** el catálogo real de procedimientos es **[CONTENIDO POR CONFIRMAR]**. Debe provenir de las páginas `/procedimientos-corporales/`, `/procedimientos-faciales/` y `/ginecologia-estetica/`, que no están en `/original`. Sin ese material no puede construirse la sección **Procedimientos** de la nueva arquitectura

---

## 4. Especialistas encontrados

**Ninguno.**

- La home enlaza a `/especialistas/` desde el menú, pero **no muestra ni un solo nombre, foto, especialidad, registro profesional ni biografía**
- La única referencia al equipo es genérica: *"un equipo de cirujanos altamente calificado"* (§2.2) y *"nuestro equipo de asesoras"* (§2.3)
- Aparece un nombre propio en el carrusel de convenios — **"Dr. Jorge Iván Echavarría"** (archivo `convenio-dr-jorge-ivan-echavarria-logo.jpg`) — pero está clasificado como **convenio externo, no como parte del equipo**. No debe presentarse como especialista de la clínica sin confirmación explícita

**Estado:** **[CONTENIDO POR CONFIRMAR]** — nombres, especialidades, número de registro médico, formación, fotografías y biografías.

**Decisión:** la sección **Especialistas** es un pilar de la nueva arquitectura y del concepto *"Tu transformación, acompañada por expertos"*, pero **no existe hoy ni un dato para construirla**. Es el bloqueo de contenido más grave del proyecto. No se inventará ningún especialista.

---

## 5. Testimonios encontrados

Cuatro testimonios, todos en la home, con nombre de pila únicamente y sin fotografía.

| # | Texto literal | Firma |
|---|---|---|
| 1 | "Yo me hice la mastopexía y la abdominoplastia. Muy buenos, recomendadísimos. No duele ni un pelo, qué manos tan mágicas as del cirujano". | — Luisa |
| 2 | "Solo tengo palabras de agradecimiento a todos ustedes. Las niñas de recepción, de admisiones, las enfermeras, ni se diga. Me quedo corta de palabras". | — Diana |
| 3 | "Yo me operé hace un año y me fue súper bien. En la Clínica son súper pendientes y la atención es divina. Súper recomendada". | — Vanesa |
| 4 | "Totalmente recomendada. Ya hace casi 2 meses me hice mi cirugía de mamoplastia de aumento y me dejó muy contenta saber que elegí la mejor clínica". | — Diana |

**Observaciones sobre el estado del texto:**

- El testimonio 1 contiene una errata evidente: *"qué manos tan mágicas **as** del cirujano"* (debería ser "las")
- *"No duele ni un pelo"* es una afirmación sobre el dolor postoperatorio. Aunque provenga de una paciente, publicarla de forma destacada puede leerse como una promesa clínica implícita
- Dos testimonios están firmados por "Diana" — puede ser la misma persona o dos distintas
- El testimonio 3 arrastra un párrafo vacío en el HTML original

**Reutilizables:** sí, con reservas.
**Requieren validación:** **sí** — origen, consentimiento de publicación y criterio legal sobre la mención al dolor.
**Decisión:** **rediseñar.** Corregir la errata, verificar el consentimiento y evaluar con el cliente si los testimonios llegan de Google Reviews (el sitio tiene instalado el plugin *Reviews Feed*, ver §17), en cuyo caso convendría citarlos con su fuente real en lugar de transcribirlos a mano.

---

## 6. Información institucional

| Dato | Valor encontrado | Dónde | Validación | Decisión |
|---|---|---|---|---|
| Nombre | **Clínica Nova** | `<title>`, logo, pie | No | Mantener |
| Definición de la actividad | "Clínica de servicios especializados en cirugía plástica, estética y reconstructiva" | `<title>` | Confirmar redacción | Mantener el hecho · Reescribir |
| Ubicación | Envigado, Antioquia, Colombia | `<title>`, pie | No | Mantener |
| Sede | **NOVA Torre Médica**, 2.º y 3.er piso | Pie | No | Mantener — es un activo diferencial infrautilizado |
| Aviso de copyright | "© Clínica Nova · Todos los derechos reservados · **2023**" | Pie | — | Rediseñar — el año está congelado en 2023 |
| Misión, visión, valores | **No presentes** | — | — | **[CONTENIDO POR CONFIRMAR]** — probablemente en `/nosotros/` |
| Historia / año de fundación | **No presentes** | — | — | **[CONTENIDO POR CONFIRMAR]** |
| Habilitación sanitaria, código REPS, NIT, razón social | **No presentes** | — | — | **[CONTENIDO POR CONFIRMAR]** — obligatorio para una IPS en Colombia y muy relevante para la percepción de confianza que busca *Clinical Luxury* |
| Certificaciones / acreditaciones | **No presentes** | — | — | **[CONTENIDO POR CONFIRMAR]** — no se inventará ninguna |
| Estadísticas (años, pacientes, cirugías) | **No presentes** | — | — | **[CONTENIDO POR CONFIRMAR]** — no se inventará ninguna |

### Convenios y alianzas

Carrusel "Nuestros convenios" con **10 logos**, sin texto explicativo, sin enlaces y sin `alt`. Se deducen del nombre de archivo:

| # | Entidad (según nombre de archivo) | Archivo |
|---|---|---|
| 1 | Fodelsa | `convenio-fodelsa-logo.jpg` |
| 2 | Winston Salem *(archivo: "winsting")* | `convenio-winsting-salem-logo.jpg` |
| 3 | Athletic Gym | `convenio-athletic-gym-logo.jpg` |
| 4 | Única IPS | `convenio-unica-ips-logo.jpg` |
| 5 | Bioreferencia | `convenio-bioreferencia-logo.jpg` |
| 6 | Escaño *(archivo: "covenio", con errata)* | `covenio-escano-logo.jpg` |
| 7 | Hotel Los Recuerdos | `convenio-hotel-los-recuerdos-logo.jpg` |
| 8 | Dr. Jorge Iván Echavarría | `convenio-dr-jorge-ivan-echavarria-logo.jpg` |
| 9 | Los Recuerdos Hotel (2) *(archivo: "reuerdos", con errata)* | `convenio-los-reuerdos-hotel-2-logo.jpg` |
| 10 | Sara López Cejas | `convenio-sara-lopez-cejas-logo.jpg` |

- **Requiere validación:** **sí.** Hay que confirmar el nombre correcto de cada entidad (tres archivos tienen erratas), si los convenios siguen vigentes y si las entradas 7 y 9 son el mismo hotel duplicado
- **Decisión:** **rediseñar o eliminar.** Un carrusel de logos heterogéneos —un gimnasio, dos hoteles, un laboratorio, una esteticista de cejas— sin explicar qué aporta cada uno al paciente resta credibilidad en lugar de sumarla. Si se conservan, deben integrarse en **Tu proceso** con una frase que explique el beneficio real (alojamiento para pacientes de fuera, laboratorio clínico, recuperación)

---

## 7. Información de contacto

Todo el contacto de la home está en un único bloque del pie, escrito como un `<h6>` con saltos de línea. No hay marcado semántico ni enlaces clicables.

| Dato | Valor literal | Reutilizable | Validación | Decisión |
|---|---|---|---|---|
| Sede | NOVA Torre Médica, 2do y 3er piso | Sí | No | Mantener |
| Dirección | Cra. 48 # 32 B Sur 30, Envigado, Antioquia, Colombia | Sí | Confirmar formato oficial | Mantener |
| Teléfono fijo | (604) 604 6233 — ext. 100 / 101 | Sí | No | Mantener · Convertir en enlace `tel:` |
| Celular | 314 779 6424 | Sí | No | Mantener · Enlazar a WhatsApp |
| WhatsApp | `+57 314 779 6424` (`573147796424`) | Sí | No | Mantener — ver §14 |
| **Correo electrónico** | **No aparece** | — | — | **[CONTENIDO POR CONFIRMAR]** |
| **Horario de atención** | **No aparece** | — | — | **[CONTENIDO POR CONFIRMAR]** |
| **Mapa / geolocalización** | **No aparece** | — | — | Crear en el rediseño |
| **Redes sociales (enlaces)** | **No hay ni un solo enlace** | — | — | **[CONTENIDO POR CONFIRMAR]** — ver §13.4 |

**Problemas a corregir en el rediseño:**

- Ni el teléfono ni la dirección son clicables (`tel:`, mapa)
- La dirección está en un `<h6>` por motivos de estilo, no de significado
- Falta correo y horario: dos datos básicos que un paciente busca antes de agendar
- No hay datos estructurados de negocio local

---

## 8. Información de financiación

| Elemento | Valor | Dónde | Decisión |
|---|---|---|---|
| Titular | "¡Luce tu figura soñada! / Financia tu cirugía con" | Sección de financiación | Rediseñar el tono |
| Aliado 1 | **Servicrédito** (`logo-servicredito.png`, 589×343) | Sección de financiación | Mantener el hecho · Validar vigencia |
| Aliado 2 | **CFA** (`logo-cfa.png`, 337×150) | Sección de financiación | Mantener el hecho · Validar vigencia y nombre completo |
| CTA | "Conoce más" → `/medios-de-pago/` | Sección de financiación | Rediseñar como parte de **Tu proceso** |
| Condiciones, plazos, tasas, requisitos | **No aparecen** | — | **[CONTENIDO POR CONFIRMAR]** |
| Medios de pago aceptados | **No aparecen** en la home | Página `/medios-de-pago/` no capturada | **[CONTENIDO POR CONFIRMAR]** |
| Precios | **No aparecen** — no se inventarán | — | — |

**Nota:** "CFA" aparece sólo como sigla en un logo. Su razón social completa debe confirmarse antes de publicarla.

**Decisión general:** la financiación pasa de ser un banner promocional aislado a una etapa explicada dentro de **Tu proceso / Financiación**, con lenguaje sobrio y sin promesas económicas no verificadas.

---

## 9. Recursos multimedia

> **Advertencia crítica:** ninguno de los archivos de esta sección existe físicamente en `/original`. Todos son referencias a `https://www.clinicanova.com.co/wp-content/uploads/...`. El inventario se ha reconstruido desde el HTML. **Todos los originales en alta resolución deben solicitarse al cliente.**

### 9.1 Vídeo

| Archivo | Uso | Datos | Decisión |
|---|---|---|---|
| `banner-web.mp4` (`/uploads/2023/12/`) | Fondo del hero, en bucle, silenciado, autoplay | Duración ~4 s · Ratio 2:1 | **Validar antes de decidir.** Un bucle de 4 s es muy corto y tiende a percibirse como un parpadeo. Si el material bruto lo permite, reeditar más largo y lento; si no, sustituir por imagen fija editorial |

### 9.2 Fotografía institucional (galería "¿Por qué Clínica Nova?" — 6 imágenes, 700×500)

| # | Archivo | Ubicación |
|---|---|---|
| 1 | `cirujanos-plasticos-en-medellin-cirugia-plastica-y-estetica-colombia-clinica-nova.jpg` | `/uploads/2023/12/` |
| 2 | `clinica-nova-cirugia-plastica-cirugia-estetica-colombia.jpg` | `/uploads/2023/11/` |
| 3 | `clinica-nova-cirugia-plastica-y-estetica-en-medellin.jpg` | `/uploads/2023/11/` |
| 4 | `abdominoplastia-mamoplastia-mastopexia-cirugia-plastica-cirugia-estetica-medellin.jpg` | `/uploads/2023/11/` |
| 5 | `cirugia-plastica-en-colombia-clinica-nova-medellin.jpg` | `/uploads/2023/11/` |
| 6 | `clinica-nova-cirugia-plastica-y-estetica-en-medellin-colombia.jpg` | `/uploads/2023/11/` |

Resolución máxima disponible: 700×500 — **insuficiente** para una web premium en pantallas modernas.

### 9.3 Fotografía antes/después (galería "Resultados" — 3 imágenes, 700×500)

| # | Archivo | Procedimiento implícito |
|---|---|---|
| 1 | `antes-y-despues-rinoplastia-cirugia-plastica-medellin-colombia.jpg` | Rinoplastia |
| 2 | `antes-y-despues-abdominoplastia-lipoadbomino-liposuccion-cirugia-plastica-medellin-colombia.jpg` | Abdominoplastia / liposucción |
| 3 | `antes-y-despuesblefaroplastia-cirugia-plastica-medellin-colombia.jpg` | Blefaroplastia |

- **Requiere validación:** **sí, la más estricta de todo el proyecto.** Consentimiento informado de cada paciente para uso publicitario, y revisión legal sobre la publicación de imágenes de resultados quirúrgicos
- **Decisión:** **mantener el formato, rediseñar el tratamiento.** La sección **Resultados** es parte de la arquitectura aprobada, pero necesita imágenes en alta resolución, consentimiento documentado y una advertencia visible de que los resultados varían según el paciente. Sin consentimiento verificado, la sección no se publica

### 9.4 Imágenes de categoría de procedimientos (3 · 400×600)

Listadas en §3.1. Resolución baja para uso como pieza visual principal. **Solicitar originales.**

### 9.5 Logos de convenio (10 · 250×100)

Listados en §6. Formato JPG con fondo blanco a 250×100 — **inservibles para un diseño premium**. Se necesitarían en SVG o PNG con transparencia. Ver la decisión de §6.

### 9.6 Recursos de marca y pie

| Archivo | Uso | Dimensiones | Decisión |
|---|---|---|---|
| `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` | Logo del navbar | 1721×500 | Mantener la marca · Solicitar vectorial |
| `Clinica-Nova_Logo-Blanco.png` | Logo blanco del hero | 8000×2925 | Mantener la marca · Solicitar vectorial |
| `Banner-Redes-logo.png` | Logo del pie | 4500×2859 | Mantener la marca · Solicitar vectorial |
| `footer_Mesa-de-trabajo-1-copia-5.png` | Icono del pie, probablemente red social | 523×523 | Rediseñar — ver §12 |
| `footer_Mesa-de-trabajo-1-copia-6-1.png` | Icono del pie, probablemente red social | 523×523 | Rediseñar — ver §12 |
| `es.svg` | Bandera de idioma de GTranslate. **Único archivo de imagen realmente presente en `/original`** | 24×24 | Eliminar con el traductor — ver §17 |

### 9.7 Favicons (`/uploads/2023/10/`)

`cropped-ICONO-WEB_ICONO-WEB-CLINICA-NOVA-32x32.png` · `-192x192.png` · `-180x180.png` (Apple touch) · `-270x270.png` (MS Tile).

**Decisión:** mantener el icono de marca, regenerar el juego completo (incluido SVG y `manifest`) a partir del vectorial.

### 9.8 Calidad general y accesibilidad del material gráfico

| Problema | Alcance | Decisión |
|---|---|---|
| **Ningún archivo presente en `/original`** | 100 % del material | Solicitar todo al cliente |
| Resolución máxima 700×500 | Todas las fotografías | Solicitar originales en alta |
| **Atributos `alt` vacíos** | Prácticamente todas las imágenes | Corregir — es un fallo de accesibilidad y de SEO |
| Nombres de archivo sobrecargados de palabras clave | Casi todos | Renombrar con criterio editorial |
| Todo en JPG/PNG, sin formatos modernos | 100 % | Migrar a WebP/AVIF vía `next/image` |
| Erratas en nombres de archivo | 3 logos de convenio | Corregir al renombrar |

---

## 10. Fuentes

| Fuente | Cómo se carga | Uso | Decisión |
|---|---|---|---|
| **Quicksand** (300, 400, 500, 600, 700) | Google Fonts, incrustada por Divi como `@font-face` en línea desde `fonts.gstatic.com` | Tipografía principal de todo el sitio | **Eliminar.** Sustituida por **Cormorant Garamond** (display) y **Manrope** (texto) |
| **Open Sans** | Declarada en el reset de Divi | Fallback | Eliminar |
| **ETmodules** | Fuente de iconos propia de Divi | Iconos de botones y menú (`data-icon`) | Eliminar con el tema |
| **Font Awesome 4.7.0** | CDN externo `maxcdn.bootstrapcdn.com` | Cargada por los plugins de Smash Balloon | **Eliminar** — dependencia de terceros y versión de 2016 |

**Decisión para el rediseño:** cargar Cormorant Garamond y Manrope mediante `next/font` (auto-alojadas, sin peticiones a Google en tiempo de ejecución). Se eliminan las cuatro familias actuales y las dos preconexiones externas (`fonts.gstatic.com`, `maxcdn.bootstrapcdn.com`).

---

## 11. Logos

### 11.1 Logos de Clínica Nova

| Variante | Archivo | Dónde | Decisión |
|---|---|---|---|
| Principal (color) | `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` | Navbar | Mantener la marca · **Solicitar SVG** |
| Blanco / negativo | `Clinica-Nova_Logo-Blanco.png` | Hero | Mantener la marca · **Solicitar SVG** |
| Pie | `Banner-Redes-logo.png` | Pie | Mantener la marca · **Solicitar SVG** |
| Isotipo / favicon | `cropped-ICONO-WEB_...png` | Favicons | Mantener la marca · **Solicitar SVG** |

**Observación:** el logo del navbar se llama *"Perfil para redes"* y el del pie *"Banner Redes"* — son piezas pensadas para redes sociales reutilizadas en la web. El del hero pesa 8000×2925 px, un tamaño desproporcionado que penaliza el rendimiento.

**Requiere validación:** **sí** — hace falta el manual de marca o, como mínimo, los archivos vectoriales, la zona de protección y los colores corporativos oficiales. **[CONTENIDO POR CONFIRMAR]**

### 11.2 Logos de terceros

| Logo | Categoría | Decisión |
|---|---|---|
| Servicrédito | Financiación | Mantener · Solicitar versión vectorial y autorización de uso |
| CFA | Financiación | Mantener · Solicitar versión vectorial, nombre completo y autorización |
| 10 logos de convenio | Alianzas | Rediseñar o eliminar — ver §6 |

---

## 12. Iconos

| Sistema | Origen | Uso actual | Decisión |
|---|---|---|---|
| **ETmodules** | Fuente de iconos de Divi | Flechas de botones (`data-icon="="`), hamburguesa móvil, lupa de búsqueda, flechas de carrusel | Eliminar con el tema |
| **Font Awesome 4.7.0** | `maxcdn.bootstrapcdn.com` | Cargado por los plugins de Smash Balloon | Eliminar |
| **Joinchat** | SVG en línea | Icono del globo de WhatsApp | Rediseñar con icono propio |
| **GTranslate** | SVG de banderas (`es.svg` y 9 más remotas) | Selector de idioma | Eliminar con el traductor |
| **Iconos del pie** | Dos PNG de 523×523 (`footer_Mesa-de-trabajo-1-copia-5.png`, `...copia-6-1.png`) | Aparentemente iconos de red social | **Rediseñar** — ver nota |

**Nota sobre los iconos del pie:** ambos están insertados como **imágenes sin enlace y sin `alt`**. Es decir, si son iconos de Instagram y Facebook, **no llevan a ninguna parte**: el usuario hace clic y no ocurre nada. Debe confirmarse qué representan y a qué perfiles deberían enlazar. **[CONTENIDO POR CONFIRMAR]**

**Decisión general:** el sitio actual mezcla cuatro sistemas de iconos distintos. La nueva dirección pide *evitar el exceso de iconos*, así que el rediseño usará **un único set mínimo y coherente**, con uso restringido a la navegación y el contacto.

---

## 13. Enlaces externos

### 13.1 Enlaces de acción visibles para el usuario

| Enlace | Destino | Dónde | Validación | Decisión |
|---|---|---|---|---|
| "Asesor en línea" | `https://bit.ly/3HPF8qh` | Sección "Te asesoramos" | **Sí — destino opaco** | **Rediseñar.** Un acortador oculta el destino real, impide medir bien y depende de un servicio de terceros. Sustituir por el enlace directo |
| "Valoración virtual" | `https://api.whatsapp.com/send?phone=573147796424&text=...` | Menús principal y móvil | No | Mantener la función → CTA **"Agendar valoración"** |
| "Trabaja con nosotros" | `https://forms.gle/Kqgj8bBfUR8q4CkX7` | Pie | Sí — vigencia | Ver §15 |
| "Satisfacción del Servicio" | `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqFzPouOa99qhZtgNx0DA7PMjVDdzF-V1IqK_7HinOjbuOWg/formResponse` | Pie | **Sí — enlace roto** | Ver §15 |
| "PQRS-F" | `https://forms.gle/MtaS5vaJcu5NWape9` | Pie | Sí — vigencia | Ver §15 |

### 13.2 Enlaces internos con problemas

| Enlace | Problema | Decisión |
|---|---|---|
| `https://clinicanova.com.co/preguntas-frecuentes/` | Sin `www`, a diferencia del resto del sitio | Unificar dominio |
| `/2023/11/14/politica-de-tratamiento-y-proteccion-de-datos/` | Página legal publicada como entrada de blog fechada | Convertir en página con URL limpia |

### 13.3 Dependencias externas técnicas

| Dominio | Servicio | Decisión |
|---|---|---|
| `fonts.gstatic.com` / `fonts.googleapis.com` | Google Fonts (Quicksand) | Eliminar — auto-alojar con `next/font` |
| `maxcdn.bootstrapcdn.com` | Font Awesome 4.7.0 | Eliminar |
| `www.googletagmanager.com` | Google Analytics 4 — `G-7FQ2WF5JEG` | **Validar y migrar.** En la copia de HTTrack se carga por **`http://`**, no `https://` — riesgo de contenido mixto que hay que corregir |
| `www.googleadservices.com` / `www.google.com` / `www.google.com.co` | Google Ads — remarketing, ID `16453751151` | **Validar con el cliente.** Si la publicidad sigue activa, migrar el píxel con consentimiento previo |
| `tracker.metricool.com` | Metricool — hash `2997283e114c2c3051c8e2b2af279cdc` | **Validar.** ¿Sigue en uso la herramienta? |
| `api.whatsapp.com` | WhatsApp | Mantener |
| `forms.gle` / `docs.google.com` | Google Forms | Ver §15 |
| `bit.ly` | Acortador | Eliminar |

### 13.4 Redes sociales

**No existe ni un solo enlace a redes sociales en toda la home.** Es una omisión llamativa, porque el sitio tiene instalados los plugins de feed de **Instagram, Facebook, YouTube y Reviews** (§17) y los propios logos se llaman "Perfil para redes" y "Banner Redes". Los dos iconos del pie parecen serlo pero no enlazan a nada (§12).

**Estado:** **[CONTENIDO POR CONFIRMAR]** — URL de los perfiles de Instagram, Facebook, YouTube, TikTok y ficha de Google Business.

---

## 14. WhatsApp

WhatsApp es hoy el canal de conversión principal del sitio y aparece por tres vías distintas.

| Punto de contacto | Implementación | Detalle |
|---|---|---|
| Menú "Valoración virtual" | Enlace `api.whatsapp.com` | Mensaje precargado: *"Hola, estoy interesada en una cita de valoración virtual. Gracias."* |
| Botón flotante | Plugin **Joinchat / Creame WhatsApp me** 6.3.2 | Posición derecha, retardo 1 s, tema auto oscuro |
| Celular del pie | Texto plano, no clicable | `314 779 6424` |

**Número:** `573147796424` (+57 314 779 6424) — el mismo en los tres casos. **Coincide con el celular del pie.**

**Textos del widget flotante (todos reutilizables):**

- Título: "Clínica Nova"
- Burbuja: *"¡Hola👋! Gracias por comunicarte con Clínica Nova. Cuéntanos en qué podemos ayudarte."*
- Botón: "Conversar"
- Mensaje que se envía: *"¡Hola! Quiero agendar mi cita de valoración."*
- Etiquetas de accesibilidad: "Abrir chat", "Cerrar"
- Configuración: aparece tras 2 vistas de página, retardo de 10 s, sin QR, sin WhatsApp Web, con seguimiento de clics propio del plugin

**Decisión:** **mantener la función, rediseñar la implementación por completo.**

- Reimplementar el botón flotante como componente propio, sin el plugin ni su dependencia de la API de WordPress para el seguimiento
- Conservar los mensajes precargados: están bien redactados y alineados con el tono cálido de la marca
- Hacer clicable el celular del pie
- Alinear todos los mensajes con el CTA único **"Agendar valoración"**
- **Validar:** que `+57 314 779 6424` siga siendo el número de atención vigente, y si existe un segundo número o un horario de atención

---

## 15. Formularios

| Formulario | Implementación | Estado | Decisión |
|---|---|---|---|
| **Buscador** | Formulario `GET` nativo de Divi, oculto tras la lupa del navbar | Funcional | **Eliminar.** Un buscador no aporta valor en un sitio de ~7 páginas y no encaja con la nueva dirección |
| **Contact Form 7** | Plugin 6.1.6 — **CSS y JS cargados, pero sin ningún formulario en la home** | Peso muerto en la home; probablemente se usa en `/contacto/` | **Validar** el formulario de `/contacto/` (no capturado) y **rediseñar** como formulario propio |
| **Trabaja con nosotros** | Google Form externo — `forms.gle/Kqgj8bBfUR8q4CkX7` | Funcional (a validar) | Ver nota |
| **PQRS-F** | Google Form externo — `forms.gle/MtaS5vaJcu5NWape9` | Funcional (a validar) | Ver nota |
| **Satisfacción del Servicio** | Google Form externo | **Enlace roto** | Ver nota |

**Sobre el formulario de satisfacción:** el enlace apunta a `.../formResponse`, que es el *endpoint de envío* del formulario, no el formulario en sí. La URL correcta debería terminar en `/viewform`. **Tal como está, el enlace no muestra el formulario al usuario.** Es un error a corregir con independencia del rediseño.

**Sobre los tres formularios de Google:** son trámites institucionales legítimos (empleo, PQRS-F, satisfacción). PQRS-F es además una obligación regulatoria para una IPS en Colombia. Enviar al paciente a un formulario genérico de Google rompe la experiencia premium, pero migrarlos implica asumir el tratamiento de datos personales y de peticiones formales.

**Decisión:** **mantener la función, decidir la implementación con el cliente.** [CONTENIDO POR CONFIRMAR] — hay que saber quién recibe hoy estas respuestas y si existe un procedimiento formal de PQRS-F antes de proponer migrarlos.

**Formulario que falta y que la nueva arquitectura necesita:** el de **Agendar valoración**, hoy inexistente — todo se canaliza por WhatsApp. Definir campos, destinatario y política de datos: [CONTENIDO POR CONFIRMAR].

---

## 16. PDFs

**No se ha encontrado ningún PDF** en `/original`: ni en el HTML de la home, ni en el pie, ni en las hojas de estilo.

Documentos que una clínica suele publicar y que **no existen o no fueron capturados**:

| Documento | Estado | Nota |
|---|---|---|
| Consentimientos informados | No encontrado | Podrían estar en páginas no capturadas |
| Guías de preparación prequirúrgica | No encontrado | Encajaría en **Tu proceso** |
| Guías de cuidado postoperatorio | No encontrado | Encajaría en **Tu proceso** |
| Lista de precios / tarifas | No encontrado | No se inventará ninguna |
| Habilitación sanitaria | No encontrado | Ver §6 |
| Política de datos en PDF | No — está como entrada de blog | Ver §1.2 |

**Estado:** **[CONTENIDO POR CONFIRMAR]** — hay que preguntar explícitamente si existen documentos descargables en las páginas interiores.

---

## 17. Recursos que dependen de terceros

El sitio actual es WordPress 6.8.8 con el tema **Divi 4.27.3** y al menos **13 plugins**. Todo esto desaparece en el rediseño, pero cada elemento debe revisarse para no perder una función activa.

### 17.1 Plataforma

| Componente | Versión | Decisión |
|---|---|---|
| WordPress | 6.8.8 | Eliminar |
| Divi (tema + constructor) | 4.27.3 | Eliminar |
| jQuery + jQuery Migrate | Core | Eliminar |
| MediaElement.js | Core | Eliminar — usar `<video>` nativo |
| Salvattore, Magnific Popup, FitVids, jQuery Mobile | Core / Divi | Eliminar |

### 17.2 Plugins con función visible en la home

| Plugin | Versión | Qué hace hoy | Decisión |
|---|---|---|---|
| **MetaSlider** (`ml-slider`) | 3.111.2 | Carrusel de los 10 logos de convenio | Eliminar el plugin · Ver §6 para el contenido |
| **Joinchat / Creame WhatsApp me** | 6.3.2 | Botón flotante de WhatsApp | Eliminar el plugin · **Reimplementar la función** (§14) |
| **GTranslate** | 3.1.1 | Selector de 10 idiomas (ar, zh-CN, nl, en, fr, de, it, pt, ru, es) por traducción automática | **Eliminar.** La traducción automática de contenido médico es un riesgo de precisión y de imagen. **Validar** si hay demanda real de inglés — si la hay, traducción humana de un subconjunto de páginas |
| **Contact Form 7** | 6.1.6 | Cargado sin formulario en la home | Eliminar el plugin · Ver §15 |
| **Before & After Images for Divi** | 1.3.5 | Comparador antes/después. **Cargado, pero sin usarse en la home** | Eliminar el plugin · **Reimplementar la función** en **Resultados** |

### 17.3 Plugins cargados sin salida visible en la home

Los cuatro plugins de Smash Balloon cargan CSS y JS en cada visita a la home **sin renderizar nada**. O se usan en páginas interiores no capturadas, o son peso muerto puro.

| Plugin | Versión | Decisión |
|---|---|---|
| **Instagram Feed** | 6.12.0 | Eliminar · **Validar** si hay feed en otra página y si conviene mantenerlo |
| **Custom Facebook Feed** | 4.10.0 | Eliminar · Validar |
| **Reviews Feed** | 2.5.0 | Eliminar · **Validar con prioridad** — puede ser el origen real de los testimonios (§5) |
| **YouTube Feeds** | — | Eliminar · Validar |

### 17.4 Analítica, publicidad y seguimiento

| Servicio | Identificador | Validación | Decisión |
|---|---|---|---|
| **Google Analytics 4** vía MonsterInsights 11.1.2 | `G-7FQ2WF5JEG` | Confirmar acceso a la propiedad | **Mantener el servicio** · Migrar sin el plugin · Corregir la carga por `http://` |
| **Google Ads** (remarketing) | `AW-16453751151` | **¿Sigue activa la publicidad?** | **Validar antes de migrar** |
| **Metricool** | Hash `2997283e114c2c3051c8e2b2af279cdc` | ¿Sigue en uso? | **Validar** |

**Nota legal:** los tres cargan sin ningún banner ni mecanismo de consentimiento de cookies. Al tratarse de una entidad de salud que trata datos personales en Colombia, el rediseño debería incorporar gestión de consentimiento. **Requiere criterio legal del cliente.**

### 17.5 Servicios externos de los que depende el contenido

| Servicio | Dependencia | Riesgo |
|---|---|---|
| Google Forms (×3) | Empleo, PQRS-F, satisfacción | Los datos viven fuera del control de la clínica |
| Bit.ly | CTA "Asesor en línea" | Destino opaco; si el enlace caduca, el CTA principal muere |
| WhatsApp Business API | Canal de conversión principal | Dependencia total de un canal externo |
| maxcdn.bootstrapcdn.com | Font Awesome 4.7.0 | CDN de terceros con versión de 2016 |
| Google Fonts | Quicksand | Petición externa en cada carga |

---

## 18. Bloqueos de contenido — lo que hay que pedir antes de continuar

Ordenado por impacto sobre la nueva arquitectura.

### Prioridad crítica — sin esto no se puede diseñar la estructura

| # | Qué se necesita | Para qué sección | Por qué está bloqueado |
|---|---|---|---|
| 1 | **Contenido de las 11 páginas interiores** (Nosotros, Servicios, los 3 de procedimientos, Especialistas, Contacto, Galería, Medios de pago, FAQ, Política de datos) | Toda la arquitectura | No fueron capturadas — §1.2 |
| 2 | **Especialistas**: nombres, especialidad, registro médico, formación, foto, biografía | **Especialistas** | Cero datos disponibles — §4 |
| 3 | **Catálogo real de procedimientos** por categoría | **Procedimientos** | Sólo hay 3 categorías, ningún procedimiento confirmado — §3 |
| 4 | **Confirmación sobre el `noindex, nofollow`** del sitio en producción | SEO global | El sitio está excluido de los buscadores — §0 |

### Prioridad alta — sin esto no se puede publicar

| # | Qué se necesita | Para qué sección |
|---|---|---|
| 5 | **Consentimiento informado de las imágenes antes/después** | **Resultados** — §9.3 |
| 6 | **Todos los recursos gráficos en alta resolución** + vectoriales de marca | Todo el sitio — §9, §11 |
| 7 | **Datos institucionales**: razón social, NIT, habilitación sanitaria/REPS | **La clínica**, pie — §6 |
| 8 | **Correo electrónico y horario de atención** | Contacto, pie — §7 |
| 9 | **Perfiles de redes sociales** | Pie — §13.4 |
| 10 | **Condiciones de financiación** con Servicrédito y CFA | **Tu proceso** — §8 |

### Prioridad media — afecta a decisiones de diseño

| # | Qué se necesita | Para qué sección |
|---|---|---|
| 11 | Origen y consentimiento de los 4 testimonios | Testimonios — §5 |
| 12 | Vigencia y nombre correcto de los 10 convenios | **Tu proceso** — §6 |
| 13 | Destino real del enlace `bit.ly/3HPF8qh` | CTA — §13.1 |
| 14 | Decisión sobre los 3 Google Forms | **Tu proceso** — §15 |
| 15 | ¿Analítica y Google Ads siguen activos? | Técnico — §17.4 |
| 16 | ¿Hace falta versión en inglés? | Arquitectura — §17.2 |
| 17 | ¿Existen PDFs descargables? | **Tu proceso** — §16 |
| 18 | Archivo bruto del vídeo del hero | Hero — §9.1 |
| 19 | Misión, visión, historia, año de fundación | **La clínica** — §6 |
| 20 | Definición del flujo de "Agendar valoración" | CTA principal — §15 |

---

## 19. Mapa de migración de contenido

Resumen de dónde acaba cada pieza del sitio actual en la nueva arquitectura.

| Contenido actual | Nueva ubicación | Tratamiento |
|---|---|---|
| Hero (3 slides) | **Inicio** — Hero | Rediseñar como hero único y fijo |
| "Nuestros servicios" (3 categorías) | **Inicio** → **Procedimientos** | Mantener las categorías · Rediseñar |
| "¿Por qué Clínica Nova?" | **Inicio** — Por qué Nova | Reescribir sobre hechos verificables |
| Galería institucional (6 fotos) | **Inicio** — Introducción · **La clínica** | Sustituir por fotografía nueva en alta |
| Galería antes/después (3 fotos) | **Resultados** | Rediseñar · Sujeto a consentimiento |
| Testimonios (4) | **Inicio** — Testimonios | Mantener · Verificar origen |
| Financiación (Servicrédito, CFA) | **Inicio** — Financiación · **Tu proceso** | Mantener el hecho · Cambiar el tono |
| "Te asesoramos" | **Inicio** — CTA final | Mantener el mensaje · CTA = "Agendar valoración" |
| Convenios (10 logos) | **Tu proceso** | Rediseñar o eliminar |
| Contacto del pie | **Footer** | Mantener · Añadir correo, horario, mapa |
| Enlaces institucionales del pie | **Footer** | Mantener · Corregir el enlace roto |
| Botón de WhatsApp | Global | Reimplementar |
| Nosotros | **La clínica** | Pendiente de contenido |
| Galería | **Resultados** | Pendiente de contenido |
| Medios de pago | **Tu proceso / Financiación** | Pendiente de contenido |
| Valoración virtual | **CTA "Agendar valoración"** | Rediseñar como flujo propio |
| Buscador | — | Eliminar |
| Selector de 10 idiomas | — | Eliminar · Validar |
| Menú secundario superior | — | Eliminar · Absorber en la navegación principal y el pie |

---

## 20. Nota de método

- No se ha modificado ningún archivo de `/original`.
- No se ha creado ningún componente ni instalado ninguna dependencia.
- Todo el texto entrecomillado está transcrito literalmente del HTML original, incluidas sus erratas, que se señalan en su lugar.
- No se ha inventado ninguna estadística, certificación, especialista, procedimiento, garantía, precio ni resultado clínico.
- Todo dato ausente aparece marcado como **[CONTENIDO POR CONFIRMAR]**.
- Las decisiones de *mantener / rediseñar / eliminar* son propuestas de auditoría, sujetas a aprobación del cliente.

**Siguiente documento:** `docs/02-ARQUITECTURA-CONTENIDO.md` — bloqueado hasta resolver, como mínimo, los puntos 1 a 4 de la sección 18.
