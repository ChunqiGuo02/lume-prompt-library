---
id: graphic-title-labels-elements-0642
title: "心肌梗死因果链医学信息图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["心梗", "医学", "科普", "信息图", "3D", "解剖", "临床", "心脏"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
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

# 正文 prompt
{
  "type": "comprehensive medical infographic",
  "style": "highly detailed 3D medical illustration, clinical white background, clean typography",
  "header": {
    "title_cn": "",
    "title_en": "{argument name=\"english title\" default=\"THE CAUSAL CHAIN OF HEART ATTACK\"}",
    "subtitle": "Chest pain is not the beginning. Vascular damage is.",
    "top_right_sequence": {
      "count": 6,
      "labels": [
        "Risk Factors",
        "Plaque Formation",
        "Rupture",
        "Clotting",
        "Ischemia",
        "Damage"
      ]
    }
  },
  "centerpiece": {
    "description": "{argument name=\"central figure\" default=\"transparent anatomical human body showing heart, coronary arteries, lungs, and vascular system\"}",
    "details": "pathway highlighted in {argument name=\"highlight color\" default=\"glowing red\"} focusing on the coronary arteries and radiating pain to the chest and left arm"
  },
  "layout": {
    "left_column": [
      {
        "id": "01",
        "title": "Major Risk Factors",
        "elements": 6,
        "labels": [
          "Smoking",
          "High LDL cholesterol",
          "Hypertension",
          "Diabetes",
          "Obesity",
          "Chronic stress"
        ]
      },
      {
        "id": "02",
        "title": "Atherosclerosis Development",
        "elements": 2,
        "labels": [
          "Fatty streak to plaque",
          "Coronary artery wall"
        ]
      },
      {
        "id": "03",
        "title": "Reduced Coronary Blood Flow",
        "elements": 2,
        "labels": [
          "Narrowed artery lumen",
          "Oxygen delivery decline"
        ]
      },
      {
        "id": "04",
        "title": "Vulnerable Plaque",
        "elements": 2,
        "labels": [
          "Thin fibrous cap",
          "Lipid-rich core"
        ]
      }
    ],
    "center_overlay": [
      {
        "id": "05",
        "title": "Plaque Rupture & Clot Formation",
        "elements": 3,
        "labels": [
          "Plaque rupture diagram",
          "Platelet aggregation",
          "Occlusive thrombus"
        ]
      },
      {
        "id": "06",
        "title": "Myocardial Ischemia",
        "elements": 1,
        "labels": [
          "Heart muscle cross-section with blocked coronary artery"
        ]
      }
    ],
    "right_column": [
      {
        "id": "07",
        "title": "Cellular Injury Cascade",
        "elements": 4,
        "labels": [
          "Oxygen deprivation",
          "Mitochondrial failure",
          "Cell membrane breakdown",
          "Troponin release"
        ]
      },
      {
        "id": "08",
        "title": "Acute Heart Attack",
        "elements": 1,
        "labels": [
          "Patient clutching chest"
        ]
      },
      {
        "id": "09",
        "title": "Permanent Myocardial Damage",
        "elements": 1,
        "labels": [
          "Necrotic heart tissue"
        ]
      },
      {
        "id": "10",
        "title": "Complications",
        "elements": 2,
        "labels": [
          "Arrhythmia",
          "Heart failure"
        ]
      },
      {
        "id": "11",
        "title": "Beyond the Heart",
        "elements": 2,
        "labels": [
          "Reduced systemic perfusion",
          "Brain and kidney impact"
        ]
      }
    ],
    "bottom_row": [
      {
        "id": "12",
        "title": "Pain Is the Final Signal",
        "elements": 7,
        "labels": [
          "Risk Exposure",
          "Plaque Buildup",
          "Artery Narrowing",
          "Plaque Rupture",
          "Clot Formation",
          "Muscle Death",
          "Man in pain"
        ]
      }
    ]
  },
  "theme": "{argument name=\"disease focus\" default=\"heart attack and coronary artery blockage\"}"
}

## 中文译文（源站提供）
{
  "type": "综合医疗信息图",
  "style": "高度精细的 3D 医学插图，临床白色背景，简洁的排版",
  "header": {
    "title_cn": "心脏病发作的因果链",
    "title_en": "{argument name=\"english title\" default=\"THE CAUSAL CHAIN OF HEART ATTACK\"}",
    "subtitle": "胸痛并非起点，血管损伤才是。",
    "top_right_sequence": {
      "count": 6,
      "labels": [
        "风险因素",
        "斑块形成",
        "斑块破裂",
        "血栓形成",
        "缺血",
        "损伤"
      ]
    }
  },
  "centerpiece": {
    "description": "{argument name=\"central figure\" default=\"透明人体解剖模型，展示心脏、冠状动脉、肺部和血管系统\"}",
    "details": "以 {argument name=\"highlight color\" default=\"发光红色\"} 高亮显示的路径，重点展示冠状动脉以及放射至胸部和左臂的疼痛"
  },
  "layout": {
    "left_column": [
      {
        "id": "01",
        "title": "主要风险因素",
        "elements": 6,
        "labels": [
          "吸烟",
          "高 LDL 胆固醇",
          "高血压",
          "糖尿病",
          "肥胖",
          "慢性压力"
        ]
      },
      {
        "id": "02",
        "title": "动脉粥样硬化发展",
        "elements": 2,
        "labels": [
          "从脂肪条纹到斑块",
          "冠状动脉壁"
        ]
      },
      {
        "id": "03",
        "title": "冠状动脉血流减少",
        "elements": 2,
        "labels": [
          "动脉管腔狭窄",
          "氧气输送下降"
        ]
      },
      {
        "id": "04",
        "title": "易损斑块",
        "elements": 2,
        "labels": [
          "薄纤维帽",
          "富含脂质的核心"
        ]
      }
    ],
    "center_overlay": [
      {
        "id": "05",
        "title": "斑块破裂与血栓形成",
        "elements": 3,
        "labels": [
          "斑块破裂示意图",
          "血小板聚集",
          "闭塞性血栓"
        ]
      },
      {
        "id": "06",
        "title": "心肌缺血",
        "elements": 1,
        "labels": [
          "冠状动脉阻塞的心肌横截面"
        ]
      }
    ],
    "right_column": [
      {
        "id": "07",
        "title": "细胞损伤级联反应",
        "elements": 4,
        "labels": [
          "缺氧",
          "线粒体功能衰竭",
          "细胞膜破裂",
          "肌钙蛋白释放"
        ]
      },
      {
        "id": "08",
        "title": "急性心脏病发作",
        "elements": 1,
        "labels": [
          "捂住胸口的患者"
        ]
      },
      {
        "id": "09",
        "title": "永久性心肌损伤",
        "elements": 1,
        "labels": [
          "坏死的心肌组织"
        ]
      },
      {
        "id": "10",
        "title": "并发症",
        "elements": 2,
        "labels": [
          "心律失常",
          "心力衰竭"
        ]
      },
      {
        "id": "11",
        "title": "心脏之外的影响",
        "elements": 2,
        "labels": [
          "全身灌注减少",
          "对大脑和肾脏的影响"
        ]
      }
    ],
    "bottom_row": [
      {
        "id": "12",
        "title": "疼痛是最终信号",
        "elements": 7,
        "labels": [
          "风险暴露",
          "斑块积聚",
          "动脉狭窄",
          "斑块破裂",
          "血栓形成",
          "心肌坏死",
          "处于疼痛中的人"
        ]
      }
    ]
  },
  "theme": "{argument name=\"disease focus\" default=\"心脏病发作与冠状动脉阻塞\"}"
}

## 来源备注
- 源站作者：LudovicCreator
- 源站 UUID：9iOWC7O0UN
- 源站分类：06_图文排版视觉传达
