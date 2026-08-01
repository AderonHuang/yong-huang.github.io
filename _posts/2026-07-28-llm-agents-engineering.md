---
layout: page
title: "Harness Engineering for Self-Improvement of LLM Agents"
date: 2026-07-28
categories: [AI, Engineering]
tags: [llm, agent, rag, mcp]
description: "From copilot to autonomous engineer — how AI agents are evolving the way we build, test, and ship software."
math: true
_styles: |
  /* ============================================
     PaperMod-style overrides (Lilian Weng layout)
     Scoped to this post only.
     ============================================ */

  /* ---------- Layout: keep sidebar visible (matches scr.png / scr0.png) ---------- */
  .cv-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 3em;
    max-width: 2360px;
    margin: 0 auto;
    padding: 1em 0;
  }
  @media (max-width: 900px) {
    .cv-layout {
      grid-template-columns: 1fr;
      gap: 1.5em;
    }
  }
  .cv-sidebar { display: block !important; }
  .cv-main { min-width: 0; }

  /* ---------- Post header (matches .post-header) ---------- */
  .post-header {
    margin: 24px auto 20px;
    padding: 0;
    border-bottom: none;
  }
  .post-title {
    display: block !important;
    margin-bottom: 2px;
    font-size: 36px;
    line-height: 1.2;
    color: var(--text);
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .post-description {
    display: none;
  }

  /* ---------- Post meta (matches .post-meta) ---------- */
  .post-content .post-meta {
    color: var(--muted);
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 24px;
    font-style: normal;
    line-height: 1.6;
  }

  /* ---------- TOC (matches .toc PaperMod style) ---------- */
  .post-content .toc {
    margin: 0 2px 40px;
    border: 1px solid var(--border);
    background: rgba(14, 124, 116, 0.04);
    border-radius: 8px;
    padding: 0.4em;
    font-size: 15px;
  }
  [data-theme="dark"] .post-content .toc {
    background: rgba(45, 212, 191, 0.05);
  }
  .post-content .toc > details > summary {
    cursor: pointer;
    margin-inline-start: 20px;
    list-style: none;
    padding: 0.4em 0;
    font-weight: 500;
    color: var(--text);
    user-select: none;
  }
  .post-content .toc > details > summary::-webkit-details-marker { display: none; }
  .post-content .toc > details > summary::before {
    content: "▶";
    font-size: 0.7em;
    color: var(--accent);
    margin-right: 8px;
    transition: transform 0.15s ease;
    display: inline-block;
  }
  .post-content .toc > details[open] > summary::before {
    transform: rotate(90deg);
  }
  .post-content .toc > details > summary:hover { background: rgba(14, 124, 116, 0.05); }
  .post-content .toc .details {
    display: inline;
    font-weight: 500;
  }
  .post-content .toc .inner {
    margin: 0 20px;
    padding: 10px 20px;
    border-top: 1px solid var(--border);
  }
  .post-content .toc .inner ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .post-content .toc .inner ul ul {
    margin-inline-start: 24px;
    padding-left: 0;
    margin-top: 4px;
    font-size: 0.95em;
  }
  .post-content .toc .inner li {
    margin: 0.3em 0;
    padding-left: 0;
    position: relative;
  }
  .post-content .toc .inner li::before {
    content: "•";
    color: var(--accent);
    margin-right: 0.5em;
  }
  .post-content .toc .inner li a {
    color: var(--text);
    text-decoration: none;
  }
  .post-content .toc .inner li a:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  /* ---------- Post content (matches .post-content) ---------- */
  .post-content {
    max-width: 720px;
    font-size: 1em;
    line-height: 1.7;
    color: var(--text);
  }
  .post-content p {
    margin: 0 0 20px;
  }
  .post-content strong { color: var(--text); font-weight: 600; }
  .post-content em { color: var(--text); font-style: italic; }

  /* ---------- Headings (matches PaperMod sizes) ---------- */
  .post-content h1 {
    margin: 28px auto 20px;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 700;
    color: var(--text);
    border-bottom: none;
    padding: 0;
    letter-spacing: -0.01em;
  }
  .post-content h2 {
    margin: 24px auto 16px;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
    color: var(--text);
    border-bottom: none;
    padding: 0;
    letter-spacing: -0.01em;
  }
  .post-content h3 {
    margin: 24px 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: var(--text);
  }
  .post-content h4, .post-content h5, .post-content h6 {
    margin: 24px 0 16px;
  }

  /* ---------- Anchor links (hidden, fade in on hover) ---------- */
  .post-content h1 .anchor,
  .post-content h2 .anchor,
  .post-content h3 .anchor {
    display: inline-flex;
    color: var(--muted);
    margin-inline-start: 8px;
    font-weight: 500;
    font-size: 0.85em;
    user-select: none;
    text-decoration: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }
  .post-content h1:hover .anchor,
  .post-content h2:hover .anchor,
  .post-content h3:hover .anchor { opacity: 1; }
  .post-content h1 .anchor:hover,
  .post-content h2 .anchor:hover,
  .post-content h3 .anchor:hover { color: var(--accent); }

  /* ---------- Lists ---------- */
  .post-content ul, .post-content ol {
    margin: 0 0 20px;
    padding-inline-start: 22px;
  }
  .post-content ul li, .post-content ol li {
    margin: 8px 0;
    line-height: 1.7;
  }
  .post-content li {
    margin: 5px 0;
  }
  .post-content li > p { margin-bottom: 0; }

  /* ---------- References list (hanging indent, [N] format) ---------- */
  .post-content ol.references {
    list-style: none;
    padding-inline-start: 0;
    counter-reset: ref-counter;
  }
  .post-content ol.references li {
    counter-increment: ref-counter;
    position: relative;
    padding-inline-start: 36px;
    margin: 14px 0;
    line-height: 1.65;
    font-size: 0.95em;
    color: var(--text);
  }
  .post-content ol.references li::before {
    content: "[" counter(ref-counter) "]";
    position: absolute;
    left: 0;
    width: 30px;
    text-align: left;
    color: var(--muted);
    font-weight: 500;
  }

  /* ---------- Blockquote (matches PaperMod style) ---------- */
  .post-content blockquote {
    margin: 20px 0;
    padding: 0 14px;
    border-inline-start: 3px solid var(--text);
    color: var(--text);
    background: transparent;
    font-style: normal;
    border-radius: 0;
  }
  .post-content blockquote p { margin-bottom: 0.8em; }
  .post-content blockquote p:last-child { margin-bottom: 0; }

  /* ---------- Inline code ---------- */
  .post-content code {
    margin: 0 4px;
    padding: 4px 6px;
    font-size: 0.78em;
    line-height: 1.5;
    background: var(--code-bg);
    border: none;
    border-radius: 4px;
    color: var(--text);
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  }

  /* ---------- Code blocks (matches PaperMod dark code block) ---------- */
  .post-content pre {
    margin: 10px auto;
    background: #1c1d21;
    border-radius: 8px;
    overflow-x: auto;
    padding: 0;
    border: none;
    font-size: 0.85em;
    line-height: 1.5;
  }
  [data-theme="dark"] .post-content pre {
    background: #0d0d0d;
    border: 1px solid var(--border);
  }
  .post-content pre code {
    display: block;
    margin: 0;
    padding: 10px 14px;
    color: #d5d5d6;
    background: transparent;
    word-break: break-all;
    border-radius: 0;
    font-size: 1em;
    line-height: 1.5;
    border: none;
  }

  /* ---------- Tables (matches PaperMod) ---------- */
  .post-content table {
    margin: 0 0 32px;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow-x: auto;
    word-break: keep-all;
  }
  .post-content table th,
  .post-content table td {
    min-width: 80px;
    padding: 6px 4px;
    line-height: 1.25;
    border-bottom: 1px solid var(--border);
  }
  .post-content table th {
    font-size: 14px;
    text-align: start;
    font-weight: 600;
  }

  /* ---------- Horizontal rule ---------- */
  .post-content hr {
    margin: 30px 0;
    height: 2px;
    background: var(--border);
    border: 0;
  }

  /* ---------- Images and figures ---------- */
  .post-content img {
    border-radius: 4px;
    margin: 1rem 0;
    max-width: 100%;
  }
  .post-content figure {
    margin: 0 0 20px;
    text-align: center;
  }
  .post-content figcaption {
    text-align: center;
    width: 75%;
    margin: 10px auto 0;
    line-height: 1.35;
    color: var(--muted);
    font-size: 15px;
  }

  /* ---------- Links inside content ---------- */
  .post-content a {
    color: var(--accent);
    text-decoration: none;
    box-shadow: 0 1px 0 var(--accent);
  }
  .post-content a:hover { color: var(--accent-hover); text-decoration: none; }
  .post-content a code { box-shadow: 0 -1px 0 var(--accent) inset; }

  /* ---------- MathJax ---------- */
  .post-content mjx-container {
    margin: 0.5em 0 !important;
  }
  .post-content .math-block {
    text-align: center;
    margin: 1.2em 0;
    overflow-x: auto;
  }
  .post-content .math-block > mjx-container {
    display: inline-block;
  }
---

<div class="post-meta">Date: July 28, 2026 | Estimated Reading Time: 11 min | Author: Yong Huang</div>

<div class="toc">
  <details>
    <summary accesskey="c" title="(Alt + C)">
      <span class="details">Table of Contents</span>
    </summary>
    <div class="inner">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#what-is-an-ai-agent">What Is an AI Agent?</a>
          <ul>
            <li><a href="#example-build-a-payment-api">Example: Build a Payment API</a></li>
          </ul>
        </li>
        <li><a href="#agent-architecture">Agent Architecture: More Than an LLM</a>
          <ul>
            <li><a href="#reasoning-engine">Reasoning Engine</a></li>
            <li><a href="#memory-system">Memory System</a></li>
          </ul>
        </li>
        <li><a href="#mcp">MCP: The Universal Interface Between Agents and Tools</a></li>
        <li><a href="#automation">From Code Generation to Software Engineering Automation</a></li>
        <li><a href="#workflow-design">The New Bottleneck: Agent Workflow Design</a>
          <ul>
            <li><a href="#task-decomposition">Task Decomposition</a></li>
            <li><a href="#tool-selection">Tool Selection</a></li>
            <li><a href="#verification">Verification</a></li>
          </ul>
        </li>
        <li><a href="#future">The Future: AI That Ships Features</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
        <li><a href="#references">References</a></li>
      </ul>
    </div>
  </details>
</div>

<div class="post-content">

<h1 id="introduction">Introduction<a hidden class="anchor" aria-hidden="true" href="#introduction">#</a></h1>

Large Language Models (LLMs) have evolved rapidly over the past few years. They started as simple text generators and are now becoming **autonomous software engineers** capable of planning, reasoning, and executing complex tasks.

This post explores how LLM-based AI agents are reshaping the software engineering workflow. We will cover:

- What an AI agent actually is
- The core architecture behind modern agents
- MCP as the universal tool interface
- The shift from code generation to workflow automation
- The future of agent-driven development

<h1 id="what-is-an-ai-agent">What Is an AI Agent?<a hidden class="anchor" aria-hidden="true" href="#what-is-an-ai-agent">#</a></h1>

An AI agent is more than just an LLM. It is a system that can:

- **Perceive** its environment
- **Reason** about goals
- **Plan** actions
- **Execute** those actions using tools
- **Learn** from feedback

The classic agent loop looks like this:

<pre><code>   Tools    Memory
     |        |
     v        v
   Execute -&gt; Observe -&gt; Improve
</code></pre>

Unlike traditional LLM applications, an agent follows a loop:

<div class="math-block" markdown="0">
$$
\text{Goal} \rightarrow \text{Plan} \rightarrow \text{Action} \rightarrow \text{Observation} \rightarrow \text{Reflection} \rightarrow \text{Next Action}
$$
</div>

This is similar to reinforcement learning:

<div class="math-block" markdown="0">
$$
\pi(a|s)
$$
</div>

where:

- $s$ represents the current state
- $a$ represents an action
- $\pi$ represents the agent policy

The agent continuously updates its behavior based on feedback.

<h2 id="example-build-a-payment-api">Example: Build a Payment API<a hidden class="anchor" aria-hidden="true" href="#example-build-a-payment-api">#</a></h2>

**User request:**

> Build a payment system API.

A traditional LLM:

<pre><code>Here is an example FastAPI implementation...
</code></pre>

An AI Agent:

<pre><code>1. Analyze requirements
2. Design database schema
3. Create backend service
4. Write API endpoints
5. Generate tests
6. Run test cases
7. Debug failures
8. Deploy service
</code></pre>

The difference is not intelligence alone. **The difference is agency.**

<h1 id="agent-architecture">Agent Architecture: More Than an LLM<a hidden class="anchor" aria-hidden="true" href="#agent-architecture">#</a></h1>

A modern AI Agent usually contains several components:

<h2 id="reasoning-engine">Reasoning Engine<a hidden class="anchor" aria-hidden="true" href="#reasoning-engine">#</a></h2>

The LLM acts as the central decision maker. It converts natural language goals into executable plans:

<div class="math-block" markdown="0">
$$
\text{Goal} \rightarrow \{T_1, T_2, \ldots, T_n\}
$$
</div>

A complex software requirement becomes a task graph:

<pre><code>Feature Request
        |
        v
Requirement Analysis
        |
        v
Architecture Design
        |
        v
Implementation
        |
        v
Testing
        |
        v
Deployment
</code></pre>

<h2 id="memory-system">Memory System<a hidden class="anchor" aria-hidden="true" href="#memory-system">#</a></h2>

Agents need memory because real-world tasks are long-running. Memory can be divided into:

**Short-term Memory** — Current conversation:

<div class="math-block" markdown="0">
$$
M_s = \text{Context}(x_1, x_2, \ldots, x_t)
$$
</div>

**Long-term Memory** — Stored knowledge:

<div class="math-block" markdown="0">
$$
M_l = \text{Database} + \text{Vector Search}
$$
</div>

A typical retrieval process uses cosine similarity:

<div class="math-block" markdown="0">
$$
\text{Similarity}(q, d) = \frac{q \cdot d}{\|q\| \|d\|}
$$
</div>

The agent retrieves the most relevant historical information before making decisions.

<h1 id="mcp">MCP: The Universal Interface Between Agents and Tools<a hidden class="anchor" aria-hidden="true" href="#mcp">#</a></h1>

One of the biggest problems in agent development is **tool integration**.

Every application previously had its own API:

<pre><code>Agent A ---- API-1
Agent B ---- API-2
Agent C ---- API-3
</code></pre>

This creates fragmentation.

The **Model Context Protocol (MCP)** introduces a standardized communication layer:

<pre><code>              AI Agent
                 |
                MCP
                 |
  --------------------------------
  |          |          |          |
Database   Browser   GitHub    Cloud
Server     Server    Server    Server
</code></pre>

With MCP:

- Agents can discover available tools
- Tools expose standardized interfaces
- Different agents can reuse the same ecosystem

The relationship becomes:

<div class="math-block" markdown="0">
$$
\text{Agent} + \text{MCP} + \text{Tools} \rightarrow \text{General-purpose AI Worker}
$$
</div>

Instead of building custom integrations repeatedly, developers can build once and reuse everywhere.

<h1 id="automation">From Code Generation to Software Engineering Automation<a hidden class="anchor" aria-hidden="true" href="#automation">#</a></h1>

The future software development workflow may look like this:

<pre><code>Human
  |
  v
"Create a recommendation system"
  |
  v
AI Agent
  |---- Analyze data
  |---- Design architecture
  |---- Write training pipeline
  |---- Run experiments
  |---- Optimize model
  |---- Deploy API
  |
  v
Production System
</code></pre>

The developer moves from:

<pre><code>Writing every line of code
</code></pre>

to:

<pre><code>Designing systems and supervising agents
</code></pre>

The human role changes from **programmer** to **architect**.

<h1 id="workflow-design">The New Bottleneck: Agent Workflow Design<a hidden class="anchor" aria-hidden="true" href="#workflow-design">#</a></h1>

When coding becomes cheaper, the bottleneck moves.

The key question becomes:

> Not: "Can AI write this function?"
>
> But: "Can we design an agent workflow that **reliably** solves this class of problems?"

A good agent workflow requires:

<h2 id="task-decomposition">Task Decomposition<a hidden class="anchor" aria-hidden="true" href="#task-decomposition">#</a></h2>

Breaking large goals into manageable steps:

<div class="math-block" markdown="0">
$$
\text{Complex Task} = \sum_{i=1}^{n} \text{Simple Tasks}_i
$$
</div>

<h2 id="tool-selection">Tool Selection<a hidden class="anchor" aria-hidden="true" href="#tool-selection">#</a></h2>

Choosing the right action:

<div class="math-block" markdown="0">
$$
a^* = \arg\max_a P(a | \text{state})
$$
</div>

<h2 id="verification">Verification<a hidden class="anchor" aria-hidden="true" href="#verification">#</a></h2>

Agents need feedback loops. Without verification:

<div class="math-block" markdown="0">
$$
\text{Generation} \neq \text{Correctness}
$$
</div>

A production-level agent requires:

<div class="math-block" markdown="0">
$$
\text{Agent} = \text{LLM} + \text{Planning} + \text{Memory} + \text{Tools} + \text{Evaluation}
$$
</div>

<h1 id="future">The Future: AI That Ships Features<a hidden class="anchor" aria-hidden="true" href="#future">#</a></h1>

The evolution of software development:

<pre><code>1990s       Human writes everything
              |
              v
2010s       IDE + Autocomplete
              |
              v
2020s       LLM Coding Assistant
              |
              v
Future      Autonomous Software Agent
</code></pre>

The next generation of developers may not spend most of their time writing code. Instead, they will:

- Define goals
- Design agent systems
- Build evaluation frameworks
- Manage autonomous engineering workflows

The ultimate vision is:

> Software engineering becomes a **collaboration** between humans and intelligent agents.

AI will not simply help developers write software. **AI will become a new layer of software engineering itself.**

<h1 id="conclusion">Conclusion<a hidden class="anchor" aria-hidden="true" href="#conclusion">#</a></h1>

LLMs started as language models. Then they became coding assistants. Now they are evolving into **autonomous agents** capable of planning, reasoning, and executing complex tasks.

The future competition will not only be about who has the largest model. It will be about who can build the **most reliable agent ecosystem**.

The next era belongs to those who can design intelligent workflows.

> **From AI that helps you code.**
> **To AI that builds, tests, and ships software.**

<h1 id="references">References<a hidden class="anchor" aria-hidden="true" href="#references">#</a></h1>

<ol class="references">
  <li>Anthropic. <em>Model Context Protocol Specification</em>. 2025.</li>
  <li>Yao, S., et al. <em>ReAct: Synergizing Reasoning and Acting in Language Models</em>. ICLR 2023.</li>
  <li>Sutton, R. S., &amp; Barto, A. G. <em>Reinforcement Learning: An Introduction</em>. MIT Press, 2018.</li>
  <li>OpenAI. <em>Function Calling and Tools</em>. 2024.</li>
  <li>Anthropic. <em>Building Effective Agents</em>. 2024.</li>
</ol>

</div>
