---
id: graphic-headline-name-type-0925
title: "生成未来风格报纸"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["报纸", "写实", "科技", "新闻", "智能", "军演", "股市", "编程"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
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
  "type": "photorealistic photograph of a printed newspaper front page",
  "setting": "resting on a kitchen counter with blurred background appliances",
  "newspaper_header": {
    "title": "{argument name=\"newspaper name\" default=\"USA TODAY\"}",
    "date": "{argument name=\"date\" default=\"04.23.26\"}",
    "details": "THE NATION'S NEWS | $3.00 | THURSDAY",
    "top_right_teaser": {
      "headline": "US, Philippines hold joint drills in South China Sea",
      "image": "naval ships in the ocean"
    }
  },
  "layout": {
    "element_counts": {
      "articles_and_teasers": 5,
      "printed_images": 4
    },
    "sections": [
      {
        "position": "center top",
        "type": "main article",
        "headline": "{argument name=\"main headline\" default=\"OpenAI's New Spud Model Dominates Cyber Warfare and Coding Benchmarks\"}",
        "image": "{argument name=\"main image subject\" default=\"a 3D blue whale wearing a crown with the text 'spud by OpenAI'\"}",
        "columns": 2
      },
      {
        "position": "right column top",
        "type": "side article",
        "headline": "Stock Market Rises on Tech Earnings",
        "columns": 1
      },
      {
        "position": "center bottom",
        "type": "secondary article",
        "headline": "{argument name=\"secondary headline\" default=\"Codex App Launches as 'Everything Super App'\"}",
        "image": "smartphone displaying an app interface with the word 'codex'",
        "columns": 3
      },
      {
        "position": "right column bottom",
        "type": "side article",
        "headline": "New Bird Species Discovered in Amazon",
        "columns": 1
      },
      {
        "position": "bottom edge",
        "type": "footer teaser",
        "headline": "NFL Draft shocks: QB falls to Round 2",
        "image": "American football player"
      }
    ]
  },
  "photography_style": "angled top-down perspective, natural lighting, visible paper texture and slight folds"
}

## 中文译文（源站提供）
{
  "type": "印刷报纸头版的照片级真实感图像",
  "setting": "放置在厨房台面上，背景为模糊的家电",
  "newspaper_header": {
    "title": "{argument name=\"newspaper name\" default=\"USA TODAY\"}",
    "date": "{argument name=\"date\" default=\"04.23.26\"}",
    "details": "全国新闻 | $3.00 | 星期四",
    "top_right_teaser": {
      "headline": "美国与菲律宾在南海举行联合演习",
      "image": "海洋中的海军舰艇"
    }
  },
  "layout": {
    "element_counts": {
      "articles_and_teasers": 5,
      "printed_images": 4
    },
    "sections": [
      {
        "position": "顶部居中",
        "type": "主文章",
        "headline": "{argument name=\"main headline\" default=\"OpenAI 的新型 Spud 模型在网络战和编码基准测试中占据主导地位\"}",
        "image": "{argument name=\"main image subject\" default=\"一只戴着皇冠的 3D 蓝鲸，带有 'spud by OpenAI' 字样\"}",
        "columns": 2
      },
      {
        "position": "右侧栏顶部",
        "type": "侧边文章",
        "headline": "科技股财报利好，股市上涨",
        "columns": 1
      },
      {
        "position": "底部居中",
        "type": "次要文章",
        "headline": "{argument name=\"secondary headline\" default=\"Codex 应用作为‘万能超级应用’发布\"}",
        "image": "显示带有 'codex' 字样应用界面的智能手机",
        "columns": 3
      },
      {
        "position": "右侧栏底部",
        "type": "侧边文章",
        "headline": "亚马逊发现新鸟类物种",
        "columns": 1
      },
      {
        "position": "底部边缘",
        "type": "页脚预告",
        "headline": "NFL 选秀爆冷：四分卫跌至第二轮",
        "image": "美式足球运动员"
      }
    ]
  },
  "photography_style": "俯视角度，自然光，可见纸张纹理和轻微折痕"
}

## 来源备注
- 源站作者：ハカセ アイ(Ai-Hakase)🐾最新トレンドＡＩのためのＸ 🐾
- 源站 UUID：U5iZdM7pDG
- 源站分类：06_图文排版视觉传达
