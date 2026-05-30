---
id: portrait-the-depth-floor-0826
title: "大理石地板上的瑜伽女孩与笔记本电脑"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: japanese-zen-garden
tags: ["写实", "俯拍", "女性", "劈叉", "健身", "黑色", "大理石", "地板"]
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
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "intent": "Photorealistic image generation utilizing the provided depth map as a strict structural control signal to replicate the specific pose and composition.",
  "frame": {
    "aspect_ratio": "1:1",
    "composition": "High-angle, overhead bird's-eye view strictly adhering to the geometry of the uploaded depth map. The subject is centered diagonally.",
    "control_guidance": {
      "type": "Depth Map ControlNet",
      "strength": "1.0",
      "instruction": "Strictly follow the spatial arrangement and depth gradients of the input image to maintain the exact body position and object placement."
    }
  },
  "subject": {
    "identity": "Young adult female with an athletic, flexible physique.",
    "pose": "Performing a full center split (straddle split) on the floor, leaning forward to rest elbows on the ground, exactly matching the depth silhouette.",
    "wardrobe": "Tight-fitting athletic wear. Specifically, opaque black high-waisted leggings that conform to the leg musculature, paired with a matching black sports bra.",
    "action": "Operating a laptop placed on the floor in front of her, resting chin in one hand while using the trackpad with the other.",
    "details": "Barefoot, natural skin texture visible on arms and back."
  },
  "environment": {
    "location": "Luxurious interior space featuring a high-gloss, polished marble floor.",
    "surface_texture": "White Carrara marble with distinctive soft grey veining. The surface is highly reflective, casting faint reflections of the subject and objects.",
    "props": "A silver laptop open on the floor. Surrounding items include a rectangular snack box, a small beverage bottle, and a wrapper, positioned exactly as indicated by the depth map blocks."
  },
  "lighting": {
    "type": "Soft, cool daylight diffused through a window.",
    "interaction": "Light reflects sharply off the polished marble floor, creating specular highlights and soft, cool shadows beneath the subject's legs and the laptop.",
    "color_temperature": "5600K",
    "quality": "Even, shadow-softening illumination suitable for a clean, modern aesthetic."
  },
  "camera": {
    "sensor_format": "Full-frame digital.",
    "lens": "35mm wide-angle lens to capture the spread of the split from above.",
    "camera_position": "Directly overhead (zenith view), parallel to the floor.",
    "focus": "Sharp focus on the subject and the immediate floor area, utilizing the depth map to determine the focal plane."
  },
  "negative": {
    "style": "No wood grain, no carpet, no rustic textures, no anime, no sketch, no low-quality render.",
    "content": "No incorrect limb positioning, no floating objects, no matte floor finish, no distortion of the laptop screen."
  }
}

## 中文译文（源站提供）
{
  "意图": "利用提供的深度图作为严格的结构控制信号，生成具有高度写实感的图像，以精确再现特定的姿势和构图。",
  "画面设置": {
    "宽高比": "1:1",
    "构图方式": "从高角度俯视，严格遵循上传的深度图的几何形状进行拍摄。主体位于画面对角线中心位置。",
    "控制方式": {
      "类型": "深度图控制网络（Depth Map ControlNet）",
      "控制强度": "1.0",
      "指令": "严格遵循输入图像中的空间布局和深度梯度，以确保身体位置和物体摆放的准确性。"
    }
  },
  "主体信息": {
    "身份特征": "年轻女性，拥有健美且柔韧的体态。",
    "动作姿势": "在地板上采取“全中心劈叉”姿势（即双腿完全分开并跨坐在地上），身体前倾，双手肘部撑在地上，这一姿势与深度图中的轮廓完全吻合。",
    "着装": "穿着紧身的运动装。具体包括：不透明的黑色高腰紧身裤，贴合腿部肌肉线条；以及配套的黑色运动文胸。",
    "手部动作": "正在操作放在地板上的笔记本电脑，一只手托着下巴，另一只手通过触控板进行操作。",
    "细节描述": "赤脚站立，手臂和背部的皮肤纹理自然可见。",
  },
  "环境描述": {
    "场景地点": "豪华的室内空间，地面铺设着高光泽抛光的大理石。",
    "表面材质": "白色卡拉拉大理石，带有独特的柔和灰色纹理。表面具有很强的反射性，能够投射出主体和物体的微弱倒影。",
    "道具布置": "地板上放着一台银色的笔记本电脑。周围物品包括一个长方形的零食盒、一个小饮料瓶和一个包装纸，它们的位置均严格按照深度图中的指示进行摆放。",
  },
  "光照效果": {
    "光源类型": "透过窗户照射进来的柔和、冷色调的日光。",
    "光线交互效果": "光线在抛光的大理石地面上产生强烈的反射，形成清晰的高光效果；同时在主体双腿和笔记本电脑下方形成柔和、冷色调的阴影。",
    "色温": "5600K",
    "光照质量": "均匀的光线分布，能够有效减弱阴影，适合营造干净、现代的视觉效果。",
  },
  "摄影设备": {
    "传感器类型": "全画幅数码相机。",
    "镜头类型": "35毫米广角镜头，用于从上方拍摄整个劈叉动作的细节。",
    "拍摄角度": "正上方（天顶视角），与地面平行。",
    "对焦方式": "利用深度图确定焦点平面，使主体和地面区域清晰对焦。",
  },
  "技术要求": {
    "风格限制": "禁止使用带有木纹效果的材料、地毯、乡村风格的纹理；禁止使用动漫风格或草图风格的图像；禁止使用低质量的渲染效果。",
    "内容要求": "确保肢体位置正确，没有漂浮的物体；地面表面应保持光滑无瑕疵；笔记本电脑屏幕画面无变形。"
  }
}

## 来源备注
- 源站作者：IamEmily2050
- 源站 UUID：25134abe2b
- 源站分类：05_人物肖像与写实摄影
