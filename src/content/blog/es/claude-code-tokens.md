---
title: "Buenas prácticas para gestionar el consumo de tokens en Claude Code"
description: "Cómo monitorizar y reducir el consumo de tokens en Claude Code: medir antes de optimizar, dar buen contexto, compactar, usar memoria, modo plan, herramientas a medida y un par de hábitos de alto impacto."
date: 2026-06-11
tags: ["Claude Code", "IA", "tokens", "productividad", "buenas prácticas"]
featured: true
---

Cuando llevas un tiempo usando [Claude Code](https://claude.ai/code) a diario, el consumo de tokens deja de ser una abstracción. Cada token cuenta para tres cosas: lo que cabe en la **ventana de contexto**, el **coste** (si pagas por API) y los **límites de uso** de las ventanas de 5 horas (si estás en un plan de suscripción). La buena noticia es que con unos cuantos hábitos se reduce el consumo de forma notable sin perder calidad. Estas son las prácticas que mejor me han funcionado.

## Monitoriza tu consumo (mide antes de optimizar)

No se puede optimizar lo que no se mide. Monitorizar el consumo con regularidad te permite identificar patrones —qué tareas disparan los tokens, cuándo se llena el contexto— y ajustar tu forma de trabajar. Algunas formas concretas de hacerlo:

- **`/context`** — visualiza el estado de tu ventana de contexto como una rejilla, con sugerencias cuando algo (ficheros de memoria, salidas de herramientas) ocupa demasiado.
- **`/cost`** — muestra los tokens y el coste estimado de la sesión actual.
- **[`ccusage`](https://github.com/ryoppippi/ccusage)** — una herramienta de la comunidad que lee los logs locales de Claude Code y desglosa el uso por día, mes o sesión. `npx ccusage@latest` para un resumen, y `npx ccusage blocks --live` para un monitor en tiempo real de la ventana de 5 horas.
- **Mi propia herramienta, [claude-perfmon](https://github.com/gerardo-garcia/claude-perfmon)** — la adapté hace tiempo para monitorizar CPU y RAM de Claude, y para este artículo le he añadido un **panel de tokens**: lee los mismos logs de transcripción (`~/.claude/projects/**/*.jsonl`), agrega los tokens del día y del bloque de 5 horas, estima el coste por modelo y dibuja la serie temporal. Sin dependencias externas, solo Python.

Con cualquiera de ellas tendrás una imagen clara de a dónde se van tus tokens, que es el punto de partida para todo lo demás.

## Da contexto suficiente en tus peticiones

Parece contraintuitivo, pero **dar más contexto suele consumir menos tokens** a la larga. Una pregunta ambigua provoca idas y vueltas: Claude pide aclaraciones, explora de más o va en la dirección equivocada, y cada uno de esos turnos cuesta tokens. Si desde el principio indicas el fichero relevante, el resultado esperado y las restricciones, llegas a la solución en menos turnos.

## Aprovecha el resumen y la compactación

Las conversaciones largas acumulan historial que se reenvía en cada turno. Cuando una sesión se alarga, usa **`/compact`** para condensar la conversación en un resumen (puedes darle instrucciones sobre qué conservar). Claude Code también compacta automáticamente cuando el contexto se llena. Compactar a tiempo mantiene el contexto ligero y centrado en lo que importa ahora.

## Usa la memoria, pero con cabeza

El fichero `CLAUDE.md` actúa como memoria persistente del proyecto: evita tener que reexplicar la arquitectura, los comandos o las convenciones en cada sesión (puedes añadir notas rápidas con el atajo `#`). Es una de las mejores inversiones para no repetirte.

Eso sí, con un matiz importante: `CLAUDE.md` **se carga en cada sesión y ocupa contexto**. Es un equilibrio — guarda lo que de verdad ahorra repeticiones y mantenlo conciso; un fichero de memoria enorme trabaja en tu contra.

## Usa el modo plan para las tareas grandes

El modo plan no reduce tokens por sí mismo —de hecho, planificar también consume—, pero su ahorro es **indirecto y muy real**: validar el enfoque antes de tocar código evita el escenario más caro, que es implementar en la dirección equivocada y tener que rehacerlo. En tareas grandes, unos cuantos tokens de planificación ahorran muchos de reescritura.

## Crea herramientas para tareas específicas

Para acciones recurrentes o deterministas, una herramienta propia (un script, un servidor MCP) casi siempre es más barata que pedírselo a Claude paso a paso. Descargas el trabajo mecánico en código que se ejecuta una vez, en lugar de gastar tokens describiendo y razonando cada acción. claude-perfmon es justo eso: en vez de pedirle a Claude que calcule el consumo, una herramienta lo hace y Claude solo interpreta el resultado.

## Crea skills y comandos personalizados

Si te encuentras repitiendo las mismas instrucciones —el mismo flujo de revisión, el mismo formato de commit, el mismo tipo de análisis—, conviértelo en un **comando personalizado** o una **skill**. Encapsulas las instrucciones una vez y las invocas con una línea, en lugar de reescribirlas (y reenviarlas como tokens) cada vez. Además, las skills se cargan bajo demanda, así que no pesan hasta que las usas.

## Dos hábitos extra de alto impacto

Más allá de la lista anterior, hay dos costumbres que marcan una diferencia desproporcionada:

- **`/clear` entre tareas no relacionadas.** Cuando cambias de tema, el historial anterior ya no aporta y, sin embargo, se sigue reenviando en cada turno. Limpiar el contexto al empezar algo nuevo es probablemente el ahorro más sencillo y mayor que existe.
- **Aprovecha el _prompt caching_.** Claude Code cachea automáticamente el inicio del contexto (como `CLAUDE.md` y los ficheros ya leídos). Mantener estable ese inicio maximiza los aciertos de caché —que se facturan mucho más baratos que los tokens nuevos—; en cambio, cambiar algo al principio del contexto invalida la caché y encarece el turno.

## En resumen

Gestionar tokens no va de escatimar, sino de **trabajar con intención**: mide para saber dónde estás, da buen contexto, compacta y limpia cuando toca, recuerda lo que de verdad importa y automatiza lo repetitivo. Son hábitos pequeños, pero juntos reducen el consumo y, de paso, hacen que Claude trabaje mejor.
