---
id: portrait-the-glass-skin-2202
title: "超写实双人咖啡馆自拍拼图（参考图匹配）"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: biophilic
tags: ["超写实", "咖啡馆", "人像", "自拍", "绿植", "自然光", "饮品", "暖色调"]
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
Realistic Café Portraits of Two Subjects.
Gemini Ai Nano Banana 3 Pro ⚡
Prompt ⤵️
Subject 1: Girl in the image
Subject 2: Guy in the image
{
"title": "Hyper-realistic two-panel iPhone portrait — Café (Subject1 + Subject2)",
"mode": "text_to_image",
"format": "two_panel_vertical",
"output_size": "2048x3072",
"references": {
"subject1": "subject1_ref.jpg",
"subject2": "subject2_ref.jpg"
},
"prompt": "Hyper-realistic, ultra-photographic two-panel iPhone portrait of two real people, exact-face-matching to the provided reference images (no facial alterations). Both panels share identical angle, spacing, lens perspective and composition so they read as matched diptychs taken in the same seat at the same lush café. Environment: dense bamboo and tropical foliage around a warm wooden table, warm diffused daylight creating gentle highlights and soft, natural shadows across skin, glass, plants and wood. Upper panel — Subject 1: seated, holding a reflective silver phone with a jeweled ring grip catching small bursts of light; deep-red manicured nails; blue-and-white gingham off-shoulder dress with subtle seersucker texture; white lace bandana with delicate perforations; holding a chilled matcha glass with visible condensation droplets, faint fingerprint smudges on the glass, and swirling gradients of matcha and foam at the rim. Lower panel — Subject 2: seated, mirroring the same candid pose, holding a matte metallic phone with tiny scratches and soft reflections; wearing a cream linen shirt with natural slub texture, brown trucker cap (mesh highlights), and beaded accessories; raising a tall iced latte showing layered tones of milk and coffee, melting ice cubes, and misty condensation. Across both panels: micro-details — water rings on the table, smudges on the glass barrier, uneven leaf coloration in foliage, subtle lens glare, micro-reflections on metal and glass, tiny fabric frays and natural skin pores; maintain lifelike texture and micro-imperfections to reinforce authenticity. Lighting: soft, warm, diffused daylight, beautiful skin tones, delicate specular highlights on glass and metal, accurate subsurface scattering on skin. Camera: iPhone portrait-style framing, shallow depth of field with natural bokeh, crisp focal plane on faces and held glasses, matched focal length and angle between panels. Color/tonal: natural, filmic dynamic range, no oversaturation; preserve subtle tonal shifts of matcha and coffee. Composition: two vertically stacked panels, matching framing, consistent perspective and scale so both subjects read as identical-session captures. Strict requirement: faces must match the provided reference images 100% — do not alter facial features, expressions, or identity. Output should be photorealistic and indistinguishable from high-end phone photography.",
"negative_prompt": "cartoon, painting, CGI, 3D render, anime, stylized, over-saturated, over-contrast, extra limbs, mutated, deformed, blurred, lowres, watermark, text, logo, face swap, face altered, change identity, heavy makeup, sexual content, nudity, lens artifacts that obfuscate faces, unnatural skin tones, plastic skin, posterized, artifacts, jagged edges",
"sampling": {
"sampler": "Euler_A",
"steps": 28,
"cfg_scale": 7.5,
"seed": null
},
"quality": {
"detail_level": "ultra",
"face_precision": "exact_reference_match",
"preserve_identity": true
},
"post_processing": {
"denoise_strength": 0.15,
"sharpen": true,
"remove_artifacts": true,
"do_not_smooth_faces": true
},
"notes_for_operator": "Replace reference filenames with actual uploaded image IDs. Enforce strict identity preservation on both subjects. Export two-panel PNG or TIFF at full resolution. If using an inpainting/conditioning model, condition strongly on the reference images for face regions and maintain exact facial geometry."
}.

## 中文译文（源站提供）
两个主题的现实主义咖啡馆肖像。双子座艾纳米香蕉3 Pro⚡提示⤵️主题1：图片中的女孩主题2：图片中的男子{“title”：“超现实主义双面板iPhone肖像——咖啡馆（Subject1+Subject2）”，“mode”：“text_to_image”，“format”：“two_panel_vertical”，“output_size”：“2048x3072”，参考文献“subject1”：“subject1_ref.jpg”，“subject2”：“subject2_ref.jpg”},“提示”：“两个真实人物的超现实、超摄影的双面板iPhone肖像，与提供的参考图像完全匹配（没有面部变化）。两个面板共享相同的角度、间距、镜头视角和构图，因此它们看起来像是在同一个郁郁葱葱的咖啡馆的同一个座位上拍摄的匹配的双联照片。环境：温暖的木桌周围茂密的竹子和热带树叶，温暖的漫射日光在皮肤、玻璃、植物和木材上创造出柔和的高光和柔软的自然阴影精致的穿孔；拿着一个冰镇的抹茶玻璃杯，上面有可见的冷凝液滴、玻璃杯上的淡淡指纹污渍，以及杯边抹茶和泡沫的漩涡渐变。下图——受试者2：坐着，摆出同样坦率的姿势，拿着一部有轻微划痕和柔和反射的哑光金属手机；穿着奶油色亚麻衬衫，带有天然竹节纹理，棕色卡车司机帽（网眼亮点）和串珠配饰；举起一杯高高的冰拿铁，呈现出牛奶和咖啡的分层色调，融化的冰块和薄雾般的凝结。在两个面板上：微小的细节——桌子上的水环、玻璃屏障上的污渍、uneven树叶的颜色，微妙的透镜眩光，金属和玻璃上的微反射，微小的织物磨损和天然的皮肤毛孔；保持逼真的纹理和微小的瑕疵，以增强真实性。照明：柔和、温暖、漫射的日光，美丽的肤色，玻璃和金属上精致的镜面高光，皮肤上精确的次表面散射。相机：iPhone肖像风格的框架，浅景深自然散景，面部和手持眼镜的焦平面清晰，焦距和面板之间的角度相匹配。色彩/色调：自然，电影动态范围，无过饱和；保留抹茶和咖啡的微妙色调变化。构图：两个垂直堆叠的面板，匹配的框架，一致的视角和比例，因此两个主题都被视为相同的会话捕捉。严格要求：面部必须与提供的参考图像100%匹配，不得改变面部特征、表情或身份。输出应该是逼真的，与高端手机摄影没有区别。",“negative_prompt”：“卡通、绘画、CGI、3D渲染、动漫、程式化、过度饱和、过度对比、多余肢体、变异、变形、模糊、低分辨率、水印、文本、徽标、面部交换、面部改变、改变身份、浓妆、性内容、裸体、模糊面部的镜头伪影、不自然的肤色、塑料皮肤、海报化、伪影、锯齿状边缘”，“取样”：{“采样器”：“Euler_A”，“步骤”：28，“cfg_scale”：7.5，“种子”：null},“质量”：{“详细级别”：“超”，“face_pecision”：“exact_reference_match”，“preserve_identity”：true},“后处理”：{“外延强度”：0.15，“锐化”：没错，“remove_artifacts”：正确，“do_not_smoothfaces”：true},“notes_for_operator”：“用实际上传的图像ID替换引用文件名。强制执行严格的标识保护这两个主题。以全分辨率导出双面板PNG或TIFF。如果使用修复/调节模型，请对面部区域的参考图像进行强烈调节，并保持精确的面部几何形状。"}.

## 来源备注
- 源站作者：Shreya Yadav
- 源站 UUID：7a72f6f16c
- 源站分类：05_人物肖像与写实摄影
