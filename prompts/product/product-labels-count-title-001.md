---
id: "product-labels-count-title-001"
title: "ReviewBoard看板界面UI设计"
category: product
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["简约", "浅色", "MacOS", "看板", "开发", "工具", "现代", "界面"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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
{"type":"desktop app UI mockup","platform":"macOS","style":"clean light-mode productivity dashboard, soft gray background, rounded cards, subtle shadows, thin dividers, minimalist modern SaaS aesthetic, dense but calm layout","app":{"name":"ReviewBoard","window_controls":"top-left macOS red yellow green traffic lights"},"layout":{"structure":"single wide application window split into 7 vertical columns plus a right inspector panel","sections":[{"title":"Inbox","position":"far left column","count":2,"labels":["Add wallet reordering to side...","Add Tor proxy support for nod..."]},{"title":"Needs Response","position":"second column from left","count":7,"labels":["Add wallet recovery word sta...","Implement transaction watche...","Add Key Teleport receive flow...","Add cove-keyteleport crate: K...","let users download their TAPSI...","Feat cache receive addresse...","[Feat] Custom block explorer"]},{"title":"Waiting On CI","position":"third column","count":0,"labels":[]},{"title":"Waiting On Codex","position":"fourth column","count":3,"labels":["detect silent payment address...","Extract pi and pjs params fro...","Fix fiat amount paste stripping..."]},{"title":"Waiting On Manual Test","position":"fifth column","count":0,"labels":[]},{"title":"Watching Merge","position":"sixth column","count":0,"labels":[]},{"title":"Inspector","position":"far right sidebar","count":8,"labels":["Signals","Checks","PR Context","Tags and Notes","Notes","Blockers","Workflow","Recent Commits"]}],"top_right_controls":{"count":3,"labels":["Board","List","Refresh"]}},"board":{"column_style":"tall pale gray kanban lanes with header labels, tiny count chevrons, and centered empty-state drop targets in empty lanes","cards":{"shape":"small white rounded rectangles with faint shadow and thin border","metadata":"issue or PR number at top left, bold truncated title, author and date line below, occasional small colored status pill such as green Code or red Codex, some cards with a tiny orange notification dot at top right"}},"inspector":{"tabs":{"count":3,"labels":["OPEN","NEEDS DESIGN","DRAFT"],"active":"NEEDS DESIGN"},"signals":"empty light gray panel with text indicating no blocking signals","checks":{"summary":"horizontal status card with three columns for Passing, Pending, and Failing, plus Total 9 on the right","counts":{"Passing":9,"Pending":0,"Failing":0}},"pr_context":{"fields":["Base","Head","Merge State","CI Approval","Clean","Last Need","Updated","Apr 21, 2026 at 2:36 PM","Last Push","Apr 20, 2026 at 2:03 PM","SHA","a7c48b5a"]},"tags_and_notes":{"elements":3,"labels":["comma separated tags","Save Tags","Notes"]},"blockers":{"elements":3,"labels":["No blockers saved","Add Blocker","Save Review Note"]},"workflow":{"groups":2,"labels":["Inbox","Snooze"],"buttons":["Mark Unseen","1 Day","3 Days","1 Week","Snooze"]},"recent_commits":{"visible_count":1,"labels":["Add ability to send directly to other imported wallets"]}},"camera":"straight-on full-window screenshot","text_rendering":"tiny crisp UI text, realistic product design presentation","color_palette":{"background":"very light warm gray","columns":"light gray","cards":"white","accent":"green active states, pale blue selected tab, orange notification dots, muted black text"}}

## 中文译文（源站提供）
{"type":"桌面应用 UI 模型","platform":"macOS","style":"简洁的浅色模式生产力仪表盘，柔和的灰色背景，圆角卡片，细腻的阴影，细分割线，极简现代 SaaS 美学，布局紧凑而从容","app":{"name":"ReviewBoard","window_controls":"左上角 macOS 红黄绿交通灯按钮"},"layout":{"structure":"单个宽屏应用窗口，分为 7 个垂直列和一个右侧检查器面板","sections":[{"title":"收件箱","position":"最左侧列","count":2,"labels":["添加钱包重排序到侧边...","添加 Tor 代理支持以实现节点..."]},{"title":"需要响应","position":"左起第二列","count":7,"labels":["添加钱包恢复助记词状态...","实现交易监控...","添加 Key Teleport 接收流程...","添加 cove-keyteleport crate: K...","允许用户下载其 TAPSI...","功能：缓存接收地址...","[功能] 自定义区块浏览器"]},{"title":"等待 CI","position":"第三列","count":0,"labels":[]},{"title":"等待 Codex","position":"第四列","count":3,"labels":["检测静默支付地址...","提取 pi 和 pjs 参数从...","修复法币金额粘贴截断..."]},{"title":"等待人工测试","position":"第五列","count":0,"labels":[]},{"title":"观察合并","position":"第六列","count":0,"labels":[]},{"title":"检查器","position":"最右侧边栏","count":8,"labels":["信号","检查","PR 上下文","标签与备注","备注","阻塞项","工作流","最近提交"]}],"top_right_controls":{"count":3,"labels":["项目","列表","刷新"]}},"board":{"column_style":"高大的浅灰色看板通道，配有标题标签、微型计数箭头，以及空通道中居中的空状态放置目标","cards":{"shape":"带有微弱阴影和细边框的小型白色圆角矩形","metadata":"左上角显示问题或 PR 编号，加粗的截断标题，下方为作者和日期行，偶尔出现小的彩色状态胶囊（如绿色的 Code 或红色的 Codex），部分卡片右上角带有微小的橙色通知点"}},"inspector":{"tabs":{"count":3,"labels":["打开","需要设计","草稿"],"active":"需要设计"},"signals":"空的浅灰色面板，显示无阻塞信号的文本","checks":{"summary":"水平状态卡片，包含通过、待定、失败三列，右侧显示总计 9 项","counts":{"Passing":9,"Pending":0,"Failing":0}},"pr_context":{"fields":["基准分支","头分支","合并状态","CI 审批","已清理","上次需求","更新时间","2026 年 4 月 21 日 下午 2:36","最后推送","2026 年 4 月 20 日 下午 2:03","SHA","a7c48b5a"]},"tags_and_notes":{"elements":3,"labels":["逗号分隔的标签","保存标签","备注"]},"blockers":{"elements":3,"labels":["无已保存的阻塞项","添加阻塞项","保存评审备注"]},"workflow":{"groups":2,"labels":["收件箱","小睡"],"buttons":["标记为未读","1 天","3 天","1 周","小睡"]},"recent_commits":{"visible_count":1,"labels":["添加直接发送到其他导入钱包的功能"]}},"camera":"正向全窗口截图","text_rendering":"微小清晰的 UI 文本，逼真的产品设计展示","color_palette":{"background":"极浅暖灰色","columns":"浅灰色","cards":"白色","accent":"绿色激活状态，浅蓝色选中标签，橙色通知点，柔和的黑色文本"}}

## 来源备注
- 源站作者：Praveen Perera
- 源站 UUID：RxtifiFoE9
- 源站分类：06_图文排版视觉传达
