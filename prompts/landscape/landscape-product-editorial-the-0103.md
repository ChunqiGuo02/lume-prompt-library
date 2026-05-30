---
id: landscape-product-editorial-the-0103
title: "山间木屋的宁静时光"
category: landscape
subcategory: "15_特定场景环境生成"
aesthetic: null
tags: ["广告", "户外", "山景", "木屋", "休闲", "男士", "暖色调", "日落"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
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
  "project": "Nano Banana - Universal Product Editorial Ad",
  "version": "1.1",

  "input_requirements": {
    "reference_product_image": {
      "upload_required": true,
      "usage": "extract visual characteristics, color palette, possible target user, and implied purpose"
    },
    "branding_elements": {
      "allowed": false,
      "description": "no visible logos, trademarks, or brand names in the generated result"
    }
  },

  "image_specification": {
    "meta": {
      "clean_generation": true,
      "distraction_free": true
    }
  },

  "creative_directive": {
    "freedom_level": "full_creative_imagination",
    "Nano_Banana_role": "interpret product essence to design the rest of the scene",
    "editorial_intent": "produce a visually compelling advertisement based solely on the product reference"
  },

  "scene_generation": {
    "environment": {
      "type": "indoor_or_outdoor",
      "chosen_by": "best_use_case_for_product",
      "lighting": {
        "selection_method": "depends_on_product_use_case",
        "goal": [
          "enhance product visibility",
          "create a clean editorial mood",
          "support emotional impact"
        ]
      }
    },

    "subject_character": {
      "identity": "derived_from_product_reference",
      "gender": "male_or_female",
      "attributes_selection": [
        "style_inspired_by_product_color_palette",
        "personality_inferred_from_product_category",
        "age_and_vibe_matching_intended_audience"
      ],
      "pose": "chosen_by_creative_engine",
      "interaction_with_product": "natural and meaningful"
    },

    "product_presentation": {
      "visibility": "clear",
      "placement": "hero_position",
      "integration": "harmonized with entire composition"
    }
  },

  "ad_copy": {
    "text": {
      "placement": "editorial_style_overlay",
      "tone": "clean, modern, descriptive",
      "content": "short metaphorical line describing the product’s essence and purpose without naming a brand"
    }
  },

  "render_style": {
    "aesthetic": "editorial_magazine_ad",
    "resolution": "high_detail",
    "color_grading": "optimized_based_on_product_visuals",
    "medium": "photorealistic"
  }
}

## 中文译文（源站提供）
```json
{
  "project": "Nano Banana - 通用产品专题广告",
  "version": "1.1",

  "input_requirements": {
    "reference_product_image": {
      "upload_required": true,
      "usage": "提取视觉特征、配色方案、可能的潜在用户和隐含用途"
    },
    "branding_elements": {
      "allowed": false,
      "description": "生成结果中不得出现可见的标志、商标或品牌名称"
    }
  },

  "image_specification": {
    "meta": {
      "clean_generation": true,
      "distraction_free": true
    }
  },

  "creative_directive": {
    "freedom_level": "完全创意想象",
    "Nano_Banana_role": "解读产品精髓以设计其余场景",
    "editorial_intent": "仅根据产品参考生成具有视觉吸引力的广告"
  },

  "scene_generation": {
    "environment": {
      "type": "室内或室外",
      "chosen_by": "产品最佳使用场景",
      "lighting": {
        "selection_method": "取决于产品使用场景",
        "goal": [
          "增强产品可见性",
          "营造干净的专题氛围",
          "支持情感冲击"
        ]
      }
    },

    "subject_character": {
      "identity": "源自产品参考",
      "gender": "男性或女性",
      "attributes_selection": [
        "风格灵感来自产品配色方案",
        "个性根据产品类别推断",
        "年龄和氛围与目标受众匹配"
      ],
      "pose": "由创意引擎选择",
      "interaction_with_product": "自然且有意义"
    },

    "product_presentation": {
      "visibility": "清晰",
      "placement": "核心位置",
      "integration": "与整体构图和谐统一"
    }
  },

  "ad_copy": {
    "text": {
      "placement": "专题风格叠加",
      "tone": "简洁、现代、描述性",
      "content": "简短的隐喻性语句，描述产品精髓和用途，不提及品牌名称"
    }
  },
  "render_style": {
    "aesthetic": "杂志专题广告",
    "resolution": "高细节",
    "color_grading": "根据产品视觉效果优化",
    "medium": "超写实"
  }
}
```

## 来源备注
- 源站作者：AI Tales - Not by Humans
- 源站 UUID：gNsv8RNiK0
- 源站分类：15_特定场景环境生成
