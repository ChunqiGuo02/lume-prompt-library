---
id: graphic-title-content-name-0984
title: "科幻机甲基地技术规格说明书"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["科幻", "机甲", "基地", "机械", "硬核", "工业", "科技", "冷调"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:2"
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
  "type": "sci-fi mecha base technical specification sheet",
  "style": "{argument name=\"ui theme\" default=\"technical schematic with dark grey panels and white text\"}",
  "header": {
    "title": "{argument name=\"base name\" default=\"ネストベース・アウラ\"}",
    "subtitle": "Dedicated Tactical Deployment & Maintenance Base for {argument name=\"mecha name\" default=\"アークセリオン\"}"
  },
  "layout": {
    "structure": "grid-based infographic with 3 main horizontal rows",
    "row_1": [
      {
        "title": "Facility Overview & Basic Specs",
        "content": "2 text blocks including a specification table with 5 rows"
      },
      {
        "title": "Base Overall Cross-section",
        "content": "Large cutaway view of the underground base showing 4 distinct levels (LEVEL 1 to LEVEL 4)"
      },
      {
        "title": "Main Hangar Interior",
        "content": "Front view of a {argument name=\"mecha color scheme\" default=\"white and blue\"} mecha in a maintenance bay, with 4 deck levels labeled on the left"
      },
      {
        "title": "Hangar Dimensions",
        "content": "3 orthographic wireframe-style views (Top, Front, Side) with dimension lines"
      }
    ],
    "row_2": [
      {
        "title": "Boarding Equipment",
        "content": "Close-up of the mecha's upper body and cockpit boarding arm"
      },
      {
        "title": "Weapon Transport Area",
        "content": "Detailed view of automated transport vehicles and magnetic rails"
      },
      {
        "title": "Rear Unit Maintenance",
        "content": "Back view of the mecha showing glowing blue thrusters and maintenance frames"
      },
      {
        "title": "Energy & Cooling Infrastructure",
        "content": "Dense machinery wall with pipes and super-conducting equipment"
      }
    ],
    "row_3": [
      {
        "title": "Launch System: Spine Launcher",
        "content": "Long perspective view of an electromagnetic catapult tunnel, plus 1 small cross-section diagram"
      },
      {
        "title": "Launch Sequence",
        "content": "Grid of 10 sequential images showing the mecha's launch process step-by-step"
      },
      {
        "title": "External Launch Port",
        "content": "Exterior view of the base built into a {argument name=\"base location\" default=\"Mountain fortress\"} wall, showing camouflage armor and blast doors"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "mecha base 技术规格表",
  "header": {
    "title": "{argument name=\"base name\" default=\"ネストベース・アウラ\"}",
    "subtitle": "{argument name=\"mecha name\" default=\"アークセリオン\"} 专用战术部署与维护基地"
  },
  "mecha_design": "高度精细的人形机甲，采用 {argument name=\"mecha color scheme\" default=\"白蓝配色\"} 装甲，配有 {argument name=\"accent color\" default=\"发光蓝色\"} 能量点缀，机械关节结构复杂。",
  "layout": {
    "structure": "基于网格的信息图，包含 3 行面板，采用深色工业美学风格，深色背景配白色文字或浅灰色面板。",
    "sections": [
      {
        "row": 1,
        "panels": [
          { "title": "设施概览", "type": "text block" },
          { "title": "基础规格", "type": "data table" },
          { "title": "基地整体剖面图", "type": "illustration", "description": "大型详细剖面图，展示了 4 层地下机库及位于中心的机甲。" },
          { "title": "主机库内部", "type": "illustration", "description": "机甲伫立在细节丰富的工业维护舱内，配有走道。" },
          { "title": "主机库尺寸", "type": "diagram", "count": 3, "labels": ["顶视图", "前视图", "侧视图"], "description": "机库的正投影蓝图。" }
        ]
      },
      {
        "row": 2,
        "panels": [
          { "title": "登机设备", "type": "illustration", "description": "机甲躯干特写，连接着飞行员登机臂。" },
          { "title": "武器更换/运输区", "type": "illustration", "description": "工业地面，配有自动化运输车和武器架。" },
          { "title": "背部组件维护设备", "type": "illustration", "description": "机甲后视图，展示正在维护的推进器机翼。" },
          { "title": "主能源/冷却基础设施", "type": "illustration", "description": "重型工业管道、发电机和冷却罐。" }
        ]
      },
      {
        "row": 3,
        "panels": [
          { "title": "发射系统：脊柱弹射器", "type": "illustration", "description": "电磁弹射隧道的长透视镜头。" },
          { "title": "发射序列", "type": "sequence", "count": 10, "description": "连续缩略图，展示机甲启动、沿轨道移动及发射的过程。" },
          { "title": "外部发射口", "type": "illustration", "description": "外部视角，展示嵌入 {argument name=\"environment\" default=\"山地地形\"} 中的重型加固防爆门，机甲正从中飞出。" }
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：いにしえ@AI Director & Creator｜Will Oldgram
- 源站 UUID：kh13l5INAk
- 源站分类：06_图文排版视觉传达
