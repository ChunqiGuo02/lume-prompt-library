#!/usr/bin/env node
/**
 * 单独更新 index.json 中的 aesthetic 字段（不重 build prompts/）。
 *
 * 用途：当 prompts/*.md 的 aesthetic 已被 tag-aesthetics-tier1.mjs 写入后，
 *       同步把 index.json 中对应条目的 aesthetic 字段刷新。
 *
 * 数据源：reports/ds-matches/<ds>.json 中的 (path → ds) 映射 + DS 优先级冲突处理
 *         （与 tag-aesthetics-tier1.mjs 完全一致）。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const DS_PRIORITY = [
  // Tier 1
  "warm-cinematic-portrait",
  "vintage-portrait",
  "fashion-portrait",
  "cute-girl-pastel",
  "street-style-portrait",
  // Tier 2
  "clean-brand-shoot",
  "colorful-pop-brand",
  "luxury-product-ad",
  "architectural-analysis-academic",
  "sasaki-competition-board",
  // Tier 3
  "isometric-pastel-3d",
  "cyberpunk-neon",
  "microscope-3d",
  "surreal-dreamy",
  "anime-style",
  "chibi-character",
  // Tier 4
  "flat-illustration",
  "watercolor-illustration",
  "meme-pop-funny",
  "editorial-fashion-shoot",
  // Tier 5
  "editorial-poster",
  "vintage-typography-poster",
];

// 收集 path -> best DS
const pathToBest = new Map();
for (const ds of DS_PRIORITY) {
  const data = JSON.parse(readFileSync(join(ROOT, `reports/ds-matches/${ds}.json`), "utf-8"));
  for (const m of data.matched) {
    const existing = pathToBest.get(m.path);
    if (!existing || m.score > existing.score) {
      pathToBest.set(m.path, { ds, score: m.score });
    } else if (m.score === existing.score) {
      const eIdx = DS_PRIORITY.indexOf(existing.ds);
      const cIdx = DS_PRIORITY.indexOf(ds);
      if (cIdx < eIdx) pathToBest.set(m.path, { ds, score: m.score });
    }
  }
}

const indexPath = join(ROOT, "index.json");
const index = JSON.parse(readFileSync(indexPath, "utf-8"));

let updated = 0;
let alreadySet = 0;

for (const p of index.prompts) {
  const best = pathToBest.get(p.path);
  if (!best) continue;
  if (p.aesthetic && p.aesthetic !== best.ds) {
    // 已有其他 aesthetic 值，不覆盖
    alreadySet++;
    continue;
  }
  if (p.aesthetic === best.ds) continue;
  p.aesthetic = best.ds;
  updated++;
}

writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n");
console.log(`✅ 更新 index.json：${updated} 条`);
console.log(`⏭️  跳过（已有非空 aesthetic）：${alreadySet} 条`);
console.log(`📊 当前 Tier 1 分布：`);
const dist = {};
for (const p of index.prompts) {
  if (DS_PRIORITY.includes(p.aesthetic)) {
    dist[p.aesthetic] = (dist[p.aesthetic] ?? 0) + 1;
  }
}
for (const ds of DS_PRIORITY) {
  console.log(`  ${ds.padEnd(28)} ${(dist[ds] ?? 0).toString().padStart(4)}`);
}
