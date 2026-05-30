---
id: architecture-name-argument-default-0204
title: "通过坐标定位同一地点的分屏延时摄影"
category: architecture
subcategory: "15_特定场景环境生成"
aesthetic: null
tags: ["分屏", "时代", "对比", "日本", "城市", "建筑", "街道", "汽车"]
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
16:9のフォトリアルな単一画像を生成し、左右に二分割 された構成にすること。左右それぞれに、同じ場所。
 ［LOCATION_NAME:{argument name="ロケーション名" default="（任意の場所）"}］
の別年代の姿を描写する。

左側（Left side）：{argument name="左側の年" default="（任意の年）"}・{argument name="左側の時間" default="（時間）"}
右側（Right side）：{argument name="右側の年" default="（任意の年）"}・{argument name="右側の時間" default="（時間）"}

カメラ位置は完全に同一とし、以下の座標を使用する：
［LATITUDE,LONGITUDE: {argument name="座標" default="（任意の場所の緯度経度）"}］

画像に文字（年号・ラベル・透かし等）は一切入れないこと。細かなビジュアルの指定はしない。
建築、光、車、人々、看板、素材、空気感、構図などすべてをNano Banana Pro に任せる。

それぞれの年代が自然に感じられ、1枚の16:9フレームの中で 左右に並ぶ時代比較画像 として成立すること。
--ar 16:9 --stylize 800 --v 6

## 中文译文（源站提供）
生成一张单一的、逼真的 16:9 图像，并将其构图分为左右两半。在每一侧，描绘同一个地点，
[LOCATION_NAME:(任意地点)]，
但处于不同的时代。

左侧：(任意年份)·(时间)右侧：(任意年份)·(时间)保持相机位置完全相同，并使用以下坐标：
[LATITUDE,LONGITUDE:(任意地点的经纬度)]

图像中不要包含任何文本（年份、标签、水印等）。不要指定详细的视觉效果。
将建筑、光线、汽车、人物、标志、材料、氛围和构图等所有方面都交给 Nano Banana Pro 处理。

每个时代都应感觉自然，并共同在一个 16:9 的单一画幅内形成并排的时间对比图像。
--ar 16:9 --stylize 800 --v 6

## 来源备注
- 源站作者：NOMI｜AI creator
- 源站 UUID：a9a5546449
- 源站分类：15_特定场景环境生成
