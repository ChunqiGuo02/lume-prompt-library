---
id: portrait-setting-pose-clothing-1279
title: "明星时尚写真多场景生成提示词"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["红色", "亮片", "霓虹", "皮革", "沙发", "金饰", "时尚", "写真"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "4:3"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "image_collection": {
    "subject_1": {
      "name": "Sydney Sweeney",
      "scenarios": [
        {
          "setting": "Luxury boat on a lake with pine tree forest background",
          "pose": "Leaning back, one arm raised, blowing a kiss or laughing behind hand",
          "look": "Blonde messy beach waves, chunky black sunglasses",
          "clothing": "Black and white zip-up wetsuit or athletic swimwear"
        }
      ]
    },
    "subject_2": {
      "name": "Ana de Armas",
      "scenarios": [
        {
          "setting": "High-fashion lounge with neon pink and blue lights",
          "pose": "Sitting elegantly on a black leather tufted sofa",
          "clothing": "Red sequined blazer and skirt, black silk inner",
          "accessories": "Layered gold necklaces, multiple gold bangles"
        },
        {
          "setting": "Lush tropical garden on a wicker sofa",
          "pose": "Seated with legs crossed, holding a drink",
          "clothing": "Yellow and blue patterned strapless summer dress, bright pink heels",
          "props": "Green champagne bucket, leaf-patterned pillow"
        },
        {
          "setting": "Rainy street/Red carpet with fans",
          "pose": "Taking a selfie with a fan under an umbrella",
          "clothing": "White long-sleeve button-up blouse, hair in a stylish updo"
        }
      ]
    },
    "general_parameters": {
      "quality": "High-resolution, 8k, photorealistic, cinematic lighting",
      "dimensions": "1080x1080 or 1080x2400",
      "source_reference": "Based on user-provided images"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_collection": {
    "subject_1": {
      "name": "Sydney Sweeney",
      "scenarios": [
        {
          "setting": "湖上豪华游艇，背景是松树林",
          "pose": "向后靠，一只手臂抬起，飞吻或用手遮嘴笑",
          "look": "金色凌乱沙滩波浪发，粗框黑色太阳镜",
          "clothing": "黑白拉链式潜水服或运动泳装"
        }
      ]
    },
    "subject_2": {
      "name": "Ana de Armas",
      "scenarios": [
        {
          "setting": "高定时装休息室，霓虹粉和蓝色灯光",
          "pose": "优雅地坐在黑色皮革簇绒沙发上",
          "clothing": "红色亮片西装外套和半身裙，黑色丝质内搭",
          "accessories": "多层金色项链，多个金色手镯"
        },
        {
          "setting": "藤制沙发上的郁郁葱葱热带花园",
          "pose": "盘腿而坐，手持饮品",
          "clothing": "黄蓝色图案无肩带夏日连衣裙，亮粉色高跟鞋",
          "props": "绿色香槟桶，树叶图案枕头"
        },
        {
          "setting": "下雨的街道/红毯，有粉丝",
          "pose": "在雨伞下与粉丝自拍",
          "clothing": "白色长袖纽扣衬衫，发型为时尚盘发"
        }
      ]
    },
    "general_parameters": {
      "quality": "高分辨率，8k，超写实，电影级灯光",
      "dimensions": "1080x1080 或 1080x2400",
      "source_reference": "基于用户提供的图片"
    }
  }
}
```

## 来源备注
- 源站作者：Bahar azam
- 源站 UUID：sqwOsUnuJa
- 源站分类：05_人物肖像与写实摄影
