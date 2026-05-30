---
id: "portrait-character-title-content-001"
title: "Neco-Arc科普英语梗图"
category: portrait
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["猫娘", "游戏王", "梗图", "英语", "鱼", "Q版", "萌系", "卡牌"]
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
  "type": "anime-style educational meme infographic",
  "character": {
    "name": "{argument name=\"character name\" default=\"Neco-Arc\"}",
    "appearance": "chibi anime cat-girl, blonde hair, cat ears, big eyes, simple cartoonish features",
    "total_illustrations": 13
  },
  "theme": {
    "topic": "{argument name=\"main topic\" default=\"GHOTI = FISH\"}",
    "reference": "{argument name=\"card game\" default=\"Yu-Gi-Oh!\"} card {argument name=\"card name\" default=\"Ghoti of the Deep Beyond\"}"
  },
  "layout": {
    "background": "starry night sky behind header, white panels with blue borders",
    "header": {
      "title": "Neco-Arc's English Tip Corner: GHOTI = FISH AND THIS CARD PROVES IT!!!!",
      "elements": ["character pointing with stick", "speech bubble: 'NYA~! TODAY WE LEARN A SUPREME ENGLISH SECRET!!'"]
    },
    "sections": [
      {
        "row": 1,
        "count": 3,
        "panels": [
          {"title": "WHAT IS 'GHOTI'?", "content": "text, happy character"},
          {"title": "HOW TO PRONOUNCE 'GHOTI'", "content": "phonetic breakdown of GH, O, TI, small character, 1 fish"},
          {"title": "BUT Neco-Arc... WHY IS GHOTI FISH?", "content": "text, laughing character"}
        ]
      },
      {
        "row": 2,
        "title": "AND NOW... THE ULTIMATE PROOF!!!",
        "count": 4,
        "panels": [
          {"type": "card mockup", "content": "detailed trading card showing a cosmic space fish"},
          {"title": "MEET: GHOTI OF THE DEEP BEYOND!!!", "content": "bullet points, starry-eyed character, 1 fish"},
          {"title": "SEE? EVEN YU-GI-OH! AGREES!!", "content": "character in graduation cap pointing"},
          {"title": "MORE PROOF (NYA EDITION)", "content": "bullet points, shocked character, 1 fish"}
        ]
      },
      {
        "row": 3,
        "type": "reaction strip",
        "count": 5,
        "panels": [
          {"title": "WHEN SOMEONE SAYS ENGLISH ISN'T WEIRD...", "content": "confused character with question marks"},
          {"title": "ENGLISH TEACHERS BE LIKE:", "content": "character with glasses at chalkboard"},
          {"title": "YU-GI-OH! PLAYERS BE LIKE:", "content": "character holding 4 trading cards"},
          {"title": "ACTUAL FISH BE LIKE:", "content": "1 blue fish illustration"},
          {"title": "SPELLING ENGLISH BE LIKE:", "content": "crying character"}
        ]
      },
      {
        "row": 4,
        "count": 3,
        "panels": [
          {"title": "BONUS NYA FACTS!", "content": "character with sunglasses"},
          {"title": "REMEMBER! GHOTI = FISH", "content": "summary text, 1 fish"},
          {"title": "THANK YOU FOR LEARNING WITH NECO-ARC NYA~!!", "content": "waving character"}
        ]
      }
    ],
    "footer": "ENGLISH IS WEIRD. YU-GI-OH! IS REAL. GHOTI IS FISH. LIFE IS NYA~!"
  }
}

## 中文译文（源站提供）
{
  "type": "动漫风格教育模因信息图",
  "character": {
    "name": "{argument name=\"character name\" default=\"Neco-Arc\"}",
    "appearance": "Q 版动漫猫娘，金发，猫耳，大眼睛，简洁的卡通特征",
    "total_illustrations": 13
  },
  "theme": {
    "topic": "{argument name=\"main topic\" default=\"GHOTI = FISH\"}",
    "reference": "{argument name=\"card game\" default=\"Yu-Gi-Oh!\"} 卡牌 {argument name=\"card name\" default=\"Ghoti of the Deep Beyond\"}"
  },
  "layout": {
    "background": "标题后方为星空背景，白色画格配蓝色边框",
    "header": {
      "title": "Neco-Arc 的英语小课堂：GHOTI = FISH，这张卡就是证明！！！！",
      "elements": ["角色用棍子指着", "对话气泡：'喵～！今天我们要学习一个英语终极秘密！！'"]
    },
    "sections": [
      {
        "row": 1,
        "count": 3,
        "panels": [
          {"title": "什么是 'GHOTI'？", "content": "文字，开心的角色"},
          {"title": "'GHOTI' 怎么读", "content": "GH、O、TI 的发音拆解，小角色，1 条鱼"},
          {"title": "但是 Neco-Arc... 为什么 GHOTI 是鱼？", "content": "文字，大笑的角色"}
        ]
      },
      {
        "row": 2,
        "title": "现在... 终极证明！！！",
        "count": 4,
        "panels": [
          {"type": "卡牌模型", "content": "展示宇宙深海鱼的详细集换式卡牌"},
          {"title": "登场：深渊之海的 Ghoti！！！", "content": "要点列表，星星眼角色，1 条鱼"},
          {"title": "看吧？连 Yu-Gi-Oh! 都认同！！", "content": "戴着学士帽指着卡牌的角色"},
          {"title": "更多证明（喵版）", "content": "要点列表，震惊的角色，1 条鱼"}
        ]
      },
      {
        "row": 3,
        "type": "反应条漫",
        "count": 5,
        "panels": [
          {"title": "当有人说英语不奇怪时...", "content": "满头问号的困惑角色"},
          {"title": "英语老师：", "content": "戴眼镜在黑板前的角色"},
          {"title": "Yu-Gi-Oh! 玩家：", "content": "拿着 4 张集换式卡牌的角色"},
          {"title": "真正的鱼：", "content": "1 条蓝色鱼的插图"},
          {"title": "英语拼写：", "content": "哭泣的角色"}
        ]
      },
      {
        "row": 4,
        "count": 3,
        "panels": [
          {"title": "喵喵小知识！", "content": "戴墨镜的角色"},
          {"title": "记住！GHOTI = FISH", "content": "总结文字，1 条鱼"},
          {"title": "感谢与 Neco-Arc 一起学习喵～！！", "content": "挥手的角色"}
        ]
      }
    ],
    "footer": "英语很奇怪。Yu-Gi-Oh! 是真的。GHOTI 是鱼。生活就是喵～！"
  }
}

## 来源备注
- 源站作者：Senb0n22a
- 源站 UUID：ApYhsPT1Vg
- 源站分类：06_图文排版视觉传达
