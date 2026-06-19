#!/usr/bin/env node
/**
 * Phase B-1.5 数据筛选：对每个新 DS，从 index.json 精筛 top N 匹配 prompt。
 *
 * 规则：
 *   1. 按 DS 的 `keywords` 数组扫 prompt 的 (tags + title + subcategory)
 *   2. 命中数 ≥ minHits 才入候选
 *   3. quality_tier=A 优先，B 次之
 *   4. 按命中分数排序，取 top N
 *
 * 输出：
 *   reports/ds-matches/<ds-slug>.json
 *     { matched: [{id, path, title, tags, score, ...}], stats: { tagFreq, colorTags, etc } }
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Tier 1: 5 个 PORTRAIT DS + Tier 2: 5 个 BRANDING / GRAPHIC_DESIGN / ARCHITECTURE DS
const DS_DEFINITIONS = {
  "warm-cinematic-portrait": {
    label: "暖光电影感人像",
    subcategoryFilter: ["05_人物肖像与写实摄影"],
    keywords: ["暖色调", "暖光", "电影感", "肖像", "写实", "暖光", "暖调", "金色", "黄昏", "胶片质感", "电影", "肤色", "半身", "特写", "情绪"],
    minHits: 2,
    topN: 50,
  },
  "vintage-portrait": {
    label: "复古胶片人像",
    subcategoryFilter: ["05_人物肖像与写实摄影"],
    keywords: ["复古", "胶片", "颗粒", "褪色", "怀旧", "vintage", "Kodak", "70年代", "80年代", "90年代", "复古发型", "复古服饰", "做旧", "老照片"],
    minHits: 2,
    topN: 50,
  },
  "fashion-portrait": {
    label: "时尚商业人像",
    subcategoryFilter: ["05_人物肖像与写实摄影"],
    keywords: ["时尚", "高级", "杂志", "Vogue", "editorial", "高对比", "造型", "潮流", "高级感", "大片", "modeling", "时装", "T台", "封面"],
    minHits: 2,
    topN: 50,
  },
  "cute-girl-pastel": {
    label: "可爱少女粉调",
    subcategoryFilter: ["05_人物肖像与写实摄影"],
    keywords: ["可爱", "少女", "粉色", "甜美", "二次元", "粉嫩", "马卡龙", "樱花", "蜜桃", "梦幻", "Q版", "动漫", "lolita", "粉粉", "萝莉"],
    minHits: 2,
    topN: 50,
  },
  "street-style-portrait": {
    label: "街头风人像",
    subcategoryFilter: ["05_人物肖像与写实摄影"],
    keywords: ["街头", "城市", "纪实", "自然光", "都市", "街拍", "city", "潮人", "街景", "霓虹", "Tokyo", "夜景", "街灯", "自拍", "OOTD"],
    minHits: 2,
    topN: 50,
  },

  // ─── Tier 2 (5 DS) ─────────────────────────────────────────────────
  "clean-brand-shoot": {
    label: "极简品牌广告",
    subcategoryFilter: ["03_创意广告品牌设计", "02_广告营销电商宣传", "02_电商产品虚拟摄影"],
    keywords: ["极简", "简约", "干净", "留白", "中性", "极简主义", "现代极简", "高级感", "premium", "北欧", "无印良品", "性冷淡", "商业摄影", "白底", "纯色背景", "克制"],
    minHits: 2,
    topN: 50,
  },
  "colorful-pop-brand": {
    label: "撞色波普品牌",
    subcategoryFilter: ["03_创意广告品牌设计", "06_图文排版视觉传达", "14_社交媒体营销", "04_创意脑洞特效合成"],
    keywords: ["撞色", "波普", "孟菲斯", "memphis", "拼贴", "80年代", "高饱和", "鲜艳", "趣味", "创意", "y2k", "多巴胺", "渐变", "夸张", "几何", "复古迪斯科"],
    minHits: 2,
    topN: 50,
  },
  "luxury-product-ad": {
    label: "高端产品广告",
    subcategoryFilter: ["02_电商产品虚拟摄影", "02_广告营销电商宣传", "03_创意广告品牌设计"],
    keywords: ["奢华", "高端", "暗调", "金属", "玻璃", "香水", "珠宝", "名表", "精修", "黑金", "戏剧光", "premium", "深色", "Chanel", "Dior", "Rolex", "黑色", "金色"],
    minHits: 2,
    topN: 50,
  },
  "architectural-analysis-academic": {
    label: "建筑分析学术风",
    subcategoryFilter: ["01_建筑室内空间设计"],
    keywords: ["分析图", "建筑分析", "黑白线稿", "矢量", "单色", "轴测", "等距", "平面图", "立面图", "剖面图", "流线", "体块", "爆炸图", "概念图", "鸟瞰图", "总平面", "线稿", "竞赛图"],
    minHits: 2,
    topN: 50,
  },
  "sasaki-competition-board": {
    label: "SASAKI 竞赛景观风",
    subcategoryFilter: ["01_建筑室内空间设计"],
    keywords: ["景观", "规划", "竞赛", "马卡龙", "矢量插画", "现代清新", "扁平", "鸟瞰", "湖蓝", "橙黄", "浅绿", "深绿", "浅粉", "鸟瞰图", "总平面", "公园", "广场", "绿地"],
    minHits: 2,
    topN: 50,
  },

  // ─── Tier 3 (6 DS: THREE_D × 4 + ANIMATION × 2) ──────────────────────
  "isometric-pastel-3d": {
    label: "等距粉彩 3D",
    subcategoryFilter: ["04_创意脑洞特效合成", "07_艺术插画创意风格", "15_特定场景环境生成"],
    keywords: ["等距", "轴测", "3D", "isometric", "微缩", "粉色", "马卡龙", "柔光", "C4D", "圆角", "低饱和", "粉嫩", "微型", "迷你", "卡通"],
    minHits: 2,
    topN: 50,
  },
  "cyberpunk-neon": {
    label: "赛博朋克霓虹",
    subcategoryFilter: ["04_创意脑洞特效合成", "15_特定场景环境生成", "07_艺术插画创意风格"],
    keywords: ["赛博朋克", "cyberpunk", "霓虹", "科技", "未来", "夜景", "雨水", "紫蓝", "Blade Runner", "未来都市", "高反差", "玻璃", "反光", "潮湿", "故障", "全息"],
    minHits: 2,
    topN: 50,
  },
  "microscope-3d": {
    label: "微缩世界 3D",
    subcategoryFilter: ["12_手工玩具手办", "15_特定场景环境生成", "04_创意脑洞特效合成"],
    keywords: ["微缩", "微距", "微型", "玩具", "手办", "桌面", "mini", "微观", "放大镜", "模型", "立体", "拟人化", "粘土", "迷你"],
    minHits: 2,
    topN: 50,
  },
  "surreal-dreamy": {
    label: "超现实梦境",
    subcategoryFilter: ["04_创意脑洞特效合成", "07_艺术插画创意风格", "15_特定场景环境生成"],
    keywords: ["超现实", "梦幻", "悬浮", "surreal", "dreamy", "飘浮", "梦境", "奇幻", "玄幻", "漂浮", "失重", "魔幻", "云雾", "幻想"],
    minHits: 2,
    topN: 50,
  },
  "anime-style": {
    label: "日系动漫风",
    subcategoryFilter: ["04_动漫游戏视觉与IP改编", "10_卡通漫画电影角色", "07_艺术插画创意风格", "09_故事分镜角色设定"],
    keywords: ["日系", "动漫", "二次元", "宫崎骏", "新海诚", "京阿尼", "ghibli", "清新", "抒情", "大眼", "动画", "漫画", "动漫画", "日式", "插画"],
    minHits: 2,
    topN: 50,
  },
  "chibi-character": {
    label: "Q版卡通角色",
    subcategoryFilter: ["09_故事分镜角色设定", "10_卡通漫画电影角色", "12_手工玩具手办", "04_动漫游戏视觉与IP改编", "16_表情包趣味拼图"],
    keywords: ["Q版", "chibi", "卡通", "大头", "小身", "IP", "吉祥物", "头身比", "萌", "卡通形象", "角色", "玩偶", "可爱", "拟人", "Q萌"],
    minHits: 2,
    topN: 50,
  },

  // ─── Tier 4 (4 DS: 收尾) ─────────────────────────────────────────────
  "flat-illustration": {
    label: "扁平品牌插画",
    subcategoryFilter: ["07_艺术插画创意风格", "06_图文排版视觉传达", "04_创意脑洞特效合成"],
    keywords: ["扁平", "矢量", "插画", "几何", "品牌插画", "illustration", "简约", "现代", "双色", "多色", "大色块", "平面", "卡通插画", "flat", "vector"],
    minHits: 2,
    topN: 50,
  },
  "watercolor-illustration": {
    label: "水彩插画",
    subcategoryFilter: ["07_艺术插画创意风格", "06_图文排版视觉传达", "04_创意脑洞特效合成"],
    keywords: ["水彩", "淡彩", "插画", "艺术", "晕染", "watercolor", "笔触", "留白", "纸纹", "艺术感", "手绘", "水墨", "国风", "彩绘", "绘本"],
    minHits: 2,
    topN: 50,
  },
  "meme-pop-funny": {
    label: "表情包波普梗",
    subcategoryFilter: ["16_表情包趣味拼图", "04_创意脑洞特效合成", "10_卡通漫画电影角色", "06_图文排版视觉传达"],
    keywords: ["表情", "表情包", "梗", "meme", "趣味", "doge", "pepe", "微信表情", "抖音", "哈哈", "搞笑", "鬼畜", "诙谐", "夸张", "魔性"],
    minHits: 2,
    topN: 50,
  },
  "editorial-fashion-shoot": {
    label: "时尚大片摄影",
    subcategoryFilter: ["05_人物肖像与写实摄影", "03_创意广告品牌设计", "14_社交媒体营销"],
    keywords: ["时尚大片", "editorial", "vogue", "bazaar", "戏剧光", "时装", "大片", "杂志大片", "高级造型", "时装周", "T台", "封面大片", "Harper", "时尚摄影"],
    minHits: 2,
    topN: 50,
  },

  // ─── Tier 5 (2 DS: GRAPHIC_DESIGN 收尾) ──────────────────────────────
  "editorial-poster": {
    label: "编辑式海报排版",
    subcategoryFilter: ["06_图文排版视觉传达", "04_创意脑洞特效合成", "03_创意广告品牌设计"],
    keywords: ["海报", "排版", "网格", "Swiss", "瑞士", "Helvetica", "Akzidenz", "极简版式", "编辑", "信息层次", "Müller-Brockmann", "平面设计", "现代主义", "无衬线", "Grid", "几何排版"],
    minHits: 2,
    topN: 50,
  },
  "vintage-typography-poster": {
    label: "复古字体海报",
    subcategoryFilter: ["06_图文排版视觉传达", "04_创意脑洞特效合成", "03_创意广告品牌设计"],
    keywords: ["复古海报", "复古字体", "letterpress", "装饰字", "做旧", "旧报纸", "明信片", "装饰花边", "老式海报", "复古", "活字印刷", "民国海报", "上海月份牌", "胶版印刷", "复古排版"],
    minHits: 2,
    topN: 50,
  },
};

const index = JSON.parse(readFileSync(join(ROOT, "index.json"), "utf-8"));

// 创建输出目录
const outDir = join(ROOT, "reports/ds-matches");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const allMatches = {};

for (const [dsSlug, ds] of Object.entries(DS_DEFINITIONS)) {
  const candidates = [];
  for (const p of index.prompts) {
    // subcategory 过滤
    if (ds.subcategoryFilter && ds.subcategoryFilter.length > 0) {
      if (!ds.subcategoryFilter.includes(p.subcategory ?? "")) continue;
    }
    // tag/title/subcategory 命中
    const haystack = [
      (p.title ?? "").toLowerCase(),
      (p.tags ?? []).join(" ").toLowerCase(),
      (p.subcategory ?? "").toLowerCase(),
    ].join(" ");
    let hits = 0;
    const hitKeywords = [];
    for (const k of ds.keywords) {
      if (haystack.includes(k.toLowerCase())) {
        hits++;
        hitKeywords.push(k);
      }
    }
    if (hits < ds.minHits) continue;
    // quality_tier 加权：A=+2，B=+1，C=+0
    const qBonus = p.quality_tier === "A" ? 2 : p.quality_tier === "B" ? 1 : 0;
    candidates.push({
      id: p.id,
      path: p.path,
      title: p.title,
      tags: p.tags ?? [],
      quality: p.quality_tier,
      score: hits * 10 + qBonus,
      hits,
      hitKeywords,
      subcategory: p.subcategory,
    });
  }
  // 排序：先 score 降序，同 score 时 A 级优先
  candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (b.quality === "A" ? 1 : 0) - (a.quality === "A" ? 1 : 0);
  });
  const top = candidates.slice(0, ds.topN);

  // 统计聚合
  const tagFreq = new Map();
  const colorTags = new Map();
  const COLOR_WORDS = ["暖色调", "暖光", "暖调", "黑色", "红色", "蓝色", "白色", "粉色", "黄色", "绿色", "紫色", "黑白", "金色", "银色", "灰色", "棕色", "复古", "胶片", "霓虹", "粉嫩"];
  const ELEMENT_WORDS = ["女性", "男性", "少女", "肖像", "人像", "时尚", "可爱", "户外", "自拍", "街头", "城市", "插画", "卡通", "Q版", "动漫", "二次元", "古建", "建筑", "室内", "夜景"];
  const elementTags = new Map();
  for (const t of top) {
    for (const tag of t.tags) {
      tagFreq.set(tag, (tagFreq.get(tag) ?? 0) + 1);
      if (COLOR_WORDS.includes(tag)) colorTags.set(tag, (colorTags.get(tag) ?? 0) + 1);
      if (ELEMENT_WORDS.includes(tag)) elementTags.set(tag, (elementTags.get(tag) ?? 0) + 1);
    }
  }

  const result = {
    ds_slug: dsSlug,
    ds_label: ds.label,
    matched_total: top.length,
    candidate_pool: candidates.length,
    top_tags: [...tagFreq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20).map(([k, v]) => ({ tag: k, count: v })),
    top_color_tags: [...colorTags.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => ({ tag: k, count: v })),
    top_element_tags: [...elementTags.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => ({ tag: k, count: v })),
    quality_breakdown: {
      A: top.filter((t) => t.quality === "A").length,
      B: top.filter((t) => t.quality === "B").length,
      C: top.filter((t) => t.quality === "C").length,
    },
    top10: top.slice(0, 10).map((t) => ({ id: t.id, title: t.title, path: t.path, score: t.score, hits: t.hits, hitKeywords: t.hitKeywords })),
    matched: top.map((t) => ({ id: t.id, path: t.path, score: t.score, quality: t.quality })),
  };

  writeFileSync(join(outDir, `${dsSlug}.json`), JSON.stringify(result, null, 2));
  allMatches[dsSlug] = result;
  console.log(`${dsSlug.padEnd(28)} ${result.matched_total.toString().padStart(3)} matched (pool: ${result.candidate_pool}), A=${result.quality_breakdown.A} B=${result.quality_breakdown.B}`);
}

// 总汇报告
writeFileSync(
  join(outDir, "_summary.json"),
  JSON.stringify(
    {
      generated_at: new Date().toISOString(),
      ds_count: Object.keys(allMatches).length,
      summary: Object.fromEntries(Object.entries(allMatches).map(([k, v]) => [k, { matched: v.matched_total, top_tags: v.top_tags.slice(0, 10), color: v.top_color_tags }])),
    },
    null,
    2,
  ),
);
console.log(`\n✅ Reports written to reports/ds-matches/`);
