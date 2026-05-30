#!/usr/bin/env node
/**
 * Phase B-1 数据分析：从 index.json 聚合
 *   - tags 频次（top 100）→ 反推风格/主题热点
 *   - subcategory 分布（leaderai 自有分类）
 *   - quality_tier 分布
 *   - recommended_models 偏好
 *   - language 分布
 *   - aesthetic 字段非 null 占比
 *   - 按 category 拆分的 tags top 30
 *
 * 输出：reports/aesthetic-analysis.md（人读）+ reports/aesthetic-analysis.json（机读）
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const index = JSON.parse(readFileSync(join(ROOT, "index.json"), "utf-8"));
const prompts = index.prompts;

function counter() {
  const m = new Map();
  return {
    add: (k) => m.set(k, (m.get(k) ?? 0) + 1),
    top: (n) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n),
    all: () => [...m.entries()].sort((a, b) => b[1] - a[1]),
    size: () => m.size,
  };
}

const tagsAll = counter();
const subcat = counter();
const quality = counter();
const models = counter();
const lang = counter();
const aspectRatio = counter();
const tagsByCategory = {};
let aestheticNonNull = 0;

for (const p of prompts) {
  if (p.aesthetic) aestheticNonNull++;
  (p.tags ?? []).forEach((t) => tagsAll.add(t));
  subcat.add(p.subcategory ?? "(none)");
  quality.add(p.quality_tier ?? "(none)");
  (p.recommended_models ?? []).forEach((m) => models.add(m));
  lang.add(p.language ?? "(none)");
  aspectRatio.add(p.recommended_params?.aspect_ratio ?? "(none)");

  const cat = p.category ?? "(none)";
  if (!tagsByCategory[cat]) tagsByCategory[cat] = counter();
  (p.tags ?? []).forEach((t) => tagsByCategory[cat].add(t));
}

const total = prompts.length;

let md = `# Phase B-1 提示词库数据分析\n\n`;
md += `> 自动生成：\`scripts/analyze-for-ds.mjs\` · 数据源：\`index.json\`\n`;
md += `> 总条数：**${total}**\n\n`;

md += `## 整体概览\n\n`;
md += `| 维度 | 值 |\n|---|---|\n`;
md += `| 总 prompt 数 | ${total} |\n`;
md += `| 唯一 tags 数 | ${tagsAll.size()} |\n`;
md += `| 唯一 subcategory 数 | ${subcat.size()} |\n`;
md += `| aesthetic 字段非 null | ${aestheticNonNull} / ${total} (${((aestheticNonNull / total) * 100).toFixed(1)}%) |\n\n`;

md += `## Quality Tier 分布\n\n| Tier | 数量 | 占比 |\n|---|---|---|\n`;
for (const [k, v] of quality.all()) {
  md += `| ${k} | ${v} | ${((v / total) * 100).toFixed(1)}% |\n`;
}
md += `\n`;

md += `## Language 分布\n\n| 语言 | 数量 | 占比 |\n|---|---|---|\n`;
for (const [k, v] of lang.all()) {
  md += `| ${k} | ${v} | ${((v / total) * 100).toFixed(1)}% |\n`;
}
md += `\n`;

md += `## Recommended Models 偏好\n\n| 模型 | 数量 |\n|---|---|\n`;
for (const [k, v] of models.all()) {
  md += `| ${k} | ${v} |\n`;
}
md += `\n`;

md += `## Aspect Ratio 偏好\n\n| 宽高比 | 数量 |\n|---|---|\n`;
for (const [k, v] of aspectRatio.top(15)) {
  md += `| ${k} | ${v} |\n`;
}
md += `\n`;

md += `## Subcategory 分布（leaderai 自有分类）\n\n| Subcategory | 数量 |\n|---|---|\n`;
for (const [k, v] of subcat.all()) {
  md += `| ${k} | ${v} |\n`;
}
md += `\n`;

md += `## Tags Top 100（全库）\n\n`;
md += `| Rank | Tag | 数量 |\n|---|---|---|\n`;
tagsAll.top(100).forEach(([k, v], i) => {
  md += `| ${i + 1} | ${k} | ${v} |\n`;
});
md += `\n`;

md += `## Tags Top 30（按 category 分）\n\n`;
for (const [cat, c] of Object.entries(tagsByCategory)) {
  md += `### ${cat}（${prompts.filter((p) => p.category === cat).length} 条）\n\n`;
  md += `| Rank | Tag | 数量 |\n|---|---|---|\n`;
  c.top(30).forEach(([k, v], i) => {
    md += `| ${i + 1} | ${k} | ${v} |\n`;
  });
  md += `\n`;
}

writeFileSync(join(ROOT, "reports/aesthetic-analysis.md"), md);

const json = {
  generated_at: new Date().toISOString(),
  total,
  unique_tags: tagsAll.size(),
  unique_subcategories: subcat.size(),
  aesthetic_non_null: aestheticNonNull,
  quality_tier: Object.fromEntries(quality.all()),
  language: Object.fromEntries(lang.all()),
  recommended_models: Object.fromEntries(models.all()),
  aspect_ratio_top: Object.fromEntries(aspectRatio.top(15)),
  subcategory: Object.fromEntries(subcat.all()),
  tags_top_100: Object.fromEntries(tagsAll.top(100)),
  tags_by_category_top_30: Object.fromEntries(
    Object.entries(tagsByCategory).map(([k, c]) => [k, Object.fromEntries(c.top(30))]),
  ),
};
writeFileSync(
  join(ROOT, "reports/aesthetic-analysis.json"),
  JSON.stringify(json, null, 2),
);

console.log(`✅ Phase B-1 analysis written:`);
console.log(`   reports/aesthetic-analysis.md`);
console.log(`   reports/aesthetic-analysis.json`);
console.log(`   total: ${total}`);
console.log(`   unique tags: ${tagsAll.size()}`);
console.log(`   unique subcategories: ${subcat.size()}`);
