#!/usr/bin/env node
/**
 * Phase B-1.5 Tier 5：2 个 GRAPHIC_DESIGN 收尾 DS 打标。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const DS_PRIORITY = [
  "editorial-poster",
  "vintage-typography-poster",
];

const APPLY = process.argv.includes("--apply");

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

const byDs = new Map();
for (const [p, { ds }] of pathToBest) {
  if (!byDs.has(ds)) byDs.set(ds, []);
  byDs.get(ds).push(p);
}

console.log(`\n📊 Tier 5 打标计划（去重后）：`);
for (const ds of DS_PRIORITY) {
  const arr = byDs.get(ds) ?? [];
  console.log(`  ${ds.padEnd(28)} → ${arr.length} prompts`);
}
console.log(`  ${"总计".padEnd(28)} → ${pathToBest.size} prompts`);

if (!APPLY) {
  console.log(`\n⚠️ Dry-run 模式。加 --apply 才会落盘。`);
  process.exit(0);
}

let written = 0, skipped = 0;
const errors = [];
for (const [relPath, { ds }] of pathToBest) {
  const abs = join(ROOT, relPath);
  let content;
  try { content = readFileSync(abs, "utf-8"); }
  catch { errors.push(`MISS: ${relPath}`); continue; }
  const re = /^aesthetic:\s*.*$/m;
  if (!re.test(content)) { errors.push(`NO-FIELD: ${relPath}`); continue; }
  const m = content.match(re);
  if (!/aesthetic:\s*null\s*$/.test(m[0])) { skipped++; continue; }
  writeFileSync(abs, content.replace(re, `aesthetic: ${ds}`));
  written++;
}
console.log(`\n✅ 已写入：${written} 文件`);
console.log(`⏭️  跳过（已有 aesthetic）：${skipped} 文件`);
if (errors.length > 0) {
  console.log(`\n⚠️ 错误：`);
  errors.forEach((e) => console.log(`  ${e}`));
}
