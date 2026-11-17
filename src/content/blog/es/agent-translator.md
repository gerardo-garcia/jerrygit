---
title: "agent-translator: migra tus agentes de IA entre plataformas"
description: "Un traductor de definiciones de agentes entre AWS Bedrock, GCP ADK, Azure Foundry y Kagent, para que la plataforma no te ate."
date: 2026-11-17
tags: ["IA", "Agentes", "Open Source", "lock-in", "herramientas"]
featured: false
---

Cada plataforma de agentes de IA define los agentes a su manera. AWS Bedrock, Google ADK, Azure Foundry, Kagent... todas hacen lo mismo en esencia (un modelo, unas instrucciones, unas herramientas), pero cada una con su propio formato. El resultado es el lock-in.

He creado [agent-translator](https://github.com/gerardo-garcia/agent-translator) para atacar ese problema: un programa que traduce la definición de un agente de una plataforma a otra.

## Por qué existe el lock-in

Las plataformas no lo hacen para fastidiar. Detectan una necesidad en el mercado y sacan su solución lo antes posible. Ponerse de acuerdo en un estándar las retrasaría, así que cada una publica su propia versión.

Después, el usuario hace lo natural: si ya usa una plataforma, tira de ella para las nuevas necesidades. No es que no pueda usar otra, es que aprender una tecnología nueva cuesta, y da pereza. Ese coste de aprendizaje es el verdadero candado.

## La IA rebaja ese coste

Aquí es donde cambia el panorama. Con IA, el coste de aprender el formato de otra plataforma baja drásticamente. Lo que antes era una semana de documentación y pruebas ahora es una conversación. Y si ese conocimiento se codifica en una herramienta, el coste baja a casi cero.

## Qué hace

- Traduce entre **AWS Bedrock Agents, GCP ADK, Azure Foundry y Kagent** (y también lee y escribe Agent Spec de Oracle).
- Usa una representación intermedia común: con N plataformas hacen falta 2N adaptadores, no N·(N-1) traductores.
- **Nunca pierde información en silencio**: lo que no tiene equivalente en el destino se indica en un informe (`lossy`, `manual`...).
- Puede leer un agente ya existente en una plataforma (*fetch*) y crearlo en otra (*deploy*, en modo simulación por defecto).

```bash
agent-translator translate agente-azure.yaml --to kagent -o out
```

## ¿Y los estándares?

Los esfuerzos de estandarización son pocos. El más cercano es [Agent Spec](https://github.com/oracle/agent-spec) de Oracle, y lo he integrado como formato de intercambio, pero hoy no cubre toda la definición de un agente real: memoria, guardrails, bases de conocimiento o los objetos de despliegue (roles, secretos, alias) quedan fuera.

Mientras no haya un estándar que lo cubra todo, un traductor es una salida pragmática.

## Estado

Es un proyecto joven. La traducción está probada con los ejemplos oficiales de cada plataforma. *Fetch* y *deploy* se han probado contra proyecto reales de Azure Foundry, GCP ADK, AWS Bedrock y Kagent.

El código es abierto (Apache-2.0): [github.com/gerardo-garcia/agent-translator](https://github.com/gerardo-garcia/agent-translator). Si lo pruebas, me encantará conocer tu opinión.
