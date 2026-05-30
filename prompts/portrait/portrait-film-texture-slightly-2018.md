---
id: portrait-film-texture-slightly-2018
title: "胶片质感卧室少女写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["胶片", "卧室", "女孩", "怀旧", "安静", "暖调", "拼贴", "扎染"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
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
  "model": "gemini-nano-banana-pro",
  "task": "image_generation",
  "style": "cinematic_realism",
  "scene": {
    "setting": "small bedroom with an intimate, lived-in feel",
    "background": "wall covered with polaroid photos, handwritten notes, sketches, and taped memories arranged like a personal collage",
    "time_of_day": "night",
    "mood": "nostalgic, quiet, emotionally warm, slightly messy in a real way"
  },
  "subject": {
    "type": "young woman",
    "pose": "slight lean forward with relaxed shoulders, casual slouch, hands loosely folded near the lap",
    "expression": "soft half-smile, tired but comfortable, natural and unforced",
    "hair": "messy dark hair loosely tied back with strands falling around the face",
    "wardrobe": "oversized {"sweatshirt style" "pastel tie-dye sweatshirt"}, relaxed and cozy fit"
  },
  "composition": {
    "framing": "medium close-up portrait",
    "camera_angle": "eye-level",
    "focus": "sharp focus on face with subtle falloff into background",
    "background_detail_level": "visible but gently softened",
    "rule_of_thirds": true,
    "depth_of_field": "shallow depth of field"
  },
  "lighting": {
    "primary_light": "direct on-camera flash",
    "flash_style": "film point-and-shoot look with slightly harsh highlights and realistic shadows",
    "ambient_light": "dim warm room lighting",
    "contrast": "moderate contrast with soft midtones",
    "skin_tone": "natural with slight texture, no smoothing"
  },
  "camera": {
    "camera_type": "35mm film point-and-shoot",
    "lens": "35mm",
    "aperture": "f/2.8",
    "shutter_speed": "1/60",
    "iso": 800,
    "film_stock_emulation": "Kodak Portra 400",
    "grain": "fine-to-medium natural film grain",
    "vignette": "subtle"
  },
  "color_grading": {
    "palette": "muted pastels, warm beige walls, soft neutral shadows",
    "tone": "slightly desaturated, nostalgic",
    "highlights": "slightly warm",
    "shadows": "cool-neutral"
  },
  "texture_and_realism": {
    "skin_detail": "real pores, slight redness, tiny imperfections preserved",
    "fabric_detail": "visible sweatshirt texture and natural wrinkles",
    "wall_texture": "paper edges, tape marks, slight wall grain"
  },
  "post_processing": {
    "sharpness": "natural",
    "clarity": "medium-low",
    "bloom": "none",
    "hdr": "off",
    "retouching": "none"
  },
  "negative_prompt": [
    "plastic skin",
    "over-smooth face",
    "ai beauty filter",
    "oversaturated colors",
    "studio lighting",
    "perfect symmetrical face",
    "hyper sharp digital look",
    "anime style",
    "cartoon style",
    "overly glossy lips",
    "fake pores texture"
  ],
  "output": {
    "aspect_ratio": "9:16",
    "resolution": "high",
    "quality": "photorealistic",
    "export_look": "raw film scan aesthetic"
  }
}

## 中文译文（源站提供）
```json
{
  "model": "gemini-nano-banana-pro",
  "task": "image_generation",
  "style": "cinematic_realism",
  "scene": {
    "setting": "一间小卧室，温馨而有生活气息",
    "background": "墙壁上贴满了拍立得照片、手写便签、素描和用胶带固定的回忆，构成了一幅个人拼贴画",
    "time_of_day": "夜晚",
    "mood": "怀旧、宁静、情感温暖、略显凌乱但真实"
  },
  "subject": {
    "type": "年轻女性",
    "pose": "身体略微前倾，肩膀放松，随意地靠着，双手松散地搭在膝盖附近",
    "expression": "柔和的半微笑，疲惫但舒适，自然不做作",
    "hair": "凌乱的深色头发松散地扎在后面，发丝垂落在脸庞",
    "wardrobe": "宽松的 {\"sweatshirt style\" \"扎染马卡龙色卫衣\"}，休闲舒适的版型"
  },
  "composition": {
    "framing": "中景特写肖像",
    "camera_angle": "平视",
    "focus": "面部锐利对焦，背景柔和虚化",
    "background_detail_level": "可见但柔和虚化",
    "rule_of_thirds": true,
    "depth_of_field": "浅景深"
  },
  "lighting": {
    "primary_light": "直射机内闪光灯",
    "flash_style": "胶片傻瓜相机风格，高光略显生硬，阴影真实",
    "ambient_light": "昏暗温暖的室内照明",
    "contrast": "中等对比度，柔和的中间调",
    "skin_tone": "自然肤色，略带纹理，无平滑处理"
  },
  "camera": {
    "camera_type": "35mm 胶片傻瓜相机",
    "lens": "35mm",
    "aperture": "f/2.8",
    "shutter_speed": "1/60",
    "iso": 800,
    "film_stock_emulation": "Kodak Portra 400",
    "grain": "细到中等自然胶片颗粒",
    "vignette": "轻微暗角"
  },
  "color_grading": {
    "palette": "柔和的马卡龙色调，暖米色墙壁，柔和的中性阴影",
    "tone": "略微去饱和，怀旧感",
    "highlights": "略微偏暖",
    "shadows": "冷中性"
  },
  "texture_and_realism": {
    "skin_detail": "保留真实的毛孔、轻微泛红和微小瑕疵",
    "fabric_detail": "可见卫衣纹理和自然褶皱",
    "wall_texture": "纸张边缘、胶带痕迹、轻微墙壁纹理"
  },
  "post_processing": {
    "sharpness": "自然",
    "clarity": "中低",
    "bloom": "无",
    "hdr": "关",
    "retouching": "无"
  },
  "negative_prompt": [
    "塑料皮肤",
    "过度平滑的脸部",
    "AI 美颜滤镜",
    "色彩过饱和",
    "影棚布光",
    "完美对称的脸",
    "超锐利的数码感",
    "动漫风格",
    "卡通风格",
    "过于油亮的嘴唇",
    "虚假的毛孔纹理"
  ],
  "output": {
    "aspect_ratio": "9:16",
    "resolution": "高",
    "quality": "照片级真实感",
    "export_look": "原始胶片扫描美学"
  }
}
```

## 来源备注
- 源站作者：Maercih
- 源站 UUID：zRBJnpQiGa
- 源站分类：05_人物肖像与写实摄影
