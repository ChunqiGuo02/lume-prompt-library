---
id: branding-name-right-argument-0609
title: "直播界面UI设计模板"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "抖音", "AI", "创业", "二维码", "引流", "培训", "办公"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:21"
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
  "type": "mobile livestream UI mockup",
  "subject": {
    "person": "{argument name=\"host name\" default=\"Sam Altman\"}",
    "action": "reaching right hand out towards the camera",
    "clothing": "dark green sweater"
  },
  "background": {
    "setting": "office",
    "left_wall": "large OpenAI logo",
    "right_shelf": "wooden shelf with 3 dark bottles and 2 small signs reading 'AGI' and 'OpenAI'"
  },
  "layout": {
    "top_bar": {
      "elements": ["time 20:34", "signal bars", "wifi icon", "battery 774"]
    },
    "header": {
      "left_section": ["profile picture", "{argument name=\"account name\" default=\"OpenAI\"}", "48.3万本场点赞", "关注 button"],
      "right_section": ["3 viewer avatars", "10万+", "X close button"],
      "sub_tags": ["OpenAI官方旗舰店榜第1名", "更多直播"]
    },
    "floating_widgets": {
      "left": "red envelope icon with 00:12",
      "right": "pink gift box icon with 520好礼季 抖音商城推荐"
    },
    "bottom_left_chat": {
      "host_announcement": ["avatar", "山姆奥特曼 Sam Altman 直播中", "{argument name=\"host message\" default=\"大家好，我是山姆奥特曼，邀你加入Kevin的学堂\"}"],
      "viewer_comments_count": 5,
      "viewer_comments_labels": [
        "AI新手小白: 刚好想学，来了！",
        "小凯: 终于开播了，冲冲冲！",
        "打工人Kevin: 一人公司太香了！",
        "智创未来: 已关注，期待干货！",
        "AI副业指南: 怎么加入？"
      ]
    },
    "bottom_right_overlay": {
      "qr_code": "large scannable QR code with blue KEVIN logo in center",
      "text": "{argument name=\"qr code title\" default=\"零基础做AI一人公司 将创业变赚钱生意\"}",
      "button": "{argument name=\"qr code button text\" default=\"扫码加入\"}"
    },
    "bottom_action_bar": {
      "input_field": "说点什么...",
      "icons_count": 5,
      "icons_labels": ["smiley face", "shopping cart", "heart", "gift box", "three dots"]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播界面设计稿",
  "scene": {
    "subject": "{argument name=\"main subject\" default=\"Sam Altman\"} 的肖像，身穿深绿色毛衣，直视镜头，右手向前伸出，做出邀请的手势。",
    "background": "办公室演播室场景。左侧为巨大的 'OpenAI' 墙面 Logo。右侧为木质搁架，上面摆放着 3 瓶深色葡萄酒和 2 块小型方形铭牌，其中一块写着 'AGI'，另一块写着 'OpenAI'。"
  },
  "layout": {
    "top_overlay": {
      "status_bar": "时间 '20:34'，蜂窝信号栏，Wi-Fi 图标，电量 '774'",
      "host_profile": "OpenAI Logo，名称 'OpenAI'，副标题 '483k 人喜欢本场直播'，红色 '关注' 按钮",
      "viewer_stats": "3 个用户头像，文本 '100k+'，'X' 关闭图标",
      "banners": [
        "顶部排名横幅，显示 'OpenAI 官方旗舰店排名 #1'",
        "链接显示 '更多直播 >'",
        "红包倒计时图标 '00:12'",
        "礼盒图标，显示 '520 礼遇季抖音商城推荐'"
      ]
    },
    "bottom_left_overlay": {
      "pinned_host_message": {
        "avatar": "主播肖像",
        "name": "Sam Altman",
        "badge": "直播中",
        "message": "{argument name=\"host message\" default=\"大家好，我是山姆奥特曼，邀你加入Kevin的学堂\"}"
      },
      "live_chat": {
        "count": 5,
        "messages": [
          "32 级勋章，用户 'AI beginner'，内容 '只是想来学习，我到了！'",
          "18 级勋章，用户 'Xiaokai'，内容 '终于开播了，冲冲冲！'",
          "7 级勋章，用户 'Worker Kevin'，内容 '一人公司太棒了！'",
          "26 级勋章，用户 'Smart Future'，内容 '已关注，期待内容！'",
          "5 级勋章，用户 'AI Side Hustle Guide'，内容 '怎么加入？'"
        ]
      }
    },
    "bottom_right_overlay": {
      "qr_code_card": {
        "graphic": "大型可扫描二维码，中心带有蓝色 Logo，写着 'KEVIN'",
        "primary_text": "{argument name=\"promo headline\" default=\"零基础做AI一人公司\"}",
        "secondary_text": "{argument name=\"promo subheadline\" default=\"将创业变赚钱生意\"}",
        "call_to_action_button": "红色按钮，显示 {argument name=\"button text\" default=\"扫码加入\"}"
      }
    },
    "bottom_navigation_bar": {
      "input_field": "文本框显示 '说点什么...'",
      "icons_count": 5,
      "icons": [
        "笑脸表情图标",
        "购物车图标",
        "爱心图标",
        "礼盒图标",
        "三点菜单图标"
      ],
      "system": "底部 iOS 主屏幕指示条"
    }
  }
}

## 来源备注
- 源站作者：Kevin的学堂
- 源站 UUID：GSFvPn469z
- 源站分类：14_社交媒体营销
