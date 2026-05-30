---
id: "architecture-text-the-argument-001"
title: "蜘蛛侠漫画页面布局"
category: architecture
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["蜘蛛侠", "漫画", "超级英雄", "纽约", "黄昏", "责任", "英雄", "都市"]
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
  "type": "comic book page layout",
  "header": {
    "title": "{argument name=\"main title\" default=\"the AMAZING SPIDER-MAN\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"NO SMALL CHOICES\"}",
    "part": "PART ONE",
    "credits": [
      "ZEB WELLS WRITER",
      "JOHN ROMITA JR. PENCILS",
      "KLAUS JANSON INKS",
      "BRITTANY PEZZILLO COLORS",
      "VC'S JOE SABINO LETTERS"
    ]
  },
  "panels": [
    {
      "id": 1,
      "position": "top row",
      "visual": "{argument name=\"hero description\" default=\"superhero in red and blue suit with web patterns and spider logo\"} crouching on a rooftop overlooking a city skyline at sunset. Includes a right-side inset panel showing a close-up of the masked face.",
      "text_boxes": 3,
      "text_content": [
        "NEW YORK NEVER STOPS.",
        "AND SOME DAYS IT FEELS LIKE NEITHER DO I.",
        "BUT TODAY... I PAUSED."
      ]
    },
    {
      "id": 2,
      "position": "second row",
      "visual": "{argument name=\"civilian description\" default=\"young man with brown hair\"} indoors, looking at a smartphone, holding a mug reading 'WORLD'S OKAYEST SCIENTIST'.",
      "text_boxes": 2,
      "speech_bubbles": 3,
      "text_content": [
        "CITYWIDE OUTAGE AVERTED THANKS TO EARLY RESPONSE BY LOCAL HEROES.",
        "--CHANNEL 5.",
        "\"LOCAL HEROES.\"",
        "THAT'S... NICE.",
        "BUT SOME PEOPLE DON'T GET HEADLINES."
      ]
    },
    {
      "id": 3,
      "position": "third row",
      "layout": "diagonally split into 3 sub-scenes",
      "visuals": [
        "young man walking in a city crowd",
        "sepia-toned memory of an older man smiling",
        "superhero swinging on a web"
      ],
      "text_boxes": 4,
      "text_content": [
        "MY UNCLE BEN USED TO SAY:",
        "\"{argument name=\"famous quote\" default=\"WITH GREAT POWER COMES GREAT RESPONSIBILITY.\"}\"",
        "I THINK ABOUT THAT EVERY DAY.",
        "BEING SPIDER-MAN ISN'T JUST ABOUT STOPPING THE BIG THREATS."
      ]
    },
    {
      "id": 4,
      "position": "fourth row, left",
      "visual": "superhero shooting a web, swinging into a chaotic street with civilians running from a fire/explosion.",
      "speech_bubbles": 1,
      "text_boxes": 1,
      "text_content": [
        "ON YOUR LEFT!",
        "IT'S ABOUT THE PEOPLE."
      ]
    },
    {
      "id": 5,
      "position": "fourth row, right",
      "visual": "close-up of a young Black girl smiling at the superhero.",
      "speech_bubbles": 1,
      "text_boxes": 1,
      "text_content": [
        "THANK YOU, SPIDER-MAN!",
        "ALWAYS."
      ]
    },
    {
      "id": 6,
      "position": "bottom row",
      "visual": "silhouette of the superhero sitting on a rooftop water tower at dusk.",
      "text_boxes": 2,
      "text_content": [
        "THE CITY NEEDS HOPE.",
        "AND AS LONG AS I CAN SWING, I'LL BE THERE."
      ],
      "footer_text": "TO BE CONTINUED!"
    }
  ]
}

## 中文译文（源站提供）
{
  "type": "漫画书页面布局",
  "style": "现代美式超级英雄漫画，细腻的墨线与色彩，电影感光影",
  "global_elements": {
    "title_logo": "{argument name=\"comic title\" default=\"the AMAZING SPIDER-MAN\"}",
    "subtitle": "没有小选择 第一部分",
    "credits": [
      "ZEB WELLS 编剧",
      "JOHN ROMITA JR. 铅笔稿",
      "KLAUS JANSON 墨线",
      "BRITTANY PEZZILLO 上色",
      "VC'S JOE SABINO 字体设计"
    ],
    "hero_design": "{argument name=\"hero description\" default=\"spider-themed superhero in a red and blue suit with web patterns and large white eye lenses\"}",
    "civilian_design": "{argument name=\"civilian description\" default=\"young handsome man with brown hair wearing a green jacket and white t-shirt\"}"
  },
  "layout": {
    "rows": 5,
    "total_panels": 9,
    "panels": [
      {
        "position": "第 1 行，左侧主图",
        "scene": "英雄蹲在屋顶边缘，俯瞰日落时分的城市",
        "text_boxes": 2,
        "text_content": [
          "纽约从不停歇。",
          "有时候我觉得，我也一样。"
        ]
      },
      {
        "position": "第 1 行，右侧插图",
        "scene": "英雄面具脸部的特写镜头",
        "text_boxes": 1,
        "text_content": [
          "但今天……我停了下来。"
        ]
      },
      {
        "position": "第 2 行，全宽",
        "scene": "平民身份的他拿着一个写着“世界最还行的科学家”的马克杯，在凌乱的公寓里看着智能手机",
        "text_boxes": 5,
        "text_content": [
          "多亏了当地英雄的及时响应，全市范围的停电已恢复。",
          "——5 号频道。",
          "‘当地英雄。’",
          "那真是……太好了。",
          "但有些人却无法登上头条。"
        ]
      },
      {
        "position": "第 3 行，左侧倾斜",
        "scene": "平民走在拥挤的城市街道上",
        "text_boxes": 2,
        "text_content": [
          "本叔叔曾说：",
          "{argument name=\"famous quote\" default=\"'WITH GREAT POWER COMES GREAT RESPONSIBILITY.'\"}"
        ]
      },
      {
        "position": "第 3 行，中央倾斜",
        "scene": "一位面带微笑、灰发、穿着背心打领带的老人肖像",
        "text_boxes": 1,
        "text_content": [
          "我每天都会想起这句话。"
        ]
      },
      {
        "position": "第 3 行，右侧倾斜",
        "scene": "英雄在城市中荡着蛛丝穿行",
        "text_boxes": 1,
        "text_content": [
          "成为蜘蛛侠不仅仅是为了阻止那些巨大的威胁。"
        ]
      },
      {
        "position": "第 4 行，左侧",
        "scene": "英雄动态地降落在混乱的街道场景中，平民正从火灾中逃离",
        "speech_bubbles": 1,
        "text_boxes": 1,
        "text_content": [
          "闪开！",
          "重点是守护人们。"
        ]
      },
      {
        "position": "第 4 行，右侧",
        "scene": "英雄与一位面带微笑、留着卷发的黑人小女孩交谈的特写",
        "speech_bubbles": 2,
        "text_content": [
          "谢谢你，蜘蛛侠！",
          "随时效劳。"
        ]
      },
      {
        "position": "第 5 行，全宽",
        "scene": "黄昏时分，英雄坐在屋顶上俯瞰城市天际线的剪影",
        "text_boxes": 2,
        "floating_text": 1,
        "text_content": [
          "这座城市需要希望。",
          "只要我还能荡起蛛丝，我就永远会在那里。",
          "{argument name=\"ending text\" default=\"TO BE CONTINUED!\"}"
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：Hbtt
- 源站 UUID：4sOyY1FVwv
- 源站分类：06_图文排版视觉传达
