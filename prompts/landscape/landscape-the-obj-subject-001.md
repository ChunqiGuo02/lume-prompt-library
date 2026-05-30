---
id: "landscape-the-obj-subject-001"
title: "车内红衣少女自拍"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["自拍", "人像", "女性", "车内", "红色", "长发", "雀斑", "微笑"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
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
  "meta": {
    "image_quality": "High",
    "image_type": "Photo/Portrait/Selfie",
    "resolution_estimation": "High resolution, sharp focus on subject"
  },
  "global_context": {
    "scene_description": "A close-up selfie portrait of a young woman smiling brightly, seated inside a vehicle. The setting is the front seat of a car, indicated by the black leather headrest and seat visible behind her. The lighting is soft and natural, suggesting daytime, likely entering through the car windows.",
    "time_of_day": "Daytime",
    "weather_atmosphere": "Bright, clear, cheerful",
    "lighting": {
      "source": "Natural Daylight (Window)",
      "direction": "Front/Side (Diffused)",
      "quality": "Soft, even illumination",
      "color_temp": "Neutral/Cool Daylight"
    }
  },
  "color_palette": {
    "dominant_hex_estimates": [
      "#D92B2B",
      "#1A1A1A",
      "#EBC7B6",
      "#4E3A2A",
      "#F5F5F5"
    ],
    "accent_colors": [
      "Vivid Red",
      "Deep Black",
      "Silver (jewelry)",
      "Dark Brown (hair)"
    ],
    "contrast_level": "High (Bright red shirt against dark car interior)"
  },
  "composition": {
    "camera_angle": "Eye-level / Slightly high angle (Selfie perspective)",
    "framing": "Close-up / Head and Torso",
    "depth_of_field": "Moderate (Subject sharp, background slightly softened)",
    "focal_point": "The subject's smile and eyes"
  },
  "objects": [
    {
      "id": "obj_001",
      "label": "Young Woman",
      "category": "Person",
      "location": "Center",
      "prominence": "Foreground",
      "visual_attributes": {
        "color": "Fair skin with pink undertones",
        "texture": "Smooth skin with natural freckles",
        "material": "Biological",
        "state": "Smiling, Happy",
        "dimensions_relative": "Occupies 80% of the frame"
      },
      "micro_details": [
        "Light freckles visible across nose and cheeks",
        "Small nose stud on left nostril (viewer's right)",
        "Well-defined eyelashes and groomed eyebrows",
        "White, straight teeth displayed in smile",
        "Two small moles visible on the right arm (viewer's left)"
      ],
      "pose_or_orientation": "Seated, head tilted slightly to the right, facing camera",
      "text_content": null
    },
    {
      "id": "obj_002",
      "label": "T-Shirt",
      "category": "Clothing",
      "location": "Lower Center",
      "prominence": "Foreground",
      "visual_attributes": {
        "color": "Bright Vivid Red",
        "texture": "Cotton jersey knit",
        "material": "Cotton/Blend",
        "state": "Clean, casual",
        "dimensions_relative": "Covers torso"
      },
      "micro_details": [
        "Ribbed crew neckline",
        "Short sleeves with hem stitching visible",
        "Slight fabric folds around the armpit/shoulder area",
        "Hair resting over the fabric"
      ],
      "pose_or_orientation": "Worn on body",
      "text_content": null
    },
    {
      "id": "obj_003",
      "label": "Hair",
      "category": "Body Part",
      "location": "Framing Face/Right Shoulder",
      "prominence": "Foreground",
      "visual_attributes": {
        "color": "Dark Brown / Chestnut",
        "texture": "Straight, silky, long",
        "material": "Hair",
        "state": "Groomed",
        "dimensions_relative": "Long, reaching past shoulders"
      },
      "micro_details": [
        "Center part",
        "Lighter brown highlights where light hits",
        "Individual flyaway hairs visible at the crown against the dark seat",
        "Bulk of hair draped over left shoulder (viewer's right)"
      ],
      "pose_or_orientation": "Falling straight down",
      "text_content": null
    },
    {
      "id": "obj_004",
      "label": "Car Seat",
      "category": "Furniture/Vehicle Part",
      "location": "Background",
      "prominence": "Background",
      "visual_attributes": {
        "color": "Black",
        "texture": "Leather/Synthetic, combination of smooth and perforated",
        "material": "Leather/Vinyl",
        "state": "Clean",
        "dimensions_relative": "Fills background behind subject"
      },
      "micro_details": [
        "Perforated texture visible on the center backrest panel",
        "Smooth texture on side bolsters",
        "Headrest visible behind subject's head",
        "Stitching lines along the bolster seams"
      ],
      "pose_or_orientation": "Upright",
      "text_content": null
    },
    {
      "id": "obj_005",
      "label": "Necklace",
      "category": "Jewelry",
      "location": "Neck",
      "prominence": "Detail",
      "visual_attributes": {
        "color": "Silver",
        "texture": "Metallic",
        "material": "Metal",
        "state": "Intact",
        "dimensions_relative": "Small, delicate"
      },
      "micro_details": [
        "Thin chain link",
        "Small pendant, possibly teardrop or oval shape with a stone",
        "Resting centrally on the neck/collarbone area"
      ],
      "pose_or_orientation": "Hanging around neck",
      "text_content": null
    }
  ],
  "text_ocr": {
    "present": false,
    "content": []
  },
  "semantic_relationships": [
    "Subject (obj_001) is wearing T-Shirt (obj_002) and Necklace (obj_005)",
    "Subject (obj_001) is seated in Car Seat (obj_004)",
    "Hair (obj_003) is obscuring part of the T-Shirt (obj_002) on the right side",
    "Car Seat (obj_004) provides high contrast background for the Subject's face"
  ]
}

## 中文译文（源站提供）
{
  "meta": {
    "image_quality": "高",
    "image_type": "照片/肖像/自拍",
    "resolution_estimation": "高分辨率，主体清晰可见"
  },
  "global_context": {
    "scene_description": "这是一张年轻女性的特写自拍照，她面带灿烂的笑容，坐在车内。拍摄场景是汽车的前排座椅，这一点从她背后的黑色皮革头枕和座椅可以看出来。光线柔和自然，应该是白天，光线可能来自汽车窗户。",
    "time_of_day": "白天",
    "weather_atmosphere": "明亮、晴朗、愉快",
    "lighting": {
      "source": "自然日光（透过窗户）",
      "direction": "前方/侧面（散射光）",
      "quality": "柔和、均匀的照明",
      "color_temp": "中性/冷色调的日光"
    }
  },
  "color_palette": {
    "dominant_hex_estimates": [
      "#D92B2B",
      "#1A1A1A",
      "#EBC7B6",
      "#4E3A2A",
      "#F5F5F5"
    ],
    "accent_colors": [
      "鲜艳的红色",
      "深黑色",
      "银色（珠宝色）",
      "深棕色（头发颜色）"
    ],
    "contrast_level": "高（鲜艳的红色衬衫与深色的车内环境形成鲜明对比）"
  },
  "composition": {
    "camera_angle": "平视角度/稍高的角度（自拍视角）",
    "framing": "特写/头部和躯干",
    "depth_of_field": "中等（主体清晰，背景略微模糊）",
    "focal_point": "主体的微笑和眼睛"
  },
  "objects": [
    {
      "id": "obj_001",
      "label": "年轻女性",
      "category": "人物",
      "location": "画面中心",
      "prominence": "前景",
      "visual_attributes": {
        "color": "肤色白皙，带有粉色调",
        "texture": "皮肤光滑，有自然雀斑",
        "material": "生物组织",
        "state": "微笑，表情愉快",
        "dimensions_relative": "占据画面的80%"
      },
      "micro_details": [
        "鼻子和脸颊上可见细小的雀斑",
        "左鼻孔（从观看者角度看）上有一颗小鼻钉",
        "睫毛浓密，眉毛修剪整齐",
        "微笑时露出洁白的牙齿",
        "右臂（从观看者角度看）上有两颗小痣",
      ],
      "pose_or_orientation": "坐着，头部微微向右倾斜，面对相机",
      "text_content": null
    },
    {
      "id": "obj_002",
      "label": "T恤",
      "category": "服装",
      "location": "画面下半部分",
      "prominence": "前景",
      "visual_attributes": {
        "color": "鲜艳的红色",
        "texture": "棉质针织面料",
        "material": "棉/混纺",
        "state": "干净、休闲",
        "dimensions_relative": "覆盖躯干"
      },
      "micro_details": {
        "领口有罗纹设计",
        "短袖，袖口边缘有缝线",
        "腋下和肩膀部位有轻微的布料褶皱",
        "头发披在布料上"
      },
      "pose_or_orientation": "穿着在身上",
      "text_content": null
    },
    {
      "id": "obj_003",
      "label": "头发",
      "category": "身体部位",
      "location": "脸部/右肩附近",
      "prominence": "前景",
      "visual_attributes": {
        "color": "深棕色/栗色",
        "texture": "直发，丝滑，长度较长",
        "material": "头发",
        "state": "修剪整齐",
        "dimensions_relative": "长度超过肩膀"
      },
      "micro_details": {
        "头发中间部分",
        "阳光照射处有较浅的棕色发丝",
        "头顶的头发在深色座椅背景下有些凌乱",
        "大部分头发披在左肩上（从观看者角度看）",
      },
      "pose_or_orientation": "自然下垂"
    },
    {
      "id": "obj_004", "label": "汽车座椅",
      "category": "家具/车辆部件",
      "location": "背景",
      "prominence": "背景",
      "visual_attributes": {
        "color": "黑色",
        "texture": "皮革/人造材料，表面既有光滑部分也有穿孔部分",
        "material": "皮革/乙烯基材料",
        "state": "干净",
        "dimensions_relative": "占据主体背后的整个背景"
      },
      "micro_details": {
        "靠背中央有穿孔设计",
        "侧面的支撑垫表面光滑",
        "主体头部后面的头枕清晰可见",
        "支撑垫的接缝处有缝线"
      },
      "pose_or_orientation": "处于直立状态",
      "text_content": null
    },
    {
      "id": "obj_005", "label": "项链",
      "category": "珠宝",
      "location": "颈部",
      "prominence": "细节部分",
      "visual_attributes": {
        "color": "银色",
        "texture": "金属材质",
        "material": "金属",
        "state": "完好无损",
        "dimensions_relative": "小巧精致"
      },
      "micro_details": {
        "细链状结构",
        "小吊坠，可能是泪滴形或椭圆形，上面有装饰宝石",
        "悬挂在颈部/锁骨位置"
      },
      "pose_or_orientation": "挂在脖子上"
    },
  },
  "text_ocr": {
    "present": false,
    "content": []
  },
  "semantic_relationships": [
    "主体（obj_001）穿着T恤（obj_002）和项链（obj_005）",
    "主体（obj_001）坐在汽车座椅（obj_004）上",
    "头发（obj_003）遮住了T恤（obj_002）的右侧部分",
    "汽车座椅（obj_004）为主体的脸部提供了高对比度的背景"
  ]
}

## 来源备注
- 源站作者：ViralOps_
- 源站 UUID：361d15ef46
- 源站分类：05_人物肖像与写实摄影
