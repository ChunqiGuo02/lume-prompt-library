---
id: story_board-the-theme-subject-0008
title: "AI生成主题化人物肖像：西装人物被多手递物环绕，背景幕布呼应"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["AI", "写实", "摄影", "棚拍", "肖像", "幕布", "道具", "西装"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: null
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
  "task": "Generate a hyper-real studio photograph that matches the composition of the reference image: a centered adult person in a tuxedo, surrounded by many hands entering the frame from all sides holding objects toward the person, with a curtain backdrop whose color matches the theme.",
  "variables": {
    "USER_PHOTO": "<<UPLOAD_OR_URL_TO_USER_FACE_OR_PORTRAIT>>",
    "SUBJECT_THEME": "{"subject theme" "finance"}",
    "HAND_PROPS": [
      "<<PROP_1 RELATED TO SUBJECT_THEME>>",
      "<<PROP_2 RELATED TO SUBJECT_THEME>>",
      "<<PROP_3 RELATED TO SUBJECT_THEME>>",
      "<<PROP_4 RELATED TO SUBJECT_THEME>>",
      "<<PROP_5 RELATED TO SUBJECT_THEME>>",
      "<<PROP_6 RELATED TO SUBJECT_THEME>>",
      "<<PROP_7 RELATED TO SUBJECT_THEME>>",
      "<<PROP_8 RELATED TO SUBJECT_THEME>>"
    ]
  },
  "prompt": "Create an ultra photorealistic studio photo (hyper-real, DSLR look) with the SAME composition and framing as the reference: a centered adult person standing front-facing, waist-up to mid-thigh visible, wearing a dark navy tuxedo jacket, crisp white shirt, and black bow tie, smiling confidently. The person has round eyeglasses and neat facial hair (mustache + short beard), but the FACE must be replaced with the user's likeness from USER_PHOTO while keeping natural skin texture, pores, and realistic facial proportions (no plastic skin, no cartooning). The lighting is clean professional studio lighting with soft shadows, high dynamic range, crisp detail.\n\nSurround the person with 8–10 different hands and forearms entering the frame from the edges (top, left, right, bottom), each holding an object and aiming it toward the center person (close to the face/upper torso). The hands belong to different people (varied sleeves/patterns/colors), but keep them realistic and anatomically correct.\n\nIMPORTANT: The ONLY changing elements across generations are: (1) the user's face from USER_PHOTO, and (2) the objects held in the hands. Everything else stays consistent: the tuxedo pose, camera angle, lens look, and overall composition.\n\nOBJECT RULE: Select HAND_PROPS so they are strongly related to SUBJECT_THEME. The objects must be clearly visible, realistic, and varied (mix of modern and vintage if it fits). Examples by theme:\n- music: studio headphones, microphone, vinyl record, cassette, guitar pick, small synth, metronome\n- gaming: controller, handheld console, gaming headset, mouse, keyboard, VR accessory\n- cooking: chef thermometer, whisk, spice grinder, mini pan, piping bag, recipe card\n- finance: calculator, credit card reader, stock ticker printout, smartphone with finance app, receipt roll\n- fitness: smartwatch, resistance band, shaker bottle, jump rope handle\n\nBACKGROUND: Use a curtain backdrop (like a stage/studio curtain) with a color"

## 中文译文（源站提供）
```json
{
  "task": "生成一张超真实的摄影棚照片，其构图与参考图像一致：一个身穿燕尾服的成年人居中，许多手从四面八方伸入画面，将物体伸向此人，背景是与主题颜色相符的幕布。",
  "variables": {
    "USER_PHOTO": "<<UPLOAD_OR_URL_TO_USER_FACE_OR_PORTRAIT>>",
    "SUBJECT_THEME": "{\"subject theme\" \"finance\"}",
    "HAND_PROPS": [
      "<<PROP_1 RELATED TO SUBJECT_THEME>>",
      "<<PROP_2 RELATED TO SUBJECT_THEME>>",
      "<<PROP_3 RELATED TO SUBJECT_THEME>>",
      "<<PROP_4 RELATED TO SUBJECT_THEME>>",
      "<<PROP_5 RELATED TO SUBJECT_THEME>>",
      "<<PROP_6 RELATED TO SUBJECT_THEME>>",
      "<<PROP_7 RELATED TO SUBJECT_THEME>>",
      "<<PROP_8 RELATED TO SUBJECT_THEME>>"
    ]
  },
  "prompt": "创建一张超逼真的摄影棚照片（超真实、DSLR 效果），构图和取景与参考图像完全相同：一个成年人居中，正面站立，可见腰部到大腿中部，穿着深蓝色燕尾服夹克、挺括的白衬衫和黑色领结，自信地微笑着。此人戴着圆形眼镜，留着整洁的胡须（小胡子 + 短络腮胡），但脸部必须替换为 USER_PHOTO 中的用户肖像，同时保持自然的皮肤纹理、毛孔和逼真的面部比例（无塑料感皮肤，无卡通化）。灯光是干净专业的摄影棚灯光，带有柔和的阴影，高动态范围，细节清晰。\n\n用 8 到 10 只不同的手和前臂围绕此人，它们从画面边缘（顶部、左侧、右侧、底部）伸入，每只手都拿着一个物体并将其伸向中心人物（靠近脸部/上半身）。这些手属于不同的人（袖子/图案/颜色各异），但要保持真实感和解剖学上的正确性。\n\n重要提示：每次生成时，唯一变化的元素是：(1) USER_PHOTO 中的用户面部，以及 (2) 手中握持的物体。其他一切保持一致：燕尾服姿势、相机角度、镜头效果和整体构图。\n\n物体规则：选择 HAND_PROPS，使其与 SUBJECT_THEME 密切相关。物体必须清晰可见、逼真且多样化（如果合适，可混合现代和复古风格）。按主题分类的示例：\n- 音乐：录音室耳机、麦克风、黑胶唱片、磁带、吉他拨片、小型合成器、节拍器\n- 游戏：控制器、掌上游戏机、游戏耳机、鼠标、键盘、VR 配件\n- 烹饪：厨师温度计、打蛋器、香料研磨器、迷你平底锅、裱花袋、食谱卡\n- 金融：计算器、信用卡读卡器、股票行情打印件、带有金融应用的智能手机、收据卷\n- 健身：智能手表、阻力带、摇摇杯、跳绳手柄\n\n背景：使用幕布背景（如舞台/摄影棚幕布），颜色"
}
```

## 来源备注
- 源站作者：Saman | AI
- 源站 UUID：rhfcSXjYTY
- 源站分类：09_故事分镜角色设定
