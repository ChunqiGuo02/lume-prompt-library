---
id: graphic-title-boy-name-0131
title: "ChatGPT图像生成能力科普"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["漫画", "二次元", "人工智能", "科技", "科普", "生成", "风景", "未来"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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
  "type": "4-panel educational manga with infographic footer",
  "theme": "{argument name=\"comic theme\" default=\"ChatGPT image generation capabilities\"}",
  "characters": {
    "boy": "{argument name=\"boy character\" default=\"young boy with brown hair wearing a blue hoodie\"}",
    "girl": "anime girl with brown hair and teal streaks, wearing a white hoodie with a green logo, representing {argument name=\"girl character name\" default=\"ChatGPTちゃん\"}"
  },
  "layout": {
    "panels": [
      {
        "number": 1,
        "title": "1 撮り逃した…",
        "scene": "Boy looking disappointed at his smartphone. Background is a sunrise over a city river.",
        "dialogue": ["朝焼け、見たかったのに寝坊しちゃった…。この瞬間しか撮れない景色って、もう戻せないよな…"]
      },
      {
        "number": 2,
        "title": "2 ChatGPTちゃん登場！",
        "scene": "Girl appears smiling confidently. Boy looks surprised.",
        "dialogue": ["それ、ChatGPTでシミュレーションできるよ！", "えっ！？どういうこと？"]
      },
      {
        "number": 3,
        "title": "3 同じ場所の時間の流れを一気に生成！",
        "subtitle": "プロンプト：「{argument name=\"example prompt\" default=\"この場所の朝・昼・夕方・夜の景色を見せて\"}」",
        "visuals": {
          "count": 4,
          "labels": ["朝", "昼", "夕方", "夜"],
          "description": "Four vertical slices showing the exact same city river scene transitioning from morning to noon, evening, and night."
        },
        "scene": "Girl winking and pointing at the images.",
        "dialogue": ["ほら！同じ構図で時間が変わるとこんなに景色が変わるんだよ♪"]
      },
      {
        "number": 4,
        "title": "4 未来も想像できる時代！",
        "scene": "Boy looks amazed with sparkling eyes. Girl winks and points upwards.",
        "dialogue": ["すごい…！撮り逃してもChatGPTで時間の流れまで作れちゃうのか！", "うん！景色は一瞬だけじゃない。AIなら“時間”も一緒に描けるんだよ！"]
      }
    ],
    "footer": {
      "title": "{argument name=\"footer title\" default=\"解説：この絵が示している進化\"}",
      "columns": {
        "count": 4,
        "items": [
          {
            "title": "❶ 構図の固定精度が上がった",
            "content": "Text explaining improved composition consistency."
          },
          {
            "title": "❷ キャラクターが“役割”を演じている",
            "content": "Text explaining characters playing specific roles."
          },
          {
            "title": "❸ 情報デザインの理解が深くなった",
            "content": "Text explaining deeper understanding of information design."
          },
          {
            "title": "❹ “読者にどう伝わるか”まで踏み込んでいる",
            "content": "Text explaining focus on reader comprehension."
          }
        ]
      }
    }
  }
}

## 中文译文（源站提供）
{
  "type": "带底部信息图表的 4 格教育漫画",
  "characters": {
    "boy": {
      "description": "小男孩，棕色头发",
      "outfit": "{argument name=\"boy outfit\" default=\"蓝色连帽衫\"}"
    },
    "girl": {
      "name": "{argument name=\"main character name\" default=\"ChatGPT 酱\"}",
      "description": "动漫女孩",
      "hair": "{argument name=\"girl hair style\" default=\"棕色波波头，带青色挑染\"}",
      "outfit": "带有绿色 AI 标志的白色连帽衫"
    }
  },
  "layout": {
    "comic_panels": [
      {
        "panel_number": 1,
        "title": "1 错过了拍摄时机……",
        "scene": "男孩拿着智能手机显得很失望，背景是河流与城市的日出",
        "speech_bubble": "明明想看朝霞的，结果睡过头了……这种瞬间才能捕捉到的景色，再也回不来了吧……"
      },
      {
        "panel_number": 2,
        "title": "2 ChatGPT 酱登场！",
        "scene": "男孩感到惊讶，女孩指着前方微笑着",
        "speech_bubbles": [
          "诶！？什么意思？",
          "那个，用 ChatGPT 就能模拟出来哦！"
        ]
      },
      {
        "panel_number": 3,
        "title": "3 一次性生成同一地点的时间流转！",
        "sub_text": "提示词：{argument name=\"panel 3 prompt text\" default=\"“展示这个地方早、中、晚、夜的景色”\"}",
        "sub_images": {
          "count": 4,
          "description": "同一城市景观在不同时间段的景象",
          "labels": ["早", "中", "晚", "夜"]
        },
        "scene": "女孩在下方指着上方的子图像",
        "speech_bubble": "看！在构图不变的情况下，时间改变后景色会发生这么大的变化♪"
      },
      {
        "panel_number": 4,
        "title": "4 连未来都能想象的时代！",
        "scene": "男孩眼神闪烁，感到惊叹，女孩眨眼并指着前方",
        "speech_bubbles": [
          "好厉害……！就算错过了拍摄，用 ChatGPT 也能把时间流转制作出来吗！",
          "嗯！景色不只是一瞬间。有了 AI，连“时间”也能一起描绘出来哦！"
        ]
      }
    ],
    "infographic_section": {
      "position": "底部",
      "title": "{argument name=\"infographic main title\" default=\"解析：这张图所展示的进化\"}",
      "columns": {
        "count": 4,
        "headers": [
          "❶ 构图的固定精度提升了",
          "❷ 角色正在扮演“角色”",
          "❸ 对信息设计的理解加深了",
          "❹ 深入到了“如何传达给读者”的层面"
        ],
        "content_description": "每个标题下方的详细说明文字"
      }
    }
  }
}

## 来源备注
- 源站作者：G2（じーにー）｜AI日曜大工｜Genspark インダストリアンバサダー
- 源站 UUID：4MiE63sBbv
- 源站分类：06_图文排版视觉传达
