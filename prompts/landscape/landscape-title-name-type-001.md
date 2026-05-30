---
id: "landscape-title-name-type-001"
title: "洞石AI音乐人计划宣传海报"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["赛博朋克", "霓虹", "科技", "未来", "紫色", "深蓝", "音乐", "AI"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:16"
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
  "type": "promotional infographic poster",
  "style": "{argument name=\"color theme\" default=\"neon cyberpunk dark blue and purple\"}, futuristic tech vibe, glowing UI elements",
  "header": {
    "main_title": "{argument name=\"main title\" default=\"洞石 AI 音乐人计划\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"助力 AI 创作者实现 发行、签约与商业化\"}",
    "illustration": "Back view of a person wearing headphones sitting at a desk with a computer showing a digital audio workstation (DAW) and a MIDI keyboard, facing a glowing concert crowd. The text 'AI MUSIC' is on the back of their jacket."
  },
  "layout": {
    "sections": [
      {
        "title": "{argument name=\"support section title\" default=\"洞石为 AI 音乐人提供完整成长支持\"}",
        "type": "2x2 grid of support cards",
        "count": 4,
        "cards": [
          { "number": "01", "icon": "glowing 3D music note on a pedestal", "title": "高倍口发行支持", "description": "上线全球 100+ 音乐平台 享受优质收益结算通道" },
          { "number": "02", "icon": "glowing 3D megaphone", "title": "百万推广资源扶持", "description": "100W+ 专项推广预算 让优秀作品被更多人听见" },
          { "number": "03", "icon": "glowing 3D document with copyright symbol", "title": "商业合作与版权支持", "description": "正规版权采样 / 翻唱授权 专业团队助力作品商业化运营" },
          { "number": "04", "icon": "glowing 3D microphone and star", "title": "签约孵化通道", "description": "进入长期培养与签约体系 享受专项签约资金支持" }
        ]
      },
      {
        "title": "洞石音乐联合发起",
        "type": "partner logos box",
        "count": 3,
        "partners": [
          { "logo": "purple play button triangle", "name": "谱乐 AI" },
          { "logo": "orange swirl flower", "name": "海葵音乐" },
          { "logo": "pink star", "name": "海星音乐" }
        ],
        "subtext": "国内领先 AI 音乐平台 X 国内最大的版权发行资源 打造 AI 音乐时代的新型音乐厂牌"
      },
      {
        "title": "三大参与通道",
        "type": "horizontal row of pill buttons",
        "count": 3,
        "buttons": [
          { "color": "purple", "icon": "music note", "label": "原创出道季" },
          { "color": "blue", "icon": "soundwave", "label": "爆款改编季" },
          { "color": "pink", "icon": "star", "label": "精英直签" }
        ]
      },
      {
        "type": "footer call to action",
        "elements": [
          { "type": "QR code", "position": "left", "details": "white square QR code with a purple play button in the center" },
          { "type": "text", "position": "center", "content": "{argument name=\"call to action text\" default=\"扫码加入 洞石 AI 音乐人计划\"}", "subtext": "开启你的 AI 音乐职业发展之路" },
          { "type": "graphic", "position": "right", "details": "glowing pink soundwave over a vinyl record" }
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "宣传信息图海报",
  "theme": "赛博朋克霓虹 AI 音乐，深色背景，发光的紫/蓝/粉色调",
  "header": {
    "title": "{argument name=\"main title\" default=\"YouMind AI 音乐人计划\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"助力 AI 创作者实现发行、签约与商业化\"}",
    "visual": "音乐制作人背影，佩戴耳机坐在桌前，双显示器显示 DAW 界面，配有 MIDI 键盘，夹克上印有发光的 'AI MUSIC' 字样，背景为演唱会人群"
  },
  "layout": {
    "sections": [
      {
        "title": "{argument name=\"features section title\" default=\"YouMind 为 AI 音乐人提供完整成长支持\"}",
        "count": 4,
        "items": [
          {"label": "01 高倍口发行支持", "icon": "发光的 3D 音符"},
          {"label": "02 百万推广资源扶持", "icon": "发光的 3D 扩音器"},
          {"label": "03 商业合作与版权支持", "icon": "发光的 3D 文档"},
          {"label": "04 签约孵化通道", "icon": "发光的 3D 麦克风与星星"}
        ]
      },
      {
        "title": "{argument name=\"partners section title\" default=\"YouMind 音乐联合发起\"}",
        "count": 3,
        "labels": ["谱乐 AI", "海葵音乐", "海星音乐"]
      },
      {
        "title": "三大参与通道",
        "count": 3,
        "buttons": ["原创出道季", "爆款改编季", "精英直签"]
      },
      {
        "type": "footer",
        "text": "{argument name=\"call to action\" default=\"扫码加入 YouMind AI 音乐人计划\"}",
        "elements": ["左侧二维码", "右侧发光的黑胶唱片"]
      }
    ]
  }
}

## 来源备注
- 源站作者：PM也有春天
- 源站 UUID：bFNqX78fyl
- 源站分类：06_图文排版视觉传达
