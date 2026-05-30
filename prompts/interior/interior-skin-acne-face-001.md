---
id: "interior-skin-acne-face-001"
title: "痤疮治疗前后对比图"
category: interior
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["对比", "祛痘", "人像", "女性", "写实", "皮肤", "痤疮", "美容"]
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
Acne Gone
{
"task": "photorealistic_before_after_comparison",
"output": {
"type": "single_image",
"layout": "vertical_split",
"left_panel": "BEFORE_ACNE",
"right_panel": "AFTER_CLEAR",
"text": "none"
},
"composition": {
"split": {
"direction": "vertical",
"ratio": "50/50",
"divider": "clean_sharp_edge"
},
"camera_lock": true,
"framing": {
"shot_type": "tight_face_closeup",
"crop": "forehead_to_upper_chest",
"face_scale": "identical_both_sides"
},
"pose": {
"head_angle": "same_three_quarter_angle",
"camera_height": "eye_level",
"gaze_direction": "identical",
"expression": "neutral_relaxed",
"pose_lock": true
}
},
"subject": {
"identity": "same_woman",
"gender": "female",
"age_range": "early_20s",
"hair": {
"color": "light_brown_blonde",
"style": "messy_updo_with_loose_strands",
"locked": true
},
"skin_rendering": {
"photorealism": "ultra_high",
"texture": "real_pores_micro_details",
"finish": "natural_skin_sheen",
"no_plastic_skin": true
}
},
"before_left_state": {
"skin_condition": {
"overall": "acne_affected_skin",
"details": [
"inflamed_red_papules",
"small_pustules",
"post_inflammatory_red_marks",
"uneven_redness"
],
"placement": [
"cheek_area",
"jawline",
"lower_face"
],
"realism_note": "medically_plausible_acne_texture"
}
},
"after_right_state": {
"skin_condition": {
"overall": "clear_healthy_skin",
"details": [
"even_skin_tone",
"no_active_acne",
"natural_texture_visible",
"very_subtle_freckles_optional"
]
}
},
"lighting": {
"type": "soft_clinical_daylight",
"direction": "single_direction_locked",
"softness": "very_soft_diffused",
"intensity": "identical_both_panels",
"white_balance": "cool_neutral_daylight_5500K",
"color_cast": "none",
"skin_accuracy": "true_to_life_no_warm_bias",
"highlight_behavior": "clean_soft_highlights_no_yellow_tint",
"shadow_behavior": "gentle_lifted_shadows_preserving_texture"
},
"camera": {
"lens_equivalent": "28mm",
"focus": "tack_sharp_on_skin",
"depth_of_field": "moderate_soft_background",
"exposure": "matched"
},
"background": {
"environment": "minimal_indoor_setting",
"consistency": "identical_background_and_blur"
},
"quality": {
"resolution": "ultra_high_resolution",
"detail_level": "extreme",
"grain": "subtle_real_camera_grain",
"artifacts": "none"
},
"constraints": [
"acne_face_must_be_on_left",
"clear_skin_must_be_on_right",
"same_camera_same_pose_same_lighting",
"no_text_no_labels_no_watermarks",
"no_beauty_filters",
"no_face_shape_change",
"maintain_identity_consistency"
]
}

## 中文译文（源站提供）
痤疮消失  

{
  "task": "照片级质感前后对比",  
  "output": {  
    "type": "单张图片",  
    "layout": "垂直分割",  
    "left_panel": "治疗前",  
    "right_panel": "治疗后的效果",  
    "text": "无"  
  },  
  "composition": {  
    "split": {  
      "direction": "垂直",  
      "ratio": "50/50",  
      "divider": "清晰锐利的边框"  
    },  
    "camera_lock": true,  
    "framing": {  
      "shot_type": "特写脸部",  
      "crop": "从前额到上半身",  
      "face_scale": "两侧相同"  
    },  
    "pose": {  
      "head_angle": "相同的角度",  
      "camera_height": "与眼睛平齐",  
      "gaze_direction": "相同",  
      "expression": "中性放松的表情",  
      "pose_lock": true  
    }  
  },  
  "subject": {  
    "identity": "同一女性",  
    "gender": "女性",  
    "age_range": "二十岁出头"  
  },  
  "hair": {  
    "color": "浅棕色金发",  
    "style": "随意的发型，有几缕散落的头发",  
    "locked": true  
  },  
  "skin_rendering": {  
    "photorealism": "超高真实感",  
    "texture": "真实毛孔的微细节",  
    "finish": "自然肤质的光泽效果",  
    "no_plastic_skin": true  
  },  
  "before_left_state": {  
    "skin_condition": {  
      "整体状况": "长满痤疮的皮肤",  
      "具体症状":  
        "发红的丘疹",  
        "小脓包",  
        "炎症后的红色痕迹",  
        "皮肤不平坦"  
    },  
    "location": ["脸颊部位", "下颌线条", "脸部下方"],  
    "realism_note": "痤疮纹理符合医学描述"  
  },  
  "after_right_state": {  
    "skin_condition": {  
      "整体状况": "清洁健康的皮肤",  
      "具体特征":  
        "肤色均匀",  
        "无活跃的痤疮",  
        "皮肤纹理自然可见",  
        "有非常淡的雀斑（可选）"  
    }  
  },  
  "lighting": {  
    "type": "柔和的临床日光灯",  
    "direction": "固定单一方向",  
    "softness": "非常柔和的散射光",  
    "intensity": "两侧光线强度相同",  
    "white_balance": "5500K的冷中性日光",  
    "color_cast": "无",  
    "skin_accuracy": "高度还原真实感，无暖色调偏差",  
    "highlight_behavior": "清晰柔和的高光，无黄色色调",  
    "shadow_behavior": " Gentle的阴影效果，保留皮肤纹理"  
  },  
  "camera": {  
    "lens_equivalent": "28毫米镜头",  
    "focus": "准确聚焦在皮肤上",  
    "depth_of_field": "中等的柔和背景虚化效果",  
    "exposure": "曝光合适"  
  },  
  "background": {  
    "environment": "简单的室内环境",  
    "consistency": "背景和模糊效果一致"  
  },  
  "quality": {  
    "resolution": "超高分辨率",  
    "detail_level": "极致细节",  
    "grain": "自然的相机颗粒感",  
    "artifacts": "无明显瑕疵"  
  },  
  "constraints": [  
    "痤疮部位必须在左侧图片中显示",  
    "治疗后的皮肤必须显示在右侧图片中",  
    "使用相同的相机、姿势和灯光效果",  
    "无文字、标签或水印",  
    "无美化滤镜",  
    "无需改变脸部轮廓",  
    "保持人物身份的一致性"  
  }  
}

## 来源备注
- 源站作者：Ege
- 源站 UUID：zR8zjwrqV7
- 源站分类：11_图像编辑与修复增强
