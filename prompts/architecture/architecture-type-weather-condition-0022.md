---
id: architecture-type-weather-condition-0022
title: "冬季雪景氛围感渲染"
category: architecture
subcategory: "01_建筑室内空间设计"
aesthetic: nordic-minimal
tags: ["雪景", "城市", "建筑", "冬季", "积雪", "行人", "雪人", "现代"]
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

    "operation": "仅对原图进行渲染操作"

  },

  "input": {

    "base_image": "用户上传底图"

  },

  "output": {

    "type": "渲染图",

    "description": "保持原有构图不变的渲染效果图"

  },

  "style_parameters": {

    "scene_type": "建筑可视化渲染 | 冬季雪景景观 | 现代建筑",

    

    "weather_climate": {

      "season": "深冬",

      "weather_condition": "雪后初晴",

      "snow_coverage": ["地面厚积雪", "屋顶积雪层", "树枝雾凇效果", "雪堆自然起伏"],

      "atmospheric_effects": ["清冽冷空气", "细微雪粉悬浮", "远处薄雾", "低温冷凝效果"],

      "sky_condition": "淡蓝冷调天空，柔和均匀云层，无强烈阳光"

    },



    "lighting_atmosphere": {

      "time_of_day": "傍晚蓝调时刻",

      "light_quality": ["柔和漫射光", "冷色温主导(6500K-8000K)", "低角度斜射光"],

      "interior_lighting": ["暖黄色室内灯光(3000K)", "玻璃内透", "大堂照明溢出", "垂直中庭灯光"],

      "reflections": ["玻璃反射天空冷蓝", "地面积水反光", "雪面细微闪光"],

      "shadow_characteristics": ["柔和边缘阴影", "雪地散射光补光", "建筑投射长影"]

    },



    "landscape_vegetation": {

      "winter_vegetation": ["落叶乔木(无叶枝干)", "灌木丛积雪覆盖", "观赏草枯黄色泽", "常绿针叶树点缀"],

      "ground_cover": ["人行道融雪湿滑", "花坛雪堆", "冰晶质感", "脚印车辙痕迹"],

      "trees_details": ["枝桠积雪", "前景树枝框架构图", "透明冰挂", "树皮湿润质感"],

    },



    "human_elements": {

      "figures": ["冬季服装(厚外套/围巾/背包)", "自然行走姿态", "小尺度人物(体现建筑尺度)", "远景模糊人群"],

      "seasonal_props": ["雪人(桶状帽子/胡萝卜鼻子/树枝手臂)", "冬季活动痕迹"],

      "lifestyle": ["日常通勤", "休闲散步", "建筑使用场景"]

    },



    "material_surface": {

      "snow_properties": ["新鲜粉雪", "压实雪面", "半融化冰晶", "雪与材质交界"],

      "glass_reflection": ["环境映射", "天空反射", "室内灯光透射"],

      "metal_texture": ["磨砂金属", "环境光遮蔽", "细微结霜"],

      "ground_materials": ["深色石材铺装", "防滑地砖", "湿润反光面"]

    },



    "camera_composition": {

      "viewpoint": "人视角度(eye level), 1.6m高度",

      "focal_length": "35-50mm等效焦距(自然透视)",

      "framing": ["前景树枝框架", "S型道路引导线", "中景建筑主体", "远景塔楼层次"],

      "depth_of_field": "前景略虚(f/2.8效果), 建筑主体清晰, 远景轻微雾化",

      "angle": "微微仰视(5-10度), 展现建筑体量感"

    },



    "rendering_technique": {

      "render_engine": "V-Ray/Corona/Arnold照片级渲染",

      "post_processing": ["轻微蓝调色彩分级", "高光柔和化", "对比度适中", "细节锐化"],

      "quality_markers": ["8K分辨率", "光线追踪全局照明", "材质细分曲面", "体积光效果"],

      "style_reference": "MIR/Brick/Snøhetta风格建筑表现图"

    },



    "color_palette": {

      "dominant": ["冷灰蓝(#A4B8C4)", "雪白(#F5F7FA)", "深冰蓝(#6B8BA4)"],

      "accent": ["暖金(#D4AF37)", "室内暖黄(#FFE4B5)", "枯木褐(#8B7355)"],

      "contrast": ["低饱和冷色基调", "暖色点光源点缀", "中性灰过渡"]

    },



    "mood_narrative": {

      "atmosphere": "清冷静谧的北欧冬日氛围",

      "emotional_tone": ["宁静祥和", "现代都市的温暖庇护感", "季节变换的诗意"],

      "story_elements": ["归家动线", "冬日生活场景", "建筑与自然和谐共生"]

    }

  }

}

## 来源备注
- 源站作者：阿真
- 源站 UUID：CPpj6b5stc
- 源站分类：01_建筑室内空间设计
