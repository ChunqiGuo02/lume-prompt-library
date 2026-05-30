---
id: "portrait-title-argument-name-001"
title: "最新AI工作原理图解"
category: portrait
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["科普", "教育", "人工智能", "信息图", "日系", "卡通", "科技", "干货"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
  "type": "educational infographic",
  "header": {
    "title": "{argument name=\"main title\" default=\"最新AI (ChatGPT / Claude) の仕組み\"}",
    "badge": "{argument name=\"target audience badge\" default=\"高校生でもわかる！\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"文章・画像・音声も理解し、考えて動けるAIのしくみを1枚で解説！\"}"
  },
  "layout": {
    "style": "clean, flat design, structured grid, Japanese text",
    "sections": [
      {
        "title": "AIが答えを出すまで(基本の流れ)",
        "position": "left column",
        "count": 6,
        "labels": ["入力", "トークン化 (Token)", "ベクトル化 (Embedding)", "Transformer (AIの頭脳)", "次のトークンを予測 (生成)", "出力"],
        "visuals": "vertical flow with arrows, boy using laptop, token splitting diagram, vector number arrays, self-attention tree, robot icon"
      },
      {
        "title": "ここがコア！ 3つの重要ポイント",
        "position": "top right",
        "count": 3,
        "labels": ["Token (トークン)", "Transformer (トランスフォーマー)", "次トークン予測"],
        "visuals": "tokenization blocks, self-attention node network, word prediction sequence"
      },
      {
        "title": "最近のブレイクスルー (2024-2025)",
        "position": "middle right",
        "count": 4,
        "labels": ["マルチモーダル", "エージェント化", "長文・推論能力の向上", "効率化・高速化"],
        "visuals": "image/audio/text icons, robot agent flowchart, lightbulb and book, speedometer with 3 expert nodes"
      },
      {
        "title": "全体まとめ",
        "position": "bottom full width",
        "elements": [
          "horizontal 6-step flowchart",
          "yellow summary box with text: {argument name=\"summary text\" default=\"「AIは、情報を細かく分けて数字に変換し、関係性を計算して、次に来るものを予測する巨大な数学マシン」です！\"}",
          "{argument name=\"character style\" default=\"anime-style female student pointing and smiling\"}"
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "教育信息图",
  "header": {
    "title": "{argument name=\"main title\" default=\"最新 AI (ChatGPT / Claude) 的运行机制\"}",
    "badge": "{argument name=\"target audience badge\" default=\"高中生也能看懂！\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"一张图带你了解 AI 如何理解文字、图像、音频并进行思考与行动！\"}"
  },
  "layout": {
    "style": "简洁、扁平化设计、结构化网格、中文文本",
    "sections": [
      {
        "title": "AI 输出答案的过程 (基本流程)",
        "position": "左侧栏",
        "count": 6,
        "labels": ["输入", "分词 (Tokenization)", "向量化 (Embedding)", "Transformer (AI 的大脑)", "预测下一个 Token (生成)", "输出"],
        "visuals": "带有箭头的垂直流程、使用笔记本电脑的男孩、分词示意图、向量数字数组、自注意力机制树、机器人图标"
      },
      {
        "title": "核心要点：3 大关键点",
        "position": "右上角",
        "count": 3,
        "labels": ["Token (词元)", "Transformer (转换器)", "下一词元预测"],
        "visuals": "分词模块、自注意力节点网络、词语预测序列"
      },
      {
        "title": "近期突破 (2024-2025 年)",
        "position": "右侧中部",
        "count": 4,
        "labels": ["多模态", "Agent 化", "长文本与推理能力提升", "效率与速度优化"],
        "visuals": "图像/音频/文本图标、机器人 Agent 流程图、灯泡与书籍、带有 3 个专家节点的速度计"
      },
      {
        "title": "总结",
        "position": "底部全宽",
        "elements": [
          "水平 6 步流程图",
          "黄色总结框，文本内容：{argument name=\"summary text\" default=\"AI 是一个巨大的数学机器，它将信息拆解并转换为数字，通过计算关系来预测下一个出现的内容！\"}",
          "{argument name=\"character style\" default=\"动漫风格女学生，正在指引并微笑\"}"
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：らけしで / Mizmic Studio
- 源站 UUID：75jMXFHWTd
- 源站分类：06_图文排版视觉传达
