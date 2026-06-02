---
title: "Managing Token Consumption in Claude Code: Practical Tips"
description: "How to monitor and cut token usage in Claude Code: measure before you optimise, give good context, compact, use memory, plan mode, custom tools, and a couple of high-impact habits."
date: 2026-06-11
tags: ["Claude Code", "AI", "tokens", "productivity", "best practices"]
featured: true
---

Once you've been using [Claude Code](https://claude.ai/code) daily for a while, token consumption stops being an abstraction. Every token counts toward three things: what fits in the **context window**, the **cost** (if you pay per API), and the **usage limits** of the 5-hour windows (if you're on a subscription plan). The good news is that a handful of habits cut consumption noticeably without sacrificing quality. These are the practices that have worked best for me.

## Monitor your usage (measure before you optimise)

You can't optimise what you don't measure. Monitoring consumption regularly lets you spot patterns —which tasks spike token usage, when the context fills up— and adjust how you work. Some concrete ways to do it:

- **`/context`** — visualises the state of your context window as a grid, with suggestions when something (memory files, tool outputs) takes up too much room.
- **`/cost`** — shows the token usage and estimated cost of the current session.
- **[`ccusage`](https://github.com/ryoppippi/ccusage)** — a community tool that reads Claude Code's local logs and breaks usage down by day, month, or session. Run `npx ccusage@latest` for a summary, and `npx ccusage blocks --live` for a real-time monitor of the 5-hour window.
- **My own tool, [claude-perfmon](https://github.com/gerardo-garcia/claude-perfmon)** — a *fork* of [joobid's original project](https://github.com/joobid/claude-perfmon) (built for macOS) that I adapted to run on WSL. It monitored Claude's CPU and RAM, and for this article I added a **token panel**: it reads the same transcript logs (`~/.claude/projects/**/*.jsonl`), aggregates today's tokens and the current 5-hour block, estimates cost per model, and plots the time series. No external dependencies, just Python.

Any of these gives you a clear picture of where your tokens are going, which is the starting point for everything else.

![Token consumption panel in claude-perfmon, next to the CPU and RAM panels](/claude-perfmon-tokens.png)

## Give enough context in your prompts

It sounds counterintuitive, but **giving more context usually consumes fewer tokens** in the long run. A vague prompt triggers back-and-forth: Claude asks for clarification, explores more than needed, or heads in the wrong direction — and every one of those turns costs tokens. If you state the relevant file, the expected outcome, and the constraints up front, you reach the solution in fewer turns.

## Leverage summarisation and compaction

Long conversations accumulate history that gets resent on every turn. When a session drags on, use **`/compact`** to condense the conversation into a summary (you can instruct it on what to keep). Claude Code also compacts automatically when the context fills up. Compacting in time keeps the context lean and focused on what matters now.

## Use memory — wisely

The `CLAUDE.md` file acts as persistent project memory: it saves you from re-explaining the architecture, commands, or conventions every session (you can jot down quick notes with the `#` shortcut). It's one of the best investments to avoid repeating yourself.

With one important caveat, though: `CLAUDE.md` **is loaded every session and takes up context**. It's a trade-off — store what genuinely saves repetition and keep it concise; a giant memory file works against you.

## Use plan mode for large tasks

Plan mode doesn't reduce tokens by itself —planning also consumes them— but its saving is **indirect and very real**: validating the approach before touching code avoids the most expensive scenario, which is implementing in the wrong direction and having to redo it. On large tasks, a few planning tokens save many rewriting ones.

## Build tools for specific tasks

For recurring or deterministic actions, your own tool (a script, an MCP server) is almost always cheaper than walking Claude through it step by step. You offload the mechanical work to code that runs once, instead of spending tokens describing and reasoning about every action. claude-perfmon is exactly that: rather than asking Claude to compute usage, a tool does it and Claude just interprets the result.

## Create custom skills and commands

If you find yourself repeating the same instructions —the same review flow, the same commit format, the same kind of analysis— turn it into a **custom command** or a **skill**. You encapsulate the instructions once and invoke them with a single line, instead of rewriting them (and resending them as tokens) every time. Skills also load on demand, so they don't weigh anything until you use them.

## Two extra high-impact habits

Beyond the list above, two habits make a disproportionate difference:

- **`/clear` between unrelated tasks.** When you switch topics, the previous history no longer helps yet still gets resent on every turn. Clearing the context when you start something new is probably the simplest, biggest saving there is.
- **Take advantage of _prompt caching_.** Claude Code automatically caches the start of the context (things like `CLAUDE.md` and files you've already read). Keeping that start stable maximises cache hits —which are billed far cheaper than fresh tokens—; conversely, changing something early in the context invalidates the cache and makes the turn more expensive.

## In short

Managing tokens isn't about penny-pinching — it's about **working with intent**: measure to know where you stand, give good context, compact and clear when it's time, remember what truly matters, and automate the repetitive. They're small habits, but together they cut consumption and, as a bonus, make Claude work better.
