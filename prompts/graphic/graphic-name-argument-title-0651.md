---
id: graphic-name-argument-title-0651
title: "成都美食手绘地图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: industrial-loft
tags: ["成都", "美食", "地图", "手绘", "水彩", "复古", "熊猫", "川菜"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
  "type": "illustrated map infographic",
  "style": "{argument name=\"art style\" default=\"watercolor and ink hand-drawn illustration on vintage parchment\"}",
  "title_section": {
    "text": "{argument name=\"city name\" default=\"成都\"} {argument name=\"map title\" default=\"吃货暴走地图\"}",
    "mascot": "cartoon red chili pepper wearing sunglasses and giving a thumbs up"
  },
  "border": "{argument name=\"border decoration\" default=\"vine of green leaves and red chili peppers\"}",
  "layout": {
    "background": "textured beige parchment paper with yellow roads, blue rivers, and green park areas",
    "sections": [
      {
        "title": "landmarks",
        "count": 6,
        "illustrations": ["traditional pavilion", "traditional monastery", "modern skyscraper with climbing panda", "tall TV tower", "traditional gate", "industrial buildings"],
        "labels": ["人民公园", "文殊院", "IFS", "339电视塔", "宽窄巷子", "东郊记忆"]
      },
      {
        "title": "food_spots",
        "count": 12,
        "illustrations": ["mapo tofu", "dumplings in chili oil", "skewers in pot", "sticky rice balls", "egg baking cake", "nine-grid hotpot", "sweet potato noodles", "cold skewers", "spicy mixed dish", "covered tea bowl", "ice jelly dessert", "spicy rabbit heads"],
        "labels": ["1 陈麻婆豆腐", "2 钟水饺", "3 春熙路", "4 宽窄巷子·三大炮", "5 建设路·叶婆婆蛋烘糕", "6 玉林路·小龙坎火锅", "7 香香巷·肥肠粉", "8 武侯祠大街·钵钵鸡", "9 东郊记忆·冒椒火辣", "10 人民公园·鹤鸣茶社", "11 锦里古街·冰粉", "12 双流老妈兔头"]
      },
      {
        "title": "图例",
        "position": "bottom-right",
        "count": 5,
        "items": ["red dot", "green house", "green tree", "blue line", "yellow double line"],
        "labels": ["美食地点", "地标景点", "公园绿地", "河流湖泊", "主要道路"]
      }
    ],
    "centerpiece": "giant panda sitting and eating bamboo",
    "bottom_right_extras": ["vintage compass rose with N, S, E, W", "disclaimer text '温馨提示：吃辣需谨慎，肠胃要保护~' with a red chili pepper icon"]
  }
}

## 中文译文（源站提供）
{
  "type": "手绘地图信息图",
  "style": "{argument name=\"art style\" default=\"复古羊皮纸上的水彩墨水手绘插画\"}",
  "title_section": {
    "text": "{argument name=\"city name\" default=\"成都\"} {argument name=\"map title\" default=\"吃货暴走地图\"}",
    "mascot": "戴着墨镜并竖起大拇指的卡通红辣椒"
  },
  "border": "{argument name=\"border decoration\" default=\"绿叶与红辣椒藤蔓\"}",
  "layout": {
    "background": "带有黄色道路、蓝色河流和绿色公园区域的纹理米色羊皮纸",
    "sections": [
      {
        "title": "地标建筑",
        "count": 6,
        "illustrations": ["传统凉亭", "传统寺院", "带有攀爬熊猫的现代摩天大楼", "高耸的电视塔", "传统牌坊", "工业建筑"],
        "labels": ["人民公园", "文殊院", "IFS", "339电视塔", "宽窄巷子", "东郊记忆"]
      },
      {
        "title": "美食地点",
        "count": 12,
        "illustrations": ["麻婆豆腐", "红油水饺", "冷锅串串", "三大炮", "蛋烘糕", "九宫格火锅", "肥肠粉", "钵钵鸡", "冒菜", "盖碗茶", "冰粉", "兔头"],
        "labels": ["1 陈麻婆豆腐", "2 钟水饺", "3 春熙路", "4 宽窄巷子·三大炮", "5 建设路·叶婆婆蛋烘糕", "6 玉林路·小龙坎火锅", "7 香香巷·肥肠粉", "8 武侯祠大街·钵钵鸡", "9 东郊记忆·冒椒火辣", "10 人民公园·鹤鸣茶社", "11 锦里古街·冰粉", "12 双流老妈兔头"]
      },
      {
        "title": "图例",
        "position": "右下角",
        "count": 5,
        "items": ["红点", "绿色建筑", "绿树", "蓝线", "黄色双线"],
        "labels": ["美食地点", "地标景点", "公园绿地", "河流湖泊", "主要道路"]
      }
    ],
    "centerpiece": "坐着吃竹子的大熊猫",
    "bottom_right_extras": ["带有东南西北方向的复古罗盘", "带有红辣椒图标的免责声明：'温馨提示：吃辣需谨慎，肠胃要保护~'"]
  }
}

## 来源备注
- 源站作者：皮皮特
- 源站 UUID：jIshrdxoEb
- 源站分类：06_图文排版视觉传达
