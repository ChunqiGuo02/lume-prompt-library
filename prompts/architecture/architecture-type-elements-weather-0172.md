---
id: architecture-type-elements-weather-0172
title: "阴雨天气氛围森林自然景观建筑渲染"
category: architecture
subcategory: "01_建筑室内空间设计"
aesthetic: biophilic
tags: ["雨天", "建筑", "森林", "溪流", "雾气", "风电", "光伏", "住宅"]
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
{

  "task": "基于用户上传底图生成渲染图",

  "constraints": {

    "composition": "严格遵循参考图的构图和视角",

    "modification": "完全不要修改构图特征",

    "operation": "仅对原图进行渲染操作",

    "material": "严格遵循用户上传图片的材质信息，渲染图需保持原有材质特征"

  },

  "input": {

    "base_image": "用户上传底图"

  },

  "output": {

    "type": "渲染图",

    "description": "保持原有构图不变的渲染效果图"

  },

  "style_parameters": {

    "scene_type": "建筑可视化渲染 | 阴雨森林景观 | 沉浸式自然建筑",

    

    "weather_climate": {

      "weather_condition": "阴雨绵绵",

      "precipitation": ["细雨蒙蒙", "雾气弥漫", "空气湿度饱和", "叶面水珠"],

      "atmospheric_effects": ["层积云低垂", "山间/林间雾气", "远处景物渐隐", "湿润的空气透视"],

      "sky_condition": "铅灰色阴天，云层厚重均匀，无阳光穿透，漫射光环境"

    },



    "lighting_atmosphere": {

      "time_of_day": "阴天的正午或下午，光线昏暗",

      "light_quality": ["极低对比度", "冷色温主导(7000K-9000K)", "柔光无阴影", "漫射环境光"],

      "interior_lighting": ["暖黄色室内灯光(2700K-3000K)", "强烈色温对比", "玻璃内透暖光", "室内照明溢出"],

      "reflections": ["潮湿地面反光", "水面波纹反光", "玻璃反射灰暗天空", "叶面高光"],

      "shadow_characteristics": ["几乎无硬阴影", "极柔和的漫射阴影", "暗部细节丰富", "低动态范围"]

    },



    "landscape_vegetation": {

      "forest_type": ["温带针叶林", "高大云杉/松树", "茂密树冠层", "深色墨绿植被"],

      "ground_cover": ["湿润苔藓", "蕨类植物", "腐烂落叶", "泥泞土地"],

      "trees_details": ["前景树干框景", "枝叶湿润垂坠", "深色粗糙树皮", "远景树木渐隐于雾中"],

      "water_elements": ["湍急溪流", "水面雾气升腾", "岸边碎石", "倒木横陈"]

    },



    "human_elements": {

      "figures": ["小型人物剪影", "室内参观人群(暖光背景下)", "撑伞人物(可选)", "自然散布"],

      "scale_reference": ["人物极小比例", "强调建筑宏大", "森林尺度感"],

      "lifestyle": ["观展活动", "自然探索", "静谧沉思"]

    },



    "material_surface": {

      "wet_surfaces": ["湿润石材", "反光金属屋面", "潮湿混凝土", " glossy leaves"],

      "glass_reflection": ["反射灰暗天空", "反射周围森林", "室内暖光透出", "模糊倒影"],

      "natural_textures": ["粗糙树皮", "湍急水流", "苔藓覆盖岩石", "湿润泥土"],

      "water_properties": ["波纹水面", "白色水花", "深色河水", "雾状水气"]

    },



    "camera_composition": {

      "viewpoint": "人视低角度，约1.2-1.4m高度",

      "focal_length": "24-35mm广角(增强透视感)",

      "framing": ["前景树木框景", "左右两侧树干夹景", "中景建筑主体", "纵深向远处消散"],

      "depth_of_field": "前景略实(树干细节), 远景强烈雾化, 全景深效果",

      "angle": "低角度仰视，强调建筑悬浮感与天空压迫感"

    },



    "rendering_technique": {

      "render_engine": "V-Ray/Corona/Arnold照片级渲染",

      "post_processing": ["青橙色调色", "降低对比度", "暗角效果", "雾气图层叠加", "细节柔化"],

      "quality_markers": ["体积雾效果", "次表面散射(植物)", "全局照明", "水面焦散"],

      "style_reference": "MIR风格暗调森林建筑表现，K2 Visual静谧氛围"

    },



    "color_palette": {

      "dominant": ["深墨绿(#1C2B24)", "青灰色(#3A4F5F)", "暗蓝灰(#2C3E50)", "深褐(#3D3429)"],

      "accent": ["室内暖黄(#F4A460)", "橙色灯光(#FF8C42)", "水面反光白(#E8F4F8)"],

      "contrast": ["高冷暖对比(室内橙黄 vs 环境青蓝)", "极低明暗对比", "饱和度压抑"]

    },



    "mood_narrative": {

      "atmosphere": "神秘静谧的森林秘境氛围",

      "emotional_tone": ["忧郁沉思", "自然敬畏", "孤独宁静", "避世庇护感"],

      "story_elements": ["建筑隐匿于自然", "观者与自然的对话", "雨天庇护所意象", "人工与原始的并置"]

    }

  }

}

## 来源备注
- 源站作者：阿真
- 源站 UUID：7aVBKXyn8e
- 源站分类：01_建筑室内空间设计
