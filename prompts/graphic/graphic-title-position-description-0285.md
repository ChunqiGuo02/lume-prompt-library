---
id: graphic-title-position-description-0285
title: "《出师表》文言文课文排版"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["语文", "课本", "九年级", "文言文", "出师表", "诸葛亮", "三国", "国风"]
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
  "type": "educational textbook page layout",
  "style": "clean typography, traditional Chinese aesthetic, soft beige background",
  "header": {
    "tag": "第六单元 · 古代文言文",
    "title": "{argument name=\"main title\" default=\"出师表\"}",
    "author": "{argument name=\"author info\" default=\"诸葛亮 〔三国 · 蜀汉〕\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "学习目标",
        "position": "top-right box",
        "count": 3,
        "description": "numbered learning objectives with a soft red background"
      },
      {
        "title": "课文",
        "position": "main left column",
        "count": 6,
        "description": "paragraphs of classical Chinese text with 14 superscript annotation numbers"
      },
      {
        "title": "注释",
        "position": "middle-right box below illustration",
        "count": 14,
        "description": "numbered glossary definitions matching the text superscripts"
      },
      {
        "title": "思考探究",
        "position": "bottom-left",
        "count": 2,
        "description": "numbered discussion questions"
      }
    ],
    "illustration": {
      "position": "middle-right",
      "description": "{argument name=\"illustration subject\" default=\"Zhuge Liang holding a feather fan, standing before an army with Han banners, ink wash painting style\"}"
    },
    "footer": {
      "page_number": "102",
      "book_info": "{argument name=\"textbook info\" default=\"语文 九年级 上册\"}"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "教育教材页面排版",
  "style": "简洁排版，中国传统美学，柔和米色背景",
  "header": {
    "tag": "第六单元 · 古代文言文",
    "title": "{argument name=\"main title\" default=\"出师表\"}",
    "author": "{argument name=\"author info\" default=\"诸葛亮 〔三国 · 蜀汉〕\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "学习目标",
        "position": "右上角方框",
        "count": 3,
        "description": "带有柔和红色背景的编号学习目标"
      },
      {
        "title": "课文",
        "position": "左侧主栏",
        "count": 6,
        "description": "包含 14 个上标注释编号的古文段落"
      },
      {
        "title": "注释",
        "position": "插图下方右侧方框",
        "count": 14,
        "description": "与文中上标对应的编号词汇解释"
      },
      {
        "title": "思考探究",
        "position": "左下角",
        "count": 2,
        "description": "编号讨论题"
      }
    ],
    "illustration": {
      "position": "中右侧",
      "description": "{argument name=\"illustration subject\" default=\"诸葛亮手持羽扇，立于汉军旗前，水墨画风格\"}"
    },
    "footer": {
      "page_number": "102",
      "book_info": "{argument name=\"textbook info\" default=\"语文 九年级 上册\"}"
    }
  }
}

## 来源备注
- 源站作者：WY
- 源站 UUID：f20B6ZigOa
- 源站分类：06_图文排版视觉传达
