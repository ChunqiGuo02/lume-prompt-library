---
id: "landscape-node-module-lounge-001"
title: "知性优雅 lounge 人像生"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["肖像", "时尚", "知性", "休闲", "室内", "温暖", "暖光", "格子"]
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
Fashionable Lounge Portrait Generation
Gemini Ai Nano Banana 3.0
Prompt:•
{
"pipeline_sequence_v5": {
"global_settings": {
"project_name": "INTELLECTUAL_CHIC_LOUNGE",
"render_target": {
"width": 960,
"height": 1280,
"ratio": "3:4"
},
"seed_strategy": "Fixed",
"steps": 50
},
"node_01_subject_initialization": {
"module": "Identity_Preservation",
"parameters": {
"source_input": "Attached_Image_Buffer",
"face_restore_strength": 1.0,
"feature_lock": {
"eyes": "Strict",
"nose": "Strict",
"mouth": "Strict",
"skin_texture": "Blend_with_Prompt"
}
},
"morphology": {
"hair": {
"style": "Long Wavy",
"color": "Brown",
"physics": "Soft_Drape_Over_Shoulders"
},
"makeup": {
"lips": "Soft Pink",
"finish": "Matte",
"intensity": "Natural_Glam"
}
}
},
"node_02_kinematics_control": {
"module": "ControlNet_OpenPose",
"pose_skeleton": {
"body_orientation": "Seated",
"spine_curve": "Upright_Confident",
"right_leg": {
"state": "Bent_Elevated_Crossed",
"contact_surface": "Chair_Seat_Edge"
},
"left_leg": {
"state": "Relaxed_Grounded"
},
"head_vector": {
"pitch": 0,
"yaw": 0,
"target": "Lens_Direct"
}
}
},
"node_03_wardrobe_assembly": {
"module": "Layered_Clothing_Generator",
"layers": [
{
"layer_id": 1,
"item": "Crop Top",
"material": "Knit/Cotton",
"color_hex": "#E1AD01",
"color_name": "Mustard Yellow",
"fit": "Fitted"
},
{
"layer_id": 2,
"item": "Mini Skirt",
"style": "High-Waisted",
"pattern": "Plaid_Tartan",
"color_palette": "Brown_Navy_Mix"
},
{
"layer_id": 3,
"item": "Blazer",
"pattern": "Matching_Plaid_Set",
"wear_style": "Draped_Over_Shoulders",
"physics_constraint": "No_Arm_Insertion_Cape_Style"
},
{
"layer_id": 4,
"item": "Accessories",
"elements": [
{ "type": "Eyewear", "style": "Stylish Dark-rimmed Glasses" }
]
}
]
},
"node_04_environment_stage": {
"module": "Scene_Builder",
"setting_type": "Lounge_Interior",
"assets": {
"furniture": "Plush_Armchair",
"background_elements": "Soft_Curtains, Bokeh Lights",
"material_override": "Rich_Brown_Fabrics"
},
"atmosphere": {
"mood": "Intellectual_Warm",
"clutter_density": "Low_Elegant"
}
},
"node_05_lighting_engine": {
"module": "Illumination",
"setup": {
"primary_source": "Warm_Window_Light",
"fill_light": "Interior_Ambient_Soft",
"color_grading_lut": "Vintage_Warmth",
"shadow_quality": "Soft_Diffusion"
}
},
"node_06_post_processing": {
"module": "Text_Overlay",
"content": "Shreya Yadav",
"font_style": "Stylish_Script_Signature",
"opacity": 0.8,
"position": "Bottom_Right_Corner",
"color": "White_or_Gold"
}
}
}

## 中文译文（源站提供）
"pipeline_sequence_v5": {  
    "global_settings": {  
      "project_name": "INTELLECTUAL_CHIC_LOUNGE",  
      "render_target": {  
        "width": 960,  
        "height": 1280,  
        "ratio": "3:4"  
      },  
      "seed_strategy": "F

## 来源备注
- 源站作者：Shreya Yadav
- 源站 UUID：c3acca1bc0
- 源站分类：05_人物肖像与写实摄影
