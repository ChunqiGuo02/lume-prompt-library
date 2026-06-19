# lume-prompt-library

Lume AI image and video generation prompt library, extracted from Leader Prompt Gallery for later Skill and PlanPack integration.

## Contents

- `prompts/`: one prompt per Markdown file, grouped by primary scene category.
- `index.json`: generated flat index containing each prompt frontmatter plus file path.
- `packs/`: reserved for future PlanPack prompt bundles. The first release does not auto-generate packs.
- `scripts/`: local build and validation utilities.
- `reports/`: extraction and validation reports.

Current generated prompt count: **8672**.

## Prompt Schema

Every prompt file must include all frontmatter keys below. Missing scalar values use `null`; missing arrays use `[]`.

```yaml
---
id: "graphic-luxury-brand-001"
title: "Prompt title"
category: graphic
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["广告", "时尚"]
recommended_models:
  - banana-pro
recommended_params:
  aspect_ratio: "3:2"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---
```

Allowed `category` values:

- `landscape`
- `architecture`
- `interior`
- `product`
- `graphic`
- `portrait`
- `video`
- `misc`

## Contribution Guide

1. Add exactly one prompt per Markdown file under the matching `prompts/<category>/` directory.
2. Keep the model-ready prompt body unchanged. Do not rewrite, translate, or optimize someone else's prompt text.
3. Do not fill `sample_outputs` unless representative image URLs are explicitly provided for that prompt.
4. Use globally unique `id` values and keep the file name equal to `id + ".md"`.
5. Run `node scripts/validate-library.mjs` before submitting changes.

## Rebuilding

```bash
node scripts/build-library.mjs
node scripts/validate-library.mjs
```

`source-cache/` is intentionally ignored by git. It is a local cache used to keep the network-heavy extraction step separate from generation and validation.
