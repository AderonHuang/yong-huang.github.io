---
title: "Lessons from Training Multimodal Foundation Models"
date: 2025-11-15
categories: [Computer Vision, ML]
tags: [foundation-models, multimodal, pretraining, transformer]
description: "What I learned from two years of pre-training large multimodal models at scale."
---

# Why Pre-training Matters

The quality of your foundation model determines the ceiling of every downstream task. Garbage in, garbage out — at a billion-parameter scale.

## Data Quality > Data Quantity

We spent 60% of our time on data curation. De-duplication, NSFW filtering, OCR cleanup, and language balancing mattered more than adding more raw images.

## Compute Tricks

- **Gradient checkpointing** for memory-bound layers
- **Flash attention** for long sequences
- **Mixed precision (bf16)** for stability

## What Didn't Work

Trying to fine-tune a 70B model on a single node. Just use LoRA.
