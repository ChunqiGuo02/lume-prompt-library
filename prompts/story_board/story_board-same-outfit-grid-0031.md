---
id: story_board-same-outfit-grid-0031
title: "九宫格时尚杂志封面合成"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["时尚", "九宫格", "3D", "杂志", "黑色", "白色", "穿搭", "人像"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
刚刚学会了这个9宫格+裸感3D的玩法
分享给大家
复刻了渔舟大佬这个图
这个做法要用分层逻辑：
上下两层
最大的问题是：你告诉模型生成9宫格就会生成12个
原因是9宫格中间那个被挡住了，模型会幻觉
所以修改了提示词要求就出来了
老规矩，提示词在评论区👇
提示词：
Create a 2:3 portrait fashion poster featuring THE SAME WOMAN in THE SAME OUTFIT shown in 9 different magazine editorial styles with 3D pop-out effect:
CHARACTER CONSISTENCY (CRITICAL - HIGHEST PRIORITY):
THE SAME female fashion model appears in ALL 9 positions:
- Same face, same facial features, same skin tone, same body type
- Cold-beauty aesthetic: sharp jawline, high cheekbones, aloof minimalist expression
- Early-20s Chinese/Korean fashion model with editorial face
- Her identity NEVER changes across all 9 appearances
OUTFIT CONSISTENCY (NEW RULE):
THE SAME OUTFIT in all 9 positions:
- Oversized black cashmere V-neck sweater (slightly loose fit)
- High-waisted wide-leg pure white tailored trousers
- Black leather loafers with subtle gold horsebit detail
- Neat low bun with slightly messy front strands
- Small gold hoop earrings, thin gold chain necklace
SAME CLOTHING - only photography style, pose, and angle vary
BACKGROUND LAYER (Z=0) - 3×3 Grid with 8 Visible Magazine Styles:
Grid Structure & Occlusion:
- Standard 3×3 layout = 9 magazine editorial shots
- **8 visible cells** (center cell [2,2] COMPLETELY OCCLUDED by 3D figure)
- Cells separated by DISTINCT THICK WHITE LINES (3-4px) for clear separation
[1,1] Vogue Editorial Style:
- Same woman, same outfit
- Pose: Standing tall, hand in pocket, direct powerful gaze
- Style: High contrast lighting, dramatic shadows, sophisticated
- Sharp focus, clear face
[1,2] Harper's Bazaar Style:
- Same woman, same outfit
- Pose: Side profile, looking over shoulder
- Style: Soft glamour lighting, elegant mood
- Sharp focus, clear face
[1,3] Elle Street Style:
- Same woman, same outfit
- Pose: Walking motion, casual confident stride
- Style: Natural daylight, urban chic aesthetic
- Sharp focus, clear face
[2,1] i-D Magazine Style:
- Same woman, same outfit
- Pose: Sitting on minimal cube, legs crossed
- Style: Bold graphic composition, colorful backdrop
- Sharp focus, clear face
[2,3] Dazed & Confused Style:
- Same woman, same outfit
- Pose: Dynamic movement, fabric flowing
- Style: Experimental angles, artistic editorial
- Sharp focus, clear face
[3,1] Marie Claire Corporate Chic:
- Same woman, same outfit
- Pose: Power stance, arms crossed professionally
- Style: Clean corporate aesthetic, neutral tones
- Sharp focus, clear face
[3,2] GQ Minimalist Style:
- Same woman, same outfit
- Pose: Leaning against wall, relaxed elegance
- Style: Architectural composition, clean lines
- Sharp focus, clear face
[3,3] W Magazine Avant-Garde:
- Same woman, same outfit
- Pose: Artistic pose, hand gestures expressive
- Style: Bold contrast, fashion-forward editorial
- Sharp focus, clear face
CRITICAL TECHNICAL SPECS FOR BACKGROUND GRID:
- Deep depth of field (f/16) - ALL faces sharp and clear
- NO bokeh, NO blur, NO out-of-focus areas
- Even bright studio lighting across all cells
- High resolution faces in every cell
- Thick white grid lines clearly visible between cells
- Background color: Bright minimalist concrete/white studio
FOREGROUND LAYER (Z=5-10cm forward) - Hyper-Realistic 3D Pop-out:
THE SAME WOMAN, SAME OUTFIT (Look 5 - Most Dramatic):
- Massive hyper-realistic full-body shot dominating the center
- Positioned at EXACT CENTER, completely occluding center cell [2,2]
- **Head touches very top edge of canvas**
- **Shoes touch very bottom edge of canvas**
- Occupies MAXIMUM vertical space for strong 3D illusion
Pose:
- Dynamic walking forward motion
- Confident stride, mid-step
- Hand on hip or naturally swinging
- Direct gaze at camera, commanding presence
- Full body visible from head to toe
Technical Execution:
- Figure extends 5-10cm forward from background plane
- Hyper-realistic detail (skin texture, fabric weave visible)
- +20% saturation compared to background for "pop forward" effect
- Slightly sharper focus than background (but background still sharp)
OCCLUSION MECHANICS (9格 - 1格遮挡 = 8格可见):
Complete Occlusion:
- Figure's body COMPLETELY covers center cell [2,2] (100% invisible)
- Center magazine shot is fully hidden behind 3D figure
Partial Occlusion (Natural Edge Overlap):
- Top [1,2]: Hair/head overlaps 10-15% into Harper's Bazaar shot
- Left [2,1]: Left arm/sleeve overlaps 15-20% into i-D shot
- Right [2,3]: Right arm overlaps 15-20% into Dazed shot
- Bottom [3,2]: Legs/feet overlap 10-15% into GQ shot
- Overlaps break the white grid boundaries naturally
Edge Treatment:
- Soft organic transitions, NO hard cutout edges
- Figure appears to physically exist in front of the grid
- Like a 3D cardboard cutout standing in front of a poster
DEPTH EFFECTS:
Shadows:
- Drop shadow from 3D figure onto grid background
* Blur: 12px
* Color: rgba(0,0,0,0.25) (slightly darker for stronger effect)
* Offset: X=6px, Y=10px
- Contact shadow where figure "stands" on background
* Blur: 8px
* Color: rgba(0,0,0,0.35)
* Creates grounding effect
Lighting:
- Background grid: Even bright studio lighting (no dramatic shadows)
- Foreground figure:
* Key light upper left 45°
* Subtle rim light on edges for separation
* Slightly more dramatic lighting than background
- Consistent lighting direction across all elements
Separation Techniques:
- Slight brightness difference (foreground +10% brighter)
- Slight saturation boost (foreground +20% more saturated)
- Subtle sharpening halo around figure edges
- Clear Z-axis spatial hierarchy
CONSISTENCY RULES (ABSOLUTE PRIORITY):
Same Woman Verification:
- Same face in all 9 positions
- Same facial structure, eyes, nose, lips, jawline
- Same cold-beauty editorial expression
- Same hair styling (low bun, messy strands)
- Same age, same ethnicity, same beauty
Same Outfit Verification:
- Same black sweater in all 9 shots
- Same white trousers in all 9 shots
- Same accessories (earrings, necklace, loafers)
- Only photography style and pose differ
What Changes:
- ✅ Magazine editorial style (lighting, mood, composition)
- ✅ Pose and body angle
- ✅ Camera angle and framing
- ✅ Photographic treatment
What NEVER Changes:
- ❌ The woman's face or identity
- ❌ The outfit or clothing items
- ❌ The accessories
- ❌ The overall styling concept
TECHNICAL SPECIFICATIONS:
Image Composition:
- Aspect ratio: 2:3 portrait (or 9:16 vertical)
- Resolution: 2000×3000 pixels (or higher)
- Color mode: RGB, sRGB color space
- Quality: Professional editorial fashion photography
Camera & Focus:
- **Deep depth of field (f/16 or higher)**
- **NO selective focus, NO bokeh, NO blur**
- **ALL faces in background grid MUST be sharp and clear**
- Foreground figure slightly sharper for hierarchy
- Both layers fully illuminated and visible
Environment:
- Bright minimalist indoor studio
- Concrete walls or pure white background
- Optional: Minimal green plants for visual interest
- Clean, uncluttered aesthetic
- Quiet luxury mood
Layout:
- Background: Clear 3×3 grid with THICK WHITE LINES visible
- Foreground: Massive full-body figure breaking grid boundaries
- Surreal creative collage composition
- Graphic and editorial feel
FORBIDDEN ELEMENTS (严格禁止):
Character & Outfit:
- ❌ Different women in different cells
- ❌ Different outfits or clothing changes
- ❌ Changing facial features or styling
- ❌ Multiple models instead of one person
Technical:
- ❌ Blurred background or bokeh effect
- ❌ Out of focus faces in grid
- ❌ Shallow depth of field
- ❌ Missing or unclear grid lines
- ❌ Dark shadows obscuring faces
- ❌ Low resolution or pixelation
- ❌ Deformed limbs or merging bodies
- ❌ Messy composition
Structure:
- ❌ 4×4 or other grid sizes (must be 3×3)
- ❌ All 9 cells visible (center must be occluded)
- ❌ Flat composition (must have clear 3D depth)
- ❌ Hard cutout edges on foreground figure
QUALITY CHECKLIST:
Before Generation:
- [ ] Same woman's face in all 9 positions?
- [ ] Same outfit in all 9 positions?
- [ ] Each cell shows different magazine editorial style?
- [ ] Center cell [2,2] completely hidden?
- [ ] 8 visible background cells clearly defined?
- [ ] Thick white grid lines visible?
- [ ] ALL background faces sharp and clear (no blur)?
- [ ] Foreground figure full-body, head-to-toe?
- [ ] Figure extends maximum vertical space?
- [ ] Clear 3D pop-out effect?
- [ ] Natural edge overlaps into adjacent cells?
- [ ] Shadows present for depth?
- [ ] Deep depth of field maintained?
MIDJOURNEY/AI COMMAND FORMAT:
/imagine prompt: A surreal 3x3 fashion grid collage with THICK WHITE LINES separating cells. Background shows THE SAME Chinese fashion model in THE SAME black oversized sweater and white wide-leg trousers in 8 different magazine editorial styles (Vogue, Harper's Bazaar, Elle, i-D, Dazed, Marie Claire, GQ, W Magazine) - various poses but identical outfit. CENTER CELL HIDDEN. OVERLAID by a massive hyper-realistic full-body 3D cut-out of the SAME MODEL in SAME OUTFIT walking forward, head touching top edge, feet touching bottom edge. ALL faces sharp and in focus, deep depth of field f/16, no blur anywhere, bright studio lighting, clear white grid lines, strong 3D pop-out effect, editorial photography, same woman same clothes 9 times, 8k resolution --ar 2:3 --v 6.1 --stylize 300 --quality 2
MATHEMATICAL LOGIC:
Same woman × Same outfit × 9 different magazine editorial styles arranged in 3×3 grid. Center style completely occluded by 3D foreground version = 8 visible background editorial styles + 1 foreground 3D editorial = 9 total appearances of ONE PERSON in ONE OUTFIT with NINE photographic interpretations.

## 中文译文（源站提供）
**创作要求：**  
制作一张2:3比例的时尚海报，展现同一位女性穿着同一套服装，以9种不同的杂志插画风格呈现，并带有3D立体效果：  

**人物一致性（关键要求 – 最高优先级）：**  
同一位女性模特必须出现在所有9个位置中

## 来源备注
- 源站作者：huangserva
- 源站 UUID：AxnqBvAdfN
- 源站分类：09_故事分镜角色设定
