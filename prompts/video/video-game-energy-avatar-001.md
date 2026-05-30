---
id: "video-game-energy-avatar-001"
title: "二维格斗游戏序列提示"
category: video
subcategory: "04_动漫游戏视觉与IP改编"
aesthetic: null
tags: ["Seedance 2.0", "2D动漫格斗", "赛璐珞风格", "金紫红配色", "漫画动态线", "街机美学", "银发女战士", "精神投影"]
recommended_models: []
recommended_params:
  aspect_ratio: "16:9"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
# ═══════════════════════════════════════════════
# PROJECT: 2D Fighting Game Sequence
# SPECS: Playstation 4 / 30FPS / Budget 500M JPY
# ═══════════════════════════════════════════════

visual_config:
  style: >
    2D anime-style fighting video game screenshot,
    cel-shaded, bold outlines, gold-purple-crimson palette,
    manga-style dynamic lines, arcade game aesthetic

character_settings:
  player:
    girl: "@Image1"
    avatar: >
      psychic energy avatar, translucent golden humanoid fencer,
      Silver armor plates, glowing cyan eyes,
      appears behind user as spiritual projection
  opponent: "@Image2"

timeline:
  cut_01:
    dur: 6s
    shot: side view full shot
    prompt: >
      stylized 2D fighting video game interface,
      health bars and timer HUD overlay,
      hit counter UI incrementing,
      silver-haired girl performing rapid energy strikes,
      bright golden light effects on each motion,
      dynamic action lines radiating outward,
      special meter gauge filling up,
      neon-lit urban rooftop night stage background,
      arcade game screen composition
    cam: static side view, light screen shake on impacts

  cut_02:
    dur: 3s
    shot: extreme close-up, diagonal screen transition
    prompt: >
      sudden dramatic insert shot,
      screen splits with diagonal wipe transition,
      girl's face in extreme close-up filling frame,
      golden eyes with subtle glow, bold confident grin,
      ink-style shadows across one side of face,
      purple-gold energy aura behind head,
      abstract crimson dynamic lines in background,
      game UI text indicating special activation
    cam: instant snap zoom, tilted angle

  cut_03:
    dur: 5s
    shot: behind girl, over-the-shoulder
    prompt: >
      girl standing arms spread wide seen from behind,
      large translucent psychic avatar rising behind her,
      twice her height, golden armored plates catching light,
      expanding ring of purple-gold energy particles,
      opponent stepping back across the arena,
      background distorts with heat-shimmer effect,
      glowing particles orbit both girl and avatar,
      strong backlight creating dramatic silhouette,
      video game special move activation sequence
    cam: slow dolly in, low angle

  cut_04:
    dur: 8s
    shot: rapid multi-angle montage
    prompt: >
      avatar performs rapid successive energy projections,
      screen filled with overlapping golden light trails,
      cascading visual effects layering dynamically,
      final powerful motion sends energy wave forward,
      full-screen white flash transition,
      large stylized game UI "K.O." text appears with glass-particle burst effect,
      hit counter displays high number,
      opponent life gauge reaches zero,
      video game finishing sequence animation
    cam: rapid angle changes, final moment in slow motion

## 中文译文（源站提供）
# ═══════════════════════════════════════════════
# 项目：2D 格斗游戏序列
# 规格：PlayStation 4 / 30FPS / 预算 500M 日元
# ═══════════════════════════════════════════════

visual_config:
  style: >
    2D 动漫风格格斗视频游戏截图，
    赛璐珀渲染，粗线条轮廓，金紫深红配色，
    漫画式动态线条，街机游戏美学

character_settings:
  player:
    girl: "@Image1"
    avatar: >
      心灵能量化身，半透明金色人形剑士，
      银色盔甲板块，发光青蓝眼睛，
      出现在用户背后作为精神投影
  opponent: "@Image2"

timeline:
  cut_01:
    dur: 6s
    shot: 侧面全景
    prompt: >
      风格化的 2D 格斗游戏界面，
      健康条和计时器 HUD 覆盖层，
      击中计数 UI 增加，
      银发女孩进行快速能量打击，
      每一次动作都有明亮金色光效，
      动态行动线向外辐射，
      特殊计量表填满，
      霓虹灯照耀的都市屋顶夜景背景，
      街机游戏屏幕构图
    cam: 静止侧视，击中时轻微震动

  cut_02:
    dur: 3s
    shot: 极端特写，斜向屏幕过渡
    prompt: >
      突然的戏剧性插入镜头，
      屏幕以斜向擦除过渡分割，
      女孩脸部极端特写填满画面，
      金色眼睛微光闪烁，粗犷自信笑容，
      文字风阴影覆盖脸侧一边，
      头后紫金能量光环，
      背景抽象深红动态线条，
      游戏 UI 文本显示特殊激活
    cam: 即时快门缩放，倾斜角度

  cut_03:
    dur: 5s
    shot: 女孩背面，肩后视角
    prompt: >
      女孩站立双臂张开，从背后观看，
      大型半透明心灵化身在她身后升起，
      高度是她的两倍，金色盔甲板块捕捉光线，
      紫金能量粒子扩散环形，
      对手退回竞技场中央，
      背景因热波纹效应扭曲，
      发光粒子围绕女孩和化身旋转，
      强烈背光形成戏剧性剪影，
      视频游戏特殊动作激活序列
    cam: 缓慢拉近，低角度

  cut_04:
    dur: 8s
    shot: 快速多角度蒙太奇
    prompt: >
      化身进行快速连续能量投射，
      屏幕被重叠的金色光轨填满，
      连绵视觉效果动态层叠，
      最终强力动作将能量波推向前方，
      全屏白色闪光过渡，
      大型风格化游戏 UI “K.O.” 文本出现并伴随玻璃粒子爆炸效果，
      击中计数显示高数字，
      对手生命条归零，
      视频游戏终结序列动画
    cam: 快速角度切换，最终时刻慢动作

## 来源备注
- 源站作者：yachimat - AI Short Anime
- 源站 UUID：r1se627juz
- 源站分类：04_动漫游戏视觉与IP改编
