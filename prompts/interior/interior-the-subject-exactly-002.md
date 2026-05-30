---
id: "interior-the-subject-exactly-002"
title: "蓝箱双人搞怪四格照"
category: interior
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["蓝色", "拼贴", "写真", "闺蜜", "俏皮", "搞怪", "女性", "广角"]
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
related_to: ["interior-the-subject-exactly-001"]
---

# 正文 prompt
{
  "task": "Create an iPhone-realistic photobooth collage (4 photos in a 2x2 grid)",
  "subjects": [
    {
      "id": "Subject 1",
      "description": "EXACTLY from the Reference Image (same face, hairstyle, skin tone, body proportions, overall look).",
      "outfit": "EXACTLY the same as in the Reference Image. Do not change clothing, glasses, or accessories."
    },
    {
      "id": "Subject 2",
      "description": "EXACTLY from the Reference Image (same face, hairstyle, skin tone, body proportions, overall look).",
      "outfit": "EXACTLY the same as in the Reference Image. Do not change clothing, glasses, or accessories."
    }
  ],
  "scene": {
    "location": "Inside a small BOX photo booth",
    "background": "Matte blue walls and blue floor, tight enclosed corner, clean minimal environment",
    "camera_look": "Ultra wide / slight fisheye lens look with subtle perspective distortion typical of photobox cameras. iPhone 17 Pro, photobooth wide-angle.",
    "lighting": "Bright neutral-white flash lighting, evenly illuminating faces, soft shadow falloff on blue walls, crisp detail, realistic skin texture. Direct neutral white flash (no yellow / no warm tone).",
    "aesthetic": "4K, amateur photobooth aesthetic, high contrast but still natural, no cinematic grading, no heavy beauty filter, no blur, no text, no watermark."
  },
  "layout": {
    "type": "2x2 grid collage",
    "aspect_ratio": "9:16 (vertical collage)",
    "style": "Clean, with NO white borders, NO frame lines, NO gaps, and NO outlines between photos (seamless collage). Each frame fills its quadrant edge-to-edge."
  },
  "frames": [
    {
      "position": "top-left",
      "content": "Subject 1 leans diagonally toward the camera from the front-left, one arm stretched down, playful serious face; Subject 2 stands behind in the center, arms raised and flexing like “strongman”, smiling."
    },
    {
      "position": "top-right",
      "content": "Subject 2 leans forward toward the camera, hands on knees, curious expression; Subject 1 enters from the right side very close to camera, tilting her head, one arm arched above her head like a half-heart pose, soft smile."
    },
    {
      "position": "bottom-left",
      "content": "Piggyback pose — Subject 1 on Subject 2’s back, arms wrapped around shoulders; both laughing big, faces close to camera, dynamic motion vibe."
    },
    {
      "position": "bottom-right",
      "content": "Subject 2 bends sideways/leans forward with a goofy face; Subject 1 stands behind making playful “claw/horns” hand gestures above Subject 2’s head, slightly pouting for fun."
    }
  ]
}

## 中文译文（源站提供）
```json
{
  "task": "制作一张 iPhone 风格的照相亭拼贴画（2x2 网格，4 张照片）",
  "subjects": [
    {
      "id": "主体 1",
      "description": "与参考图像完全一致（相同的面部、发型、肤色、身体比例、整体外观）。",
      "outfit": "与参考图像完全一致。不要改变服装、眼镜或配饰。"
    },
    {
      "id": "主体 2",
      "description": "与参考图像完全一致（相同的面部、发型、肤色、身体比例、整体外观）。",
      "outfit": "与参考图像完全一致。不要改变服装、眼镜或配饰。"
    }
  ],
  "scene": {
    "location": "在一个小型盒子照相亭内",
    "background": "哑光蓝色墙壁和蓝色地板，紧凑的封闭角落，干净简约的环境",
    "camera_look": "超广角 / 轻微鱼眼镜头效果，具有照相亭相机典型的轻微透视畸变。iPhone 17 Pro，照相亭广角。",
    "lighting": "明亮的自然白闪光灯，均匀照亮面部，蓝色墙壁上柔和的阴影过渡，清晰的细节，逼真的皮肤纹理。直接的自然白闪光（无黄色 / 无暖色调）。",
    "aesthetic": "4K，业余照相亭美学，高对比度但仍自然，无电影调色，无重度美颜滤镜，无模糊，无文字，无水印。"
  },
  "layout": {
    "type": "2x2 网格拼贴",
    "aspect_ratio": "9:16（垂直拼贴）",
    "style": "简洁，无白边，无边框线，无间隙，照片之间无轮廓（无缝拼贴）。每个画框都填满其象限，边缘到边缘。"
  },
  "frames": [
    {
      "position": "左上",
      "content": "主体 1 从左前方斜向镜头倾斜，一只手臂向下伸展，表情顽皮而严肃；主体 2 站在后面中央，手臂举起并像“大力士”一样弯曲，微笑着。"
    },
    {
      "position": "右上",
      "content": "主体 2 身体前倾靠近镜头，双手放在膝盖上，好奇的表情；主体 1 从右侧非常靠近镜头进入，歪着头，一只手臂拱起在头顶上方，像半心形姿势，柔和的微笑。"
    },
    {
      "position": "左下",
      "content": "背人姿势 — 主体 1 骑在主体 2 的背上，手臂环绕肩膀；两人都开怀大笑，脸部靠近镜头，充满动感活力。"
    },
    {
      "position": "右下",
      "content": "主体 2 侧身弯腰/前倾，表情滑稽；主体 1 站在后面，在主体 2 的头顶上方做出顽皮的“爪子/角”手势，略带撅嘴以示趣味。"
    }
  ]
}
```

## 来源备注
- 源站作者：Sudee🥀
- 源站 UUID：3CeAKbVbbL
- 源站分类：09_故事分镜角色设定
