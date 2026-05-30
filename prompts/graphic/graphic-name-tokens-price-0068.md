---
id: graphic-name-tokens-price-0068
title: "AI模型定价页UI设计"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["深色", "暗黑", "网页", "定价", "大模型", "科技", "现代", "极简"]
recommended_models: []
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

# 正文 prompt
{
  "type": "dark mode web page UI mockup",
  "theme": "sleek, modern, dark theme with white and light grey text",
  "header": {
    "logo": "{argument name=\"company name\" default=\"OpenAI\"}",
    "navigation": ["Research", "Products", "Safety", "Company"],
    "actions": ["Search icon", "Log in", "Try ChatGPT button"]
  },
  "layout": {
    "left_column": {
      "label": "PRICING",
      "headline": "{argument name=\"model name\" default=\"GPT-8\"}",
      "subheading": "{argument name=\"main tagline\" default=\"Our most powerful model yet.\"}",
      "description": "GPT-8 is designed for intelligence, reliability, and real-world impact. Built with multimodal reasoning, long-context understanding, and advanced tool use.",
      "button": "GET STARTED",
      "features": {
        "count": 3,
        "items": [
          {"icon": "brain", "title": "Frontier intelligence", "desc": "State-of-the-art reasoning, coding, and problem solving."},
          {"icon": "shield", "title": "Trusted by design", "desc": "Stronger safety, more steerability, and enterprise-grade reliability."},
          {"icon": "lightning bolt", "title": "Built for builders", "desc": "Native tool use, structured outputs, and long-context workflows."}
        ]
      }
    },
    "right_column": {
      "type": "pricing card",
      "header": "PRICING - Simple, token-based pricing. No hidden fees.",
      "toggle": ["INPUT", "CACHE READ"],
      "token_pricing": {
        "count": 5,
        "rows": [
          {"name": "Text tokens", "unit": "Per 1M tokens", "price": "{argument name=\"text token price\" default=\"$3.00\"}"},
          {"name": "Image tokens", "unit": "Per 1M tokens", "price": "$10.00"},
          {"name": "Audio tokens", "unit": "Per 1M tokens", "price": "$6.00"},
          {"name": "Video tokens", "unit": "Per 1M tokens", "price": "$15.00"},
          {"name": "Output tokens", "unit": "Per 1M tokens", "price": "{argument name=\"output token price\" default=\"$12.00\"}"}
        ]
      },
      "additional_features": {
        "count": 2,
        "rows": [
          {"name": "Caching", "desc": "Save on repeated inputs with caching.", "price": "$0.30 / 1M tokens"},
          {"name": "Batch API (50% discount)", "desc": "Lower costs for asynchronous workloads.", "price": "-50%"}
        ]
      },
      "footer_links": ["LEARN MORE", "Model docs", "Pricing details"]
    }
  },
  "footer": "Prices are in USD. View the full pricing table in our docs."
}

## 中文译文（源站提供）
{
  "type": "深色模式网页 UI 模型",
  "theme": "时尚、现代的深色主题，配有白色和浅灰色文字",
  "header": {
    "logo": "{argument name=\"company name\" default=\"OpenAI\"}",
    "navigation": ["研究", "产品", "安全", "公司"],
    "actions": ["搜索图标", "登录", "试用 ChatGPT 按钮"]
  },
  "layout": {
    "left_column": {
      "label": "定价",
      "headline": "{argument name=\"model name\" default=\"GPT-8\"}",
      "subheading": "{argument name=\"main tagline\" default=\"Our most powerful model yet.\"}",
      "description": "GPT-8 专为智能、可靠性和实际应用而设计。具备多模态推理、长上下文理解和高级工具使用能力。",
      "button": "开始使用",
      "features": {
        "count": 3,
        "items": [
          {"icon": "brain", "title": "前沿智能", "desc": "最先进的推理、编码和问题解决能力。"},
          {"icon": "shield", "title": "值得信赖的设计", "desc": "更强的安全性、更高的可控性以及企业级的可靠性。"},
          {"icon": "lightning bolt", "title": "为开发者而生", "desc": "原生工具使用、结构化输出和长上下文工作流。"}
        ]
      }
    },
    "right_column": {
      "type": "定价卡片",
      "header": "定价 - 简单、基于 Token 的定价。无隐藏费用。",
      "toggle": ["输入", "缓存读取"],
      "token_pricing": {
        "count": 5,
        "rows": [
          {"name": "文本 Token", "unit": "每 100 万 Token", "price": "{argument name=\"text token price\" default=\"$3.00\"}"},
          {"name": "图像 Token", "unit": "每 100 万 Token", "price": "$10.00"},
          {"name": "音频 Token", "unit": "每 100 万 Token", "price": "$6.00"},
          {"name": "视频 Token", "unit": "每 100 万 Token", "price": "$15.00"},
          {"name": "输出 Token", "unit": "每 100 万 Token", "price": "{argument name=\"output token price\" default=\"$12.00\"}"}
        ]
      },
      "additional_features": {
        "count": 2,
        "rows": [
          {"name": "缓存", "desc": "通过缓存节省重复输入费用。", "price": "$0.30 / 100 万 Token"},
          {"name": "批量 API (5 折优惠)", "desc": "降低异步工作负载的成本。", "price": "-50%"}
        ]
      },
      "footer_links": ["了解更多", "模型文档", "定价详情"]
    }
  },
  "footer": "价格以美元计算。请在我们的文档中查看完整定价表。"
}

## 来源备注
- 源站作者：IDK
- 源站 UUID：xEGt91Kq4j
- 源站分类：06_图文排版视觉传达
