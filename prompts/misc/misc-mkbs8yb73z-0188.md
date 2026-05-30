---
id: misc-mkbs8yb73z-0188
title: "提取图像精致黑白线稿"
category: misc
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["线稿", "填色", "杂志", "餐厅", "餐桌", "金毛", "猫咪", "花艺"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: zh
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "任务类型": "图像矢量化草图",
  "输入": "原始图像",
  "线条规格": {
    "粗细": "细线",
    "精致度": "高"
  },
  "线条处理": {
    "闭合性": "必须闭合",
    "流畅度": "高",
    "表现力": "强"
  },
  "轮廓勾勒": {
    "主体轮廓": "精确",
    "内部结构": "关键部分保留"
  },
  "色彩模式": {
    "类型": "纯黑白",
    "对比度": "高",
    "灰度": "剔除",
    "杂色": "剔除"
  },
  "细节处理": {
    "纹理": "剔除",
    "细节层级": "仅保留线条"
  },
  "线条关系": {
    "清晰度": "高",
    "层级化": "是",
    "组织结构": "明确分层"
  },
  "文字处理": {
    "触发条件": "画面含文字",
    "操作": "全部提取",
    "完整性": "完整识别"
  }
}

## 来源备注
- 源站作者：阿真
- 源站 UUID：MkBS8YB73z
- 源站分类：11_图像编辑与修复增强
