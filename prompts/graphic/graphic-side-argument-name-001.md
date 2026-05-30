---
id: "graphic-side-argument-name-001"
title: "人体解剖学正面视图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["解剖学", "医学", "人体", "挂图", "写实", "科普", "教学", "临床"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
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
  "type": "medical infographic poster",
  "title": "{argument name=\"main title\" default=\"HUMAN ANATOMY - ANTERIOR VIEW\"}",
  "subject": {
    "description": "Full-body {argument name=\"subject type\" default=\"male human figure\"}, anterior view, split vertically down the midline.",
    "viewer_left_side": "{argument name=\"left side focus\" default=\"superficial muscles\"}",
    "viewer_right_side": "{argument name=\"right side focus\" default=\"bones, internal organs, arteries, veins, and nerves\"}",
    "style": "{argument name=\"color palette\" default=\"clinical medical textbook colors\"}"
  },
  "layout": {
    "centerpiece": "The anatomical figure stands centrally, arms slightly away from the body, palms facing forward.",
    "labeling_system": "Thin black leader lines connect anatomical structures to text labels arranged neatly on the left and right margins.",
    "label_counts": {
      "head_and_neck": 12,
      "torso_and_arms": 29,
      "hands": 10,
      "pelvis_and_legs": 34,
      "feet": 5
    },
    "panels": [
      {
        "title": "LEGEND",
        "position": "top-right",
        "count": 5,
        "items": [
          {"color": "red/brown", "label": "MUSCLES"},
          {"color": "beige", "label": "BONES"},
          {"color": "yellow", "label": "NERVES"},
          {"color": "red", "label": "ARTERIES"},
          {"color": "blue", "label": "VEINS"}
        ]
      },
      {
        "title": "NOTES",
        "position": "bottom-right",
        "count": 4,
        "items": [
          "1. Right side shows bones, organs, arteries, veins and nerves.",
          "2. Left side shows superficial muscles and related tendons.",
          "3. Some deeper structures are illustrated transparently.",
          "4. Not all anatomical variations are shown."
        ]
      },
      {
        "title": "SCALE",
        "position": "bottom-left",
        "count": 6,
        "description": "A horizontal bar scale with 6 numeric markers (0, 10, 20, 30, 40, 50) labeled 'Centimeters'."
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "医学信息图海报",
  "title": "{argument name=\"main title\" default=\"人体解剖学 - 正面视图\"}",
  "subject": {
    "description": "全身 {argument name=\"subject type\" default=\"男性人体模型\"}，正面视图，沿中线垂直分割。",
    "viewer_left_side": "{argument name=\"left side focus\" default=\"浅层肌肉\"}",
    "viewer_right_side": "{argument name=\"right side focus\" default=\"骨骼、内脏、动脉、静脉和神经\"}",
    "style": "{argument name=\"color palette\" default=\"临床医学教科书配色\"}"
  },
  "layout": {
    "centerpiece": "解剖模型居中站立，双臂略微张开，手掌朝前。",
    "labeling_system": "细黑色的引导线将解剖结构连接到左右两侧整齐排列的文字标签上。",
    "label_counts": {
      "head_and_neck": 12,
      "torso_and_arms": 29,
      "hands": 10,
      "pelvis_and_legs": 34,
      "feet": 5
    },
    "panels": [
      {
        "title": "图例",
        "position": "右上角",
        "count": 5,
        "items": [
          {"color": "红/棕色", "label": "肌肉"},
          {"color": "米色", "label": "骨骼"},
          {"color": "黄色", "label": "神经"},
          {"color": "红色", "label": "动脉"},
          {"color": "蓝色", "label": "静脉"}
        ]
      },
      {
        "title": "备注",
        "position": "右下角",
        "count": 4,
        "items": [
          "1. 右侧显示骨骼、内脏、动脉、静脉和神经。",
          "2. 左侧显示浅层肌肉及相关肌腱。",
          "3. 部分深层结构以透明方式呈现。",
          "4. 未展示所有解剖变异。"
        ]
      },
      {
        "title": "比例尺",
        "position": "左下角",
        "count": 6,
        "description": "一个水平条形比例尺，带有 6 个数字标记（0, 10, 20, 30, 40, 50），标注为“厘米”。"
      }
    ]
  }
}

## 来源备注
- 源站作者：Ivan Davila
- 源站 UUID：AGmwIZGPmU
- 源站分类：06_图文排版视觉传达
