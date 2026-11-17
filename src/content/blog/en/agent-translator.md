---
title: "agent-translator: migrate your AI agents between platforms"
description: "A translator for agent definitions between AWS Bedrock, GCP ADK, Azure Foundry and Kagent, so no single platform locks you in."
date: 2026-11-17
tags: ["AI", "Agents", "Open Source", "lock-in", "tools"]
featured: false
---

Every AI agent platform defines agents in its own way. AWS Bedrock, Google ADK, Azure Foundry, Kagent... they all do essentially the same thing (a model, some instructions, some tools), each with its own format. The result is lock-in.

I built [agent-translator](https://github.com/gerardo-garcia/agent-translator) to tackle that: a program that translates an agent definition from one platform to another.

## Why lock-in exists

Platforms don't do it to annoy anyone. They spot a market need and ship their solution as fast as they can. Agreeing on a standard would slow them down, so each one publishes its own version.

Then users do the natural thing: if they already use a platform, they reach for it again for new needs. It's not that they can't use another one; learning a new technology takes effort, and it's tedious. That learning cost is the real lock.

## AI lowers that cost

This is where things change. With AI, the cost of learning another platform's format drops dramatically. What used to be a week of docs and trial and error is now a conversation. And once that knowledge is encoded in a tool, the cost drops to almost zero.

## What it does

- Translates between **AWS Bedrock Agents, GCP ADK, Azure Foundry and Kagent** (and reads/writes Oracle's Agent Spec too).
- Uses a common intermediate representation: N platforms need 2N adapters, not N·(N-1) translators.
- **Never drops information silently**: whatever has no equivalent in the target is listed in a report (`lossy`, `manual`...).
- Can read an existing agent from a platform (*fetch*) and create it on another (*deploy*, dry run by default).

```bash
agent-translator translate azure-agent.yaml --to kagent -o out
```

## What about standards?

Standardization efforts are few. The closest is Oracle's [Agent Spec](https://github.com/oracle/agent-spec), which I support as an interchange format, but today it doesn't cover the full definition of a real agent: memory, guardrails, knowledge bases and deployment objects (roles, secrets, aliases) are out of scope.

Until a standard covers everything, a translator is a pragmatic way out.

## Status

It's a young project. Translation is tested against each platform's official samples. *Fetch* and *deploy* have been tested against real Azure Foundry, GCP ADK, AWS Bedrock and Kagent projects.

It's open source (Apache-2.0): [github.com/gerardo-garcia/agent-translator](https://github.com/gerardo-garcia/agent-translator). If you try it, I'd love to hear what you think.
