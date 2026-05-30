---
id: graphic-text-illustration-position-0922
title: "生成日式寺庙趣味告示牌与滑稽僧侣"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["日本", "寺庙", "僧人", "告示牌", "搞笑", "户外", "摄影", "插画"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:2"
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
  "type": "photograph",
  "setting": "outdoor temple grounds with gravel and foliage",
  "subjects": [
    {
      "type": "signboard",
      "material": "wood with red border and yellow header",
      "header_text": "{argument name=\"header text\" default=\"ゆかいなお寺の教え\"}",
      "layout": "3x3 grid",
      "panel_count": 9,
      "panels": [
        { "position": "top-left", "text": "ズボンはチャックをチェック", "illustration": "blue jeans with zipper" },
        { "position": "top-center", "text": "猫に話してもしらんぷり", "illustration": "grey and white cat" },
        { "position": "top-right", "text": "ヘソのゴマとりすぎ注意", "illustration": "belly with thumbs pointing at navel" },
        { "position": "mid-left", "text": "二度寝は二度目が気持ちいい", "illustration": "person sleeping under pink blanket" },
        { "position": "mid-center", "text": "イビキは寝ると聞けない", "illustration": "person snoring" },
        { "position": "mid-right", "text": "ポテチは開けたら止まらない", "illustration": "open bag of potato chips" },
        { "position": "bottom-left", "text": "便座が冷たいとビックリ", "illustration": "shocked person next to toilet" },
        { "position": "bottom-center", "text": "月末ピンチで来月もピンチ", "illustration": "empty wallet with lightning bolts" },
        { "position": "bottom-right", "text": "{argument name=\"bottom right text\" default=\"ダイエットは明日から...\"}", "illustration": "{argument name=\"bottom right illustration\" default=\"monk eating a hamburger\"}" }
      ]
    },
    {
      "type": "monk",
      "description": "bald Japanese Buddhist monk in black robes, white tabi socks, and sandals",
      "pose": "standing on one leg, leaning on sign",
      "expression": "{argument name=\"monk expression\" default=\"goofy, tongue out, wide eyes, hands framing face\"}"
    }
  ]
}

## 中文译文（源站提供）
{
  "type": "带有卡通插画告示牌的照片级逼真场景",
  "setting": "{argument name=\"setting\" default=\"带有碎石和石墙的传统日本寺庙庭院\"}",
  "subjects": [
    {
      "type": "人物",
      "description": "一位秃头的日本佛教僧侣，身穿传统的深色长袍和棕褐色络子。",
      "pose": "{argument name=\"monk pose\" default=\"搞怪姿势，单脚站立，向后倾斜，指着告示牌，吐出舌头\"}"
    },
    {
      "type": "木制告示牌",
      "description": "一个带有红色内边框的大型木制告示牌，上方设有标题，下方为 3x3 的 9 格插画网格。",
      "header": {
        "text": "{argument name=\"header text\" default=\"ゆかいなお寺の教え\"}",
        "background": "黄色"
      },
      "grid_panels": [
        { "position": "第 1 行，第 1 列", "text": "{argument name=\"panel 1 text\" default=\"ズボンはチャックをチェック\"}", "illustration": "带有拉链处红色强调线的蓝色牛仔裤" },
        { "position": "第 1 行，第 2 列", "text": "猫に話してもしらんぷり", "illustration": "一只坐着并看向别处的灰白相间猫咪" },
        { "position": "第 1 行，第 3 列", "text": "ヘソのゴマとりすぎ注意", "illustration": "两根大拇指指向肚脐的特写" },
        { "position": "第 2 行，第 1 列", "text": "二度寝は二度目が気持ちいい", "illustration": "一个人在粉色毯子下安详地睡觉" },
        { "position": "第 2 行，第 2 列", "text": "イビキは寝ると聞けない", "illustration": "一个人正在睡觉并打呼噜，带有 Zzz 符号" },
        { "position": "第 2 行，第 3 列", "text": "ポテチは開けたら止まらない", "illustration": "一袋打开并洒出来的薯片" },
        { "position": "第 3 行，第 1 列", "text": "便座が冷たいとビックリ", "illustration": "一个人在打开的马桶旁露出震惊的表情" },
        { "position": "第 3 行，第 2 列", "text": "月末ピンチで来月もピンチ", "illustration": "一个带有黄色闪电图案的空棕色钱包" },
        { "position": "第 3 行，第 3 列", "text": "{argument name=\"panel 9 text\" default=\"ダイエットは明日から...\"}", "illustration": "一个卡通秃头僧侣正开心地吃着大汉堡" }
      ]
    }
  ]
}

## 来源备注
- 源站作者：notargs
- 源站 UUID：kUDqHCoayc
- 源站分类：06_图文排版视觉传达
