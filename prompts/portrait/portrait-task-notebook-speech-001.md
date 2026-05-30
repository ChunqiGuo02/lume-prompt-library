---
id: "portrait-task-notebook-speech-001"
title: "手绘涂鸦风格肖像生成"
category: portrait
subcategory: "07_艺术插画创意风格"
aesthetic: null
tags: ["肖像", "涂鸦", "速写", "手绘", "笔记本", "撞色", "霓虹", "波普"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "16:9"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "image_generation_task": {
    "task_type": "text2img",
    "subject": "portrait of a young man",
    "constraint": "highly detailed notebook sketch",
    
    "artistic_direction": {
      "medium": {
        "substrate": "lined notebook paper",
        "tools": ["blue ballpoint pen", "red gel pen", "black ink"],
        "texture_quality": "raw, tactile, paper wrinkles, ink smudges"
      },
      "style_preset": {
        "name": "chaotic_student_doodle",
        "vibes": ["energetic", "messy", "horror vacui", "dense"],
        "line_quality": "cross-hatching, scribbled shading, varying pressure"
      }
    },

    "composition_details": {
      "surrounding_elements": [
        "handwritten notes",
        "random arrows",
        "musical notes",
        "speech bubbles with '{"speech bubble 1" "ZAP!"}' and '{"speech bubble 2" "WHOOSH!"}'",
        "doodled stars"
      ],
      "lighting_effect": {
        "type": "vibrant outer glow",
        "colors": ["neon blue", "electric red"]
      }
    },

    "technical_specs": {
      "aspect_ratio": "9:16",
      "resolution": "4K",
      "focus": "sharp center with artistic scribbles on edges"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_generation_task": {
    "task_type": "text2img",
    "subject": "年轻男子的肖像",
    "constraint": "高度细致的笔记本素描",
    "artistic_direction": {
      "medium": {
        "substrate": "带横线的笔记本纸",
        "tools": [
          "蓝色圆珠笔",
          "红色中性笔",
          "黑色墨水"
        ],
        "texture_quality": "原始、有触感、纸张褶皱、墨迹污点"
      },
      "style_preset": {
        "name": "凌乱的学生涂鸦",
        "vibes": [
          "充满活力",
          "杂乱",
          "恐空症",
          "密集"
        ],
        "line_quality": "交叉影线、涂鸦式阴影、压力变化"
      }
    },
    "composition_details": {
      "surrounding_elements": [
        "手写笔记",
        "随机箭头",
        "音符",
        "带有 '{\"speech bubble 1\" \"ZAP!\"}' 和 '{\"speech bubble 2\" \"WHOOSH!\"}' 的对话气泡",
        "涂鸦星星"
      ],
      "lighting_effect": {
        "type": "充满活力的外发光",
        "colors": [
          "霓虹蓝",
          "电光红"
        ]
      }
    },
    "technical_specs": {
      "aspect_ratio": "9:16",
      "resolution": "4K",
      "focus": "中心清晰，边缘有艺术涂鸦"
    }
  }
}
```

## 来源备注
- 源站作者：𝐌𝐢𝐧𝐝𝐒𝐩𝐚𝐫𝐤
- 源站 UUID：lfGy6O4K38
- 源站分类：07_艺术插画创意风格
