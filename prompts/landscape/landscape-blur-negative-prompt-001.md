---
id: "landscape-blur-negative-prompt-001"
title: "电影级效果图质感提升氛围强化【建筑、室内、景观、规划洗图均适用】"
category: landscape
subcategory: "01_建筑室内空间设计"
aesthetic: biophilic
tags: ["建筑", "城市", "摩天楼", "渲染", "超写实", "未来感", "景观", "绿植"]
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
# 通用系统提示词：电影级建筑渲染与氛围重塑

**核心使命：** 将低细节、扁平材质的建筑和城市规划渲染图，转换为超写实、具有强烈故事感的电影级摄影作品。此过程必须将输入图像的精确几何体、透视和主构图作为绝对的边界。任何新增加的细节、配景和光影，都必须为提升画面的“电影级空间感”与“真实感”服务。

**负面提示词（Negative Prompt）：** 简单纹理 (simple textures), 扁平照明 (flat lighting), 低分辨率 (lowres), 模糊 (blur), 卡通 (cartoon), 草图 (sketch), 单色 (monochrome), 均质化表面 (uniform surfaces), 塑料感 (plastic), 改变主体几何体 (changing main geometry), 改变核心构图 (altered core composition), 缺乏生机 (lifeless).

---

## 详细系统提示词指令

### 1. 几何体与构图保留（绝对限制）
* 必须将输入图像中的精确透视、建筑核心结构、排列方式作为绝对保留的基础。
* 核心建筑的基本形状、空间比例**绝对不能**改变，所有重塑均需贴合原有结构进行表面升级。

### 2. 材质升级与微观写实（深度细节增强）
* **建筑主体：** 将通用材质替换为具有极高真实度的多层复合材质（如带有精细拉丝纹理、面板接缝、铆钉及微小物理划痕的金属，或带有真实凹凸质感的清水混凝土）。
* **玻璃与反射：** 幕墙必须呈现出建筑级双层玻璃的质感，包含真实的竖框细节、极其微妙的玻璃波纹（微观变形），并能真实反射出新生成的天空、周围环境及光影。

### 3. 光影与极致电影氛围感（核心氛围塑造）
* **电影级光影：** 摒弃平淡的全局光照。使用极具戏剧张力的多光源定向照明（如带有长阴影的低角度清晨/黄昏阳光，或室内刚开灯的蓝调时刻夜景）。使用强烈的明暗对比 (chiaroscuro) 来雕刻建筑的体积感。
* **空气与环境介质：** 引入物理精确的大气雾霾 (atmospheric haze) 拉开空间纵深。强制增加电影摄影机的光学特性，例如：光束穿透结构时产生的丁达尔效应/体积光 (volumetric light shafts)、空气中漂浮的微尘 (dust motes)、以及轻微的变形镜头光晕 (anamorphic lens flares)。
* **色彩分级与质感：** 应用好莱坞级别的色彩映射 (Cinematic color grading)，例如经典的青橙色调 (Teal & Orange) 对比，或冷峻的高级灰调。可以适度引入雨后路面的局部积水反射 (post-rain wet reflections)，打破画面的干涩感，营造深沉的故事氛围。

### 4. 打破均质化与丰富真实配景（环境激活）
* **大面积区域重塑：** 针对画面中大面积、过于平坦或均质的区域（如宽阔的广场、死板的草地、无尽的道路），必须自动补充符合逻辑且比例极其精确的配景来打破单调。
* **动态与生机：** * **道路/广场：** 补充带有轻微动态模糊的高级车辆 (vehicles with subtle motion blur) 以体现时间流逝感；在广场和人行道自然散布三三两两的真实人群 (diverse pedestrian groups)、户外座椅、高精度的路灯或艺术雕塑。
    * **铺装与景观：** 将单一的地面替换为具有丰富拼花、接缝和材质对比的铺装系统。将呆板的绿地替换为高低错落、品种丰富的真实植物群落（如结合了乔木、灌木和精细草坪的景观设计）。
* **背景建筑：** 将原本简单的体块背景替换为具有丰富立面细节、窗户阵列和内部透光的高分辨率现代摩天大楼群。

### 5. 输出技术规格与渲染质量
* V-Ray / UE5 级最高保真度渲染，真实照片级摄影 (photorealistic photography)。
* 极高分辨率 (8k resolution, highly detailed, masterpiece)。
* 采用具有物理特性的电影镜头：焦点区域细节极致锐利，前景与远景呈现符合光学规律的渐进式浅景深 (shallow depth of field) 和边缘极其轻微的色差 (chromatic aberration)。加入极其微妙的电影胶片颗粒。

---

### 6. 用户自定义扩展（优先级最高）
**[用户自定义需求]：** *(如果用户在此处填写了特定的天气、时间段、材质要求或特殊配景，请强制优先遵循用户的此项指令并与上述电影级画质结合；若用户未填写任何内容，则默认使用上述顶级电影级渲染设定。)*
{用户输入内容占位符 - 例如：下雨天、主体建筑使用红砖材质}

## 来源备注
- 源站作者：阿真
- 源站 UUID：HeWIo06tqB
- 源站分类：01_建筑室内空间设计
