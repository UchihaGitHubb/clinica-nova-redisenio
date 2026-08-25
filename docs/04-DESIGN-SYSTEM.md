# 04 · Design System y dirección visual — Clínica Nova

**Proyecto:** Rediseño web Clínica Nova · propuesta privada de alta fidelidad
**Concepto:** Clinical Luxury — *Precisión médica. Elegancia humana.*
**Fuentes:** `00-DIRECCION-PROYECTO.md` **[D00]** · `01-AUDITORIA-CONTENIDO.md` **[A01]** · `02-INVENTARIO-RECURSOS.md` **[R02]** · `03-ARQUITECTURA.md` **[X03]**

Este documento es una **especificación**. Cada decisión está expresada en valores aplicables. Lo que no puede determinarse con el material disponible se marca como **[DECISIÓN PENDIENTE]** con indicación de qué falta.

Todos los ratios de contraste citados están calculados según WCAG 2.1 sobre los valores exactos de la paleta.

---

# 1. Dirección artística

## 1.1 Concepto visual

**Un consultorio, no un catálogo.** La referencia formal no es la web de clínica estética ni la marca de lujo: es la **publicación médica editorial** — una revista científica bien compuesta, donde la información tiene autoridad porque está ordenada, no porque esté decorada.

De ahí se deriva todo lo demás: retícula visible en su lógica, tipografía con dos voces claramente separadas, fotografía tratada como documento y no como ambiente, y ornamento reducido a la línea fina.

## 1.2 Personalidad

| Es | No es |
|---|---|
| Sobrio | Austero |
| Cálido | Blando |
| Preciso | Frío |
| Editorial | Decorativo |
| Seguro | Presuntuoso |
| Contemporáneo | De moda |
| Discreto | Anodino |

## 1.3 Sensación que debe producir

La primera impresión debe ser **"esto es serio"**, y la segunda **"y además me tratan bien"**. En ese orden. Si el orden se invierte —si primero parece agradable y después competente— el resultado deriva a spa.

La emoción objetivo es **calma**: la sensación de haber llegado a un sitio donde alguien ya pensó en las preguntas que uno traía.

## 1.4 La relación entre medicina y lujo

El error habitual es sumar: estética clínica **más** ornamento premium. El resultado es un hospital con dorados.

**Aquí no se suma, se sustituye el soporte.** El lujo no aporta elementos: aporta **estándar de ejecución**. Se manifiesta en que las líneas están alineadas, en que el espacio es generoso y constante, en que la tipografía tiene una escala real, en que nada está aproximado. Es un lujo de precisión — que es, exactamente, el mismo valor que se le pide a la medicina.

**Regla operativa:** si un elemento existe para "verse premium", se elimina. Si existe para ordenar información y además se ve premium, se conserva.

## 1.5 La relación entre precisión y humanidad

Se reparten por **canales distintos**, nunca compitiendo en el mismo elemento:

| Canal | Comunica |
|---|---|
| **Estructura** (retícula, espaciado, alineación, datos) | Precisión |
| **Fotografía** (personas, luz natural, gesto real) | Humanidad |
| **Tipografía display** (Cormorant, curvas, contraste de trazo) | Humanidad |
| **Tipografía de interfaz** (Manrope, neutra) | Precisión |
| **Color de fondo** (arena cálida) | Humanidad |
| **Color primario** (verde profundo) | Precisión |

La consecuencia práctica: **la humanidad nunca se comunica desordenando.** No hay elementos torcidos, tipografías manuscritas ni composiciones «espontáneas». La calidez está en el color, la fotografía y el lenguaje, no en la relajación de la retícula.

## 1.6 Tratamiento de fotografías

Detalle completo en §17. En términos de dirección artística:

- La fotografía es **documento**, no ambiente. Muestra a personas, espacios y trabajo reales.
- **Una sola corrección de color, mínima y uniforme** para todo el material. No hay filtros por sección ni tratamientos artísticos.
- La fotografía **nunca compite con el texto**: o es fondo con velo controlado, o es contenido con espacio propio. Nunca ambas cosas a medias.
- Predominio del **formato vertical** (2:3, 4:5). El horizontal se reserva para espacios e instalaciones.

## 1.7 Uso del espacio

El espacio es el material principal del sistema, y su regla es **la constancia antes que la cantidad**.

- Ritmo vertical de sección: **120–160 px** en escritorio, **64–80 px** en móvil.
- Un solo mensaje principal por pantalla.
- El espacio se concentra **alrededor de los titulares y antes de los CTA**, que son los dos momentos que necesitan aire.
- El espacio **no** se usa para separar elementos relacionados: dentro de un bloque, la proximidad agrupa.

## 1.8 Densidad visual

**Baja en descubrimiento, alta en información.** Es una decisión deliberada y visible:

| Contexto | Densidad | Ejemplo |
|---|---|---|
| Portada, índices, categorías | **Baja** — 3 a 5 elementos por pantalla | Tarjetas de procedimiento |
| Fichas de procedimiento, financiación, FAQ | **Alta** — información compacta y tabulada | Ficha técnica |

Que la densidad cambie es lo que produce la distinción entre *descubrir* y *leer* que pide [X03 §7]. Un sitio con densidad uniforme no puede hacer esa distinción.

## 1.9 Ritmo de las secciones

Se alternan tres tipos de superficie para producir cadencia:

| Tipo | Fondo | Función |
|---|---|---|
| **Clara** | `#F5F2EC` | Superficie por defecto. Lectura |
| **Cálida** | `#D9D0C2` o `#E9E3D8` | Separación, pausa, bloques de apoyo |
| **Profunda** | `#183C35` / `#102D28` | Momentos de peso: cierre, CTA, pie |

**Reglas de secuencia:**
1. Nunca dos superficies profundas consecutivas.
2. Máximo **dos** superficies profundas por página (habitualmente CTA final y pie).
3. Cada sección debe diferenciarse de su vecina en **al menos uno** de estos tres ejes: fondo, dirección de la composición, presencia de imagen. Si coincide en los tres, se fusionan o se rediseña una.

## 1.10 Los siete principios visuales

**1 · El lujo se comunica con proporción, espacio y fotografía; nunca con ornamento.**
Si un elemento no ordena información, no existe. Sin degradados decorativos, sin marcos, sin brillos, sin texturas.

**2 · Dos voces tipográficas, sin solapamiento.**
Cormorant Garamond habla cuando el sitio *expresa*. Manrope habla cuando el sitio *informa*. Ninguna invade el terreno de la otra, y esa frontera es el principal recurso de jerarquía.

**3 · La esquina viva es identidad.**
Radios de 0 a 4 px. Nada redondeado, nada en píldora. La esquina afilada es lo que separa una publicación de una aplicación.

**4 · La línea fina es el único ornamento permitido.**
1 px en verde traslúcido. Sustituye a cajas, sombras, fondos de tarjeta y separadores gruesos.

**5 · El oro es un acento puntual, no una superficie.**
`#B7A47A` no rellena secciones ni se usa como texto sobre claro. Aparece en subrayados, marcas de estado activo y el CTA sobre fondo profundo. Menos del 3 % de cualquier pantalla.

**6 · La densidad cambia con la intención.**
Baja para descubrir, alta para decidir. El cambio de densidad es una señal de navegación, no un accidente.

**7 · El movimiento confirma; nunca entretiene.**
Ningún desplazamiento supera 16 px, ninguna escala supera el 3 %, nada se mueve en bucle permanente.

---

# 2. Diferenciación

## 2.1 El problema a evitar

La web genérica de clínica estética tiene un conjunto de rasgos reconocibles: azul o rosa sobre blanco, tarjetas redondeadas con sombra difusa, iconos circulares de colores, botones en píldora, carrusel automático, fotografía de banco con sonrisas, texto centrado en todas las secciones, contadores animados y una sección de "por qué elegirnos" con seis iconos.

**El sistema se define, en parte, por la ausencia sistemática de todos esos rasgos.**

## 2.2 Los seis rasgos que constituyen la identidad

Estos son los elementos que deben hacer reconocible el sitio **sin necesidad de ver el logotipo**:

| # | Rasgo | Especificación |
|---|---|---|
| **1** | **Verde profundo sobre arena cálida** | El par `#183C35` / `#F5F2EC`. Ni azul médico ni blanco clínico. Es la firma cromática |
| **2** | **Cormorant grande con tracking negativo** | Titulares de 36 px en adelante con `letter-spacing` entre −0.01 y −0.02 em. **Nunca** espaciado positivo, **nunca** en versales |
| **3** | **Esquina viva** | Radio 0–4 px en todo el sistema. Cero píldoras |
| **4** | **Filete de 1 px como único ornamento** | `rgba(24,60,53,0.08–0.16)`. Estructura sin cajas |
| **5** | **Verticales 2:3 en retícula asimétrica** | Las proporciones de imagen son verticales y las columnas nunca 50/50 |
| **6** | **Numerales como grafismo** | Cifras en Cormorant a gran tamaño para pasos del proceso y numeración de casos. Sustituyen a los iconos |

## 2.3 Diferenciación por dimensión

| Dimensión | Genérico | Aquí |
|---|---|---|
| **Composición** | Centrada y simétrica, 3 columnas iguales | Alineada a la izquierda, proporciones 7/5 y 5/7, mosaico irregular en resultados |
| **Tipografía** | Una sans para todo, jerarquía por tamaño | Dos familias con función asignada, jerarquía por familia + tamaño + medida |
| **Fotografía** | Banco de imágenes, horizontal, filtro azulado | Material real, vertical, corrección única y mínima |
| **Color** | Azul + blanco + acento saturado | Verde profundo + arena + latón desaturado |
| **Interacción** | Muchas animaciones, aparición de tarjetas, contadores | Aparición única de 16 px, escala de imagen 3 %, transiciones de estado de 200 ms |
| **Navegación** | 10+ enlaces, buscador, idiomas, redes en la cabecera | 5 secciones + 1 CTA. Nada más |
| **Espacios** | Uniformes y estrechos | Rítmicos: 120–160 px entre secciones, densidad variable dentro |
| **Jerarquía** | Todo destaca | Un mensaje por pantalla, un CTA primario por vista |

## 2.4 Prueba de identidad

Un fragmento del sitio sin logotipo debe superar estas cuatro comprobaciones:

1. ¿Se ve el par verde profundo / arena cálida?
2. ¿Hay un titular en serif con tracking negativo?
3. ¿Todas las esquinas son vivas o casi?
4. ¿La estructura está hecha de filetes de 1 px en lugar de cajas con sombra?

Si las cuatro respuestas son afirmativas, es reconocible.

---

# 3. Paleta de color

## 3.1 Punto de partida: la identidad cromática actual

[R02 §8] documenta la paleta real del sitio actual. Su centro de gravedad, medido por frecuencia:

| Color actual | HSL | Uso verificado |
|---|---|---|
| `#1b6685` | `hsl(198, 66%, 31%)` | Fondo de sección, tarjetas de título |
| `#266484` | `hsl(202, 55%, 33%)` | **Todos los encabezados** `h1`–`h6` |
| `#27b0be` | `hsl(186, 66%, 45%)` | Velo del hero, botón de CTA, testimonios |
| `#008080` | `hsl(180, 100%, 25%)` | Titulares, aplicado en estilos en línea |
| `#333333` | — | Texto del cuerpo |

## 3.2 Justificación del cambio

**No se ignora la identidad actual. Se argumenta por qué se modifica, y qué se conserva de ella.**

**Primero: hoy no existe una identidad cromática que preservar.** Coexisten al menos **seis azules y cuatro turquesas** [R02 §8.3], ninguno dominante — el más frecuente aparece 12 veces frente a 11 del azul por defecto del tema, que ni siquiera se renderiza. Hay color escrito directamente en el HTML en 11 estilos en línea, y un `#333300` aparentemente accidental. No es una paleta: es una acumulación. **No hay un color de marca que romper porque no hay uno consistente.**

**Segundo: lo que cambia no es el tono, es el valor y la saturación.** Y esto es la clave del argumento:

| | Tono | Saturación | Luminosidad |
|---|---|---|---|
| Turquesa actual `#27b0be` | 186° | 66 % | **45 %** |
| Teal actual `#008080` | 180° | 100 % | **25 %** |
| **Primary nuevo `#183C35`** | **168°** | **43 %** | **16 %** |

El sitio actual ya apunta al **verde-azul**: su teal está a 180° y su turquesa a 186°. El nuevo primario está a 168° — una rotación de 12 a 18° dentro de la misma familia cromática. **La continuidad de tono existe.**

Lo que se transforma radicalmente es lo otro: de saturación 66–100 % a **43 %**, y de luminosidad 25–45 % a **16 %**. Y es precisamente ahí donde reside el problema del sitio actual: un verde-azul **brillante y saturado** lee como «genérico médico»; el mismo verde-azul **oscuro y desaturado** lee como «considerado». No se abandona la dirección cromática de la clínica: se lleva a un valor que puede sostener una identidad premium.

**Tercero: el azul dominante sí se abandona, y con motivo explícito.** [D00 §3] establece evitar el «exceso de azul médico» y la «estética de hospital genérico». Los `#1b6685` y `#266484` son exactamente eso.

**[DECISIÓN PENDIENTE] — Colores oficiales del logotipo.**
Ningún archivo de imagen está descargado [R02 §3], de modo que **los colores reales del logotipo son desconocidos**. Es posible que el `#266484` de los encabezados o el `#008080` de los titulares provengan de él. La paleta aquí definida **debe validarse contra el logotipo real** antes de considerarse cerrada. *Qué falta:* descargar `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` y muestrear sus colores, o disponer del manual de marca.

## 3.3 Brand colors

### `color.brand.primary`

| | |
|---|---|
| **HEX** | `#183C35` |
| **RGB** | `24, 60, 53` |
| **HSL** | `hsl(168, 43%, 16%)` |
| **Función** | Color de marca. Texto principal, superficies profundas, botón primario, pie |
| **Usar en** | Titulares y cuerpo de texto sobre fondo claro · fondo de secciones de cierre y pie · relleno del botón primario sobre claro · filetes (en versión traslúcida) · marca de foco |
| **NO usar en** | Grandes superficies intermedias que dejarían la página oscura · como color de estado (éxito, error) · degradados |
| **Contraste** | **10.82:1** sobre `#F5F2EC` — AAA · **11.60:1** sobre `#FFFFFF` |

### `color.brand.primaryDark`

| | |
|---|---|
| **HEX** | `#102D28` · **RGB** `16, 45, 40` · `hsl(170, 48%, 12%)` |
| **Función** | Profundidad máxima. Estado `hover` del botón primario, velo del hero, pie |
| **Usar en** | `hover` del primario · velo de imagen · fondo del pie · fondo del CTA final |
| **NO usar en** | Texto (es innecesariamente oscuro cuando existe `primary`) · bordes |

### `color.brand.secondary`

| | |
|---|---|
| **HEX** | `#2E564E` · **RGB** `46, 86, 78` · `hsl(168, 30%, 26%)` |
| **Función** | Verde intermedio. **Derivado**, no presente en [D00]: se añade porque el sistema necesita un verde utilizable en superficies medias y en estados sobre fondo profundo, donde `primary` no contrasta consigo mismo |
| **Usar en** | `hover` de superficies sobre fondo profundo · bordes sobre fondo profundo · segundo nivel de bandas oscuras · iconografía sobre claro cuando `primary` resulta demasiado severo |
| **NO usar en** | Texto sobre fondo claro (usar `primary`) · como acento (ese papel es de `accent`) |
| **Contraste** | 7.35:1 sobre `#F5F2EC` |

### `color.brand.accent`

| | |
|---|---|
| **HEX** | `#B7A47A` · **RGB** `183, 164, 122` · `hsl(41, 30%, 60%)` |
| **Función** | Acento único del sistema. Es un **latón desaturado**, no un dorado: su saturación del 30 % es lo que impide que parezca metálico |
| **Usar en** | Subrayado de navegación activa y `hover` · filete de 1 px sobre fondo profundo · **relleno del CTA primario sobre fondo profundo** (con texto `primary`) · numerales decorativos sobre fondo profundo · marca de elemento activo |
| **NO usar en** | **Texto sobre fondo claro — contraste 2.18:1, insuficiente** · superficies grandes · degradados · efectos metálicos · más del 3 % de una pantalla · iconos de estado |
| **Contraste** | **2.18:1** sobre `#F5F2EC` → **prohibido como texto sobre claro** · **4.95:1** sobre `#183C35` → válido como texto sobre profundo · `#183C35` sobre `#B7A47A` = **4.95:1** → válido como relleno de botón |

**Advertencia de implementación:** la saturación del 30 % es una decisión, no una limitación. Cualquier «mejora» que suba la saturación o añada brillo convierte el latón en dorado de plantilla.

## 3.4 Backgrounds

| Token | HEX | RGB | Función | Usar en | NO usar en |
|---|---|---|---|---|---|
| `color.bg.primary` | `#F5F2EC` | `245, 242, 236` | Fondo por defecto de todo el sitio. `hsl(40, 31%, 94%)` — comparte familia de tono con `accent` (41°), origen de la cohesión de la paleta | Cuerpo de página · superficies de lectura · cabecera en estado desplazado | Tarjetas sobre sí mismo (no habría separación: usar `elevated`) |
| `color.bg.secondary` | `#E9E3D8` | `233, 227, 216` | Fondo cálido intermedio. **Derivado** para cubrir el salto entre `primary` (94 %) y `sand` (81 %) | Bandas de separación · bloques de testimonios · fondos de FAQ · zócalos de sección | Grandes extensiones que compitan con el fondo por defecto |
| `color.bg.sand` | `#D9D0C2` | `217, 208, 194` | Cálido con presencia. `hsl(37, 23%, 81%)` | Marcos de imagen pendiente · placeholders · bandas de pausa · fondo de financiación | Fondo de texto extenso (reduce legibilidad frente a `primary`) |
| `color.bg.dark` | `#102D28` | `16, 45, 40` | Superficie profunda | CTA final · pie · velos de hero | Más de dos veces por página |
| `color.bg.elevated` | `#FFFFFF` | `255, 255, 255` | Superficie elevada. **La elevación se consigue con contraste de fondo, no con sombra** | Tarjetas sobre `bg.primary` · campos de formulario · paneles desplegables · contenedores de logotipo de terceros | Fondo de página completo (produciría la frialdad clínica que se evita) |

**Decisión clave:** una tarjeta blanca sobre fondo arena se separa por sí sola. Esto elimina la necesidad de sombra en el 90 % de los casos y es la razón técnica por la que el sistema de sombras puede ser tan reducido (§12).

## 3.5 Typography colors

| Token | HEX | RGB | Contraste sobre `#F5F2EC` | Función y uso | NO usar en |
|---|---|---|---|---|---|
| `color.text.primary` | `#183C35` | `24, 60, 53` | **10.82:1** AAA | Titulares y cuerpo. Usar el verde de marca como color de texto unifica la paleta y es lo que produce el tono editorial | — |
| `color.text.secondary` | `#5A625C` | `90, 98, 92` | **5.64:1** AA | Párrafos de apoyo, descripciones, especialidad en fichas, texto de etiqueta | Titulares |
| `color.text.muted` | `#6F746F` | `111, 116, 111` | **4.27:1** ⚠ | **Restringido.** Metadatos, pies de imagen, texto de 18 px o más, texto de 14 px en peso 700 | **Texto normal por debajo de 18 px: no alcanza el 4.5:1 exigido por AA** |
| `color.text.onDark` | `#F5F2EC` | `245, 242, 236` | **10.82:1** sobre `#183C35` | Todo el texto sobre superficie profunda | — |
| `color.text.onDarkMuted` | `#A8B2AC` | `168, 178, 172` | **5.54:1** sobre `#183C35` | Texto secundario sobre profundo | Texto principal |
| `color.text.onAccent` | `#183C35` | `24, 60, 53` | **4.95:1** sobre `#B7A47A` | Texto sobre relleno de acento | — |

**⚠ Corrección respecto a [D00 §9].** El `Muted` aprobado, `#6F746F`, ofrece **4.27:1** sobre el fondo — por debajo del 4.5:1 que WCAG AA exige para texto normal. Se conserva en la paleta pero **con uso restringido a texto grande y metadatos**, y se añade `#5A625C` (5.64:1) para el texto secundario real. Es una corrección de accesibilidad, no un cambio de dirección.

## 3.6 UI colors

### Bordes y separadores

Los bordes son **verde traslúcido, no gris**. Un borde gris sobre fondo cálido introduce un tono frío ajeno a la paleta; el verde traslúcido se integra.

| Token | Valor | Función | Usar en | NO usar en |
|---|---|---|---|---|
| `color.border.subtle` | `rgba(24, 60, 53, 0.08)` | Filete mínimo | Separadores de sección · borde inferior de la cabecera · filas de ficha técnica | Campos de formulario (insuficiente para indicar zona interactiva) |
| `color.border.default` | `rgba(24, 60, 53, 0.16)` | Borde estándar | Campos de formulario · botón secundario · tarjetas con contorno · paneles desplegables | — |
| `color.border.strong` | `rgba(24, 60, 53, 0.32)` | Borde de énfasis | `hover` del botón secundario · casilla de verificación sin marcar · acordeón abierto | Grandes extensiones |
| `color.border.onDark` | `rgba(245, 242, 236, 0.16)` | Borde sobre profundo | Divisiones del pie · botones secundarios sobre oscuro | — |
| `color.border.accent` | `#B7A47A` | Filete de acento, **solo 1 px** | Subrayado de navegación activa · filete sobre el nombre en testimonios · marca de paso activo | Bordes completos de tarjeta · grosores superiores a 1 px |
| **Equivalente opaco** | `#E3DDD1` | Para contextos sin transparencia | Igual que `border.default` | — |

| Token | Valor | Función |
|---|---|---|
| `color.divider` | `rgba(24, 60, 53, 0.10)`, 1 px | Separación entre elementos de una lista, filas de tabla, elementos del pie |

### Estados de interacción

| Token | Valor | Función | Notas |
|---|---|---|---|
| `color.state.hover.surface` | `rgba(24, 60, 53, 0.04)` | Fondo al pasar el cursor sobre superficies y botones fantasma | Nunca cambiar el color del texto en `hover`: solo el fondo o el subrayado |
| `color.state.hover.primary` | `#102D28` | `hover` del botón primario | — |
| `color.state.active.primary` | `#0B211D` | `active` del botón primario | Sin transformación de escala |
| `color.state.focus` | `#183C35` | Anillo de foco, 2 px con desplazamiento de 2 px | **10.82:1** contra el fondo, muy por encima del 3:1 exigido |
| `color.state.focus.onDark` | `#F5F2EC` | Anillo de foco sobre superficie profunda | — |
| `color.state.disabled.surface` | `rgba(24, 60, 53, 0.08)` | Fondo deshabilitado | — |
| `color.state.disabled.text` | `#9AA09B` | Texto deshabilitado | Exento de contraste mínimo, pero debe seguir siendo legible |
| `color.state.disabled.border` | `rgba(24, 60, 53, 0.10)` | Borde deshabilitado | — |

**Nota sobre el foco:** el anillo se dibuja con `outline: 2px solid` y `outline-offset: 2px`. El desplazamiento es lo que garantiza visibilidad incluso sobre el botón primario, porque deja ver el fondo entre el botón y el anillo.

### Estados semánticos

Derivados dentro de la familia cálida de la paleta. **No se usan rojos, verdes o ámbares genéricos**, que romperían la cohesión.

| Token | HEX | RGB | Contraste sobre `#F5F2EC` | Función | NO usar en |
|---|---|---|---|---|---|
| `color.feedback.success` | `#2F6B4E` | `47, 107, 78` | **5.63:1** AA | Confirmación de formulario, validación correcta. Verde más claro y saturado que el de marca, para que lea como estado y no como identidad | Como color de marca · rellenos grandes |
| `color.feedback.warning` | `#8A5A0E` | `138, 90, 14` | **5.30:1** AA | Avisos, notas de variabilidad de resultados. Comparte tono con `accent` (36° frente a 41°) pero con saturación del 81 % frente al 30 %: se distingue por saturación, que es la lógica de toda la paleta | Confundir con `accent` en usos decorativos |
| `color.feedback.error` | `#9B3B2E` | `155, 59, 46` | **6.15:1** AA | Errores de formulario. Es un **rojo terracota**, no un rojo puro: se integra en la familia cálida | Rellenos grandes · avisos no críticos |
| `color.feedback.info` | `#2E564E` | `46, 86, 78` | 7.35:1 | Notas informativas. Reutiliza `brand.secondary` | — |

**Regla obligatoria:** ningún estado se comunica **solo con color**. Todo estado lleva icono y texto (§27).

## 3.7 Paleta completa

| Categoría | Token | HEX |
|---|---|---|
| Marca | `brand.primary` | `#183C35` |
| Marca | `brand.primaryDark` | `#102D28` |
| Marca | `brand.secondary` | `#2E564E` |
| Marca | `brand.accent` | `#B7A47A` |
| Fondo | `bg.primary` | `#F5F2EC` |
| Fondo | `bg.secondary` | `#E9E3D8` |
| Fondo | `bg.sand` | `#D9D0C2` |
| Fondo | `bg.dark` | `#102D28` |
| Fondo | `bg.elevated` | `#FFFFFF` |
| Texto | `text.primary` | `#183C35` |
| Texto | `text.secondary` | `#5A625C` |
| Texto | `text.muted` | `#6F746F` ⚠ |
| Texto | `text.onDark` | `#F5F2EC` |
| Texto | `text.onDarkMuted` | `#A8B2AC` |
| Estado | `feedback.success` | `#2F6B4E` |
| Estado | `feedback.warning` | `#8A5A0E` |
| Estado | `feedback.error` | `#9B3B2E` |
| Estado | `feedback.info` | `#2E564E` |

**Dieciocho colores.** Frente a los más de veinte valores dispersos del sitio actual, sin sistema.

---

# 4. Regla 60/30/10

## 4.1 Proporción

| Proporción | Rol | Colores |
|---|---|---|
| **60 %** | Superficies neutras cálidas | `bg.primary` `#F5F2EC` + `bg.elevated` `#FFFFFF` |
| **30 %** | Verde profundo | `text.primary` (todo el texto) + `bg.dark` (una o dos bandas por página) |
| **10 %** | Cálidos con presencia y acento | `bg.secondary` + `bg.sand` (7 %) + `accent` (**menos del 3 %**) |

La medición es aproximada y por página completa, no por sección.

## 4.2 Cómo evitar que el color principal domine

El verde suma dos usos —texto y superficie— y ahí está el riesgo de sobrepasar el 30 %.

**Reglas concretas:**
1. **Máximo dos bandas profundas por página.** Habitualmente CTA final y pie.
2. **Ninguna banda profunda ocupa más de una altura de pantalla** en escritorio.
3. **Nunca dos bandas profundas consecutivas.** Siempre media una superficie clara o cálida.
4. **El hero no cuenta como banda profunda**: es imagen con velo, no superficie de color.
5. Si una página necesita más peso, se usa `bg.sand` en lugar de una tercera banda profunda.

## 4.3 Cómo evitar que el latón parezca dorado artificial

Es el riesgo estético más alto del proyecto, porque «beige + dorado» es exactamente la plantilla que [D00] prohíbe.

| Regla | Especificación |
|---|---|
| **Nunca como superficie** | Prohibido como fondo de sección, de tarjeta o de banda |
| **Nunca degradado** | Ningún `linear-gradient` con `accent`. Los degradados dorados son el rasgo definitorio del lujo falso |
| **Nunca con brillo** | Sin resplandor, sin efecto metálico, sin sombra dorada, sin borde doble |
| **Nunca como texto sobre claro** | 2.18:1: además de feo, inaccesible |
| **Grosor máximo de 1 px** como filete | Un filete de 2 px en dorado ya lee como ornamento |
| **Un solo relleno permitido** | El CTA primario sobre superficie profunda, con texto `#183C35` |
| **Presupuesto del 3 %** | Si en una captura de pantalla se puede señalar el latón en más de tres lugares, hay demasiado |
| **Siempre acompañado de verde** | El latón nunca aparece sobre arena sin verde presente: aislado, deriva a beige-dorado |

## 4.4 Cómo evitar el monocromatismo

El riesgo opuesto: una página entera en verde y arena resulta plana.

**Reglas concretas:**
1. **Toda página incluye al menos una superficie profunda** (habitualmente el pie, ya presente).
2. **Toda página incluye al menos una banda cálida** en `bg.secondary` o `bg.sand`.
3. **La fotografía es la fuente principal de variación cromática.** No se desaturan las imágenes hasta neutralizarlas: los tonos de piel, la ropa y los espacios aportan el color que la paleta deliberadamente no aporta.
4. **El latón aparece al menos una vez por página**, aunque sea como subrayado de navegación.
5. El contraste de **valor** —claro contra profundo— hace el trabajo que en otras paletas hace la variedad de tono.

## 4.5 Cómo evitar que los fondos compitan con las fotografías

| Regla | Especificación |
|---|---|
| **Blanco detrás de la imagen, no arena** | Las tarjetas con imagen usan `bg.elevated` `#FFFFFF`. La arena introduce un tono cálido que altera la percepción de los tonos de piel |
| **Nada de marcos** | La imagen se apoya directamente sobre la superficie, sin borde ni sombra |
| **La imagen a sangre no lleva color detrás** | Ocupa el ancho completo; no hay banda de color visible tras ella |
| **Un solo velo, y solo cuando hay texto encima** | Si no hay texto sobre la imagen, no hay velo |
| **El latón nunca toca una fotografía** | Ni como borde, ni como superposición, ni como marco |
| **Máximo dos superficies distintas por sección** | Una sección con tres fondos y una imagen es ruido |

---

# 5. Tipografía

## 5.1 Análisis de las tipografías actuales

[R02 §7] documenta lo que hay:

| Familia | Uso actual | Pesos |
|---|---|---|
| **Quicksand** | Tipografía principal de todo el sitio | 300, 400, 500, 600, 700 · sin cursivas |
| **Open Sans** | Valor por defecto del reset, fallback | — |
| **ETmodules** | Fuente de iconos del tema | — |
| **Font Awesome 4.7.0** | Iconos, desde CDN externo, versión de 2016 | — |

## 5.2 Decisión: **B — sustituir**

Se sustituyen las cuatro familias. Adoptamos **Cormorant Garamond** (display) y **Manrope** (texto), según [D00 §10].

### Justificación

**Quicksand no puede sostener esta dirección, por tres razones concretas:**

1. **Es una geométrica de terminales redondeadas.** Su carácter es amable y ligeramente infantil — un registro excelente para una marca de bienestar o un producto infantil, y opuesto al de una clínica quirúrgica. El redondeo del trazo entra además en contradicción directa con el principio de esquina viva (§1.10/3).
2. **No tiene cursiva.** Impide cualquier tratamiento editorial de citas y destacados, que este sistema necesita para testimonios.
3. **Es monofamiliar por necesidad, no por decisión.** El sitio actual usa Quicksand para absolutamente todo porque no tiene alternativa, y de ahí nace la incoherencia de escala documentada en [R02 §7.3]: `h1` a 22 px, `h2` a 11 px y 13 px, botones a 22–25 px, cuerpo a 17 px. Sin contraste de familia, la jerarquía tiene que apoyarse solo en el tamaño, y eso es lo que se rompió.

**Por qué el par aprobado funciona:** la combinación de una serif de contraste alto con una sans humanista geométrica es el mecanismo canónico del diseño editorial. Produce **dos voces distinguibles al instante**, que es el segundo principio del sistema y la base de la distinción entre *descubrir* y *leer* que exige [X03 §7].

### Riesgo identificado en Cormorant Garamond, y su control

Cormorant Garamond tiene contraste de trazo muy alto, altura de x reducida y remates finísimos. Eso implica dos peligros reales:

- **Fragilidad a tamaño pequeño.** Por debajo de 24 px los trazos finos se desvanecen, especialmente en pantallas de baja densidad.
- **Cliché de lujo.** En peso ligero, versales y con espaciado amplio, Cormorant es la tipografía de la invitación de boda. Ese es exactamente el «lujo artificial» que [D00] prohíbe.

**Se conserva la familia aprobada, con cuatro restricciones que neutralizan ambos riesgos:**

| Restricción | Regla |
|---|---|
| **Tamaño mínimo** | Nunca por debajo de **26 px**. Jamás en cuerpo de texto, interfaz, botones o navegación |
| **Peso por tamaño** | 300 solo a partir de 56 px · 400 entre 32 y 55 px · 500 entre 26 y 31 px. Nunca peso ligero a tamaño medio |
| **Espaciado** | Siempre **negativo**: −0.01 a −0.02 em. Nunca positivo. El espaciado amplio en serif es el rasgo delator del lujo falso |
| **Versales** | **Prohibidas.** Ni `text-transform: uppercase` ni versalitas. Serif + versales + latón = plantilla de lujo |

**Cursiva:** permitida exclusivamente en citas destacadas y testimonios.

## 5.3 Display

| | |
|---|---|
| **Familia** | Cormorant Garamond |
| **Pesos** | 300 (Light), 400 (Regular), 500 (Medium) |
| **Uso** | Titular del hero · titulares de sección · titulares de página · numerales grandes del proceso y de casos · citas destacadas |
| **Estilo** | Normal. Cursiva solo en citas |
| **Restricciones** | Mínimo 26 px · espaciado negativo · sin versales |

## 5.4 Headings

**Decisión: los encabezados se reparten entre las dos familias.** No es una inconsistencia: es el mecanismo central de jerarquía del sistema.

| Nivel | Familia | Peso | Razón |
|---|---|---|---|
| **H1** | Cormorant Garamond | 400 | Título de página. Voz editorial |
| **H2** | Cormorant Garamond | 400 | Título de sección. Voz editorial |
| **H3** | **Manrope** | 600 | A 24 px Cormorant empieza a ser frágil, y H3 se usa habitualmente para rótulos funcionales («Ficha técnica», «Recuperación»). Manrope aporta claridad |
| **H4** | **Manrope** | 600 | Títulos de tarjeta, nombres de especialista. Necesitan definición, no expresión |

**La frontera está entre H2 y H3, y es deliberada y perceptible:** por encima, el sitio *habla*; por debajo, *informa*. Un usuario aprende esa señal sin darse cuenta y le sirve para saber si está descubriendo o leyendo.

## 5.5 Body

| | |
|---|---|
| **Familia** | Manrope |
| **Pesos** | 400 (cuerpo), 500 (destacados en línea y etiquetas) |
| **Uso** | Todos los párrafos, descripciones, listas, valores de ficha técnica, respuestas de FAQ |
| **Negrita en línea** | Peso 600, con moderación. **Nunca `<strong>` para dar color** |
| **Cursiva** | No en Manrope. Los destacados editoriales usan Cormorant cursiva |

## 5.6 UI

| | |
|---|---|
| **Familia** | Manrope |
| **Pesos** | 500 (navegación, etiquetas), 600 (botones, encabezados de tabla, rótulos superiores) |
| **Uso** | Navegación · botones · campos y etiquetas de formulario · migas de pan · rótulos superiores · pies de imagen · metadatos |
| **Cifras** | Manrope tiene cifras tabulares. **Obligatorias** en fichas técnicas, condiciones de financiación y cualquier dato alineado en columna |

## 5.7 Carga de fuentes

| Familia | Tipo | Archivos | Estrategia |
|---|---|---|---|
| **Manrope** | Variable, 200–800 | **1 archivo** | Auto-alojada, subconjunto `latin` + `latin-ext`, `display: swap` |
| **Cormorant Garamond** | Instancias estáticas | **3 archivos** (300, 400, 500) + 1 cursiva 400 | Auto-alojada, subconjunto `latin` + `latin-ext`, `display: swap`, **precarga solo el peso usado en el hero** |

Manrope es variable, lo que permite todos los pesos con un solo archivo. Cormorant Garamond **no** es variable: cada peso es un archivo, de ahí la limitación a tres. El subconjunto `latin` cubre el español completo (acentos, ñ, ¿, ¡).

**Se eliminan** las dos preconexiones externas actuales (`fonts.gstatic.com`, `maxcdn.bootstrapcdn.com`). Cero peticiones tipográficas a terceros.

**Pila de reserva:**
- Display: `'Cormorant Garamond', 'Georgia', 'Times New Roman', serif`
- Texto: `'Manrope', -apple-system, 'Segoe UI', system-ui, sans-serif`

---

# 6. Escala tipográfica

Base de cuerpo: **17 px** en escritorio, **16 px** en móvil (16 px es el mínimo que evita el zoom automático de iOS en los campos de formulario).

Progresión aproximada de 1.25 (tercera mayor) en los niveles superiores, comprimida en móvil.

| Estilo | Familia | Tamaño escritorio | Tamaño móvil | Interlínea | Peso | Espaciado | Medida máxima |
|---|---|---|---|---|---|---|---|
| **Display XL** | Cormorant | **88 px** | **44 px** | 0.95 | 300 | −0.02 em | 18 ch |
| **Display** | Cormorant | **64 px** | **36 px** | 1.00 | 300 | −0.02 em | 22 ch |
| **H1** | Cormorant | **48 px** | **32 px** | 1.05 | 400 | −0.015 em | 24 ch |
| **H2** | Cormorant | **36 px** | **26 px** | 1.15 | 400 | −0.01 em | 28 ch |
| **H3** | Manrope | **24 px** | **20 px** | 1.30 | 600 | −0.005 em | 40 ch |
| **H4** | Manrope | **20 px** | **18 px** | 1.35 | 600 | 0 | 44 ch |
| **Body large** | Manrope | **20 px** | **18 px** | 1.60 | 400 | 0 | 60 ch |
| **Body** | Manrope | **17 px** | **16 px** | 1.65 | 400 | 0 | 68 ch |
| **Body small** | Manrope | **15 px** | **14 px** | 1.60 | 400 | 0 | 72 ch |
| **Caption** | Manrope | **13 px** | **12 px** | 1.40 | 500 | 0.02 em | 60 ch |
| **Overline** | Manrope | **12 px** | **11 px** | 1.20 | 600 | **0.14 em** | 40 ch |
| **Button** | Manrope | **15 px** | **15 px** | 1.00 | 600 | 0.02 em | — |
| **Navigation** | Manrope | **15 px** | **20 px** | 1.00 | 500 | 0.01 em | — |
| **Quote** | Cormorant *cursiva* | **28 px** | **21 px** | 1.45 | 400 | −0.005 em | 34 ch |
| **Numeral** | Cormorant | **120 px** | **64 px** | 1.00 | 300 | −0.03 em | — |

## 6.1 Notas de aplicación

- **Display XL** solo en el hero de la portada. Una vez por sitio.
- **Navigation es mayor en móvil (20 px) que en escritorio (15 px)** — no es un error: en el panel a pantalla completa los elementos son objetivos táctiles y deben ser grandes.
- **Button mantiene 15 px** en todos los tamaños. Reducirlo en móvil comprometería la legibilidad del elemento más importante.
- **Overline** es el único estilo en versales del sistema, siempre en Manrope y siempre con espaciado de 0.14 em. Se usa para rotular secciones y como categoría en tarjetas.
- **Numeral** es un recurso gráfico: pasos del proceso, numeración de casos. Sustituye a los iconos.
- Las medidas en `ch` se aplican con `max-width` sobre el bloque de texto, no sobre el contenedor.

## 6.2 Escalado fluido

Entre 1024 px y 1440 px los estilos Display XL, Display, H1 y H2 escalan de forma fluida (`clamp`) entre su valor móvil y su valor escritorio. **Por encima de 1440 px dejan de crecer**, en coherencia con §8.4.

Los estilos de cuerpo, interfaz y datos **no escalan**: son fijos por punto de ruptura. Un cuerpo de texto que crece con la pantalla degrada la medida de lectura.

---

# 7. Jerarquía tipográfica

## 7.1 Los cinco niveles

| Nivel | Función | Estilo | Color | Regla |
|---|---|---|---|---|
| **1 · Titular editorial** | Enunciar la idea de la página o sección | Display XL / Display / H1 / H2 en Cormorant | `text.primary` o `text.onDark` | **Uno por sección.** Nunca dos titulares Cormorant en la misma pantalla |
| **2 · Subtítulo** | Concretar lo que el titular deja abierto | Body large, Manrope 400 | `text.secondary` | Máximo 2 líneas. Siempre debajo del titular, nunca encima |
| **3 · Texto descriptivo** | Informar | Body / Body small, Manrope 400 | `text.primary` para lectura larga; `text.secondary` para apoyo | Medida de 68 ch |
| **4 · Metadato** | Situar y clasificar | Overline (categoría) · Caption (fecha, plazo, autoría) | `text.muted` · `accent` solo sobre profundo | Nunca compite con el nivel 1 |
| **5 · CTA** | Provocar la acción | Button, Manrope 600 | Según §13 | **Un solo primario por vista** |

## 7.2 El rótulo superior

Patrón recurrente que resuelve la jerarquía sin recargar:

```
PROCEDIMIENTOS                 ← Overline · 12 px · 600 · 0.14 em · text.muted
Tres áreas de intervención     ← H2 · Cormorant · 36 px · 400 · −0.01 em
Descripción breve de la        ← Body large · Manrope · 20 px · text.secondary
sección, dos líneas máximo.
```

Ese bloque es la cabecera de sección estándar del sitio. **Se repite sin variación**, porque la repetición es lo que construye reconocimiento.

## 7.3 Cómo se evita que todo tenga la misma importancia

Cinco reglas verificables:

1. **Salto mínimo entre niveles adyacentes: 1.25×.** Si un H2 mide 36 px, el siguiente nivel no puede medir 32 px.
2. **Cambio de familia entre nivel 1–2 y nivel 3–5.** El salto de Cormorant a Manrope hace más trabajo jerárquico que cualquier diferencia de tamaño.
3. **Ningún botón mayor que un H3.** El sitio actual tiene botones de 25 px y `h1` de 22 px [R02 §7.3]: la acción grita más que el contenido. Prohibido.
4. **Ningún encabezado por debajo del tamaño del cuerpo.** El sitio actual tiene `h2` a 11 px y `h6` a 10 px, con cuerpo a 17 px. Prohibido.
5. **El color refuerza, no sustituye.** Un texto no asciende de nivel por ser más oscuro: asciende por tamaño, familia o peso.

---

# 8. Grid y layout

## 8.1 Mobile — hasta 767 px

| Propiedad | Valor |
|---|---|
| Ancho del contenedor | 100 % |
| Padding lateral | **20 px** (24 px a partir de 400 px) |
| Columnas | **1** |
| Gutter | No aplica |
| Ancho máximo de contenido | Ninguno |
| Medida de texto | Limitada por el contenedor, ~40 ch a 375 px |

Todas las retículas de varias columnas colapsan a una. Excepción: los pares de datos de la ficha técnica pueden mantenerse a dos columnas si ambos valores son cortos.

## 8.2 Tablet — 768 a 1023 px

| Propiedad | Valor |
|---|---|
| Padding lateral | **32 px** |
| Columnas | **12** (spans útiles de 6 y 6, u 8 y 4) |
| Gutter | **20 px** |
| Ancho máximo de contenido | 100 % menos el padding |

Retículas de 3 columnas → 2. Retículas de 4 → 2. La cabecera mantiene el panel móvil; el CTA sube a la barra superior.

## 8.3 Desktop — 1024 a 1439 px

| Propiedad | Valor |
|---|---|
| Ancho máximo de contenido | **1200 px** |
| Ancho máximo del contenedor | 1440 px |
| Columnas | **12** |
| Gutter | **24 px** |
| Padding lateral | **48 px** (mínimo, cuando la ventana es menor que 1200 + 96) |

**Proporciones canónicas de composición:**

| Proporción | Spans | Uso |
|---|---|---|
| 7/5 | 7 + 5 | Imagen y texto, dirección predominante |
| 5/7 | 5 + 7 | Alternancia |
| 8/4 | 8 + 4 | Contenido con columna lateral (ficha de procedimiento con CTA fijo) |
| 4/4/4 | 3 × 4 | Tarjetas de procedimiento y de especialista |
| 6/6 | — | **Prohibido.** El 50/50 es estático y es un rasgo de plantilla |

## 8.4 Wide desktop — 1440 px y más

**El contenido no se expande.** Por encima de 1440 px:

| Elemento | Comportamiento |
|---|---|
| Contenido de texto | **Permanece en 1200 px** y se centra. El espacio adicional pasa a margen |
| Secciones con predominio de imagen | Pueden llegar a **1440 px** |
| Fondos de color y bandas | **A sangre completa**, sin límite |
| Imagen a sangre | Ancho completo de la ventana |
| Tipografía display | **Deja de escalar en 1440 px** |
| Padding lateral | Crece libremente como margen |
| Límite absoluto | Por encima de **1920 px** el contenedor se fija en 1440 px y todo lo demás es margen |

**Razón:** la sensación premium proviene de la relación entre el contenido y el espacio que lo rodea. Un contenido que se estira hasta 2560 px pierde medida de lectura, rompe las proporciones de imagen y produce el efecto de panel de control. Que el margen crezca es la respuesta correcta.

---

# 9. Espaciado

## 9.1 Escala

Base de **4 px**, con progresión que se abre en los valores altos.

| Token | Valor | Uso principal |
|---|---|---|
| `space.3xs` | **4 px** | Separación entre icono y texto · ajustes ópticos |
| `space.2xs` | **8 px** | Etiqueta y campo · elementos de una misma línea |
| `space.xs` | **12 px** | Padding interno de elementos pequeños · chips |
| `space.sm` | **16 px** | Padding de campos de formulario · separación entre elementos de lista |
| `space.md` | **24 px** | **Gutter de retícula** · padding de tarjeta · separación entre campos |
| `space.lg` | **32 px** | Separación entre elementos de navegación · padding de tarjeta amplia |
| `space.xl` | **48 px** | Separación entre bloques dentro de una sección · padding lateral en escritorio |
| `space.2xl` | **64 px** | **Padding vertical de sección en móvil** · separación entre grupos |
| `space.3xl` | **80 px** | Padding vertical de sección en móvil, versión amplia · separación mayor |
| `space.4xl` | **96 px** | Padding vertical de sección en tablet |
| `space.5xl` | **120 px** | **Padding vertical de sección en escritorio** |
| `space.6xl` | **160 px** | Padding vertical de sección en escritorio, versión amplia (hero, CTA) |
| `space.7xl` | **200 px** | Excepcional. Solo aislamiento de un CTA final |

## 9.2 Cómo usar la escala

**Regla de proximidad:** el espacio comunica pertenencia. Dentro de un grupo, valores pequeños; entre grupos, valores grandes. La diferencia entre el espacio interior y el exterior de un bloque debe ser de al menos **2 pasos** de escala; si no, el agrupamiento no se percibe.

**Ritmo vertical de sección:**

| Contexto | Móvil | Tablet | Escritorio |
|---|---|---|---|
| Sección estándar | `2xl` 64 px | `4xl` 96 px | `5xl` 120 px |
| Sección amplia (hero, CTA final) | `3xl` 80 px | `4xl` 96 px | `6xl` 160 px |
| Sección compacta (banda de financiación) | `xl` 48 px | `2xl` 64 px | `3xl` 80 px |

**Ritmo interno de bloque:**

| Relación | Espacio |
|---|---|
| Rótulo superior → titular | `space.sm` 16 px |
| Titular → subtítulo | `space.md` 24 px |
| Subtítulo → contenido | `space.xl` 48 px |
| Contenido → CTA de sección | `space.xl` 48 px |
| Entre tarjetas | `space.md` 24 px (gutter) |
| Entre párrafos | `space.md` 24 px |
| Entre campos de formulario | `space.md` 24 px |

**Prohibido:** valores fuera de la escala. Ningún `margin: 27px`, ningún `padding: 15px`. Cada excepción rompe el ritmo y es acumulativa.

---

# 10. Radios

## 10.1 Escala

| Token | Valor | Aplicación |
|---|---|---|
| `radius.none` | **0** | **Todas las imágenes** · bandas a sangre · contenedores de imagen · velos |
| `radius.xs` | **2 px** | **Botones** · campos de formulario · casillas · tarjetas · chips · paneles desplegables |
| `radius.sm` | **4 px** | Modales · elementos flotantes de cierta superficie |
| `radius.full` | **999 px** | **Uso restringido:** tirador del comparador antes/después, y punto indicador de paso activo. Nada más |

## 10.2 Justificación

**La esquina viva es identidad, no minimalismo por defecto** (§1.10/3).

Radio 0 en las imágenes es la decisión de mayor impacto: una fotografía con esquinas redondeadas lee como tarjeta de aplicación; con esquinas vivas, como página impresa. Es el rasgo que más separa este sistema de una plantilla.

Los 2 px de los elementos interactivos son casi imperceptibles y funcionan como un matiz óptico: evitan la dureza del ángulo exacto sin introducir redondeo perceptible.

## 10.3 Prohibiciones explícitas

| Prohibido | Razón |
|---|---|
| **Botones en píldora** (`border-radius: 999px`) | Rasgo definitorio de la plantilla de clínica y de la interfaz SaaS |
| **Tarjetas con radio de 8 px o más** | Estética de aplicación |
| **Imágenes con cualquier radio** | Destruye el registro editorial |
| **Avatares circulares** | Los retratos de especialista son rectangulares 4:5. El círculo es un rasgo corporativo y además recorta información del rostro |
| **Radios distintos en un mismo componente** | Ninguna esquina superior redondeada con inferiores vivas |
| **Radios superiores a 4 px** en cualquier elemento salvo las dos excepciones de `radius.full` | — |

---

# 11. Bordes

## 11.1 Especificación

| Token | Grosor | Color | Opacidad | Uso |
|---|---|---|---|---|
| `border.hairline` | **1 px** | `#183C35` | **0.08** | Separadores de sección · borde inferior de la cabecera desplazada · filas de ficha técnica · divisiones del pie |
| `border.default` | **1 px** | `#183C35` | **0.16** | Campos de formulario · botón secundario · tarjetas con contorno · paneles desplegables |
| `border.strong` | **1 px** | `#183C35` | **0.32** | `hover` del botón secundario · casilla sin marcar · acordeón abierto |
| `border.accent` | **1 px** | `#B7A47A` | 1.00 | Subrayado de navegación activa · filete sobre el nombre en testimonios · marca de paso activo |
| `border.onDark` | **1 px** | `#F5F2EC` | **0.16** | Divisiones del pie · botón secundario sobre profundo |
| `border.focus` | **2 px** | `#183C35` | 1.00 | Anillo de foco, con `outline-offset: 2px` |

## 11.2 Reglas

**El grosor es siempre 1 px.** La única excepción del sistema es el anillo de foco a 2 px, por requisito de accesibilidad. No existen bordes de 2, 3 o 5 px — el sitio actual tiene bloques con `border-width: 5px` [R02 §11.1], y es parte de su aspecto de plantilla.

**El borde es verde traslúcido, nunca gris.** Un `#DDDDDD` sobre fondo cálido introduce un gris frío que no pertenece a la paleta.

### Dónde usar bordes

| Contexto | Tratamiento |
|---|---|
| Separación entre secciones del mismo color de fondo | `border.hairline` superior |
| Campos de formulario | `border.default` en los cuatro lados |
| Botón secundario | `border.default`, `border.strong` en `hover` |
| Filas de ficha técnica y datos | `border.hairline` superior en cada fila |
| Panel desplegable de navegación | `border.default` |
| Elemento de navegación activo | `border.accent` inferior, 1 px |
| Pie | `border.onDark` entre grupos |

### Dónde evitarlos

| Evitar | Alternativa |
|---|---|
| **Borde completo en tarjetas con imagen** | Fondo `bg.elevated` blanco + espacio |
| **Borde alrededor de imágenes** | Nada. La imagen se apoya directamente |
| **Borde y sombra simultáneos** | Uno u otro. Nunca ambos |
| **Borde en botón primario** | Su relleno ya lo define |
| **Bordes anidados** | Tarjeta con borde que contiene un elemento con borde |
| **Borde en latón de más de 1 px** | Ornamento |

---

# 12. Sombras

## 12.1 Sistema

Cuatro niveles, todos con tinte verde en lugar de negro: una sombra negra sobre fondo cálido produce un gris sucio.

| Token | Valor | Uso |
|---|---|---|
| `shadow.none` | `none` | **Estado por defecto de casi todo el sistema** |
| `shadow.subtle` | `0 1px 2px rgba(24,60,53,0.04), 0 2px 8px rgba(24,60,53,0.04)` | Tarjeta en `hover`, solo cuando no hay otro indicador |
| `shadow.elevated` | `0 4px 16px rgba(24,60,53,0.06), 0 1px 3px rgba(24,60,53,0.04)` | Panel desplegable de navegación · elementos sobre contenido |
| `shadow.floating` | `0 8px 32px rgba(24,60,53,0.10), 0 2px 8px rgba(24,60,53,0.06)` | **Barra inferior móvil** · modales · overlay del menú móvil |

## 12.2 Principio

**La elevación se comunica con contraste de fondo, no con sombra.** Una tarjeta blanca `#FFFFFF` sobre fondo arena `#F5F2EC` ya se separa por sí sola. Esa es la razón por la que el sistema de sombras es tan reducido: no las necesita.

La sombra queda reservada a los elementos que **flotan de verdad** sobre el contenido: desplegables, barra fija y modales.

## 12.3 Prohibiciones

| Prohibido | Razón |
|---|---|
| **`box-shadow: 10px 10px 0 #333333`** | Es literalmente el valor que usa el sitio actual en sus bloques de título y botones [R02 §11.1], y la causa técnica más concreta de su aspecto anticuado |
| **Sombras desplazadas sin difuminado** | Estética de 2015 |
| **Opacidad superior a 0.12** | Produce el aspecto de panel de control |
| **Sombras en imágenes** | Rompe el registro editorial |
| **Sombras en el estado por defecto de las tarjetas** | Solo en `hover`, y solo si es necesario |
| **`text-shadow`** | El sitio actual lo usa para forzar legibilidad sobre el hero. El velo controlado (§18) es la solución correcta |
| **Sombras de color** o en latón | — |
| **Sombras interiores** decorativas | — |

---

# 13. Botones

## 13.1 Medidas comunes

| Propiedad | Valor |
|---|---|
| Altura estándar | **52 px** |
| Altura compacta (cabecera, en línea) | **44 px** |
| Altura mínima táctil | **44 px** — nunca inferior |
| Padding horizontal, estándar | **28 px** |
| Padding horizontal, compacto | **20 px** |
| Tipografía | Button: Manrope 600, 15 px, espaciado 0.02 em |
| Radio | `radius.xs` **2 px** |
| Transición | `background-color`, `border-color`, `color` — **160 ms**, `cubic-bezier(0.4, 0, 0.2, 1)` |
| Foco | `outline: 2px solid` `#183C35` · `outline-offset: 2px` |
| Sin transformación | **Ningún botón se escala ni se desplaza** en `hover` o `active` |

## 13.2 Primary — `AGENDAR VALORACIÓN`

El CTA principal del sitio. Debe ser reconocible al instante y siempre idéntico.

### Sobre fondo claro

| Estado | Fondo | Texto | Borde |
|---|---|---|---|
| Reposo | `#183C35` | `#F5F2EC` | Ninguno |
| Hover | `#102D28` | `#F5F2EC` | Ninguno |
| Active | `#0B211D` | `#F5F2EC` | Ninguno |
| Focus | `#183C35` | `#F5F2EC` | Anillo de 2 px `#183C35`, desplazamiento 2 px |
| Disabled | `rgba(24,60,53,0.08)` | `#9AA09B` | Ninguno · `cursor: not-allowed` |

Contraste del texto sobre el relleno: **10.82:1**.

### Sobre fondo profundo

| Estado | Fondo | Texto |
|---|---|---|
| Reposo | **`#B7A47A`** | `#183C35` |
| Hover | `#C4B38D` | `#183C35` |
| Active | `#A8935F` | `#183C35` |
| Focus | `#B7A47A` | Anillo de 2 px `#F5F2EC`, desplazamiento 2 px |

Contraste del texto sobre el relleno: **4.95:1** — cumple AA.

**Este es el único relleno en latón de todo el sistema**, y es donde el acento justifica su presencia en la paleta.

### Iconografía

**El CTA primario no lleva icono.** El texto «Agendar valoración» es explícito; una flecha añadida es ruido. Se permite una única excepción: en la barra inferior móvil, donde el espacio es escaso, puede aparecer sin icono pero con texto abreviado si es necesario.

## 13.3 Secondary

Para `Explorar procedimientos`, `Ver todos los resultados`, `Conocer al equipo`.

| Estado | Fondo | Texto | Borde |
|---|---|---|---|
| Reposo | Transparente | `#183C35` | 1 px `rgba(24,60,53,0.16)` |
| Hover | `rgba(24,60,53,0.04)` | `#183C35` | 1 px `rgba(24,60,53,0.32)` |
| Active | `rgba(24,60,53,0.08)` | `#183C35` | 1 px `rgba(24,60,53,0.32)` |
| Focus | Transparente | `#183C35` | Anillo de 2 px, desplazamiento 2 px |
| Disabled | Transparente | `#9AA09B` | 1 px `rgba(24,60,53,0.10)` |

**Sobre fondo profundo:** texto `#F5F2EC`, borde `rgba(245,242,236,0.16)`, `hover` con fondo `rgba(245,242,236,0.06)` y borde a 0.32.

## 13.4 Ghost

Acciones de baja jerarquía: cerrar, cancelar, controles de la interfaz.

| Estado | Fondo | Texto |
|---|---|---|
| Reposo | Transparente | `#183C35` |
| Hover | `rgba(24,60,53,0.04)` | `#183C35` |
| Active | `rgba(24,60,53,0.08)` | `#183C35` |
| Focus | Transparente | Anillo de 2 px, desplazamiento 2 px |

Padding horizontal 16 px. Sin borde en ningún estado.

## 13.5 Text (enlace de acción)

Navegación entre secciones: `Ver el proceso completo`, `Conocer la clínica`.

| Propiedad | Valor |
|---|---|
| Tipografía | Manrope 500, 15 px |
| Color | `#183C35` |
| Subrayado | `text-decoration: underline` · `text-underline-offset: 4px` · `text-decoration-thickness: 1px` |
| Color del subrayado en reposo | `rgba(24,60,53,0.32)` |
| Hover | Color del subrayado a `#183C35` · transición de 200 ms. **El color del texto no cambia** |
| Icono | Opcional: `arrow-right` de 16 px, que se desplaza **4 px** a la derecha en `hover`, 200 ms |
| Focus | Anillo de 2 px, desplazamiento 2 px |

## 13.6 WhatsApp / Contact

**Decisión: no se usa el verde de marca de WhatsApp (`#25D366`).**

**Justificación.** Ese verde saturado junto a `#183C35` y `#F5F2EC` sería el elemento más discordante de todo el sitio, y el botón verde de WhatsApp es uno de los rasgos más reconocibles de la plantilla de clínica. Las directrices de marca de WhatsApp admiten el uso monocromo del glifo, de modo que la decisión es compatible con ellas.

| Contexto | Tratamiento |
|---|---|
| En la barra inferior móvil | Fondo `#FFFFFF`, borde 1 px `rgba(24,60,53,0.16)`, glifo de 20 px y etiqueta en `#183C35` |
| Como CTA secundario en una sección | Botón secundario estándar con glifo de WhatsApp de 20 px a la izquierda, separación de 8 px |
| Sobre fondo profundo | Botón secundario sobre profundo con glifo en `#F5F2EC` |
| En el pie | Enlace de texto con glifo de 16 px |

El glifo es **monocromo y hereda `currentColor`**. Nunca coloreado, nunca sobre un círculo verde.

**Teléfono:** mismo tratamiento con el icono `phone`. Siempre enlace `tel:` real — hoy el teléfono es texto plano [A01 §7].

## 13.7 Jerarquía y límites

| Regla | Especificación |
|---|---|
| **Cinco estilos, ni uno más** | Primary, Secondary, Ghost, Text, WhatsApp |
| **Un solo primario por vista** | Nunca dos botones primarios en la misma pantalla, salvo el de la cabecera fija |
| **Etiqueta invariable** | «Agendar valoración» se escribe siempre igual, en toda la web |
| **Sin mayúsculas** | Los botones van en caja normal. Las versales quedan reservadas al rótulo superior |
| **Sin ancho completo en escritorio** | El ancho se ajusta al contenido. El 100 % se reserva a móvil y a formularios |
| **Sin degradados, sin sombras, sin escalado** | — |

---

# 14. Navegación

Estructura definida en [X03 §3.5]: `Procedimientos▾ · Especialistas · Resultados · La clínica · Tu proceso▾` + CTA. El logotipo enlaza a inicio; «Inicio» no aparece en el menú de escritorio.

## 14.1 Medidas

| Propiedad | Estado inicial | Estado desplazado |
|---|---|---|
| Altura, escritorio | **80 px** | **64 px** |
| Altura, tablet | 72 px | 60 px |
| Altura, móvil | **64 px** | 56 px |
| Altura del logotipo | **32 px** | **26 px** |
| Padding lateral | Igual al del contenedor (48 px en escritorio) | Igual |
| Altura del botón de CTA | **44 px** (compacto) | 40 px |
| Separación entre elementos | **32 px** | 32 px |
| Separación entre el último elemento y el CTA | **48 px** | 48 px |

La cabecera compacta de 64 px cumple el requisito de sentirse premium sin ocupar espacio: es un 5 % de una pantalla de 1200 px de alto.

## 14.2 Estados

### Sobre el hero (solo la portada)

| Propiedad | Valor |
|---|---|
| Fondo | Transparente |
| Logotipo | **Variante blanca** — `Clinica-Nova_Logo-Blanco.png` |
| Texto de navegación | `#F5F2EC` |
| CTA | Relleno `#B7A47A`, texto `#183C35` |
| Borde inferior | Ninguno |
| **Velo de la cabecera** | `linear-gradient(to bottom, rgba(16,45,40,0.45), transparent)` sobre los **120 px superiores** |

**El velo de cabecera es obligatorio y separado del velo del hero.** El velo del hero se concentra en la zona baja, donde va el texto; en la zona alta su opacidad es del 0.15, insuficiente para garantizar el contraste del logotipo y la navegación en blanco si la fotografía es clara. Este segundo degradado resuelve el problema.

### Estado desplazado y páginas interiores

| Propiedad | Valor |
|---|---|
| Fondo | `#F5F2EC` |
| Logotipo | **Variante en color** — `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` |
| Texto de navegación | `#183C35` |
| CTA | Relleno `#183C35`, texto `#F5F2EC` |
| Borde inferior | 1 px `rgba(24,60,53,0.08)` |
| Sombra | Ninguna. El filete es suficiente |

**Umbral de cambio:** 80 px de desplazamiento. **Transición:** 240 ms, `cubic-bezier(0.4, 0, 0.2, 1)`, sobre `height`, `background-color` y `color`.

En páginas interiores la cabecera arranca ya en estado sólido; solo cambia la altura al desplazarse.

## 14.3 Comportamiento fijo

La cabecera es **fija y siempre visible**. No se oculta al bajar ni reaparece al subir: ese patrón ahorra 64 px a costa de que el CTA principal desaparezca, y [X03 §18] exige presencia permanente del CTA.

## 14.4 Tipografía y espaciado

| Elemento | Estilo |
|---|---|
| Elemento de navegación | Navigation · Manrope 500 · 15 px · espaciado 0.01 em · caja normal |
| Indicador de desplegable | Icono `chevron-down` de 14 px, separación de 4 px, girado 180° cuando está abierto |
| Botón de CTA | Button · Manrope 600 · 15 px |

**Sin versales en la navegación.** Aunque el encargo lista las secciones en mayúsculas, el sistema las presenta en caja normal: las versales en Manrope 500 a 15 px reducen legibilidad y aportan un tono corporativo que no corresponde. Las versales quedan reservadas al rótulo superior de 12 px.

## 14.5 Hover del elemento de navegación

Filete de **1 px en `#B7A47A`** en el borde inferior, que crece de 0 a 100 % de ancho desde la izquierda en **200 ms** con `cubic-bezier(0.22, 1, 0.36, 1)`. Situado 6 px por debajo de la línea base del texto.

**El color del texto no cambia.** El único indicador es el filete. Es el uso más visible del acento en todo el sitio y, por su grosor de 1 px, no puede leerse como ornamento.

**Sección activa:** mismo filete, permanente y al 100 % de ancho.

## 14.6 Menú desplegable

| Propiedad | Valor |
|---|---|
| Fondo | `#FFFFFF` |
| Borde | 1 px `rgba(24,60,53,0.16)` |
| Radio | 2 px |
| Sombra | `shadow.elevated` |
| Padding | 8 px |
| Ancho mínimo | 240 px |
| Altura de elemento | 44 px |
| Padding de elemento | 0 16 px |
| Tipografía de elemento | Manrope 500 · 15 px · `#183C35` |
| Hover de elemento | Fondo `rgba(24,60,53,0.04)` |
| Alineación | Alineado a la izquierda con su elemento padre |
| Separación respecto a la cabecera | 4 px |

**Comportamiento:**
- Apertura por `hover` con **120 ms de retardo** (evita aperturas accidentales al pasar), cierre con **240 ms de retardo** (permite el recorrido diagonal del cursor).
- Animación de entrada: opacidad 0→1 y `translateY(−4px)`→0, **200 ms**, `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Accesible por teclado:** `Enter` o `Espacio` abren, `Flecha abajo` recorre, `Escape` cierra y devuelve el foco al elemento padre, `Tab` continúa la navegación.
- El elemento padre sigue siendo un enlace real al índice de la sección.

**Contenido**, según [X03 §3.4] y [X03 §3.3]:

```
Procedimientos▾          Tu proceso▾
├ Todos los              ├ El proceso
│  procedimientos        ├ Financiación
├ Corporales             └ Preguntas frecuentes
├ Faciales
└ Belleza íntima
```

---

# 15. Mobile navigation

Experiencia propia, no una reducción del escritorio.

## 15.1 Estado cerrado

| Elemento | Especificación |
|---|---|
| Altura de la cabecera | **64 px** |
| Contenido | Logotipo (26 px de alto) a la izquierda · botón de menú a la derecha |
| Botón de menú | Área táctil de **44 × 44 px**, icono de 24 px |
| Icono | Dos líneas horizontales de 1.5 px, 20 px de ancho, separadas 6 px. **No tres líneas** — dos es más contemporáneo y menos genérico |
| CTA | **No está en la cabecera.** Vive en la barra inferior |

## 15.2 Apertura

| Propiedad | Valor |
|---|---|
| Tipo | **Panel a pantalla completa**, no desplegable |
| Fondo | `#F5F2EC` — claro, no oscuro: mantiene la calma y evita el efecto de aplicación |
| Entrada | Deslizamiento desde la derecha, `translateX(100%)`→0 |
| Duración | **280 ms** |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Contenido | Opacidad 0→1 en 200 ms con **40 ms de retardo** |
| Elementos | Aparición escalonada de **40 ms** entre elementos, `translateY(8px)`→0 |
| Scroll del cuerpo | **Bloqueado** conservando la posición |
| Foco | **Atrapado** dentro del panel |

## 15.3 Estructura del panel

```
┌──────────────────────────────┐
│ [logo]                  [✕]  │  64 px, borde inferior 1 px
├──────────────────────────────┤
│                              │  padding 32 px 24 px
│  Inicio                      │  Navigation 20 px · 500
│  ──────────────────────────  │  filete 0.08
│  Procedimientos          ⌄   │  acordeón
│  ──────────────────────────  │
│  Especialistas               │
│  ──────────────────────────  │
│  Resultados                  │
│  ──────────────────────────  │
│  La clínica                  │
│  ──────────────────────────  │
│  Tu proceso              ⌄   │  acordeón
│  ──────────────────────────  │
│                              │  space.xl 48 px
│  ┌────────────────────────┐  │
│  │  Agendar valoración    │  │  Primary · 100 % · 52 px
│  └────────────────────────┘  │
│                              │  space.md 24 px
│  ⌾ Escribir por WhatsApp     │  Text + glifo
│  ⌾ (604) 604 6233            │  Text + icono · tel:
│                              │
└──────────────────────────────┘
```

**«Inicio» sí aparece aquí**, a diferencia del escritorio: en el panel no hay logotipo persistente que cumpla esa función y el coste de espacio es nulo [X03 §3.2].

## 15.4 Acordeones

| Propiedad | Valor |
|---|---|
| Altura del elemento | **56 px** — objetivo táctil generoso |
| Indicador | `chevron-down` de 20 px, girado 180° al abrir, **200 ms** |
| Apertura | Altura automática, **240 ms**, `cubic-bezier(0.4, 0, 0.2, 1)` |
| Elemento hijo | Altura de 48 px, sangrado de 16 px, Navigation 17 px, `text.secondary` |
| Comportamiento | Solo uno abierto a la vez |
| Padre | Sigue siendo un enlace al índice; el chevron es el control de expansión, con área táctil propia |

## 15.5 Cierre

Cuatro vías: botón `✕` (44 × 44 px), tecla `Escape`, deslizamiento hacia la derecha, y navegación a un enlace.

Animación inversa de **240 ms** — ligeramente más rápida que la apertura, según §26/2. Al cerrar, el foco vuelve al botón de menú.

## 15.6 Barra inferior persistente

Elemento fijo **único** en móvil [X03 §16.2].

| Propiedad | Valor |
|---|---|
| Altura | **64 px** + `env(safe-area-inset-bottom)` |
| Fondo | `#F5F2EC` con `backdrop-filter: blur(12px)` y opacidad 0.94 |
| Borde superior | 1 px `rgba(24,60,53,0.10)` |
| Sombra | `shadow.floating` |
| Padding | 8 px 16 px |
| Reparto | **Agendar valoración** al 68 % · **WhatsApp** al 32 %, separación de 8 px |
| CTA primario | Primary, 48 px de alto, radio 2 px |
| WhatsApp | Fondo `#FFFFFF`, borde 1 px `rgba(24,60,53,0.16)`, glifo de 20 px + etiqueta corta |

**Comportamiento:**
- Aparece tras **240 px de desplazamiento**, no de inmediato: el hero ya tiene su propio CTA.
- Entrada: `translateY(100%)`→0, 280 ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Se oculta** al enfocar un campo de formulario, para no tapar el teclado.
- **No aparece** en `/agendar-valoracion`.
- Sube 64 px el `padding-bottom` del pie para no cubrir contenido.
- **Sin burbuja flotante adicional. Sin ventana emergente automática.**

---

# 16. Cards

**Seis tipos, ni uno más.** Todos comparten el mismo lenguaje: radio 2 px (0 en la imagen), sin sombra en reposo, sin borde completo cuando hay imagen, e idéntico comportamiento en `hover`.

## 16.1 Lenguaje común

| Propiedad | Valor |
|---|---|
| Fondo | `#FFFFFF` cuando hay contenido bajo la imagen · transparente cuando es solo imagen |
| Radio de la tarjeta | 2 px |
| Radio de la imagen | **0** |
| Borde | Ninguno con imagen · `border.default` en las de solo texto |
| Sombra en reposo | **Ninguna** |
| Padding del contenido | 24 px (32 px en tarjetas amplias) |
| Superficie clicable | **Toda la tarjeta** es un enlace. Sin botón interior |
| Hover de la imagen | `scale(1.03)`, **600 ms**, `cubic-bezier(0.22, 1, 0.36, 1)`, con `overflow: hidden` |
| Hover del título | El subrayado aparece a 1 px, 200 ms |
| Focus | Anillo de 2 px sobre la tarjeta completa, desplazamiento 2 px |
| Transición del grupo | Aparición escalonada de 60 ms |

## 16.2 ProcedureCard

| Propiedad | Valor |
|---|---|
| Ratio de imagen | **2:3 vertical** — coincide exactamente con los recursos de 400 × 600 disponibles [R02 §3.3] |
| `object-fit` | `cover`, `object-position: center` |
| Estructura | Imagen → rótulo superior (categoría) → título → descripción |
| Rótulo superior | Overline 12 px · `text.muted` · 16 px bajo la imagen |
| Título | H4 · Manrope 600 · 20 px · `text.primary` |
| Descripción | Body small · `text.secondary` · **una línea**, con recorte |
| CTA | Ninguno visible. La tarjeta entera es el enlace |
| Fondo | Transparente sobre `bg.primary` |
| Padding | 0 lateral · 20 px superior tras la imagen |
| Retícula | 3 columnas en escritorio (span 4), 2 en tablet, 1 en móvil |

**Validación técnica:** en un contenedor de 1200 px con gutter de 24 px, tres columnas dan **384 px** de ancho. Los recursos disponibles miden 400 px de ancho, de modo que se renderizan a 1.04× — prácticamente 1:1. **El ancho de contenedor de 1200 px queda validado por la resolución del material real.**

## 16.3 CategoryCard

Variante amplia de la anterior, para el índice de procedimientos.

| Diferencia | Valor |
|---|---|
| Ratio | 2:3, mayor tamaño |
| Título | **H3** Manrope 600 24 px, o H2 Cormorant si va sola |
| Descripción | Body · dos líneas |
| Añade | Recuento de procedimientos en Caption · `text.muted` |
| Retícula | 3 columnas en escritorio; en móvil, una a ancho completo |

## 16.4 SpecialistCard

| Propiedad | Valor |
|---|---|
| Ratio de imagen | **4:5 vertical** |
| `object-position` | `50% 30%` — los rostros ocupan la zona alta del encuadre |
| Estructura | Retrato → filete de acento → nombre → especialidad → credencial |
| Filete | 1 px `#B7A47A`, **32 px de ancho**, 20 px bajo la imagen |
| Nombre | H4 · Manrope 600 · 20 px · `text.primary` |
| Especialidad | Caption · `text.secondary` · **caja normal, no versales** |
| Credencial | Body small · `text.muted` · una línea |
| Forma | **Rectangular. Nunca circular** |
| Retícula | 3 columnas en escritorio, 2 en tablet, 1 en móvil |

**Placeholder** (no hay ningún retrato disponible [A01 §4]):

| Propiedad | Valor |
|---|---|
| Fondo | `bg.sand` `#D9D0C2` |
| Contenido | Isotipo de Nova centrado, 32 px, opacidad **0.18** |
| Etiqueta | Caption «Fotografía pendiente» · `text.muted` · centrada bajo el isotipo |
| Prohibido | **Fotografía de banco que represente a un médico.** Un retrato falso en una web clínica es engañoso |

## 16.5 ResultCard

| Propiedad | Valor |
|---|---|
| Ratio de imagen | **Variable**: 3:2, 4:5 o 1:1 según posición en el mosaico |
| Estructura | Imagen → rótulo superior (procedimiento) → título → plazo |
| Rótulo superior | Overline 12 px · `text.muted` |
| Título | H4 Manrope 600, o **H3 Cormorant** en las tarjetas destacadas del mosaico |
| Plazo | Caption · `text.muted` · «Resultado a los 6 meses» |
| Composición | **Mosaico irregular**: spans 7/5, 5/7 y 12 alternados. No retícula uniforme |

## 16.6 TestimonialCard

Deliberadamente **la menos parecida a una tarjeta** de todo el sistema.

| Propiedad | Valor |
|---|---|
| Fondo | Ninguno propio. Se apoya en `bg.secondary` o `bg.sand` de la sección |
| Borde | Ninguno |
| Sombra | Ninguna |
| Radio | No aplica |
| Cita | **Quote** · Cormorant *cursiva* · 28 px escritorio / 21 px móvil · interlínea 1.45 · máx. 34 ch |
| Filete | 1 px `#B7A47A`, 32 px de ancho, 32 px bajo la cita |
| Nombre | Overline · 12 px · 600 · 0.14 em · `text.muted` |
| Comillas decorativas | **Prohibidas.** Las comillas gigantes son un rasgo de plantilla. Las tipográficas del texto son suficientes |
| Estrellas | **Prohibidas.** No hay datos de valoración, y son un cliché |
| Imagen | Ninguna. No existen fotografías de pacientes |
| Padding | 0 · el espacio lo aporta la retícula |

## 16.7 FinancingCard

| Propiedad | Valor |
|---|---|
| Contenedor del logotipo | Recuadro `#FFFFFF`, radio 2 px, padding 32 px, altura fija de 120 px, logotipo centrado con `max-height: 40px` y `object-fit: contain` |
| Por qué fondo blanco | Los logotipos de Servicrédito y CFA son PNG sobre fondo claro [R02 §3.6]. El blanco los neutraliza y evita el halo que produciría la arena |
| Nombre | H4 · Manrope 600 |
| Descripción | Body small · `text.secondary` |
| Condiciones | Lista de pares etiqueta–valor con filete superior de 1 px · `[DECISIÓN PENDIENTE]` en cuanto al contenido |
| Enlace | Text si existe destino oficial |
| Tratamiento del logotipo | **Sin escala de grises.** Se respetan los colores del aliado |

## 16.8 EditorialCard

Bloques de contenido de La clínica y del proceso.

| Propiedad | Valor |
|---|---|
| Ratio de imagen | 3:2 — coincide con los recursos institucionales de 700 × 500 |
| Estructura | Imagen → título → texto |
| Título | H3 Manrope 600, o H2 Cormorant cuando el bloque es principal |
| Texto | Body · máx. 68 ch |
| Composición | 7/5 o 5/7, imagen y texto en paralelo, no apilados |

## 16.9 Prohibiciones comunes

Sin badges de color, sin cintas, sin botón interior, sin icono decorativo, sin borde superior de color, sin cambio de fondo en `hover`, sin elevación en `hover`, sin radio superior a 2 px, sin sombra en reposo, sin imagen recortada en círculo.

---

# 17. Imágenes

Apartado crítico. Inventario de referencia: [R02 §3].

## 17.1 Ratios del sistema

Cinco ratios. Ninguno más.

| Ratio | Uso | Recurso real que lo respalda |
|---|---|---|
| **2:3** vertical | Procedimientos, categorías | Las 3 imágenes de 400 × 600 — coincidencia exacta |
| **4:5** vertical | Retratos de especialista | Ninguno disponible → placeholder |
| **3:2** horizontal | Institucionales, casos, editorial | Las 6 imágenes de 700 × 500 (1.4:1, recorte mínimo a 1.5:1) |
| **1:1** | Solo mosaico de resultados, como excepción | — |
| **Libre a sangre** | Hero, banda de CTA final | Los 2 fondos de hero |

**Prohibido el 16:9** en tarjetas y contenido: es la proporción del vídeo y de la plantilla, y su horizontalidad contradice el predominio vertical del sistema.

## 17.2 Tamaños máximos de renderizado

La resolución máxima del material es de 700 × 500 [R02 §3.11]. Ampliar por encima del original produce imagen blanda, especialmente en pantallas de alta densidad.

| Recurso | Original | **Ancho CSS máximo** | Justificación |
|---|---|---|---|
| Imágenes de categoría | 400 × 600 | **400 px** | 384 px en la retícula de 3 columnas → 1.04× |
| Institucionales | 700 × 500 | **640 px** | 584 px en composición 7/5 → 1.20× |
| Casos antes/después | 700 × 500 | **640 px** | Descartadas por criterio |
| Logotipo de navbar | 1721 × 500 | 200 px | Sobrado |
| Logotipo blanco | 8000 × 2925 | 240 px | Reescalar antes de servir |
| Fondos de hero | **Desconocido** | **[DECISIÓN PENDIENTE]** | Ver §17.8 |

**Regla:** ninguna imagen se renderiza por encima de **1.25×** su ancho original. Si una composición lo exige, se cambia la composición, no la imagen.

## 17.3 `object-fit` y encuadre

| Contexto | Valor |
|---|---|
| Contenedor de ratio fijo | `object-fit: cover` — siempre |
| Encuadre por defecto | `object-position: center` |
| Retratos | `object-position: 50% 30%` |
| Logotipos de terceros | `object-fit: contain` con padding |
| Imagen a sangre | `cover` con `object-position` ajustado por imagen |

**Nunca `object-fit: fill`** (deforma) ni `contain` en contenedores de contenido (produce franjas vacías).

## 17.4 Tratamiento de color

**El material fotográfico se produjo para convivir con azules y turquesas** [R02 §8.4]. Sobre un fondo cálido `#F5F2EC` con acentos en latón, puede desentonar.

**Se aplica una corrección única, uniforme y mínima a todo el material:**

| Ajuste | Valor |
|---|---|
| Saturación | **−5 a −8 %** |
| Temperatura | Calentar ligeramente, equivalente a **+150 K** |
| Negros | Levantar **2–4 %** para evitar el negro absoluto, que resulta duro sobre fondo cálido |
| Contraste | Sin cambios, o **+3 %** como máximo |

**Prohibido:**

| Prohibido | Razón |
|---|---|
| **Duotono, bitono, sepia** | «Lujo artificial» explícito |
| **Filtros distintos por sección** | Rompe la unidad |
| **Virado verde para «combinar»** con la marca | El error más frecuente al integrar fotografía en una paleta. Produce fotografía enferma |
| **Blanco y negro selectivo** | — |
| **Desaturación por debajo del −10 %** | La fotografía es la principal fuente de variación cromática del sistema (§4.4). Neutralizarla deja la página monocroma |
| **Viñeteado, grano, texturas** | — |

La corrección se aplica **en el archivo**, no en CSS. Un `filter` en CSS afecta al rendimiento y no es controlable imagen a imagen.

## 17.5 Velos

El velo se usa **exclusivamente** cuando hay texto sobre la imagen. Si no hay texto, no hay velo.

| Contexto | Valor |
|---|---|
| **Hero** | `linear-gradient(to top, rgba(16,45,40,0.78) 0%, rgba(16,45,40,0.42) 45%, rgba(16,45,40,0.12) 100%)` |
| **Velo de cabecera** (adicional, obligatorio) | `linear-gradient(to bottom, rgba(16,45,40,0.45), transparent)` sobre los 120 px superiores |
| **Banda de CTA final sobre imagen** | Uniforme `rgba(16,45,40,0.82)` |
| **Tarjeta con texto sobre imagen** | `linear-gradient(to top, rgba(16,45,40,0.72) 0%, transparent 60%)`. Uso excepcional |
| **Imagen sin texto** | **Sin velo** |
| **Hover de tarjeta** | **El velo no cambia.** El único cambio es la escala |

**Requisito de contraste:** la zona del velo situada tras el texto debe garantizar un mínimo de **4.5:1**. Con `rgba(16,45,40,0.78)` sobre cualquier fotografía, el color resultante se aproxima lo suficiente a `#102D28` como para que el texto en `#F5F2EC` supere el 9:1. **Ese 0.78 es un valor mínimo, no un punto de partida negociable.**

## 17.6 Bordes de imagen

**Ninguno.** Sin borde, sin marco, sin sombra, sin radio. La imagen se apoya directamente sobre la superficie.

## 17.7 Cuándo usar cada tratamiento

| Tratamiento | Cuándo | Límite |
|---|---|---|
| **Imagen a sangre** | Hero · una imagen en La clínica · banda de CTA final | **Máximo 3 por página** |
| **Imagen contenida** | Bloques editoriales, composiciones 7/5 | Uso por defecto |
| **Imagen en tarjeta** | Procedimientos, especialistas, casos | Ratio fijo, `cover` |
| **Recorte cerrado** | Cuando la resolución no permite el tamaño necesario. Un detalle a 400 px es nítido; una escena ampliada, blanda | Preferible a ampliar |
| **Velo + texto encima** | Solo hero y CTA final | 2 por página |
| **Imagen sin tratamiento** | Todo el resto | Por defecto |

## 17.8 Los tres tipos de fotografía

### Editorial (espacios e instalaciones)

Las 6 imágenes institucionales de 700 × 500. Ratio 3:2, contenida, sin velo, en composiciones 7/5. Uso principal: La clínica e introducción de la portada.

### Clínica (procedimientos)

Las 3 imágenes de categoría de 400 × 600. Ratio 2:3, en tarjeta, sin velo.

**Nunca fotografía quirúrgica explícita**, ni instrumental, ni zonas anatómicas aisladas. La categoría se representa por contexto, no por procedimiento.

### Humana (personas)

No hay retratos disponibles [A01 §4]. Cuando existan: 4:5, luz natural, encuadre medio, gesto sereno sin sonrisa forzada, mirada a cámara, fondo neutro y consistente en todo el equipo.

**[DECISIÓN PENDIENTE] — Resolución de los dos fondos de hero.**
Están declarados solo en el CSS y sus dimensiones no aparecen en ninguna parte [R02 §3.1]. De su resolución depende una decisión estructural:

| Si el ancho es | Entonces |
|---|---|
| **≥ 1920 px** | Hero a sangre completa, según §18 |
| 1280–1919 px | Hero a sangre hasta 1440 px; por encima, contenido contenido con banda de color lateral |
| **< 1280 px** | **Hero contenido**: imagen en 7 columnas, texto en 5 sobre `bg.dark`. Se conserva la composición editorial sin ampliar la imagen |

*Qué falta:* descargar ambos archivos y medirlos.

---

# 18. Hero visual

## 18.1 Comparación de las tres opciones

| Opción | A favor | En contra | Veredicto |
|---|---|---|---|
| **Vídeo** `banner-web.mp4` | Movimiento real de la clínica · único recurso audiovisual · diferenciador | **Solo 4 s** de duración: el bucle se percibe como parpadeo · ratio **2:1**, inadecuado para un hero de 85 vh (exige recorte severo) · bitrate desconocido · coste en datos y batería en móvil · requiere póster y reserva | **Mejora condicional** |
| **Imagen estática** | 2 candidatas disponibles · las únicas fotografías a sangre del inventario · sin coste de rendimiento · control total del encuadre y el contraste | Sin movimiento · resolución desconocida | **Opción por defecto** |
| **Fotografía nueva** | Calidad garantizada, ratio correcto | No existe | No disponible |

## 18.2 Decisión

**La imagen estática es la especificación por defecto. El vídeo es una mejora que debe superar un umbral explícito.**

**Umbral de calidad del vídeo — se exigen las cuatro condiciones:**

1. Ancho **≥ 1920 px**.
2. Bitrate **≥ 3 Mbps** sin artefactos de compresión visibles en movimiento.
3. Que, tras ralentizar a **0.6×** (los 4 s pasan a ~6.7 s) y aplicar un fundido cruzado de **800 ms** en el punto de bucle, **el corte sea imperceptible**.
4. Que el recorte de 2:1 a la altura del hero conserve una composición legible.

Si falla cualquiera de las cuatro → **imagen estática**, sin discusión.

**Reserva obligatoria en todos los casos:** el póster del vídeo es siempre uno de los dos fondos estáticos, de modo que un fallo de carga degrada a la opción por defecto sin pantalla vacía.

## 18.3 Escritorio

| Propiedad | Valor |
|---|---|
| Altura | **85 vh** · mínimo 640 px · máximo 900 px |
| Por qué no 100 vh | Debe insinuarse la sección siguiente para invitar al desplazamiento. Un hero de altura completa es un rasgo de plantilla y oculta que hay más contenido |
| Ratio efectivo | Libre, gobernado por la altura |
| Imagen | A sangre completa, `object-fit: cover`, `object-position: center 40%` |
| Velo | Degradado de §17.5 |
| Velo de cabecera | Obligatorio, 120 px superiores |
| Posición del contenido | **Columnas 1 a 6** de 12. Alineado a la izquierda |
| Alineación vertical | Base del contenido a **160 px** del borde inferior |
| Titular | **Display XL** · 88 px · Cormorant 300 · interlínea 0.95 · espaciado −0.02 em · `#F5F2EC` · dos líneas |
| Subtítulo | **Body large** · 20 px · Manrope 400 · `rgba(245,242,236,0.88)` · máx. 48 ch · 24 px bajo el titular |
| CTA | 48 px bajo el subtítulo · Primary sobre profundo (relleno en latón) + Secondary sobre profundo · separación de 16 px |
| Indicador de desplazamiento | **Ninguno.** La flecha animada es un cliché; la sección siguiente asomando cumple la función |
| Logotipo sobre el hero | **No se repite.** El logotipo de la cabecera es suficiente. El sitio actual superpone un logotipo de 8000 px sobre el vídeo: es redundante |

## 18.4 Móvil

| Propiedad | Valor |
|---|---|
| Altura | **72 vh** · mínimo 520 px |
| Medio | **Imagen estática siempre.** Nunca vídeo: coste en datos y batería sin aportar |
| Encuadre | `object-position: center 35%` |
| Velo | Más intenso en la base: `rgba(16,45,40,0.85)` a 0 % |
| Contenido | Alineado a la base, con **48 px** de padding inferior por encima de la barra fija |
| Titular | Display XL móvil · **44 px** · Cormorant 300 · interlínea 0.95 |
| Subtítulo | Body large móvil · 18 px · máx. 3 líneas |
| CTA | Primary a **ancho completo**, 52 px · debajo, el secundario como enlace de texto centrado |
| Barra inferior | **No visible en el hero.** Aparece a partir de 240 px de desplazamiento |

## 18.5 Contraste y accesibilidad

| Requisito | Valor |
|---|---|
| Titular sobre velo | ≥ **7:1** — con el velo especificado, ~9:1 |
| Subtítulo sobre velo | ≥ **4.5:1** |
| Navegación sobre velo de cabecera | ≥ **4.5:1** — garantizado por el degradado de 0.45 |
| Vídeo | `muted` · `playsinline` · `loop` · `preload="metadata"` · **pausado** con `prefers-reduced-motion: reduce`, mostrando el póster |
| Texto sobre imagen | **Nunca `text-shadow`.** El contraste lo aporta el velo |

---

# 19. Procedimientos — componentes visuales

La exigencia de [X03 §7]: distinción visual clara entre **descubrir** y **leer información detallada**.

## 19.1 Los dos registros

| | **Descubrir** | **Leer** |
|---|---|---|
| **Dónde** | Índice, categorías | Ficha de procedimiento |
| **Tipografía dominante** | **Cormorant** | **Manrope** |
| **Titulares** | H1/H2 Cormorant 36–48 px | H3/H4 Manrope 20–24 px |
| **Densidad** | Baja: 3–5 elementos por pantalla | Alta: información tabulada |
| **Imagen** | Protagonista, 2:3, grande | Ausente o mínima |
| **Fondo** | `bg.primary` con aire | `bg.primary` con `bg.elevated` en bloques de datos |
| **Estructura** | Retícula de tarjetas | Columna de texto de 68 ch + lateral de 4 columnas |
| **Ornamento** | Ninguno | Filetes de 1 px entre filas de datos |
| **Espaciado de sección** | 120–160 px | 64–80 px |

**El usuario percibe el cambio de registro sin que se le explique**, y eso le informa de dónde está: si ve serif e imágenes grandes, está explorando; si ve sans y filetes, está decidiendo.

## 19.2 Índice de procedimientos

| Bloque | Tratamiento |
|---|---|
| Cabecera | Rótulo superior + H1 Cormorant 48 px + Body large. Alineado a la izquierda, máx. 24 ch el titular |
| Tres categorías | `CategoryCard` 2:3 en retícula de 3 columnas (span 4), gutter 24 px |
| **Catálogo completo** | Lista tipográfica, no tarjetas. Agrupada por categoría con un H3 Manrope por grupo. Cada procedimiento en una fila de **56 px** con filete superior de 1 px, nombre en Body 17 px y `arrow-right` de 16 px alineado a la derecha, que se desplaza 4 px en `hover` |
| Por qué lista y no tarjetas | Con 20 o 30 procedimientos, 30 tarjetas son un muro. La lista tipográfica es explorable de un vistazo y escala sin límite |
| Filtro | Solo por encima de 12 procedimientos. Chips de 32 px de alto, radio 2 px, borde `border.default`, activo con fondo `#183C35` y texto `#F5F2EC` |

## 19.3 Página de categoría

| Bloque | Tratamiento |
|---|---|
| Cabecera | Imagen 2:3 en 5 columnas + rótulo superior, H1 Cormorant y Body large en 6 columnas, con 1 de separación |
| Retícula de procedimientos | `ProcedureCard` a 3 columnas |
| Especialistas del área | `SpecialistCard` a 3 columnas, sobre `bg.secondary` |
| Casos del área | 2 o 3 `ResultCard` |
| FAQ del área | Acordeón, máximo 5 preguntas |
| CTA | Banda `bg.dark` con CTA primario en latón |

**Belleza íntima** [X03 §7.2]: mismo sistema, con dos ajustes — fotografía deliberadamente no explícita (contexto, nunca anatomía) y una nota de confidencialidad en Body small sobre `bg.secondary` bajo la cabecera.

## 19.4 Ficha de procedimiento

Composición **8/4**: contenido en 8 columnas, lateral fijo en 4.

| Bloque | Tratamiento |
|---|---|
| Migas de pan | Caption 13 px · `text.muted` · separador `/` · el último elemento sin enlace |
| Título | **H1 Cormorant 48 px** — es el único elemento Cormorant de la página, y marca que aquí empieza el registro de lectura |
| Definición | Body large 20 px · `text.secondary` · máx. 60 ch |
| Cuerpo | Body 17 px · interlínea 1.65 · máx. **68 ch** · párrafos separados 24 px |
| Encabezados internos | H3 Manrope 600 24 px · 48 px superiores, 16 px inferiores |
| **Ficha técnica** | Ver §19.5 |
| Especialistas | `SpecialistCard` compacta, 2 por fila en la columna de contenido |
| Procedimientos relacionados | Lista tipográfica de 3 a 5 elementos, mismo patrón que el catálogo |
| Aviso médico | Body small · `text.secondary` · sobre `bg.secondary` · padding 24 px · filete superior de 1 px en `feedback.warning` |
| **Lateral fijo** | Ver §19.6 |

## 19.5 Ficha técnica

El componente que más distingue una web clínica seria de un folleto.

| Propiedad | Valor |
|---|---|
| Estructura | Lista de definición: pares etiqueta–valor |
| Fondo | `bg.elevated` `#FFFFFF` · padding 32 px · radio 2 px |
| Disposición | 2 columnas en escritorio, 1 en móvil |
| Fila | Padding vertical de 16 px · **filete superior de 1 px** `rgba(24,60,53,0.08)` · la primera fila sin filete |
| Etiqueta | Overline · 12 px · 600 · 0.14 em · `text.muted` |
| Valor | Body · 17 px · Manrope **400** · `text.primary` · **cifras tabulares** |
| Campos | Duración · Anestesia · Estancia · Recuperación · Regreso a la actividad |
| Estado pendiente | Valor sustituido por `[CONTENIDO POR CONFIRMAR]` en Body small `text.muted` cursiva. **Visible, no oculto** |
| Prohibido | Iconos por fila · bordes completos · rayado alterno · fondos de color por celda |

**El filete horizontal sin bordes verticales es lo que hace que se lea como tabla editorial y no como hoja de cálculo.**

## 19.6 Tarjeta lateral fija

| Propiedad | Valor |
|---|---|
| Posición | `position: sticky`, `top: 96px` (64 px de cabecera + 32 px) |
| Ancho | 4 columnas |
| Fondo | `bg.elevated` `#FFFFFF` · borde `border.default` · radio 2 px · padding 32 px |
| Contenido | Nombre del procedimiento en H4 · categoría en Caption · CTA Primary a ancho completo · WhatsApp como Text con glifo · teléfono como Text |
| Móvil | **No existe.** Su función la cumple la barra inferior |
| Sombra | Ninguna. Fondo y borde bastan |

---

# 20. Especialistas

Debe transmitir **autoridad, cercanía y profesionalismo**, evitando el catálogo corporativo.

## 20.1 Cómo se evita el catálogo corporativo

| Rasgo corporativo | Aquí |
|---|---|
| Avatares circulares | **Retrato rectangular 4:5** |
| Retícula uniforme de cajas idénticas | Retícula de 3 columnas **sin caja**: retrato, filete y texto sobre el fondo de página |
| Fondo azul corporativo | `bg.primary` cálido |
| Cargo en versales | Especialidad en **caja normal**, Caption, `text.secondary` |
| Iconos de redes por persona | Ninguno |
| Enlace «Ver perfil» como botón | La tarjeta entera es el enlace |
| Sonrisa de banco de imágenes | Gesto sereno, mirada a cámara |
| Marco y sombra | Ninguno |

## 20.2 Índice

| Bloque | Tratamiento |
|---|---|
| Cabecera | Rótulo superior + H1 Cormorant 48 px + Body large. Sin superlativos |
| Retícula | `SpecialistCard` a 3 columnas (span 4) en escritorio, 2 en tablet, 1 en móvil · gutter 24 px · separación vertical de 64 px |
| Con 1 especialista | Ficha destacada 5/7: retrato en 5 columnas, información en 7 |
| Con 2 | Dos columnas de 6, retratos mayores |
| Con más de 12 | Se agrupa por área con un H3 por grupo. **Sin filtros** |
| Cierre | Banda `bg.dark` con CTA |

## 20.3 Ficha de especialista

Composición **5/7**: retrato en 5 columnas, información en 7.

| Bloque | Tratamiento |
|---|---|
| Retrato | 4:5 · 5 columnas · radio 0 · sin velo · `position: sticky` en escritorio |
| Nombre | **H1 Cormorant 48 px** |
| Especialidad | Body large 20 px · `text.secondary` · directamente bajo el nombre |
| **Registro profesional** | Bloque destacado: fondo `bg.elevated`, padding 24 px, radio 2 px, etiqueta en Overline `text.muted` y número en Body 17 px con cifras tabulares. **El dato que más confianza aporta, y hoy inexistente** |
| Formación | Lista de definición con filete de 1 px por fila. Año en Caption `text.muted`, institución en Body |
| Trayectoria | Body 17 px · máx. 68 ch |
| **Enfoque** | **Cita en Cormorant cursiva 28 px**, con filete de acento superior. Es el único bloque de la ficha en registro editorial, y es el que aporta la cercanía |
| Procedimientos que realiza | Lista tipográfica con filete, igual que el catálogo |
| Casos | 2 o 3 `ResultCard` |
| Otros especialistas | 3 `SpecialistCard` compactas sobre `bg.secondary` |
| CTA | Banda `bg.dark`: «Agendar valoración con [nombre]» |

**El contraste entre el bloque de registro profesional (Manrope, datos, tabular) y el bloque de enfoque (Cormorant cursiva) es el mecanismo que resuelve la tensión autoridad/cercanía** sin que ninguna de las dos se diluya.

## 20.4 Estado con placeholders

Con 0 especialistas [A01 §4]: 3 o 4 tarjetas con el placeholder de §16.4, más un aviso sobre `bg.secondary`, en Body small `text.secondary`, indicando que la información del equipo está pendiente de confirmación. **Honesto y visible.**

---

# 21. Resultados

Debe sentirse **editorial, no galería** [X03 §9].

## 21.1 Qué lo hace editorial

| Galería | Editorial |
|---|---|
| Retícula uniforme | **Mosaico irregular** de spans variables |
| Imágenes del mismo tamaño | Jerarquía visual: hay casos más importantes |
| Sin texto | Rótulo superior + título + plazo en cada tarjeta |
| Ratio único | 3:2, 4:5 y 1:1 alternados |
| Lightbox al pulsar | **Página propia** por caso |
| Antes/después automático | **Comparador de acción deliberada** |

## 21.2 Índice

| Bloque | Tratamiento |
|---|---|
| Cabecera | Rótulo superior + H1 Cormorant 48 px + Body large + **aviso de variabilidad** en Body small `text.secondary` con filete superior de 1 px en `feedback.warning` |
| Composición | **Mosaico** con patrón que se repite cada 5 casos: `[7 · 5]` → `[12 destacado]` → `[5 · 7]` → `[4 · 4 · 4]` |
| Tarjeta destacada | Span 12, ratio 3:2, título en **H3 Cormorant 24 px** |
| Tarjeta estándar | `ResultCard` según §16.5 |
| Separación vertical | 64 px entre filas |
| Filtros | **Regla de [X03 §9.4]:** ninguno hasta 12 casos · por categoría de 13 a 30 · por categoría y procedimiento por encima de 30. **Nunca por edad, sexo ni tiempo transcurrido** |
| Cierre | Banda `bg.dark` con CTA |

## 21.3 Metadatos

| Dato | Estilo |
|---|---|
| Procedimiento | Overline · 12 px · 600 · 0.14 em · `text.muted` |
| Título del caso | H4 Manrope 20 px, o H3 Cormorant 24 px en destacados |
| Plazo | Caption 13 px · `text.muted` · «Resultado a los 6 meses» |
| Especialista | Caption con enlace, subrayado a 1 px |

**Sin badges, sin etiquetas de color, sin contadores.**

## 21.4 Página de caso

Composición de una columna de 8, centrada, con imágenes que rompen a 12.

| Bloque | Tratamiento |
|---|---|
| Migas de pan | Caption `text.muted` |
| Rótulo superior | Procedimiento, con enlace a su ficha |
| Título | H1 Cormorant 48 px · máx. 24 ch |
| Punto de partida | **Quote en Cormorant cursiva 28 px** si son palabras del paciente · Body 17 px si es descripción |
| Procedimiento realizado | Bloque de datos con el patrón de la ficha técnica |
| **Comparador** | Ver §21.5 |
| Cronología | Lista vertical con **numerales en Cormorant 64 px** `text.muted`, título en H4 y descripción en Body. Sin línea de tiempo con iconos |
| Testimonio | `TestimonialCard` sobre `bg.secondary`, a ancho completo de 12 columnas |
| Especialista | `SpecialistCard` compacta |
| **Aviso y consentimiento** | Body small `text.secondary` sobre `bg.secondary`, padding 24 px, filete superior de 1 px en `feedback.warning`. **Siempre visible, nunca como nota al pie** |
| Casos relacionados | 3 `ResultCard` |
| CTA | Banda `bg.dark` |

## 21.5 Comparador antes/después

| Propiedad | Valor |
|---|---|
| Activación | **Arrastre deliberado.** Sin reproducción automática, sin `hover`, sin transición al aparecer |
| Divisor | Línea vertical de **1 px** en `#F5F2EC` con `mix-blend-mode: difference` para ser visible sobre cualquier imagen |
| Tirador | Círculo de **40 px** — es la **única excepción legítima** a la prohibición de `radius.full`: es un control, no un contenedor. Fondo `#F5F2EC`, glifo de flechas horizontales de 16 px en `#183C35` |
| Área táctil | **44 × 44 px** mínimo |
| Etiquetas | «Antes» y «Después» en Overline 12 px sobre `rgba(16,45,40,0.72)`, padding 8 × 12 px, en las esquinas superiores |
| Posición inicial | **50 %** |
| Teclado | Flechas izquierda y derecha mueven en pasos del 5 %; `Home` y `End` a los extremos. `role="slider"` con `aria-valuenow` |
| Ratio | Fijo por caso, sin recorte diferente entre ambas imágenes |
| Radio | 0 |

---

# 22. Testimonios

Especificación completa del componente en §16.6.

## 22.1 Composición de la sección

| Bloque | Tratamiento |
|---|---|
| Fondo | `bg.secondary` `#E9E3D8` — la banda cálida que rompe el monocromatismo |
| Cabecera | Rótulo superior «TESTIMONIOS» + H2 Cormorant 36 px |
| Disposición en escritorio | **3 columnas** (span 4), gutter 24 px, alineadas por la parte superior |
| Disposición en móvil | Uno visible, desplazable horizontalmente con ajuste por elemento. **Sin reproducción automática** |
| Padding de sección | 120 px en escritorio, 64 px en móvil |

## 22.2 Tipografía

| Elemento | Estilo |
|---|---|
| Cita | Quote · Cormorant **cursiva** · 28 px escritorio / 21 px móvil · interlínea 1.45 · espaciado −0.005 em · `text.primary` · máx. 34 ch |
| Filete | 1 px `#B7A47A` · 32 px de ancho · 32 px bajo la cita |
| Nombre | Overline · 12 px · 600 · 0.14 em · `text.muted` · 16 px bajo el filete |

## 22.3 Prohibiciones

| Prohibido | Razón |
|---|---|
| **Comillas decorativas grandes** | Rasgo de plantilla. Las comillas tipográficas del texto bastan |
| **Estrellas o puntuación** | No existen datos de valoración, y son un cliché |
| **Avatares** | No existen fotografías de pacientes |
| **Tarjeta con fondo, borde o sombra** | El testimonio es tipografía sobre superficie |
| **Carrusel automático** | Ver §26 |
| **Apellidos inventados** | La atribución se mantiene con nombre de pila, como los publica hoy la propia clínica |

## 22.4 Contenido

Los tres testimonios seleccionados en [R02 §9.6], con la edición allí indicada: corregir la errata de Luisa, recortar «no duele ni un pelo» y suprimir «elegí la mejor clínica».

## 22.5 Animación

Aparición única al entrar en pantalla: opacidad 0→1 y `translateY(16px)`→0, **400 ms**, escalonado de **80 ms** entre columnas. Nada más.

---

# 23. Formularios

Debe sentirse integrado a la marca, no genérico.

## 23.1 Los cinco rasgos que lo separan de un formulario de WordPress

1. **Etiqueta siempre visible encima del campo.** Ni etiqueta flotante, ni etiqueta dentro del campo.
2. **Radio de 2 px.** El campo redondeado es el rasgo del formulario de plantilla.
3. **Borde en verde traslúcido, no gris.**
4. **Ritmo vertical de 24 px** entre campos, frente a los 8–12 px habituales.
5. **Sin sombras ni degradados** en ningún estado.

## 23.2 Input de texto

| Propiedad | Valor |
|---|---|
| Altura | **52 px** |
| Padding | 0 16 px |
| Fondo | `bg.elevated` `#FFFFFF` |
| Borde | 1 px `rgba(24,60,53,0.16)` |
| Radio | 2 px |
| Tipografía | Body · Manrope 400 · **17 px escritorio / 16 px móvil** (16 px evita el zoom automático de iOS) |
| Color del texto | `text.primary` |
| Transición | `border-color` y `box-shadow`, 160 ms |

## 23.3 Label

| Propiedad | Valor |
|---|---|
| Tipografía | Body small · Manrope **500** · 15 px |
| Color | `text.secondary` |
| Caja | **Normal, no versales** |
| Separación | 8 px sobre el campo |
| Obligatoriedad | Asterisco en `feedback.error` tras el texto, con `aria-required` |

## 23.4 Placeholder

| Propiedad | Valor |
|---|---|
| Color | `text.muted` |
| Uso | **Solo indicaciones de formato** («+57 300 000 0000»). **Jamás como sustituto de la etiqueta** |
| Cuándo omitirlo | Siempre que no aporte una indicación de formato |

## 23.5 Estados

| Estado | Borde | Fondo | Extra |
|---|---|---|---|
| **Reposo** | 1 px `rgba(24,60,53,0.16)` | `#FFFFFF` | — |
| **Hover** | 1 px `rgba(24,60,53,0.32)` | `#FFFFFF` | — |
| **Focus** | 1 px `#183C35` | `#FFFFFF` | `box-shadow: 0 0 0 3px rgba(24,60,53,0.12)` |
| **Error** | 1 px `#9B3B2E` | `#FFFFFF` | Mensaje debajo: Body small `#9B3B2E`, icono `alert-circle` de 16 px, separación de 8 px |
| **Success** | 1 px `#2F6B4E` | `#FFFFFF` | Icono `check` de 16 px a la derecha, dentro del campo |
| **Disabled** | 1 px `rgba(24,60,53,0.10)` | `rgba(24,60,53,0.04)` | Texto `#9AA09B`, `cursor: not-allowed` |

**El error nunca se comunica solo con color:** siempre borde, icono y texto. Vinculado con `aria-describedby`.

## 23.6 Select

Igual que el input, más: `chevron-down` de 16 px a 16 px del borde derecho, en `text.secondary`; `appearance: none` y flecha propia; padding derecho de 44 px; opción por defecto como indicación, no como valor válido.

## 23.7 Checkbox

| Propiedad | Valor |
|---|---|
| Caja | **20 × 20 px** · radio 2 px · borde 1 px `rgba(24,60,53,0.32)` · fondo `#FFFFFF` |
| Marcada | Fondo `#183C35` · glifo `check` de 14 px en `#F5F2EC` · sin borde |
| Focus | Anillo de 2 px, desplazamiento 2 px |
| **Área táctil** | La caja mide 20 px, pero **el conjunto caja + etiqueta ocupa un área clicable de 44 px de alto** |
| Etiqueta | Body small 15 px · `text.secondary` · 12 px a la derecha de la caja · alineada arriba |
| Enlaces internos | Subrayados a 1 px, `text.primary` |
| Casilla de consentimiento | Obligatoria en el formulario de valoración, con enlace a la política de datos |

## 23.8 Textarea

Altura mínima de **120 px**, padding de 16 px, `resize: vertical`, mismos bordes y estados que el input, e interlínea de 1.6.

## 23.9 Botón de envío

Primary a **ancho completo en móvil** y **ancho automático en escritorio**, altura de 52 px, 48 px por encima del último campo. Estado de carga: texto sustituido por «Enviando…», sin animación giratoria (§26/3).

## 23.10 Composición del formulario

| Propiedad | Valor |
|---|---|
| Ancho máximo | **560 px** |
| Separación entre campos | `space.md` 24 px |
| Separación entre grupos | `space.xl` 48 px |
| Fondo | `bg.primary`, o `bg.elevated` cuando el formulario va en tarjeta |
| Campos obligatorios | Solo nombre y teléfono [X03 §14.4] |
| Confirmación | **Estado propio**, no aviso efímero: H3 Manrope, texto explicativo en Body, e indicación de qué sigue |

---

# 24. Iconografía

## 24.1 Decisión

**Lucide**, más dos SVG propios.

**Justificación:** el trazo de 1.5 px de Lucide a 24 px se corresponde con el peso óptico de Manrope 500, es un conjunto abierto y coherente diseñado sobre una única retícula, y permite importar solo los iconos usados. Alternativas descartadas: Font Awesome (mezcla de estilos, es lo que ya carga el sitio actual), Material (lenguaje visual de Google, demasiado reconocible), Heroicons (trazo más grueso, registro más SaaS).

## 24.2 Especificación

| Propiedad | Valor |
|---|---|
| Familia | **Lucide** · exclusivamente contorno |
| Grosor de trazo | **1.5 px** — sin excepciones |
| Terminaciones | `round` en extremos y uniones |
| Tamaños | **16 px** (en línea, junto a texto) · **20 px** (botones, elementos de menú) · **24 px** (navegación, controles) |
| Color | **`currentColor` siempre.** Nunca color propio |
| Relleno | **Nunca.** Cero iconos rellenos, cero bitonos |
| Alineación | Alineado óptico con la línea base, no con la caja |
| Separación respecto al texto | **8 px** |

## 24.3 SVG propios

| Icono | Uso | Especificación |
|---|---|---|
| **Glifo de WhatsApp** | Botones y enlaces de WhatsApp | **Monocromo**, hereda `currentColor`. Nunca `#25D366`, nunca sobre círculo verde |
| **Isotipo de Nova** | Placeholder de retrato, favicon, cabecera compacta | **[DECISIÓN PENDIENTE]** — existe un favicon llamado `ICONO-WEB` [R02 §3.9], lo que indica que hay isotipo, pero su forma es desconocida porque no hay archivos descargados. *Qué falta:* descargar `cropped-ICONO-WEB_...270x270.png` y comprobar si es separable del logotipo |

## 24.4 Presupuesto de iconos

**Máximo 12 iconos distintos en todo el sitio.** [D00] pide evitar el exceso de iconos, y un presupuesto numérico es la única forma de garantizarlo.

Conjunto autorizado:

| Icono | Uso |
|---|---|
| `menu` (dos líneas) | Abrir menú móvil |
| `x` | Cerrar |
| `chevron-down` | Desplegables y acordeones |
| `chevron-right` | Migas de pan |
| `arrow-right` | Enlaces de acción y filas de lista |
| `phone` | Teléfono |
| `mail` | Email |
| `map-pin` | Ubicación |
| `clock` | Horario |
| `check` | Confirmación, casilla marcada |
| `alert-circle` | Error y avisos |
| **WhatsApp** (propio) | WhatsApp |

## 24.5 Dónde NO usar iconos

| Prohibido | Alternativa |
|---|---|
| Junto a titulares de sección | Rótulo superior tipográfico |
| En los pasos de «Tu proceso» | **Numerales en Cormorant** |
| Como viñetas de características | Filetes de 1 px |
| En tarjetas de procedimiento | La imagen ya comunica |
| En filas de ficha técnica | Etiqueta tipográfica |
| Dentro del CTA primario | El texto es explícito |
| Iconos circulares de color | — |
| Ilustraciones o pictogramas decorativos | — |
| Redes sociales fuera del pie | — |

---

# 25. Microinteracciones

## 25.1 Duraciones y curvas

| Token | Valor | Uso |
|---|---|---|
| `motion.instant` | **120 ms** | Cambio de color inmediato: `hover` de superficie, foco |
| `motion.fast` | **160 ms** | Estados de botón y campo |
| `motion.base` | **200 ms** | `hover` de enlace, subrayado, giro de chevron |
| `motion.medium` | **240 ms** | Desplegables, cambio de estado de la cabecera, apertura de acordeón |
| `motion.slow` | **280 ms** | Panel de menú móvil, barra inferior |
| `motion.reveal` | **400 ms** | Aparición al desplazarse |
| `motion.image` | **600 ms** | Escala de imagen en `hover` |

| Curva | Valor | Uso |
|---|---|---|
| `ease.out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entradas y apariciones. Salida rápida, llegada suave |
| `ease.inOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Cambios de estado y transformaciones simétricas |
| `ease.linear` | `linear` | Fundidos de opacidad puros |

## 25.2 Catálogo de interacciones

| Interacción | Especificación |
|---|---|
| **Hover de botón** | `background-color` · 160 ms · `ease.inOut` · **sin transformación** |
| **Hover de enlace de texto** | Color del subrayado de `rgba(24,60,53,0.32)` a `#183C35` · 200 ms. El color del texto no cambia |
| **Hover de enlace con flecha** | La flecha se desplaza **4 px** a la derecha · 200 ms · `ease.out` |
| **Hover de navegación** | Filete de acento de 1 px, ancho 0→100 % desde la izquierda · 200 ms · `ease.out` |
| **Hover de tarjeta** | Imagen `scale(1)`→`scale(1.03)` · **600 ms** · `ease.out` · `overflow: hidden`. El título muestra su subrayado a 200 ms. **La tarjeta no se eleva ni se desplaza** |
| **Hover de fila de lista** | Fondo `rgba(24,60,53,0.04)` · 120 ms · más el desplazamiento de la flecha |
| **Focus** | Anillo de 2 px con desplazamiento de 2 px · **sin transición** (debe aparecer al instante) |
| **Active de botón** | Fondo al valor `active` · 120 ms · sin escala |
| **Aparición al desplazarse** | Opacidad 0→1 y `translateY(16px)`→0 · **400 ms** · `ease.out` · umbral del 15 % de visibilidad · escalonado de **60 ms** · **una sola vez**, sin repetición |
| **Escalonado de grupo** | 60 ms entre tarjetas, 80 ms entre columnas de testimonio, máximo **6 elementos** encadenados |
| **Apertura de desplegable** | Opacidad 0→1 y `translateY(−4px)`→0 · 200 ms · `ease.out` · 120 ms de retardo de entrada, 240 ms de retardo de salida |
| **Panel de menú móvil** | `translateX(100%)`→0 · 280 ms de apertura / 240 ms de cierre · `ease.out` |
| **Barra inferior** | `translateY(100%)`→0 · 280 ms · `ease.out` · a partir de 240 px de desplazamiento |
| **Cambio de la cabecera** | `height`, `background-color`, `color` · 240 ms · `ease.inOut` |
| **Acordeón** | Altura automática · 240 ms · `ease.inOut` · chevron girado 180° en 200 ms |
| **Comparador** | Sin transición: sigue al puntero en tiempo real |
| **Carga de imagen** | Opacidad 0→1 · 400 ms · `ease.linear` · sin desenfoque progresivo, sin salto de posición (`aspect-ratio` reservado) |

## 25.3 Límites absolutos

| Propiedad | Máximo |
|---|---|
| Desplazamiento | **16 px** |
| Escala | **3 %** (1.03) |
| Duración | **600 ms** |
| Rotación | 180°, solo en chevrons |
| Elementos escalonados | 6 |
| Repeticiones | **0.** Ninguna animación se repite |

---

# 26. Motion principles

**1 · El movimiento confirma; nunca entretiene.**
Toda animación responde a una acción del usuario o a una aparición única. Si una animación pudiera eliminarse sin que se perdiera información, se elimina.

**2 · Lento para la elegancia, rápido para la respuesta.**
La respuesta a una acción directa —pulsar, enfocar— ocurre en **120–200 ms**: por encima de eso se percibe como retardo. La aparición de contenido y el movimiento de imagen ocurren en **400–600 ms**: por debajo se percibe como brusquedad. El cierre es siempre **un 15 % más rápido** que la apertura, porque el usuario ya sabe lo que va a pasar.

**3 · Nada se mueve por sí solo.**
Sin carruseles automáticos, sin desplazamiento paralaje, sin bucles, sin marquesinas, sin contadores que suben, sin texto que se escribe, sin indicadores giratorios, sin ventanas emergentes temporizadas. El sitio actual abre su burbuja de WhatsApp a los 10 segundos sin que nadie lo pida [A01 §14]: es exactamente lo que se prohíbe.

**4 · El movimiento es pequeño.**
Máximo **16 px** de desplazamiento y **3 %** de escala. El movimiento amplio llama la atención sobre sí mismo, que es lo contrario del objetivo. La calidad se percibe en la suavidad, no en la distancia.

**5 · `prefers-reduced-motion` es un estado de primera clase.**

| Con movimiento reducido | Comportamiento |
|---|---|
| Apariciones al desplazarse | Opacidad instantánea, sin desplazamiento |
| Escala de imagen en `hover` | Desactivada |
| Panel móvil y desplegables | Funcionales, con transición de 0 ms |
| Vídeo del hero | **Pausado**, con póster visible |
| Escalonados | Desactivados |
| Cambios de color y foco | **Se conservan**: son información, no decoración |

---

# 27. Accessibility

## 27.1 Contraste — valores verificados

| Combinación | Ratio | Nivel |
|---|---|---|
| `#183C35` sobre `#F5F2EC` | **10.82:1** | AAA |
| `#183C35` sobre `#FFFFFF` | **11.60:1** | AAA |
| `#5A625C` sobre `#F5F2EC` | **5.64:1** | AA |
| `#6F746F` sobre `#F5F2EC` | **4.27:1** | ⚠ **Solo texto grande** |
| `#F5F2EC` sobre `#183C35` | **10.82:1** | AAA |
| `#A8B2AC` sobre `#183C35` | **5.54:1** | AA |
| `#B7A47A` sobre `#183C35` | **4.95:1** | AA |
| `#183C35` sobre `#B7A47A` | **4.95:1** | AA |
| `#B7A47A` sobre `#F5F2EC` | **2.18:1** | ✗ **Prohibido como texto** |
| `#2F6B4E` sobre `#F5F2EC` | **5.63:1** | AA |
| `#8A5A0E` sobre `#F5F2EC` | **5.30:1** | AA |
| `#9B3B2E` sobre `#F5F2EC` | **6.15:1** | AA |
| `#2E564E` sobre `#F5F2EC` | **7.35:1** | AAA |

**Mínimos exigidos:** 4.5:1 en texto normal · 3:1 en texto grande (24 px, o 19 px en negrita) · 3:1 en componentes de interfaz y bordes de campo · 3:1 en el indicador de foco frente al fondo adyacente.

**Dos restricciones derivadas del cálculo:**
- `#B7A47A` **no puede usarse como texto sobre fondo claro** (2.18:1).
- `#6F746F` **no alcanza AA para texto normal** (4.27:1): se restringe a texto de 18 px o más y a metadatos no esenciales; el texto secundario real usa `#5A625C`.

## 27.2 Foco

| Requisito | Valor |
|---|---|
| Estilo | `outline: 2px solid` + `outline-offset: 2px` |
| Color sobre claro | `#183C35` — 10.82:1 contra el fondo |
| Color sobre profundo | `#F5F2EC` |
| **Nunca** | `outline: none` sin sustituto visible |
| Cobertura | Todo elemento interactivo: enlaces, botones, campos, tarjetas, acordeones, chips, tirador del comparador |
| Orden | Sigue el orden del documento. Sin `tabindex` positivos |
| Enlace de salto | «Saltar al contenido» como primer elemento enfocable, visible al recibir el foco |
| Foco atrapado | Solo en el menú móvil y los modales, con retorno al elemento que los abrió |

## 27.3 Objetivos táctiles

| Elemento | Mínimo |
|---|---|
| Todo elemento interactivo | **44 × 44 px** |
| Botón de menú | 44 × 44 px |
| Elemento del menú móvil | 56 px de alto |
| Elemento de desplegable | 44 px de alto |
| Casilla de verificación | Caja de 20 px, **área clicable de 44 px** |
| Tirador del comparador | 44 × 44 px |
| Separación entre objetivos adyacentes | **8 px** mínimo |

## 27.4 Tipografía y legibilidad

| Requisito | Valor |
|---|---|
| Cuerpo mínimo en móvil | **16 px** — evita el zoom automático de iOS en formularios |
| Cuerpo mínimo en escritorio | 15 px, y solo en texto secundario |
| Interlínea del cuerpo | **≥ 1.5** — aquí 1.65 |
| Medida de lectura | **60–75 caracteres** |
| Espaciado negativo | Solo por encima de 26 px. **Jamás en texto de lectura** |
| Versales | Solo en el rótulo superior de 12 px, con espaciado de 0.14 em. **Nunca en párrafos** |
| Alineación | Izquierda. **Sin justificado** (produce ríos y perjudica la lectura) |
| Zoom | Legible y utilizable al **200 %** sin pérdida de contenido |

## 27.5 Estados y semántica

| Requisito | Valor |
|---|---|
| **Nunca solo color** | Todo estado lleva icono y texto |
| Jerarquía de encabezados | Secuencial, sin saltos. Un solo `h1` por página |
| Texto alternativo | **Todas** las imágenes. Las decorativas con `alt=""`. El sitio actual las tiene vacías en prácticamente todo el material [A01 §9.8]: es un fallo documentado a corregir |
| Enlaces | Texto descriptivo. Nunca «clic aquí» ni «ver más» a secas |
| Controles del comparador | `role="slider"` con `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| Acordeones | `aria-expanded` y `aria-controls`; el contenido presente en el HTML aunque esté colapsado |
| Vídeo | `muted`, sin contenido informativo exclusivo, pausado con movimiento reducido |
| Idioma | `lang="es-CO"` |

---

# 28. Responsive design

## 28.1 Breakpoints

| Nombre | Rango | Justificación del valor |
|---|---|---|
| **Mobile** | 0 – **767 px** | 768 px es el ancho del iPad en vertical: el límite se sitúa justo debajo |
| **Tablet** | **768** – **1023 px** | Desde el iPad vertical hasta justo por debajo del iPad horizontal |
| **Desktop** | **1024** – **1439 px** | 1024 px es el iPad horizontal y el portátil pequeño. Es el punto en el que la navegación completa cabe cómodamente |
| **Wide** | **1440 px** y más | 1440 px es el ancho lógico más común en portátiles de trabajo. Aquí el contenido deja de crecer |

**No son valores redondos por costumbre: cada uno corresponde a un ancho de dispositivo real.** Se descartan 640 y 1280 px por no corresponder a ningún límite físico relevante en este proyecto, y 1920 px se usa únicamente como tope absoluto del contenedor, no como punto de ruptura de composición.

## 28.2 Transformación del layout

| Elemento | Mobile | Tablet | Desktop | Wide |
|---|---|---|---|---|
| Contenedor | 100 % − 40 px | 100 % − 64 px | máx. 1200 px | máx. 1200 px, margen creciente |
| Columnas | 1 | 12 (spans de 6) | 12 | 12 |
| Gutter | — | 20 px | 24 px | 24 px |
| Padding de sección | 64 px | 96 px | 120 px | 120 px |
| Navegación | Panel completo | Panel completo | Barra con desplegables | Barra con desplegables |
| CTA persistente | **Barra inferior** | Barra superior | Barra superior | Barra superior |
| Hero | 72 vh, imagen | 78 vh | 85 vh | 85 vh, máx. 900 px |
| Titular del hero | 44 px | 64 px | 88 px | 88 px, sin crecer |
| Procedimientos | 1 columna | 2 columnas | 3 columnas | 3 columnas |
| Especialistas | 1 columna | 2 columnas | 3 columnas | 3 columnas |
| Resultados | 1 columna | 2 columnas | Mosaico irregular | Mosaico irregular |
| Ficha de procedimiento | Vertical continuo | Vertical continuo | 8/4 con lateral fijo | 8/4 con lateral fijo |
| Ficha técnica | 1 columna | 2 columnas | 2 columnas | 2 columnas |
| Testimonios | Deslizable, 1 visible | 2 columnas | 3 columnas | 3 columnas |
| Pie | Acordeones apilados | 2 columnas | 4 columnas | 4 columnas |
| Proceso (5 pasos) | Vertical | Vertical | Escalonado alterno | Escalonado alterno |
| FAQ | Acordeón | Acordeón | Acordeón + índice lateral | Acordeón + índice lateral |

## 28.3 Reglas transversales

1. **Mismo contenido en todos los tamaños.** Nada se oculta en móvil: se reordena. Un `display: none` por punto de ruptura es una decisión de contenido, no de composición, y debe justificarse.
2. **El orden narrativo no cambia.** Las secciones aparecen en la misma secuencia.
3. **Sin desplazamiento horizontal** en ningún ancho, salvo los carruseles deslizables explícitos.
4. **Prueba obligatoria a 320 px** de ancho.
5. **La composición cambia por espacio disponible, no por dispositivo.**

---

# 29. Design tokens

Nombres semánticos, desacoplados del valor. Ningún componente referencia un valor visual directamente.

## 29.1 Color

```
color.brand.primary               #183C35
color.brand.primaryDark           #102D28
color.brand.secondary             #2E564E
color.brand.accent                #B7A47A

color.bg.primary                  #F5F2EC
color.bg.secondary                #E9E3D8
color.bg.sand                     #D9D0C2
color.bg.dark                     #102D28
color.bg.elevated                 #FFFFFF

color.text.primary                #183C35
color.text.secondary              #5A625C
color.text.muted                  #6F746F
color.text.onDark                 #F5F2EC
color.text.onDarkMuted            #A8B2AC
color.text.onAccent               #183C35

color.border.hairline             rgba(24,60,53,0.08)
color.border.default              rgba(24,60,53,0.16)
color.border.strong               rgba(24,60,53,0.32)
color.border.accent               #B7A47A
color.border.onDark               rgba(245,242,236,0.16)
color.divider                     rgba(24,60,53,0.10)

color.state.hoverSurface          rgba(24,60,53,0.04)
color.state.hoverPrimary          #102D28
color.state.activePrimary         #0B211D
color.state.focus                 #183C35
color.state.focusOnDark           #F5F2EC
color.state.disabledSurface       rgba(24,60,53,0.08)
color.state.disabledText          #9AA09B
color.state.disabledBorder        rgba(24,60,53,0.10)

color.feedback.success            #2F6B4E
color.feedback.warning            #8A5A0E
color.feedback.error              #9B3B2E
color.feedback.info               #2E564E

color.overlay.hero                rgba(16,45,40,0.78)
color.overlay.header              rgba(16,45,40,0.45)
color.overlay.solid               rgba(16,45,40,0.82)
```

## 29.2 Tipografía

```
font.display                      'Cormorant Garamond', Georgia, serif
font.body                         'Manrope', system-ui, sans-serif

fontWeight.displayLight           300
fontWeight.displayRegular         400
fontWeight.displayMedium          500
fontWeight.bodyRegular            400
fontWeight.bodyMedium             500
fontWeight.bodySemibold           600

type.displayXl                    88 / 44 px
type.display                      64 / 36 px
type.h1                           48 / 32 px
type.h2                           36 / 26 px
type.h3                           24 / 20 px
type.h4                           20 / 18 px
type.bodyLarge                    20 / 18 px
type.body                         17 / 16 px
type.bodySmall                    15 / 14 px
type.caption                      13 / 12 px
type.overline                     12 / 11 px
type.button                       15 / 15 px
type.navigation                   15 / 20 px
type.quote                        28 / 21 px
type.numeral                      120 / 64 px

measure.display                   22ch
measure.heading                   28ch
measure.body                      68ch
measure.quote                     34ch
```

## 29.3 Espaciado, radios, sombras

```
space.3xs   4px      space.xl    48px
space.2xs   8px      space.2xl   64px
space.xs   12px      space.3xl   80px
space.sm   16px      space.4xl   96px
space.md   24px      space.5xl  120px
space.lg   32px      space.6xl  160px
                     space.7xl  200px

radius.none     0
radius.xs       2px
radius.sm       4px
radius.full   999px      (uso restringido)

shadow.none       none
shadow.subtle     0 1px 2px rgba(24,60,53,0.04), 0 2px 8px rgba(24,60,53,0.04)
shadow.elevated   0 4px 16px rgba(24,60,53,0.06), 0 1px 3px rgba(24,60,53,0.04)
shadow.floating   0 8px 32px rgba(24,60,53,0.10), 0 2px 8px rgba(24,60,53,0.06)

border.width.hairline   1px
border.width.focus      2px
```

## 29.4 Layout y movimiento

```
layout.container.max        1200px
layout.container.wide       1440px
layout.container.absolute   1920px
layout.columns              12
layout.gutter.tablet         20px
layout.gutter.desktop        24px
layout.padding.mobile        20px
layout.padding.tablet        32px
layout.padding.desktop       48px

breakpoint.tablet            768px
breakpoint.desktop          1024px
breakpoint.wide             1440px

ratio.portrait              2 / 3
ratio.portraitWide          4 / 5
ratio.landscape             3 / 2
ratio.square                1 / 1

motion.instant              120ms
motion.fast                 160ms
motion.base                 200ms
motion.medium               240ms
motion.slow                 280ms
motion.reveal               400ms
motion.image                600ms

ease.out                    cubic-bezier(0.22, 1, 0.36, 1)
ease.inOut                  cubic-bezier(0.4, 0, 0.2, 1)
ease.linear                 linear

motion.distance.max          16px
motion.scale.max             1.03

z.base       0      z.header    100
z.sticky    10      z.overlay   200
z.dropdown  50      z.modal     300
```

## 29.5 Regla de acoplamiento

Los componentes referencian **exclusivamente** tokens semánticos. Prohibido `#183C35` dentro de un componente; se usa `color.brand.primary`. Prohibido `24px`; se usa `space.md`.

Esta es la condición técnica de §34: cambiar de cliente es reescribir el archivo de tokens, no los componentes.

---

# 30. Componentes base

Responsabilidad visual únicamente. **No se programan en esta fase.**

## 30.1 Estructura

| Componente | Responsabilidad visual |
|---|---|
| **Container** | Aplica ancho máximo (1200/1440) y padding lateral por punto de ruptura. Variante `bleed` sin límite |
| **Section** | Padding vertical según ritmo, color de fondo por variante (`primary`, `secondary`, `sand`, `dark`), y filete superior opcional |
| **Grid** | Retícula de 12 columnas con gutter por punto de ruptura, y spans configurables |
| **Header** | Cabecera fija: dos estados (sobre hero / sólido), transición de altura, logotipo por variante, navegación, desplegables y CTA |
| **MobileMenu** | Panel a pantalla completa, acordeones, CTA de cierre, foco atrapado, bloqueo del scroll |
| **StickyActionBar** | Barra inferior móvil con CTA primario y WhatsApp. Aparición por desplazamiento, ocultación con teclado |
| **Footer** | Cuatro columnas en escritorio, acordeones en móvil, sobre `bg.dark` |
| **SkipLink** | Enlace de salto al contenido, visible solo con foco |

## 30.2 Tipografía y contenido

| Componente | Responsabilidad visual |
|---|---|
| **SectionHeading** | Bloque de rótulo superior + titular + subtítulo, con alineación y medidas del §7.2 |
| **Overline** | Rótulo de 12 px en versales con espaciado de 0.14 em |
| **Prose** | Contenedor de texto largo con medida de 68 ch y ritmo vertical entre párrafos, listas y encabezados |
| **PullQuote** | Cita en Cormorant cursiva con filete de acento |
| **Numeral** | Cifra grande en Cormorant como recurso gráfico |
| **DataList** | Lista de definición con filetes horizontales. Base de la ficha técnica, la formación y las condiciones |
| **Breadcrumb** | Migas de pan en Caption con separador y último elemento sin enlace |
| **Disclaimer** | Bloque de aviso con filete superior en `warning`, sobre `bg.secondary` |
| **PendingContent** | Marca visible de `[CONTENIDO POR CONFIRMAR]`, en cursiva `text.muted` |

## 30.3 Acción

| Componente | Responsabilidad visual |
|---|---|
| **Button** | Cinco variantes (`primary`, `secondary`, `ghost`, `text`, `whatsapp`), dos alturas, dos contextos (claro / profundo), seis estados |
| **IconButton** | Botón cuadrado de 44 px con icono de 24 px. Cerrar, menú, controles |
| **ActionLink** | Enlace de texto con subrayado y flecha opcional que se desplaza |
| **CTASection** | Banda de cierre sobre `bg.dark` o imagen con velo, con titular, CTA primario y secundario |
| **StickyCtaCard** | Tarjeta lateral fija de la ficha de procedimiento |

## 30.4 Tarjetas y colecciones

| Componente | Responsabilidad visual |
|---|---|
| **ProcedureCard** | Imagen 2:3, rótulo, título, descripción de una línea |
| **CategoryCard** | Variante amplia con recuento |
| **SpecialistCard** | Retrato 4:5, filete de acento, nombre, especialidad, credencial. Con estado de placeholder |
| **ResultCard** | Imagen de ratio variable, procedimiento, título, plazo |
| **TestimonialCard** | Cita en Cormorant cursiva, filete, nombre. Sin caja |
| **FinancingCard** | Contenedor blanco de logotipo, nombre, descripción, condiciones |
| **EditorialCard** | Imagen 3:2 con título y texto en composición 7/5 |
| **ListRow** | Fila de 56 px con filete superior, nombre y flecha. Base del catálogo |
| **CardGrid** | Retícula de tarjetas con columnas por punto de ruptura y aparición escalonada |
| **EditorialMosaic** | Composición irregular de resultados con spans alternos |

## 30.5 Formulario e interacción

| Componente | Responsabilidad visual |
|---|---|
| **Input** / **Textarea** / **Select** | Campo de 52 px con etiqueta encima y seis estados |
| **Checkbox** | Caja de 20 px con área clicable de 44 px |
| **FormField** | Envoltorio de etiqueta, campo, ayuda y error, con ritmo de 24 px |
| **Form** | Contenedor de 560 px con espaciado entre campos y grupos |
| **FormSuccess** | Estado de confirmación propio |
| **Accordion** | Elemento expansible con chevron, filete y contenido siempre presente en el HTML |
| **FilterChips** | Chips de 32 px con estado activo. Solo por encima de los umbrales definidos |
| **BeforeAfterSlider** | Comparador con divisor, tirador de 40 px, etiquetas y control por teclado |
| **Dropdown** | Panel de navegación con retardos de entrada y salida |

## 30.6 Multimedia

| Componente | Responsabilidad visual |
|---|---|
| **Image** | Envoltorio con `aspect-ratio` reservado, `cover`, `object-position`, aparición por opacidad y `alt` obligatorio |
| **Hero** | Medio a sangre, velo doble, contenido en 6 columnas, dos CTA. Con reserva de imagen estática |
| **VideoBackground** | Vídeo silenciado en bucle con póster, pausado con movimiento reducido |
| **ImagePlaceholder** | Marco en `bg.sand` con isotipo al 18 % y etiqueta de pendiente |
| **LogoContainer** | Recuadro blanco de 120 px para logotipos de terceros, con `contain` |
| **Logo** | Logotipo con variante por fondo (color / blanco) y tamaño por estado de cabecera |

---

# 31. Reglas de composición

## 31.1 Alineación

1. **Alineación a la izquierda por defecto** en absolutamente todo: titulares, subtítulos, texto y tarjetas.
2. **Texto centrado: máximo una vez por página**, y solo en la banda de CTA final. El centrado sistemático es el rasgo delator de la plantilla.
3. **Todo se alinea a la retícula de 12 columnas.** Ningún elemento posicionado por desplazamiento manual — el sitio actual coloca sus botones con `top: -215px` [R02 §11.1].
4. **Un solo eje de alineación por sección.** Si el titular arranca en la columna 1, el texto y el CTA arrancan en la columna 1.
5. **Alineación óptica en la tipografía display:** los titulares en Cormorant a gran tamaño requieren un ajuste negativo de 2–4 px a la izquierda para que el remate quede alineado con el texto inferior.

## 31.2 Proporción imagen / texto

| Proporción | Uso | Nota |
|---|---|---|
| **7/5** | Imagen dominante | Dirección predominante |
| **5/7** | Texto dominante | Alternancia |
| **8/4** | Contenido con lateral | Fichas de procedimiento |
| **6/6** | **Prohibido** | Estático y genérico |
| **12** | Imagen a sangre o texto centrado | Máximo 3 a sangre por página |

**La dirección alterna:** si un bloque tiene la imagen a la izquierda, el siguiente la tiene a la derecha. Nunca tres bloques consecutivos en la misma dirección.

## 31.3 Ritmo

1. **Alternancia de superficies** según §1.9, sin dos profundas consecutivas.
2. **Alternancia de densidad:** tras una sección de baja densidad, una de densidad media. Nunca tres secciones de baja densidad seguidas.
3. **Alternancia de composición:** retícula → composición 7/5 → banda → retícula.
4. **Regla de diferenciación:** cada sección debe diferir de su vecina en al menos uno de estos tres ejes — fondo, dirección, presencia de imagen. Si coincide en los tres, se fusionan.

## 31.4 Densidad

| Contexto | Elementos por pantalla | Padding de sección |
|---|---|---|
| Hero | 1 mensaje | 85 vh |
| Descubrimiento | 3–5 | 120–160 px |
| Editorial | 1 bloque de texto + 1 imagen | 120 px |
| Información | Tabulada, sin límite | 64–80 px |
| CTA | 1 mensaje + 2 botones | 160 px |

**Máximo un mensaje principal por pantalla** en los contextos de descubrimiento y cierre.

## 31.5 Whitespace

1. **El espacio se concentra antes de los titulares y antes de los CTA.**
2. **El espacio exterior de un bloque supera al interior en al menos 2 pasos** de escala.
3. **El espacio no se reduce para que algo «entre».** Si no cabe, se elimina contenido o se reparte en dos secciones.
4. **El espacio es simétrico en el eje vertical de sección**, salvo cuando la sección siguiente asoma deliberadamente (hero).

## 31.6 Jerarquía

1. **Un solo elemento en Cormorant por pantalla.** Dos titulares serif compitiendo anulan la jerarquía.
2. **Un solo CTA primario por vista.**
3. **La secuencia rótulo → titular → subtítulo → contenido → CTA no se altera.**
4. **Ningún elemento secundario supera en tamaño a uno primario.**

## 31.7 Repetición

1. **La cabecera de sección es idéntica en todo el sitio** (§7.2).
2. **Las tarjetas comparten un único lenguaje**: mismo radio, mismo `hover`, mismo tratamiento de imagen.
3. **Los CTA usan siempre la misma etiqueta.**
4. **Los filetes son siempre de 1 px.**
5. **Máximo 6 tipos de tarjeta, 5 de botón, 5 ratios de imagen, 12 iconos.** Los presupuestos numéricos son lo que hace verificable la coherencia.

## 31.8 Contraste

1. **Contraste de valor**, no de tono: la variación viene de claro contra profundo.
2. **Contraste de familia:** Cormorant contra Manrope como principal recurso jerárquico.
3. **Contraste de escala:** salto mínimo de 1.25× entre niveles adyacentes.
4. **Contraste de densidad:** el cambio de densidad es una señal de navegación.
5. **La fotografía es la fuente de contraste cromático**, y por eso no se desatura.

---

# 32. Qué no hacer

## 32.1 Color

| Prohibido |
|---|
| Degradados decorativos. Los únicos permitidos son los velos de imagen |
| Cualquier degradado que incluya `#B7A47A` |
| Latón como fondo de sección, tarjeta o banda |
| Latón como texto sobre fondo claro (2.18:1) |
| Latón en grosor superior a 1 px como filete |
| Efectos metálicos, brillos, resplandores |
| Más de dos superficies profundas por página |
| Dos superficies profundas consecutivas |
| Azul o turquesa en cualquier elemento. Es la identidad que se abandona |
| Verde de WhatsApp `#25D366` |
| Rojos, verdes o ámbares genéricos como estados |
| Grises fríos en bordes. Los bordes son verde traslúcido |
| Color escrito dentro de un componente en lugar de un token |
| Comunicar un estado solo con color |

## 32.2 Tipografía

| Prohibido |
|---|
| Cormorant Garamond por debajo de 26 px |
| Cormorant en cuerpo de texto, interfaz, botones o navegación |
| Cormorant con espaciado positivo |
| Cormorant en versales o versalitas |
| Cormorant peso 300 por debajo de 56 px |
| Más de un titular en Cormorant por pantalla |
| Una tercera familia tipográfica |
| Encabezados por debajo del tamaño del cuerpo |
| Botones mayores que un H3 |
| Texto justificado |
| Versales en párrafos |
| Espaciado negativo en texto de lectura |
| Medidas superiores a 75 caracteres |
| Cuerpo por debajo de 16 px en móvil |

## 32.3 Forma y superficie

| Prohibido |
|---|
| `border-radius: 999px` en botones |
| Radios de 8 px o más en cualquier elemento |
| Cualquier radio en imágenes |
| Avatares circulares |
| Sombras con opacidad superior a 0.12 |
| Sombras desplazadas sin difuminado |
| **`box-shadow: 10px 10px 0 #333333`** — el valor exacto del sitio actual |
| Sombras en imágenes |
| Sombra en el estado de reposo de una tarjeta |
| `text-shadow` en cualquier contexto |
| Bordes de más de 1 px, salvo el anillo de foco |
| Borde y sombra simultáneos |
| Bordes anidados |
| Texturas, tramas, viñeteados, ruido |

## 32.4 Composición

| Prohibido |
|---|
| Texto centrado en más de una sección por página |
| Composiciones 50/50 |
| Tres bloques consecutivos con la imagen en el mismo lado |
| Posicionamiento por desplazamiento manual fuera de la retícula |
| Valores de espaciado fuera de la escala |
| Contenido que se expanda por encima de 1440 px |
| Hero de 100 vh |
| Más de 3 imágenes a sangre por página |
| Más de 6 tipos de tarjeta, 5 de botón, 5 ratios, 12 iconos |
| Dos CTA primarios en la misma vista |
| Secciones idénticas a su vecina en fondo, dirección y presencia de imagen |

## 32.5 Movimiento

| Prohibido |
|---|
| Carruseles automáticos |
| Desplazamiento paralaje |
| Cualquier animación en bucle |
| Contadores animados |
| Texto que se escribe |
| Indicadores giratorios de carga |
| Ventanas emergentes temporizadas o de intención de salida |
| Burbuja de chat que se abre por sí sola |
| Desplazamientos superiores a 16 px |
| Escalas superiores al 3 % |
| Duraciones superiores a 600 ms |
| Elevación de tarjeta en `hover` |
| Animaciones que se repiten al volver a entrar en pantalla |
| Ignorar `prefers-reduced-motion` |

## 32.6 Imágenes

| Prohibido |
|---|
| Fotografía de banco cuando existe material real |
| **Retrato de banco que represente a un especialista** |
| Filtros distintos por sección |
| Duotono, bitono, sepia |
| Virado verde para «combinar» con la marca |
| Desaturación superior al −10 % |
| Ampliar por encima de 1.25× el original |
| Ratio 16:9 en tarjetas |
| Velo sobre una imagen que no lleva texto |
| Fotografía quirúrgica explícita |
| Publicar imágenes de pacientes sin consentimiento verificado |
| `alt` vacío en imágenes con contenido |
| Imagen sin `aspect-ratio` reservado |

## 32.7 Estética global

| Prohibido |
|---|
| **Plantilla de WordPress:** sombras duras, bloques de título con ancho fijo, botones sobredimensionados, carrusel automático |
| **Plantilla de clínica estética:** azul sobre blanco, seis iconos circulares, contadores, botón verde de WhatsApp |
| **Spa:** verde claro, tipografía manuscrita, imágenes de piedras y velas, lenguaje de bienestar |
| **Excesivamente femenino:** rosa, dorado brillante, serif decorativa, florituras |
| **Lujo artificial:** dorado saturado, serif con espaciado amplio en versales, negro sobre dorado, ornamento simétrico |
| **Interfaz SaaS:** píldoras, sombras difusas, iconos bitono, badges de color, tarjetas muy redondeadas |
| **Panel de control:** sombras sobre todo, densidad uniforme, tarjetas con borde y sombra |
| **Landing genérica:** hero centrado de 100 vh, tres columnas de iconos, sección de logos, testimonios con estrellas |

---

# 33. Referencia a los recursos existentes

Inventario completo en [R02 §3]. **Ninguno está descargado todavía.**

## 33.1 Logotipos por contexto de fondo

| Contexto | Variante | Archivo | Notas |
|---|---|---|---|
| **Cabecera sobre hero** (transparente) | **Blanca** | `2023/12/Clinica-Nova_Logo-Blanco.png` | Original de 8000 × 2925 px: reescalar a 240 px de ancho antes de servir |
| **Cabecera sólida** y páginas interiores | **Color** | `2023/10/Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` | 1721 × 500 px · 32 px de alto (26 px comprimida) · es la única imagen del sitio con `alt` correcto |
| **Pie** sobre `bg.dark` | **Blanca** | `Clinica-Nova_Logo-Blanco.png` | Misma variante que el hero |
| **Favicon** y manifest | **Isotipo** | `2023/10/cropped-ICONO-WEB_...-{32,180,192,270}.png` | Regenerar el juego completo |
| **Placeholder de retrato** | **Isotipo** | Del favicon | Al 18 % de opacidad sobre `bg.sand` |
| Alternativa para el pie | — | `2023/11/Banner-Redes-logo.png` | 4500 × 2859 px · proporción 1.57:1, poco apta para pie ancho. Preferir la blanca |

**Problema de proporciones a resolver:** las variantes disponibles tienen proporciones de 3.44:1, 2.74:1 y 1.57:1 [R02 §5.1]. Ninguna es óptima para una cabecera fija y esbelta. **Habrá que reencuadrar** a partir del PNG de mayor resolución.

## 33.2 Imágenes prioritarias

### Prioridad 1 — imprescindibles

| Uso | Recurso | Ratio destino |
|---|---|---|
| **Hero** | `2023/11/cirugia-plastica-y-estetica-en-colombia-medellin-procedimientos-esteticos-1.jpg` | A sangre |
| **Hero, alternativa** | `2023/11/cirugia-plastica-en-medellin-cirujanos-plasticos-en-colombia-clinica-nova-procedimientos-esteticos-1.jpg` | A sangre |
| **CTA final** | La segunda de hero, con velo uniforme al 0.82 | A sangre |
| **Procedimientos / Corporales** | `2023/12/...-procedimientos-corporales.jpg` (400 × 600) | **2:3 exacto** |
| **Procedimientos / Faciales** | `2023/12/...-procedimientos-faciales.jpg` (400 × 600) | **2:3 exacto** |
| **Procedimientos / Belleza íntima** | `2023/12/...-procedimientos-de-belleza-intima.jpg` (400 × 600) | **2:3 exacto** |
| **Vídeo del hero** | `2023/12/banner-web.mp4` | Condicionado a §18.2 |

Las tres imágenes de categoría son **el mejor material del inventario**: su ratio 2:3 coincide exactamente con `ProcedureCard` y su ancho de 400 px se ajusta a los 384 px de la retícula de 3 columnas.

### Prioridad 2 — La clínica y apoyo editorial

Las seis institucionales de 700 × 500 [R02 §3.4], recortadas a 3:2, ancho máximo de 640 px:

| Recurso | Uso propuesto |
|---|---|
| `cirujanos-plasticos-en-medellin-...-clinica-nova.jpg` | Bloque de equipo en La clínica — es la única cuyo nombre menciona «cirujanos plásticos» |
| `clinica-nova-cirugia-plastica-cirugia-estetica-colombia.jpg` | Cabecera de La clínica |
| `clinica-nova-cirugia-plastica-y-estetica-en-medellin.jpg` | Bloque de instalaciones |
| `abdominoplastia-mamoplastia-mastopexia-...jpg` | Introducción de la portada |
| `cirugia-plastica-en-colombia-clinica-nova-medellin.jpg` | Bloque de filosofía |
| `clinica-nova-cirugia-plastica-y-estetica-en-medellin-colombia.jpg` | Bloque de ubicación |

**[NO VERIFICADO]:** el contenido real de cada imagen. La asignación se basa en los nombres de archivo y debe revisarse al descargarlas.

### Financiación

`logo-servicredito.png` (589 × 343) y `logo-cfa.png` (337 × 150), en `LogoContainer` blanco de 120 px con `max-height: 40px`.

## 33.3 Recursos descartados o pendientes de sustitución

| Recurso | Decisión |
|---|---|
| **3 imágenes antes/después** | **Descartadas por criterio**, no por indisponibilidad: son pacientes reales sin consentimiento verificable [R02 §3.5]. Resultados se demuestra con placeholders |
| **10 logotipos de convenio** | JPG de 250 × 100 con fondo blanco y tres erratas en los nombres. Solo utilizables en `LogoContainer` si la sección se conserva |
| **2 iconos del pie** (523 × 523) | Sin `href` y sin `alt`, significado desconocido. Se sustituyen por el conjunto propio |
| **`es.svg`** | Se elimina con el traductor |

## 33.4 Recursos a sustituir en el futuro

| Recurso | Por qué | Sustituto |
|---|---|---|
| **Toda la fotografía** | Máximo de 700 × 500: insuficiente para pantallas de alta densidad | Sesión fotográfica propia |
| **Retratos de especialista** | No existen | Sesión de retrato, 4:5, luz y fondo uniformes |
| **Logotipos** | Solo PNG, sin vectorial, con proporciones de redes sociales | SVG y versión horizontal para cabecera |
| **Vídeo del hero** | 4 s y ratio 2:1 | Pieza de 12–20 s en 16:9 o vertical |
| **Casos de resultados** | No hay material con consentimiento | Material autorizado |
| **Logotipos de convenio** | JPG de baja resolución con fondo | SVG o PNG con transparencia |

---

# 34. Principio de reutilización

## 34.1 Las cuatro capas

| Capa | Contenido | Cambia entre clínicas |
|---|---|---|
| **TOKENS** | Los valores del §29: color, tipografía, espaciado, radios, sombras, movimiento, puntos de ruptura | **Sí** — un solo archivo |
| **COMPONENTES** | Los del §30. Sin valores visuales propios, sin literales de marca | **No** |
| **CONTENIDO** | Textos, procedimientos, especialistas, casos, testimonios, financiación, contacto | **Sí** — colecciones de datos |
| **BRANDING** | Logotipos, favicon, nombre, fotografías | **Sí** — archivos y referencias |

## 34.2 Qué se cambia y con qué coste

| Cambio | Qué se toca |
|---|---|
| **Nombre** de la clínica | Un valor de configuración |
| **Logotipo** (3 variantes + favicon) | Sustituir archivos y las referencias del componente `Logo` |
| **Colores** | `color.*` en el archivo de tokens |
| **Tipografías** | `font.*` y `type.*`, más la carga de fuentes |
| **Fotografías** | Archivos y referencias en las colecciones |
| **Procedimientos** | Colección de datos — de 0 a N |
| **Especialistas** | Colección de datos — de 0 a N |
| **Testimonios** | Colección de datos |
| **Casos** | Colección de datos |
| **Financiación** | Colección de datos — de 0 a N entidades |
| **Contacto, horarios, redes** | Un único objeto |
| **Navegación** | Una estructura de datos |
| **Etiqueta del CTA** | Configuración |

**Ningún componente se reconstruye en ninguno de esos casos.**

## 34.3 Reglas que lo garantizan

1. **Ningún componente contiene un valor visual literal.** Ni `#183C35`, ni `24px`, ni `'Cormorant Garamond'`, ni `600ms`.
2. **Ningún componente contiene un literal de marca.** Ni «Clínica Nova», ni «Agendar valoración», ni el número de WhatsApp, ni una ruta de imagen fija.
3. **Ningún componente asume una cantidad.** Toda retícula funciona con 1, 3 o 30 elementos.
4. **Todo componente tiene estado vacío y estado de placeholder.** Es lo que permite que Especialistas y Resultados existan hoy sin contenido.
5. **Los ratios de imagen son tokens**, no valores incrustados.
6. **El texto vive fuera de los componentes.**

## 34.4 La ventaja inmediata

Esta separación no es solo un seguro por si la propuesta no se cierra. **Es lo que resuelve el problema de contenido de hoy:** con Especialistas, Procedimientos y Resultados construidos como colecciones con placeholder, la llegada del contenido real es rellenar datos, no rediseñar pantallas.

---

# 35. Criterios de calidad visual

Checklist de verificación **antes de considerar terminada una pantalla**. Cualquier respuesta negativa impide darla por cerrada.

## 35.1 Jerarquía

- [ ] ¿Hay **un solo** mensaje principal?
- [ ] ¿Hay **un solo** elemento en Cormorant?
- [ ] ¿Hay **un solo** CTA primario?
- [ ] ¿Se identifica el orden de lectura en los primeros dos segundos?
- [ ] ¿El salto entre niveles adyacentes es de al menos 1.25×?
- [ ] ¿Ningún encabezado es menor que el cuerpo de texto?
- [ ] ¿Ningún botón es mayor que un H3?

## 35.2 Tipografía

- [ ] ¿Solo dos familias?
- [ ] ¿Ningún Cormorant por debajo de 26 px?
- [ ] ¿Todo Cormorant con espaciado negativo?
- [ ] ¿Ningún Cormorant en versales?
- [ ] ¿Todos los tamaños pertenecen a la escala del §6?
- [ ] ¿Ninguna línea supera los 75 caracteres?
- [ ] ¿El cuerpo mide 16 px o más en móvil?

## 35.3 Espacio

- [ ] ¿Todos los valores pertenecen a la escala del §9?
- [ ] ¿El padding de sección corresponde al punto de ruptura?
- [ ] ¿El espacio exterior de cada bloque supera al interior en 2 pasos?
- [ ] ¿Hay aire antes del titular y antes del CTA?
- [ ] ¿Se ha respetado el espacio en lugar de comprimirlo para que algo entrara?

## 35.4 Color

- [ ] ¿La proporción se aproxima al 60/30/10?
- [ ] ¿El latón ocupa menos del 3 %?
- [ ] ¿El latón aparece al menos una vez?
- [ ] ¿Hay al menos una superficie profunda y una cálida?
- [ ] ¿No hay dos superficies profundas consecutivas?
- [ ] ¿Todos los colores provienen de los tokens?
- [ ] ¿Ningún azul ni turquesa?
- [ ] ¿Ningún degradado decorativo?

## 35.5 CTA

- [ ] ¿El CTA primario se reconoce sin leerlo?
- [ ] ¿La etiqueta es exactamente «Agendar valoración»?
- [ ] ¿Hay un solo primario en la vista?
- [ ] ¿Ningún estilo de botón fuera de los cinco definidos?
- [ ] ¿La sección termina en una acción o en una exploración pertinente?

## 35.6 Fotografía

- [ ] ¿El ratio pertenece a los cinco del §17.1?
- [ ] ¿Ninguna imagen se amplía por encima de 1.25×?
- [ ] ¿La corrección de color es la única y uniforme?
- [ ] ¿Radio 0 en todas las imágenes?
- [ ] ¿Sin borde y sin sombra?
- [ ] ¿Velo solo donde hay texto encima?
- [ ] ¿Tres o menos imágenes a sangre?
- [ ] ¿Todas con `alt` y con `aspect-ratio` reservado?

## 35.7 Alineación y consistencia

- [ ] ¿Todo alineado a la retícula de 12 columnas?
- [ ] ¿Un solo eje de alineación por sección?
- [ ] ¿Ninguna composición 50/50?
- [ ] ¿La dirección alterna respecto al bloque anterior?
- [ ] ¿La cabecera de sección es idéntica a la del resto del sitio?
- [ ] ¿Las tarjetas comparten radio, `hover` y tratamiento de imagen?
- [ ] ¿Radios dentro de 0–4 px?

## 35.8 Accesibilidad

- [ ] ¿Texto normal con 4.5:1 o más? ¿Texto grande con 3:1 o más?
- [ ] ¿Ningún latón como texto sobre claro?
- [ ] ¿Foco visible en todos los elementos interactivos?
- [ ] ¿Objetivos táctiles de 44 px o más?
- [ ] ¿Ningún estado comunicado solo con color?
- [ ] ¿Jerarquía de encabezados secuencial, con un solo `h1`?
- [ ] ¿Navegable íntegramente con teclado?
- [ ] ¿Legible al 200 % de zoom?

## 35.9 Responsive

- [ ] ¿Verificada a 320, 375, 768, 1024, 1440 y 1920 px?
- [ ] ¿Sin desplazamiento horizontal?
- [ ] ¿Mismo contenido en todos los tamaños?
- [ ] ¿El contenido no se expande por encima de 1440 px?
- [ ] ¿En móvil hay un único elemento fijo?

## 35.10 Ausencia de ruido

- [ ] ¿Se puede eliminar algún elemento sin perder información? **Si la respuesta es sí, se elimina.**
- [ ] ¿Alguna animación llama la atención sobre sí misma?
- [ ] ¿Algún elemento existe solo para «verse premium»?
- [ ] ¿Más de 12 iconos en el sitio?
- [ ] ¿Algún icono decorativo?
- [ ] ¿Alguna sombra en estado de reposo?
- [ ] ¿Esta pantalla podría confundirse con una plantilla?

---

# 36. Resumen del design system

| Categoría | Decisión definitiva |
|---|---|
| **Dirección visual** | **Clinical Luxury** interpretado como **publicación médica editorial**. El lujo se comunica con proporción, espacio y estándar de ejecución; nunca con ornamento |
| **Primary color** | **`#183C35`** — verde profundo, `hsl(168, 43%, 16%)`. Continúa la familia verde-azul del sitio actual (180–186°) llevándola a valor oscuro y saturación baja. 10.82:1 sobre el fondo |
| **Secondary** | `#2E564E` — verde intermedio, derivado para superficies y estados sobre fondo profundo |
| **Accent** | **`#B7A47A`** — latón desaturado al 30 %. **Menos del 3 % de cada pantalla.** Nunca como texto sobre claro (2.18:1), nunca en degradado, nunca por encima de 1 px como filete |
| **Background** | **`#F5F2EC`** cálido, `hsl(40, 31%, 94%)` — comparte familia de tono con el acento (41°), origen de la cohesión. Elevación con `#FFFFFF`, no con sombra |
| **Superficies** | 5: `primary` · `secondary` `#E9E3D8` · `sand` `#D9D0C2` · `dark` `#102D28` · `elevated` `#FFFFFF` |
| **Proporción de color** | **60** neutro cálido · **30** verde profundo · **10** cálidos y acento |
| **Display font** | **Cormorant Garamond** 300/400/500. **Mínimo 26 px**, espaciado siempre negativo, **jamás en versales** |
| **Body font** | **Manrope** variable 400/500/600. Cuerpo, interfaz, y **H3–H4** |
| **Frontera tipográfica** | Cormorant en H1–H2, Manrope en H3–H4. Por encima el sitio *habla*, por debajo *informa*: es el mecanismo central de jerarquía y la señal que distingue *descubrir* de *leer* |
| **Escala** | 16 estilos, base de 17/16 px, ratio ~1.25. Display XL 88/44 px. Display fluido entre 1024 y 1440 px, fijo por encima |
| **Grid** | 12 columnas · contenido máx. **1200 px** · gutter 24 px · proporciones 7/5, 5/7, 8/4. **50/50 prohibido** |
| **Wide** | Por encima de 1440 px el contenido **no crece**: el margen absorbe el espacio. Tope absoluto de 1440 px a partir de 1920 px |
| **Espaciado** | Base 4 px, 13 pasos. Sección: 120–160 px en escritorio, 64–80 px en móvil |
| **Radius** | **0** en imágenes · **2 px** en botones, campos y tarjetas · 4 px en modales. **Sin píldoras, sin círculos.** La esquina viva es identidad |
| **Shadow** | 4 niveles, todos con tinte verde y opacidad máxima de 0.12. **Ninguna en reposo.** La elevación se consigue con contraste de fondo |
| **Bordes** | **Siempre 1 px**, en verde traslúcido (0.08 / 0.16 / 0.32). Nunca gris. El filete es el único ornamento del sistema |
| **CTA** | **AGENDAR VALORACIÓN** · 52 px · radio 2 px · Manrope 600 15 px · relleno `#183C35` sobre claro y **`#B7A47A` sobre profundo** (único relleno en latón del sistema) · sin icono, sin escalado |
| **Botones** | **5 estilos**: primary, secondary, ghost, text, whatsapp. **WhatsApp en monocromo, nunca `#25D366`** |
| **Navegación** | 80 px → **64 px** al desplazarse · 5 secciones + CTA · transparente sobre hero con velo de cabecera obligatorio · `hover` con filete de acento de 1 px que crece desde la izquierda · **fija y siempre visible** |
| **Móvil** | Panel a pantalla completa en `bg.primary` + **una sola barra inferior** con Agendar (68 %) y WhatsApp (32 %). Sin burbuja, sin emergentes |
| **Cards** | **6 tipos**, lenguaje único: radio 2 px, imagen a 0, sin sombra en reposo, `hover` de escala al 1.03 en 600 ms |
| **Imágenes** | **5 ratios**: 2:3 · 4:5 · 3:2 · 1:1 · a sangre. Máximo **1.25×** el original. Corrección única y mínima (−5/−8 % de saturación, +150 K). **Sin duotono, sin virado verde** |
| **Hero** | **Imagen estática por defecto**; el vídeo es mejora condicionada a cuatro requisitos verificables. 85 vh en escritorio, 72 vh en móvil, nunca 100 vh. Velo doble obligatorio. Sin indicador de desplazamiento |
| **Motion** | 7 duraciones (120–600 ms), 3 curvas. Máximo **16 px** de desplazamiento y **3 %** de escala. Cierre un 15 % más rápido que apertura. **Nada se mueve por sí solo.** `prefers-reduced-motion` de primera clase |
| **Iconography** | **Lucide**, contorno, trazo de 1.5 px, `currentColor`, tamaños 16/20/24 px. **Presupuesto de 12 iconos** en todo el sitio. Más 2 SVG propios: WhatsApp monocromo e isotipo |
| **Accesibilidad** | AA como mínimo, AAA en el texto principal (10.82:1). Objetivos de 44 px. Foco de 2 px con desplazamiento de 2 px. **Corrección a [D00]:** `#6F746F` da 4.27:1 y se restringe a texto grande; el secundario real es `#5A625C` (5.64:1) |
| **Breakpoints** | 767 / 768 / 1024 / 1440 px — cada uno correspondiente a un ancho de dispositivo real |
| **Reutilización** | 4 capas: **tokens · componentes · contenido · branding**. Ningún componente contiene un valor visual ni un literal de marca |
| **Identidad sin logotipo** | Verde profundo sobre arena · Cormorant grande con tracking negativo · esquina viva · filete de 1 px · verticales 2:3 en retícula asimétrica · numerales como grafismo |

---

# Decisiones pendientes

Recopilación de lo que no puede determinarse con el material disponible.

| # | Decisión | Qué falta | Impacto |
|---|---|---|---|
| **1** | **Colores oficiales del logotipo** | Descargar `Perfil-para-redes_LOGO-WEB-CLINICA-NOVA.png` y muestrearlo, o disponer del manual de marca | La paleta debe validarse contra el logotipo. Si contiene un azul saturado, habrá que decidir entre ajustar la paleta o proponer una actualización de marca |
| **2** | **Resolución de los dos fondos de hero** | Descargar y medir ambos archivos | Determina si el hero puede ser a sangre completa (§17.8). Es la decisión estructural más relevante que queda abierta |
| **3** | **Calidad del vídeo del hero** | Descargar `banner-web.mp4` y comprobar ancho, bitrate y comportamiento del bucle | Determina si se usa vídeo o imagen estática (§18.2) |
| **4** | **Forma del isotipo** | Descargar `cropped-ICONO-WEB_...-270x270.png` y comprobar si es separable del logotipo | Afecta al placeholder de retrato, al favicon y a la cabecera compacta (§24.3) |
| **5** | **Disponibilidad de vectorial** | Solicitar SVG o EPS | Sin vectorial, la cabecera usará PNG reescalado, con pérdida de nitidez en pantallas de alta densidad |
| **6** | **Proporción del logotipo para cabecera** | Reencuadre a partir del PNG de mayor resolución | Ninguna variante actual es apta para una cabecera esbelta (§33.1) |
| **7** | **Contenido real de las 6 institucionales** | Descargarlas y revisarlas | La asignación del §33.2 se basa en nombres de archivo y es **[NO VERIFICADO]** |
| **8** | **Condiciones de financiación** | Información de Servicrédito y CFA | La estructura de `FinancingCard` está definida; el contenido se muestra como pendiente |

**Ninguna de estas ocho decisiones bloquea el sistema.** Las siete primeras se resuelven descargando y midiendo los recursos, tarea de la fase siguiente. Todas las especificaciones de color, tipografía, retícula, espaciado, componentes y movimiento son aplicables desde ahora.

---

## Nota de método

- No se ha modificado `/original` ni ninguno de los documentos anteriores.
- No se ha programado, ni creado componentes, ni archivos `.jsx`, `.tsx`, `.js` o `.css`, ni instalado dependencias, ni inicializado Next.js, ni descargado recursos.
- No se ha creado ningún archivo adicional: solo este documento.
- No se ha inventado información sobre la identidad oficial de Clínica Nova. Los colores y tipografías del sitio actual proceden de extracciones verificables [R02 §7–8]; los del logotipo se declaran desconocidos.
- No se ha alterado la arquitectura aprobada en [X03].
- Todos los ratios de contraste están calculados sobre los valores exactos de la paleta según WCAG 2.1.
- Se documentan dos correcciones a [D00 §9]: `Muted` `#6F746F` da 4.27:1 y no alcanza AA para texto normal, por lo que se restringe y se añade `#5A625C`; y se añaden `brand.secondary` y `bg.secondary`, ausentes en la paleta aprobada pero necesarios para completar el sistema.

**Siguiente fase:** descarga y verificación de recursos, que resuelve siete de las ocho decisiones pendientes, y tras ella la inicialización del proyecto.
