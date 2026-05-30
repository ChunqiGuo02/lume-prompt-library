---
id: "landscape-name-title-argument-003"
title: "猫咪全品种科普图鉴"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["猫咪", "科普", "图鉴", "宠物", "品种", "萌宠", "养猫", "知识"]
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
  "type": "comprehensive breed encyclopedia infographic",
  "header": {
    "title": "{argument name=\"main title\" default=\"猫咪全品种科普图鉴\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"涵盖全球所有猫咪品种 | 名称 & 性格特点\"}",
    "decorations": ["paw prints"]
  },
  "layout": {
    "style": "grid-based chart with horizontal color-coded bands",
    "columns": 9
  },
  "sections": [
    {
      "title": "{argument name=\"category 1 name\" default=\"短毛猫\"}",
      "background_color": "light green",
      "total_cats": 18,
      "rows": 2,
      "labels": ["美国短毛猫", "英国短毛猫", "欧洲短毛猫", "中国狸花猫", "暹罗猫", "缅甸猫", "阿比西尼亚猫", "孟加拉猫", "埃及猫", "奥西猫", "东方短毛猫", "柯尼斯卷毛猫", "德文卷毛猫", "斯芬克斯猫", "彼得秃猫", "美国刚毛猫", "日本短尾猫", "曼岛猫"],
      "item_format": "cat portrait + breed name + personality description"
    },
    {
      "title": "{argument name=\"category 2 name\" default=\"长毛猫\"}",
      "background_color": "light pink",
      "total_cats": 18,
      "rows": 2,
      "labels": ["波斯猫", "缅因猫", "布偶猫", "挪威森林猫", "西伯利亚猫", "土耳其安哥拉猫", "土耳其梵猫", "伯曼猫", "美国长毛猫", "金吉拉猫", "喜马拉雅猫", "苏格兰折耳长毛猫", "塞尔凯克卷毛猫", "拉邦猫", "索马里猫", "巴厘猫", "东方长毛猫", "狮子猫"],
      "item_format": "cat portrait + breed name + personality description"
    },
    {
      "title": "{argument name=\"category 3 name\" default=\"稀有及特色猫\"}",
      "background_color": "light yellow",
      "total_cats": 18,
      "rows": 2,
      "labels": ["布里蒂猫", "俄罗斯蓝猫", "沙特尔猫", "哈瓦那棕猫", "新加坡猫", "孟买猫", "斯诺鞋猫", "玩具虎猫", "威尔士猫", "美国卷耳猫", "苏格兰折耳猫(短毛)", "异国短毛猫", "加菲猫", "美国反耳猫", "薮猫(萨凡纳猫)", "狞猫(卡拉卡尔)", "狮子猫(大型)", "豹猫(亚洲豹猫)"],
      "item_format": "cat portrait + breed name + personality description"
    },
    {
      "title": "无毛及卷毛猫",
      "background_color": "light blue",
      "total_cats": 9,
      "rows": 1,
      "labels": ["顿斯科伊猫", "彼得秃猫(巴尔德)", "精灵猫(双耳卷)", "加拿大无毛猫", "乌克兰勒夫科伊猫", "明斯金猫(短腿无毛)", "拉邦猫(卷毛无毛)", "德文卷毛猫", "柯尼斯卷毛猫"],
      "item_format": "cat portrait + breed name + personality description"
    }
  ],
  "footer": {
    "left_section": {
      "title": "小贴士:",
      "content": "3 numbered bullet points with pet care advice"
    },
    "right_section": {
      "title": "图例说明:",
      "content": "4 color-coded legend boxes matching the section backgrounds"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "猫咪全品种科普图鉴",
  "header": {
    "title": "{argument name=\"main title\" default=\"猫咪全品种科普图鉴\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"涵盖全球所有猫咪品种 | 名称 & 性格特点\"}",
    "decorations": ["猫爪印"]
  },
  "layout": {
    "style": "基于网格的图表，配有水平色块分区",
    "columns": 9
  },
  "sections": [
    {
      "title": "{argument name=\"category 1 name\" default=\"短毛猫\"}",
      "background_color": "浅绿色",
      "total_cats": 18,
      "rows": 2,
      "labels": ["美国短毛猫", "英国短毛猫", "欧洲短毛猫", "中国狸花猫", "暹罗猫", "缅甸猫", "阿比西尼亚猫", "孟加拉猫", "埃及猫", "奥西猫", "东方短毛猫", "柯尼斯卷毛猫", "德文卷毛猫", "斯芬克斯猫", "彼得秃猫", "美国刚毛猫", "日本短尾猫", "曼岛猫"],
      "item_format": "猫咪肖像 + 品种名称 + 性格描述"
    },
    {
      "title": "{argument name=\"category 2 name\" default=\"长毛猫\"}",
      "background_color": "浅粉色",
      "total_cats": 18,
      "rows": 2,
      "labels": ["波斯猫", "缅因猫", "布偶猫", "挪威森林猫", "西伯利亚猫", "土耳其安哥拉猫", "土耳其梵猫", "伯曼猫", "美国长毛猫", "金吉拉猫", "喜马拉雅猫", "苏格兰折耳长毛猫", "塞尔凯克卷毛猫", "拉邦猫", "索马里猫", "巴厘猫", "东方长毛猫", "狮子猫"],
      "item_format": "猫咪肖像 + 品种名称 + 性格描述"
    },
    {
      "title": "{argument name=\"category 3 name\" default=\"稀有及特色猫\"}",
      "background_color": "浅黄色",
      "total_cats": 18,
      "rows": 2,
      "labels": ["布里蒂猫", "俄罗斯蓝猫", "沙特尔猫", "哈瓦那棕猫", "新加坡猫", "孟买猫", "斯诺鞋猫", "玩具虎猫", "威尔士猫", "美国卷耳猫", "苏格兰折耳猫(短毛)", "异国短毛猫", "加菲猫", "美国反耳猫", "薮猫(萨凡纳猫)", "狞猫(卡拉卡尔)", "狮子猫(大型)", "豹猫(亚洲豹猫)"],
      "item_format": "猫咪肖像 + 品种名称 + 性格描述"
    },
    {
      "title": "无毛及卷毛猫",
      "background_color": "浅蓝色",
      "total_cats": 9,
      "rows": 1,
      "labels": ["顿斯科伊猫", "彼得秃猫(巴尔德)", "精灵猫(双耳卷)", "加拿大无毛猫", "乌克兰勒夫科伊猫", "明斯金猫(短腿无毛)", "拉邦猫(卷毛无毛)", "德文卷毛猫", "柯尼斯卷毛猫"],
      "item_format": "猫咪肖像 + 品种名称 + 性格描述"
    }
  ],
  "footer": {
    "left_section": {
      "title": "小贴士:",
      "content": "3 条带编号的宠物护理建议"
    },
    "right_section": {
      "title": "图例说明:",
      "content": "4 个与各分区背景色对应的颜色图例框"
    }
  }
}

## 来源备注
- 源站作者：沐阳
- 源站 UUID：BcgzX03YMQ
- 源站分类：06_图文排版视觉传达
