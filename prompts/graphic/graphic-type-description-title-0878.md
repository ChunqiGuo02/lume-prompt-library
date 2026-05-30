---
id: graphic-type-description-title-0878
title: "狂飙背景知识科普指南"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["狂飙", "信息图", "扁平风", "动漫风", "扫黑", "反腐", "科普", "刑侦"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
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
  "type": "comprehensive infographic explainer sheet",
  "style": "{argument name=\"illustration style\" default=\"flat vector anime style\"}",
  "color_palette": "{argument name=\"color palette\" default=\"beige background with dark brown, red, and blue accents\"}",
  "layout": {
    "header": {
      "tag": "中国ドラマ『狂飆』理解ガイド",
      "main_title": "{argument name=\"main title\" default=\"『狂飆（きょうひょう）』をもっと面白く見るために\"}",
      "subtitle": "作品の背景を知ると、物語がもっと深く、もっとリアルに楽しめる！",
      "top_right_badge": "善と悪、光と影が交錯するノンストップ・サスペンス！"
    },
    "sections": [
      {
        "number": 1,
        "title": "「狂飆」制作背景：「政法委」「掃黒除悪」とは",
        "components": [
          {"type": "bulleted text", "description": "Definitions of political terms"},
          {"type": "diagram", "description": "2 overlapping circles labeled 反腐敗 and 掃黒除悪"},
          {"type": "illustration", "description": "2 men facing each other in profile; 1 in a police uniform, 1 in a dark suit with a red tie"}
        ]
      },
      {
        "number": 2,
        "title": "「掃黒/反腐敗ドラマ」というジャンル",
        "components": [
          {"type": "illustration", "description": "Lineup of 4 characters (3 men, 1 woman) behind a red banner"},
          {"type": "checklist", "count": 3, "description": "Reasons for the hit, with green checkmarks"},
          {"type": "illustration", "description": "1 police officer pointing upwards with a speech bubble"}
        ]
      },
      {
        "number": 3,
        "title": "時代背景：急速な経済発展でGDPが約15倍",
        "components": [
          {"type": "chart", "chart_type": "{argument name=\"chart type\" default=\"line chart comparing two trends over time\"}", "description": "GDP comparison between China and Japan (1990-2022)"},
          {"type": "timeline", "count": 3, "description": "City evolution showing 3 stages: 1998 village, 2006 factories, 2020 modern high-rise city"}
        ]
      },
      {
        "number": 4,
        "title": "地方政府の権力関係：役職いろいろ",
        "components": [
          {"type": "flowchart", "topic": "{argument name=\"flowchart topic\" default=\"Local government power structure\"}", "description": "3x3 grid showing National, Provincial, and City levels across Party, Government, and Legal systems"},
          {"type": "illustration", "description": "1 man in a dark jacket looking forward, with text explaining his role"}
        ]
      }
    ],
    "footer": {
      "text": "背景を知ると、登場人物の言動や社会の動きがよりリアルに感じられます。「狂飆」の世界を、より深く楽しんでください！"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "综合信息图表说明表",
  "style": "{argument name=\"illustration style\" default=\"扁平矢量动漫风格\"}",
  "color_palette": "{argument name=\"color palette\" default=\"米色背景，搭配深棕色、红色和蓝色点缀\"}",
  "layout": {
    "header": {
      "tag": "中国电视剧《狂飙》观剧指南",
      "main_title": "{argument name=\"main title\" default=\"如何更深入地欣赏《狂飙》\"}",
      "subtitle": "了解作品背后的社会背景，让故事变得更深刻、更真实！",
      "top_right_badge": "善与恶、光与影交织的硬核悬疑剧！"
    },
    "sections": [
      {
        "number": 1,
        "title": "《狂飙》制作背景：什么是“政法委”与“扫黑除恶”",
        "components": [
          {"type": "bulleted text", "description": "政治术语定义"},
          {"type": "diagram", "description": "两个重叠的圆圈，分别标注为“反腐败”和“扫黑除恶”"},
          {"type": "illustration", "description": "两名男性的侧面相对形象；一人身穿警服，一人身穿深色西装并系红色领带"}
        ]
      },
      {
        "number": 2,
        "title": "“扫黑/反腐剧”这一类型",
        "components": [
          {"type": "illustration", "description": "4 名角色（3 男 1 女）站在红色横幅后的阵容"},
          {"type": "checklist", "count": 3, "description": "剧集走红的原因，配有绿色勾选标记"},
          {"type": "illustration", "description": "一名警察向上指并带有对话气泡"}
        ]
      },
      {
        "number": 3,
        "title": "时代背景：GDP 增长约 15 倍的经济飞速发展",
        "components": [
          {"type": "chart", "chart_type": "{argument name=\"chart type\" default=\"比较两个趋势随时间变化的折线图\"}", "description": "1990 年至 2022 年中国与日本的 GDP 对比"},
          {"type": "timeline", "count": 3, "description": "城市演变过程：1998 年村庄、2006 年工厂、2020 年现代化高楼城市"}
        ]
      },
      {
        "number": 4,
        "title": "地方政府权力关系：职务解析",
        "components": [
          {"type": "flowchart", "topic": "{argument name=\"flowchart topic\" default=\"地方政府权力结构\"}", "description": "3x3 网格，展示国家、省、市三级在党、政、法系统中的架构"},
          {"type": "illustration", "description": "一名身穿深色夹克的男子向前看，配有解释其角色的文字"}
        ]
      }
    ],
    "footer": {
      "text": "了解背景后，人物的言行与社会动态将显得更加真实。请尽情深入探索《狂飙》的世界吧！"
    }
  }
}

## 来源备注
- 源站作者：𝙵𝚊𝚕𓏲𓎨
- 源站 UUID：SMpx1H2Rla
- 源站分类：06_图文排版视觉传达
