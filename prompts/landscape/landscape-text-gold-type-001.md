---
id: "landscape-text-gold-type-001"
title: "日本弹珠机店宣传海报"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["日式", "华丽", "促销", "开业", "金色", "红色", "闪光", "美女"]
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
  "type": "Japanese pachinko parlor promotional poster",
  "style": "hyper-flashy, explosive golden starbursts, red background, floating gold confetti, lens flares, high contrast, 3D metallic text",
  "subject": "{argument name=\"model description\" default=\"smiling young Japanese woman with brown hair and bangs wearing a white sparkly dress\"}",
  "layout": {
    "top_left": {
      "type": "massive 3D text",
      "text": "{argument name=\"main title\" default=\"新台入替\"}",
      "style": "gold and red metallic"
    },
    "top_right": {
      "type": "vertical banner",
      "text": "本日堂々オープン!",
      "style": "red ribbon with gold text"
    },
    "middle_left": {
      "type": "time announcement",
      "text_line_1": "{argument name=\"opening time\" default=\"AM 9:00\"}",
      "text_line_2": "OPEN!!",
      "style": "gold/yellow top line, blue/white gradient bottom line"
    },
    "middle_lower_stats": {
      "type": "information grid",
      "count": 5,
      "elements": [
        { "label": "Date", "text": "{argument name=\"date\" default=\"4.10\"}", "subtext": "水曜日", "style": "red and gold box" },
        { "label": "Pachinko count", "text": "パチンコ", "subtext": "120台", "style": "red box" },
        { "label": "Slot count", "text": "スロット", "subtext": "80台", "style": "blue box" },
        { "label": "Total count", "text": "220台", "subtext": "OVER", "style": "gold circular badge" },
        { "label": "Variety corner", "text": "バラエティコーナー 20台", "style": "green horizontal banner" }
      ]
    },
    "bottom": {
      "type": "massive 3D catchphrase",
      "text": "{argument name=\"catchphrase\" default=\"超絶激アツ!!\"}",
      "style": "gold metallic, explosive background"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "日本弹珠机店宣传海报",
  "style": "超炫酷、爆炸式金色星芒、红色背景、漂浮的金色纸屑、镜头光晕、高对比度、3D 金属质感文字",
  "subject": "{argument name=\"model description\" default=\"面带微笑、留着棕色齐刘海的年轻日本女性，身穿闪亮白色连衣裙\"}",
  "layout": {
    "top_left": {
      "type": "大型 3D 文字",
      "text": "{argument name=\"main title\" default=\"新台入替\"}",
      "style": "金红色金属质感"
    },
    "top_right": {
      "type": "竖向横幅",
      "text": "本日堂々オープン!",
      "style": "带有金色文字的红色丝带"
    },
    "middle_left": {
      "type": "营业时间公告",
      "text_line_1": "{argument name=\"opening time\" default=\"AM 9:00\"}",
      "text_line_2": "OPEN!!",
      "style": "金色/黄色顶行，蓝/白色渐变底行"
    },
    "middle_lower_stats": {
      "type": "信息网格",
      "count": 5,
      "elements": [
        { "label": "日期", "text": "{argument name=\"date\" default=\"4.10\"}", "subtext": "水曜日", "style": "红金配色方框" },
        { "label": "弹珠机数量", "text": "パチンコ", "subtext": "120台", "style": "红色方框" },
        { "label": "老虎机数量", "text": "スロット", "subtext": "80台", "style": "蓝色方框" },
        { "label": "总数", "text": "220台", "subtext": "OVER", "style": "金色圆形徽章" },
        { "label": "多样化专区", "text": "バラエティコーナー 20台", "style": "绿色横向横幅" }
      ]
    },
    "bottom": {
      "type": "大型 3D 宣传标语",
      "text": "{argument name=\"catchphrase\" default=\"超絶激アツ!!\"}",
      "style": "金色金属质感，爆炸式背景"
    }
  }
}

## 来源备注
- 源站作者：エンジニアM168
- 源站 UUID：DjpsTBEPf1
- 源站分类：06_图文排版视觉传达
