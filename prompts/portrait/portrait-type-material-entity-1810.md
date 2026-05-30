---
id: portrait-type-material-entity-1810
title: "秋日枫林少女写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["秋季", "枫叶", "人像", "暖色调", "黄昏", "山间", "穿搭", "栏杆"]
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
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
Gemini Nano Banana 3.0
Prompt:
{
"scene_object_model": {
"header": {
"simulation_id": "AUTUMN_ACADEMIA_SIM_09",
"engine_context": "Physically_Based_Rendering (PBR)",
"render_target": {
"resolution_x": 1080,
"resolution_y": 1920,
"bit_depth": 32
}
},
"environment_state": {
"atmosphere_controller": {
"solar_azimuth": "Low_Angle (Golden Hour)",
"kelvin_temperature": 3500,
"global_illumination": "Warm_Direct_Sunlight",
"particulates": {
"type": "Pollen/Dust",
"visibility": "Micro_Shimmer",
"density_float": 0.15
}
},
"biome_definition": {
"classification": "Temperate_Deciduous_Forest",
"altitude": "High_Elevation (Mountainside)",
"season_phase": "Late_Autumn"
}
},
"entity_database": [
{
"entity_uuid": "ACTOR_MAIN",
"type": "Dynamic_Mesh_Humanoid",
"components": {
"identity_adapter": {
"source_buffer": "INPUT_IMAGE_REF",
"preservation_strictness": 1.0,
"target_zones": ["Cranial_Structure", "Facial_Dermis", "Eye_Color"]
},
"skeletal_pose_system": {
"root_state": "Seated",
"contact_surface_id": "PROP_RAILING_01",
"spine_vector": "Relaxed_Vertical",
"limb_placement": "Natural_Resting"
},
"wardrobe_assembly": [
{
"slot_id": "TORSO_INNER",
"item_class": "Shirt",
"material_def": "Cotton_Poplin",
"albedo_hex": "#FFFFFF",
"visibility_layer": 0
},
{
"slot_id": "TORSO_OUTER",
"item_class": "Cardigan",
"material_def": "Wool_Cable_Knit",
"texture_normal_map": "High_Depth_Weave",
"albedo_name": "Beige",
"fit_physics": "Loose/Oversized"
},
{
"slot_id": "LOWER_BODY",
"item_class": "Mini_Skirt",
"material_def": "Flannel_Wool",
"pattern_matrix": {
"type": "Plaid/Tartan",
"primary_color": "Brown",
"secondary_color": "Black_Lines"
}
},
{
"slot_id": "LEG_WEAR",
"item_class": "Socks",
"length_enum": "Knee_High",
"albedo_hex": "#000000",
"opacity": 1.0
}
]
}
},
{
"entity_uuid": "PROP_RAILING_01",
"type": "Static_Mesh_Architecture",
"transform": {
"location": "Foreground_Anchor",
"scale": "Human_Scale"
},
"material_shader": {
"type": "Wood_Weathered",
"roughness_float": 0.8,
"displacement_map": "Grain_Texture"
}
},
{
"entity_uuid": "SYSTEM_FOLIAGE_MAPLE",
"type": "Instanced_Static_Mesh",
"distribution_logic": {
"placement": "Surrounding_Frame",
"density": "High",
"depth_sorting": ["Foreground_Blur", "Background_Sharp", "Far_Background_Blur"]
},
"material_shader": {
"biological_species": "Acer (Maple)",
"chlorophyll_level": 0.0,
"anthocyanin_level": 1.0,
"color_ramp": ["# FF4500 (Orange_Red)", "# 8B0000 (Dark_Red)"],
"translucency": "Backlit_Enabled"
}
}
],
"camera_telemetry": {
"lens_focal_length": "85mm (Portrait)",
"aperture_f_stop": 1.8,
"focus_plane_target": "ACTOR_MAIN",
"bokeh_simulation": {
"shape": "Circular",
"intensity": "Creamy",
"chromatic_aberration": "Minimal"
}
}
}
}

## 中文译文（源站提供）
**提示：**  
```json
{
  "scene_object_model": {
    "header": {
      "simulation_id": "AUTUMN_ACADEMIA_SIM_09",
      "engine_context": "Physically_Based_Rendering (PBR)",
      "render_target": {
        "resolution_x": 1080,
        "resolution_y": 1920,
        "bit_depth": 32

## 来源备注
- 源站作者：Yaseen Khan Gul
- 源站 UUID：2554e39a62
- 源站分类：05_人物肖像与写实摄影
