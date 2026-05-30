---
id: "portrait-the-gas-one-001"
title: "加油站高街时尚摄影提示词预设"
category: portrait
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["时尚", "穿搭", "加油站", "女性", "复古", "赛车", "夹克", "夜景"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
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
  "prompt_type": "High-Fashion Streetwear Photoshoot",
  "options": {
    "selection_instruction": "Choose one gender and one gas station brand to begin the prompt generation.",
    "gender": [
      "Male",
      "Female",
      "Non-binary"
    ],
    "gas_station": [
      "Shell",
      "ExxonMobil",
      "Marathon Petroleum",
      "Chevron",
      "Valero",
      "BP",
      "Citgo",
      "RaceTrac",
      "Maverik",
      "Royal Farms",
      "Rutter’s",
      "Yesway/Allsup’s",
      "Mobil One",
      "7-Eleven"
    ]
  },
  "environment": {
    "description": "Outdoor at a gas pump at the chosen gas station.",
    "details": "The scene is set during late afternoon 'golden hour' or under neon lights at night. The clothing colors, logos, and overall aesthetic of the custom top/jacket must directly complement the branding of the selected gas station. The ground is concrete, the pumps are either vintage or modern, and there's a busy street in the background."
  },
  "subject_styling": {
    "description": "High-fashion, custom streetwear inspired by vintage racing and track aesthetics for the upper body, paired with generic bottoms. NO sunglasses are worn.",
    "materials_and_items": {
      "top_layer": {
        "instruction": "Randomly select one top layer, ensuring its style/color matches the gas station brand.",
        "options": [
          "Heavy knitwear sweater or cardigan with bold patterns/logos",
          "Oversized vintage leather racing jacket with heavy patch embroidery",
          "Premium heavyweight cotton t-shirt with a large graphic print",
          "Matching fleece set hoodie or quarter-zip sweatshirt",
          "Nylon windbreaker jacket with color-blocking"
        ]
      },
      "bottom_layer": {
        "instruction": "Randomly select one generic bottom layer.",
        "options": [
          "Generic black wide-leg pants",
          "Classic blue or black denim jeans",
          "Plain knitwear shorts",
          "Generic basketball shorts"
        ]
      }
    },
    "accessories": {
      "instruction": "Choose one.",
      "options": [
        "Vintage baseball cap",
        "Knit beanie"
      ]
    },
    "key_features": "Oversized fits, heavy patch embroidery, large typography logos, and bold color-blocking on the top layer that ties into the gas station's branding."
  },
  "poses_and_angles": {
    "instruction": "Select one pose to define the shot's composition.",
    "options": [
      "Facing the camera, holding the gas nozzle in the car, with a confident, high-fashion gaze.",
      "Back to the camera, looking over shoulder towards the street, showcasing the large back graphic/patches of the jacket.",
      "Side profile view, leaning casually against the supercar, looking off-camera.",
      "Dynamic low-angle shot, crouched near the car's fuel cap, looking up at the camera.",
      "Three-quarter view, walking away from the pump, looking back "
    ]
  }

## 中文译文（源站提供）
```json
{
  "prompt_type": "高端时尚街头服饰摄影",
  "options": {
    "selection_instruction": "选择一个性别和一个加油站品牌以开始生成提示。",
    "gender": [
      "男性",
      "女性",
      "非二元性别"
    ],
    "gas_station": [
      "壳牌 (Shell)",
      "埃克森美孚 (ExxonMobil)",
      "马拉松石油 (Marathon Petroleum)",
      "雪佛龙 (Chevron)",
      "瓦莱罗 (Valero)",
      "英国石油 (BP)",
      "西特戈 (Citgo)",
      "赛道便利店 (RaceTrac)",
      "马弗里克 (Maverik)",
      "皇家农场 (Royal Farms)",
      "拉特斯 (Rutter’s)",
      "叶斯韦/奥尔萨普斯 (Yesway/Allsup’s)",
      "美孚一号 (Mobil One)",
      "7-Eleven"
    ]
  },
  "environment": {
    "description": "在所选加油站的加油泵旁进行户外拍摄。",
    "details": "场景设定在傍晚“黄金时段”或夜晚霓虹灯下。定制上衣/夹克的服装颜色、标志和整体美学必须直接与所选加油站的品牌相得益彰。地面是混凝土，加油泵是复古或现代风格，背景是繁忙的街道。"
  },
  "subject_styling": {
    "description": "上半身是受复古赛车和赛道美学启发的高端时尚定制街头服饰，搭配普通下装。不戴太阳镜。",
    "materials_and_items": {
      "top_layer": {
        "instruction": "随机选择一件上衣，确保其风格/颜色与加油站品牌匹配。",
        "options": [
          "带有大胆图案/标志的厚重针织毛衣或开衫",
          "带有厚重补丁刺绣的超大复古皮革赛车夹克",
          "带有大图案印花的高级厚重棉质 T 恤",
          "配套抓绒连帽衫或四分之一拉链运动衫",
          "带有撞色设计的尼龙防风夹克"
        ]
      },
      "bottom_layer": {
        "instruction": "随机选择一件普通下装。",
        "options": [
          "普通黑色阔腿裤",
          "经典蓝色或黑色牛仔裤",
          "纯色针织短裤",
          "普通篮球短裤"
        ]
      }
    },
    "accessories": {
      "instruction": "选择一个。",
      "options": [
        "复古棒球帽",
        "针织帽"
      ]
    },
    "key_features": "上衣采用超大版型、厚重补丁刺绣、大号字体标志和大胆的撞色设计，与加油站的品牌紧密结合。"
  },
  "poses_and_angles": {
    "instruction": "选择一个姿势来定义照片的构图。",
    "options": [
      "面向镜头，手持加油枪在车内，眼神自信，充满时尚感。",
      "背对镜头，越过肩膀看向街道，展示夹克背面大图案/补丁。",
      "侧面轮廓视图，随意地靠在超级跑车旁，看向镜头外。",
      "动态低角度拍摄，蹲在汽车油箱盖附近，仰视镜头。",
      "四分之三视图，走离加油泵，回头望去。"
    ]
  }
}
```

## 来源备注
- 源站作者：Lloyd Creates
- 源站 UUID：KLZbkhB0NM
- 源站分类：09_故事分镜角色设定
