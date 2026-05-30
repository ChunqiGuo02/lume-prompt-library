---
id: graphic-name-title-count-0276
title: "goViralX病毒营销案例落地页"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["深色", "紫色", "霓虹", "现代", "网页", "营销", "案例", "数据"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:21"
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
  "type": "UI/UX landing page mockup",
  "theme": "dark mode, sleek modern aesthetic, glassmorphism, {argument name=\"primary accent color\" default=\"neon purple and blue\"} glowing accents",
  "header": {
    "logo": "{argument name=\"brand name\" default=\"goViralX\"}",
    "top_right_tag": "VIRAL CAMPAIGN CASE STUDY"
  },
  "layout": {
    "sections": [
      {
        "name": "Hero",
        "headline": "{argument name=\"hero headline\" default=\"How We Created 10M+ Viral Impact\"}",
        "subheadline": "3天引爆全网, 助力品牌实现指数级增长",
        "stats_row": {
          "count": 4,
          "labels": ["总播放量", "互动率", "转化咨询", "执行周期"],
          "values": ["{argument name=\"main statistic\" default=\"10,240,000+\"}", "18.7%", "3,200+", "72小时"]
        },
        "visual": "cinematic shot of a person in a hoodie looking at glowing digital screens and graphs, large play button overlay"
      },
      {
        "name": "Strategy",
        "title": "Our 3-Day Execution Strategy",
        "layout_type": "vertical timeline",
        "steps_count": 3,
        "elements_per_step": ["timeline node", "title", "bullet points", "video thumbnail with play button", "description box"]
      },
      {
        "name": "Performance",
        "title": "Data-Driven Performance",
        "left_column": {
          "stat_cards_count": 4,
          "values": ["10M+", "43%", "28,000+", "3,200+"]
        },
        "right_column": {
          "charts_count": 2,
          "chart_1": "line graph showing 7-day growth peaking at Day 3",
          "chart_2": "horizontal segmented bar chart showing platform distribution (TikTok 52%, Instagram 24%, X 15%, YouTube 9%)"
        }
      },
      {
        "name": "Keys to Success",
        "title": "The 3 Keys to Viral Success",
        "cards_count": 3,
        "card_elements": ["glowing icon (fire, target, antenna)", "title", "description", "VIEW DETAIL link"]
      },
      {
        "name": "Social Proof",
        "title": "TRUSTED BY CREATORS & BRANDS",
        "left_column": {
          "logos_count": 8,
          "grid": "2x4",
          "brands": ["SHEIN", "SHOPLINE", "Blueglass", "instacart", "lemon8", "mi", "CIDER", "bellroy"]
        },
        "right_column": {
          "testimonial_cards_count": 2,
          "elements": ["quote", "author title (SaaS Founder, Growth Manager)"]
        }
      },
      {
        "name": "Call to Action",
        "title": "READY TO GO VIRAL?",
        "interactive_elements": ["text input field", "glowing button with text '{argument name=\"call to action text\" default=\"获取专属增长方案 ->\"}'"],
        "visual": "3D render of a rocket ship taking off with purple and blue flames"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "落地页 UI 设计",
  "theme": "深色模式，现代科技感，{argument name=\"primary accent color\" default=\"霓虹紫\"} 与蓝色发光点缀，玻璃拟态风格",
  "header": {
    "logo": "{argument name=\"brand name\" default=\"goViralX\"}",
    "badge": "病毒式营销活动案例研究"
  },
  "sections": [
    {
      "id": "hero",
      "layout": "左侧文字，右侧图片布局",
      "content": {
        "badge": "案例研究",
        "headline": "{argument name=\"hero headline\" default=\"我们如何创造 1000 万+ 的病毒式影响力\"}",
        "subtitle": "3 天引爆网络，助力品牌实现指数级增长",
        "stats_row": {
          "count": 4,
          "labels": ["总浏览量 {argument name=\"main metric\" default=\"10,240,000+\"}", "互动率 18.7%", "转化量 3,200+", "执行周期 72 小时"]
        },
        "hero_image": "电影质感的镜头，展示一个人在暗室中注视着发光的悬浮视频屏幕，带有巨大的播放按钮叠加层"
      }
    },
    {
      "id": "strategy",
      "title": "活动拆解：我们的 3 天执行策略",
      "layout": "3 步垂直时间轴",
      "steps": [
        {"step": 1, "title": "策略制定", "image": "人们在屏幕上分析数据"},
        {"step": 2, "title": "内容制作", "image": "视频编辑界面"},
        {"step": 3, "title": "分发与放大", "image": "手持带有社交媒体图标的智能手机"}
      ]
    },
    {
      "id": "performance",
      "title": "效果评估：数据驱动的绩效表现",
      "layout": "左侧统计卡片网格，右侧图表",
      "left_stats": {
        "count": 4,
        "labels": ["总曝光量 1000 万+", "平均 CPM 下降 43%", "新增粉丝 28,000+", "转化量 3,200+"]
      },
      "right_charts": {
        "count": 2,
        "items": [
          "折线图显示 7 天趋势，在第 3 天达到 8,320,000 的峰值",
          "横向柱状图显示平台分布：TikTok 52%，Instagram 24%，X 15%，YouTube 9%"
        ]
      }
    },
    {
      "id": "keys_to_success",
      "title": "为何能病毒式传播：成功的 3 大关键",
      "layout": "3 张卡片横向排列",
      "cards": [
        {"icon": "fire", "title": "情感钩子设计"},
        {"icon": "bullseye", "title": "内容结构设计"},
        {"icon": "antenna", "title": "分发策略执行"}
      ]
    },
    {
      "id": "social_proof",
      "title": "深受创作者与品牌信赖：他们都在使用 goViralX 实现增长",
      "layout": "左侧 Logo，右侧客户评价",
      "left_logos": {
        "count": 8,
        "labels": ["SHEIN", "SHOPLINE", "Blueglass", "instacart", "lemon8", "mi", "CIDER", "bellroy"]
      },
      "right_testimonials": {
        "count": 2,
        "labels": ["SaaS 创始人评价", "增长经理评价"]
      }
    },
    {
      "id": "cta",
      "title": "准备好实现病毒式传播了吗？：想要获得同样的增长效果？",
      "layout": "左侧文字与输入框，右侧 3D 插图",
      "elements": [
        "带有占位符文本的输入框",
        "按钮：{argument name=\"call to action text\" default=\"获取专属增长方案 ->\"}"
      ],
      "image": "3D 发光紫色和蓝色火箭发射"
    }
  ],
  "footer": "Logo 和版权声明文本"
}

## 来源备注
- 源站作者：开发者Hailey
- 源站 UUID：kGBH5As0AK
- 源站分类：06_图文排版视觉传达
