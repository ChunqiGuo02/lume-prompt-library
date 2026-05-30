---
id: architecture-quality-led-balance-0010
title: "任意风格转换夜景效果"
category: architecture
subcategory: "01_建筑室内空间设计"
aesthetic: null
tags: ["建筑", "黄昏", "设计", "商铺", "玻璃", "拱顶", "木构", "景观"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{

  "任务要求": "按照以下要求将图像转换为真实照片，严格保持图像内容的一致性，严格保持图像中建筑与环境的一致性，不改变图像的拍摄角度与构图",

  "camera_gear": {

    "model": "飞思 One XF IQ4 150MP / 哈苏 H6D-100c / 佳能 EOS R5",

    "lens": "移轴广角 TS-E 24mm f/3.5L II / PC-E Nikkor 24mm f/3.5D ED",

    "sensor": "中画幅 1500万像素背照式CMOS / 全画幅 4500万像素堆叠式传感器",

    "shutter_speed": "1/30s - 1/60s",

    "aperture": "f/8.0 - f/11"

  },

  "lighting_setup": {

    "time_of_day": "民用暮光时段（日落后20-30分钟，蓝调时刻，天空保持澄澈湛蓝）",

    "weather": "高大气透明度的晴朗天空",

    "lighting_direction": "天顶残留的顶部天光，混合自下而上的暖调景观照明",

    "quality": "高调柔和环境光，搭配多层人工照明",

    "artificial_light": "一体化景观照明系统：地埋式LED上射灯（3000K）照亮树冠，树下线性LED槽灯（2700K），低层玻璃透出深琥珀色室内办公灯光"

  },

  "color_grading": {

    "palette": "分色调：青蓝色天空（4500K）与深琥珀色景观照明（3000K）形成对比",

    "saturation": "低饱和度，强化天空蓝与景观绿的鲜活感，增强灯具暖调，阴影区域保持低饱和",

    "contrast": "中等对比度，提亮阴影，缩小室内外明暗差，实现平滑影调过渡"

  },

  "texture_quality": {

    "details": "超锐利的建筑细节，捕捉玻璃反光、被照亮树木的单片叶片、长椅表面的暖光渐变，透过玻璃清晰可见室内家具",

    "surface_descriptions": "低铁反射玻璃倒映天空渐变、暖调石材、反射环境光的平整铺路石"

  },

  "composition_guide": {

    "type": "对称式一点透视，人眼水平拍摄高度",

    "balance": "完美对称平衡"

  },

  "atmosphere": {

    "mood": "温馨宜人",

    "feeling": "通透开阔、繁荣兴盛、科技感与自然融合的宜人公共空间"

  },

  "technical_quality": {

    "post_processing": "透视校正以实现建筑垂直线条完全对齐，强化建筑线条清晰度，控制玻璃反光高光",

    "white_balance": "双白平衡：室外平衡至4000K以呈现纯净蓝天，人工照明保留3000K暖调渲染，形成自然色彩对比",

    "tone": "以高调为主（深灰影调），避免死黑",

    "vignette": "无",

    "dynamic_range": "标准动态范围，重点保留高光区域纹理细节"

  }

}

## 来源备注
- 源站作者：CHIEF AI
- 源站 UUID：w0IhamRzZW
- 源站分类：01_建筑室内空间设计
