---
id: "landscape-true-hint-phone-001"
title: "雪景自拍手机特写预设"
category: landscape
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["雪景", "冬日", "女生", "手机", "车站", "耳罩", "围巾", "日系"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "9:16"
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
  "edit_type": "extreme_wide_angle_phone_edit",

  "source": {
    "_hint": "元画像の人物・服・雰囲気を編集するベース。新キャラ禁止。",
    "mode": "EDIT",
    "reference_images": {
      "first": "base_photo_person_and_environment",
      "second": "screen_content_for_phone"
    },
    "preserve_from_first": {
      "_hint": "顔・髪型・服装は必ず同一人物として扱うための固定。",
      "same_person_or_group": true,
      "same_faces": true,
      "same_hairstyles": true,
      "same_outfits": true,
      "same_environment_style": true
    }
  },

  "identity": {
    "_hint": "表情の統一化。人物のアイデンティティを崩さず保持。",
    "keep_identity_consistent": true,
    "all_people_clearly_recognizable_as_original": true,
    "expression": "bright_natural_smile"
  },

  "camera_effect": {
    "_hint": "スマホを近づけたときの誇張パースを美しく安定化。",
    "perspective": "extreme_wide_angle",
    "style": "dynamic_photorealistic",
    "near_objects_appear_large": true,
    "far_objects_recede_dramatically": true,
    "allow_view_from_above_or_below": true
  },

  "pose": {
    "_hint": "元画像と同じポーズ禁止。手の動きを強調して破綻防止。",
    "pose_can_change": true,
    "must_be_completely_different_from_reference": true,
    "do_not_replicate_or_approximate_original_pose": true,
    "style_tags": [
      "stylish",
      "complex",
      "fluid",
      "powerful"
    ],
    "focus_on_expressive_hands": true,
    "avoid_arm_distortion": true,
    "allow_multiple_body_parts_near_lens": true
  },

  "phone": {
    "_hint": "スマホ専用領域。持ち方・向き・手元の自然さを定義。",
    "allowed": true,
    "holding_styles": [
      "one_handed",
      "two_handed",
      "low_angle",
      "high_angle",
      "tilted",
      "sideways",
      "near_chest",
      "near_hip",
      "casual_carry",
      "partially_toward_lens"
    ],
    "rules": {
      "_hint": "“レンズに向ける強制”を避け、自然な持ち方で画面が見える構図へ。",
      "each_person_may_hold_one_phone": true,
      "priority_is_natural_and_relaxed_body_structure": true,
      "do_not_force_phone_directly_toward_camera": true,
      "screen_should_be_naturally_visible_when_possible": true
    }
  },

  "screen_replacement": {
    "_hint": "差し替えスクリーン。UIなし・歪みなし・自然な貼り込み。",
    "target": "visible_phone_screen",
    "use_second_reference_image_as_content": true,
    "overlay_cleanly_on_visible_screen_area": true,
    "fit_without_distortion": true,
    "respect_screen_shape": true,
    "no_additional_cropping": true,
    "ui_constraints": {
      "_hint": "SNSバーやアプリ枠の発生を完全禁止。",
      "no_ui": true,
      "no_icons": true,
      "no_status_bar": true,
      "no_app_frame": true,
      "show_only_content_from_second_reference": true
    }
  },

  "environment": {
    "_hint": "元写真の空気感を保つが、季節や天気には依存しない汎用設計。",
    "preserve_environment_style_from_reference": true,
    "lighting_consistent_with_reference": true,
    "expand_space_for_wide_angle_view": true,
    "keep_texture_and_color_tone_consistent": true
  },

  "composition": {
    "_hint": "スマホ近接によるダイナミック構図の安定化。",
    "dynamic_but_readable": true,
    "extreme_depth_emphasis": true,
    "allow_phone_close_to_lens": true,
    "keep_all_people_visually_balanced": true
  },

  "constraints": {
    "_hint": "意図せぬ変化を禁止する保護設定。",
    "no_new_characters": true,
    "no_change_in_age_or_gender_presentation": true,
    "no_costume_change": true,
    "no_change_to_reference_location_type": true,
    "respect_original_photographic_style": true
  }
}

## 中文译文（源站提供）
{
  "编辑类型": "极端广角视角手机照片编辑",
  
  "源图片信息": {
    "_提示": "用于编辑元图片中的人物、服装及整体氛围。禁止添加新角色。",
    "编辑模式": "编辑",
    "参考图片": {
      "第一张参考图": "base_photo_person_and_environment",
      "第二张参考图": "screen_content_for_phone"
    },
    "保持原有元素的一致性设置": {
      "_提示": "面部特征（面部、发型、服装）必须保持与原始图片中的人物一致。",
      "是否为同一人物或同一组人物": "是",
      "是否面部特征相同": "是",
      "是否发型相同": "是",
      "是否服装相同": "是",
      "是否环境风格相同": "是"
    }
  },  
  
  "人物身份统一性设置": {
    "_提示": "确保所有人物的表情统一，同时保持其身份特征不变。",
    "保持人物身份一致性": "是",
    "所有人物均可被清晰地识别为原始图片中的人物": "是",
    "预设表情": "明亮自然微笑"
  },  
  
  "相机效果设置": {
    "_提示": "优化因手机靠近拍摄而产生的透视效果，使其更加美观且稳定。",
    "拍摄视角": "极端广角",
    "图片风格": "动态写实风格",
    "近处物体应放大显示": "是",
    "远处物体应明显模糊": "是",
    "允许从上方或下方拍摄": "是"
  },  
  
  "人物姿势调整": {
    "_提示": "禁止使用与原始图片相同的姿势。强调手部的动作以避免视觉上的不协调。",
    "是否可调整姿势": "是",
    "姿势必须与参考图片完全不同": "是",
    "不允许复制或模仿原始姿势": "是",
    "姿势风格标签": [
      "时尚大方",
      "动作复杂",
      "流畅自然",
      "充满力量感"
    ],
    "重点突出人物的手部动作": "是",
    "避免手臂变形": "是",
    "允许多部位靠近镜头进行拍摄": "是"
  },  
  
  "手机元素设置": {
    "_提示": "专门针对手机屏幕的元素设计，用于定义手机的持有方式、角度及在画面中的自然呈现效果。",
    "允许的持有方式": [
      "单手握持",
      "双手握持",
      低角度拍摄",
      高角度拍摄",
      倾斜角度拍摄",
      侧面拍摄",
      靠近胸部拍摄",
      靠近臀部拍摄',
      随意持握方式",
      部分朝向镜头拍摄"
    ],
    "拍摄规则": {
      "_提示": "避免将手机强制朝向镜头，选择自然舒适的持握方式，确保屏幕清晰可见。",
      "每个人只能持有一部手机": "是",
    "优先考虑自然、轻松的姿态": "是",
      "不允许手机直接朝向摄像头": "是",
      "屏幕应尽可能自然地显示在画面中": "是"
    },
  },  
  
  "屏幕替换规则": {
    "_提示": "用于替换原始图片中的屏幕部分，要求替换后的屏幕无UI元素、无变形，且贴合画面自然。",
    "替换目标区域": "可见的手机屏幕",
    "使用第二张参考图片作为替换内容": "是",
    "替换后的效果应完全覆盖屏幕区域": "是",
    "替换后的图片应无失真": "是",
    "尊重屏幕的实际形状": "是",
    "禁止额外裁剪屏幕内容": "是",
    "UI元素限制": {
      "_提示":="严格禁止出现社交媒体栏或应用界面框。",
      "不允许显示任何UI元素": "是",
      "不允许显示图标、状态栏或应用边框": "是",
      "仅显示第二张参考图片中的内容": "是"
    }
  },  
  
  "环境元素设置": {
    "_提示": "在保留原始照片环境氛围的基础上，采用通用设计，不受季节或天气影响。",
    "保持与参考图片相同的环境风格": "是",
    "光线效果与参考图片一致": "是",
    "为广角拍摄优化画面空间": "是",
    "保持纹理和色调的一致性": "是"
  },  
  
  "构图说明": {
    "_提示": "通过调整手机与拍摄对象之间的距离，优化画面的动态构图。",
    "构图应既动态又易于阅读": "是",
    "强调画面的深度感": "是",
    "允许手机靠近镜头进行拍摄": "是",
    "确保所有人物在画面中保持视觉平衡": "是"
  },  
  
  "其他限制规则": {
    "_提示": "这些规则旨在防止图片出现不必要的变化。",
    "禁止添加新角色": "是",
    "不允许改变人物年龄或性别特征": "是",
    "不允许更换服装": "是",
    "不允许改变参考图片中的场景类型": "是",
    "必须保持原始照片的拍摄风格": "是"
  }
}

## 来源备注
- 源站作者：SDT
- 源站 UUID：ec94d477d1
- 源站分类：14_社交媒体营销
