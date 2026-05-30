---
id: product-title-consistency-position-0158
title: "电商详情图制作3-需上传产品"
category: product
subcategory: "02_电商产品虚拟摄影"
aesthetic: null
tags: ["极简", "打底衫", "奶油色", "温柔", "多场景", "慵懒", "日常", "时尚"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{

  "project_settings": {

    "task_type": "高端时尚多场景拼贴海报",

    "aspect_ratio": "9:16",

    "render_style": "极简拼贴 + 时尚生活方式摄影",

    "quality_level": "ultra",

    "language": "zh-CN",

    "batch_size": 1

  },

  "brand_module": {

    "brand_name": "MUYANG",

    "logo_placement": {

      "position": "左上角",

      "size": "小号",

      "style": "极简、低存在感、不干扰画面"

    }

  },

  "canvas_style": {

    "background": {

      "color": "温暖奶油色",

      "tone": "柔和、干净、无纹理",

      "negative_space": "充足留白，强调高级感"

    },

    "collage_style": {

      "layout": "极简拼贴",

      "photo_blocks": {

        "count": 4,

        "shape": "圆角矩形",

        "corner_radius": "大圆角",

        "spacing": "均匀留白，呼吸感强"

      }

    }

  },

  "model_consistency": {

    "model": {

      "ethnicity": "亚洲女性",

      "age_range": "25-30岁",

      "appearance": {

        "facial_features": "精致五官",

        "makeup": "自然裸妆，干净肤感",

        "hair": "长发，自然垂落或低马尾"

      }

    },

    "consistency_rule": "四个场景中必须为同一位模特，五官、发型、妆容完全一致，不允许变化"

  },

  "product": {

    "category": "打底衫",

    "reference_image": "必须严格匹配上传的产品参考图",

    "details": {

      "color": [

        "奶油白",

        "燕麦色",

        "浅驼色",

        "雾灰色"

      ],

      "material": "高支棉 / 莫代尔 / 微弹针织，柔软亲肤",

      "design": [

        "修身但不紧绷",

        "圆领或小高领",

        "长袖",

        "极简无装饰"

      ]

    },

    "consistency_rule": "四个场景中服装颜色、版型、面料、领型必须完全一致，不允许任何改动"

  },

  "scene_blocks": [

    {

      "id": "scene_1",

      "title": "清晨居家",

      "description": "清晨卧室窗边，自然晨光洒入，模特站立或倚靠窗边，氛围安静柔和"

    },

    {

      "id": "scene_2",

      "title": "客厅日常",

      "description": "客厅沙发上慵懒坐姿，日常居家状态，松弛感强"

    },

    {

      "id": "scene_3",

      "title": "浴室镜前",

      "description": "浴室镜前轻松站立或整理衣角，画面干净，无杂乱物品"

    },

    {

      "id": "scene_4",

      "title": "阳台休闲",

      "description": "阳台藤椅或简洁休闲椅，手持咖啡，日常生活方式氛围"

    }

  ],

  "typography_layout": {

    "main_title": {

      "position": "底部居中",

      "font": "高端衬线体",

      "text": "一衫多场景",

      "style": "大字号、留白充足、安静高级"

    },

    "subtitle": {

      "position": "主标题下方",

      "text": "居家、通勤、约会都适合 / Home, work, date ready.",

      "style": "中英双语，小字号，克制"

    },

    "bullet_points": {

      "position": "右下角附近",

      "style": "小号文字，极简排列",

      "content": [

        {

          "cn": "不挑场合",

          "en": "Versatile style"

        },

        {

          "cn": "秒变氛围感",

          "en": "Instant chic"

        },

        {

          "cn": "舒适又耐看",

          "en": "Cozy yet refined"

        }

      ]

    }

  },

  "lighting_rules": {

    "overall": "柔和自然光为主",

    "consistency": "四个场景光线风格统一，避免强对比或硬光",

    "focus": "突出面料质感与穿着舒适度"

  },

  "negative_prompt": [

    "cluttered",

    "busy",

    "multiple patterns",

    "shadows",

    "watermark",

    "messy text",

    "low quality",

    "blurry",

    "plain face",

    "over-styled makeup",

    "harsh lighting"

  ],

  "final_prompt_cn": "9:16竖版极简多场景拼贴时尚海报。温暖奶油色背景，画面干净，留白充足。采用极简拼贴设计，4个大圆角照片块，均匀排布。展示同一位精致亚洲女性模特（25-30岁），自然裸妆，长发自然垂落或低马尾，四个不同生活场景，但模特、妆容、发型完全一致。模特在四个场景中均穿着与上传参考图严格一致的打底衫：奶油白/燕麦色/浅驼色/雾灰色，高支棉或莫代尔微弹针织面料，柔软亲肤，修身但不紧绷，圆领或小高领，长袖，极简设计。四个场景分别为：清晨卧室窗边、客厅沙发慵懒坐姿、浴室镜前、阳台藤椅喝咖啡，整体光线柔和自然，生活方式氛围统一。左上角放置小号MUYANG品牌logo。底部居中大号高端衬线标题“一衫多场景”，下方副标题双语“居家、通勤、约会都适合 / Home, work, date ready.”。右下角附近加入三点小型卖点列表：不挑场合 / Versatile style；秒变氛围感 / Instant chic；舒适又耐看 / Cozy yet refined。整体风格高端、克制、现代女性日常衣橱必备单品。"

}

## 来源备注
- 源站作者：Bitturing
- 源站 UUID：QwdlAsWSAn
- 源站分类：02_电商产品虚拟摄影
