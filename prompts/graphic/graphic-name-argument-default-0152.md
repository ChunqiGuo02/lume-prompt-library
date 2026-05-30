---
id: graphic-name-argument-default-0152
title: "DeepSeek-V4技术报告基准测试"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["大模型", "技术报告", "基准测试", "性能对比", "柱状图", "数据表格", "人工智能", "模型评测"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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

# 正文 prompt
{
  "type": "photograph of a computer monitor displaying an academic technical report",
  "style": "slightly angled screen photo, visible moire pattern, LCD pixel grid, slight glare, LaTeX document formatting, serif fonts",
  "document_header": {
    "left": "4 Benchmark Evaluation",
    "right": "{argument name=\"report title\" default=\"DeepSeek-V4 Technical Report\"}"
  },
  "introductory_text": "Paragraph summarizing comprehensive evaluation of {argument name=\"main model name\" default=\"DeepSeek-V4\"} against {argument name=\"competitor model 1\" default=\"GPT-5.3\"}, {argument name=\"competitor model 2\" default=\"Claude Opus 4.6\"}, and {argument name=\"competitor model 3\" default=\"Gemini 3.1 Pro Preview\"}.",
  "visualizations": {
    "legend": "5 items with color codes: dark blue, grey, light grey, blue striped, light blue",
    "bar_charts": {
      "count": 6,
      "labels": [
        "MMLU-Pro (EM)",
        "GPQA-Diamond (Pass@1)",
        "AIME 2025 (Pass@1)",
        "LiveCodeBench (Pass@1-COT)",
        "SWE-bench Verified (Resolved)",
        "Tau-bench (Average)"
      ]
    },
    "caption": "Figure 1 | Performance comparison on core benchmarks. DeepSeek-V4 achieves state-of-the-art results across the majority of benchmarks."
  },
  "data_table": {
    "columns": [
      "Benchmark",
      "{argument name=\"main model name\" default=\"DeepSeek-V4\"}",
      "{argument name=\"competitor model 1\" default=\"GPT-5.3\"}",
      "{argument name=\"competitor model 2\" default=\"Claude Opus 4.6\"}",
      "{argument name=\"competitor model 3\" default=\"Gemini 3.1 Pro Preview\"}",
      "GPT-4.1"
    ],
    "categories": {
      "count": 4,
      "rows": [
        {"label": "General", "icon": "globe/network", "sub_items": 3},
        {"label": "Reasoning & Math", "icon": "calculator/clipboard", "sub_items": 3},
        {"label": "Code", "icon": "code brackets", "sub_items": 3},
        {"label": "Agent", "icon": "robot face", "sub_items": 3}
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "显示学术技术报告的电脑显示器照片",
  "style": "轻微倾斜的屏幕照片，可见摩尔纹，LCD 像素网格，轻微反光，LaTeX 文档排版，衬线字体",
  "document_header": {
    "left": "4 基准评估",
    "right": "{argument name=\"report title\" default=\"DeepSeek-V4 技术报告\"}"
  },
  "introductory_text": "总结 {argument name=\"main model name\" default=\"DeepSeek-V4\"} 对比 {argument name=\"competitor model 1\" default=\"GPT-5.3\"}、{argument name=\"competitor model 2\" default=\"Claude Opus 4.6\"} 以及 {argument name=\"competitor model 3\" default=\"Gemini 3.1 Pro Preview\"} 的综合评估段落。",
  "visualizations": {
    "legend": "5 个带有颜色代码的项目：深蓝色、灰色、浅灰色、蓝色条纹、浅蓝色",
    "bar_charts": {
      "count": 6,
      "labels": [
        "MMLU-Pro (EM)",
        "GPQA-Diamond (Pass@1)",
        "AIME 2025 (Pass@1)",
        "LiveCodeBench (Pass@1-COT)",
        "SWE-bench Verified (Resolved)",
        "Tau-bench (Average)"
      ]
    },
    "caption": "图 1 | 核心基准测试性能对比。DeepSeek-V4 在大多数基准测试中均取得了业界领先的成果。"
  },
  "data_table": {
    "columns": [
      "基准测试",
      "{argument name=\"main model name\" default=\"DeepSeek-V4\"}",
      "{argument name=\"competitor model 1\" default=\"GPT-5.3\"}",
      "{argument name=\"competitor model 2\" default=\"Claude Opus 4.6\"}",
      "{argument name=\"competitor model 3\" default=\"Gemini 3.1 Pro Preview\"}",
      "GPT-4.1"
    ],
    "categories": {
      "count": 4,
      "rows": [
        {"label": "通用", "icon": "globe/network", "sub_items": 3},
        {"label": "推理与数学", "icon": "calculator/clipboard", "sub_items": 3},
        {"label": "代码", "icon": "code brackets", "sub_items": 3},
        {"label": "Agent", "icon": "robot face", "sub_items": 3}
      ]
    }
  }
}

## 来源备注
- 源站作者：Anneshu Nag
- 源站 UUID：5VzwvTORZT
- 源站分类：06_图文排版视觉传达
