---
id: graphic-symbol-label-text-0497
title: "四格动物百科信息图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["信息图", "科普", "动物", "野生动物", "自然", "摄影", "日文", "生物"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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
  "type": "{argument name=\"layout style\" default=\"2x2 grid infographic\"}",
  "panels": [
    {
      "position": "top-left",
      "title": "{argument name=\"animal one\" default=\"ヒマラヤマーモット\"}",
      "image_description": "Himalayan marmot sitting on rocks with a snowy mountain background",
      "text_content": "Detailed biological facts including distribution, habitat, diet, behavior, sociality, hibernation, and characteristics",
      "icon_count": 4,
      "icons": [
        {"color": "blue", "symbol": "mountain", "label": "高山性"},
        {"color": "brown", "symbol": "cave", "label": "巣穴生活"},
        {"color": "yellow", "symbol": "sun", "label": "昼行性"},
        {"color": "blue", "symbol": "snowflake", "label": "長期冬眠"}
      ]
    },
    {
      "position": "top-right",
      "title": "{argument name=\"animal two\" default=\"ウォンバット\"}",
      "image_description": "Wombat standing on dirt ground",
      "text_content": "Detailed biological facts including distribution, habitat, diet, behavior, digging ability, excretion, defense, and reproduction",
      "icon_count": 4,
      "icons": [
        {"color": "purple", "symbol": "moon", "label": "夜行性"},
        {"color": "brown", "symbol": "digging animal", "label": "穴掘り名人"},
        {"color": "green", "symbol": "leaf", "label": "草食"},
        {"color": "brown", "symbol": "acorn", "label": "有袋類"}
      ]
    },
    {
      "position": "bottom-left",
      "title": "{argument name=\"animal three\" default=\"レッサーパンダ\"}",
      "image_description": "Red panda resting on a mossy tree branch",
      "text_content": "Detailed biological facts including distribution, habitat, diet, behavior, physical characteristics, sociality, conservation, and charm",
      "icon_count": 4,
      "icons": [
        {"color": "green", "symbol": "tree", "label": "樹上生活"},
        {"color": "green", "symbol": "bamboo", "label": "竹を食べる"},
        {"color": "orange", "symbol": "tail", "label": "長い尾"},
        {"color": "green", "symbol": "mountain", "label": "山地森林"}
      ]
    },
    {
      "position": "bottom-right",
      "title": "{argument name=\"animal four\" default=\"ハイラックス\"}",
      "image_description": "Rock hyrax standing on a rocky outcrop",
      "text_content": "Detailed biological facts including distribution, habitat, diet, behavior, sociality, mobility, taxonomy, and characteristics",
      "icon_count": 4,
      "icons": [
        {"color": "grey", "symbol": "rock", "label": "岩場適応"},
        {"color": "purple", "symbol": "group of people", "label": "群れ生活"},
        {"color": "yellow", "symbol": "sun", "label": "昼行性"},
        {"color": "orange", "symbol": "sun", "label": "日光浴"}
      ]
    }
  ],
  "styling": {
    "layout": "4 equal quadrants separated by white borders",
    "text_panel": "Semi-transparent white vertical rectangle on the right side of each quadrant",
    "typography": "Large bold Japanese title at the top left of each quadrant, dense informational text in the white panel",
    "icon_style": "Row of 4 circular colored icons with white silhouettes and black text labels placed at the bottom edge of each quadrant"
  }
}

## 中文译文（源站提供）
{
  "type": "{argument name=\"layout style\" default=\"2x2 网格信息图\"}",
  "panels": [
    {
      "position": "左上",
      "title": "{argument name=\"animal one\" default=\"喜马拉雅旱獭\"}",
      "image_description": "喜马拉雅旱獭坐在岩石上，背景为雪山",
      "text_content": "详细的生物学事实，包括分布、栖息地、饮食、行为、社会性、冬眠和特征",
      "icon_count": 4,
      "icons": [
        {"color": "blue", "symbol": "mountain", "label": "高山性"},
        {"color": "brown", "symbol": "cave", "label": "穴居生活"},
        {"color": "yellow", "symbol": "sun", "label": "昼行性"},
        {"color": "blue", "symbol": "snowflake", "label": "长期冬眠"}
      ]
    },
    {
      "position": "右上",
      "title": "{argument name=\"animal two\" default=\"袋熊\"}",
      "image_description": "袋熊站在泥地上",
      "text_content": "详细的生物学事实，包括分布、栖息地、饮食、行为、挖掘能力、排泄、防御和繁殖",
      "icon_count": 4,
      "icons": [
        {"color": "purple", "symbol": "moon", "label": "夜行性"},
        {"color": "brown", "symbol": "digging animal", "label": "挖掘高手"},
        {"color": "green", "symbol": "leaf", "label": "草食性"},
        {"color": "brown", "symbol": "acorn", "label": "有袋类"}
      ]
    },
    {
      "position": "左下",
      "title": "{argument name=\"animal three\" default=\"小熊猫\"}",
      "image_description": "小熊猫在长满苔藓的树枝上休息",
      "text_content": "详细的生物学事实，包括分布、栖息地、饮食、行为、身体特征、社会性、保护状况和魅力点",
      "icon_count": 4,
      "icons": [
        {"color": "green", "symbol": "tree", "label": "树栖生活"},
        {"color": "green", "symbol": "bamboo", "label": "以竹为食"},
        {"color": "orange", "symbol": "tail", "label": "长尾巴"},
        {"color": "green", "symbol": "mountain", "label": "山地森林"}
      ]
    },
    {
      "position": "右下",
      "title": "{argument name=\"animal four\" default=\"蹄兔\"}",
      "image_description": "蹄兔站在岩石露头上",
      "text_content": "详细的生物学事实，包括分布、栖息地、饮食、行为、社会性、移动能力、分类和特征",
      "icon_count": 4,
      "icons": [
        {"color": "grey", "symbol": "rock", "label": "岩石适应性"},
        {"color": "purple", "symbol": "group of people", "label": "群居生活"},
        {"color": "yellow", "symbol": "sun", "label": "昼行性"},
        {"color": "orange", "symbol": "sun", "label": "日光浴"}
      ]
    }
  ],
  "styling": {
    "layout": "由白色边框分隔的 4 个等分象限",
    "text_panel": "每个象限右侧的半透明白色垂直矩形",
    "typography": "每个象限左上角的大号加粗中文标题，白色面板内为密集的详细信息文本",
    "icon_style": "每个象限底部边缘排列的 4 个彩色圆形图标，内含白色剪影和黑色文字标签"
  }
}

## 来源备注
- 源站作者：栗
- 源站 UUID：OVEoDb5Rr7
- 源站分类：06_图文排版视觉传达
