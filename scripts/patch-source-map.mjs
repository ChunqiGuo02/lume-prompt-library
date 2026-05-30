#!/usr/bin/env node
/**
 * Phase B-1 善后 v2：迁移后修正 reports/source-map.json 里的 id 和 path。
 *
 * 精确关联方式：每条 prompt body 的 sha256（==source-map 的 source_prompt_sha256）。
 * 重建 hash → new file 索引，对每条 source-map 用 hash 精确找新 path。
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROMPTS_DIR = join(ROOT, "prompts");
const SM_PATH = join(ROOT, "reports/source-map.json");

function hashPrompt(body) {
  return createHash("sha256").update(body.replace(/\r\n/g, "\n").trim()).digest("hex");
}

function parsePromptFile(raw) {
  // 把"# 正文 prompt"段之后的内容当 body（与 validate-library.mjs 同步）
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const body = m[2];
  // body 解析：从第一个 H1 开始的下一行起算（"# 正文 prompt"标题不算）
  const lines = body.split("\n");
  let promptStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^#\s+正文\s*prompt/i.test(lines[i].trim())) {
      promptStart = i + 1;
      break;
    }
  }
  if (promptStart === -1) return { idLine: null, promptBody: body.trim() };
  // body 取到下一个二级标题前
  let promptEnd = lines.length;
  for (let i = promptStart; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) {
      promptEnd = i;
      break;
    }
  }
  const promptBody = lines.slice(promptStart, promptEnd).join("\n").trim();
  // id 字段
  const idMatch = m[1].match(/^id:\s*(.+)$/m);
  return { id: idMatch?.[1].trim() ?? null, promptBody };
}

function walkPrompts(dir, acc) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walkPrompts(p, acc);
    else if (e.endsWith(".md")) acc.push(p);
  }
  return acc;
}

const promptFiles = walkPrompts(PROMPTS_DIR, []);
console.log(`Scanned ${promptFiles.length} prompt files`);

// 1. 建立 hash → file 索引
const hashToFiles = new Map();
for (const filePath of promptFiles) {
  const raw = readFileSync(filePath, "utf-8");
  const parsed = parsePromptFile(raw);
  if (!parsed?.id) continue;
  const hash = hashPrompt(parsed.promptBody);
  const rel = filePath.replace(ROOT, "").replaceAll("\\", "/").replace(/^\//, "");
  if (!hashToFiles.has(hash)) hashToFiles.set(hash, []);
  hashToFiles.get(hash).push({ new_id: parsed.id, new_path: rel });
}

console.log(`Unique hashes: ${hashToFiles.size}`);

// 2. patch source-map
const sourceMap = JSON.parse(readFileSync(SM_PATH, "utf-8"));
let matchedUnique = 0;
let matchedMulti = 0;
let unmatched = 0;

const newSourceMap = sourceMap.map((sm) => {
  const cands = hashToFiles.get(sm.source_prompt_sha256);
  if (!cands || cands.length === 0) {
    unmatched++;
    return sm; // 保留原样
  }
  if (cands.length === 1) {
    matchedUnique++;
    return { ...sm, id: cands[0].new_id, path: cands[0].new_path };
  }
  // 多 prompt body 完全相同（应该极少）→ 用旧 path 选最像的
  matchedMulti++;
  const oldFileName = sm.id;
  const exact = cands.find((c) => c.new_path.includes(oldFileName.split("-")[1] ?? ""));
  const picked = exact ?? cands[0];
  return { ...sm, id: picked.new_id, path: picked.new_path };
});

writeFileSync(SM_PATH, JSON.stringify(newSourceMap, null, 2));

console.log(`✅ source-map.json updated (hash-based)`);
console.log(`   matched unique: ${matchedUnique}`);
console.log(`   matched multi (body duplicates): ${matchedMulti}`);
console.log(`   unmatched: ${unmatched}`);
console.log(`   total: ${sourceMap.length}`);
