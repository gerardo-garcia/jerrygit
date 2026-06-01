---
title: "A Year with AI: From ChatGPT to Claude Code"
description: "My journey through AI tools this year: from chatbots to coding assistants, local LLMs, and the revolution that was Claude Code."
date: 2026-05-31
tags: ["AI", "Claude", "LLM", "tools", "Open Source"]
featured: true
---

I started with ChatGPT a few years ago, like most people. Then came Gemini, then Copilot. Today I still use ChatGPT for text chat, although when my kids and I want to ask something out loud, we tend to reach for Gemini — it handles noise and interruptions better in a voice conversation.

## AI-assisted coding

Not long after, I started using AI tools integrated with VSCode for coding assistance. I was amazed at how accurately they anticipated what I was about to write. Productivity went up noticeably, and the way I approached programming changed.

## Local LLMs and RAG

Then came the local LLM phase with [Ollama](https://ollama.com), running on both CPU and GPU, for various lab use cases — Kubernetes cluster diagnostics, among others. From there, I moved on to building a RAG system with a local LLM integrated with the team's SharePoint, to answer questions about the lab infrastructure.

## The revolution: Claude Code

But the real revolution came two months ago, with [Claude Code](https://claude.ai/code). I can say without embarrassment: I'm hooked. It's the most useful tool I've used so far.

You might say: «sure, it helped you write code, understand code, debug, generate documentation, write tests...». All true. It's like having an expert teammate — or a whole squad of experts — available at any moment. But it's not just that.

The real shift comes when you start using it to kick off projects from scratch, starting from nothing but an idea. I recently came across [this post by Jorge Ordovás on LinkedIn](https://www.linkedin.com/posts/jorgeordovas_he-recuperado-una-sensaci%C3%B3n-que-pensaba-que-activity-7464201031929872384-ofqz) and it resonated deeply: that feeling of creating you had as a kid playing with Lego, or when you first learned to program.

## What I've built in the last month

In the past month I've had over 25 working sessions with Claude across more than ten different repositories. Here are some of the projects:

### Open Source MANO (OSM)

- **Development cycle automation**: commands, scripts and workflows covering everything from creating work items in GitLab to design in Etherpad and iterative implementation with contribution and testing in local OSM environments. This is arguably the most important initiative for the project's future — it will accelerate the development cycle and improve both the quantity and quality of contributions.
- **Documentation restructuring**: reorganising information by decoupling document structure from repository structure, creating new documents, and integrating scattered docs from other repos.
- **New repository creation and code migration** to improve project modularity.
- **Automation scripts** for repetitive tasks: generating documentation from code, running tests, managing dependencies.
- **Various bug fixes**.

### AI applied to infrastructure management

- **Lab environment management tool**: a Python tool for managing access to and running commands against private and public cloud environments, Kubernetes clusters, OSM endpoints, and AI endpoints, backed by a private repository where credentials are encrypted with AGE and SOPS. I've shared this tool with my team and we now use it in the lab: any team member can use it to deploy VMs, create clusters, run OSM tests, or query the AI endpoints.
- **Cluster diagnostics and issue resolution**: problem detection, RCA analysis, and solution proposals using an LLM. Here the help exceeded my own expectations: when Claude detected that the Slack MCP Server couldn't send messages with buttons, it reimplemented its own MCP server that offered the tools to make it work — so the cluster fix could be applied directly from Slack via a button.

### Personal projects

- **Flight monitor**: queries the SerpApi API and sends email alerts to find cheap flights on specific routes and dates.
- **Presentation for NGO Rescate**: a PowerPoint on using AI in job searching, generated from a script I wrote drawing from several sources — the most valuable being notes from my former boss and good friend [Francisco Javier](https://www.linkedin.com/in/fjramons/).
- **Claude monitoring on WSL**: adapting [claude-perfmon](https://github.com/joobid/claude-perfmon) (originally for Mac) to run on WSL, with the changes contributed back to the original project via a Pull Request on GitHub.
- **Oracle Cloud Always Free VM**: retry script to work around the systematic *InternalError – Out of capacity* error in the EU-MADRID-1-AD-1 region.
- **jerrygit.com**: this website.

## Closing thoughts

The biggest change isn't just in productivity. It's in how you relate to ideas. The barrier between having an idea and starting to build it has collapsed. And that, simply put, changes everything.
