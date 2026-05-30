---
id: "graphic-name-part-argument-001"
title: "生物学期中考试试卷"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["生物学", "试卷", "考试", "选择题", "简答题", "植物细胞", "细胞结构", "黑白"]
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
  "type": "academic exam paper",
  "header": {
    "student_info": ["Name:", "Date:", "Period:"],
    "title": "{argument name=\"subject\" default=\"BIOLOGY\"} - {argument name=\"test title\" default=\"SEMESTER 1 TEST\"}",
    "subtitle": "Total Points: 100"
  },
  "instructions": "DIRECTIONS: Read each question carefully. Circle the letter of the best answer for Part I. Show your work and write your answers clearly for Part II.",
  "sections": [
    {
      "title": "Part I: {argument name=\"part 1 type\" default=\"Multiple Choice\"} (2 points each, 40 points total)",
      "layout": "two columns",
      "question_count": 8,
      "format": "numbered questions 1 through 8, each with options A, B, C, D",
      "diagram": {
        "location": "Question 3",
        "description": "illustration of a {argument name=\"diagram subject\" default=\"plant cell\"}",
        "labels": ["1", "2", "3", "4"]
      }
    },
    {
      "title": "Part II: {argument name=\"part 2 type\" default=\"Short Answer\"} (Show your work. 10 points each, 60 points total)",
      "layout": "single column",
      "question_count": 3,
      "format": "numbered questions 9 through 11, each followed by two blank horizontal lines"
    }
  ],
  "footer": "End of Test - Check Your Work!"
}

## 中文译文（源站提供）
{
  "type": "学术试卷",
  "header": {
    "student_info": ["姓名：", "日期：", "课时："],
    "title": "{argument name=\"subject\" default=\"生物学\"} - {argument name=\"test title\" default=\"第一学期测试\"}",
    "subtitle": "总分：100 分"
  },
  "instructions": "说明：请仔细阅读每一道题。第一部分请圈出最佳答案的字母。第二部分请展示解题过程并清晰书写答案。",
  "sections": [
    {
      "title": "第一部分：{argument name=\"part 1 type\" default=\"选择题\"}（每题 2 分，共 40 分）",
      "layout": "双栏",
      "question_count": 8,
      "format": "编号 1 至 8 题，每题包含 A、B、C、D 四个选项",
      "diagram": {
        "location": "第 3 题",
        "description": "{argument name=\"diagram subject\" default=\"植物细胞\"} 插图",
        "labels": ["1", "2", "3", "4"]
      }
    },
    {
      "title": "第二部分：{argument name=\"part 2 type\" default=\"简答题\"}（请展示解题过程。每题 10 分，共 60 分）",
      "layout": "单栏",
      "question_count": 3,
      "format": "编号 9 至 11 题，每题后附两条空白横线"
    }
  ],
  "footer": "试卷结束 - 请检查你的答案！"
}

## 来源备注
- 源站作者：Yx
- 源站 UUID：ShRzXy3tgH
- 源站分类：06_图文排版视觉传达
