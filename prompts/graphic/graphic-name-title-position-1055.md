---
id: graphic-name-title-position-1055
title: "苍界机动母舰瓦尔希翁设定图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["科幻", "军事", "母舰", "机甲", "军舰", "蓝图", "灰调", "重工"]
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
  "type": "sci-fi military ship specification sheet",
  "subject": {
    "name": "{argument name=\"ship name\" default=\"蒼界機動母艦 ヴァルシオン\"}",
    "english_name": "{argument name=\"english name\" default=\"VALSION\"}",
    "subtitle": "{argument name=\"ship type\" default=\"高機動兵装運用母艦 / 専用機運用母艦\"}",
    "design": "massive futuristic aircraft carrier designed for mecha deployment, {argument name=\"primary color\" default=\"dark naval gray\"} hull, flat flight deck with catapult rails, bridge tower on the starboard side"
  },
  "layout": {
    "style": "dense technical infographic, blueprint aesthetic with realistic renders, light blue grid background, dark blue headers",
    "sections": [
      {
        "title": "主要諸元",
        "position": "top-center",
        "content": "List of 6 technical specifications including length, width, draft, displacement, main engine, and crew capacity."
      },
      {
        "title": "スケール比較",
        "position": "top-center right",
        "count": 3,
        "labels": ["ヴァルシオン (全長330m)", "{argument name=\"mecha name\" default=\"アークセリオン\"} (全高18.5m)", "人員 (約1.8m)"]
      },
      {
        "title": "外観：サイドビュー",
        "position": "upper-left",
        "content": "Detailed side profile render of the ship with a scale bar underneath."
      },
      {
        "title": "上面図：メインデッキプラン",
        "position": "mid-left",
        "content": "Detailed top-down render of the ship's flight deck."
      },
      {
        "title": "内部構造：ロングカット (左舷側カットアウェイ)",
        "position": "center-left",
        "content": "Cross-section render showing internal hangars, VLS, and launch rails with 10 text callouts."
      },
      {
        "title": "発艦システム：トライデント・レール",
        "position": "top-right",
        "count": 8,
        "labels": ["① 前傾姿勢制御アーム", "② 下腿・足部ガイドロック", "③ 腰部スタビライザー", "④ 電磁加速レール", "⑤ 補助支持アーム", "⑥ 艦首上昇制御ノーズ", "⑦ 終端セーフティエリア", "⑧ 背面推進ユニット点火"]
      },
      {
        "title": "システム詳細",
        "position": "mid-right",
        "count": 6,
        "labels": ["足部ガイドロック機構", "補助支持アーム", "搭乗ブリッジ", "対風偏向ブレード", "艦首ノーズ", "デッキ安定化ユニット"]
      },
      {
        "title": "安定化・姿勢制御システム",
        "position": "mid-lower-right",
        "count": 3,
        "labels": ["アクティブフィンスタビライザー", "高速バラスト制御タンク", "デッキ局所ジャイロ基盤"]
      },
      {
        "title": "防御・センサーシステム",
        "position": "lower-right",
        "count": 3,
        "labels": ["VLSセル", "CIWS/近接防御システム", "電子戦マスト/EWシステム"]
      },
      {
        "title": "中央格納庫・整備ベイ",
        "position": "bottom-left",
        "count": 8,
        "labels": ["① 背面支持タワー", "② 肩部補助拘束アーム", "③ 腰部スタビライザー", "④ 足部ロックベース", "⑤ 搭乗ブリッジ", "⑥ 整備デッキ(上層)", "⑦ 整備デッキ(中層)", "⑧ 整備デッキ(下層)"]
      },
      {
        "title": "武装格納庫・搬送システム",
        "position": "bottom-mid-left",
        "count": 4,
        "labels": ["セレスブレード格納ラック", "ヴァーテクスライフル格納庫", "フェザー・ビット整備セル", "磁気搬送レール/自動搬送台車"]
      },
      {
        "title": "着艦・回収システム",
        "position": "bottom-center",
        "count": 6,
        "labels": ["① 着艦ガイドマーカー", "② 瞬時磁気ロックフィールド", "③ 足首クランプ", "④ 背面スタビライザーアーム", "⑤ データリンク整合エリア", "⑥ 艦内搬送レール接続部"]
      },
      {
        "title": "デッキ運用フロー",
        "position": "bottom-strip",
        "count": 7,
        "labels": ["1. 格納庫内待機", "2. 艦内搬送レールへ接続", "3. 発艦レーンへ移動・固定", "4. 前傾姿勢・最終確認", "5. 超電磁加速開始", "6. 艦首離脱・推進点火", "7. 上昇・戦闘空域へ"]
      },
      {
        "title": "運用コンセプト",
        "position": "bottom-right corner",
        "content": "Text paragraph describing the operational concept, accompanied by a stylized wing-and-sword emblem."
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "科幻军舰规格表",
  "subject": {
    "name": "{argument name=\"ship name\" default=\"苍界机动母舰 ヴァルシオン\"}",
    "english_name": "{argument name=\"english name\" default=\"VALSION\"}",
    "subtitle": "{argument name=\"ship type\" default=\"高机动兵装运用母舰 / 专用机运用母舰\"}",
    "design": "专为机甲部署设计的大型未来主义航空母舰，采用 {argument name=\"primary color\" default=\"深海军灰\"} 船体，配备带有弹射轨道的平坦飞行甲板，右舷设有舰桥塔"
  },
  "layout": {
    "style": "密集型技术信息图，蓝图美学风格，结合写实渲染，浅蓝色网格背景，深蓝色标题栏",
    "sections": [
      {
        "title": "主要诸元",
        "position": "top-center",
        "content": "列出 6 项技术规格，包括长度、宽度、吃水深度、排水量、主机和乘员容量。"
      },
      {
        "title": "尺寸对比",
        "position": "top-center right",
        "count": 3,
        "labels": ["ヴァルシオン (全长 330 m)", "{argument name=\"mecha name\" default=\"アークセリオン\"} (全高 18.5 m)", "人员 (约 1.8 m)"]
      },
      {
        "title": "外观：侧视图",
        "position": "upper-left",
        "content": "舰船的详细侧面轮廓渲染图，下方附有比例尺。"
      },
      {
        "title": "俯视图：主甲板布局",
        "position": "mid-left",
        "content": "舰船飞行甲板的详细俯视渲染图。"
      },
      {
        "title": "内部结构：纵向剖面图 (左舷侧剖面)",
        "position": "center-left",
        "content": "显示内部机库、垂直发射系统 (VLS) 和发射轨道的横截面渲染图，带有 10 个文字标注。"
      },
      {
        "title": "发射系统：三叉戟轨道",
        "position": "top-right",
        "count": 8,
        "labels": ["① 前倾姿态控制臂", "② 小腿/足部导向锁", "③ 腰部稳定器", "④ 电磁加速轨道", "⑤ 辅助支撑臂", "⑥ 舰首上升控制鼻锥", "⑦ 终端安全区域", "⑧ 背部推进单元点火"]
      },
      {
        "title": "系统详情",
        "position": "mid-right",
        "count": 6,
        "labels": ["足部导向锁机构", "辅助支撑臂", "登机桥", "防风偏转叶片", "舰首鼻锥", "甲板稳定单元"]
      },
      {
        "title": "稳定与姿态控制系统",
        "position": "mid-lower-right",
        "count": 3,
        "labels": ["主动鳍式稳定器", "高速压载控制舱", "甲板局部陀螺仪基座"]
      },
      {
        "title": "防御与传感器系统",
        "position": "lower-right",
        "count": 3,
        "labels": ["VLS 单元", "CIWS/近程防御系统", "电子战桅杆/EW 系统"]
      },
      {
        "title": "中央机库与整备舱",
        "position": "bottom-left",
        "count": 8,
        "labels": ["① 背部支撑塔", "② 肩部辅助约束臂", "③ 腰部稳定器", "④ 足部锁定基座", "⑤ 登机桥", "⑥ 整备甲板 (上层)", "⑦ 整备甲板 (中层)", "⑧ 整备甲板 (下层)"]
      },
      {
        "title": "武装库与输送系统",
        "position": "bottom-mid-left",
        "count": 4,
        "labels": ["塞雷斯之刃 (Ceres Blade) 存储架", "顶点步枪 (Vertex Rifle) 仓库", "羽翼浮游炮 (Feather Bit) 整备单元", "磁力输送轨道/自动搬运台车"]
      },
      {
        "title": "着舰与回收系统",
        "position": "bottom-center",
        "count": 6,
        "labels": ["① 着舰导向标记", "② 瞬时磁力锁定场", "③ 脚踝夹具", "④ 背部稳定臂", "⑤ 数据链路整合区", "⑥ 舰内输送轨道连接部"]
      },
      {
        "title": "甲板作业流程",
        "position": "bottom-strip",
        "count": 7,
        "labels": ["1. 机库内待命", "2. 连接舰内输送轨道", "3. 移动至发射道并固定", "4. 前倾姿态与最终检查", "5. 超电磁加速启动", "6. 舰首脱离与推进点火", "7. 上升并进入作战空域"]
      },
      {
        "title": "作战理念",
        "position": "bottom-right corner",
        "content": "描述作战理念的段落，配有风格化的翼剑徽章。"
      }
    ]
  }
}

## 来源备注
- 源站作者：いにしえ@AI Director & Creator｜Will Oldgram
- 源站 UUID：0w2x3wJhPN
- 源站分类：06_图文排版视觉传达
