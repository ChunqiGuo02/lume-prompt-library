---
id: "graphic-name-argument-default-001"
title: "生成AI新闻报纸图片"
category: graphic
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["报纸", "新闻", "人工智能", "科技", "韩文", "写实", "印刷品", "三星"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
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
  "type": "photorealistic photograph of a printed newspaper",
  "style": "realistic paper texture, slightly angled top-down view, natural lighting",
  "header": {
    "left_logo": "SHINSEGAE DUTY FREE",
    "center_title": "{argument name=\"newspaper name\" default=\"한국경제\"}",
    "right_logo": "Myeongryun Jinsa Galbi",
    "date": "{argument name=\"date\" default=\"2026년 4월 23일 목요일\"}"
  },
  "headlines": {
    "main": "{argument name=\"main headline\" default=\"오픈AI, 차세대 모델 'Spud' 공개 코딩·사이버전 벤치마크 석권\"}",
    "sub": "New super app 'Codex' also launched... Will it be a game changer in the AI war?"
  },
  "layout": {
    "sections": [
      {
        "title": "center graphic",
        "position": "middle",
        "text": "Introducing {argument name=\"app name\" default=\"Codex\"} The Super App for Everyone",
        "ui_screens_count": 3,
        "ui_screens_labels": [
          "menu list with options like Write code and Analyze data",
          "analytics dashboard with a purple line chart",
          "code editor showing python fibonacci function"
        ]
      },
      {
        "title": "article columns",
        "position": "surrounding center graphic",
        "count": 3,
        "labels": [
          "left column with article text",
          "middle column under graphic",
          "right column with bullet points"
        ]
      },
      {
        "title": "bottom section",
        "position": "bottom",
        "headline": "{argument name=\"bottom headline\" default=\"뉴욕증시, AI 랠리에 일제 상승…나스닥 2.7% ↑\"}",
        "ad_box": "Dark blue box with text World's No. 1 Memory Semiconductor Company Samsung Electronics"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "印刷报纸的照片级真实感摄影",
  "style": "真实的纸张纹理，略带角度的俯视图，自然光效",
  "header": {
    "left_logo": "SHINSEGAE DUTY FREE",
    "center_title": "{argument name=\"newspaper name\" default=\"韩国经济\"}",
    "right_logo": "Myeongryun Jinsa Galbi",
    "date": "{argument name=\"date\" default=\"2026 年 4 月 23 日 星期四\"}"
  },
  "headlines": {
    "main": "{argument name=\"main headline\" default=\"OpenAI 发布下一代模型 'Spud'，横扫编码与网络战基准测试\"}",
    "sub": "全新超级应用 'Codex' 同步上线……它会成为 AI 战争中的游戏规则改变者吗？"
  },
  "layout": {
    "sections": [
      {
        "title": "中心图形",
        "position": "中间",
        "text": "隆重推出 {argument name=\"app name\" default=\"Codex\"}，面向所有人的超级应用",
        "ui_screens_count": 3,
        "ui_screens_labels": [
          "包含编写代码和数据分析等选项的菜单列表",
          "带有紫色折线图的分析仪表盘",
          "显示 Python 斐波那契函数的代码编辑器"
        ]
      },
      {
        "title": "文章栏",
        "position": "中心图形周围",
        "count": 3,
        "labels": [
          "带有文章正文的左栏",
          "图形下方的中间栏",
          "带有要点的右栏"
        ]
      },
      {
        "title": "底部区域",
        "position": "底部",
        "headline": "{argument name=\"bottom headline\" default=\"受 AI 涨势推动，纽约股市全线上扬……纳斯达克指数上涨 2.7%\"}",
        "ad_box": "深蓝色方框，文字内容为：全球第一存储半导体公司三星电子"
      }
    ]
  }
}

## 来源备注
- 源站作者：ハカセ アイ(Ai-Hakase)🐾最新トレンドＡＩのためのＸ 🐾
- 源站 UUID：GejA8Rbxzd
- 源站分类：03_创意广告品牌设计
