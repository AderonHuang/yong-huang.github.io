---
title: "Harness Engineering for Self-Improvement of LLM Agents"
date: 2026-07-28
categories: [AI, Engineering]
tags: [llm, agent, rag, mcp]
description: "From copilot to autonomous engineer — how AI agents are evolving the way we build, test, and ship software."
math: true
_styles: |
  /* ============================================
     Post-specific styles (PaperMod / Lilian Weng layout)
     ============================================ */

  /* post-meta: Date | Read Time | Author line rendered as a div */
  .post-meta {
    color: var(--muted);
    font-size: 0.9em;
    margin: 0.2em 0 1.4em;
    line-height: 1.5;
  }

  /* toc: collapsible table of contents (mirrors the .blog-toc style) */
  .toc {
    margin: 1.5em 0 2em;
    font-size: 0.95em;
  }
  .toc > details {
    background: rgba(14, 124, 116, 0.04);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  [data-theme="dark"] .toc > details {
    background: rgba(45, 212, 191, 0.04);
  }
  .toc > details > summary {
    padding: 0.6em 1.2em;
    cursor: pointer;
    font-weight: 600;
    color: var(--text);
    user-select: none;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.4em;
  }
  .toc > details > summary::-webkit-details-marker { display: none; }
  .toc > details > summary::before {
    content: "▶";
    font-size: 0.7em;
    color: var(--accent);
    transition: transform 0.15s ease;
  }
  .toc > details[open] > summary::before {
    transform: rotate(90deg);
  }
  .toc > details > summary:hover {
    background: rgba(14, 124, 116, 0.08);
  }
  .toc > details > .inner {
    padding: 0.8em 1.2em 1em;
    border-top: 1px solid var(--border);
  }
  .toc .inner ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  .toc .inner ul ul {
    padding-left: 1.2em;
    margin-top: 0.2em;
    font-size: 0.95em;
  }
  .toc .inner ul li {
    position: relative;
    padding-left: 1.2em;
    margin: 0.3em 0;
  }
  .toc .inner ul li::before {
    content: "•";
    color: var(--accent);
    position: absolute;
    left: 0;
  }
  .toc .inner ul li a {
    color: var(--text);
    text-decoration: none;
  }
  .toc .inner ul li a:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  /* Hidden anchor links on headings (PaperMod style) */
  .post-content h1 .anchor,
  .post-content h2 .anchor,
  .post-content h3 .anchor {
    margin-left: 0.4em;
    opacity: 0;
    text-decoration: none;
    font-size: 0.85em;
    font-weight: 400;
    vertical-align: middle;
    transition: opacity 0.15s ease;
  }
  .post-content h1:hover .anchor,
  .post-content h2:hover .anchor,
  .post-content h3:hover .anchor { opacity: 0.5; }
  .post-content h1 .anchor:hover,
  .post-content h2 .anchor:hover,
  .post-content h3 .anchor:hover { opacity: 1; }

  /* Adjust post-content h1 to match PaperMod hierarchy:
     h1 for top-level section, h2 for subsections */
  .post-content h1 {
    margin: 1.8em 0 0.6em;
    font-size: 1.7em;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.3em;
  }
  .post-content h2 {
    margin: 1.5em 0 0.5em;
    font-size: 1.3em;
    color: var(--accent);
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
        <li><a href="#1-introduction">1. Introduction</a></li>
        <li><a href="#2-what-is-an-ai-agent">2. What Is an AI Agent?</a>
          <ul>
            <li><a href="#example-build-a-payment-api">Example: Build a Payment API</a></li>
          </ul>
        </li>
        <li><a href="#3-agent-architecture">3. Agent Architecture: More Than an LLM</a>
          <ul>
            <li><a href="#31-reasoning-engine">3.1 Reasoning Engine</a></li>
            <li><a href="#32-memory-system">3.2 Memory System</a></li>
          </ul>
        </li>
        <li><a href="#4-mcp">4. MCP: The Universal Interface Between Agents and Tools</a></li>
        <li><a href="#5-automation">5. From Code Generation to Software Engineering Automation</a></li>
        <li><a href="#6-workflow-design">6. The New Bottleneck: Agent Workflow Design</a>
          <ul>
            <li><a href="#61-task-decomposition">6.1 Task Decomposition</a></li>
            <li><a href="#62-tool-selection">6.2 Tool Selection</a></li>
            <li><a href="#63-verification">6.3 Verification</a></li>
          </ul>
        </li>
        <li><a href="#7-future">7. The Future: AI That Ships Features</a></li>
        <li><a href="#8-conclusion">8. Conclusion</a></li>
        <li><a href="#references">References</a></li>
      </ul>
    </div>
  </details>
</div>

<div class="post-content">

<h1 id="1-introduction">1. Introduction<a hidden class="anchor" aria-hidden="true" href="#1-introduction">#</a></h1>

<p>Large Language Models (LLMs) have evolved rapidly over the past few years. They started as simple text generators and are now becoming <strong>autonomous software engineers</strong> capable of planning, reasoning, and executing complex tasks.</p>

<p>This post explores how LLM-based AI agents are reshaping the software engineering workflow. We will cover:</p>

<ul>
  <li>What an AI agent actually is</li>
  <li>The core architecture behind modern agents</li>
  <li>MCP as the universal tool interface</li>
  <li>The shift from code generation to workflow automation</li>
  <li>The future of agent-driven development</li>
</ul>

<h1 id="2-what-is-an-ai-agent">2. What Is an AI Agent?<a hidden class="anchor" aria-hidden="true" href="#2-what-is-an-ai-agent">#</a></h1>

<p>An AI agent is more than just an LLM. It is a system that can:</p>

<ul>
  <li><strong>Perceive</strong> its environment</li>
  <li><strong>Reason</strong> about goals</li>
  <li><strong>Plan</strong> actions</li>
  <li><strong>Execute</strong> those actions using tools</li>
  <li><strong>Learn</strong> from feedback</li>
</ul>

<p>The classic agent loop looks like this:</p>

```
   Tools    Memory
     |        |
     v        v
   Execute -> Observe -> Improve
```

<p>Unlike traditional LLM applications, an agent follows a loop:</p>

$$
\text{Goal} \rightarrow \text{Plan} \rightarrow \text{Action} \rightarrow \text{Observation} \rightarrow \text{Reflection} \rightarrow \text{Next Action}
$$

<p>This is similar to reinforcement learning:</p>

$$
\pi(a|s)
$$

<p>where:</p>

<ul>
  <li>$s$ represents the current state</li>
  <li>$a$ represents an action</li>
  <li>$\pi$ represents the agent policy</li>
</ul>

<p>The agent continuously updates its behavior based on feedback.</p>

<h2 id="example-build-a-payment-api">Example: Build a Payment API<a hidden class="anchor" aria-hidden="true" href="#example-build-a-payment-api">#</a></h2>

<p><strong>User request:</strong></p>

<blockquote>
  <p>Build a payment system API.</p>
</blockquote>

<p>A traditional LLM:</p>

```
Here is an example FastAPI implementation...
```

<p>An AI Agent:</p>

```
1. Analyze requirements
2. Design database schema
3. Create backend service
4. Write API endpoints
5. Generate tests
6. Run test cases
7. Debug failures
8. Deploy service
```

<p>The difference is not intelligence alone. <strong>The difference is agency.</strong></p>

<h1 id="3-agent-architecture">3. Agent Architecture: More Than an LLM<a hidden class="anchor" aria-hidden="true" href="#3-agent-architecture">#</a></h1>

<p>A modern AI Agent usually contains several components:</p>

<h2 id="31-reasoning-engine">3.1 Reasoning Engine<a hidden class="anchor" aria-hidden="true" href="#31-reasoning-engine">#</a></h2>

<p>The LLM acts as the central decision maker. It converts natural language goals into executable plans:</p>

$$
\text{Goal} \rightarrow \{T_1, T_2, \ldots, T_n\}
$$

<p>A complex software requirement becomes a task graph:</p>

```
Feature Request
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
```

<h2 id="32-memory-system">3.2 Memory System<a hidden class="anchor" aria-hidden="true" href="#32-memory-system">#</a></h2>

<p>Agents need memory because real-world tasks are long-running. Memory can be divided into:</p>

<p><strong>Short-term Memory</strong> — Current conversation:</p>

$$
M_s = \text{Context}(x_1, x_2, \ldots, x_t)
$$

<p><strong>Long-term Memory</strong> — Stored knowledge:</p>

$$
M_l = \text{Database} + \text{Vector Search}
$$

<p>A typical retrieval process uses cosine similarity:</p>

$$
\text{Similarity}(q, d) = \frac{q \cdot d}{\|q\| \|d\|}
$$

<p>The agent retrieves the most relevant historical information before making decisions.</p>

<h1 id="4-mcp">4. MCP: The Universal Interface Between Agents and Tools<a hidden class="anchor" aria-hidden="true" href="#4-mcp">#</a></h1>

<p>One of the biggest problems in agent development is <strong>tool integration</strong>.</p>

<p>Every application previously had its own API:</p>

```
Agent A ---- API-1
Agent B ---- API-2
Agent C ---- API-3
```

<p>This creates fragmentation.</p>

<p>The <strong>Model Context Protocol (MCP)</strong> introduces a standardized communication layer:</p>

```
              AI Agent
                 |
                MCP
                 |
  --------------------------------
  |          |          |          |
Database   Browser   GitHub    Cloud
Server     Server    Server    Server
```

<p>With MCP:</p>

<ul>
  <li>Agents can discover available tools</li>
  <li>Tools expose standardized interfaces</li>
  <li>Different agents can reuse the same ecosystem</li>
</ul>

<p>The relationship becomes:</p>

$$
\text{Agent} + \text{MCP} + \text{Tools} \rightarrow \text{General-purpose AI Worker}
$$

<p>Instead of building custom integrations repeatedly, developers can build once and reuse everywhere.</p>

<h1 id="5-automation">5. From Code Generation to Software Engineering Automation<a hidden class="anchor" aria-hidden="true" href="#5-automation">#</a></h1>

<p>The future software development workflow may look like this:</p>

```
Human
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
```

<p>The developer moves from:</p>

```
Writing every line of code
```

<p>to:</p>

```
Designing systems and supervising agents
```

<p>The human role changes from <strong>programmer</strong> to <strong>architect</strong>.</p>

<h1 id="6-workflow-design">6. The New Bottleneck: Agent Workflow Design<a hidden class="anchor" aria-hidden="true" href="#6-workflow-design">#</a></h1>

<p>When coding becomes cheaper, the bottleneck moves.</p>

<p>The key question becomes:</p>

<blockquote>
  <p>Not: "Can AI write this function?"</p>
  <p>But: "Can we design an agent workflow that <strong>reliably</strong> solves this class of problems?"</p>
</blockquote>

<p>A good agent workflow requires:</p>

<h2 id="61-task-decomposition">6.1 Task Decomposition<a hidden class="anchor" aria-hidden="true" href="#61-task-decomposition">#</a></h2>

<p>Breaking large goals into manageable steps:</p>

$$
\text{Complex Task} = \sum_{i=1}^{n} \text{Simple Tasks}_i
$$

<h2 id="62-tool-selection">6.2 Tool Selection<a hidden class="anchor" aria-hidden="true" href="#62-tool-selection">#</a></h2>

<p>Choosing the right action:</p>

$$
a^* = \arg\max_a P(a | \text{state})
$$

<h2 id="63-verification">6.3 Verification<a hidden class="anchor" aria-hidden="true" href="#63-verification">#</a></h2>

<p>Agents need feedback loops. Without verification:</p>

$$
\text{Generation} \neq \text{Correctness}
$$

<p>A production-level agent requires:</p>

$$
\text{Agent} = \text{LLM} + \text{Planning} + \text{Memory} + \text{Tools} + \text{Evaluation}
$$

<h1 id="7-future">7. The Future: AI That Ships Features<a hidden class="anchor" aria-hidden="true" href="#7-future">#</a></h1>

<p>The evolution of software development:</p>

```
1990s       Human writes everything
              |
              v
2010s       IDE + Autocomplete
              |
              v
2020s       LLM Coding Assistant
              |
              v
Future      Autonomous Software Agent
```

<p>The next generation of developers may not spend most of their time writing code. Instead, they will:</p>

<ul>
  <li>Define goals</li>
  <li>Design agent systems</li>
  <li>Build evaluation frameworks</li>
  <li>Manage autonomous engineering workflows</li>
</ul>

<p>The ultimate vision is:</p>

<blockquote>
  <p>Software engineering becomes a <strong>collaboration</strong> between humans and intelligent agents.</p>
</blockquote>

<p>AI will not simply help developers write software. <strong>AI will become a new layer of software engineering itself.</strong></p>

<h1 id="8-conclusion">8. Conclusion<a hidden class="anchor" aria-hidden="true" href="#8-conclusion">#</a></h1>

<p>LLMs started as language models. Then they became coding assistants. Now they are evolving into <strong>autonomous agents</strong> capable of planning, reasoning, and executing complex tasks.</p>

<p>The future competition will not only be about who has the largest model. It will be about who can build the <strong>most reliable agent ecosystem</strong>.</p>

<p>The next era belongs to those who can design intelligent workflows.</p>

<blockquote>
  <p><strong>From AI that helps you code.</strong> <strong>To AI that builds, tests, and ships software.</strong></p>
</blockquote>

<h1 id="references">References<a hidden class="anchor" aria-hidden="true" href="#references">#</a></h1>

<ol>
  <li>Anthropic. <em>Model Context Protocol Specification</em>. 2025.</li>
  <li>Yao, S., et al. <em>ReAct: Synergizing Reasoning and Acting in Language Models</em>. ICLR 2023.</li>
  <li>Sutton, R. S., &amp; Barto, A. G. <em>Reinforcement Learning: An Introduction</em>. MIT Press, 2018.</li>
  <li>OpenAI. <em>Function Calling and Tools</em>. 2024.</li>
  <li>Anthropic. <em>Building Effective Agents</em>. 2024.</li>
</ol>

</div>
