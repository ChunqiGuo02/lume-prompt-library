---
id: "graphic-grid-title-curve-001"
title: "Hilbert曲线可视化"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["数学", "科普", "教育", "曲线", "递归", "网格", "坐标", "彩色"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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
  "type": "educational mathematical infographic",
  "header": {
    "title": "{argument name=\"main title\" default=\"Hilbert Curve\"}",
    "subtitle": "{argument name=\"degree subtitle\" default=\"Degree 3 (Order 3)\"}",
    "equation": "n = 3 -> 2^n x 2^n = 8 x 8 grid, 2^(2n) = 64 steps"
  },
  "layout": {
    "left_panel": "large 2D line plot",
    "right_sidebar": "stacked informational panels and text blocks"
  },
  "main_graph": {
    "axes": {
      "x_axis": "labeled 'x (column index)' with ticks 0 to 7",
      "y_axis": "labeled 'y (row index)' with ticks 0 to 7"
    },
    "grid": "{argument name=\"grid size\" default=\"8x8\"} dashed light gray lines",
    "curve": {
      "description": "continuous non-intersecting path filling the grid",
      "style": "thick line with directional arrows",
      "colors": "{argument name=\"curve colors\" default=\"gradient transitioning through purple, blue, green, yellow, orange, and red\"}",
      "markers": [
        "purple dot at bottom left labeled '00'",
        "blue dot at top left labeled '64'"
      ],
      "labels": "various two-digit numbers scattered along the path vertices, such as 01, 02, 32, 65, 70"
    }
  },
  "sidebar": {
    "sections": [
      {
        "title": "Legend",
        "type": "box with rounded corners",
        "count": 4,
        "items": [
          "purple dot: 'Start (step 0)'",
          "blue dot: 'End (step 63)'",
          "black arrow: 'Direction of traversal'",
          "colored lines: 'Curve (colored by sub-quadrant progression)'"
        ]
      },
      {
        "title": "Definition",
        "type": "text block",
        "text": "Hilbert curve of degree n maps the unit interval [0,1] onto the unit square [0,1]x[0,1] while preserving locality."
      },
      {
        "title": "Properties",
        "type": "bulleted list",
        "heading": "For degree 3:",
        "count": 3,
        "items": [
          "Grid size: 8 x 8 = 2^3 x 2^3",
          "Total steps: 64 = 2^{2*3}",
          "Visits each of the 64 grid points exactly once in a continuous path."
        ]
      },
      {
        "title": "Quadrant structure (recursive)",
        "type": "2x2 colored grid",
        "count": 4,
        "boxes": [
          "Top-left blue: 'Q2 (steps 32-63)'",
          "Top-right yellow: 'Q3 (steps 48-63)'",
          "Bottom-left purple: 'Q0 (steps 0-31)'",
          "Bottom-right pink: 'Q1 (steps 16-47)'"
        ],
        "footer_text": "Each quadrant is a degree-2 Hilbert curve (recursively defined)."
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "教育性数学信息图",
  "header": {
    "title": "{argument name=\"main title\" default=\"希尔伯特曲线\"}",
    "subtitle": "{argument name=\"degree subtitle\" default=\"3 阶 (Order 3)\"}",
    "equation": "n = 3 -> 2^n x 2^n = 8 x 8 网格，2^(2n) = 64 个步骤"
  },
  "layout": {
    "left_panel": "大型二维线图",
    "right_sidebar": "堆叠的信息面板和文本块"
  },
  "main_graph": {
    "axes": {
      "x_axis": "标注为 'x (列索引)'，刻度为 0 到 7",
      "y_axis": "标注为 'y (行索引)'，刻度为 0 到 7"
    },
    "grid": "{argument name=\"grid size\" default=\"8x8\"} 虚线浅灰色网格",
    "curve": {
      "description": "填充网格的连续不相交路径",
      "style": "带有方向箭头的粗线",
      "colors": "{argument name=\"curve colors\" default=\"从紫色、蓝色、绿色、黄色、橙色到红色的渐变色\"}",
      "markers": [
        "左下角的紫色点，标注为 '00'",
        "左上角的蓝色点，标注为 '64'"
      ],
      "labels": "沿路径顶点散布的各种两位数，例如 01、02、32、65、70"
    }
  },
  "sidebar": {
    "sections": [
      {
        "title": "图例",
        "type": "圆角框",
        "count": 4,
        "items": [
          "紫色点：'起点 (步骤 0)'",
          "蓝色点：'终点 (步骤 63)'",
          "黑色箭头：'遍历方向'",
          "彩色线条：'曲线 (按子象限进度着色)'"
        ]
      },
      {
        "title": "定义",
        "type": "文本块",
        "text": "n 阶希尔伯特曲线将单位区间 [0,1] 映射到单位正方形 [0,1]x[0,1]，同时保持局部性。"
      },
      {
        "title": "属性",
        "type": "项目符号列表",
        "heading": "对于 3 阶：",
        "count": 3,
        "items": [
          "网格大小：8 x 8 = 2^3 x 2^3",
          "总步骤数：64 = 2^{2*3}",
          "以连续路径精确访问每个 64 个网格点一次。"
        ]
      },
      {
        "title": "象限结构 (递归)",
        "type": "2x2 彩色网格",
        "count": 4,
        "boxes": [
          "左上蓝色：'Q2 (步骤 32-63)'",
          "右上黄色：'Q3 (步骤 48-63)'",
          "左下紫色：'Q0 (步骤 0-31)'",
          "右下粉色：'Q1 (步骤 16-47)'"
        ],
        "footer_text": "每个象限都是一个 2 阶希尔伯特曲线 (递归定义)。"
      }
    ]
  }
}

## 来源备注
- 源站作者：Aldo Cortesi
- 源站 UUID：3pEraGfLn8
- 源站分类：06_图文排版视觉传达
