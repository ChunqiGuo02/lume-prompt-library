---
id: "product-name-labels-code-001"
title: "AI代码平台数据分析仪表盘"
category: product
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["深色", "UI", "看板", "数据", "编程", "现代", "紫色", "科技"]
recommended_models: []
recommended_params:
  aspect_ratio: "15:8"
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
  "type": "dark SaaS analytics dashboard UI",
  "product": {
    "brand": "{argument name=\"brand name\" default=\"AICode\"}",
    "theme": "dark navy blue glassmorphism interface with subtle gradients, soft glow, rounded cards, thin borders, modern developer-tool aesthetic"
  },
  "canvas": {
    "aspect_ratio": "16:9",
    "background": "deep midnight blue with faint vignette and soft radial lighting"
  },
  "layout": {
    "structure": "left sidebar plus main content area",
    "sections": [
      {
        "title": "Sidebar",
        "position": "left",
        "count": 8,
        "labels": ["AICode", "Overview", "Projects", "AI Assistants", "API & Usage", "Code Quality", "Team", "Settings"],
        "details": "logo at top, Overview selected with purple highlight, lower subscription card showing Pro Plan, renews in 12 days, horizontal progress bar at 75%, user profile at bottom with avatar, {argument name=\"user name\" default=\"Alex Morgan\"}, and email alex@morgan.dev"
      },
      {
        "title": "Header",
        "position": "top main area",
        "count": 4,
        "labels": ["Welcome back, Alex 👋", "Here's what's happening with your AI coding platform today.", "May 12 – Jun 12, 2024", "Export Report"],
        "details": "large greeting on left, date range picker and export button on right"
      },
      {
        "title": "Metric cards",
        "position": "top row under header",
        "count": 4,
        "labels": ["Total Users", "Active Projects", "API Calls", "Code Quality Score"],
        "values": ["12,842", "2,153", "1.28M", "876"],
        "details": "each card has a small colored icon, large main value, comparison text vs Apr 12 – May 12, 2024, positive change percentages 14.6%, 8.3%, 23.7%, 5.9%, and a miniature line chart at the bottom; colors are purple, green, amber, and blue"
      },
      {
        "title": "Main analytics panels",
        "position": "middle and bottom rows",
        "count": 4,
        "labels": ["API Calls Over Time", "Top Projects", "User Activity Heatmap", "Code Quality Trends"],
        "details": "API Calls Over Time is a wide area chart with Daily dropdown and rising purple line ending near 250K; Top Projects is a ranked list of 5 items with progress bars and percentage changes; User Activity Heatmap is a 7-row weekly heatmap with hour labels from 12 AM to 9 PM; Code Quality Trends is a line chart with Weekly dropdown and smooth upward purple trend from about 70 to low 90s"
      },
      {
        "title": "Top Projects list",
        "position": "middle right panel",
        "count": 5,
        "labels": ["AI Code Assistant", "Smart Refactor", "Code Review Bot", "Doc Generator", "Test Builder"],
        "values": ["485K", "321K", "214K", "132K", "98K"],
        "details": "green positive deltas for first four items 12.4%, 8.7%, 3.1%, 6.8%, and red negative delta -1.2% for Test Builder; each row has a colored square icon and thin horizontal progress bar"
      }
    ]
  },
  "style": {
    "visual_language": "premium fintech and AI product design mockup",
    "rendering": "crisp high-fidelity UI mockup, subtle shadows, neon edge lighting, polished charts, clean sans-serif typography",
    "primary_accent": "{argument name=\"accent color\" default=\"electric purple\"}",
    "secondary_accents": ["emerald green", "amber yellow", "cyan blue"],
    "density": "information-rich but spacious, balanced grid, highly legible"
  }
}

## 中文译文（源站提供）
{
  "type": "深色 SaaS 分析仪表盘 UI",
  "product": {
    "brand": "{argument name=\"brand name\" default=\"AICode\"}",
    "theme": "深海军蓝磨砂玻璃质感界面，带有微妙的渐变、柔和光晕、圆角卡片、细边框，现代开发者工具美学"
  },
  "canvas": {
    "aspect_ratio": "16:9",
    "background": "深午夜蓝，带有淡淡的暗角和柔和的径向光效"
  },
  "layout": {
    "structure": "左侧边栏加主内容区域",
    "sections": [
      {
        "title": "侧边栏",
        "position": "左侧",
        "count": 8,
        "labels": ["AICode", "概览", "项目", "AI Assistants", "API 与使用情况", "代码质量", "团队", "设置"],
        "details": "顶部显示 Logo，选中“概览”并带有紫色高亮，底部订阅卡片显示 Pro Plan，12 天后到期，水平进度条显示 75%，底部用户个人资料包含头像、{argument name=\"user name\" default=\"Alex Morgan\"} 以及邮箱 alex@morgan.dev"
      },
      {
        "title": "页眉",
        "position": "顶部主区域",
        "count": 4,
        "labels": ["欢迎回来，Alex 👋", "这是您 AI 编程平台今日的动态。", "2024 年 5 月 12 日 – 6 月 12 日", "导出报告"],
        "details": "左侧为大号问候语，右侧为日期范围选择器和导出按钮"
      },
      {
        "title": "指标卡片",
        "position": "页眉下方第一行",
        "count": 4,
        "labels": ["总用户数", "活跃项目", "API 调用量", "代码质量评分"],
        "values": ["12,842", "2,153", "1.28M", "876"],
        "details": "每张卡片包含一个小图标、大号主数值，以及与 2024 年 4 月 12 日 – 5 月 12 日的对比文本，正向增长百分比分别为 14.6%、8.3%、23.7%、5.9%，底部带有迷你折线图；颜色分别为紫色、绿色、琥珀色和蓝色"
      },
      {
        "title": "主要分析面板",
        "position": "中间和底部行",
        "count": 4,
        "labels": ["API 调用趋势", "热门项目", "用户活跃热力图", "代码质量趋势"],
        "details": "“API 调用趋势”为宽幅面积图，带有“每日”下拉菜单，紫色折线呈上升趋势，终点接近 250K；“热门项目”为包含 5 个项目的排名列表，带有进度条和百分比变化；“用户活跃热力图”为 7 行周热力图，带有从上午 12 点到晚上 9 点的小时标签；“代码质量趋势”为折线图，带有“每周”下拉菜单，紫色曲线平滑上升，从约 70 升至 90 出头"
      },
      {
        "title": "热门项目列表",
        "position": "中间右侧面板",
        "count": 5,
        "labels": ["AI Code Assistant", "Smart Refactor", "Code Review Bot", "Doc Generator", "Test Builder"],
        "values": ["485K", "321K", "214K", "132K", "98K"],
        "details": "前四项的绿色正向增长分别为 12.4%、8.7%、3.1%、6.8%，Test Builder 为红色负增长 -1.2%；每一行都有一个彩色方形图标和细水平进度条"
      }
    ]
  },
  "style": {
    "visual_language": "高端金融科技与 AI 产品设计原型",
    "rendering": "清晰的高保真 UI 原型，微妙的阴影，霓虹边缘光效，精致的图表，简洁的无衬线字体",
    "primary_accent": "{argument name=\"accent color\" default=\"电光紫\"}",
    "secondary_accents": ["翡翠绿", "琥珀黄", "青蓝色"],
    "density": "信息丰富且空间感强，网格平衡，高度易读"
  }
}

## 来源备注
- 源站作者：轩辕的编程宇宙
- 源站 UUID：kTKkkuwnjJ
- 源站分类：06_图文排版视觉传达
