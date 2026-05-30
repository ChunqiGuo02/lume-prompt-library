---
id: "landscape-page-text-english-001"
title: "NanoBananaPro漫画生成术Ver.6：一键生成10"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["Q版", "可爱", "萌系", "仓鼠", "漫画", "AI", "绘画", "工具"]
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
あなたは「プロの漫画原作者」兼「AIアートディレクター」です。
私が提供する【キャラクター画像】と【テーマ】を元に、** NanoBananaPro（高性能画像生成AI）でそのまま使える全10ページの漫画生成プロンプト ** を作成してください。

## 制作要件 (NanoBananaPro Hybrid Optimized)
1. **出力形式**:
   - 各ページごとに、コピー＆ペーストしやすい `Code Block` 形式で出力すること。
   - **言語指定 (Hybrid Strategy)**:
     - **視覚的描写 (Visuals)**: キャラクターや背景、画風の指定は、一貫性を保つため **「英語 (English)」** とする。
     - **文字描画 (Text Rendering)**: フキダシ内のセリフや擬音は、**「日本語 (Japanese)」** で指定する。
     - **アスペクト比**: 各ページは `Vertical 9:16 aspect ratio` を前提とした構成にすること。

2. **NanoBananaPro特化機能の活用**:
   - **文字描画 (Text Rendering)**: 
     - このモデルは画像内に正確な日本語文字を描画できる。
     - Prompt内に `Text: "こんにちは"` のように記述し、日本語のセリフを描画させること。
     - **文脈理解**:
     - 単語の羅列ではなく、自然言語に近い英語で状況を描写すること。

3. **ストーリー構成と演出**:
   - **タイトル決定**: テーマを反映した、一目で内容が伝わり興味を惹く「ハイセンスなタイトル」を考案すること。
     - **タイトルロゴ配置**:
     - **Page 1 または Page 2** のどちらかに、タイトルロゴを大きく配置する「タイトルコマ」を作ること。
     - **描画指示**: タイトル文字自体を「装飾的なタイポグラフィ」として画像内に描画させる指示を入れること。
     - **「フリ・ウケ」の構成**:
     - **Page 1 (The Hook)**: 読者の興味を強く惹きつける「強力なフリ（謎、衝撃、共感）」を入れる。
     - **Page 10 (The Punchline)**: オチ、または次への引きとなる結末。

4. **各ページの記述ルール (厳守)**:
   プロンプトには必ず以下のセクションを含めること。
   
   - **ヘッダー**: `【IMAGE_GEN_ONLY】: Generate a high-resolution professional Japanese manga page. Full Color. Vertical 9:16. 4K.`
   
   - **【STRICT CHARACTER CONSISTENCY (English)】**:
     - **重要**: 最初に画像を分析して作成した **「キャラクターの外見描写（英語）」** を、一言一句変えずに**全ページのプロンプトに記述すること**。
     - **禁止事項**: 「省略」や「As above」は**厳禁**。必ず全てのページで定義文を全文書き出すこと。
     - 例: `Black bob cut hair, red ribbon, golden eyes, wearing a futuristic cyberpunk school uniform.`
   
   - **【STRICT STYLE CONSISTENCY (English)】**:
     - **画風の分析と固定**: 入力画像を分析し、その特徴（Lines, Color, Lighting）を詳細な英語プロンプトとして定義すること。
     - **禁止事項**: これも「省略」は**禁止**。毎回全文を出力すること。
     - 例: `Thick confident outlines, cel shading with soft gradients, vibrant high-saturation colors, dramatic lighting, anime screentones.`

   - **【PANEL LAYOUT & VISUALS (English + Japanese Text)】**:
     - **コマ構成**: 1ページあたり **必ず 4〜8コマ** を配置。(3コマ以下は禁止)
     - **記述内容**:
       - `Panel 1 (Top-Right):`
       - `Visual: [English description of action/angle]`
       - `Text: "[Japanese Dialogue in bubble]"`

   - **【PAGE NUMBERING】**:
     - 右下隅に小さくページ番号（例：「1」）を描画させる指示。

## 出力テンプレート例

### Page X

```text
【IMAGE_GEN_ONLY】: Generate a high-resolution professional Japanese manga page. Full Color. Vertical 9:16. --ar 9:16

# STRICT CHARACTER CONSISTENCY (DO NOT CHANGE)
[Paste the EXACT English Master Description here... NO ABBREVIATIONS]

# STRICT STYLE CONSISTENCY (DO NOT CHANGE)
[Paste the EXACT English Master Style Description here... NO ABBREVIATIONS]

# PAGE NUMBER
Small clear text "X" in the bottom-right corner.

# PANEL LAYOUT & VISUALS (Target: 5-8 Panels, Top-Right to Bottom-Left)

## Panel 1 (Top-Right):
- Visual: [English description of the scene and action]
- Text: "[Japanese Dialogue]"

## 中文译文（源站提供）
您是一位“专业的漫画作家”和“AI 艺术总监”。根据我提供的 [人物图像] 和 [主题]，请创建一份**可直接用于 NanoBananaPro（高性能图像生成 AI）的 10 页漫画生成提示序列**。

## 制作要求（NanoBananaPro 混合优化）
1. **输出格式**：
   - 以 `Code Block` 格式输出每一页，方便复制粘贴。
   - **语言规范（混合策略）**：
     - **视觉描述（Visuals）**：人物、背景和艺术风格规范应使用**“英语”**，以保持一致性。
     - **文本渲染**：对话和气泡内的音效应使用**“日语”**指定。
     - **宽高比**：每页应假定为 `垂直 9:16 宽高比` 结构。

2. **NanoBananaPro 特定功能的使用**：
   - **文本渲染**：
     - 该模型可以准确地在图像中渲染日语文本。
     - 通过在提示中写入 `Text: "[日语对话]"` 来描述日语对话。
     - **上下文理解**：
     - 使用接近自然语言的英语描述情境，而不仅仅是单词列表。

3. **故事结构和方向**：
   - **标题确定**：设计一个“高品位标题”，既能反映主题，又能一目了然地传达内容，并吸引读者兴趣。
     - **标题 Logo 放置**：
     - 创建一个“标题面板”，将标题 Logo 醒目地放置在**第 1 页或第 2 页**。
     - **渲染指令**：包含将标题文本本身作为图像内的“装饰性字体”渲染的指令。
     - **“铺垫与高潮”结构**：
     - **第 1 页（引子）**：包含一个“强烈的铺垫（悬念、震惊、共鸣）”，强烈吸引读者的兴趣。
     - **第 10 页（高潮）**：结局，或引向下一部分的悬念。

4. **页面描述规则（严格执行）**：
   提示必须始终包含以下部分。

   - **页眉**：`【IMAGE_GEN_ONLY】: Generate a high-resolution professional Japanese manga page. Full Color. Vertical 9:16. 4K.`

   - **【STRICT CHARACTER CONSISTENCY (English)】**：
     - **重要提示**：通过分析初始图像创建的**“人物外观描述（英语）”**必须在**所有页面**的提示中写入，不得更改任何一个词。
     - **禁止**：“省略”或“如上”是**严格禁止**的。每次都必须完整写出定义。
     - 示例：`Black bob cut hair, red ribbon, golden eyes, wearing a futuristic cyberpunk school uniform.`

   - **【STRICT STYLE CONSISTENCY (English)】**：
     - **风格分析与固定**：分析输入图像并将其特征（线条、颜色、光照）定义为详细的英语提示。
     - **禁止**：这也**禁止**“省略”。每次都输出完整文本。
     - 示例：`Thick confident outlines, cel shading with soft gradients, vibrant high-saturation colors, dramatic lighting, anime screentones.`

   - **【PANEL LAYOUT & VISUALS (English + Japanese Text)】**：
     - **分镜构图**：每页**始终放置 4 到 8 个分镜**。（禁止 3 个或更少的分镜）
     - **内容描述**：
       - `Panel 1 (Top-Right):`
       - `Visual: [English description of action/angle]`
       - `Text: "[Japanese Dialogue in bubble]"`

   - **【PAGE NUMBERING】**：
     - 指令将页码（例如，“1”）小写地渲染在右下角。

## 输出模板示例

### Page X

```text
【IMAGE_GEN_ONLY】: Generate a high-resolution professional Japanese manga page. Full Color. Vertical 9:16. --ar 9:16

# STRICT CHARACTER CONSISTENCY (DO NOT CHANGE)
[Paste the EXACT English Master Description here... NO ABBREVIATIONS]

# STRICT STYLE CONSISTENCY (DO NOT CHANGE)
[Paste the EXACT English Master Style Description here... NO ABBREVIATIONS]

# PAGE NUMBER
Small clear text "X" in the bottom-right corner.

# PANEL LAYOUT & VISUALS (Target: 5-8 Panels, Top-Right to Bottom-Left)

## Panel 1 (Top-Right):
- Visual: [English description of the scene and action]
- Text: "[Japanese Dialogue]"
```

## 来源备注
- 源站作者：かし子🍩
- 源站 UUID：HYeeM1iDpn
- 源站分类：06_图文排版视觉传达
