---
id: "landscape-title-position-count-003"
title: "高端西餐厅菜单设计模板"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["黑金", "深色", "菜单", "西餐", "餐厅", "暖光", "精致", "高档"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
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
  "type": "restaurant menu design",
  "style": {
    "background": "dark wood texture",
    "accents": "{argument name=\"theme color\" default=\"gold\"}",
    "typography": "elegant serif and sans-serif mix",
    "photography": "high-resolution, appetizing food shots with warm lighting"
  },
  "header": {
    "main_title": "{argument name=\"main title\" default=\"GRAND MENU\"}",
    "subtitle": "{argument name=\"restaurant type\" default=\"OPEN KITCHEN RESTAURANT\"}",
    "top_right_badge": "季節の厳選食材使用!"
  },
  "layout": {
    "sections": [
      {
        "title": "シェフのおすすめ",
        "position": "top",
        "count": 3,
        "featured_item": "{argument name=\"featured item name\" default=\"特選和牛ステーキ 200g\"}",
        "labels": ["特選和牛ステーキ 200g", "トリュフ香る濃厚カルボナーラ", "魚介のペスカトーレ"]
      },
      {
        "title": "前菜・サラダ",
        "position": "mid-left top",
        "count": 4,
        "labels": ["生ハムとモッツァレラのカプレーゼ", "サーモンのカルパッチョ", "アボカドと海老のグリーンサラダ", "本日の濃厚スープ"]
      },
      {
        "title": "パスタ & ピザ",
        "position": "mid-right top",
        "count": 4,
        "labels": ["生ウニのクリームパスタ", "モッツァレラとバジルのトマトパスタ", "マルゲリータピザ", "クアトロフォルマッジ"]
      },
      {
        "title": "メインディッシュ",
        "position": "mid-left bottom",
        "count": 4,
        "labels": ["黒毛和牛100%ハンバーグ", "サーモンのグリル", "自家製ローストビーフ丼", "大海老のガーリックシュリンプ"]
      },
      {
        "title": "ご飯もの",
        "position": "mid-right middle",
        "count": 3,
        "labels": ["牛すじガーリックライス", "とろとろ卵のオムライス", "魚介のパエリア"]
      },
      {
        "title": "サイドメニュー",
        "position": "mid-right bottom",
        "count": 5,
        "format": "text list with 1 photo of french fries",
        "labels": ["フライドポテト", "オニオンリング", "チーズ盛り合わせ", "ガーリックトースト", "季節のピクルス"]
      },
      {
        "title": "ドリンク",
        "position": "bottom left",
        "count": 10,
        "format": "2 text columns with 2 photos of drinks",
        "labels": ["コーヒー & ティー", "アルコール"]
      },
      {
        "title": "スイーツ",
        "position": "bottom right",
        "count": 3,
        "labels": ["自家製ティラミス", "フォンダンショコラ", "季節のフルーツパンケーキ"]
      }
    ]
  },
  "footer": {
    "banner_text": "{argument name=\"footer text\" default=\"★ ランチタイム 11:00〜15:00 は、ドリンクセット +¥300! ★\"}"
  }
}

## 中文译文（源站提供）
{
  "type": "餐厅菜单设计",
  "style": {
    "background": "深色木纹质感",
    "accents": "{argument name=\"theme color\" default=\"金色\"}",
    "typography": "优雅的衬线体与无衬线体混搭",
    "photography": "高分辨率、令人垂涎的美食摄影，配以暖色调灯光"
  },
  "header": {
    "main_title": "{argument name=\"main title\" default=\"GRAND MENU\"}",
    "subtitle": "{argument name=\"restaurant type\" default=\"开放式厨房餐厅\"}",
    "top_right_badge": "使用当季严选食材！"
  },
  "layout": {
    "sections": [
      {
        "title": "主厨推荐",
        "position": "顶部",
        "count": 3,
        "featured_item": "{argument name=\"featured item name\" default=\"特选和牛牛排 200g\"}",
        "labels": ["特选和牛牛排 200g", "松露风味浓郁培根蛋酱意面", "海鲜意面"]
      },
      {
        "title": "前菜・沙拉",
        "position": "中左上",
        "count": 4,
        "labels": ["生火腿马苏里拉奶酪卡普里沙拉", "三文鱼薄片刺身", "牛油果鲜虾绿色沙拉", "今日浓汤"]
      },
      {
        "title": "意面 & 披萨",
        "position": "中右上",
        "count": 4,
        "labels": ["生海胆奶油意面", "马苏里拉罗勒番茄意面", "玛格丽特披萨", "四重芝士披萨"]
      },
      {
        "title": "主菜",
        "position": "中左下",
        "count": 4,
        "labels": ["100% 黑毛和牛汉堡肉", "香煎三文鱼", "自制烤牛肉盖饭", "大虾蒜香虾"]
      },
      {
        "title": "主食",
        "position": "中右中",
        "count": 3,
        "labels": ["牛筋蒜香炒饭", "滑蛋蛋包饭", "海鲜西班牙大锅饭"]
      },
      {
        "title": "小食",
        "position": "中右下",
        "count": 5,
        "format": "带有一张炸薯条照片的文本列表",
        "labels": ["炸薯条", "洋葱圈", "芝士拼盘", "蒜香吐司", "季节性腌菜"]
      },
      {
        "title": "饮品",
        "position": "左下",
        "count": 10,
        "format": "两栏文本，配有两张饮品照片",
        "labels": ["咖啡 & 茶", "酒精饮料"]
      },
      {
        "title": "甜点",
        "position": "右下",
        "count": 3,
        "labels": ["自制提拉米苏", "熔岩巧克力蛋糕", "当季水果松饼"]
      }
    ]
  },
  "footer": {
    "banner_text": "{argument name=\"footer text\" default=\"★ 午餐时间 11:00〜15:00，饮品套餐仅需 +¥300！★\"}"
  }
}

## 来源备注
- 源站作者：エンガワ
- 源站 UUID：lShhZ4Ykb3
- 源站分类：06_图文排版视觉传达
