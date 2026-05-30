---
id: portrait-christmas-winter-subject-0370
title: "冬日街拍拼贴海报"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["冬日", "圣诞", "拼接", "穿搭", "街拍", "棕调", "降雪", "温暖"]
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
  "image_generation_request": {
    "meta_protocols": {
      "reference_adherence": {
        "instruction": "Use the provided photo as a strict face reference.",
        "tolerance": "Zero deviation",
        "parameters": "Preserve facial proportions, skin texture, expression, and identity with 100% accuracy.",
        "stylization_constraint": "Do not stylize or alter facial features."
      },
      "format_style": "Editorial winter poster–style multi-panel collage",
      "aesthetic_quality": "Spontaneous iPhone photography (candid, cozy, realistic)",
      "global_textures": "Soft snowfall, subtle analog grain, slight handheld imperfections"
    },
    "consistent_elements": {
      "subject_wardrobe": {
        "coat": "Short faux-fur coat",
        "legwear": "Black tights",
        "footwear": "Classic UGG boots",
        "style_notes": "Simple, cozy, unmistakably winter"
      },
      "primary_device": {
        "model": "iPhone 17 Pro Max",
        "color": "Silver",
        "usage": "Held by subject in relevant frames"
      },
      "color_palette": [
        "Warm ambers",
        "Soft reds",
        "Pine greens",
        "Muted winter greys"
      ]
    },
    "layout_configuration": {
      "panel_1_top_left": {
        "scene_type": "Reflective shop-window shot at dusk",
        "lighting_and_atmosphere": "Faint Christmas lights, garlands, frosted glass edges, warm highlights on fur",
        "subject_action": "Holding phone partially covering face",
        "optical_effects": "Passing silhouettes, layered reflections, gentle ghosting, natural glass curvature distortion"
      },
      "panel_2_top_right": {
        "scene_type": "Ultra-wide street portrait (snowy sidewalk/Christmas market)",
        "camera_angle": "Close, downward-angled",
        "subject_pose": "Leaning forward casually, hands in coat pockets",
        "visibility_check": "Black tights and UGG boots clearly visible",
        "motion_dynamics": "Falling snow with slight motion blur",
        "lens_characteristics": "Subtle perspective warping to reinforce handheld unstaged feel"
      },
      "panel_3_bottom_right": {
        "scene_type": "Intimate overhead selfie",
        "lighting": "Warm street or café lighting",
        "props": {
          "held_item": "Takeaway holiday drink ({"drink type" "coffee or mulled wine"})",
          "accessories": "Wired earphones visible"
        },
        "texture_focus": "Sharply detailed fur texture and winter fabrics",
        "mood": "Nostalgic holiday atmosphere enhanced by soft grain"
      }
    },
    "graphic_overlay": {
      "element": "Minimal Apple Music–style mini player",
      "content": "Popular Christmas song (e.g., '{"song title" "Last Christmas or All I Want for Christmas Is You"}')",
      "style": "Rendered flat and clean, no shadows",
      "position": "Floating across the center of the collage"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_generation_request": {
    "meta_protocols": {
      "reference_adherence": {
        "instruction": "使用提供的照片作为严格的面部参考。",
        "tolerance": "零偏差",
        "parameters": "100% 准确地保留面部比例、皮肤纹理、表情和身份。",
        "stylization_constraint": "不要风格化或改变面部特征。"
      },
      "format_style": "编辑冬季海报风格多面板拼贴画",
      "aesthetic_quality": "随性 iPhone 摄影（抓拍、舒适、真实）",
      "global_textures": "柔和的雪花、微妙的模拟颗粒、轻微的手持不完美"
    },
    "consistent_elements": {
      "subject_wardrobe": {
        "coat": "短款仿皮草外套",
        "legwear": "黑色紧身裤",
        "footwear": "经典 UGG 雪地靴",
        "style_notes": "简洁、舒适、 unmistakable 冬日风格"
      },
      "primary_device": {
        "model": "iPhone 17 Pro Max",
        "color": "银色",
        "usage": "在相关画面中由主体手持"
      },
      "color_palette": [
        "暖琥珀色",
        "柔和红色",
        "松绿色",
        "柔和冬灰色"
      ]
    },
    "layout_configuration": {
      "panel_1_top_left": {
        "scene_type": "黄昏时分商店橱窗的反射镜头",
        "lighting_and_atmosphere": "微弱的圣诞灯光、花环、磨砂玻璃边缘、皮草上的暖色高光",
        "subject_action": "手持手机部分遮盖面部",
        "optical_effects": "路过的剪影、分层反射、轻微重影、自然的玻璃曲率畸变"
      },
      "panel_2_top_right": {
        "scene_type": "超广角街头肖像（雪地人行道/圣诞市场）",
        "camera_angle": "近距离、向下倾斜",
        "subject_pose": "随意前倾，手插在外套口袋里",
        "visibility_check": "黑色紧身裤和 UGG 雪地靴清晰可见",
        "motion_dynamics": "飘落的雪花带有轻微的运动模糊",
        "lens_characteristics": "微妙的透视畸变，以增强手持非摆拍的感觉"
      },
      "panel_3_bottom_right": {
        "scene_type": "亲密的俯视自拍",
        "lighting": "温暖的街景或咖啡馆灯光",
        "props": {
          "held_item": "外带节日饮品（{\"drink type\" \"咖啡或热红酒\"}）",
          "accessories": "可见有线耳机"
        },
        "texture_focus": "清晰细致的皮草纹理和冬季面料",
        "mood": "柔和颗粒增强的怀旧节日氛围"
      }
    },
    "graphic_overlay": {
      "element": "极简 Apple Music 风格迷你播放器",
      "content": "流行圣诞歌曲（例如，'{\"song title\" \"Last Christmas 或 All I Want for Christmas Is You\"}'）",
      "style": "扁平干净渲染，无阴影",
      "position": "浮动在拼贴画的中心"
    }
  }
}
```

## 来源备注
- 源站作者：AITrustSphere
- 源站 UUID：7guUa4pfUq
- 源站分类：05_人物肖像与写实摄影
