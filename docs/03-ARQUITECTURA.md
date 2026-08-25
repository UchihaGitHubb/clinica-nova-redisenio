# 03 · Arquitectura UX — Clínica Nova

**Proyecto:** Rediseño web Clínica Nova
**Naturaleza:** propuesta privada de rediseño de alta fidelidad
**Concepto:** Clinical Luxury — *Precisión médica. Elegancia humana.*
**Concepto secundario:** *Tu transformación, acompañada por expertos.*
**CTA único del sitio:** **Agendar valoración**

**Fuentes:** `00-DIRECCION-PROYECTO.md` **[D00]**, `01-AUDITORIA-CONTENIDO.md` **[A01]**, `02-INVENTARIO-RECURSOS.md` **[R02]**

Este documento es la **especificación UX** que guiará el diseño y la implementación. No contiene código. Define estructura, jerarquía, recorridos y justificación.

**Marcas usadas:** `[CONTENIDO POR CONFIRMAR]` para contenido que no existe y se representará con placeholder. **[R02 §n]** / **[A01 §n]** para referencias.

---

# 1. Diagnóstico arquitectónico

Solo lo que condiciona decisiones de arquitectura. El detalle completo está en [A01] y [R02].

## 1.1 Arquitectura de información

| Problema | Consecuencia arquitectónica |
|---|---|
| **Navegación repartida en tres menús** (principal, secundario superior, pie) con 13 entradas | El usuario no tiene un mapa mental del sitio. La jerarquía visual contradice la importancia comercial: Galería y Medios de pago viven en la barra secundaria, tipográficamente menor |
| **Preguntas frecuentes solo existe en el pie** | Contenido decisivo para quien evalúa una cirugía, invisible durante toda la navegación |
| **"Valoración virtual" figura en el menú pero no es una página** | Es un enlace directo a WhatsApp. El sitio no tiene página de conversión: el objetivo comercial no tiene destino propio |
| **Etiqueta ≠ URL** en Belleza íntima (`/ginecologia-estetica/`) | Dos denominaciones para lo mismo, una comercial y otra clínica, sin criterio unificado |
| **Política de datos publicada como entrada de blog fechada** | Un documento vigente se presenta como noticia de 2023 |
| **Preguntas frecuentes apunta a un dominio sin `www`** | Inconsistencia que rompe la coherencia de dominio |

## 1.2 Descubrimiento de servicios

Es el problema más grave, porque afecta al núcleo del negocio.

- **Solo existen tres categorías y ningún procedimiento individual navegable.** El usuario que busca "abdominoplastia" no tiene ningún destino: debe entrar en "Corporales" y confiar en encontrarlo. No hay página por procedimiento, ni índice, ni buscador útil.
- **No hay relación entre procedimiento y especialista.** Imposible saber quién realiza qué.
- **No hay relación entre procedimiento y resultado.** La galería y los servicios son universos separados.
- **La única jerarquía de segundo nivel del sitio es el submenú de Servicios.** Todo lo demás es plano.

## 1.3 Jerarquía

| Problema verificado | Efecto |
|---|---|
| **Hero de 3 diapositivas en rotación automática** con mensajes que dicen lo mismo | Ningún mensaje se fija. El usuario no sabe qué es Nova al aterrizar |
| **Escala tipográfica incoherente**: `h1` a 22px, botones a 22–25px, varios encabezados por debajo del cuerpo de 17px [R02 §7.3] | La página no comunica qué es importante |
| **Bloques de título con `width: 34%` y sombras duras `10px 10px 0`** [R02 §11.1] | Estética de plantilla; el título compite con el contenido |
| **Mismo componente con colores distintos** (testimonios con tres tratamientos diferentes) | El usuario no reconoce patrones repetidos |
| **Seis azules y cuatro turquesas coexistiendo** [R02 §8.3] | Sin jerarquía cromática: nada destaca porque todo destaca |

## 1.4 Conversión

| Problema verificado | Efecto |
|---|---|
| **Seis CTA distintos hacia cinco destinos** [R02 §9.3] | El usuario no sabe cuál es el siguiente paso |
| **Ningún dato de contacto es accionable**: teléfono y dirección en texto plano, sin email, sin horario, sin mapa | Fricción en el momento exacto de decidir |
| **Todo se canaliza por WhatsApp**, sin registro ni alternativa | Quien no quiere usar WhatsApp no tiene camino |
| **El CTA "Asesor en línea" depende de un acortador** (`bit.ly`) | Destino opaco; si caduca, muere un CTA de portada |
| **Cero enlaces a redes sociales**, pese a tener cuatro plugins de feed social instalados | Fuga de prueba social |
| **El CTA no lleva contexto**: el mensaje de WhatsApp es genérico | La clínica recibe consultas sin saber qué procedimiento interesa |

## 1.5 Contenido

| Problema | Consecuencia arquitectónica |
|---|---|
| **Cero especialistas publicados** [A01 §4] | La sección que más confianza genera en cirugía plástica no existe. Es el vacío más grave |
| **Cero procedimientos individuales confirmados** [A01 §3.2] | La arquitectura debe funcionar hoy con 0 y mañana con 30 |
| **Texto institucional con afirmaciones prohibidas** por [D00 §5]: "resultados excepcionales", "equipo altamente calificado", "tecnología de vanguardia" | La sección de diferenciales debe reconstruirse sobre hechos verificables, no reescribirse cosméticamente |
| **Sin misión, historia, habilitación sanitaria ni datos de registro** | "La clínica" se construye con lo verificable + placeholders |
| **Testimonios con errata, un superlativo prohibido y una afirmación sobre dolor postoperatorio** [R02 §9.6] | Reutilizables con edición ligera |
| **Solo 3 imágenes antes/después, descartadas por criterio** [R02 §3.5] | Resultados se demuestra estructuralmente con placeholders |

## 1.6 Oportunidades

Lo que el diagnóstico revela como palanca, no como problema:

1. **El esqueleto narrativo actual es correcto.** Servicios → razones → prueba social → asesoría → alianzas coincide en gran medida con la estructura aprobada. **El sitio actual falla en ejecución, no en concepto.** Eso reduce el riesgo del rediseño.
2. **La frase "Tu transformación comienza con una simple conversación" ya está en la web actual.** La dirección verbal aprobada nace del lenguaje de la clínica, no se le impone.
3. **La sede es un activo infrautilizado.** "NOVA Torre Médica, 2.º y 3.er piso" aparece una sola vez, en letra pequeña del pie. Una clínica con torre médica propia tiene un diferencial de infraestructura que hoy no comunica.
4. **Existe material fotográfico real para la mayor parte de la home** [R02 §3.11]: 2 fondos de hero, 3 imágenes de categoría, 6 institucionales, un vídeo y la marca completa.
5. **La restricción de resolución (700×500 máx.) favorece el enfoque mobile-first.** A anchos de móvil ese material rinde bien. La limitación técnica y la prioridad estratégica apuntan en la misma dirección.
6. **Google Ads y Metricool activos** indican que la clínica ya invierte en captación. El argumento no es "necesitas una web más bonita", es "estás pagando tráfico que aterriza en una página que no convierte".

---

# 2. Objetivos de la nueva arquitectura

Ocho objetivos concretos y verificables.

| # | Objetivo | Métrica de éxito |
|---|---|---|
| **1** | **Un solo mapa mental.** Sustituir tres menús y 13 entradas por una navegación única de 5 secciones + CTA, donde cada elemento responde a una pregunta real del paciente | El usuario nombra las secciones del sitio tras una sola visita |
| **2** | **Un solo siguiente paso.** Un CTA primario idéntico en todo el sitio —**Agendar valoración**— que además transporta contexto (procedimiento, especialista) | De 6 CTA hacia 5 destinos, a 1 etiqueta con carga contextual |
| **3** | **Descubrimiento de procedimientos a tres niveles.** Índice → categoría → procedimiento, con página propia y URL propia por procedimiento | Un usuario que busca "rinoplastia" llega a una página dedicada |
| **4** | **Convertir a los especialistas en el eje de confianza.** Sección propia, ficha por especialista, y relación bidireccional con procedimientos y casos | Se puede responder "¿quién me operaría?" en dos clics desde cualquier procedimiento |
| **5** | **Resultados como experiencia editorial, no galería.** Casos con contexto, procedimiento y voz del paciente, no una cuadrícula de imágenes | Cada caso tiene narrativa, procedimiento vinculado y especialista vinculado |
| **6** | **Reducir la ansiedad explicando el proceso.** El recorrido del paciente, la financiación y las preguntas frecuentes dejan de estar dispersos u ocultos y pasan a ser una sección navegable | FAQ y financiación alcanzables desde la navegación principal, no desde el pie |
| **7** | **Móvil como diseño primario.** Una sola barra de acción persistente, navegación táctil, composición vertical y formularios pensados para el pulgar | Un único elemento fijo en móvil, con CTA primario siempre accesible |
| **8** | **Escalabilidad sin rediseño.** La arquitectura funciona hoy con 0 procedimientos, 0 especialistas y 0 casos, y mañana con 30, 12 y 40 | Añadir contenido es añadir datos, nunca rediseñar plantillas |

---

# 3. Navegación principal

## 3.1 Evaluación de la propuesta inicial

La propuesta era: `INICIO · PROCEDIMIENTOS · ESPECIALISTAS · RESULTADOS · LA CLÍNICA · TU PROCESO` + CTA.

**Lo que funciona, y es la mayor parte.** Las cinco secciones de contenido responden exactamente a las cinco preguntas que se hace un paciente de cirugía estética, en el orden en que se las hace:

| Pregunta del paciente | Sección |
|---|---|
| "¿Hacéis lo que quiero?" | **Procedimientos** |
| "¿Quién me va a operar?" | **Especialistas** |
| "¿Funciona? Demuéstramelo" | **Resultados** |
| "¿Puedo confiar en este sitio? ¿Es seguro?" | **La clínica** |
| "¿Cómo funciona? ¿Cuánto? ¿Puedo financiarlo?" | **Tu proceso** |
| "¿Cómo empiezo?" | **CTA** |

La correspondencia es tan limpia que la propuesta se acepta en su fondo. **Se proponen tres ajustes de forma.**

## 3.2 Ajuste 1 — Eliminar "Inicio" del menú

**Problema:** "Inicio" ocupa un espacio de navegación para una función que el logotipo ya cumple universalmente. Con 6 entradas más un CTA, el menú llega a 7 objetivos en la barra, y en portátiles de 1280 px eso obliga a comprimir tipografía o espaciado — exactamente lo que *Clinical Luxury* no puede permitirse.

**Decisión:** el logotipo enlaza a `/`. El menú baja a **5 entradas + CTA**.

**Excepción:** en el menú móvil desplegado sí aparece "Inicio" como primer elemento, porque allí no hay logotipo persistente en el panel y el coste de espacio es nulo.

## 3.3 Ajuste 2 — Hacer transparente "Tu proceso"

**Problema:** "Tu proceso" es lenguaje de marca, no de usuario. Un paciente que lee esa etiqueta no puede saber que dentro están la financiación y las preguntas frecuentes. Es un contenedor opaco, y los contenedores opacos se convierten en el cajón de sastre del sitio — precisamente el papel que hoy cumple la barra secundaria.

Y hay un riesgo concreto: **enterrar la financiación dos niveles bajo una etiqueta ambigua sería una regresión.** Hoy "Medios de pago" está en la navegación y tiene sección propia en la portada con dos aliados. En cirugía estética el coste es una barrera de primer orden.

**Decisión:** "Tu proceso" se mantiene como sección, pero **con desplegable que revela su contenido**:

```
Tu proceso
├── El proceso
├── Financiación
└── Preguntas frecuentes
```

Así la etiqueta de marca se conserva y el contenido queda visible. La financiación es alcanzable en un gesto desde cualquier página.

## 3.4 Ajuste 3 — Desplegable en Procedimientos

**Problema:** Procedimientos es la sección de mayor valor comercial. Obligar a un clic intermedio para descubrir que existen tres categorías desperdicia el momento de mayor atención.

**Decisión:** desplegable con las tres categorías, más un enlace al índice completo:

```
Procedimientos
├── Todos los procedimientos
├── Corporales
├── Faciales
└── Belleza íntima
```

Esto es, además, lo único que el sitio actual hace bien en navegación: su submenú de Servicios. Se conserva el acierto.

## 3.5 Navegación definitiva

| Orden | Etiqueta | Destino | Tipo |
|---|---|---|---|
| — | **Logotipo** | `/` | Enlace a inicio |
| 1 | **Procedimientos** | `/procedimientos` | Desplegable (4 elementos) |
| 2 | **Especialistas** | `/especialistas` | Enlace simple |
| 3 | **Resultados** | `/resultados` | Enlace simple |
| 4 | **La clínica** | `/la-clinica` | Enlace simple |
| 5 | **Tu proceso** | `/tu-proceso` | Desplegable (3 elementos) |
| CTA | **Agendar valoración** | `/agendar-valoracion` | Botón primario |

**Cinco entradas, dos desplegables, un CTA.** Ningún elemento decorativo, ningún buscador, ningún selector de idioma.

## 3.6 Qué aparece en escritorio

- Barra superior con logotipo a la izquierda, navegación centrada o a la derecha, y CTA como botón sólido al extremo derecho.
- **Un solo nivel de desplegable**, activado por hover y por foco de teclado, cerrable con `Escape`.
- Barra fija al hacer scroll, en versión compacta: se reduce la altura y el logotipo pasa a isotipo. El CTA **nunca desaparece**.
- **No hay barra secundaria superior.** Todo su contenido se reubica: Galería → Resultados, Medios de pago → Tu proceso, Valoración virtual → CTA, idioma → eliminado.

## 3.7 Qué aparece en móvil

- Barra con logotipo + botón de menú. Nada más: el CTA vive en la barra inferior persistente (§16).
- Panel de menú a pantalla completa, no un desplegable comprimido.
- Las secciones con hijos son **acordeones**, no submenús flotantes.
- Orden del panel: Inicio · Procedimientos (acordeón) · Especialistas · Resultados · La clínica · Tu proceso (acordeón) · **Agendar valoración** (botón destacado al cierre) · teléfono y WhatsApp como acciones directas.

## 3.8 Qué se oculta en navegación secundaria

Al pie, nunca en la barra principal:

| Contenido | Por qué al pie |
|---|---|
| Política de tratamiento de datos, aviso legal, cookies | Obligatorio y consultable, no navegacional |
| PQRS-F | Trámite regulatorio, no recorrido comercial |
| Trabaja con nosotros | Audiencia distinta (candidatos, no pacientes) |
| Satisfacción del servicio | Posterior a la atención |
| Redes sociales | Salida del sitio; al pie no compite con el CTA |
| Datos de contacto completos | Referencia permanente: sede, dirección, teléfonos, email, horario, mapa |
| Convenios | Contenido de apoyo, no de decisión |

## 3.9 Por qué esta navegación es mejor

| Criterio | Antes | Ahora |
|---|---|---|
| Menús | 3 | **1** |
| Entradas de navegación | 13 | **5 + CTA** |
| Niveles de jerarquía | 1 (solo Servicios) | 2, en las dos secciones que lo necesitan |
| Página de conversión | **Ninguna** | `/agendar-valoracion` |
| FAQ alcanzable desde | Solo el pie | Navegación principal |
| Financiación alcanzable desde | Barra secundaria | Navegación principal |
| CTA visible | Intermitente | **Permanente en todas las vistas** |

---

# 4. Sitemap definitivo

Cada página existe por una razón de uso, no por replicar la estructura anterior.

## 4.1 Páginas principales

| URL | Nombre | Razón UX | Origen |
|---|---|---|---|
| `/` | Inicio | Puerta de entrada: qué es Nova, qué ofrece, qué hacer ahora | Inicio |
| `/procedimientos` | Procedimientos | Índice: presenta las tres categorías y permite ver todo el catálogo de una vez | Servicios |
| `/procedimientos/corporales` | Corporales | Categoría: agrupa los procedimientos de cuerpo | Procedimientos Corporales |
| `/procedimientos/faciales` | Faciales | Categoría: agrupa los procedimientos de rostro | Procedimientos Faciales |
| `/procedimientos/belleza-intima` | Belleza íntima | Categoría: agrupa los procedimientos de zona íntima | `/ginecologia-estetica/` |
| `/procedimientos/[slug]` | Procedimiento | **Página propia por procedimiento.** Es la unidad de decisión real y el principal destino de búsqueda orgánica | **Nueva** |
| `/especialistas` | Especialistas | Índice del equipo: el mayor generador de confianza | Especialistas |
| `/especialistas/[slug]` | Especialista | Ficha individual: credenciales, procedimientos y agendamiento directo | **Nueva** |
| `/resultados` | Resultados | Índice de casos reales con contexto | Galería |
| `/resultados/[slug]` | Caso | Historia completa de un caso: motivación, procedimiento, proceso, resultado | **Nueva** |
| `/la-clinica` | La clínica | Identidad, instalaciones, filosofía y garantías institucionales | Nosotros |
| `/tu-proceso` | Tu proceso | El recorrido del paciente de principio a fin | **Nueva** |
| `/tu-proceso/financiacion` | Financiación | Elimina la barrera económica con información concreta | Medios de pago |
| `/tu-proceso/preguntas-frecuentes` | Preguntas frecuentes | Resuelve dudas sin obligar a contactar | Preguntas frecuentes |
| `/agendar-valoracion` | Agendar valoración | **Página de conversión principal.** Hoy no existe | Valoración virtual |

## 4.2 Páginas de utilidad

| URL | Nombre | Razón UX |
|---|---|---|
| `/politica-de-datos` | Política de tratamiento de datos | Obligación legal. Sustituye la URL de blog fechada |
| `/politica-de-cookies` | Política de cookies | Necesaria: el sitio actual carga tres sistemas de seguimiento sin consentimiento |
| `/aviso-legal` | Aviso legal | Razón social, NIT y habilitación sanitaria `[CONTENIDO POR CONFIRMAR]` |
| `/404` | Página no encontrada | Recuperación con enlaces a las cinco secciones |

## 4.3 Páginas deliberadamente NO creadas

| Página descartada | Por qué | Dónde va su función |
|---|---|---|
| `/contacto` | Duplicaría el pie y competiría con el CTA principal. Justificación completa en §15 | Pie + `/agendar-valoracion` |
| `/nosotros` | Etiqueta genérica y menos precisa | `/la-clinica` |
| `/galeria` | Nombre que promete cuadrícula de fotos, no casos | `/resultados` |
| `/medios-de-pago` | Aísla la financiación del proceso al que pertenece | `/tu-proceso/financiacion` |
| Blog / noticias | No hay contenido, ni evidencia de que se publique, ni capacidad editorial verificada. Crear una sección vacía perjudica más que ayuda | — |
| Buscador | Con ~20 páginas no aporta; con un catálogo grande, el índice filtrable de `/procedimientos` lo sustituye | `/procedimientos` |
| Selector de idioma | La traducción automática de contenido médico es un riesgo de precisión [A01 §17.2] | — |
| `/testimonios` | Los testimonios ganan fuerza junto a los casos y en la portada; aislados pierden contexto | Portada + `/resultados` |
| `/convenios` | Diez logos heterogéneos no sostienen una página | Bloque en `/tu-proceso` |

## 4.4 Reserva de slugs

`/procedimientos/[slug]` es plano y comparte espacio de nombres con las categorías. Los slugs `corporales`, `faciales` y `belleza-intima` quedan **reservados** y no pueden usarse como nombre de procedimiento. Justificación de este modelo en §19.3.

---

# 5. Home

## 5.1 Evaluación de la estructura propuesta

La propuesta tenía 11 secciones. Se reduce a **9 más el pie**, con dos decisiones:

**Fusión de "02 Introducción" y "07 Diferenciales / confianza".** Ambas responden a la misma pregunta —quién es Nova y por qué confiar— y separarlas obliga a estirar el contenido para llenar dos bloques. Con el agravante de que el material actual de diferenciales está construido sobre las tres afirmaciones que [D00 §5] prohíbe. Fusionarlas produce **una sección más corta y más fuerte**, sostenida en hechos verificables: actividad, sede, tres categorías, acompañamiento.

**Financiación se convierte en banda compacta, no en sección plena.** El hecho —existe financiación con dos aliados— es valioso y elimina una barrera real. Pero sin condiciones publicables, una sección completa quedaría vacía. Una banda horizontal con mensaje breve, los dos logos y un enlace a `/tu-proceso/financiacion` comunica lo mismo en un cuarto del espacio.

**Lo que se mantiene sin cambios:** el orden general de la propuesta es correcto y responde al recorrido natural de decisión. No se altera.

## 5.2 Arquitectura de la Home

### 01 · Hero

| | |
|---|---|
| **Objetivo** | Que en cinco segundos el usuario sepa qué es Nova, qué ofrece y qué puede hacer ahora |
| **Contenido** | Titular conceptual, subtítulo de una o dos líneas, dos CTA. Sin carrusel |
| **Recurso visual** | Vídeo `banner-web.mp4` o uno de los dos fondos de hero **[R02 §3.1]**, con degradado para legibilidad |
| **CTA** | Primario **Agendar valoración** · Secundario **Explorar procedimientos** |
| **Prioridad** | **Máxima** |
| **Enlace con la siguiente** | Plantea "¿quiénes son?"; la sección 02 responde |

Especificación completa en §6.

### 02 · Nova en breve — introducción y confianza

| | |
|---|---|
| **Objetivo** | Responder "quién es Nova" con hechos, no con adjetivos. Fusiona introducción y diferenciales |
| **Contenido** | Párrafo editorial breve (actividad: cirugía plástica, estética y reconstructiva; ubicación: Envigado, Antioquia) + **tres o cuatro pilares verificables**: sede propia en NOVA Torre Médica, equipo especializado, acompañamiento en todo el proceso, tres áreas de intervención. Pilares adicionales `[CONTENIDO POR CONFIRMAR]` |
| **Recurso visual** | Una o dos imágenes institucionales **[R02 §3.4]**, en composición editorial asimétrica. Nunca una cuadrícula de seis |
| **CTA** | Terciario, textual: **Conocer la clínica** → `/la-clinica` |
| **Prioridad** | Alta |
| **Enlace con la siguiente** | Establecida la credibilidad, el usuario quiere saber qué se ofrece |

**Restricción de contenido:** prohibido "resultados excepcionales", "altamente calificado", "tecnología de vanguardia", "los mejores", "la mejor clínica" [D00 §5]. Los pilares deben ser afirmaciones comprobables o quedar marcados.

### 03 · Procedimientos

| | |
|---|---|
| **Objetivo** | Que el usuario identifique de inmediato si Nova hace lo que busca, y entre en la categoría correcta |
| **Contenido** | Las tres categorías con nombre, descripción de una línea y, cuando existan datos, los procedimientos más buscados de cada una como enlaces directos |
| **Recurso visual** | Las tres imágenes de categoría en formato vertical 400×600 **[R02 §3.3]** — encajan de forma natural en una retícula editorial de tres columnas |
| **CTA** | Por tarjeta: **Ver [categoría]**. De sección: **Ver todos los procedimientos** |
| **Prioridad** | **Máxima** — es la sección de mayor valor comercial |
| **Enlace con la siguiente** | Sabiendo *qué*, surge el *quién* |

**Nota de escalabilidad:** las tarjetas admiten una lista de procedimientos destacados sin cambiar el diseño. Hoy esa lista se muestra como `[CONTENIDO POR CONFIRMAR]`; mañana se rellena con datos.

### 04 · Especialistas

| | |
|---|---|
| **Objetivo** | Poner cara y credenciales al equipo. En cirugía plástica, el cirujano es el factor de decisión principal |
| **Contenido** | Dos a cuatro especialistas destacados: retrato, nombre, especialidad y una línea de credencial. Todo `[CONTENIDO POR CONFIRMAR]` |
| **Recurso visual** | Retratos verticales. **No existen: placeholder** — silueta o tratamiento gráfico abstracto, **nunca una foto de banco que simule un médico real** |
| **CTA** | **Conocer al equipo** → `/especialistas` |
| **Prioridad** | **Alta** — es el pilar del concepto "acompañada por expertos" |
| **Enlace con la siguiente** | Presentado el equipo, toca demostrar su trabajo |

### 05 · Resultados

| | |
|---|---|
| **Objetivo** | Aportar prueba visual con contexto, no una cuadrícula de imágenes |
| **Contenido** | Dos o tres casos destacados: imagen, procedimiento y una línea de contexto |
| **Recurso visual** | Placeholder de caso. Las tres imágenes antes/después existentes quedan descartadas por criterio **[R02 §3.5]** |
| **CTA** | **Ver todos los resultados** → `/resultados` |
| **Prioridad** | Alta estructural, media en la demo |
| **Enlace con la siguiente** | Visto el resultado, surge "¿y cómo es el proceso?" |

**Obligatorio:** aviso visible de que los resultados varían según cada paciente, y publicación condicionada a consentimiento informado.

### 06 · Tu proceso

| | |
|---|---|
| **Objetivo** | Reducir la ansiedad mostrando que existe un método claro y acompañado |
| **Contenido** | Los cinco pasos en versión resumida, una línea cada uno |
| **Recurso visual** | Numeración editorial con la tipografía display. **Sin iconos** — [D00] pide evitar su exceso, y aquí no aportan información |
| **CTA** | **Ver el proceso completo** → `/tu-proceso` |
| **Prioridad** | Media-alta |
| **Enlace con la siguiente** | Explicado el método, la prueba social lo respalda |

### 07 · Testimonios

| | |
|---|---|
| **Objetivo** | Prueba social en la voz del paciente, con foco en el trato humano — el eje "elegancia humana" |
| **Contenido** | Tres de los cuatro testimonios reales, editados según **[R02 §9.6]**: corregir la errata de Luisa, recortar "no duele ni un pelo" y el superlativo "la mejor clínica" |
| **Recurso visual** | Tratamiento tipográfico editorial. Sin fotos (no existen), sin tarjetas genéricas, sin estrellas |
| **CTA** | Ninguno propio: alimenta el CTA final |
| **Prioridad** | Media-alta |
| **Enlace con la siguiente** | Con la confianza construida, se retira la barrera económica |

**El testimonio de Diana sobre recepción, admisiones y enfermería es el más valioso:** habla del trato humano y no contiene ninguna afirmación clínica.

### 08 · Financiación — banda compacta

| | |
|---|---|
| **Objetivo** | Eliminar la barrera económica antes del cierre |
| **Contenido** | Mensaje breve y sobrio + los dos aliados: **Servicrédito** y **CFA**. Condiciones `[CONTENIDO POR CONFIRMAR]` |
| **Recurso visual** | Los dos logos **[R02 §3.6]**, sobre fondo `Sand` o `Background` |
| **CTA** | **Conocer opciones de financiación** → `/tu-proceso/financiacion` |
| **Prioridad** | Media |
| **Enlace con la siguiente** | Retirada la última objeción, llega el cierre |

**Prohibido** el tono "¡Luce tu figura soñada!" y cualquier condición no verificada.

### 09 · CTA final

| | |
|---|---|
| **Objetivo** | Cerrar con un único siguiente paso, sin distracciones |
| **Contenido** | Mensaje aprobado: **"Tu transformación comienza con una conversación."** Frase que ya existe en la web actual [R02 §9.4] |
| **Recurso visual** | Fondo `Primary` a sangre, o la segunda imagen de hero con superposición. Composición limpia |
| **CTA** | Primario **Agendar valoración** · Secundario **Escribir por WhatsApp** |
| **Prioridad** | **Máxima** |
| **Enlace con la siguiente** | Cierra la narrativa; el pie recoge lo permanente |

### 10 · Footer

| | |
|---|---|
| **Objetivo** | Referencia permanente y salida ordenada |
| **Contenido** | Logotipo · dirección completa con enlace a mapa · teléfono `tel:` con extensiones · WhatsApp · email `[CONTENIDO POR CONFIRMAR]` · horario `[CONTENIDO POR CONFIRMAR]` · navegación completa · legales · PQRS-F, empleo y satisfacción · redes `[CONTENIDO POR CONFIRMAR]` · convenios (opcional) · copyright con año dinámico |
| **Prioridad** | Alta funcional |

## 5.3 Cuadro resumen

| # | Sección | Prioridad | Contenido real disponible | CTA |
|---|---|---|---|---|
| 01 | Hero | Máxima | Vídeo + 2 fondos + logo | Agendar valoración |
| 02 | Nova en breve | Alta | Parcial: actividad, sede, ubicación | Conocer la clínica |
| 03 | Procedimientos | **Máxima** | 3 categorías + 3 imágenes | Ver categoría |
| 04 | Especialistas | Alta | **Ninguno** — placeholder | Conocer al equipo |
| 05 | Resultados | Alta / media en demo | Descartado por criterio — placeholder | Ver resultados |
| 06 | Tu proceso | Media-alta | Los 5 pasos aprobados | Ver el proceso |
| 07 | Testimonios | Media-alta | **4 reales**, con edición | — |
| 08 | Financiación | Media | 2 aliados con logo | Ver financiación |
| 09 | CTA final | **Máxima** | Mensaje aprobado | Agendar valoración |
| 10 | Footer | Alta | Contacto real, parcial | — |

**Nueve secciones más el pie.** Tres tienen contenido real completo, cuatro parcial y dos se demuestran con placeholder. La portada es defendible sin inventar nada.

---

# 6. Hero

## 6.1 Objetivo

Comunicar tres cosas antes de cualquier scroll:

1. **Qué es Clínica Nova** — clínica de cirugía plástica, estética y reconstructiva en Envigado, Antioquia.
2. **Qué ofrece** — tres áreas de intervención y acompañamiento experto.
3. **Qué debería hacer el usuario** — agendar una valoración.

## 6.2 Mensaje

**Titular conceptual:** el concepto verbal aprobado, **"Precisión médica. Elegancia humana."** [D00 §8/01], compuesto en dos líneas con la tipografía display.

Es un titular de posicionamiento, no descriptivo: por eso el subtítulo debe aportar la concreción que el titular deliberadamente no da.

**Subtítulo:** una o dos líneas que sitúen actividad y lugar, y que introduzcan el acompañamiento. Material de partida verificado: *"vive tu proceso junto a nuestros expertos"* [R02 §9.1] y la definición del `<title>` actual.

**Copy definitivo:** `[CONTENIDO POR CONFIRMAR]` — se redactará en la fase de contenido. Aquí se fija la función de cada elemento, no su redacción final.

## 6.3 CTA

| Nivel | Etiqueta | Destino | Tratamiento |
|---|---|---|---|
| **Primario** | **Agendar valoración** | `/agendar-valoracion` | Botón sólido, color `Accent` o `White` sobre imagen oscura |
| **Secundario** | **Explorar procedimientos** | `/procedimientos` | Botón contorneado o enlace con subrayado |

**Dos CTA, no más.** El sitio actual llega a tener tres mensajes en rotación con CTA distintos; aquí hay una jerarquía inequívoca: agendar, o explorar.

## 6.4 Imagen y vídeo

**Opción A — vídeo (preferente si la calidad lo sostiene):** `banner-web.mp4` [R02 §4] con `<video>` nativo, en bucle, silenciado, `playsinline`, con póster de una de las dos imágenes de fondo y `prefers-reduced-motion` respetado. Riesgo: son solo 4 segundos, y un bucle tan corto puede leerse como un parpadeo.

**Opción B — imagen fija (alternativa segura):** uno de los dos fondos del hero [R02 §3.1], las únicas fotografías a sangre completa del inventario y probablemente las de mayor resolución.

**Decisión:** se implementan ambas rutas. La elección se toma al inspeccionar el material real. **En móvil, imagen fija siempre**: un vídeo de fondo en móvil cuesta datos y batería sin aportar.

**Tratamiento obligatorio:** degradado o velo en `Primary Dark` para garantizar contraste del texto. Nunca la sombra de texto que usa el sitio actual — es un parche, no una solución.

## 6.5 Navegación en el hero

Barra superposicionada sobre la imagen, con fondo transparente y logotipo en versión blanca. Al hacer scroll, la barra adopta fondo sólido y el logotipo pasa a color. **El CTA es visible desde el primer píxel.**

## 6.6 Composición

**Escritorio:** altura entre 80 y 90 vh — nunca 100 vh, para que se insinúe la sección siguiente e invite al scroll. Texto alineado a la izquierda sobre una retícula editorial, no centrado. El centrado es el patrón por defecto de las plantillas y lo que hay que evitar.

**Móvil:** altura 70–80 vh, texto en la mitad inferior, CTA primario a ancho completo y secundario debajo.

**Sin indicadores de carrusel, sin flechas, sin autoplay.** Un solo mensaje fijo.

---

# 7. Procedimientos

La experiencia completa es: **índice → categoría → procedimiento → valoración**. Cada nivel tiene una función distinta y ninguno es un simple contenedor del siguiente.

## 7.1 `/procedimientos` — índice

**Función:** orientar. Quien llega aquí no sabe todavía en qué categoría encaja lo que busca.

| Bloque | Contenido |
|---|---|
| Encabezado | Título + párrafo que explica cómo se organiza la oferta |
| Las tres categorías | Tarjeta con imagen vertical, nombre, descripción breve y número de procedimientos |
| **Catálogo completo** | Listado alfabético de **todos** los procedimientos, agrupados por categoría. Es el atajo para quien ya sabe qué busca |
| Filtro por categoría | **Solo si el catálogo supera los 12 procedimientos.** Con menos, filtrar es fricción |
| Cierre | Banda de CTA |

**Escalabilidad:** con 0 procedimientos el catálogo muestra `[CONTENIDO POR CONFIRMAR]` y las tres tarjetas sostienen la página. Con 30, el listado alfabético se convierte en el elemento principal. El diseño no cambia.

## 7.2 `/procedimientos/[categoria]` — categoría

**Función:** presentar el área y dar acceso a cada procedimiento.

| Bloque | Contenido |
|---|---|
| Encabezado | Nombre, párrafo introductorio, imagen de categoría |
| Retícula de procedimientos | Tarjeta por procedimiento: nombre, descripción de una línea, imagen si existe |
| Especialistas del área | Los del equipo que operan en esta categoría — vínculo bidireccional |
| Casos del área | Dos o tres casos relacionados |
| Preguntas frecuentes del área | Tres a cinco preguntas específicas |
| CTA | **Agendar valoración**, con la categoría precargada |

**Belleza íntima merece un tratamiento diferenciado.** Es la categoría más sensible: quien la consulta valora discreción. Recomendación de diseño: lenguaje especialmente sobrio, imágenes no explícitas y una nota visible sobre confidencialidad de la consulta.

## 7.3 `/procedimientos/[slug]` — procedimiento individual

Es la **unidad de decisión** y el principal destino de búsqueda orgánica. Un usuario que busca "abdominoplastia en Medellín" debe aterrizar aquí, no en una categoría.

| Bloque | Contenido | Estado |
|---|---|---|
| Encabezado | Nombre, categoría, migas de pan, definición en una frase | `[CONTENIDO POR CONFIRMAR]` |
| Qué resuelve | Qué aborda y para quién está indicado | `[CONTENIDO POR CONFIRMAR]` |
| En qué consiste | Explicación en lenguaje llano, sin jerga innecesaria | `[CONTENIDO POR CONFIRMAR]` |
| **Ficha técnica** | Duración, tipo de anestesia, estancia, tiempo de recuperación, regreso a la actividad | `[CONTENIDO POR CONFIRMAR]` |
| Recuperación | Qué esperar día a día o por semanas | `[CONTENIDO POR CONFIRMAR]` |
| Especialistas | Quién lo realiza, con enlace a su ficha | `[CONTENIDO POR CONFIRMAR]` |
| Resultados | Casos de este procedimiento | Placeholder |
| Procedimientos relacionados | Los que suelen combinarse o considerarse junto a este | `[CONTENIDO POR CONFIRMAR]` |
| FAQ del procedimiento | Preguntas concretas | `[CONTENIDO POR CONFIRMAR]` |
| **Aviso médico** | Cada caso es individual; la indicación se determina en valoración | Redactable ya |
| CTA | **Agendar valoración** con el procedimiento precargado | Definido |

**La ficha técnica es la pieza que más diferencia una web clínica seria de un folleto.** Son los datos que un paciente busca y que hoy no existen en ninguna parte del sitio actual. Se diseña la estructura completa, con cada campo marcado.

## 7.4 Navegación entre procedimientos

Cuatro caminos, para no dejar callejones sin salida:

1. **Migas de pan** — `Inicio › Procedimientos › Corporales › Abdominoplastia`
2. **Procedimientos relacionados** al cierre de cada ficha
3. **Anterior / siguiente** dentro de la misma categoría
4. **Volver a la categoría** siempre accesible

En escritorio, una **tarjeta de CTA fija en la columna lateral** acompaña el scroll de la ficha: nombre del procedimiento, botón de agendar y acceso a WhatsApp. En móvil esa función la cumple la barra inferior persistente.

## 7.5 CTA de la sección

| Nivel | Etiqueta | Comportamiento |
|---|---|---|
| Primario | **Agendar valoración** | Lleva el procedimiento como contexto a `/agendar-valoracion` |
| Secundario | **Consultar por WhatsApp** | Mensaje precargado con el nombre del procedimiento |
| Terciario | **Ver especialistas / Ver resultados** | Navegación lateral de confianza |

**El contexto es la mejora de conversión concreta.** Hoy todos los mensajes de WhatsApp son idénticos y genéricos; la clínica recibe consultas sin saber qué interesa. Que el CTA transporte el procedimiento mejora la experiencia del paciente y la cualificación del lead.

## 7.6 Elementos visuales

Imagen vertical por categoría; imagen por procedimiento cuando exista, y composición tipográfica cuando no. La ficha técnica se presenta como tabla editorial sobria, sin iconos decorativos. Ningún procedimiento se ilustra con fotografía quirúrgica explícita.

---

# 8. Especialistas

Es la sección con **cero datos disponibles** [A01 §4] y, a la vez, el eje del concepto *"Tu transformación, acompañada por expertos"*. La arquitectura debe quedar completa y demostrable, sin inventar a nadie.

## 8.1 `/especialistas` — índice

| Bloque | Contenido |
|---|---|
| Encabezado | Título + párrafo sobre el enfoque de equipo. Sin superlativos |
| Retícula de especialistas | Dos o tres columnas en escritorio, una en móvil |
| Cierre | CTA de valoración, con opción de indicar preferencia de especialista |

**Sin filtros.** Un equipo médico rara vez pasa de 10 personas; filtrar 6 tarjetas es fricción gratuita. Si el equipo superara las 12, se añadiría agrupación por área — no filtros.

## 8.2 Tarjeta de especialista

| Elemento | Estado |
|---|---|
| Retrato vertical, encuadre y tratamiento uniformes | **Placeholder** |
| Nombre completo | `[CONTENIDO POR CONFIRMAR]` |
| Especialidad | `[CONTENIDO POR CONFIRMAR]` |
| Una línea de credencial | `[CONTENIDO POR CONFIRMAR]` |
| Enlace a la ficha | Definido |

**Regla estricta sobre el placeholder:** silueta, forma geométrica o tratamiento gráfico abstracto en `Sand` con el logotipo. **Nunca una fotografía de banco que represente a un médico.** Un retrato falso en una web clínica es engañoso, y en una propuesta que se presenta a la propia clínica resultaría además evidente.

## 8.3 `/especialistas/[slug]` — ficha

| Bloque | Contenido | Estado |
|---|---|---|
| Encabezado | Retrato, nombre, especialidad, migas de pan | Placeholder |
| **Registro profesional** | Número de registro médico y entidad. Es el dato que más confianza aporta y hoy no existe | `[CONTENIDO POR CONFIRMAR]` |
| Formación | Titulación, universidad, especialización, año | `[CONTENIDO POR CONFIRMAR]` |
| Trayectoria | Experiencia y ámbito de práctica | `[CONTENIDO POR CONFIRMAR]` |
| Enfoque | Su forma de acompañar al paciente. Aporta la calidez del concepto | `[CONTENIDO POR CONFIRMAR]` |
| **Procedimientos que realiza** | Enlaces a las fichas correspondientes | `[CONTENIDO POR CONFIRMAR]` |
| Casos | Resultados asociados | Placeholder |
| Otros especialistas | Dos o tres, para seguir explorando | Definido |
| CTA | **Agendar valoración con [nombre]** | Definido |

## 8.4 Relación bidireccional

El vínculo especialista ↔ procedimiento debe funcionar en los dos sentidos: desde la ficha del procedimiento se ve quién lo realiza, y desde la ficha del especialista qué realiza. Eso exige que la relación viva en los datos, no en enlaces escritos a mano.

**Es el arreglo de un problema concreto:** hoy es imposible saber quién opera qué.

## 8.5 Funcionamiento con placeholders

| Escenario | Comportamiento |
|---|---|
| **0 especialistas (hoy)** | La página muestra la estructura con 3 o 4 tarjetas de placeholder y un aviso claro de contenido pendiente |
| 1 especialista | Ficha destacada a ancho completo, sin retícula |
| 2 a 6 | Retícula de 2 o 3 columnas |
| 7 a 12 | Misma retícula, más filas |
| Más de 12 | Se añade agrupación por área |

## 8.6 Nota estratégica

En la presentación a la clínica, esta sección es un argumento en sí misma: **la web actual no muestra ni un solo especialista**, mientras que en cirugía plástica el cirujano es el principal factor de decisión. Enseñar la ficha completa —con registro profesional, formación y procedimientos vinculados— hace visible una oportunidad que hoy se está desaprovechando por entero.

---

# 9. Resultados

**No es una galería.** El objetivo es una experiencia editorial de casos: el resultado importa, pero la historia que lo rodea es lo que genera identificación.

## 9.1 Diferencia conceptual

| Galería (actual) | Resultados (propuesto) |
|---|---|
| Cuadrícula de imágenes sin contexto | Casos con narrativa |
| Una imagen es el contenido | La imagen ilustra una historia |
| Sin relación con procedimientos ni equipo | Vinculada a procedimiento y especialista |
| Sin voz del paciente | Con testimonio cuando exista |
| Sin advertencias | Con aviso de variabilidad y consentimiento |

## 9.2 `/resultados` — índice

| Bloque | Contenido |
|---|---|
| Encabezado | Título, párrafo sobre el enfoque y **aviso de que los resultados varían según cada paciente** |
| Retícula de casos | Tarjetas en composición editorial, no uniforme: alternando tamaños para evitar el efecto catálogo |
| Filtro por categoría | **Solo si hay más de 12 casos** — ver §9.4 |
| Cierre | CTA |

## 9.3 Tarjeta de caso

| Elemento | Nota |
|---|---|
| Imagen principal | Preferiblemente **no** un antes/después crudo, sino una imagen con intención editorial |
| Procedimiento | Enlazado a su ficha |
| Título o contexto en una línea | Ej. la motivación del caso |
| Dato de tiempo | "Resultado a los 6 meses" — sitúa la expectativa |

## 9.4 Criterio de filtros

La instrucción es evitar filtros innecesarios. Se fija una **regla explícita**:

| Número de casos | Comportamiento |
|---|---|
| 1 a 12 | **Sin filtros.** Se muestran todos |
| 13 a 30 | Filtro por **categoría** (3 opciones) |
| Más de 30 | Filtro por categoría + por procedimiento |

**Nunca** filtros por edad, sexo, tiempo transcurrido ni combinaciones múltiples. En una clínica estética esos filtros invitan a comparar cuerpos, que es exactamente lo contrario del registro que busca *Clinical Luxury*.

## 9.5 `/resultados/[slug]` — caso

| Bloque | Contenido | Estado |
|---|---|---|
| Encabezado | Título del caso, procedimiento, migas de pan | `[CONTENIDO POR CONFIRMAR]` |
| Punto de partida | Qué motivó la consulta, en la voz del paciente si es posible | `[CONTENIDO POR CONFIRMAR]` |
| Procedimiento realizado | Con enlace a la ficha | `[CONTENIDO POR CONFIRMAR]` |
| **Comparador antes/después** | Componente interactivo, con activación deliberada por el usuario | Placeholder |
| Cronología | Momentos del proceso y de la recuperación | `[CONTENIDO POR CONFIRMAR]` |
| Testimonio | Palabras del paciente | Real cuando exista |
| Especialista | Quién lo realizó, enlazado | `[CONTENIDO POR CONFIRMAR]` |
| Casos relacionados | Mismo procedimiento o categoría | Definido |
| **Aviso y consentimiento** | Variabilidad de resultados + constancia de autorización | Obligatorio |
| CTA | **Agendar valoración**, con el procedimiento precargado | Definido |

## 9.6 Sobre el comparador antes/después

Debe requerir **acción deliberada** —arrastrar un divisor o pulsar— nunca mostrarse en reproducción automática. Dos razones: respeta a quien no quiere ver imágenes quirúrgicas de forma involuntaria, y convierte la comparación en un gesto consciente en lugar de un espectáculo.

El sitio actual tiene instalado un plugin de comparador que no usa en la portada [A01 §17.2]. La función se reimplementa como componente propio.

## 9.7 Estado en la demo

Las tres imágenes antes/después existentes **se descartan por criterio**, no por indisponibilidad [R02 §3.5]: son pacientes reales y el alcance de su consentimiento es desconocido. La sección se demuestra con estructura completa, comparador funcional e imágenes neutras.

---

# 10. La clínica

Sustituye a "Nosotros". El nombre importa: "Nosotros" habla de la empresa, **"La clínica" habla del lugar al que el paciente va a entrar** — y en cirugía, el lugar es parte de la decisión.

## 10.1 Objetivo

Convertir la infraestructura y la filosofía en confianza verificable. **La sede es el activo más infrautilizado del sitio actual:** "NOVA Torre Médica, 2.º y 3.er piso" aparece una vez, en letra pequeña del pie.

## 10.2 Estructura

| Bloque | Contenido | Estado |
|---|---|---|
| **Encabezado** | Título e imagen institucional a sangre | **Real** [R02 §3.4] |
| **Identidad** | Qué es Nova: clínica de cirugía plástica, estética y reconstructiva en Envigado, Antioquia | **Real** |
| **Filosofía** | El enfoque de atención. Aquí vive "Precisión médica. Elegancia humana." | `[CONTENIDO POR CONFIRMAR]` |
| **Instalaciones** | **NOVA Torre Médica**, 2.º y 3.er piso. Descripción de espacios: consulta, quirófanos, recuperación, habitaciones | Sede **real**; descripción `[CONTENIDO POR CONFIRMAR]` |
| **Equipo** | Bloque de enlace a `/especialistas`, no duplicado | Enlace |
| **Trayectoria** | Historia, año de fundación, hitos | `[CONTENIDO POR CONFIRMAR]` |
| **Seguridad y habilitación** | Razón social, NIT, habilitación sanitaria, código REPS. **El bloque que más confianza aporta en una IPS** | `[CONTENIDO POR CONFIRMAR]` |
| **Convenios** | Los aliados con explicación del beneficio real para el paciente | Logos reales; explicación `[CONTENIDO POR CONFIRMAR]` |
| **Ubicación** | Dirección, mapa, cómo llegar, referencias | Dirección **real**; mapa generable |
| **CTA** | Agendar valoración | Definido |

## 10.3 Recursos reales aprovechables

Las **seis imágenes institucionales** [R02 §3.4] encuentran aquí su mejor uso: en la portada solo caben una o dos, mientras esta página puede sostener una secuencia editorial completa. La que menciona "cirujanos plásticos" es la candidata a abrir el bloque de equipo, aunque su contenido real es **[NO VERIFICADO]**.

## 10.4 Tratamiento de los convenios

Diez logos heterogéneos —un gimnasio, dos hoteles, un laboratorio, una IPS, servicios estéticos— sin explicación restan credibilidad [A01 §6]. La arquitectura los admite **solo si se agrupan por beneficio**:

| Grupo | Beneficio para el paciente |
|---|---|
| Alojamiento | Hospedaje para pacientes de otras ciudades |
| Laboratorio | Exámenes prequirúrgicos |
| Recuperación y bienestar | Acompañamiento postoperatorio |

Sin ese marco explicativo, se eliminan. Un logo sin contexto no genera confianza: genera preguntas.

---

# 11. Tu proceso

## 11.1 Evaluación de los cinco pasos

La propuesta era: `01 Conversamos · 02 Valoramos · 03 Planificamos · 04 Te acompañamos · 05 Seguimos contigo`.

**Funciona, y por tres razones concretas:** es cronológica, usa primera persona del plural (que refuerza el acompañamiento) y cubre el antes, el durante y el después. Se mantiene como columna vertebral.

**Tiene una debilidad real:** los pasos 4 y 5 son semánticamente próximos y ambos vagos. "Te acompañamos" y "Seguimos contigo" no permiten distinguir qué ocurre en cada uno. Y llama la atención que la secuencia **no mencione la intervención**, que es el momento central.

**Ajuste propuesto — mantener las cinco etiquetas, precisar su contenido:**

| Paso | Etiqueta | Qué cubre |
|---|---|---|
| **01** | Conversamos | Primer contacto, escucha de la motivación, información inicial |
| **02** | Valoramos | Consulta con el especialista, examen, indicación, plan posible |
| **03** | Planificamos | Decisión informada, exámenes prequirúrgicos, fecha, **resolución del cómo pagarlo** |
| **04** | Te acompañamos | **La intervención y la estancia**: quirófano, equipo, recuperación inmediata |
| **05** | Seguimos contigo | **Postoperatorio**: controles, cuidados, seguimiento a medio plazo |

Se conservan las etiquetas aprobadas —son cálidas y funcionan— y se les asigna un contenido distinguible. El paso 4 pasa a nombrar la intervención sin usar lenguaje quirúrgico frío, resolviendo la omisión sin romper el tono.

**Contenido de cada paso:** `[CONTENIDO POR CONFIRMAR]`. La secuencia es una propuesta que la clínica debe validar [D00 §8/06].

## 11.2 `/tu-proceso` — estructura

| Bloque | Contenido |
|---|---|
| Encabezado | Título + párrafo que enmarca el proceso como acompañamiento |
| **Los cinco pasos** | Cada uno con número editorial, título, descripción y qué esperar |
| Qué necesitas saber antes | Preparación general `[CONTENIDO POR CONFIRMAR]` |
| **Financiación** | Bloque de resumen con enlace a `/tu-proceso/financiacion` |
| **Preguntas frecuentes** | Cuatro o cinco preguntas destacadas + enlace a la FAQ completa |
| Convenios de apoyo | Alojamiento, laboratorio, recuperación (si se conservan) |
| CTA | **Agendar valoración** — el paso 01 en la práctica |

## 11.3 Relación con las demás secciones

| Relación | Cómo se materializa |
|---|---|
| **→ Valoración** | El paso 01 *es* el CTA. Enlace directo desde el propio paso |
| **→ Financiación** | El paso 03 incluye resolver el cómo pagarlo. Subpágina propia |
| **→ FAQ** | Subpágina propia; las preguntas destacadas aparecen en la página madre |
| **→ Contacto** | Los datos viven en el pie; el proceso enlaza a las acciones, no a una página de contacto |
| **→ Procedimientos** | Cada ficha enlaza al proceso para responder "¿y después qué?" |
| **→ Especialistas** | El paso 02 nombra la consulta con el especialista y enlaza al equipo |

## 11.4 Presentación visual

Numeración grande con la tipografía display —**los números son el recurso gráfico**, no hacen falta iconos. Recorrido vertical en móvil y escalonado en escritorio. Sin línea de tiempo con iconos: sería exactamente el "exceso de iconos" que [D00] pide evitar.

---

# 12. Financiación

## 12.1 Objetivo

Retirar la barrera económica con información concreta y en tono sobrio. Pasa de banner promocional a **etapa explicada del proceso**.

## 12.2 `/tu-proceso/financiacion` — estructura

| Bloque | Contenido | Estado |
|---|---|---|
| Encabezado | Título y párrafo. **Sin** "¡Luce tu figura soñada!" | Redactable |
| **Cómo funciona** | Explicación del mecanismo general de financiación de un procedimiento | `[CONTENIDO POR CONFIRMAR]` |
| **Entidades aliadas** | **Servicrédito** y **CFA**, con logo, descripción y enlace si existe | Nombres y logos **reales** |
| **Condiciones** | Plazos, requisitos, montos, documentación | `[CONTENIDO POR CONFIRMAR]` |
| **Medios de pago** | Formas de pago aceptadas | `[CONTENIDO POR CONFIRMAR]` |
| Preguntas frecuentes de financiación | Tres a cinco preguntas | `[CONTENIDO POR CONFIRMAR]` |
| CTA | **Agendar valoración** — el presupuesto se define en la valoración | Definido |

## 12.3 Estructura escalable de entidad

Cada aliado se modela como un elemento con nombre, logotipo, descripción, condiciones y enlace opcional. Eso permite pasar de 0 a N entidades sin rediseñar: hoy hay dos, mañana pueden ser cuatro o ninguna.

## 12.4 Restricciones

**No se inventa ninguna condición.** Ni tasas, ni plazos, ni montos, ni requisitos, ni precios de procedimientos. La razón social completa de "CFA" es **NO DISPONIBLE** y se mostrará como sigla hasta confirmarla.

Los campos de condiciones se diseñan **visibles y marcados**: una tabla de condiciones con celdas señaladas como pendientes demuestra la estructura y, a la vez, comunica rigor. Una tabla con cifras inventadas destruiría la credibilidad de la propuesta entera.

## 12.5 Vínculo con el CTA

El precio no se publica y no debe publicarse sin datos. Pero la pregunta "¿cuánto cuesta?" es real y necesita respuesta. La respuesta arquitectónica: **el presupuesto se determina en la valoración**, y esa frase conecta directamente con el CTA. La financiación no compite con el agendamiento: lo justifica.

---

# 13. FAQ

## 13.1 Objetivo

Resolver dudas sin obligar a contactar, y **recuperar del pie** un contenido de alto valor para quien está decidiendo.

## 13.2 `/tu-proceso/preguntas-frecuentes` — estructura

| Bloque | Contenido |
|---|---|
| Encabezado | Título + párrafo breve |
| Índice de categorías | Enlaces de salto a cada grupo. Visible en escritorio, colapsable en móvil |
| Grupos de acordeones | Preguntas agrupadas temáticamente |
| Bloque de cierre | "¿No encontraste tu respuesta?" con CTA y WhatsApp |

## 13.3 Categorías propuestas

Cinco grupos, que cubren el recorrido completo sin solaparse:

| Categoría | Alcance |
|---|---|
| **Antes de la valoración** | Cómo agendar, qué llevar, cuánto dura, si tiene coste |
| **Procedimientos** | Dudas generales; las específicas viven en cada ficha |
| **Cirugía y estancia** | Anestesia, duración, acompañante, hospitalización |
| **Recuperación** | Reposo, cuidados, controles, regreso a la actividad |
| **Costes y financiación** | Presupuesto, formas de pago, aliados |

**Contenido de las preguntas:** `[CONTENIDO POR CONFIRMAR]` — no se conoce ni una sola de las preguntas actuales.

## 13.4 Cómo evitar la lista interminable

Cuatro reglas concretas:

1. **Máximo 6 preguntas por categoría.** Más señala que el contenido pertenece a una página propia.
2. **Acordeones cerrados por defecto**, con el primero de cada grupo abierto para indicar el patrón.
3. **Las preguntas específicas de un procedimiento no van aquí**, sino en su ficha. Esto reparte el contenido en lugar de acumularlo.
4. **Índice de salto** para que la página sea navegable, no solo scrolleable.

## 13.5 Comportamiento y accesibilidad

Acordeón accesible por teclado, con estado en la URL para poder enlazar a una pregunta concreta, y todas las respuestas presentes en el HTML aunque estén colapsadas — indexables y aptas para datos estructurados `FAQPage`.

## 13.6 CTA

Primario **Agendar valoración**; secundario **Preguntar por WhatsApp**. El cierre debe reconocer que la FAQ no lo resuelve todo: ofrecer una salida conversacional es más honesto que fingir exhaustividad.

---

# 14. Agendar valoración

**La página que hoy no existe.** El sitio actual canaliza todo por WhatsApp y un enlace acortado, sin destino propio para su objetivo comercial. Esta es la página de conversión principal.

## 14.1 Objetivo

Convertir interés en solicitud concreta, con la mínima fricción y el máximo de confianza. Y hacerlo por **varias vías**, porque no todos los usuarios quieren el mismo canal.

## 14.2 Propuesta de valor

Antes del formulario, tres cosas resueltas:

| Pregunta | Respuesta en la página |
|---|---|
| ¿Qué es una valoración? | Qué ocurre en la consulta, cuánto dura, quién atiende |
| ¿Cuánto cuesta? | `[CONTENIDO POR CONFIRMAR]` — dato decisivo para dar el paso |
| ¿Qué pasa después de enviar? | Plazo de respuesta y canal `[CONTENIDO POR CONFIRMAR]` |

**Explicar qué pasa después es la mejora de conversión más barata que existe.** La incertidumbre sobre el siguiente paso es una causa habitual de abandono, y hoy no se aborda en ninguna parte.

## 14.3 Estructura

| Bloque | Contenido |
|---|---|
| Encabezado | Título y una línea que enmarca el gesto como conversación, no como compromiso |
| **Qué incluye la valoración** | Tres o cuatro puntos concretos |
| **Formulario** | Vía principal — §14.4 |
| **Vías alternativas** | WhatsApp, teléfono con extensiones, email `[CONTENIDO POR CONFIRMAR]` |
| Ubicación y horario | Dirección real, mapa, horario `[CONTENIDO POR CONFIRMAR]` |
| Confianza | Nota de confidencialidad y enlace a la política de datos |
| **Otras formas de contacto** | PQRS-F, empleo, satisfacción — recoge lo que no es conversión (§15) |

## 14.4 Formulario

Principio: **pedir lo mínimo que permita devolver la llamada.**

| Campo | Necesidad | Nota |
|---|---|---|
| Nombre | **Obligatorio** | — |
| Teléfono / WhatsApp | **Obligatorio** | Canal real de respuesta de la clínica |
| Email | Opcional | Reduce fricción dejarlo opcional |
| Procedimiento de interés | Opcional, **precargado** | Se rellena solo al llegar desde una ficha |
| Especialista de preferencia | Opcional | Se rellena al llegar desde una ficha |
| Ciudad | Opcional | Relevante: hay convenios de alojamiento |
| Mensaje | Opcional | Espacio libre |
| Consentimiento de datos | **Obligatorio** | Casilla explícita con enlace a la política |

**Siete campos, dos obligatorios.** Cada campo adicional reduce el envío, y este formulario no tiene que cualificar: tiene que abrir una conversación.

**Precarga contextual:** llegar desde `/procedimientos/abdominoplastia` precarga ese procedimiento; desde una ficha de especialista, precarga el nombre. El usuario escribe menos y la clínica recibe mejor información.

## 14.5 WhatsApp

Se mantiene como **alternativa de primera clase**, no como plan B: es el canal que la clínica ya usa y en el que su equipo responde.

- Mensaje precargado con el contexto (procedimiento o especialista) en lugar del texto genérico actual.
- Se conservan los textos ya verificados [R02 §9.10], que están bien redactados.
- **Un solo punto de acceso flotante en móvil**, integrado en la barra inferior (§16), no una burbuja adicional.

## 14.6 Teléfono

`(604) 604 6233` con extensiones 100 y 101, y celular `314 779 6424`, ambos como enlaces `tel:` accionables. Hoy son texto plano. Es el arreglo más sencillo y de mayor impacto de todo el rediseño.

## 14.7 Confirmación

| Elemento | Contenido |
|---|---|
| Mensaje de éxito | Confirmación clara, sin ambigüedad |
| **Qué sigue** | Plazo y canal de respuesta `[CONTENIDO POR CONFIRMAR]` |
| Salidas útiles | Enlaces a procedimientos, especialistas o proceso: la espera se llena explorando |
| Recuperación de error | Mensaje claro + WhatsApp y teléfono como vía inmediata |

La confirmación debe ser **una pantalla o estado propio**, no una alerta que se desvanece.

## 14.8 Nota de implementación

El formulario implica tratamiento de datos personales de salud. La casilla de consentimiento y el enlace a la política son obligatorios. Destinatario, almacenamiento y plazo de respuesta: `[CONTENIDO POR CONFIRMAR]`. En la demo el formulario se presenta completo y funcional en apariencia, **sin envío real**.

---

# 15. Contacto

## 15.1 Recomendación: no crear `/contacto`

Se recomienda **no crear** una página independiente de contacto.

## 15.2 Razonamiento

La página `/contacto/` actual cumple tres funciones distintas que, al separarse, tienen mejor destino cada una:

| Función actual | Mejor destino | Por qué |
|---|---|---|
| **Convertir** (formulario) | `/agendar-valoracion` | El objetivo comercial merece una página dedicada y optimizada, no un formulario genérico |
| **Informar** (dirección, teléfonos) | **Pie de página** | Es información de referencia permanente: debe estar en todas las páginas, no en una |
| **Situar** (ubicación, sede) | `/la-clinica` | La sede es parte de la identidad y de la decisión, no un dato administrativo |

Y hay un argumento de conversión: **una página "Contacto" en la navegación competiría con "Agendar valoración".** Dos destinos para la misma intención dividen la atención y diluyen el CTA único que [D00 §2] establece. El usuario que quiere contactar y el que quiere agendar son el mismo usuario; darle dos puertas le hace elegir en lugar de avanzar.

## 15.3 Cómo se cubre cada necesidad

| Necesidad del usuario | Dónde se resuelve |
|---|---|
| "Quiero una cita" | `/agendar-valoracion` — CTA en toda la navegación |
| "Quiero escribir por WhatsApp" | Barra persistente en móvil, pie y CTA en escritorio |
| "Quiero llamar" | Enlace `tel:` en el pie y en la página de valoración |
| "¿Dónde están?" | Pie con mapa, y `/la-clinica` con ubicación y cómo llegar |
| "¿Qué horario tienen?" | Pie y página de valoración |
| "Quiero escribir un email" | Pie y página de valoración |
| "Quiero poner una PQRS" | Pie + bloque institucional en `/agendar-valoracion` |
| "Quiero trabajar aquí" | Pie |

**Ninguna necesidad queda sin destino.**

## 15.4 La objeción legítima, y su solución

Hay un contraargumento válido: **algunos usuarios buscan literalmente la palabra "Contacto"**, y existen necesidades institucionales —PQRS-F, empleo, satisfacción— que no son "agendar valoración" y que merecen un lugar claro.

**Solución sin crear la página:**

1. Un bloque **"Otras formas de contacto"** al cierre de `/agendar-valoracion`, que recoge lo institucional.
2. Un pie **exhaustivo**, con todos los datos y todos los trámites.
3. `/contacto` como **redirección 301** a `/agendar-valoracion`, para que quien escriba la URL o llegue de un enlace antiguo aterrice donde puede actuar.

## 15.5 Condición de reversión

Si la clínica prefiere una página de contacto explícita, la arquitectura la admite sin cambios estructurales: `/contacto` como página delgada con datos, mapa y formulario reducido, **enlazada solo desde el pie, nunca desde la navegación principal**, para no competir con el CTA. La recomendación de esta arquitectura es no crearla.

---

# 16. Mobile-first

El móvil es la prioridad [D00 §12–13]. No es una adaptación del escritorio: es el diseño base.

## 16.1 Navegación

- Barra superior mínima: logotipo + botón de menú. Altura reducida, con fondo sólido al hacer scroll.
- **Panel de menú a pantalla completa**, no desplegable comprimido. Tipografía grande, objetivos generosos, animación de entrada breve.
- Secciones con hijos como **acordeones**: Procedimientos y Tu proceso se expanden en el sitio, sin niveles flotantes ni navegación lateral encadenada.
- Cierre por botón, por gesto y por `Escape`.
- Al final del panel: **Agendar valoración** como botón destacado, más teléfono y WhatsApp como acciones directas.

## 16.2 Un solo elemento persistente

**Decisión clave, y corrección de un error del sitio actual.**

Hoy hay una burbuja flotante de WhatsApp que aparece tras dos vistas de página y despliega un mensaje a los 10 segundos. Añadir un CTA fijo dejando la burbuja produciría **dos elementos compitiendo por la misma esquina** — un problema que muchos sitios de clínica arrastran.

**La arquitectura define un único elemento fijo en móvil:** una **barra inferior de acción** con dos acciones y jerarquía clara.

| Posición | Acción | Tratamiento |
|---|---|---|
| Principal (≈70 % del ancho) | **Agendar valoración** | Botón sólido, color de acento |
| Secundaria (≈30 %) | **WhatsApp** | Icono + etiqueta corta, tratamiento contenido |

**Comportamiento:**
- Aparece tras un scroll mínimo, no de inmediato: el hero ya tiene su propio CTA y solaparlos es redundante.
- Se oculta al enfocar un campo del formulario, para no tapar el teclado.
- No aparece en `/agendar-valoracion`: allí el contenido *es* la acción.
- **Sin burbuja flotante adicional. Sin ventana emergente automática.** Un mensaje que se abre solo a los 10 segundos es una interrupción, no una ayuda.

## 16.3 Contenido y composición

| Elemento | Comportamiento en móvil |
|---|---|
| **Tarjetas** | Una columna. Alto suficiente para que la imagen respire; nunca dos columnas apretadas |
| **Imágenes** | Recortes verticales o cuadrados. **Sinergia útil:** el material disponible (400×600 y 700×500) rinde bien a anchos de móvil, así que la limitación de resolución apenas se nota aquí |
| **Hero** | Imagen fija, nunca vídeo. 70–80 vh, texto en la mitad inferior |
| **Retículas de 3 columnas** | Pasan a una columna, o a carrusel deslizable solo cuando la comparación lateral aporte |
| **Tablas** (ficha técnica) | Pares etiqueta–valor apilados, nunca tabla con scroll horizontal |
| **Comparador antes/después** | Divisor arrastrable con área de toque amplia |
| **Acordeones** | Patrón nativo de la FAQ; ideal en móvil |
| **Testimonios** | Uno visible por vez, deslizable, sin autoplay |

## 16.4 Formularios

- Un campo por línea, etiquetas siempre visibles (nunca solo *placeholder*).
- Teclados adecuados por tipo: numérico para teléfono, email para correo.
- Objetivos táctiles de **44 px mínimo**.
- Validación al salir del campo, no al escribir.
- Botón de envío a ancho completo, sin obligar a hacer zoom.
- Formularios largos divididos en pasos cortos con progreso visible; el de valoración, con dos campos obligatorios, cabe en una sola pantalla.

## 16.5 Jerarquía e interacción

- **Un solo mensaje por pantalla.** El scroll es gratis; la atención no.
- Escala tipográfica reducida pero manteniendo el carácter editorial: la display sigue siendo display.
- **Nada dependiente de hover.** Toda información accesible por toque.
- Espaciado vertical generoso: en móvil el aire hace el trabajo que en escritorio hace la retícula.
- Animaciones más breves que en escritorio y respeto de `prefers-reduced-motion`.

---

# 17. Desktop

**La misma arquitectura, mejor compuesta.** No una experiencia distinta: el mismo contenido, el mismo orden y los mismos CTA, con más aire y una retícula editorial.

## 17.1 Puntos de ruptura

| Rango | Dispositivo | Comportamiento |
|---|---|---|
| Hasta 767 px | Móvil | Base. Una columna, barra inferior |
| 768–1023 px | Tablet | Dos columnas en retículas. La navegación sigue en panel; el CTA pasa a la barra superior y desaparece la barra inferior |
| 1024–1439 px | Escritorio | Navegación completa desplegada. Retículas de 3 columnas. Columnas laterales fijas donde aportan |
| 1440 px y más | Pantalla grande | Contenido acotado; crece el margen, no la línea de texto |

## 17.2 Qué cambia al escalar

| Elemento | Móvil | Escritorio |
|---|---|---|
| Navegación | Panel completo | Barra con desplegables |
| CTA persistente | Barra inferior | Botón fijo en la barra superior |
| Hero | Imagen, 70–80 vh, texto abajo | Vídeo posible, 80–90 vh, texto a la izquierda sobre retícula |
| Procedimientos | 1 columna | 3 columnas verticales |
| Especialistas | 1 columna | 2–3 columnas |
| Resultados | 1 columna | Retícula editorial con tamaños alternados |
| Ficha de procedimiento | Vertical continuo | **Dos columnas: contenido + tarjeta de CTA fija** |
| Proceso (5 pasos) | Vertical | Escalonado o alternado |
| FAQ | Acordeón | Acordeón + índice lateral fijo |
| Footer | Acordeones apilados | 4 columnas |

## 17.3 Reglas de composición

- **Ancho máximo de contenido ≈ 1200 px**, con contenedor hasta 1440–1600. Más allá se amplía el margen.
- **Línea de texto de 60–75 caracteres.** Un párrafo a 1400 px de ancho es ilegible por mucho aire que tenga.
- **Asimetría deliberada.** El centrado sistemático es el patrón por defecto de las plantillas: la retícula editorial (proporciones 7/5 o 8/4) es lo que produce la sensación premium.
- **Imágenes a sangre selectivas**, solo en hero, `/la-clinica` y CTA final. Su valor está en la excepción.
- **Elementos fijos con moderación:** la tarjeta de CTA en fichas de procedimiento y el índice de la FAQ. Nada más.

## 17.4 Restricción de las imágenes

Con un máximo de 700×500, ninguna fotografía puede usarse a sangre en escritorio sin degradarse. **Consecuencias arquitectónicas:**

- Composiciones de imagen **contenida**, no a pantalla completa, salvo los dos fondos del hero.
- Recortes cerrados en lugar de ampliaciones.
- El **color y la tipografía**, no la fotografía, sostienen la presencia visual en pantallas grandes.
- Uso deliberado de `Background` y `Sand` como superficies protagonistas.

Esto es una restricción real, y también una oportunidad: obliga a una dirección de arte más tipográfica y editorial, que es exactamente el registro de *Clinical Luxury*.

---

# 18. Conversión

## 18.1 Recorrido

| Etapa | Qué necesita el usuario | Dónde ocurre | CTA disponible |
|---|---|---|---|
| **Descubrimiento** | Entender qué es Nova en segundos | Hero, `02 Nova en breve`, resultados de búsqueda, fichas de procedimiento como entrada orgánica | Agendar valoración · Explorar procedimientos |
| **Interés** | Confirmar que se hace lo que busca | `03 Procedimientos`, `/procedimientos`, categorías | Ver categoría · Ver procedimiento |
| **Confianza** | Saber quién opera y si es seguro | `04 Especialistas`, `/especialistas/[slug]`, `/la-clinica`, `07 Testimonios` | Agendar con especialista · Conocer la clínica |
| **Exploración** | Entender el proceso, la recuperación y el coste | `/procedimientos/[slug]`, `/tu-proceso`, `/financiacion`, FAQ, `/resultados` | Agendar valoración · WhatsApp |
| **Valoración** | Dar el paso con la mínima fricción | `/agendar-valoracion`, WhatsApp, teléfono | **Enviar solicitud** |

Las etapas no son lineales: un usuario puede entrar por una ficha de procedimiento desde un buscador y estar en "interés" sin haber pasado por la portada. **Por eso el CTA primario debe estar presente en todas las plantillas, no solo en la portada.**

## 18.2 Puntos de conversión

| Acción | Dónde está disponible |
|---|---|
| **Agendar** | Barra de navegación (todas las páginas) · barra inferior móvil · hero · CTA final · cierre de cada categoría, ficha, especialista, caso, proceso, financiación y FAQ · tarjeta lateral fija en fichas |
| **WhatsApp** | Barra inferior móvil · pie · CTA final · cierre de FAQ · CTA secundario de cada ficha |
| **Llamar** | Pie (`tel:`) · página de valoración · panel de menú móvil |
| **Explorar procedimientos** | Hero (secundario) · navegación · portada · fichas relacionadas |
| **Conocer especialistas** | Navegación · portada · cada ficha de procedimiento · cada caso |
| **Ver resultados** | Navegación · portada · cada ficha de procedimiento · cada ficha de especialista |

## 18.3 Jerarquía de CTA

| Nivel | Etiqueta | Presencia | Tratamiento |
|---|---|---|---|
| **Primario** | **Agendar valoración** | Todas las páginas y todas las secciones de cierre | Botón sólido, color de acento. **Etiqueta idéntica en todo el sitio** |
| **Secundario** | **Escribir por WhatsApp** | Junto al primario en momentos de decisión | Contorneado o icono + texto |
| **Secundario** | **Explorar procedimientos** | Hero y portada | Contorneado |
| **Terciario** | Ver especialistas · Ver resultados · Conocer la clínica · Ver financiación | Navegación lateral entre secciones | Enlace textual con subrayado |
| **Utilitario** | Llamar · Email · Ubicación | Pie y página de valoración | Enlace con icono mínimo |

## 18.4 Principios

1. **Una sola etiqueta primaria en todo el sitio.** De 6 CTA hacia 5 destinos, a 1 etiqueta reconocible. La repetición construye reconocimiento; la variación lo destruye.
2. **El CTA transporta contexto.** Procedimiento y especialista viajan al formulario y al mensaje de WhatsApp. Mejor experiencia y mejor cualificación.
3. **Nunca dos CTA primarios compitiendo** en la misma vista.
4. **Ninguna página sin salida.** Toda plantilla termina en una acción o en una exploración pertinente.
5. **Sin ventanas emergentes de captación.** Ni al entrar, ni al intentar salir. Incompatibles con el registro premium.
6. **El coste se resuelve, no se esquiva.** "El presupuesto se define en la valoración" es una respuesta legítima que convierte la duda económica en motivo para agendar.

---

# 19. SEO y URLs

## 19.1 Criterios

Minúsculas · guiones · español · sin fechas · sin parámetros · sin `.html` · sin prefijos técnicos · legibles en voz alta · jerarquía coherente con la navegación · sin barra final.

**Dominio canónico:** `https://www.clinicanova.com.co` con `www`, criterio ya establecido por el `canonical` actual. Redirección 301 desde la variante sin `www` — que hoy es la causa de la inconsistencia del enlace a la FAQ.

## 19.2 URLs definitivas

| Página | URL |
|---|---|
| Inicio | `/` |
| Procedimientos | `/procedimientos` |
| Corporales | `/procedimientos/corporales` |
| Faciales | `/procedimientos/faciales` |
| Belleza íntima | `/procedimientos/belleza-intima` |
| Procedimiento | `/procedimientos/[slug]` |
| Especialistas | `/especialistas` |
| Especialista | `/especialistas/[slug]` |
| Resultados | `/resultados` |
| Caso | `/resultados/[slug]` |
| La clínica | `/la-clinica` |
| Tu proceso | `/tu-proceso` |
| Financiación | `/tu-proceso/financiacion` |
| Preguntas frecuentes | `/tu-proceso/preguntas-frecuentes` |
| Agendar valoración | `/agendar-valoracion` |
| Política de datos | `/politica-de-datos` |
| Política de cookies | `/politica-de-cookies` |
| Aviso legal | `/aviso-legal` |

## 19.3 Por qué procedimientos en plano y no anidados

Alternativa descartada: `/procedimientos/corporales/abdominoplastia`.

| Criterio | Plano (elegido) | Anidado |
|---|---|---|
| Profundidad | 2 niveles | 3 niveles |
| Recategorización | La URL no cambia | Rompe la URL y exige redirección |
| Procedimiento en dos categorías | Posible | Duplica contenido o fuerza canónicos |
| Longitud | Más corta | Más larga |
| Claridad de jerarquía | Menor en la URL | Mayor |

Se elige el modelo plano. La jerarquía se comunica con **migas de pan y `BreadcrumbList`**, que es su lugar natural, no con la profundidad de la ruta. **Coste asumido:** los slugs `corporales`, `faciales` y `belleza-intima` quedan reservados (§4.4).

## 19.4 Decisión sobre "belleza-intima"

El sitio actual tiene una etiqueta comercial ("Belleza íntima") y una URL clínica (`/ginecologia-estetica/`). Se unifica en **`belleza-intima`**, coherente con la etiqueta visible.

Es también la decisión correcta en cuanto a discreción: quien consulta esta categoría probablemente prefiera una URL menos explícita en su historial. Los términos clínicos se usarán en el contenido y los metadatos, donde aportan precisión sin exponer al usuario. **Sujeto a validación de la clínica** — es una decisión de marca además de arquitectura.

## 19.5 Mapa de redirecciones

| URL actual | Destino | Tipo |
|---|---|---|
| `/nosotros/` | `/la-clinica` | 301 |
| `/nuestros-servicios/` | `/procedimientos` | 301 |
| `/procedimientos-corporales/` | `/procedimientos/corporales` | 301 |
| `/procedimientos-faciales/` | `/procedimientos/faciales` | 301 |
| `/ginecologia-estetica/` | `/procedimientos/belleza-intima` | 301 |
| `/especialistas/` | `/especialistas` | 301 |
| `/contacto/` | `/agendar-valoracion` | 301 |
| `/galeria/` | `/resultados` | 301 |
| `/medios-de-pago/` | `/tu-proceso/financiacion` | 301 |
| `/preguntas-frecuentes/` | `/tu-proceso/preguntas-frecuentes` | 301 |
| `/2023/11/14/politica-de-tratamiento-y-proteccion-de-datos/` | `/politica-de-datos` | 301 |
| `clinicanova.com.co/*` (sin `www`) | `www.clinicanova.com.co/*` | 301 |
| `/feed/`, `/comments/feed/`, `/wp-json/*`, `/xmlrpc.php` | 410 o 404 | Eliminadas |

## 19.6 Metadatos

Por plantilla, sin excepción: `title` de 50–60 caracteres, `description` de 140–160, Open Graph y Twitter Card con imagen, `canonical` propio, `lang="es-CO"`.

Nada de esto existe hoy: la `description` está vacía, no hay Open Graph ni datos estructurados, y el `title` tiene 353 caracteres [A01 §2.7].

## 19.7 Datos estructurados

| Tipo | Dónde | Requisito |
|---|---|---|
| `MedicalClinic` / `MedicalBusiness` | Global | Nombre, dirección, teléfono, horario. Horario `[CONTENIDO POR CONFIRMAR]` |
| `Physician` | Ficha de especialista | Solo con datos reales verificados |
| `MedicalProcedure` | Ficha de procedimiento | Solo con contenido confirmado |
| `BreadcrumbList` | Todas las páginas jerárquicas | Refuerza la jerarquía que la URL plana no expresa |
| `FAQPage` | FAQ y bloques de FAQ | Requiere respuestas en el HTML |
| `WebSite` | Global | — |

**Regla absoluta:** no se publican datos estructurados con información no verificada. Marcar `Physician` con datos inventados es peor que no marcarlo.

## 19.8 Indexación

- **`robots.txt` y `sitemap.xml`** generados.
- **El `noindex, nofollow` actual del sitio en producción debe revisarse con la clínica** antes del lanzamiento [D00 §16]. No se asume que deba mantenerse, pero tampoco se elimina sin confirmación: podría ser deliberado.
- **La demo, mientras sea propuesta no aprobada, se publica con `noindex`.** Evita que compita en buscadores con el sitio real de la clínica.

---

# 20. Reutilizabilidad

La arquitectura debe poder aplicarse a otra clínica estética. Eso exige separar cuatro capas desde el diseño, no después.

## 20.1 Las cuatro capas

| Capa | Qué contiene | ¿Cambia entre clínicas? |
|---|---|---|
| **Estructura** | Rutas, plantillas, layouts, jerarquía, recorridos, lógica de navegación | **No** |
| **Componentes** | Elementos de UI sin contenido ni color propios | **No** |
| **Branding** | Tokens de color, tipografía, espaciado, radios, sombras, logotipo | **Sí** — por configuración |
| **Datos** | Textos, imágenes, procedimientos, especialistas, casos, testimonios, contacto | **Sí** — por datos |

**Regla:** ningún componente contiene literales de marca. Ni "Clínica Nova", ni `#183C35`, ni "Cormorant Garamond", ni rutas de imagen fijas, ni el número de WhatsApp.

## 20.2 Estructura reutilizable sin cambios

La arquitectura definida es **genérica para el sector**. Cualquier clínica estética necesita:

| Sección | Universalidad |
|---|---|
| Índice → categoría → procedimiento | Universal |
| Índice → ficha de especialista | Universal |
| Índice → caso de resultados | Universal |
| Página institucional | Universal |
| Proceso del paciente | Universal |
| Financiación | Universal en Latinoamérica |
| FAQ | Universal |
| Página de conversión | Universal |

**No hay una sola ruta específica de Clínica Nova.** Las tres categorías son datos, no estructura: otra clínica podría tener cuatro o dos.

## 20.3 Qué debe ser configurable

| Elemento | Nivel de cambio |
|---|---|
| Nombre de la clínica | Un valor de configuración |
| Logotipo (todas las variantes) y favicon | Sustituir archivos y una referencia |
| Colores | Editar tokens |
| Tipografías | Editar tokens y la carga de fuentes |
| Fotografías | Sustituir archivos y referencias en datos |
| Textos | Editar archivos de contenido |
| **Categorías de procedimientos** | Colección de datos — de 1 a N |
| **Procedimientos** | Colección — de 0 a N |
| **Especialistas** | Colección — de 0 a N |
| **Casos** | Colección — de 0 a N |
| Testimonios | Colección |
| Entidades de financiación | Colección — de 0 a N |
| Convenios | Colección |
| Contacto, horarios, redes | Un único objeto |
| Estructura de navegación | Una estructura de datos |
| Etiqueta y destino del CTA | Configuración |
| Campos del formulario | Esquema configurable |

## 20.4 La ventaja inmediata

Esta arquitectura **no es solo un seguro** por si la propuesta no se cierra: es lo que resuelve el problema de contenido de hoy.

Si Especialistas, Procedimientos y Resultados se construyen como colecciones con placeholders, la llegada del contenido real es **rellenar datos, no rediseñar plantillas**. Y si no llega nunca, el sistema se reorienta a otro cliente sin trabajo perdido.

Es además un argumento comercial concreto: el sitio queda mantenible y ampliable por la propia clínica, frente a los 13 plugins y la maquetación por desplazamientos absolutos del sitio actual [R02 §11.1].

---

# 21. Justificación de las decisiones

Material directo para la presentación comercial.

## 21.1 Navegación única de 5 secciones + CTA

**Problema actual:** tres menús con 13 entradas; Galería y Medios de pago relegados a la barra secundaria; FAQ solo en el pie.
**Decisión:** un menú de 5 secciones con dos desplegables, más el CTA. "Inicio" sale del menú porque el logotipo lo cubre.
**Beneficio para el usuario:** entiende el sitio de un vistazo y encuentra cualquier contenido en dos gestos.
**Beneficio para la clínica:** contenido comercial (financiación, resultados) recupera visibilidad, y el CTA deja de competir con 12 enlaces.

## 21.2 Página propia por procedimiento

**Problema actual:** solo tres categorías; ningún procedimiento tiene URL. Quien busca "abdominoplastia" no tiene destino.
**Decisión:** `/procedimientos/[slug]` con ficha completa, ficha técnica, especialistas y casos vinculados.
**Beneficio para el usuario:** encuentra información concreta del procedimiento que le interesa, sin rastrear una categoría.
**Beneficio para la clínica:** una página indexable por procedimiento, que es como realmente busca la gente. Multiplica las puertas de entrada orgánicas y cualifica al visitante antes de que contacte.

## 21.3 CTA único con contexto

**Problema actual:** seis CTA distintos hacia cinco destinos, uno dependiente de un acortador. Los mensajes de WhatsApp son genéricos e idénticos.
**Decisión:** una sola etiqueta —**Agendar valoración**— en todo el sitio, que transporta procedimiento y especialista al formulario y al mensaje.
**Beneficio para el usuario:** siempre sabe cuál es el siguiente paso, y no tiene que explicar desde cero lo que ya estaba mirando.
**Beneficio para la clínica:** consultas que llegan cualificadas, con el procedimiento identificado, y una conversión medible en un solo embudo.

## 21.4 Página de conversión propia

**Problema actual:** el objetivo comercial del sitio no tiene página. "Valoración virtual" es un enlace a WhatsApp.
**Decisión:** `/agendar-valoracion`, con propuesta de valor, formulario de dos campos obligatorios, WhatsApp, teléfono y explicación de qué ocurre después.
**Beneficio para el usuario:** sabe qué es una valoración, qué le van a pedir y cuándo le responden. Y elige su canal.
**Beneficio para la clínica:** deja de depender de un único canal externo, registra las solicitudes y puede medir su embudo.

## 21.5 Especialistas como sección con ficha propia

**Problema actual:** cero especialistas publicados, cuando el cirujano es el principal factor de decisión.
**Decisión:** índice más ficha con registro profesional, formación, enfoque, procedimientos vinculados y agendamiento directo.
**Beneficio para el usuario:** puede responder "¿quién me operaría y qué credenciales tiene?" — la pregunta que más pesa.
**Beneficio para la clínica:** convierte a su equipo en su principal activo de confianza, hoy completamente invisible.

## 21.6 Resultados editoriales en lugar de galería

**Problema actual:** una galería de imágenes sin contexto, sin relación con procedimientos ni equipo y sin voz del paciente.
**Decisión:** casos con narrativa, procedimiento y especialista vinculados, cronología, testimonio, comparador deliberado y aviso de variabilidad.
**Beneficio para el usuario:** se identifica con una historia y entiende el proceso, no solo el desenlace.
**Beneficio para la clínica:** prueba social más creíble y responsable, con menos exposición legal.

## 21.7 Financiación y FAQ dentro de "Tu proceso", visibles en el menú

**Problema actual:** la financiación vive en la barra secundaria; la FAQ solo en el pie. Dos contenidos que resuelven objeciones, escondidos.
**Decisión:** ambas como subpáginas de "Tu proceso", **reveladas en el desplegable** para que el contenedor no sea opaco.
**Beneficio para el usuario:** resuelve sus dos dudas mayores —coste y qué va a pasar— sin tener que preguntar.
**Beneficio para la clínica:** menos consultas repetitivas y menos abandonos por falta de información.

## 21.8 Sin página de contacto

**Problema actual:** `/contacto/` duplica el pie y compite con el objetivo comercial.
**Decisión:** contacto exhaustivo en el pie, conversión en `/agendar-valoracion`, ubicación en `/la-clinica`, bloque institucional para PQRS y empleo, y 301 de `/contacto`.
**Beneficio para el usuario:** los datos están en todas las páginas, no en una. Una sola puerta para actuar.
**Beneficio para la clínica:** no divide la intención en dos destinos y concentra la conversión.

## 21.9 Un solo elemento persistente en móvil

**Problema actual:** burbuja flotante de WhatsApp que se abre sola a los 10 segundos, sin CTA de agendamiento.
**Decisión:** una barra inferior con dos acciones jerarquizadas —Agendar (primaria) y WhatsApp (secundaria)—, que aparece tras scroll, se oculta con el teclado y no se duplica con burbujas ni emergentes.
**Beneficio para el usuario:** una acción clara siempre a mano, sin interrupciones automáticas.
**Beneficio para la clínica:** el CTA principal permanece accesible en el dispositivo mayoritario, sin sacrificar WhatsApp.

## 21.10 Hero único en lugar de carrusel

**Problema actual:** tres diapositivas en rotación automática con mensajes equivalentes, texto con sombra sobre imagen y ningún mensaje que se fije.
**Decisión:** un hero fijo con el concepto de marca, subtítulo concreto y dos CTA jerarquizados.
**Beneficio para el usuario:** entiende en segundos qué es Nova y qué puede hacer, sin esperar a que rote un mensaje.
**Beneficio para la clínica:** un posicionamiento nítido en el momento de mayor atención, en lugar de tres mensajes que se anulan.

## 21.11 Reconstruir "Por qué Nova" sobre hechos

**Problema actual:** el texto institucional se apoya en "resultados excepcionales", "altamente calificado" y "tecnología de vanguardia" — afirmaciones no verificables y, en publicidad sanitaria en Colombia, sujetas a restricción.
**Decisión:** fusionar introducción y diferenciales en una sección sostenida por hechos comprobables: actividad, sede propia en NOVA Torre Médica, tres áreas, acompañamiento. Lo no verificable queda marcado.
**Beneficio para el usuario:** información en la que puede confiar en lugar de adjetivos.
**Beneficio para la clínica:** reduce exposición regulatoria y comunica con más credibilidad. Menos texto, más fuerza.

## 21.12 URLs limpias y planas

**Problema actual:** política legal en URL de blog fechada, etiqueta que no coincide con la URL, un enlace sin `www`, rutas cargadas de palabras clave.
**Decisión:** URLs en español, sin fechas, con procedimientos en plano y jerarquía comunicada por migas de pan y datos estructurados. Mapa completo de 301.
**Beneficio para el usuario:** URLs legibles y compartibles, sin enlaces rotos ni saltos.
**Beneficio para la clínica:** no pierde el posicionamiento existente y obtiene una estructura que escala sin romperse al recategorizar.

## 21.13 Arquitectura por datos

**Problema actual:** 13 plugins, contenido atrapado en CSS generado, color escrito en el HTML y maquetación por desplazamientos absolutos. Cualquier cambio exige tocar el diseño.
**Decisión:** procedimientos, especialistas, casos, testimonios, financiación y contacto como colecciones de datos; marca como tokens.
**Beneficio para el usuario:** un sitio coherente, rápido y sin componentes que se contradicen entre sí.
**Beneficio para la clínica:** puede añadir un procedimiento o un especialista sin rediseñar nada, y el sitio no se degrada con el tiempo.

---

# 22. Arquitectura definitiva

## 22.1 Árbol del sitio

```
INICIO  /
│
├── PROCEDIMIENTOS  /procedimientos
│   ├── Corporales  /procedimientos/corporales
│   ├── Faciales  /procedimientos/faciales
│   ├── Belleza íntima  /procedimientos/belleza-intima
│   └── Procedimiento  /procedimientos/[slug]
│
├── ESPECIALISTAS  /especialistas
│   └── Especialista  /especialistas/[slug]
│
├── RESULTADOS  /resultados
│   └── Caso  /resultados/[slug]
│
├── LA CLÍNICA  /la-clinica
│
├── TU PROCESO  /tu-proceso
│   ├── Financiación  /tu-proceso/financiacion
│   └── Preguntas frecuentes  /tu-proceso/preguntas-frecuentes
│
└── ► AGENDAR VALORACIÓN  /agendar-valoracion        ◄ CTA único

UTILIDAD (solo pie)
├── Política de datos  /politica-de-datos
├── Política de cookies  /politica-de-cookies
├── Aviso legal  /aviso-legal
└── 404  /404

ENLACES EXTERNOS (solo pie)
├── PQRS-F  ·  Trabaja con nosotros  ·  Satisfacción del servicio
└── Redes sociales  [CONTENIDO POR CONFIRMAR]
```

## 22.2 Navegación tal como la ve el usuario

```
ESCRITORIO
┌────────────────────────────────────────────────────────────────────┐
│ [LOGO]   Procedimientos▾  Especialistas  Resultados                │
│          La clínica  Tu proceso▾        [ Agendar valoración ]      │
└────────────────────────────────────────────────────────────────────┘

  Procedimientos▾              Tu proceso▾
  ├ Todos los procedimientos   ├ El proceso
  ├ Corporales                 ├ Financiación
  ├ Faciales                   └ Preguntas frecuentes
  └ Belleza íntima

MÓVIL
┌──────────────────────────┐
│ [LOGO]              [☰]  │
└──────────────────────────┘
             ⋮
┌──────────────────────────┐
│ [ Agendar valoración ] [♦]│   ← barra persistente, único elemento fijo
└──────────────────────────┘
```

## 22.3 Estructura de la Home

```
01  HERO ......................... Precisión médica. Elegancia humana.
                                   ► Agendar valoración  ·  Explorar procedimientos
02  NOVA EN BREVE ............... introducción + confianza (fusionadas)
                                   → Conocer la clínica
03  PROCEDIMIENTOS .............. Corporales · Faciales · Belleza íntima
                                   → Ver todos los procedimientos
04  ESPECIALISTAS ............... equipo  [CONTENIDO POR CONFIRMAR]
                                   → Conocer al equipo
05  RESULTADOS .................. casos destacados  [placeholder]
                                   → Ver todos los resultados
06  TU PROCESO .................. 01 Conversamos → 05 Seguimos contigo
                                   → Ver el proceso completo
07  TESTIMONIOS ................. 3 testimonios reales, editados
08  FINANCIACIÓN ................ banda compacta · Servicrédito · CFA
                                   → Conocer opciones de financiación
09  CTA FINAL ................... "Tu transformación comienza con una conversación."
                                   ► Agendar valoración  ·  WhatsApp
10  FOOTER ...................... contacto · navegación · legal · redes
```

## 22.4 Flujo de conversión

```
        ENTRADA                    Portada  ·  Ficha de procedimiento (orgánico)  ·  Ads
             │
    DESCUBRIMIENTO ─── Hero · Nova en breve
             │
        INTERÉS ─────── Procedimientos → Categoría → Procedimiento
             │
       CONFIANZA ────── Especialistas · La clínica · Testimonios · Resultados
             │
     EXPLORACIÓN ────── Ficha técnica · Tu proceso · Financiación · FAQ
             │
      VALORACIÓN ────── /agendar-valoracion  ·  WhatsApp  ·  Teléfono
             │
      CONFIRMACIÓN ──── qué sigue + exploración sugerida

   CTA primario  ► Agendar valoración ......... presente en todas las plantillas
   CTA secundario  WhatsApp · Explorar procedimientos
   CTA terciario   Ver especialistas · Ver resultados · Conocer la clínica
```

## 22.5 Cuadro final

| | Sitio actual | Nueva arquitectura |
|---|---|---|
| Menús | 3 | **1** |
| Entradas de navegación | 13 | **5 + CTA** |
| Páginas de contenido | 12 | **15 + 4 de utilidad** |
| Páginas por procedimiento | 0 | **N escalable** |
| Fichas de especialista | 0 | **N escalable** |
| Casos de resultados | 0 | **N escalable** |
| Página de conversión | **Ninguna** | `/agendar-valoracion` |
| Etiquetas de CTA | 6 hacia 5 destinos | **1 con contexto** |
| Elementos fijos en móvil | 1 burbuja automática | **1 barra con jerarquía** |
| FAQ alcanzable desde | Solo el pie | Navegación principal |
| Financiación alcanzable desde | Barra secundaria | Navegación principal |
| Datos de contacto accionables | Ninguno | Todos |
| Datos estructurados | Ninguno | 6 tipos |
| Contenido gestionable como datos | No | Sí, todo |

---

## Nota de método

- No se ha modificado `/original` ni ninguno de los documentos anteriores.
- No se ha programado, ni creado componentes, ni instalado dependencias.
- No se ha creado ningún archivo adicional: solo este documento.
- No se ha inventado ningún procedimiento, especialista, dato médico, precio, condición ni estadística. Todo lo no disponible aparece como `[CONTENIDO POR CONFIRMAR]`.
- Las decisiones marcadas como ajuste respecto a la propuesta inicial —eliminar "Inicio" del menú, revelar el contenido de "Tu proceso", fusionar introducción y diferenciales, no crear `/contacto`, precisar los pasos 4 y 5 del proceso, y elegir URLs planas de procedimiento— están justificadas en su sección y son revisables.
- La estructura de "Tu proceso" y el contenido de sus cinco pasos son una propuesta que la clínica debe validar [D00 §8/06].

**Siguiente fase:** sistema de diseño — tokens de color y tipografía, escala modular, retícula, componentes y estados. Puede iniciarse de inmediato: no depende de contenido pendiente.
