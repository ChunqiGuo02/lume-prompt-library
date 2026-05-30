---
id: "product-name-argument-default-007"
title: "电商运动服饰直播界面"
category: product
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "电商", "带货", "运动", "女装", "白色", "网球", "夏季"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:16"
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
  "type": "e-commerce livestream UI mockup",
  "subject": {
    "description": "photorealistic young Asian woman, sweaty glowing skin, long dark wavy hair, wearing a white short-sleeve polo shirt and white pleated tennis skirt, holding a white tennis racket over her right shoulder, looking directly at camera, studio lighting, white background"
  },
  "layout": {
    "top_header": {
      "host_info": {
        "name": "{argument name=\"host name\" default=\"小鹿运动优选\"}",
        "stats": "12.8万本场点赞",
        "button": "关注"
      },
      "rank_tag": "带货榜第3名",
      "viewer_stats": "1.2万"
    },
    "top_right": {
      "coupon": {
        "title": "直播间专属券",
        "value": "￥20 满199可用",
        "button": "领取"
      }
    },
    "left_overlay": {
      "title": "{argument name=\"campaign title\" default=\"夏日运动季\"}",
      "subtitle": "{argument name=\"campaign subtitle\" default=\"活力开场\"}",
      "bullet_points": {
        "count": 3,
        "items": ["透气速干", "弹力舒适", "运动百搭"]
      }
    },
    "right_overlay": {
      "product_cards": {
        "count": 2,
        "card_1": {
          "status": "正在讲解",
          "image": "white polo shirt and skirt flat lay",
          "title": "{argument name=\"product name\" default=\"运动POLO衫套装\"}",
          "details": "白色·M码",
          "price": "{argument name=\"price\" default=\"￥129\"}",
          "button": "去抢购"
        },
        "card_2": {
          "status": "热卖 x 156",
          "image": "miniature of main model",
          "title": "运动POLO衫套装女",
          "details": "透气速干 显瘦百搭",
          "price": "{argument name=\"price\" default=\"￥129\"}",
          "button": "抢"
        }
      }
    },
    "bottom_left": {
      "chat_messages": {
        "count": 5,
        "description": "scrolling chat messages with usernames and comments"
      },
      "purchase_alert": "用户_6789 等3人 正在去购买"
    },
    "bottom_bar": {
      "input_field": "说点什么...",
      "icons": {
        "count": 5,
        "types": ["smile", "shopping cart", "heart", "gift", "more"]
      }
    }
  }
}

## 中文译文（源站提供）
{
  "type": "电商直播界面模型",
  "subject": {
    "description": "年轻亚裔女性，留着波浪长卷发，皮肤透亮带有微汗，身穿白色短袖 Polo 衫和白色百褶网球裙，右肩扛着一支白色网球拍，直视镜头。",
    "background": "纯白色"
  },
  "ui_layout": {
    "top_bar": {
      "left": {
        "profile_name": "{argument name=\"host name\" default=\"小鹿运动优选\"}",
        "stats": "12.8 万本场点赞",
        "button": "关注",
        "badge": "带货榜第 3 名"
      },
      "right": {
        "viewer_avatars_count": 3,
        "viewer_count": "1.2 万",
        "close_button": "X"
      }
    },
    "left_panel": {
      "campaign": {
        "title": "{argument name=\"campaign title\" default=\"夏日运动季\"} 🎾",
        "subtitle": "{argument name=\"campaign subtitle\" default=\"活力开场\"}",
        "bullet_points_count": 3,
        "bullet_points": [
          "透气速干",
          "弹力舒适",
          "运动百搭"
        ]
      }
    },
    "right_panel": {
      "coupon": {
        "text": "直播间专属券 ¥20 满 199 可用",
        "button": "领取"
      },
      "product_cards_count": 2,
      "product_cards": [
        {
          "status": "正在讲解",
          "image": "白色 Polo 衫和百褶裙",
          "title": "{argument name=\"product name\" default=\"运动 POLO 衫套装\"}",
          "details": "白色·M 码",
          "price": "¥{argument name=\"product price\" default=\"129\"}",
          "button": "去抢购"
        },
        {
          "status": "热卖 x 156",
          "tags": [
            "品牌",
            "夏季新款"
          ],
          "image": "主播缩略图",
          "title": "运动 POLO 衫套装女 透气速干 显瘦百搭",
          "features": [
            "7 天无理由退货",
            "运费险"
          ],
          "price": "¥{argument name=\"product price\" default=\"129\"}",
          "button": "抢"
        }
      ]
    },
    "bottom_panel": {
      "chat_messages_count": 5,
      "chat_messages": [
        "小鹿姐姐: 欢迎新朋友们来到直播间~",
        "运动达人: 这套好看！",
        "卡卡西: 布料透气吗？",
        "主播 小鹿运动优选: 我们这个面料是冰丝速干的，运动出汗也不闷热哦~",
        "用户_6789: 已拍！"
      ],
      "purchase_notification": "用户_6789 等 3 人 正在去购买",
      "input_bar": {
        "placeholder": "说点什么...",
        "icons_count": 5,
        "icons": [
          "表情",
          "购物车",
          "爱心",
          "礼物",
          "更多选项"
        ]
      }
    }
  }
}

## 来源备注
- 源站作者：清风徐来028
- 源站 UUID：vppyMZ2x0q
- 源站分类：14_社交媒体营销
