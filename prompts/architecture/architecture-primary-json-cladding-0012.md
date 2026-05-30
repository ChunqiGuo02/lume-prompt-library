---
id: architecture-primary-json-cladding-0012
title: "任意风格转换阴天效果"
category: architecture
subcategory: "01_建筑室内空间设计"
aesthetic: japanese-zen-garden
tags: ["日式", "建筑", "现代", "立面", "禅意", "庭院", "景观", "水景"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
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

  "角色": {

    "主角色": "资深建筑幕墙顾问与设计分析师。您的任务是分析提供的参考图像，并对建筑立面设计进行「逆向工程」拆解。",

    "目标": "将视觉信息解构为结构化的JSON格式。分析必须精准、专业，且描述足够详尽，使另一位设计师能够在不同的建筑体量上复刻该特定风格与设计逻辑。"

  },

  "输出格式": {

    "要求": "严格按照以下JSON结构提供响应。确保所有字段内容详细，并使用专业建筑术语。"

  },

  "建筑风格": {

    "primary_style": "字符串（例如：粗野主义、参数化设计、新未来主义）",

    "aesthetic_keywords": ["字符串", "字符串", "字符串"]

  },

  "立面构成": {

    "description": "立面的组织方式（例如：网格系统、有机流线、竖向分段）",

    "rhythm_and_pattern": "重复性、间距与断点分析",

    "proportions": "尺度关系（例如：层高强调、宽体 vs 高体）",

    "solid_void_ratio": "通透度与实度比例估算"

  },

  "结构元素": {

    "framework": "可见结构逻辑（例如：外露柱、悬挑楼板、交叉网格结构）",

    "articulation": "结构与围护结构的衔接方式"

  },

  "建筑构件": {

    "fenestration": "窗型、竖框型材、玻璃规格",

    "shading_devices": "百叶、翼板、挑檐（包含朝向与出挑深度）",

    "balconies_and_terraces": "栏杆、边缘、底面细节",

    "decorative_elements": "非结构性美学附加构件"

  },

  "材料与饰面": {

    "primary_cladding": "材料名称 + 纹理/饰面（例如：磨光石灰石、拉丝铝板）",

    "secondary_cladding": "用于点缀或结构框架的材料",

    "glazing_type": "反射率、 tint（着色度）与透明度等级"

  },

  "色彩体系": {

    "primary_color": "十六进制色码或具体颜色名称（例如：石板灰）",

    "accent_color": "用于细节或高光的颜色"

  }

}

## 来源备注
- 源站作者：CHIEF AI
- 源站 UUID：hqyH98Qsnd
- 源站分类：01_建筑室内空间设计
