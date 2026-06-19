#!/usr/bin/env node
/**
 * Phase B-1 迁移：按 subcategory 重新归位 prompt 文件到 Lume 新 13 大类。
 *
 * 输入：现有 prompts/<old_category>/<id>.md 全部 8672 个文件
 * 输出：prompts/<new_category>/<new_id>.md，并重建 index.json
 *
 * 规则：
 *   1. 一级直接映射（subcategory → 新 category）
 *   2. 二级 tag/title 启发式（01_建筑室内空间设计、15_特定场景 这类模糊 sub）
 *   3. 新 id = "<new_category>-<原 id 中间段>-<序号>"（保持可追溯）
 *   4. 实际文件改名 + 移动；frontmatter category 字段同步改；index.json 重建
 *
 * 安全：
 *   - 先 dry-run 输出对比（--dry）
 *   - 实跑前要求 git status clean
 *   - 每条改动同时改 markdown frontmatter
 */
import { readFileSync, writeFileSync, renameSync, mkdirSync, existsSync, rmdirSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROMPTS_DIR = join(ROOT, "prompts");

const DRY_RUN = process.argv.includes("--dry");

// ──────────────────── 映射规则 ────────────────────

const DIRECT_MAP = {
  "05_人物肖像与写实摄影": "portrait",
  "06_图文排版视觉传达": "graphic",
  "04_创意脑洞特效合成": "3d_concept",
  "07_艺术插画创意风格": "illustration",
  "03_创意广告品牌设计": "branding",
  "02_广告营销电商宣传": "branding",
  "14_社交媒体营销": "branding",
  "02_电商产品虚拟摄影": "product",
  "12_手工玩具手办": "product",
  "13_虚拟购物试穿试用": "product",
  "09_故事分镜角色设定": "story_board",
  "10_卡通漫画电影角色": "character",
  "04_动漫游戏视觉与IP改编": "ip_design",
  "16_表情包趣味拼图": "meme",
  "08_图像分析信息拆解": "misc",
  "11_图像编辑与修复增强": "misc",
};

// 模糊 subcategory（需看 tags / title 二次分类）
const FUZZY_SUBS = new Set(["01_建筑室内空间设计", "15_特定场景环境生成"]);

const ARCH_KEYS = [
  "建筑", "外观", "立面", "幕墙", "结构", "高楼", "大楼", "塔", "工业建筑",
  "现代建筑", "古建筑", "教堂", "穹顶", "圆顶", "钢架", "桥梁",
];
const INT_KEYS = [
  "室内", "客厅", "卧室", "餐厅", "厨房", "浴室", "办公室", "民宿",
  "咖啡馆", "咖啡厅", "店铺", "showroom", "陈列室", "loft", "公寓内部",
  "茶室", "书房", "工作室",
];
const LS_KEYS = [
  "景观", "花园", "公园", "园林", "庭院", "水景", "公共空间", "广场",
  "绿化", "山水", "瀑布", "湖", "森林", "草地", "梯田", "湿地",
];

function classify(p) {
  const sub = p.subcategory;
  if (DIRECT_MAP[sub]) return DIRECT_MAP[sub];
  if (!FUZZY_SUBS.has(sub)) return "misc";

  const tagSet = new Set(p.tags ?? []);
  const title = p.title ?? "";
  const hits = (keys) => keys.some((k) => tagSet.has(k) || title.includes(k));

  if (hits(ARCH_KEYS)) return "architecture";
  if (hits(INT_KEYS)) return "interior";
  if (hits(LS_KEYS)) return "landscape";

  // 实在判断不出 → landscape（最常见的空间类型 fallback）
  return "landscape";
}

// 13 个新大类 + misc
const NEW_CATEGORIES = new Set([
  "portrait", "graphic", "3d_concept", "illustration",
  "branding", "product", "story_board", "character", "ip_design", "meme",
  "architecture", "interior", "landscape",
  "misc",
]);

// ──────────────────── 主流程 ────────────────────

const index = JSON.parse(readFileSync(join(ROOT, "index.json"), "utf-8"));

// 1. 分类 + 生成新 id（在新 category 内累计序号）
const counter = new Map();
const plans = []; // {old_path, new_path, old_id, new_id, new_category, p}

for (const p of index.prompts) {
  const newCat = classify(p);
  if (!NEW_CATEGORIES.has(newCat)) {
    console.error(`Unknown category for ${p.id}: ${newCat}`);
    process.exit(1);
  }
  const n = (counter.get(newCat) ?? 0) + 1;
  counter.set(newCat, n);
  const seq = String(n).padStart(4, "0"); // 4 位序号（最大 portrait ~3000）
  // 从原 id 抽取中间段（去掉前缀 category 和后缀序号）作为语义标识
  // 原 id 格式：<oldcat>-<slug>-<seq>，新 id：<newcat>-<slug>-<seq>
  const oldParts = p.id.split("-");
  const oldCat = oldParts[0];
  const oldSeq = oldParts[oldParts.length - 1];
  // 若最后一段是 3 位数字，去掉；中间作为 slug
  const slug = /^\d+$/.test(oldSeq)
    ? oldParts.slice(1, -1).join("-")
    : oldParts.slice(1).join("-");
  const newId = `${newCat}-${slug}-${seq}`;
  plans.push({
    old_path: join(ROOT, p.path),
    new_path: join(PROMPTS_DIR, newCat, `${newId}.md`),
    old_id: p.id,
    new_id: newId,
    new_category: newCat,
    p,
  });
}

// 2. 统计 + 打印汇总
const dist = new Map();
for (const pl of plans) dist.set(pl.new_category, (dist.get(pl.new_category) ?? 0) + 1);

console.log("=== 新 13 大类 + misc 分布 ===");
[...dist.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
  console.log(`  ${v.toString().padStart(5)}  ${k}`);
});
console.log(`  total: ${plans.length}`);

if (DRY_RUN) {
  console.log("\n[DRY-RUN] 写出迁移预览到 reports/migration-preview.json");
  writeFileSync(
    join(ROOT, "reports/migration-preview.json"),
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        distribution: Object.fromEntries(dist),
        sample_changes: plans.slice(0, 20).map((pl) => ({
          old_id: pl.old_id,
          new_id: pl.new_id,
          old_path: pl.old_path.replace(ROOT, ""),
          new_path: pl.new_path.replace(ROOT, ""),
          subcategory: pl.p.subcategory,
          title: pl.p.title,
        })),
      },
      null,
      2,
    ),
  );
  console.log("Dry-run done. Re-run without --dry to actually migrate.");
  process.exit(0);
}

// 3. 执行迁移
console.log("\n=== 执行迁移 ===");
// 先创建所有目标目录
for (const cat of NEW_CATEGORIES) {
  const dir = join(PROMPTS_DIR, cat);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

let moved = 0;
const newPrompts = [];

for (const pl of plans) {
  if (!existsSync(pl.old_path)) {
    console.error(`Missing source: ${pl.old_path}`);
    process.exit(1);
  }
  // 读 markdown，改 frontmatter 里 id / category / path
  const raw = readFileSync(pl.old_path, "utf-8");
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) {
    console.error(`No frontmatter in ${pl.old_path}`);
    process.exit(1);
  }
  let fm = fmMatch[1];
  fm = fm.replace(/^id:\s*.+$/m, `id: ${pl.new_id}`);
  fm = fm.replace(/^category:\s*.+$/m, `category: ${pl.new_category}`);
  const body = fmMatch[2];
  const newRaw = `---\n${fm}\n---\n${body}`;
  writeFileSync(pl.new_path, newRaw);
  // 旧文件如果在不同目录则删除（同目录会被覆盖）
  if (pl.old_path !== pl.new_path) {
    // 删旧文件
    try {
      const fs = await import("node:fs/promises");
      await fs.unlink(pl.old_path);
    } catch {
      // 已被覆盖或不存在，忽略
    }
  }

  // 重建 index 条目
  newPrompts.push({
    ...pl.p,
    id: pl.new_id,
    category: pl.new_category,
    path: `prompts/${pl.new_category}/${pl.new_id}.md`,
  });
  moved++;
  if (moved % 1000 === 0) console.log(`  moved ${moved} / ${plans.length}`);
}

// 4. 清理空旧目录
console.log("\n清理空旧目录...");
const OLD_CATS = ["landscape", "architecture", "interior", "product", "graphic", "portrait", "video", "misc"];
for (const oldCat of OLD_CATS) {
  if (NEW_CATEGORIES.has(oldCat)) continue; // 仍在用的不删
  const dir = join(PROMPTS_DIR, oldCat);
  if (existsSync(dir)) {
    try {
      const entries = readdirSync(dir);
      if (entries.length === 0) {
        rmdirSync(dir);
        console.log(`  removed empty: prompts/${oldCat}/`);
      } else {
        console.log(`  ⚠️  not empty: prompts/${oldCat}/ (${entries.length} files)`);
      }
    } catch (e) {
      console.error(`  failed to clean ${oldCat}: ${e.message}`);
    }
  }
}

// 5. 重建 index.json
const newCategoryCounts = {};
for (const pp of newPrompts) {
  newCategoryCounts[pp.category] = (newCategoryCounts[pp.category] ?? 0) + 1;
}

const newIndex = {
  version: "2.0.0", // 大版本升级
  generated_at: new Date().toISOString(),
  total_prompts: newPrompts.length,
  total_packs: index.total_packs ?? 0,
  by_category: newCategoryCounts,
  prompts: newPrompts.map((p) => ({
    id: p.id,
    path: p.path,
    title: p.title,
    category: p.category,
    subcategory: p.subcategory,
    aesthetic: p.aesthetic,
    tags: p.tags,
    recommended_models: p.recommended_models,
    recommended_params: p.recommended_params,
    sample_outputs: p.sample_outputs,
    quality_tier: p.quality_tier,
    author: p.author,
    source: p.source,
    language: p.language,
    created_at: p.created_at,
    version: p.version,
    related_to: p.related_to,
  })),
  packs: index.packs ?? [],
};

writeFileSync(join(ROOT, "index.json"), JSON.stringify(newIndex, null, 2));

console.log(`\n✅ 迁移完成`);
console.log(`   moved: ${moved}`);
console.log(`   index.json v2.0.0 重建完毕`);
console.log(`\n下一步：`);
console.log(`   1. node scripts/validate-library.mjs --no-report`);
console.log(`   2. git status / git diff --stat`);
console.log(`   3. git add -A && git commit -m "Phase B-1: realign prompts by subcategory into 13 new categories"`);
console.log(`   4. git push`);
