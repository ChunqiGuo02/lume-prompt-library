---
id: "landscape-text-type-position-001"
title: "孙悟空美团外卖配送截图"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["孙悟空", "黑神话", "死亡搁浅", "外卖", "配送", "雨天", "荒凉", "写实"]
recommended_models: []
recommended_params:
  aspect_ratio: "5:4"
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
  "type": "video game screenshot mockup",
  "style": "cinematic, realistic 3D graphics, overcast, rainy, desolate rocky landscape reminiscent of Death Stranding",
  "character": {
    "identity": "{argument name=\"character identity\" default=\"Sun Wukong\"}",
    "features": "monkey face, golden headband, holding a golden staff",
    "outfit": "yellow delivery jacket with black accents, large square black and yellow delivery backpack",
    "branding": "kangaroo logo and text {argument name=\"delivery company\" default=\"美团外卖\"} on jacket and backpack"
  },
  "environment": {
    "foreground": "rocky terrain with a flowing stream",
    "background": "futuristic circular building with a tall antenna, glowing text {argument name=\"building name\" default=\"BRIDGES 配送中心\"}"
  },
  "layout": {
    "ui_elements": 7,
    "sections": [
      {
        "position": "top-left",
        "type": "mission objective",
        "text": "第3节：南部结点城 / {argument name=\"mission objective\" default=\"连接南部结点城，拓展开罗尔网络。\"} / [订单No.12] 美团外卖配送：南部结点城 / 将外卖送达给收件人。"
      },
      {
        "position": "center-right",
        "type": "destination marker",
        "text": "目的地 / 南部结点城 / 约 1.8 km",
        "icon": "star"
      },
      {
        "position": "center",
        "type": "weight info",
        "text": "负重 / 28.5 kg / 125.0 kg",
        "attached_to": "backpack"
      },
      {
        "position": "middle-right",
        "type": "order info",
        "text": "订单信息 / [订单No.12] / 配送物品：外卖 / 收件人：南部结点城·工作人员 / 时限：30:00 / 报酬：+198 ¥520"
      },
      {
        "position": "bottom-right",
        "type": "controls",
        "text": "移动 / 保持平衡 / 切换视角 / 打开终端",
        "icons": "controller buttons"
      },
      {
        "position": "bottom-center",
        "type": "subtitles",
        "text": "孙悟空： / {argument name=\"subtitle text\" default=\"俺老孙来也！这外卖也要送到西天去！\"}"
      },
      {
        "position": "bottom-left",
        "type": "HUD",
        "elements": "blue health/stamina bars, D-pad tool icons"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "电子游戏截图样机",
  "style": "电影感，写实 3D 画面，阴天，雨天，类似《死亡搁浅》(Death Stranding) 的荒凉岩石景观",
  "character": {
    "identity": "{argument name=\"character identity\" default=\"孙悟空\"}",
    "features": "猴脸，金箍，手持金箍棒",
    "outfit": "带有黑色点缀的黄色外卖夹克，巨大的方形黑黄配色外卖背包",
    "branding": "夹克和背包上有袋鼠标志及 {argument name=\"delivery company\" default=\"美团外卖\"} 文字"
  },
  "environment": {
    "foreground": "带有溪流的岩石地形",
    "background": "带有高大天线的未来主义圆形建筑，发光文字 {argument name=\"building name\" default=\"BRIDGES 配送中心\"}"
  },
  "layout": {
    "ui_elements": 7,
    "sections": [
      {
        "position": "左上角",
        "type": "任务目标",
        "text": "第 3 节：南部结点城 / {argument name=\"mission objective\" default=\"连接南部结点城，拓展开罗尔网络。\"} / [订单 No.12] 美团外卖配送：南部结点城 / 将外卖送达给收件人。"
      },
      {
        "position": "中右侧",
        "type": "目的地标记",
        "text": "目的地 / 南部结点城 / 约 1.8 km",
        "icon": "星形"
      },
      {
        "position": "中心",
        "type": "负重信息",
        "text": "负重 / 28.5 kg / 125.0 kg",
        "attached_to": "背包"
      },
      {
        "position": "中右侧偏下",
        "type": "订单信息",
        "text": "订单信息 / [订单 No.12] / 配送物品：外卖 / 收件人：南部结点城·工作人员 / 时限：30:00 / 报酬：+198 ¥520",
        "attached_to": "背包"
      },
      {
        "position": "右下角",
        "type": "操作提示",
        "text": "移动 / 保持平衡 / 切换视角 / 打开终端",
        "icons": "手柄按键"
      },
      {
        "position": "底部中心",
        "type": "字幕",
        "text": "孙悟空： / {argument name=\"subtitle text\" default=\"俺老孙来也！这外卖也要送到西天去！\"}"
      },
      {
        "position": "左下角",
        "type": "HUD",
        "elements": "蓝色生命值/体力条，十字键工具图标"
      }
    ]
  }
}

## 来源备注
- 源站作者：lcomplete
- 源站 UUID：PMmr0doFzo
- 源站分类：06_图文排版视觉传达
