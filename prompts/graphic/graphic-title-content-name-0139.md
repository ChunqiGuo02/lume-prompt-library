---
id: graphic-title-content-name-0139
title: "Claude Opus 4.7发布介绍图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["黑板", "AI", "手绘", "深色", "信息图", "科技", "模型", "商业"]
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
  "type": "chalkboard style infographic",
  "style": "dark slate background, white text, hand-drawn accents, clean typography",
  "colors": {
    "background": "dark slate grey",
    "text": "white",
    "accents": ["{argument name=\"accent color 1\" default=\"orange\"}", "{argument name=\"accent color 2\" default=\"light blue\"}", "yellow", "pink"]
  },
  "header": {
    "badge": "NEW!",
    "title": "{argument name=\"main headline\" default=\"Claude Opus 4.7 リリース!!\"}",
    "subtitles": ["史上最高の思考力と実行力を、すべての人に。", "非エンジニアでも使いこなせる、次世代AIの決定版"]
  },
  "layout": {
    "sections": [
      {
        "id": "1",
        "title": "1. Opus 4.7 とは?",
        "content": "Description text, 5 bullet points, profile head illustration with glowing neural nodes"
      },
      {
        "id": "2",
        "title": "2. 性能ハイライト (ベンチマーク比較)",
        "content": "Grouped bar chart comparing 5 models across 5 categories: コーディング, 推論力, エージェント検索, マルチリンガル, 総合評価"
      },
      {
        "id": "3",
        "title": "3. 得意分野 (エージェント的タスクに強い!)",
        "content": "2x3 grid of 6 strengths with icons: コーディング, 情報検索・分析, 長文読解・要約, データ分析・可視化, 資料作成・ライティング, マルチモーダル理解"
      },
      {
        "id": "4",
        "title": "4. 他モデルとの立ち位置 (マトリクス)",
        "content": "2x2 positioning matrix with 4 quadrants: {argument name=\"product name\" default=\"Claude Opus 4.7\"}, Claude Sonnet 4.6, GPT-5.4, Gemini 3.1 Pro"
      },
      {
        "id": "5",
        "title": "5. 活用シーン (ビジネスでの使い方)",
        "content": "List of 8 business use cases with icons and arrows"
      },
      {
        "id": "6",
        "title": "6. 安全性と信頼性",
        "content": "3 vertical items with shield/lock icons: 高度な安全対策, 透明性の向上, プライバシー保護"
      },
      {
        "id": "7",
        "title": "7. 料金・利用プラン (目安)",
        "content": "Data table with 3 columns and 4 rows for pricing tiers: 無料プラン, Proプラン, Teamプラン, Enterpriseプラン"
      },
      {
        "id": "8",
        "title": "8. 導入のステップ",
        "content": "Horizontal flowchart with 5 numbered steps connected by arrows"
      },
      {
        "id": "9",
        "title": "9. ユーザーの声",
        "content": "3 user testimonials with profile icons: マーケティング担当, 経営企画担当, 研究者"
      },
      {
        "id": "10",
        "title": "10. まとめ: 今すぐ体験しよう!",
        "content": "3 bullet points, call to action, URL {argument name=\"website url\" default=\"https://claude.ai\"}, and a QR code"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "黑板风格信息图",
  "style": "深板岩色背景，白色文字，手绘风格装饰，简洁排版",
  "colors": {
    "background": "深板岩灰",
    "text": "白色",
    "accents": ["{argument name=\"accent color 1\" default=\"橙色\"}", "{argument name=\"accent color 2\" default=\"浅蓝色\"}", "黄色", "粉色"]
  },
  "header": {
    "badge": "全新发布！",
    "title": "{argument name=\"main headline\" default=\"Claude Opus 4.7 发布！！\"}",
    "subtitles": ["为每个人提供史上最强的思考与执行能力。", "非技术人员也能轻松驾驭的下一代 AI 决定版"]
  },
  "layout": {
    "sections": [
      {
        "id": "1",
        "title": "1. 什么是 Opus 4.7？",
        "content": "描述文本，5 个要点，带有发光神经节点的个人资料头像插图"
      },
      {
        "id": "2",
        "title": "2. 性能亮点（基准测试对比）",
        "content": "分组柱状图，对比 5 个模型在 5 个类别中的表现：编码、推理能力、Agent 搜索、多语言能力、综合评估"
      },
      {
        "id": "3",
        "title": "3. 擅长领域（强大的 Agent 任务处理能力！）",
        "content": "2x3 网格，展示 6 项优势及对应图标：编码、信息检索与分析、长文阅读与摘要、数据分析与可视化、文档编写与写作、多模态理解"
      },
      {
        "id": "4",
        "title": "4. 与其他模型的定位对比（矩阵图）",
        "content": "2x2 定位矩阵，包含 4 个象限：{argument name=\"product name\" default=\"Claude Opus 4.7\"}、Claude Sonnet 4.6、GPT-5.4、Gemini 3.1 Pro"
      },
      {
        "id": "5",
        "title": "5. 应用场景（商业用途）",
        "content": "包含 8 个商业用例的列表，配有图标和箭头"
      },
      {
        "id": "6",
        "title": "6. 安全性与可靠性",
        "content": "3 个垂直排列的项目，配有盾牌/锁图标：高级安全措施、透明度提升、隐私保护"
      },
      {
        "id": "7",
        "title": "7. 价格与套餐（参考）",
        "content": "3 列 4 行的数据表格，展示定价层级：免费版、Pro 版、Team 版、Enterprise 版"
      },
      {
        "id": "8",
        "title": "8. 部署步骤",
        "content": "水平流程图，包含 5 个由箭头连接的编号步骤"
      },
      {
        "id": "9",
        "title": "9. 用户评价",
        "content": "3 条用户感言，配有个人资料图标：市场营销人员、经营企划人员、研究人员"
      },
      {
        "id": "10",
        "title": "10. 总结：立即体验！",
        "content": "3 个要点，行动号召，URL {argument name=\"website url\" default=\"https://claude.ai\"}，以及一个二维码"
      }
    ]
  }
}

## 来源备注
- 源站作者：lpx
- 源站 UUID：LoqJoE9Pxg
- 源站分类：06_图文排版视觉传达
