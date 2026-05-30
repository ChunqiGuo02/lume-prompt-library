---
id: "interior-name-headline-argument-001"
title: "生成拟真新闻报纸图片"
category: interior
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["报纸", "写实", "科技", "新闻", "美国", "蓝色", "AI", "模型"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
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
{
  "type": "photorealistic physical newspaper on a counter",
  "environment": "casual indoor kitchen setting, edge of stove visible, natural lighting, paper is slightly curved with realistic creases",
  "newspaper_header": {
    "logo": "large blue circle next to {argument name=\"newspaper name\" default=\"USA TODAY\"}",
    "date": "{argument name=\"date\" default=\"04.23.26\"}",
    "subtext": "THE NATION'S NEWS | $3.00 | THURSDAY",
    "top_right_teaser": {
      "image": "naval ships",
      "headline": "US, Philippines hold joint drills in South China Sea"
    }
  },
  "layout": {
    "total_articles": 4,
    "total_embedded_images": 4,
    "sections": [
      {
        "position": "top center",
        "headline": "{argument name=\"main headline\" default=\"OpenAI's New Spud Model Dominates Cyber Warfare and Coding Benchmarks\"}",
        "author": "By Jefferson Graham",
        "image": "{argument name=\"main image subject\" default=\"3D rendered blue whale wearing a crown with text 'spud by OpenAI'\"}",
        "columns": 2
      },
      {
        "position": "middle right",
        "headline": "Stock Market Rises on Tech Earnings",
        "author": "By Nathan Bomey",
        "columns": 1
      },
      {
        "position": "bottom left",
        "headline": "{argument name=\"bottom headline\" default=\"Codex App Launches as 'Everything Super App'\"}",
        "author": "By Jessica Guynn",
        "image": "smartphone screen showing app interface with text 'codex'",
        "columns": 2
      },
      {
        "position": "bottom right",
        "headline": "New Bird Species Discovered in Amazon",
        "author": "By Doyle Rice",
        "columns": 1
      },
      {
        "position": "footer",
        "image": "football player in action",
        "text": "NFL Draft shocks: QB falls to Round 2"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "柜台上的照片级真实感实体报纸",
  "environment": "休闲室内厨房环境，可见炉灶边缘，自然光照明，纸张略微弯曲并带有逼真的折痕",
  "newspaper_header": {
    "logo": "大蓝色圆圈，旁边是 {argument name=\"newspaper name\" default=\"USA TODAY\"}",
    "date": "{argument name=\"date\" default=\"04.23.26\"}",
    "subtext": "全国新闻 | $3.00 | 星期四",
    "top_right_teaser": {
      "image": "海军舰艇",
      "headline": "美国与菲律宾在南海举行联合演习"
    }
  },
  "layout": {
    "total_articles": 4,
    "total_embedded_images": 4,
    "sections": [
      {
        "position": "顶部居中",
        "headline": "{argument name=\"main headline\" default=\"OpenAI 的全新 Spud 模型在网络战和编码基准测试中占据主导地位\"}",
        "author": "作者：Jefferson Graham",
        "image": "{argument name=\"main image subject\" default=\"戴着皇冠的 3D 渲染蓝鲸，带有 'spud by OpenAI' 字样\"}",
        "columns": 2
      },
      {
        "position": "中右",
        "headline": "受科技股财报提振，股市上涨",
        "author": "作者：Nathan Bomey",
        "columns": 1
      },
      {
        "position": "底部左侧",
        "headline": "{argument name=\"bottom headline\" default=\"Codex 应用作为‘万能超级应用’发布\"}",
        "author": "作者：Jessica Guynn",
        "image": "显示带有 'codex' 文字的应用界面的智能手机屏幕",
        "columns": 2
      },
      {
        "position": "底部右侧",
        "headline": "亚马逊发现新鸟类物种",
        "author": "作者：Doyle Rice",
        "columns": 1
      },
      {
        "position": "页脚",
        "image": "正在比赛的橄榄球运动员",
        "text": "NFL 选秀爆冷：四分卫跌至第二轮"
      }
    ]
  }
}

## 来源备注
- 源站作者：CHOI
- 源站 UUID：2xPorin3fh
- 源站分类：06_图文排版视觉传达
