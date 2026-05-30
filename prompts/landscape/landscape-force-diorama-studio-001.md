---
id: "landscape-force-diorama-studio-001"
title: "动漫角色转3D手办场景化渲染预设"
category: landscape
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["手办", "白发", "背影", "悬崖", "海洋", "海鸥", "晴天", "自然"]
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
■ COMPOSITION_MODE：構図とアングル
Faithful Framing:元のイラストのズーム倍率や構図を「そのまま」維持します。
Full-Body:元の絵が上半身だけでも、足元まで補完して「全身フィギュア」として描き出します。
High-Angle View:斜め45度上からの「俯瞰（鳥瞰）視点」へ強制的に切り替えます。

■ ENVIRONMENT_TYPE：背景の構築
Auto: AIが元画像を分析し、詳細な背景があれば「ジオラマ」を、シンプルなら「スタジオ背景」を自動選択します。
Force Diorama: 元の絵が白バックでも、無理やり精巧なミニチュアセット（街並み、自然、室内など）を構築します。
Force Studio: どんな背景も消し去り、清潔感のある撮影用の背景紙やアクリル板に変更します。

■ ASPECT_RATIO：画面の比率
Inherit: 元画像と同じ比率。
Square: 1:1。SNS投稿やアイコン風の構図に。
Portrait: 9:16。スマホの壁紙用や、立ち姿のフィギュアをダイナミックに見せる際に。
Landscape: 16:9。横長のジオラマセットを広く見せたい場合に。

■ DISPLAY_BASE：台座の選択
Simple Round: 透明または不透明な円形のプラスチック台座。最も一般的なフィギュアらしい見た目になります。
Decorative: キャラクターのテーマに合わせた装飾付きの専用台座（瓦礫、魔法陣、豪華な意匠など）。
Diorama Floor: 台座という概念をなくし、フィギュアが直接ジオラマの地面に立っている状態にします。
None: 台座も地面のディテールも排除した、最もシンプルな自立状態。

■ DENSITY：情報の密度
Standard: すっきりと整理された、カタログ写真のような仕上がり。
High: ジオラマ内に大量の小物（模型用の草、瓦礫、家具のミニチュアなど）を追加し、情報密度を極限まで高めます。

■ FIGURE_MATERIAL：フィギュアの材質感
Standard PVC: 市販フィギュアの標準的なプラスチック感。光を柔らかく拡散します。
Premium Resin: 緻密な造形と、わずかな透明感を伴う高級な樹脂感。ガレージキットのような質感。
Glossy Plastic: ツヤあり塗装を施したような、強い反射を伴う質感。

■ LIGHTING_STYLE：ライティング（照明）
Natural: 窓際で撮ったような柔らかい自然光。日常的な雰囲気。
Bright Studio: 複数の照明を当てた、影が少なくディテールがはっきり見える広告写真風。
Cinematic: 強いコントラストと陰影で、物語の一場面のような重厚な雰囲気を演出。

## 中文译文（源站提供）
■ COMPOSITION_MODE: 构图模式与视角
Faithful Framing（忠实构图）：保持原始插图的缩放比例和构图“原样”。
Full-Body（全身）：即使原始图像只有上半身，也会补齐双脚，呈现“全身形象”。
High-Angle View（高角度视图）：强制切换到 45 度高角度的“俯视（鸟瞰）视角”。

■ ENVIRONMENT_TYPE: 背景构建
Auto（自动）：AI 分析原始图像，如果背景细节丰富则自动选择“Diorama（情景模型）”，如果背景简单则选择“Studio Background（影棚背景）”。
Force Diorama（强制情景模型）：即使原始图像是白色背景，也会强制构建一个精致的微缩场景（城市景观、自然风光、室内等）。
Force Studio（强制影棚）：消除任何背景，替换为干净的摄影背景布或亚克力板。

■ ASPECT_RATIO: 屏幕比例
Inherit（继承）：与原始图像相同的比例。
Square（正方形）：1:1。适用于社交媒体帖子或图标风格的构图。
Portrait（肖像）：9:16。适用于智能手机壁纸或动态展示站立人物。
Landscape（横向）：16:9。适用于展示宽广的情景模型场景。

■ DISPLAY_BASE: 底座选择
Simple Round（简单圆形）：透明或不透明的圆形塑料底座。呈现最常见的模型外观。
Decorative（装饰性）：带有与角色主题相符的装饰（碎石、魔法阵、华丽设计等）的定制底座。
Diorama Floor（情景模型地面）：消除底座的概念，将人物直接放置在情景模型地面上。
None（无）：不包含底座和地面细节，呈现最简单的自立状态。

■ DENSITY: 信息密度
Standard（标准）：整洁、有序的完成效果，如同目录照片。
High（高）：在情景模型中添加大量小物件（模型草、碎石、微缩家具等），以最大化信息密度。

■ FIGURE_MATERIAL: 人物材质纹理
Standard PVC（标准 PVC）：商业模型常见的标准塑料质感。柔和地漫射光线。
Premium Resin（高级树脂）：细节丰富的造型和略带透明感的高级树脂质感。类似 GK 模型（Garage Kit）的质感。
Glossy Plastic（光泽塑料）：具有强烈反光效果的质感，如同高光泽漆面。

■ LIGHTING_STYLE: 灯光
Natural（自然）：柔和的自然光，如同在窗边拍摄。日常氛围。
Bright Studio（明亮影棚）：广告照片风格，多光源，阴影极少，细节清晰。
Cinematic（电影感）：强烈的对比度和阴影，营造出深刻的氛围，如同故事中的场景。

## 来源备注
- 源站作者：ハイさん
- 源站 UUID：KErKuHtKDy
- 源站分类：12_手工玩具手办
