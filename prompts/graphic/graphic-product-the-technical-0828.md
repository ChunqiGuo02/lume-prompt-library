---
id: graphic-product-the-technical-0828
title: "橙色iPhone产品设计图鉴"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["手机", "橙色", "苹果", "产品图", "工程图", "极简风", "暖色调", "高端"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
 "reference_images": {
 "product_image": "UPLOADED_IMAGE",
 "usage_rule": "Use the uploaded image as the exact visual reference for the product’s form, proportions, materials, and overall identity. Do not redesign or reinterpret the product."
 },

 "layout": {
 "canvas": {
 "orientation": "vertical",
 "aspect_ratio": "3:4",
 "background": "warm neutral paper-like surface"
 },
 "structure": {
 "top_section": "lifestyle_hero",
 "bottom_section": "technical_specification"
 }
 },

 "top_section": {
 "type": "lifestyle_product_image",
 "composition": {
 "placement": "top_center",
 "scale": "dominant",
 "margin": "generous whitespace around product"
 },
 "environment": {
 "setting": "minimal architectural interior",
 "lighting": {
 "type": "natural sunlight",
 "direction": "angled side light",
 "quality": "soft but high-contrast shadows"
 },
 "floor": "subtle concrete or stone surface",
 "background": "textured plaster wall"
 },
 "rendering": {
 "style": "editorial lifestyle photography",
 "detail": "high realism",
 "color_grading": "warm, muted, premium"
 }
 },

 "bottom_section": {
 "type": "technical_specification_panel",
 "layout": {
 "grid": "modular",
 "alignment": "clean, architectural"
 },

 "technical_drawings": {
 "placement": "bottom_left_and_center",
 "style": "architectural line drawings",
 "views": [
 "front view",
 "side view",
 "three-quarter cutaway or profile view"
 ],
 "projection": "orthographic",
 "line_style": {
 "color": "{"drawing line color" "muted red"} or sepia",
 "weight": "fine technical lines"
 },
 "annotations": {
 "type": "measurement and construction callouts",
 "language": "neutral technical labels",
 "density": "minimal, editorial"
 }
 },

 "materials_panel": {
 "placement": "bottom_right",
 "content": {
 "type": "material_swatches",
 "count": "{"swatch count" "3-4"} depending on product",
 "format": "square or rectangular samples"
 },
 "textures": {
 "source": "derived from the product materials",
 "examples": [
 "fabric",
 "leather",
 "metal",
 "wood",
 "plastic"
 ]
 },
 "labels": {
 "style": "small editorial captions",
 "tone": "technical but refined"
 }
 }
 },

 "typography": {
 "style": "minimal editorial",
 "usage": "subtle captions, no large headlines",
 "color": "soft black or dark brown"
 },

 "overall_style": {
 "mood": "design catalog / product design journal",
 "aesthetic": "architectural, premium, calm",
 "avoid": [
 "clutter",
 "bold colors",
 "heavy branding",
 "overly decorative graphics"
 ]
 },

 "constraints": {
 "do_not": [
 "change product design",
 "invent new materials",
 "add logos unless present in reference",
 "use perspective distortion in drawings"
 ]
 }

## 中文译文（源站提供）
```json
{
 "reference_images": {
 "product_image": "UPLOADED_IMAGE",
 "usage_rule": "使用上传的图片作为产品形态、比例、材质和整体特征的精确视觉参考。请勿重新设计或重新诠释产品。"
 },

 "layout": {
 "canvas": {
 "orientation": "vertical",
 "aspect_ratio": "3:4",
 "background": "暖中性纸质表面"
 },
 "structure": {
 "top_section": "lifestyle_hero",
 "bottom_section": "technical_specification"
 }
 },

 "top_section": {
 "type": "lifestyle_product_image",
 "composition": {
 "placement": "顶部居中",
 "scale": "主导",
 "margin": "产品周围留有充足的空白区域"
 },
 "environment": {
 "setting": "极简建筑室内",
 "lighting": {
 "type": "自然阳光",
 "direction": "斜侧光",
 "quality": "柔和但高对比度的阴影"
 },
 "floor": "微妙的混凝土或石材表面",
 "background": "纹理石膏墙"
 },
 "rendering": {
 "style": "编辑生活方式摄影",
 "detail": "高度写实",
 "color_grading": "温暖、柔和、高级"
 }
 },

 "bottom_section": {
 "type": "technical_specification_panel",
 "layout": {
 "grid": "模块化",
 "alignment": "整洁、建筑感"
 },

 "technical_drawings": {
 "placement": "左下和居中",
 "style": "建筑线条图",
 "views": [
 "正视图",
 "侧视图",
 "四分之三剖面图或轮廓图"
 ],
 "projection": "正交投影",
 "line_style": {
 "color": "{\"drawing line color\" \"muted red\"} 或 深褐色",
 "weight": "精细技术线条"
 },
 "annotations": {
 "type": "测量和构造标注",
 "language": "中性技术标签",
 "density": "极简、编辑风格"
 }
 },

 "materials_panel": {
 "placement": "右下",
 "content": {
 "type": "材质样本",
 "count": "{\"swatch count\" \"3-4\"} 根据产品而定",
 "format": "方形或矩形样本"
 },
 "textures": {
 "source": "源自产品材质",
 "examples": [
 "织物",
 "皮革",
 "金属",
 "木材",
 "塑料"
 ]
 },
 "labels": {
 "style": "小型编辑标题",
 "tone": "技术但精致"
 }
 }
 },

 "typography": {
 "style": "极简编辑风格",
 "usage": "微妙的标题，无大标题",
 "color": "柔和的黑色或深棕色"
 },

 "overall_style": {
 "mood": "设计目录 / 产品设计期刊",
 "aesthetic": "建筑感、高级、平静",
 "avoid": [
 "杂乱",
 "鲜艳色彩",
 "大量品牌标识",
 "过度装饰的图形"
 ]
 },

 "constraints": {
 "do_not": [
 "改变产品设计",
 "创造新材料",
 "添加徽标，除非参考图中存在",
 "在图纸中使用透视变形"
 ]
 }
}
```

## 来源备注
- 源站作者：قطر نولوجي
- 源站 UUID：U6MnuV9BJ2
- 源站分类：06_图文排版视觉传达
