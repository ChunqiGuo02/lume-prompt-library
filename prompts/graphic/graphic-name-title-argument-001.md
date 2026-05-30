---
id: "graphic-name-title-argument-001"
title: "韩国经济报纸头版排版"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["报纸", "新闻", "科技", "人工智能", "编码", "半导体", "股市", "广告"]
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
  "type": "photograph of a printed newspaper front page",
  "style": "photorealistic, natural lighting, slightly angled perspective, printed on textured newsprint paper",
  "header": {
    "left_ad": "SHINSEGAE DUTY FREE logo",
    "title": "{argument name=\"newspaper name\" default=\"한국경제\"}",
    "right_ad": "명륜진사갈비 logo with a small image of meat",
    "date_and_info": "{argument name=\"publication date\" default=\"2026년 4월 23일 목요일\"}"
  },
  "headlines": {
    "main": "{argument name=\"main headline\" default=\"오픈AI, 차세대 모델 'Spud' 공개 코딩·사이버전 벤치마크 석권\"}",
    "sub": "신규 슈퍼앱 'Codex'도 출시… “AI 전쟁” 판도 바꿀 게임 체인저 될까"
  },
  "layout": {
    "centerpiece": {
      "type": "promotional graphic",
      "title_text": "Introducing {argument name=\"app name\" default=\"Codex\"} The Super App for Everyone",
      "visuals": "3 smartphones displaying dark mode UI",
      "phone_1": "left phone showing a feature menu list",
      "phone_2": "middle phone showing an analytics line chart",
      "phone_3": "right phone showing a code editor with a python script"
    },
    "sections": [
      {
        "title": "left column",
        "position": "mid-left",
        "count": 2,
        "labels": ["introductory article text", "코딩 벤치마크 모두 1위"]
      },
      {
        "title": "right column",
        "position": "mid-right",
        "count": 1,
        "labels": ["사이버전 벤치마크도 압승"]
      },
      {
        "title": "bottom left article",
        "position": "bottom-left",
        "count": 1,
        "labels": ["뉴욕증시, AI 랠리에 일제 상승…나스닥 2.7% ↑"]
      },
      {
        "title": "bottom right ad",
        "position": "bottom-right",
        "count": 1,
        "labels": ["{argument name=\"bottom ad text\" default=\"세계 1위 메모리 반도체 기업 삼성전자\"}"]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "印刷报纸头版的照片",
  "style": "照片级逼真，自然光，略带角度的透视，印刷在有纹理的新闻纸上",
  "header": {
    "left_ad": "SHINSEGAE DUTY FREE 标志",
    "title": "{argument name=\"newspaper name\" default=\"韩国经济\"}",
    "right_ad": "明伦进士排骨 (명륜진사갈비) 标志及肉类小图",
    "date_and_info": "{argument name=\"publication date\" default=\"2026 年 4 月 23 日 星期四\"}"
  },
  "headlines": {
    "main": "{argument name=\"main headline\" default=\"OpenAI 发布下一代模型 'Spud'，横扫编码与网络战基准测试\"}",
    "sub": "同步推出全新超级应用 'Codex'……能否成为改变“AI 战争”格局的游戏规则改变者？"
  },
  "layout": {
    "centerpiece": {
      "type": "宣传图",
      "title_text": "隆重推出 {argument name=\"app name\" default=\"Codex\"}，面向所有人的超级应用",
      "visuals": "3 部显示深色模式 UI 的智能手机",
      "phone_1": "左侧手机显示功能菜单列表",
      "phone_2": "中间手机显示分析折线图",
      "phone_3": "右侧手机显示带有 Python 脚本的代码编辑器"
    },
    "sections": [
      {
        "title": "左侧专栏",
        "position": "中左",
        "count": 2,
        "labels": ["导语文章文本", "编码基准测试全线第一"]
      },
      {
        "title": "右侧专栏",
        "position": "中右",
        "count": 1,
        "labels": ["网络战基准测试同样大获全胜"]
      },
      {
        "title": "左下角文章",
        "position": "左下",
        "count": 1,
        "labels": ["纽约股市受 AI 涨势推动集体上涨……纳斯达克指数上涨 2.7% ↑"]
      },
      {
        "title": "右下角广告",
        "position": "右下",
        "count": 1,
        "labels": ["{argument name=\"bottom ad text\" default=\"全球第一存储半导体企业三星电子\"}"]
      }
    ]
  }
}

## 来源备注
- 源站作者：CHOI
- 源站 UUID：MUwKPHHFZE
- 源站分类：06_图文排版视觉传达
