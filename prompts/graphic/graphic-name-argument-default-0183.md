---
id: graphic-name-argument-default-0183
title: "GPT-Image-2生成3D模型三面图验证"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["技术笔记", "AI研究", "手账", "笔记本", "俯视拍摄", "手绘", "插画", "木桌"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
{
  "type": "photograph of an open notebook",
  "setting": "wooden desk surface, top-down angle",
  "subject": {
    "hands": "two hands visible at the bottom, wearing a dark blue ribbed sweater, right hand holding a red pen labeled {argument name=\"pen brand\" default=\"PILOT G-TEC-C4\"} writing on the page",
    "notebook": "open A5 dot-grid notebook with handwritten notes and diagrams in black, blue, green, and red ink"
  },
  "layout": {
    "left_page": {
      "header": "{argument name=\"main title\" default=\"「GPT-Image-2」による3Dモデル三面図生成の検証\"}",
      "sections": [
        {
          "title": "1. 検証フロー (Workflow):",
          "content": "text flow and a flowchart diagram",
          "flowchart_elements": 5,
          "flowchart_labels": ["Input (Prompt)", "GPT-Image-2", "正面図", "側面図", "背面図"]
        }
      ]
    },
    "right_page": {
      "sections": [
        {
          "title": "2. 結果分析",
          "target_box": "Target [{argument name=\"target object\" default=\"椅子\"}] => [3D Model & 3面図 images]",
          "bullet_points_count": 3,
          "bullet_point_topics": ["精度: ★★★☆☆", "整合性", "課題"],
          "diagram_count": 3,
          "diagram_labels": ["正面", "側面", "背面"],
          "diagram_description": "sketches of chairs with red correction notes on the front view"
        }
      ],
      "bottom_right_corner": {
        "doodle": "cute anime-style line drawing of a smiling girl with short hair",
        "label": "{argument name=\"character name\" default=\"あいちゃん\"} {argument name=\"date\" default=\"3/15\"}"
      }
    }
  }
}

## 中文译文（源站提供）
{"type": "木质书桌上打开的点阵笔记本的俯视视角", "subject": {"description": "穿着深蓝色罗纹毛衣的手正在笔记本上书写", "tool": "手持一支 {argument name=\"pen color\" default=\"红色\"} 中性笔"}, "layout": {"left_page": {"header": "{argument name=\"main title\" default=\"基于「GPT-Image-2」的 3D 模型三视图生成验证\"}", "sections": [{"title": "1. 验证流程 (Workflow):", "content": "文本序列 (文本 => GPT-Image-2 => 3D 模型生成 => 三视图(正面/侧面/背面)输出)"}, {"type": "block diagram", "elements": 5, "description": "标有 'Input (Prompt)' 的方框指向 'GPT-Image-2'，随后分支为 3 个分别标有 '正面图'、'侧面图' 和 '背面图' 的方框，并由绿色线条连接"}]}, "right_page": {"sections": [{"title": "2. 结果分析", "subtitle": "(例) 目标 {argument name=\"target object\" default=\"椅子\"} => [3D 模型 & 三视图图像]", "bullet_points": {"count": 3, "topics": ["精度 (5 星中 3 星)", "一致性", "挑战"]}}, {"type": "sketches", "count": 3, "subject": "椅子", "labels": ["正面", "侧面", "背面"], "annotations": "椅子绘图上的红色墨水箭头和修改注释"}, {"type": "doodle", "position": "右下角", "description": "可爱的动漫女孩脸", "signature": "{argument name=\"doodle signature\" default=\"Ai-chan 3/15\"}"}]}}}

## 来源备注
- 源站作者：あいちゃん
- 源站 UUID：saMGqGqDaC
- 源站分类：06_图文排版视觉传达
