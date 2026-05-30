---
id: graphic-title-channel-stats-0900
title: "生成YouTube桌面端界面"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["暗色", "界面", "网页", "油管", "视频", "科普", "科技", "知识"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
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
  "type": "desktop web browser UI screenshot",
  "environment": "{argument name=\"os environment\" default=\"Windows 11 desktop\"}",
  "theme": "{argument name=\"ui theme\" default=\"dark mode\"}",
  "browser_window": {
    "tabs": ["YouTube", "New Tab"],
    "url_bar": "youtube.com",
    "profile_icon": "{argument name=\"profile initial\" default=\"M\"}"
  },
  "app_interface": {
    "header": {
      "logo": "{argument name=\"website name\" default=\"YouTube\"} GB",
      "search_bar": "Search",
      "icons": ["mic", "create", "notifications", "profile"]
    },
    "filter_bar": {
      "active_filter": "{argument name=\"active filter\" default=\"All\"}",
      "count": 11,
      "labels": ["All", "Gaming", "Music", "Live", "Podcasts", "Mixes", "Science", "Lo-fi", "Thrillers", "Recently uploaded", "Watched"]
    },
    "sidebar": {
      "sections": [
        { "title": "Main", "count": 3, "labels": ["Home", "Shorts", "Subscriptions"] },
        { "title": "You", "count": 6, "labels": ["Your channel", "History", "Playlists", "Your videos", "Watch later", "Liked videos"] },
        { "title": "Subscriptions", "count": 8, "labels": ["Linus Tech Tips", "MrBeast", "Kurzgesagt - In a Nutshell", "ColdFusion", "3Blue1Brown", "Khan Academy", "Veritasium", "Show more"] },
        { "title": "Explore", "count": 7, "labels": ["Trending", "Music", "Films", "Live", "Gaming", "News", "Sport"] },
        { "title": "More from YouTube", "count": 3, "labels": ["YouTube Premium", "YouTube Music", "YouTube Kids"] }
      ]
    },
    "main_content": {
      "layout": "3 columns by 4 rows grid",
      "count": 12,
      "video_cards": [
        { "title": "Why Build Your Own GPU is Almost Impossible", "channel": "Linus Tech Tips", "stats": "164K views • 1 day ago", "thumbnail": "CPU/GPU chip" },
        { "title": "Survive 100 Days In Circle, Win $500,000", "channel": "MrBeast", "stats": "40M views • 5 days ago", "thumbnail": "MrBeast with crowd in blue tracksuits" },
        { "title": "What If We Nuke an Asteroid?", "channel": "Kurzgesagt - In a Nutshell", "stats": "4.2M views • 6 hours ago", "thumbnail": "Missile hitting asteroid in space" },
        { "title": "How Dubai Became a $10 Billion City", "channel": "ColdFusion", "stats": "1.6M views • 2 weeks ago", "thumbnail": "Man and Dubai skyline" },
        { "title": "The Beautiful Math of Euler's Identity", "channel": "3Blue1Brown", "stats": "2.8M views • 3 months ago", "thumbnail": "Math equation and spiral graph" },
        { "title": "The World in 2040 - Population, Climate & More", "channel": "Veritasium", "stats": "7.7M views • 2 weeks ago", "thumbnail": "Lush green forest aerial view" },
        { "title": "I've Been Using Linux For 12 Years, This Is What Finally...", "channel": "DistroTube", "stats": "160K views • 3 days ago", "thumbnail": "Laptop and smartphone with Linux logo" },
        { "title": "Black Holes Explained - From Birth to Death", "channel": "Khan Academy", "stats": "3.9M views • 3 months ago", "thumbnail": "Glowing black hole accretion disk" },
        { "title": "The Problem With Diet Advice", "channel": "Andrew Huberman", "stats": "4.4M views • 6 days ago", "thumbnail": "Man with glasses speaking" },
        { "title": "How to Learn Anything (Evidence-Based)", "channel": "Ali Abdaal", "stats": "2.7M views • 3 months ago", "thumbnail": "Vector illustration of man reading a book" },
        { "title": "The Last of Us Part 2 is a Masterpiece", "channel": "Naughty Dog", "stats": "2.3M views • 3 years ago", "thumbnail": "Ellie from The Last of Us" },
        { "title": "lofi hip hop radio - beats to relax/study to", "channel": "Lofi Girl", "stats": "LIVE", "thumbnail": "Lofi girl studying at desk" }
      ]
    }
  },
  "taskbar": {
    "os": "Windows",
    "icons": ["Start", "Search", "Task View", "File Explorer", "Edge", "Spotify"],
    "system_tray": "08:34 03/04/2024"
  }
}

## 中文译文（源站提供）
{
  "type": "桌面网页浏览器 UI 截图",
  "environment": "{argument name=\"os environment\" default=\"Windows 11 桌面\"}",
  "theme": "{argument name=\"ui theme\" default=\"深色模式\"}",
  "browser_window": {
    "tabs": ["YouTube", "新标签页"],
    "url_bar": "youtube.com",
    "profile_icon": "{argument name=\"profile initial\" default=\"M\"}"
  },
  "app_interface": {
    "header": {
      "logo": "{argument name=\"website name\" default=\"YouTube\"} GB",
      "search_bar": "搜索",
      "icons": ["麦克风", "创建", "通知", "个人资料"]
    },
    "filter_bar": {
      "active_filter": "{argument name=\"active filter\" default=\"全部\"}",
      "count": 11,
      "labels": ["全部", "游戏", "音乐", "直播", "播客", "合辑", "科学", "Lo-fi", "惊悚", "最新上传", "已观看"]
    },
    "sidebar": {
      "sections": [
        { "title": "主要", "count": 3, "labels": ["首页", "Shorts", "订阅内容"] },
        { "title": "我", "count": 6, "labels": ["您的频道", "历史记录", "播放列表", "您的视频", "稍后观看", "点赞的视频"] },
        { "title": "订阅内容", "count": 8, "labels": ["Linus Tech Tips", "MrBeast", "Kurzgesagt - In a Nutshell", "ColdFusion", "3Blue1Brown", "Khan Academy", "Veritasium", "显示更多"] },
        { "title": "探索", "count": 7, "labels": ["热门", "音乐", "电影", "直播", "游戏", "新闻", "体育"] },
        { "title": "更多 YouTube 服务", "count": 3, "labels": ["YouTube Premium", "YouTube Music", "YouTube Kids"] }
      ]
    },
    "main_content": {
      "layout": "3 列 4 行网格",
      "count": 12,
      "video_cards": [
        { "title": "为什么自制 GPU 几乎是不可能的", "channel": "Linus Tech Tips", "stats": "16.4 万次观看 • 1 天前", "thumbnail": "CPU/GPU 芯片" },
        { "title": "在圆圈里生存 100 天，赢取 50 万美元", "channel": "MrBeast", "stats": "4000 万次观看 • 5 天前", "thumbnail": "身穿蓝色运动服的 MrBeast 和人群" },
        { "title": "如果我们用核弹炸毁一颗小行星会怎样？", "channel": "Kurzgesagt - In a Nutshell", "stats": "420 万次观看 • 6 小时前", "thumbnail": "导弹击中太空中的小行星" },
        { "title": "迪拜是如何成为一座 100 亿美元城市的", "channel": "ColdFusion", "stats": "160 万次观看 • 2 周前", "thumbnail": "男子与迪拜天际线" },
        { "title": "欧拉恒等式的美妙数学", "channel": "3Blue1Brown", "stats": "280 万次观看 • 3 个月前", "thumbnail": "数学公式和螺旋图" },
        { "title": "2040 年的世界 - 人口、气候及更多", "channel": "Veritasium", "stats": "770 万次观看 • 2 周前", "thumbnail": "茂密森林的航拍图" },
        { "title": "我用了 12 年 Linux，最终……", "channel": "DistroTube", "stats": "16 万次观看 • 3 天前", "thumbnail": "带有 Linux 标志的笔记本电脑和智能手机" },
        { "title": "黑洞详解 - 从诞生到死亡", "channel": "Khan Academy", "stats": "390 万次观看 • 3 个月前", "thumbnail": "发光的黑洞吸积盘" },
        { "title": "饮食建议的问题所在", "channel": "Andrew Huberman", "stats": "440 万次观看 • 6 天前", "thumbnail": "戴眼镜说话的男子" },
        { "title": "如何学习任何事物（基于证据）", "channel": "Ali Abdaal", "stats": "270 万次观看 • 3 个月前", "thumbnail": "阅读书籍的男子的矢量插图" },
        { "title": "《最后生还者 2》是一部杰作", "channel": "Naughty Dog", "stats": "230 万次观看 • 3 年前", "thumbnail": "《最后生还者》中的艾莉" },
        { "title": "lofi hip hop radio - 适合放松/学习的节拍", "channel": "Lofi Girl", "stats": "直播中", "thumbnail": "在书桌前学习的 Lofi Girl" }
      ]
    }
  },
  "taskbar": {
    "os": "Windows",
    "icons": ["开始", "搜索", "任务视图", "文件资源管理器", "Edge", "Spotify"],
    "system_tray": "08:34 2024 年 4 月 3 日"
  }
}

## 来源备注
- 源站作者：Ivan Davila
- 源站 UUID：wUHQK6NHwQ
- 源站分类：06_图文排版视觉传达
