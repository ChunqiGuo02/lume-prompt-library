---
id: "product-step-text-visual-001"
title: "黄油曲奇制作步骤图解"
category: product
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["烘焙", "曲奇", "食谱", "教程", "美食", "实拍", "甜点", "饼干"]
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
  "type": "step-by-step recipe tutorial grid",
  "recipe": "{argument name=\"recipe name\" default=\"butter cookies\"}",
  "style": "top-down food photography, bright natural lighting, photorealistic",
  "background": "{argument name=\"background texture\" default=\"white marble countertop\"}",
  "layout": {
    "grid": "3x3",
    "total_panels": 9,
    "panels": [
      {
        "step": 1,
        "visual": "whisking softened butter and sugar in a glass bowl with a metal whisk",
        "text_overlay": "{argument name=\"step 1 text\" default=\"1. 黄油室温软化，加糖打发至蓬松发白\"}"
      },
      {
        "step": 2,
        "visual": "adding a raw egg yolk to the butter mixture, whisking",
        "text_overlay": "2. 分次加入鸡蛋，每次搅拌均匀再加下一次"
      },
      {
        "step": 3,
        "visual": "adding dark vanilla extract to the mixture in the glass bowl",
        "text_overlay": "3. 加入香草精，搅拌均匀"
      },
      {
        "step": 4,
        "visual": "sifting white flour through a round metal sieve into a glass bowl",
        "text_overlay": "4. 低筋面粉过筛后，加入盐，拌匀"
      },
      {
        "step": 5,
        "visual": "mixing crumbly dough with a spatula in a glass bowl",
        "text_overlay": "5. 翻拌成无干粉的面团"
      },
      {
        "step": 6,
        "visual": "a smooth ball of dough tightly wrapped in clear plastic wrap",
        "text_overlay": "6. 包上保鲜膜，冷藏30分钟"
      },
      {
        "step": 7,
        "visual": "rolled out flat dough with round and star-shaped metal cookie cutters cutting out shapes",
        "text_overlay": "7. 擀成约0.5cm厚，用模具压出形状"
      },
      {
        "step": 8,
        "visual": "raw star and round cookie dough shapes arranged neatly on a parchment-lined baking sheet",
        "text_overlay": "8. 放入烤盘，预热烤箱至180°C"
      },
      {
        "step": 9,
        "visual": "{argument name=\"final product\" default=\"baked golden-brown star and round cookies piled on a white fluted plate\"}",
        "text_overlay": "{argument name=\"step 9 text\" default=\"9. 烘烤12-15分钟，表面微金黄即可\"}"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "分步照片教程网格",
  "subject": "{argument name=\"recipe subject\" default=\"黄油曲奇\"}",
  "style": "俯视美食摄影，明亮的自然光，简洁美观",
  "background": "{argument name=\"background surface\" default=\"白色大理石台面\"}",
  "layout": {
    "grid": "3x3",
    "panel_count": 9,
    "panels": [
      {
        "step": 1,
        "image_description": "在透明玻璃碗中用手动打蛋器搅拌黄油和糖",
        "text_overlay": "1. 黄油室温软化，加糖打发至蓬松发白"
      },
      {
        "step": 2,
        "image_description": "在黄油混合物中加入生蛋黄，打蛋器放在碗中",
        "text_overlay": "2. 分次加入鸡蛋，每次搅拌均匀再加下一次"
      },
      {
        "step": 3,
        "image_description": "向混合物中加入深色香草精",
        "text_overlay": "3. 加入香草精，搅拌均匀"
      },
      {
        "step": 4,
        "image_description": "通过金属筛网将白面粉筛入玻璃碗中",
        "text_overlay": "4. 低筋面粉过筛后，加入盐，拌匀"
      },
      {
        "step": 5,
        "image_description": "用刮刀搅拌酥松的面团",
        "text_overlay": "5. 翻拌成无干粉的面团"
      },
      {
        "step": 6,
        "image_description": "用透明保鲜膜紧紧包裹的光滑面团球",
        "text_overlay": "6. 包上保鲜膜，冷藏 30 分钟"
      },
      {
        "step": 7,
        "image_description": "擀平的面团，用金属饼干模具压出星星和扇形圆圈形状",
        "text_overlay": "7. 擀成约 0.5cm 厚，用模具压出形状"
      },
      {
        "step": 8,
        "image_description": "生饼干坯整齐地排列在铺有烘焙纸的烤盘上",
        "text_overlay": "8. 放入烤盘，预热烤箱至 180°C"
      },
      {
        "step": 9,
        "image_description": "成品金黄色的饼干堆放在白色花边盘子上，角落里放着一些干薰衣草",
        "text_overlay": "{argument name=\"final step text\" default=\"9. 烘烤 12-15 分钟，表面微金黄即可\"}"
      }
    ]
  }
}

## 来源备注
- 源站作者：Gantrol
- 源站 UUID：8jZ8nZXGem
- 源站分类：06_图文排版视觉传达
