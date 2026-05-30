---
id: "landscape-title-argument-name-001"
title: "ChatGPT图像生成提示词技巧"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["ChatGPT", "AI绘画", "图像生成", "提示词", "技巧", "信息图", "简约风", "扁平化"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:2"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{ "type": "infographic", "style": "clean, corporate, flat design, soft pastel colors, rounded corners, white background", "header": { "main_title": "{argument name=\"main title\" default=\"ChatGPTで画像を作るコツ\"}", "subtitle": "{argument name=\"subtitle\" default=\"良いプロンプトの書き方と、効果的な修正方法（2026年4月10日公開の要点）\"}", "top_right_badge": "OpenAI Academy / Creating images with ChatGPT" }, "layout": { "columns": [ { "color_theme": "blue", "header": "{argument name=\"column 1 title\" default=\"1 良いプロンプトの書き方 (1〜3文で簡潔に)\"}", "item_count": 5, "icons": ["target", "landscape picture", "map pin", "paintbrush", "sliders"] }, { "color_theme": "green", "header": "{argument name=\"column 2 title\" default=\"2 結果をよくする修正のコツ\"}", "item_count": 4, "icons": ["checkmark", "checkmark", "checkmark", "A/B comparison"] }, { "color_theme": "orange", "header": "3 少し高度な使い方", "item_count": 4, "icons": ["multiple images", "letter T", "bar chart", "magic wand"] }, { "color_theme": "purple", "header": "4 注意点", "item_count": 4, "icons": ["shield with check", "star", "document with check", "gavel"] } ], "footer": { "left_section": { "title": "{argument name=\"bottom left title\" default=\"プロンプト例 (1〜3文)\"}", "item_count": 3, "thumbnails": ["orange tabby cat", "coffee cup on white background", "blue bar chart"] }, "right_section": { "title": "ワークフロー", "step_count": 4, "icons": ["upload arrow", "sparkles", "A/B boxes", "checkmark"], "flow_style": "horizontal with dashed arrows" } } } }

## 中文译文（源站提供）
{
  "type": "信息图速查表",
  "style": "简洁、现代、扁平化设计、企业风格、日语文本",
  "header": {
    "main_title": "{argument name=\"main title\" default=\"ChatGPT 图像生成技巧\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"优质提示词写法与高效修正方法（2026 年 4 月 10 日发布要点）\"}",
    "badge": "OpenAI Academy / 使用 ChatGPT 创建图像"
  },
  "layout": {
    "main_grid": {
      "columns": 4,
      "sections": [
        {
          "column": 1,
          "color_theme": "blue",
          "header": "1 {argument name=\"column 1 title\" default=\"优质提示词写法（1-3 句简明扼要）\"}",
          "item_count": 5,
          "labels": ["目的", "主题", "场景/地点", "画风/风格", "约束/指定"]
        },
        {
          "column": 2,
          "color_theme": "teal green",
          "header": "2 {argument name=\"column 2 title\" default=\"优化结果的修正技巧\"}",
          "item_count": 4,
          "labels": ["微调具体细节", "使用肯定句指令", "明确需保留的元素", "对比选择"]
        },
        {
          "column": 3,
          "color_theme": "orange",
          "header": "3 进阶用法",
          "item_count": 4,
          "labels": ["利用多张图像", "图像内文本", "图解/信息图", "逐步精炼"]
        },
        {
          "column": 4,
          "color_theme": "purple",
          "header": "4 注意事项",
          "item_count": 4,
          "labels": ["真实人物生成", "避免过度模仿特定品牌/作品", "署名标注", "遵守使用政策"]
        }
      ]
    },
    "bottom_section": {
      "left_panel": {
        "title": "{argument name=\"examples title\" default=\"提示词示例 (1-3 句)\"}",
        "item_count": 3,
        "thumbnails": ["橘猫", "桌上的咖啡杯", "蓝色柱状图"]
      },
      "right_panel": {
        "title": "工作流程",
        "step_count": 4,
        "labels": ["创建", "微调", "对比", "完成"]
      }
    }
  }
}

## 来源备注
- 源站作者：炎鎮🔥 - ₿onochin -
- 源站 UUID：9MVL33ico4
- 源站分类：06_图文排版视觉传达
