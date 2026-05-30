---
id: graphic-text-position-name-0733
title: "日本八卦杂志封面生成"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["日杂", "杂志", "周刊", "八卦", "娱乐", "日系", "街拍", "深夜"]
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
  "type": "Japanese tabloid magazine cover",
  "magazine_header": {
    "title": "{argument name=\"magazine name\" default=\"週刊LUMINA\"}",
    "issue_date": "4/25号",
    "price": "¥450"
  },
  "main_photo": {
    "subject": "{argument name=\"subject description\" default=\"young Japanese woman looking back in surprise, wearing a denim jacket over a white top\"}",
    "setting": "nighttime street with bokeh lights",
    "style": "paparazzi flash photography style"
  },
  "layout": {
    "headlines": [
      { "position": "top left banner", "text": "{argument name=\"top banner text\" default=\"独占スクープ!!\"}", "color": "white text on red background" },
      { "position": "left vertical", "text": "{argument name=\"main headline left\" default=\"深夜の目撃情報！\"}", "color": "yellow text with black outline" },
      { "position": "right vertical", "text": "{argument name=\"main headline right\" default=\"ついに発覚!?\"}", "color": "red text with white outline" },
      { "position": "bottom center stacked 1", "text": "衝撃の瞬間を激写！", "color": "yellow text on black background" },
      { "position": "bottom center stacked 2", "text": "関係者が語る真相", "color": "white text on red background" },
      { "position": "bottom center stacked 3", "text": "禁断の裏側を迫ろ！", "color": "yellow text on black background" },
      { "position": "bottom left banner", "text": "スクープ袋とじ", "color": "white text on red background" }
    ],
    "inset_photos": {
      "count": 3,
      "details": [
        { "position": "top right", "description": "woman looking down holding her head", "label": "極秘写真入手!!" },
        { "position": "bottom left", "description": "woman talking to a man with glasses", "label": "親密交際発覚か!?" },
        { "position": "bottom right", "description": "woman and man seen from the side", "label": "熱愛発覚 入手!" }
      ]
    },
    "footer": {
      "elements": ["barcode", "188", "963469 195449"]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "日本小报杂志封面",
  "magazine_header": {
    "title": "{argument name=\"magazine name\" default=\"週刊LUMINA\"}",
    "issue_date": "4 月 25 日号",
    "price": "¥450"
  },
  "main_photo": {
    "subject": "{argument name=\"subject description\" default=\"一位年轻日本女性惊讶回头，身穿白色上衣外搭牛仔外套\"}",
    "setting": "带有焦外成像灯光的夜间街道",
    "style": "狗仔队闪光灯摄影风格"
  },
  "layout": {
    "headlines": [
      { "position": "左上角横幅", "text": "{argument name=\"top banner text\" default=\"独占スクープ!!\"}", "color": "红色背景上的白色文字" },
      { "position": "左侧纵向", "text": "{argument name=\"main headline left\" default=\"深夜の目撃情報！\"}", "color": "带黑色描边的黄色文字" },
      { "position": "右侧纵向", "text": "{argument name=\"main headline right\" default=\"ついに発覚!?\"}", "color": "带白色描边的红色文字" },
      { "position": "底部中心堆叠 1", "text": "冲击瞬间抓拍！", "color": "黑色背景上的黄色文字" },
      { "position": "底部中心堆叠 2", "text": "相关人士讲述真相", "color": "红色背景上的白色文字" },
      { "position": "底部中心堆叠 3", "text": "揭露禁忌的幕后！", "color": "黑色背景上的黄色文字" },
      { "position": "左下角横幅", "text": "独家内幕报道", "color": "红色背景上的白色文字" }
    ],
    "inset_photos": {
      "count": 3,
      "details": [
        { "position": "右上角", "description": "女性低头抱头", "label": "极秘照片入手!!" },
        { "position": "左下角", "description": "女性与一名戴眼镜的男子交谈", "label": "亲密交往曝光!?" },
        { "position": "右下角", "description": "从侧面拍摄的男女", "label": "热恋曝光 入手!" }
      ]
    },
    "footer": {
      "elements": ["条形码", "188", "963469 195449"]
    }
  }
}

## 来源备注
- 源站作者：aichof(アイチョフ)
- 源站 UUID：P3rQPt1fYg
- 源站分类：06_图文排版视觉传达
