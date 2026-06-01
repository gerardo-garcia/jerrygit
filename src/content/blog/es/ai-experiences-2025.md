---
title: "Un año con IA: de ChatGPT a Claude Code"
description: "Mi recorrido por las herramientas de IA: de los chatbots a los asistentes de codificación, los LLMs locales y la revolución que supuso Claude Code."
date: 2026-05-31
tags: ["IA", "Claude", "LLM", "herramientas", "Open Source"]
featured: true
---

Empecé con ChatGPT hace ya varios años, como casi todo el mundo. Luego vino Gemini, luego Copilot. A día de hoy, sigo usando ChatGPT para chatear, aunque cuando mis hijos y yo queremos consultar algo en voz alta usamos Gemini — en mi opinión maneja mejor el ruido y la interrupción en una conversación hablada.

## Asistencia a la codificación

Poco después llegaron las herramientas de IA integradas con VSCode. Me maravillaba ver cómo se anticipaban perfectamente a lo que quería escribir. La productividad subió de forma notable, y la forma de programar cambió.

## LLMs locales y RAG

Luego llegó la fase de los LLMs locales con [Ollama](https://ollama.com), tanto con CPU como con GPU, para varios casos de uso del laboratorio: diagnóstico de clusters de Kubernetes, entre otros. Y de ahí al montaje de un RAG con LLM local integrado con el SharePoint del equipo, para responder preguntas sobre la infraestructura del laboratorio.

## La revolución: Claude Code

Pero la verdadera revolución llegó hace dos meses, con [Claude Code](https://claude.ai/code). Puedo decir sin vergüenza que estoy enganchado. Es la herramienta más útil que he utilizado hasta ahora.

Dirás: «vale, te ha ayudado a escribir código, a entender código, a depurar, a generar documentación, a generar tests...». Correcto. Es como tener un compañero de equipo experto — o una tropa de expertos — siempre disponible. Pero no es solo eso.

La verdadera revolución es cuando empiezas a usarlo para iniciar proyectos de cero, a partir de meras ideas. Hace poco leí [este post de Jorge Ordovás en LinkedIn](https://www.linkedin.com/posts/jorgeordovas_he-recuperado-una-sensaci%C3%B3n-que-pensaba-que-activity-7464201031929872384-ofqz) y me pareció acertadísimo: esa sensación de crear que tienes cuando juegas con Lego de niño, o cuando aprendiste a programar por primera vez.

## Lo que he hecho en el último mes

En el último mes he tenido más de 25 sesiones de trabajo con Claude en más de una decena de repositorios distintos. Estos son algunos de los proyectos:

### Open Source MANO (OSM)

- **Automatización del ciclo de desarrollo**: comandos, scripts y flujos de trabajo que cubren desde la creación de *work items* en GitLab hasta el diseño en Etherpad y la implementación iterativa con contribución y testing en entornos locales. Posiblemente la tarea más relevante de cara al futuro del proyecto, ya que acelerará el ciclo de desarrollo y mejorará el número y la calidad de las contribuciones.
- **Reestructuración de la documentación**: reorganización de la información desacoplando la estructura del documento de la estructura del repositorio, creación de nuevos documentos e integración de documentación dispersa en otros repos.
- **Creación y migración de repositorios** para mejorar la modularidad del proyecto.
- **Scripts de automatización** para tareas repetitivas: generación de documentación desde el código, ejecución de tests, gestión de dependencias.
- **Fix de bugs varios**.

### IA aplicada a gestión de infraestructura

- **Herramienta de gestión de entornos de laboratorio**: herramienta en Python para gestionar acceso y ejecución de comandos contra entornos de cloud privada y pública, clusters de Kubernetes, endpoints de OSM y endpoints de IA, apoyada en un repositorio privado donde las credenciales están cifradas con AGE y SOPS. Esta herramienta la he compartido con mi equipo y hoy ya la usamos en el laboratorio: cualquier miembro del equipo tiene las credenciales y puede actuar sobre esos entornos para desplegar VMs, crear clusters, lanzar pruebas de OSM, o hacer queries contra los endpoints de IA.
- **Diagnóstico y resolución de problemas en clusters**: detección de problemas, análisis RCA y propuesta de soluciones mediante un LLM. Aquí la ayuda superó mis propias expectativas: cuando Claude detectó que el MCP Server de Slack no podía enviar mensajes con botones, reimplementó un MCP server propio que ofrecía las tools que sí lo permitían — para que el fix al cluster se pudiera aplicar directamente desde Slack con un botón.

### Proyectos personales

- **Monitor de vuelos**: consulta la API de SerpApi y envía alertas por email para encontrar vuelos baratos en rutas y fechas configurables.
- **Presentación para la ONG Rescate**: PowerPoint sobre el uso de la IA en la búsqueda de empleo, generada a partir de un guión elaborado por mí con diversas fuentes, siendo la más relevante las notas de mi antiguo jefe y buen amigo [Francisco Javier](https://www.linkedin.com/in/fjramons/).
- **Monitorización de Claude en WSL**: adaptación de [claude-perfmon](https://github.com/joobid/claude-perfmon) (originalmente para Mac) para funcionar en WSL, con contribución de los cambios al proyecto original mediante Pull Request en GitHub.
- **Oracle Cloud Always Free VM**: script de reintento para sortear el error sistemático *InternalError – Out of capacity* en la región EU-MADRID-1-AD-1.
- **jerrygit.com**: [esta web](https://jerrygit.com).

## Conclusión

El cambio más grande no es solo en productividad. Es en cómo te relacionas con las ideas. Las barreras entre tener una idea y empezar a construirla se han reducido drásticamente. Y eso, sencillamente, cambia todo.
