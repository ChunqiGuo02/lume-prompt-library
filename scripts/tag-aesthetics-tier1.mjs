#!/usr/bin/env node
/**
 * Phase B-1.5 Tier 1：批量更新 5 个 PORTRAIT DS 关联 prompt 的 frontmatter `aesthetic` 字段。
 *
 * 数据源：reports/ds-matches/<ds-slug>.json — 每个 DS 已包含 top 50 matched prompt path
 *
 * 冲突策略：若一条 prompt 同时被多个 DS 匹配（人像间高度重合），按"匹配得分最高"的 DS 胜出；
 *           平分时按 DS 优先级（warm-cinematic > vintage > fashion > cute-girl > street-style）。
 *
 * 操作：对每条 prompt 的 frontmatter 把 `aesthetic: null` 替换为 `aesthetic: <ds-slug>`。
 *
 * 安全：先 dry-run（不带 --apply）列出将改的文件清单；--apply 才落盘。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// DS 优先级（平分时用）—— 与 match-ds.mjs 顺序一致
const DS_PRIORITY = [
  "warm-cinematic-portrait",
  "vintage-portrait",
  "fashion-portrait",
  "cute-girl-pastel",
  "street-style-portrait",
];

const APPLY = process.argv.includes("--apply");

// Step 1: 收集"path -> 最佳 DS"映射
const pathToBest = new Map(); // path -> { ds, score }
for (const ds of DS_PRIORITY) {
  const data = JSON.parse(readFileSync(join(ROOT, `reports/ds-matches/${ds}.json`), "utf-8"));
  for (const m of data.matched) {
    const existing = pathToBest.get(m.path);
    if (!existing || m.score > existing.score) {
      pathToBest.set(m.path, { ds, score: m.score });
    } else if (m.score === existing.score) {
      // 平分时按 DS_PRIORITY 顺序优先
      const existingIdx = DS_PRIORITY.indexOf(existing.ds);
      const currentIdx = DS_PRIORITY.indexOf(ds);
      if (currentIdx < existingIdx) {
        pathToBest.set(m.path, { ds, score: m.score });
      }
    }
  }
}

// Step 2: 按 DS 分组报告
const byDs = new Map();
for (const [p, { ds }] of pathToBest) {
  if (!byDs.has(ds)) byDs.set(ds, []);
  byDs.get(ds).push(p);
}

console.log(`\n📊 Tier 1 打标计划（去重后）：`);
for (const ds of DS_PRIORITY) {
  const arr = byDs.get(ds) ?? [];
  console.log(`  ${ds.padEnd(28)} → ${arr.length} prompts`);
}
console.log(`  ${"总计".padEnd(28)} → ${pathToBest.size} prompts`);

if (!APPLY) {
  console.log(`\n⚠️ Dry-run 模式。加 --apply 才会落盘。`);
  process.exit(0);
}

// Step 3: 落盘 —— 对每个 prompt 的 frontmatter 写入 aesthetic
let written = 0;
let skipped = 0;
const errors = [];

for (const [relPath, { ds }] of pathToBest) {
  const abs = join(ROOT, relPath);
  let content;
  try {
    content = readFileSync(abs, "utf-8");
  } catch (e) {
    errors.push(`MISS: ${relPath}`);
    continue;
  }
  // 匹配 frontmatter 中 `aesthetic: null` 或 `aesthetic: <something>` 行
  const re = /^aesthetic:\s*.*$/m;
  if (!re.test(content)) {
    errors.push(`NO-FIELD: ${relPath}`);
    continue;
  }
  // 已有非 null 值时跳过
  const m = content.match(re);
  const existing = m[0];
  if (!/aesthetic:\s*null\s*$/.test(existing)) {
    skipped++;
    continue;
  }
  const updated = content.replace(re, `aesthetic: ${ds}`);
  writeFileSync(abs, updated);
  written++;
}

console.log(`\n✅ 已写入：${written} 文件`);
console.log(`⏭️  跳过（已有 aesthetic）：${skipped} 文件`);
if (errors.length > 0) {
  console.log(`\n⚠️ 错误：`);
  errors.forEach((e) => console.log(`  ${e}`));
}
