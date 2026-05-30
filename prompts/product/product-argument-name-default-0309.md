---
id: product-argument-name-default-0309
title: "主题乐园华丽巡游花车实拍风"
category: product
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["游行", "女仆", "游乐园", "彩车", "晴天", "蓝天", "实拍", "热闹"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "9:16"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "目的": "参照画像をモチーフにした、現実のテーマパークで撮影されたような派手で華やかな実写風パレードフロート画像を生成する",
  "スタイル": {
    "表現": "実写写真風",
    "リアリティ": "安全基準を満たし、現実に存在していそうな構造",
    "世界観": "人気テーマパークの大型パレード"
  },
  "メイン被写体": {
    "種類": "参照画像をモチーフにしたパレードフロート",
    "スケール": {
      "印象": "非常に派手で目を引くが、現実的な高さに抑えられている",
      "高さ制限": "運営上安全とされる範囲内の高さ"
    },
    "モチーフ解釈": {
      "参照元": "提供される参照画像",
      "反映方法": "形状・色・雰囲気を立体造形として再解釈",
      "抽象度": "そのまま再現せず、テーマパーク用フロートとしてデザイン化"
    },
    "メイン造形": {
      "姿勢": "{argument name="メイン造形の姿勢" default="座っている"}",
      "理由": "重心を低く保ち、安定性を確保するため",
      "足の扱い": "足はフロート構造や装飾に統合され、明確には描写しない"
    },
    "装飾": {
      "色彩": "参照画像を基調にした高彩度でコントラストの強い配色",
      "要素": "大型装飾パーツ、リボン状や放射状のモチーフ",
      "密度": "一目で派手さを感じる高い装飾密度"
    },
    "質感": "FRP造形や塗装を思わせる実在物らしい質感"
  },
  "周囲の要素": {
    "ダンサー": {
      "存在": true,
      "人数": "多め",
      "衣装": {
        "デザイン": "参照画像のモチーフを抽象化したデザイン",
        "色": "参照画像のカラーパレットを反映した派手な配色",
        "動きやすさ": "実際に着用可能な現実的構造"
      },
      "動き": "祝祭感のある大きなジェスチャーのダンス"
    },
    "観客": {
      "存在": true,
      "スマホ撮影": {
        "行動": "多くの観客がスマートフォンを掲げて撮影している",
        "画面表現": "フロートが映り込んだスマホ画面が点在する"
      },
      "ファングッズ": {
        "行動": "参照画像モチーフのアイテムを振って応援している",
        "種類": "フラッグ、ライトスティック、抽象化された小物",
        "効果": "画面全体に動きとリズムを与える"
      }
    }
  },
  "環境": {
    "天候": "{argument name="天候" default="快晴の青空"}",
    "時間帯": "昼",
    "ロケーション": "{argument name="ロケーション" default="テーマパークのメインパレードルート"}"
  },
  "カメラ": {
    "視点": "観客の目線からの自然なカメラ位置",
    "撮影機材": "iPhone",
    "画質": "少し荒さのあるスマートフォン実写画質",
    "手持ち感": "臨場感のあるわずかなブレ",
    "アスペクト比": "9:16"
  }
}

## 中文译文（源站提供）
```json
{
  "purpose": "生成一张华丽、迷人的真人风格花车图片，以参考图为蓝本，仿佛是在真实的游乐园中拍摄",
  "style": {
    "expression": "真人照片风格",
    "reality": "符合安全标准且看起来真实存在的结构",
    "worldview": "热门主题公园的大型游行"
  },
  "main subject": {
    "type": "以参考图为蓝本的花车",
    "scale": {
      "impression": "非常华丽醒目，但保持在实际高度范围内",
      "height_limit": "高度在被认为安全可操作的范围内"
    },
    "motif_interpretation": {
      "source": "提供的参考图",
      "reflection_method": "将形状、颜色和氛围重新诠释为三维雕塑",
      "abstraction_level": "设计成主题公园花车，而非直接复制品"
    },
    "main_sculpture": {
      "pose": "{argument name=\"main sculpture pose\" default=\"sitting\"}",
      "reason": "保持低重心以确保稳定性",
      "foot_handling": "脚部融入花车结构或装饰中，未清晰描绘"
    },
    "decoration": {
      "color_scheme": "基于参考图的高饱和度和强烈对比",
      "elements": "大型装饰部件，缎带状或放射状图案",
      "density": "高装饰密度，立即传达出华丽感"
    },
    "texture": "逼真的纹理，让人联想到玻璃钢成型和涂漆"
  },
  "surrounding_elements": {
    "dancers": {
      "presence": true,
      "number": "众多",
      "costumes": {
        "design": "参考图主题的抽象设计",
        "color": "反映参考图调色板的华丽配色",
        "mobility": "可实际穿着的逼真结构"
      },
      "movement": "以大而喜庆的姿态舞蹈"
    },
    "audience": {
      "presence": true,
      "smartphone_photography": {
        "action": "许多观众举起智能手机拍照",
        "screen_representation": "零星的智能手机屏幕显示花车"
      },
      "fan_goods": {
        "action": "挥舞基于参考图主题的物品欢呼",
        "types": "旗帜、荧光棒、抽象的小物件",
        "effect": "为整个画面增添动感和节奏"
      }
    }
  },
  "environment": {
    "weather": "{argument name=\"weather\" default=\"Clear blue sky\"}",
    "time_of_day": "白天",
    "location": "{argument name=\"location\" default=\"Main parade route of a theme park\"}"
  },
  "camera": {
    "viewpoint": "从观众视角出发的自然相机位置",
    "equipment": "iPhone",
    "image_quality": "略显粗糙的智能手机真人图像质量",
    "handheld_feel": "轻微模糊以增强真实感",
    "aspect_ratio": "9:16"
  }
}
```

## 来源备注
- 源站作者：北の大地便/めい/桜草メイ
- 源站 UUID：xpcZlMNJFc
- 源站分类：12_手工玩具手办
