---
id: landscape-weapon-action-hint-0133
title: "武器大师：战姿美学生成器"
category: landscape
subcategory: "15_特定场景环境生成"
aesthetic: null
tags: ["少女", "长发", "黑发", "狙击枪", "暗调", "酷感", "废楼", "氛围"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "16:9"
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
【nano banana proで自動的に武器の使い方を判断しかっこいい構図にするプロンプト】
①人物の写真をアップロード
②武器の画像をアップロード
③以下のJSON をそのまま貼る
{
"preset_name": "Ultimate_Weapon_Mastery",
"mission": "MAXIMIZE_LETHALITY_AND_AESTHETICS",
"source_integrity": {
"_hint": "【前提】人物の同一性は維持するが、戦闘時特有の『鋭い目つき』や『風になびく髪』などの演出変化は積極的に許容する。",
"identity_lock": "strict_facial_features",
"combat_mode_adaptations": {
"expression": "intense_focus_or_fearless_smile",
"hair_physics": "dynamic_flow_matching_action_speed",
"clothing_damage": "optional_minor_wear_and_tear_for_realism"
}
},
"weapon_analysis_engine": {
"_hint": "【武器解析】持たされた武器の『種類』『重心』『殺傷方法』を解析し、最適な構えを決定する。",
"analyze_weapon_class": true,
"tactical_mapping_logic": {
"class_blade_light": {
"keywords": ["katana", "dagger", "saber"],
"action_style": "high_speed_slash_or_iaijutsu_stance",
"camera_effect": "motion_blur_on_blade"
},
"class_blade_heavy": {
"keywords": ["greatsword", "axe", "hammer"],
"action_style": "weighty_impact_pose_using_ground_drag_or_shoulder_rest",
"camera_effect": "camera_shake_simulation"
},
"class_firearm_handgun": {
"keywords": ["pistol", "revolver", "dual_wield"],
"action_style": "close_quarters_combat_stance_(C.A.R._system)_or_dynamic_aim",
"grip_discipline": "trigger_discipline_active"
},
"class_firearm_long": {
"keywords": ["rifle", "sniper", "shotgun"],
"action_style": "stable_aiming_with_cheek_weld_or_patrol_carry",
"perspective": "looking_down_the_sights"
},
"class_polearm": {
"keywords": ["spear", "halberd", "staff"],
"action_style": "dynamic_thrust_with_extended_reach",
"composition_note": "utilize_diagonal_lines_across_frame"
}
}
},
"heroic_pose_database": {
"_hint": "【殺陣（タテ）生成】映画、ゲーム、アニメの『キービジュアル』級のポーズデータを参照し、素人感を排除する。",
"retrieval_logic": {
"source": "cinematic_combat_pose_db",
"query_parameters": [
"weapon_type",
"character_physique",
"desired_coolness_factor"
],
"pose_correction": {
"line_of_action": "strong_s_curve_or_c_curve_body_line",
"silhouette_check": "ensure_weapon_is_clearly_visible_against_background"
}
},
"dynamic_foreshortening": {
"_hint": "【嘘パース】迫力を出すために、カメラに近い武器や手足を誇張して大きく描画する（パースの強調）。",
"apply_perspective_distortion": "moderate_to_high",
"focus_point": "weapon_tip_or_muzzle"
}
},
"cinematic_combat_composition": {
"_hint": "【演出】ただ立っているのではなく、『戦場の空気感』を作る。",
"camera_work": {
"angle": "dutch_angle_to_create_tension",
"height": "low_angle_hero_shot",
"lens_choice": "wide_angle_24mm_for_depth_exaggeration"
},
"visual_effects": {
"lighting": "contrast_heavy_rim_lighting",
"atmosphere": "sparks_dust_or_energy_aura_matching_weapon",
"depth_cue": "blurred_foreground_elements_(debris/sparks)"
}
},
"safety_and_physics_check": {
"_hint": "【安全装置】カッコいいが『アホっぽく』ならないための物理チェック。",
"grip_integrity": "hands_firmly_grasping_handle_not_blade",
"muzzle_awareness": "never_point_gun_at_own_face_unless_story_dictates",
"recoil_anticipation": "posture_must_reflect_weapon_recoil_control"
}
}

## 中文译文（源站提供）
① 上传人物照片  
② 上传武器图片  
③ 直接粘贴以下 JSON 代码：  

```json
{
  "preset_name": "Ultimate_Weapon_Mastery",
  "mission": "MAXIMIZE_LETHALITY_AND_AESTHETICS",
  "source_integrity": {
    "_hint": "【前提】保持人物身份的真实性，但允许战斗中出现的‘锐利的目光’或‘随风飘动的头发’等视觉变化。",
    "identity_lock": "strict_facial_features",
  },
  "combat_mode_adaptations": {
    "expression": "intense_focus_or_fearless_smile",
    "hair_physics": "dynamic_flow_matching_action_speed",
    "clothing_damage": "optional_minor_wear_and_tear_for_realism"
  },
  "weapon_analysis_engine": {
    "_hint": "【武器解析】分析武器的类型、重心和杀伤方式，以确定最佳持枪姿势。",
    "analyze_weapon_class": true,
    "tactical_mapping_logic": {
      "class_blade_light": {
        "keywords": ["katana", "dagger", "saber"],
        "action_style": "high_speed_slash_or_iaijutsu_stance",
        "camera_effect": "motion_blur_on_blade"
      },
      "class_blade_heavy": {
        "keywords": ["greatsword", "axe", "hammer"],
        "action_style": "weighty_impact_pose_using_ground_drag_or_shoulder_rest",
        "camera_effect": "camera_shake_simulation"
      },
      "class_firearm_handgun": {
        "keywords": ["pistol", "revolver", "dual_wield"],
        "action_style": "close_quarters_combat_stance_(C.A.R._system)_or_dynamic_aim",
        "grip_discipline": "trigger_discipline_active"
      },
      "class_firearm_long": {
        "keywords": ["rifle", "sniper", "shotgun"],
        "action_style": "stable_aiming_with_cheek_weld_or_patrol_carry",
        "perspective": "looking_down_the_sights"
      },
      "class_polearm": {
        "keywords": ["spear", "halberd", "staff"],
        "action_style": "dynamic_thrust_with_extended_reach",
        "composition_note": "utilize_diagonal_lines_across_frame"
      }
    },
  },
  "heroic_pose_database": {
    "_hint": "【战斗姿势生成】参考电影、游戏或动画中的经典战斗姿势数据，去除业余感。",
    "retrieval_logic": {
      "source": "cinematic_combat_pose_db",
      "query_parameters": [
        "weapon_type",
        "character_physique",
        "desired_coolness_factor"
      ],
      "pose_correction": {
        "line_of_action": "strong_s_curve_or_c_curve_body_line",
        "silhouette_check": "ensure_weapon_is_clearly_visible_against_background"
      }
    },
    "dynamic_foreshortening": {
      "_hint": "【透视效果】为增强视觉冲击力，将靠近相机的武器和肢体放大显示。",
      "apply_perspective_distortion": "moderate_to_high",
      "focus_point": "weapon_tip_or_muzzle"
    },
    "cinematic_combat_composition": {
      "_hint": "【场景营造】不只是站立不动，要营造出‘战场氛围’。”,
      "camera_work": {
        "angle": "dutch_angle_to_create_tension",
        "height": "low_angle_hero_shot",
        "lens_choice": "wide_angle_24mm_for_depth_exaggeration"
      },
      "visual_effects": {
        "lighting": "contrast_heavy_rim_lighting",
        "atmosphere": "sparks_dust_or_energy_aura_matching_weapon",
        "depth_cue": "blurred_foreground_elements_(debris/sparks)"
      }
    },
    "safety_and_physics_check": {
      "_hint": "【安全性检查】确保画面既酷炫又不会显得滑稽。",
      "grip_integrity": "hands_firmly_grasping_handle_not_blade",
      "muzzle_awareness": "never_point_gun_at_own_face_unless_story_dictates",
      "recoil_anticipation": "posture_must_reflect_weapon_recoil_control"
    }
  }
}
```

按照提示操作，即可生成符合要求的战斗场景画面。

## 来源备注
- 源站作者：mugitan
- 源站 UUID：MV0CkJGQ8y
- 源站分类：15_特定场景环境生成
