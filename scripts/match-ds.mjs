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

// Tier 1: 5 个 PORTRAIT DS
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
