---
layout: page
title: "Lessons from Training Multimodal Foundation Models"
date: 2025-11-15
categories: [Computer Vision, ML]
tags: [foundation-models, multimodal, pretraining, transformer]
description: "What I learned from two years of pre-training large multimodal models at scale."
_styles: |
  /* ============================================
     PaperMod-style overrides (Lilian Weng layout)
     Scoped to this post only.
     ============================================ */

  /* ---------- Layout: hide sidebar (single-column) ---------- */
  .cv-layout {
    display: block;
    max-width: 760px;
    padding: 1em 0;
  }
  .cv-sidebar { display: none !important; }
  .cv-main { min-width: 0; }

  /* ---------- Post header ---------- */
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

  /* ---------- Post meta ---------- */
  .post-content .post-meta {
    color: var(--muted);
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 24px;
    font-style: normal;
    line-height: 1.6;
  }

  /* ---------- TOC ---------- */
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

  /* ---------- Post content ---------- */
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

  /* ---------- Headings ---------- */
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

  /* ---------- Anchor links ---------- */
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

  /* ---------- Blockquote ---------- */
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

  /* ---------- Code blocks ---------- */
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

  /* ---------- Tables ---------- */
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

  /* ---------- Images ---------- */
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

  /* ---------- Links ---------- */
  .post-content a {
    color: var(--accent);
    text-decoration: none;
    box-shadow: 0 1px 0 var(--accent);
  }
  .post-content a:hover { color: var(--accent-hover); text-decoration: none; }
  .post-content a code { box-shadow: 0 -1px 0 var(--accent) inset; }
---

<div class="post-meta">Date: November 15, 2025 | Estimated Reading Time: 2 min | Author: Yong Huang</div>

<div class="toc">
  <details>
    <summary accesskey="c" title="(Alt + C)">
      <span class="details">Table of Contents</span>
    </summary>
    <div class="inner">
      <ul>
        <li><a href="#why-pre-training-matters">Why Pre-training Matters</a>
          <ul>
            <li><a href="#data-quality-data-quantity">Data Quality &gt; Data Quantity</a></li>
            <li><a href="#compute-tricks">Compute Tricks</a></li>
            <li><a href="#what-didnt-work">What Didn't Work</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </details>
</div>

<div class="post-content">

<h1 id="why-pre-training-matters">Why Pre-training Matters<a hidden class="anchor" aria-hidden="true" href="#why-pre-training-matters">#</a></h1>

The quality of your foundation model determines the ceiling of every downstream task. Garbage in, garbage out — at a billion-parameter scale.

<h2 id="data-quality-data-quantity">Data Quality &gt; Data Quantity<a hidden class="anchor" aria-hidden="true" href="#data-quality-data-quantity">#</a></h2>

We spent 60% of our time on data curation. De-duplication, NSFW filtering, OCR cleanup, and language balancing mattered more than adding more raw images.

<h2 id="compute-tricks">Compute Tricks<a hidden class="anchor" aria-hidden="true" href="#compute-tricks">#</a></h2>

- **Gradient checkpointing** for memory-bound layers
- **Flash attention** for long sequences
- **Mixed precision (bf16)** for stability

<h2 id="what-didnt-work">What Didn't Work<a hidden class="anchor" aria-hidden="true" href="#what-didnt-work">#</a></h2>

Trying to fine-tune a 70B model on a single node. Just use LoRA.

</div>
