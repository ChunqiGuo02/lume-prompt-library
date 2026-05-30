import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CACHE_DIR = path.join(ROOT, "source-cache");
const REPORTS_DIR = path.join(ROOT, "reports");
const PROMPTS_DIR = path.join(ROOT, "prompts");
const PACKS_DIR = path.join(ROOT, "packs");

const SOURCE_PAGE_URL = "https://www.leaderai.top/mid-api/lab/image_prompt/index.html";
const CDN_BASE = "https://cdn.leaderai.top/oss/moban-image";
const CREATED_AT = "2026-05-30";
const VERSION = "1.0.0";
const AUTHOR = "ChunqiGuo02";
const SOURCE_LABEL = `Leader Prompt Gallery (${SOURCE_PAGE_URL})`;

const ALLOWED_CATEGORIES = [
  "landscape",
  "architecture",
  "interior",
  "product",
  "graphic",
  "portrait",
  "video",
  "misc"
];

const KNOWN_AESTHETICS = [
  "bauhaus",
  "biophilic",
  "deconstructivism",
  "industrial-loft",
  "japanese-zen-garden",
  "memphis",
  "modern-chinese-garden",
  "modern-minimal-landscape",
  "nordic-minimal",
  "wabi-sabi"
];

const STOPWORDS = new Set([
  "about", "above", "across", "after", "against", "along", "also", "amid", "among", "and",
  "around", "background", "based", "beautiful", "between", "black", "blue", "camera", "cinematic",
  "close", "color", "colors", "composition", "created", "detailed", "dramatic", "each", "featuring",
  "from", "front", "generate", "high", "highly", "image", "into", "light", "lighting", "like",
  "looking", "made", "modern", "natural", "over", "photo", "photography", "portrait", "realistic",
  "render", "scene", "shot", "showing", "style", "through", "ultra", "using", "very", "view",
  "white", "with", "without", "woman", "women", "young", "girl", "man", "men", "person", "people",
  "wearing", "holding", "standing", "sitting", "large", "small", "soft", "warm", "cool"
]);

const MODEL_TAGS = new Map([
  ["nano banana", "banana-pro"],
  ["nanobanana", "banana-pro"],
  ["banana", "banana-pro"],
  ["flux", "flux-pro"]
]);

const MODEL_LABEL_TAGS = new Set(["nano banana", "nanobanana", "banana", "flux", "g2"]);

function normalizeSlashes(value) {
  return value.replaceAll("\\", "/");
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

function assertInsideRoot(target) {
  const resolved = path.resolve(target);
  if (resolved !== ROOT && !resolved.startsWith(ROOT + path.sep)) {
    throw new Error(`Refusing to write outside repo root: ${resolved}`);
  }
}

async function cleanGeneratedOutputs() {
  for (const target of [PROMPTS_DIR]) {
    assertInsideRoot(target);
    await rm(target, { recursive: true, force: true });
  }
  await ensureDir(PROMPTS_DIR);
  await ensureDir(PACKS_DIR);
  await ensureDir(REPORTS_DIR);
}

async function readJsonFile(filePath) {
  const text = await readFile(filePath, "utf8");
  return JSON.parse(text);
}

async function fetchTextWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "user-agent": "psyche-prompt-library-builder/1.0"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await new Promise(resolve => setTimeout(resolve, attempt * 400));
      }
    }
  }
  throw lastError;
}

async function fetchJsonCached(url, cachePath, options = {}) {
  const { refresh = process.argv.includes("--refresh"), required = true } = options;
  if (!refresh && existsSync(cachePath)) {
    return readJsonFile(cachePath);
  }

  try {
    const text = await fetchTextWithRetry(url);
    const parsed = JSON.parse(text);
    await ensureDir(path.dirname(cachePath));
    await writeFile(cachePath, JSON.stringify(parsed, null, 2) + "\n", "utf8");
    return parsed;
  } catch (error) {
    if (existsSync(cachePath)) {
      console.warn(`WARN using cached file after fetch failed: ${url} (${error.message})`);
      return readJsonFile(cachePath);
    }
    if (!required) {
      return null;
    }
    throw new Error(`Failed to fetch ${url}: ${error.message}`);
  }
}

function headerName(header) {
  return Array.isArray(header) ? header[0] : header;
}

function rowToItem(headers, row) {
  const item = {};
  headers.forEach((header, index) => {
    item[headerName(header)] = row[index];
  });
  return item;
}

function normalizeTagList(value) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : String(value).split(",");
  return list
    .map(tag => String(tag).trim())
    .filter(Boolean);
}

function unique(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    const normalized = String(value ?? "").trim();
    const key = normalized.toLowerCase();
    if (!normalized || seen.has(key)) continue;
    seen.add(key);
    out.push(normalized);
  }
  return out;
}

function compactText(...parts) {
  return parts.filter(Boolean).join(" ").toLowerCase();
}

function inferCategory({ media, sourceCategory, title, tags, prompt }) {
  if (media === "video") return "video";

  const haystack = compactText(sourceCategory, title, tags.join(" "), prompt);
  const hasAny = (...words) => words.some(word => haystack.includes(word));

  if (hasAny("landscape", "garden", "forest", "mountain", "river", "lake", "ocean", "desert", "nature", "park", "庭院", "园林", "景观", "森林", "山", "湖", "海", "自然")) {
    return "landscape";
  }
  if (hasAny("interior", "living room", "bedroom", "kitchen", "dining", "bathroom", "室内", "客厅", "卧室", "厨房", "餐厅", "家居")) {
    return "interior";
  }
  if (hasAny("architecture", "building", "facade", "exterior", "tower", "museum", "pavilion", "hotel", "建筑", "立面", "外观", "楼", "馆")) {
    return "architecture";
  }
  if (sourceCategory.startsWith("02_") || sourceCategory.startsWith("12_") || sourceCategory.startsWith("13_") || hasAny("product", "packaging", "bottle", "shoe", "toy", "watch", "bag", "商品", "产品", "包装", "手办", "玩具", "试穿")) {
    return "product";
  }
  if (sourceCategory.startsWith("05_") || sourceCategory.startsWith("10_") || hasAny("portrait", "headshot", "character", "face", "人物", "肖像", "角色", "写真", "人像")) {
    return "portrait";
  }
  if (sourceCategory.startsWith("08_") || sourceCategory.startsWith("11_")) {
    return "misc";
  }
  if (sourceCategory.startsWith("15_")) {
    return "landscape";
  }
  if (sourceCategory.startsWith("01_")) {
    return "interior";
  }
  if (sourceCategory.startsWith("03_") || sourceCategory.startsWith("04_") || sourceCategory.startsWith("06_") || sourceCategory.startsWith("07_") || sourceCategory.startsWith("09_") || sourceCategory.startsWith("14_") || sourceCategory.startsWith("16_")) {
    return "graphic";
  }
  return "misc";
}

function inferAesthetic({ title, tags, prompt }) {
  const haystack = compactText(title, tags.join(" "), prompt);
  const rules = [
    ["japanese-zen-garden", ["japanese", "zen", "karesansui", "wabi", "侘寂", "日式", "禅", "枯山水"]],
    ["nordic-minimal", ["nordic", "scandinavian", "北欧"]],
    ["wabi-sabi", ["wabi-sabi", "wabi sabi", "侘寂"]],
    ["bauhaus", ["bauhaus", "包豪斯"]],
    ["biophilic", ["biophilic", "green wall", "绿植", "生态", "自然主义"]],
    ["industrial-loft", ["industrial", "loft", "warehouse", "工业风", "阁楼"]],
    ["memphis", ["memphis", "孟菲斯"]],
    ["deconstructivism", ["deconstruct", "deconstructivism", "解构"]],
    ["modern-chinese-garden", ["chinese garden", "suzhou", "中式园林", "新中式", "苏州园林"]],
    ["modern-minimal-landscape", ["minimal landscape", "modern landscape", "现代景观"]]
  ];
  for (const [slug, needles] of rules) {
    if (needles.some(needle => haystack.includes(needle))) {
      return KNOWN_AESTHETICS.includes(slug) ? slug : null;
    }
  }
  return null;
}

function inferRecommendedModels(tags, prompt) {
  const haystack = compactText(tags.join(" "), prompt);
  const models = [];
  for (const [needle, model] of MODEL_TAGS) {
    if (haystack.includes(needle) && !models.includes(model)) {
      models.push(model);
    }
  }
  return models;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function nearestAspectRatio(width, height) {
  if (!width || !height) return null;
  const common = [
    [1, 1],
    [3, 2],
    [2, 3],
    [4, 3],
    [3, 4],
    [16, 9],
    [9, 16],
    [21, 9],
    [9, 21]
  ];
  const actual = width / height;
  let best = null;
  let bestDistance = Infinity;
  for (const [w, h] of common) {
    const distance = Math.abs(actual - w / h);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = `${w}:${h}`;
    }
  }
  if (bestDistance <= 0.08) return best;
  const divisor = gcd(width, height);
  const rw = Math.round(width / divisor);
  const rh = Math.round(height / divisor);
  if (rw <= 30 && rh <= 30) return `${rw}:${rh}`;
  return null;
}

function inferAspectRatio(item) {
  const imgs = Array.isArray(item.imgs) ? item.imgs : [];
  for (const img of imgs) {
    if (Array.isArray(img) && Number(img[1]) > 0 && Number(img[2]) > 0) {
      return nearestAspectRatio(Number(img[1]), Number(img[2]));
    }
  }
  return null;
}

function inferLanguage(text) {
  const value = String(text || "");
  const cjk = (value.match(/[\u3400-\u9fff]/g) || []).length;
  const latin = (value.match(/[A-Za-z]/g) || []).length;
  if (cjk > 0 && latin > 0) return "mixed";
  if (cjk > 0) return "zh";
  return "en";
}

function promptKeywords(prompt, fallback) {
  const source = `${prompt || ""} ${fallback || ""}`.toLowerCase();
  const matches = source.match(/[a-z][a-z0-9-]{2,}/g) || [];
  const scored = new Map();
  matches.forEach((word, index) => {
    const normalized = word.replace(/^-+|-+$/g, "");
    if (!normalized || STOPWORDS.has(normalized) || normalized.length < 3 || /^\d+$/.test(normalized)) return;
    const current = scored.get(normalized) || 0;
    scored.set(normalized, current + 5 + Math.max(0, 80 - index) / 20);
  });
  return [...scored.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([word]) => word)
    .slice(0, 4);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function makeIdBase(category, prompt, title, uuid) {
  const words = promptKeywords(prompt, title).slice(0, 3);
  const keywordPart = words.length >= 2 ? words.join("-") : slugify(uuid).slice(0, 10);
  return slugify(`${category}-${keywordPart}`) || `${category}-${slugify(uuid).slice(0, 10)}`;
}

function padNumber(value) {
  return String(value).padStart(3, "0");
}

function yamlString(value) {
  if (value === null || value === undefined) return "null";
  return JSON.stringify(String(value));
}

function yamlInlineArray(values) {
  if (!values || values.length === 0) return "[]";
  return `[${values.map(value => JSON.stringify(String(value))).join(", ")}]`;
}

function yamlBlockArray(values) {
  if (!values || values.length === 0) return "[]";
  return `\n${values.map(value => `  - ${String(value)}`).join("\n")}`;
}

function markdownForPrompt(entry) {
  const frontmatter = [
    "---",
    `id: ${yamlString(entry.id)}`,
    `title: ${yamlString(entry.title)}`,
    `category: ${entry.category}`,
    `subcategory: ${yamlString(entry.subcategory)}`,
    `aesthetic: ${entry.aesthetic ? entry.aesthetic : "null"}`,
    `tags: ${yamlInlineArray(entry.tags)}`,
    `recommended_models: ${yamlBlockArray(entry.recommended_models)}`,
    "recommended_params:",
    `  aspect_ratio: ${entry.recommended_params.aspect_ratio ? yamlString(entry.recommended_params.aspect_ratio) : "null"}`,
    `  quality: ${entry.recommended_params.quality ? entry.recommended_params.quality : "null"}`,
    `  style_strength: ${entry.recommended_params.style_strength ?? "null"}`,
    "sample_outputs: []",
    `quality_tier: ${entry.quality_tier}`,
    `author: ${yamlString(entry.author)}`,
    `source: ${yamlString(entry.source)}`,
    `language: ${entry.language}`,
    `created_at: ${entry.created_at}`,
    `version: ${yamlString(entry.version)}`,
    `related_to: ${yamlInlineArray(entry.related_to)}`,
    "---",
    "",
    "# 正文 prompt",
    entry.prompt_body
  ];

  if (entry.prompt_cn) {
    frontmatter.push("", "## 中文译文（源站提供）", entry.prompt_cn);
  }

  const sourceNotes = [];
  if (entry.source_author) sourceNotes.push(`- 源站作者：${entry.source_author}`);
  sourceNotes.push(`- 源站 UUID：${entry.uuid}`);
  sourceNotes.push(`- 源站分类：${entry.subcategory}`);
  if (sourceNotes.length > 0) {
    frontmatter.push("", "## 来源备注", ...sourceNotes);
  }

  return frontmatter.join("\n").replace(/\r\n/g, "\n") + "\n";
}

function readPromptFromMeta(meta, item) {
  const promptOrigin = String(meta?.prompt_origin ?? item.prompt_origin ?? "").trim();
  const promptCn = String(meta?.prompt_cn ?? item.prompt_cn ?? "").trim();
  if (promptOrigin) {
    return { promptBody: promptOrigin, promptCn, usedPromptField: "prompt_origin" };
  }
  if (promptCn) {
    return { promptBody: promptCn, promptCn: "", usedPromptField: "prompt_cn_fallback" };
  }
  return { promptBody: "", promptCn: "", usedPromptField: null };
}

function qualityTier({ promptBody, tags, models, aspectRatio }) {
  const len = promptBody.length;
  if (len >= 500 && tags.length >= 4 && models.length > 0 && aspectRatio) return "A";
  if (len >= 80 || tags.length >= 3) return "B";
  return "C";
}

function promptHash(text) {
  return createHash("sha256").update(String(text).replace(/\r\n/g, "\n")).digest("hex");
}

function normalizeForSimilarity(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function charShingles(text, size = 5) {
  const value = normalizeForSimilarity(text).replace(/\s+/g, "");
  const shingles = new Set();
  if (value.length <= size) {
    if (value) shingles.add(value);
    return shingles;
  }
  for (let i = 0; i <= value.length - size; i += 1) {
    shingles.add(value.slice(i, i + size));
  }
  return shingles;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 1;
  let intersection = 0;
  for (const value of a) {
    if (b.has(value)) intersection += 1;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function addRelatedPrompts(entries) {
  const byExact = new Map();
  for (const entry of entries) {
    const normalized = normalizeForSimilarity(entry.prompt_body);
    if (!normalized) continue;
    const exactKey = `${entry.category}:${normalized}`;
    if (!byExact.has(exactKey)) byExact.set(exactKey, []);
    byExact.get(exactKey).push(entry);
  }

  for (const group of byExact.values()) {
    if (group.length <= 1) continue;
    const ids = group.map(entry => entry.id);
    for (const entry of group) {
      entry.related_to = ids.filter(id => id !== entry.id);
    }
  }

  const buckets = new Map();
  for (const entry of entries) {
    const normalized = normalizeForSimilarity(entry.prompt_body);
    const key = `${entry.category}:${normalized.slice(0, 80)}`;
    if (!key.trim()) continue;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(entry);
  }

  for (const bucket of buckets.values()) {
    if (bucket.length <= 1 || bucket.length > 100) continue;
    const shingles = new Map(bucket.map(entry => [entry.id, charShingles(entry.prompt_body)]));
    for (let i = 0; i < bucket.length; i += 1) {
      for (let j = i + 1; j < bucket.length; j += 1) {
        const left = bucket[i];
        const right = bucket[j];
        if (left.related_to.includes(right.id)) continue;
        if (jaccard(shingles.get(left.id), shingles.get(right.id)) >= 0.8) {
          left.related_to.push(right.id);
          right.related_to.push(left.id);
        }
      }
    }
  }

  for (const entry of entries) {
    entry.related_to = unique(entry.related_to).sort();
  }
}

function buildIndex(entries) {
  const byCategory = Object.fromEntries(ALLOWED_CATEGORIES.map(category => [category, 0]));
  for (const entry of entries) {
    byCategory[entry.category] = (byCategory[entry.category] || 0) + 1;
  }
  return {
    version: VERSION,
    generated_at: new Date().toISOString(),
    total_prompts: entries.length,
    total_packs: 0,
    by_category: byCategory,
    prompts: entries.map(entry => ({
      id: entry.id,
      path: normalizeSlashes(path.relative(ROOT, entry.file_path)),
      title: entry.title,
      category: entry.category,
      subcategory: entry.subcategory,
      aesthetic: entry.aesthetic,
      tags: entry.tags,
      recommended_models: entry.recommended_models,
      recommended_params: entry.recommended_params,
      sample_outputs: [],
      quality_tier: entry.quality_tier,
      author: entry.author,
      source: entry.source,
      language: entry.language,
      created_at: entry.created_at,
      version: entry.version,
      related_to: entry.related_to
    })),
    packs: []
  };
}

function readmeText(totalPrompts) {
  return `# psyche-prompt-library

Psyche AI image and video generation prompt library, extracted from Leader Prompt Gallery for later Skill and PlanPack integration.

## Contents

- \`prompts/\`: one prompt per Markdown file, grouped by primary scene category.
- \`index.json\`: generated flat index containing each prompt frontmatter plus file path.
- \`packs/\`: reserved for future PlanPack prompt bundles. The first release does not auto-generate packs.
- \`scripts/\`: local build and validation utilities.
- \`reports/\`: extraction and validation reports.

Current generated prompt count: **${totalPrompts}**.

## Prompt Schema

Every prompt file must include all frontmatter keys below. Missing scalar values use \`null\`; missing arrays use \`[]\`.

\`\`\`yaml
---
id: "graphic-luxury-brand-001"
title: "Prompt title"
category: graphic
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["广告", "时尚"]
recommended_models:
  - banana-pro
recommended_params:
  aspect_ratio: "3:2"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---
\`\`\`

Allowed \`category\` values:

- \`landscape\`
- \`architecture\`
- \`interior\`
- \`product\`
- \`graphic\`
- \`portrait\`
- \`video\`
- \`misc\`

## Contribution Guide

1. Add exactly one prompt per Markdown file under the matching \`prompts/<category>/\` directory.
2. Keep the model-ready prompt body unchanged. Do not rewrite, translate, or optimize someone else's prompt text.
3. Do not fill \`sample_outputs\` unless representative image URLs are explicitly provided for that prompt.
4. Use globally unique \`id\` values and keep the file name equal to \`id + ".md"\`.
5. Run \`node scripts/validate-library.mjs\` before submitting changes.

## Rebuilding

\`\`\`bash
node scripts/build-library.mjs
node scripts/validate-library.mjs
\`\`\`

\`source-cache/\` is intentionally ignored by git. It is a local cache used to keep the network-heavy extraction step separate from generation and validation.
`;
}

async function loadCatalog(media) {
  const isVideo = media === "video";
  const prefix = `${CDN_BASE}/${isVideo ? "video_prompt" : "image_prompt"}/`;
  const indexName = isVideo ? "vids_index.json" : "imgs_index.json";
  const categoryName = isVideo ? "vids_category.json" : "imgs_category.json";
  const tagsName = isVideo ? null : "imgs_tags.json";
  const indexData = await fetchJsonCached(
    `${prefix}${indexName}`,
    path.join(CACHE_DIR, "catalog", media, indexName)
  );
  const categoryData = await fetchJsonCached(
    `${prefix}${categoryName}`,
    path.join(CACHE_DIR, "catalog", media, categoryName)
  );
  if (tagsName) {
    await fetchJsonCached(
      `${prefix}${tagsName}`,
      path.join(CACHE_DIR, "catalog", media, tagsName),
      { required: false }
    );
  }

  const headers = indexData[0];
  const rows = indexData.slice(1);
  const itemsByUuid = new Map();
  for (const row of rows) {
    const item = rowToItem(headers, row);
    item.tags = normalizeTagList(item.tags);
    item.model_tags = normalizeTagList(item.model_tags);
    itemsByUuid.set(item.uuid, item);
  }

  const rawItems = [];
  for (const [sourceCategory, uuids] of Object.entries(categoryData)) {
    for (const uuid of uuids) {
      const item = itemsByUuid.get(uuid);
      if (!item) continue;
      const firstChar = String(uuid).charAt(0).toLowerCase();
      const sourceDir = isVideo ? "vids_src" : "imgs_src";
      const metaUrl = `${prefix}${sourceDir}/${firstChar}/${uuid}/meta.json`;
      const cachePath = path.join(CACHE_DIR, "meta", media, firstChar, uuid, "meta.json");
      rawItems.push({
        media,
        sourceCategory,
        item,
        metaUrl,
        cachePath
      });
    }
  }
  return rawItems;
}

async function runWithConcurrency(items, limit, worker) {
  let nextIndex = 0;
  let completed = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex], currentIndex);
      completed += 1;
      if (completed % 500 === 0 || completed === items.length) {
        console.log(`Processed ${completed}/${items.length} meta files`);
      }
    }
  });
  await Promise.all(workers);
}

async function attachMeta(rawItems) {
  const failures = [];
  await runWithConcurrency(rawItems, 16, async raw => {
    try {
      raw.meta = await fetchJsonCached(raw.metaUrl, raw.cachePath, { required: true });
      raw.metaStatus = "ok";
    } catch (error) {
      raw.meta = null;
      raw.metaStatus = "failed";
      failures.push({
        uuid: raw.item.uuid,
        media: raw.media,
        sourceCategory: raw.sourceCategory,
        metaUrl: raw.metaUrl,
        error: error.message
      });
    }
  });
  return failures;
}

function buildEntries(rawItems) {
  const entries = [];
  const idCounters = new Map();
  const skipped = [];
  const downgraded = [];

  for (const raw of rawItems) {
    const item = raw.item;
    const meta = raw.meta || {};
    const sourceTags = unique([
      ...normalizeTagList(meta.model_tags),
      ...normalizeTagList(item.model_tags),
      ...normalizeTagList(meta.tags),
      ...normalizeTagList(item.tags)
    ]);
    const promptData = readPromptFromMeta(meta, item);
    if (!promptData.promptBody) {
      skipped.push({
        uuid: item.uuid,
        media: raw.media,
        sourceCategory: raw.sourceCategory,
        reason: "missing prompt_origin and prompt_cn"
      });
      continue;
    }
    if (raw.metaStatus !== "ok" || promptData.usedPromptField !== "prompt_origin") {
      downgraded.push({
        uuid: item.uuid,
        media: raw.media,
        sourceCategory: raw.sourceCategory,
        metaStatus: raw.metaStatus,
        usedPromptField: promptData.usedPromptField
      });
    }

    const title = String(meta.title ?? item.title ?? item.uuid);
    const sourceAuthor = String(meta.author ?? item.author ?? "").trim();
    const category = inferCategory({
      media: raw.media,
      sourceCategory: raw.sourceCategory,
      title,
      tags: sourceTags,
      prompt: promptData.promptBody
    });
    const base = makeIdBase(category, promptData.promptBody, title, item.uuid);
    const nextCount = (idCounters.get(base) || 0) + 1;
    idCounters.set(base, nextCount);
    const id = `${base}-${padNumber(nextCount)}`;

    const filteredTags = sourceTags.filter(tag => !MODEL_LABEL_TAGS.has(tag.toLowerCase()));
    const keywordTags = promptKeywords(promptData.promptBody, title).slice(0, 8);
    const tags = unique([...filteredTags, ...keywordTags, category]).slice(0, 8);
    while (tags.length < 2) {
      tags.push(tags.length === 0 ? category : raw.media);
    }

    const recommendedModels = inferRecommendedModels(sourceTags, promptData.promptBody);
    const aspectRatio = inferAspectRatio(item);
    const entry = {
      uuid: item.uuid,
      id,
      title,
      category,
      subcategory: raw.sourceCategory || null,
      aesthetic: inferAesthetic({ title, tags, prompt: promptData.promptBody }),
      tags,
      recommended_models: recommendedModels,
      recommended_params: {
        aspect_ratio: aspectRatio,
        quality: null,
        style_strength: null
      },
      sample_outputs: [],
      quality_tier: qualityTier({
        promptBody: promptData.promptBody,
        tags,
        models: recommendedModels,
        aspectRatio
      }),
      author: AUTHOR,
      source: SOURCE_LABEL,
      language: inferLanguage(promptData.promptBody),
      created_at: CREATED_AT,
      version: VERSION,
      related_to: [],
      prompt_body: promptData.promptBody.replace(/\r\n/g, "\n"),
      prompt_cn: promptData.promptCn.replace(/\r\n/g, "\n"),
      source_author: sourceAuthor,
      source_meta_url: raw.metaUrl,
      source_cache_path: normalizeSlashes(path.relative(ROOT, raw.cachePath)),
      used_prompt_field: promptData.usedPromptField
    };
    entry.file_path = path.join(PROMPTS_DIR, category, `${entry.id}.md`);
    entries.push(entry);
  }

  addRelatedPrompts(entries);
  return { entries, skipped, downgraded };
}

async function writeOutputs(entries, sourceMap) {
  for (const category of ALLOWED_CATEGORIES) {
    await ensureDir(path.join(PROMPTS_DIR, category));
  }
  for (const entry of entries) {
    await ensureDir(path.dirname(entry.file_path));
    await writeFile(entry.file_path, markdownForPrompt(entry), "utf8");
  }

  const index = buildIndex(entries);
  await writeFile(path.join(ROOT, "index.json"), JSON.stringify(index, null, 2) + "\n", "utf8");
  await writeFile(path.join(ROOT, "README.md"), readmeText(entries.length), "utf8");
  await writeFile(path.join(REPORTS_DIR, "source-map.json"), JSON.stringify(sourceMap, null, 2) + "\n", "utf8");
}

async function main() {
  if (path.basename(ROOT) !== "psyche-prompt-library") {
    throw new Error(`Unexpected repo root: ${ROOT}`);
  }

  await ensureDir(CACHE_DIR);
  await ensureDir(REPORTS_DIR);

  console.log("Loading source catalogs...");
  const imageItems = await loadCatalog("image");
  const videoItems = await loadCatalog("video");
  const rawItems = [...imageItems, ...videoItems];
  console.log(`Catalog entries: ${rawItems.length} (${imageItems.length} image, ${videoItems.length} video)`);

  console.log("Caching source meta files...");
  const metaFailures = await attachMeta(rawItems);
  const failureRatio = rawItems.length === 0 ? 1 : metaFailures.length / rawItems.length;
  if (failureRatio > 0.25) {
    await writeFile(
      path.join(REPORTS_DIR, "extraction-report.json"),
      JSON.stringify({
        generated_at: new Date().toISOString(),
        status: "aborted",
        reason: "too many meta fetch failures",
        total_catalog_entries: rawItems.length,
        meta_failures: metaFailures.length,
        failures: metaFailures
      }, null, 2) + "\n",
      "utf8"
    );
    throw new Error(`Aborting because ${metaFailures.length}/${rawItems.length} meta downloads failed`);
  }

  console.log("Generating prompt files...");
  await cleanGeneratedOutputs();
  const { entries, skipped, downgraded } = buildEntries(rawItems);
  const sourceMap = entries.map(entry => ({
    id: entry.id,
    uuid: entry.uuid,
    media: entry.category === "video" ? "video" : "image",
    path: normalizeSlashes(path.relative(ROOT, entry.file_path)),
    source_meta_url: entry.source_meta_url,
    source_cache_path: entry.source_cache_path,
    source_author: entry.source_author || null,
    source_prompt_sha256: promptHash(entry.prompt_body),
    used_prompt_field: entry.used_prompt_field
  }));
  await writeOutputs(entries, sourceMap);

  const report = {
    generated_at: new Date().toISOString(),
    status: "completed",
    source_page_url: SOURCE_PAGE_URL,
    total_catalog_entries: rawItems.length,
    image_catalog_entries: imageItems.length,
    video_catalog_entries: videoItems.length,
    prompts_written: entries.length,
    skipped_count: skipped.length,
    downgraded_count: downgraded.length,
    meta_failure_count: metaFailures.length,
    skipped,
    downgraded,
    meta_failures: metaFailures
  };
  await writeFile(path.join(REPORTS_DIR, "extraction-report.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
  console.log(`Wrote ${entries.length} prompt files`);
  console.log(`Meta failures: ${metaFailures.length}; skipped: ${skipped.length}; downgraded: ${downgraded.length}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
