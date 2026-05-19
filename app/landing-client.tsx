"use client";

import { FormEvent, ReactNode, useMemo, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ClipboardCheck,
  CopyCheck,
  DatabaseZap,
  Gauge,
  Link2,
  Mail,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Zap
} from "lucide-react";

type Locale = "en" | "zhHant" | "zhHans";

type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const languageOptions: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "zhHant", label: "繁" },
  { id: "zhHans", label: "简" }
];

const trustedLogos = ["SkinLab", "BeautyPro", "Wellness Weekly", "Aesthetic Insider", "DermaCare"];

const content = {
  en: {
    nav: [
      { label: "Treatments", href: "#features" },
      { label: "Process", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaShort: "Book consultation",
    heroBadge: "Advanced aesthetic clinic for natural-looking skin results",
    heroTitle: "Reveal clearer, brighter skin with treatments designed around you.",
    heroCopy:
      "GlowCare Aesthetics offers personalized facial, laser, acne, and skin-rejuvenation treatments for clients who want visible results without an overdone look.",
    heroPrimary: "Book a consultation",
    heroSecondary: "Explore treatments",
    trustSignals: ["Licensed aesthetic team", "Personalized skin plans", "Transparent treatment pricing"],
    trustedBy: "Featured by beauty and wellness partners",
    dashboard: {
      health: "Personalized treatment plan",
      headline: "1,284 consultations booked",
      copy:
        "Preview recommended treatments, appointment availability, aftercare steps, and expected progress before your first visit.",
      watch: "Book now",
      compare: "View pricing",
      stats: [
        ["Skin analysis", "20 min", "included"],
        ["Treatment rooms", "6", "private"],
        ["Client rating", "4.9/5", "verified"]
      ],
      queueLabel: "This week's availability",
      queueTitle: "Popular appointment slots",
      queue: [
        "Hydrating facial consultation - Wednesday 3:30 PM",
        "Laser brightening assessment - Friday 11:00 AM",
        "Acne recovery plan review - Saturday 2:15 PM"
      ]
    },
    featuresLabel: "Treatments",
    featuresTitle: "High-demand aesthetic services with a consultation-first approach.",
    featuresCopy:
      "Designed for clients who want safer decisions, clear expectations, and treatments matched to their skin goals.",
    features: [
      {
        icon: Workflow,
        title: "Personalized skin analysis",
        description:
          "Start with a guided skin review so every treatment plan is based on concerns, sensitivity, lifestyle, and goals."
      },
      {
        icon: Bot,
        title: "Laser brightening",
        description:
          "Target dark spots, uneven tone, sun damage, and dullness with controlled treatments and clear aftercare."
      },
      {
        icon: Link2,
        title: "Hydration facials",
        description:
          "Refresh tired skin with deep cleansing, gentle exfoliation, hydration, and glow-focused finishing care."
      },
      {
        icon: BarChart3,
        title: "Acne and texture support",
        description:
          "Support breakouts, congestion, enlarged pores, and post-acne marks with consistent treatment planning."
      },
      {
        icon: DatabaseZap,
        title: "Anti-aging plans",
        description:
          "Combine skin tightening, resurfacing, hydration, and maintenance visits for natural long-term results."
      },
      {
        icon: ShieldCheck,
        title: "Aftercare guidance",
        description:
          "Leave with simple aftercare steps, product guidance, and follow-up timing so results can build safely."
      }
    ] satisfies Feature[],
    workflowLabel: "How it works",
    workflowTitle: "A clear path from consultation to confident results.",
    workflowCopy:
      "GlowCare keeps the experience simple, calm, and practical from your first inquiry to your follow-up plan.",
    steps: [
      {
        label: "01",
        title: "Book a skin consultation",
        description:
          "Share your skin goals, concerns, schedule, and treatment history so the team can prepare before you arrive."
      },
      {
        label: "02",
        title: "Review your treatment plan",
        description:
          "Meet with an aesthetic specialist, compare options, understand pricing, and choose the right next step."
      },
      {
        label: "03",
        title: "Treat, recover, and maintain",
        description:
          "Get treatment-day guidance, aftercare instructions, and a realistic maintenance plan for lasting glow."
      }
    ],
    pricingLabel: "Pricing",
    pricingTitle: "Transparent treatment packages before you book.",
    pricingCopy:
      "Choose a starting package or book a consultation for a personalized recommendation.",
    popular: "Most popular",
    choose: "Choose",
    plans: [
      {
        id: "starter",
        name: "Glow Facial",
        price: "$89",
        period: "/visit",
        description: "For first-time clients who want hydration, clarity, and a refreshed look.",
        includes: ["Skin review", "Deep cleanse", "Hydration finish"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Brightening Laser",
        price: "$189",
        period: "/session",
        description: "For uneven tone, sun spots, dullness, and clients preparing for an event.",
        includes: ["Pigment assessment", "Targeted laser session", "Aftercare kit"],
        highlighted: true
      },
      {
        id: "scale",
        name: "Signature Plan",
        price: "$349",
        period: "/plan",
        description: "For clients who want a complete plan for texture, glow, and maintenance.",
        includes: ["Consultation", "2 treatment visits", "Progress review"],
        highlighted: false
      }
    ],
    reviewsLabel: "Testimonials",
    reviewsTitle: "Trusted by clients who want visible results and honest guidance.",
    testimonials: [
      {
        quote:
          "GlowCare explained every step clearly and never pushed treatments I did not need. My skin looked calmer and brighter within a few weeks.",
        name: "Maya Chen",
        role: "Brightening laser client"
      },
      {
        quote:
          "The consultation felt premium and honest. I booked the acne plan because the specialist gave me a realistic timeline and aftercare routine.",
        name: "Ethan Brooks",
        role: "Acne recovery client"
      },
      {
        quote:
          "I wanted natural results before my wedding, and the team built a plan that made my skin glow without feeling overdone.",
        name: "Priya Shah",
        role: "Signature plan client"
      }
    ],
    demoLabel: "Book a consultation",
    demoTitle: "Start with a personalized skin consultation.",
    demoCopy:
      "Choose a treatment package, share your skin goals, and the GlowCare team will recommend the safest next step.",
    demoCards: {
      selectedPlan: "Selected treatment",
      bestFit: "Best for",
      bestFitValue: "Glow, acne support, pigmentation, texture, anti-aging",
      demoFocus: "Consultation focus",
      demoFocusValue: "Skin goals, treatment fit, aftercare"
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      company: "Phone",
      companyPlaceholder: "(555) 123-4567",
      teamSize: "Preferred time",
      timeOptions: ["This week", "Next week", "Weekend", "Not sure yet"],
      goal: "Skin goal",
      goalPlaceholder:
        "Example: brighten dark spots, calm acne, improve texture, prepare for an event...",
      send: "Send appointment request",
      copy: "Copy request",
      copied: "Request copied"
    },
    faqLabel: "FAQ",
    faqTitle: "Questions before your first treatment.",
    faqCopy: "Clear answers about consultations, treatment fit, recovery, and booking.",
    faqs: [
      {
        question: "Do I need a consultation before booking a treatment?",
        answer:
          "Yes. A short consultation helps the team understand your skin, check treatment fit, explain pricing, and avoid options that are not right for you."
      },
      {
        question: "How soon will I see results?",
        answer:
          "Hydration and glow treatments can look fresher quickly. Pigmentation, acne, and texture plans usually need several weeks and consistent aftercare."
      },
      {
        question: "Are treatments customized?",
        answer:
          "Yes. Every plan is adjusted around your skin type, goals, sensitivity, schedule, and previous treatment history."
      },
      {
        question: "Can I book for an event or wedding?",
        answer:
          "Yes. Share your event date during consultation so the team can suggest timing that leaves room for recovery and follow-up care."
      }
    ],
    finalTitle: "Ready for skin that feels clearer, brighter, and cared for?",
    finalCopy:
      "Book a consultation, understand your options, and start a treatment plan built around your skin goals.",
    comparePricing: "View pricing",
    footer: "(c) 2026 GlowCare Aesthetics. All rights reserved.",
    mailSubject: "GlowCare appointment request",
    requestLabels: {
      plan: "Plan",
      name: "Name",
      email: "Email",
      company: "Phone",
      teamSize: "Preferred time",
      goal: "Goal"
    }
  },
  zhHant: {
    nav: [
      { label: "療程", href: "#features" },
      { label: "流程", href: "#workflow" },
      { label: "收費", href: "#pricing" },
      { label: "評價", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaShort: "預約諮詢",
    heroBadge: "專注自然膚質效果的高端醫美診所",
    heroTitle: "用為你設計的療程，讓肌膚更清透、更亮。",
    heroCopy:
      "GlowCare Aesthetics 提供個人化 facial、laser、暗瘡護理和肌膚更新療程，適合想看到明顯改善但不想過度改變的客人。",
    heroPrimary: "預約肌膚諮詢",
    heroSecondary: "查看療程",
    trustSignals: ["持牌醫美團隊", "個人化肌膚方案", "透明療程收費"],
    trustedBy: "美容與 wellness 合作品牌推薦",
    dashboard: {
      health: "個人化療程方案",
      headline: "已完成 1,284 次肌膚諮詢",
      copy: "第一次到店前，先了解建議療程、可預約時間、護理步驟和預期改善方向。",
      watch: "立即預約",
      compare: "查看收費",
      stats: [
        ["肌膚分析", "20 分鐘", "已包含"],
        ["私人療程房", "6", "間"],
        ["客戶評分", "4.9/5", "已驗證"]
      ],
      queueLabel: "本週可預約時間",
      queueTitle: "熱門諮詢時段",
      queue: [
        "補水 facial 諮詢 - 星期三 3:30 PM",
        "淡斑 laser 評估 - 星期五 11:00 AM",
        "暗瘡修復方案檢視 - 星期六 2:15 PM"
      ]
    },
    featuresLabel: "療程項目",
    featuresTitle: "熱門醫美療程，先諮詢再決定。",
    featuresCopy: "適合想安全了解選項、清楚預期效果，並按自身肌膚目標選擇療程的客人。",
    features: [
      {
        icon: Workflow,
        title: "個人化肌膚分析",
        description: "先了解肌膚問題、敏感度、生活習慣和目標，再制定合適療程方案。"
      },
      {
        icon: Bot,
        title: "淡斑亮膚 laser",
        description: "針對色斑、膚色不均、日曬暗沉和 dullness，配合清晰 aftercare。"
      },
      {
        icon: Link2,
        title: "補水亮膚 facial",
        description: "深層清潔、溫和去角質、補水修護和 glow finish，讓肌膚看起來更精神。"
      },
      {
        icon: BarChart3,
        title: "暗瘡與毛孔護理",
        description: "針對 breakout、粉刺、粗大毛孔和暗瘡印，建立可持續的改善方案。"
      },
      {
        icon: DatabaseZap,
        title: "抗老保養方案",
        description: "結合緊緻、更新、補水和定期保養，打造自然不誇張的長期效果。"
      },
      {
        icon: ShieldCheck,
        title: "術後護理指引",
        description: "提供簡單清晰的 aftercare、產品建議和 follow-up 時間，讓效果更穩定。"
      }
    ] satisfies Feature[],
    workflowLabel: "運作方式",
    workflowTitle: "從諮詢到療程效果，每一步都清楚。",
    workflowCopy: "GlowCare 讓第一次諮詢、療程選擇和後續護理都更安心、更有條理。",
    steps: [
      {
        label: "01",
        title: "預約肌膚諮詢",
        description: "分享你的肌膚目標、問題、時間安排和過往療程，團隊會提前了解情況。"
      },
      {
        label: "02",
        title: "確認療程方案",
        description: "與醫美顧問比較不同選項、了解收費和效果，再選擇合適下一步。"
      },
      {
        label: "03",
        title: "療程、修復與保養",
        description: "完成療程後取得 aftercare 指引和 realistic maintenance plan，讓 glow 持續。"
      }
    ],
    pricingLabel: "方案",
    pricingTitle: "預約前先看清楚療程收費。",
    pricingCopy: "你可以先選擇入門療程，也可以預約諮詢後取得個人化建議。",
    popular: "最受歡迎",
    choose: "選擇",
    plans: [
      {
        id: "starter",
        name: "Glow Facial",
        price: "$89",
        period: "/次",
        description: "適合第一次到店、想補水提亮和改善疲倦膚況的客人。",
        includes: ["肌膚檢視", "深層清潔", "補水修護"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Brightening Laser",
        price: "$189",
        period: "/次",
        description: "適合膚色不均、日曬斑、暗沉，以及活動前想提升膚況的客人。",
        includes: ["色素評估", "局部 laser 療程", "Aftercare kit"],
        highlighted: true
      },
      {
        id: "scale",
        name: "Signature Plan",
        price: "$349",
        period: "/方案",
        description: "適合想完整改善質感、亮度和後續保養節奏的客人。",
        includes: ["諮詢", "2 次療程", "效果檢視"],
        highlighted: false
      }
    ],
    reviewsLabel: "客戶評價",
    reviewsTitle: "受到想要自然改善和真誠建議的客人信任。",
    testimonials: [
      {
        quote: "GlowCare 很清楚解釋每一步，也沒有推銷我不需要的療程。幾週後膚況看起來更穩定、更亮。",
        name: "Maya Chen",
        role: "淡斑 laser 客人"
      },
      {
        quote: "諮詢過程很高級也很誠實。我選擇暗瘡方案，是因為顧問給了我很現實的時間表和護理建議。",
        name: "Ethan Brooks",
        role: "暗瘡修復客人"
      },
      {
        quote: "我想在婚禮前讓皮膚自然發光，團隊安排的方案很剛好，沒有過度療程的感覺。",
        name: "Priya Shah",
        role: "Signature plan 客人"
      }
    ],
    demoLabel: "預約諮詢",
    demoTitle: "先從個人化肌膚諮詢開始。",
    demoCopy: "選擇療程方向，分享你的肌膚目標，GlowCare 團隊會建議更安全合適的下一步。",
    demoCards: {
      selectedPlan: "已選療程",
      bestFit: "適合改善",
      bestFitValue: "亮膚、暗瘡、色素、毛孔、抗老",
      demoFocus: "諮詢重點",
      demoFocusValue: "肌膚目標、療程配合、aftercare"
    },
    form: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      email: "電郵",
      emailPlaceholder: "you@example.com",
      company: "電話",
      companyPlaceholder: "你的聯絡電話",
      teamSize: "偏好時段",
      timeOptions: ["本週", "下週", "週末", "未確定"],
      goal: "肌膚目標",
      goalPlaceholder: "例如：淡斑、穩定暗瘡、改善毛孔、活動前提升膚況...",
      send: "送出預約需求",
      copy: "複製需求",
      copied: "已複製"
    },
    faqLabel: "FAQ",
    faqTitle: "第一次療程前常見問題。",
    faqCopy: "關於諮詢、療程適配、修復期和預約安排的清楚答案。",
    faqs: [
      {
        question: "一定要先做諮詢才能預約療程嗎？",
        answer: "建議先諮詢。這可以讓團隊了解你的肌膚狀態、確認療程是否合適、解釋收費，並避免不必要療程。"
      },
      {
        question: "多久可以看到效果？",
        answer: "補水和 glow 類療程通常較快看到清新感；色素、暗瘡和膚質改善通常需要數週和穩定 aftercare。"
      },
      {
        question: "療程會客製化嗎？",
        answer: "會。每個方案都會根據膚質、目標、敏感度、時間安排和過往療程調整。"
      },
      {
        question: "可以為婚禮或活動前安排療程嗎？",
        answer: "可以。諮詢時請告訴我們活動日期，團隊會建議留有修復和 follow-up 空間的時間安排。"
      }
    ],
    finalTitle: "準備讓肌膚更清透、更亮、更被好好照顧？",
    finalCopy: "預約諮詢，了解你的選項，從一個真正適合你的療程方案開始。",
    comparePricing: "查看收費",
    footer: "(c) 2026 GlowCare Aesthetics. All rights reserved.",
    mailSubject: "GlowCare 預約需求",
    requestLabels: {
      plan: "方案",
      name: "姓名",
      email: "電郵",
      company: "電話",
      teamSize: "偏好時段",
      goal: "目標"
    }
  },
  zhHans: {
    nav: [
      { label: "疗程", href: "#features" },
      { label: "流程", href: "#workflow" },
      { label: "收费", href: "#pricing" },
      { label: "评价", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaShort: "预约咨询",
    heroBadge: "专注自然肤质效果的高端医美诊所",
    heroTitle: "用为你设计的疗程，让肌肤更清透、更亮。",
    heroCopy:
      "GlowCare Aesthetics 提供个性化 facial、laser、痘痘护理和肌肤更新疗程，适合想看到明显改善但不想过度改变的客人。",
    heroPrimary: "预约肌肤咨询",
    heroSecondary: "查看疗程",
    trustSignals: ["持牌医美团队", "个性化肌肤方案", "透明疗程收费"],
    trustedBy: "美容与 wellness 合作品牌推荐",
    dashboard: {
      health: "个性化疗程方案",
      headline: "已完成 1,284 次肌肤咨询",
      copy: "第一次到店前，先了解建议疗程、可预约时间、护理步骤和预期改善方向。",
      watch: "立即预约",
      compare: "查看收费",
      stats: [
        ["肌肤分析", "20 分钟", "已包含"],
        ["私人疗程房", "6", "间"],
        ["客户评分", "4.9/5", "已验证"]
      ],
      queueLabel: "本周可预约时间",
      queueTitle: "热门咨询时段",
      queue: [
        "补水 facial 咨询 - 星期三 3:30 PM",
        "淡斑 laser 评估 - 星期五 11:00 AM",
        "痘痘修复方案查看 - 星期六 2:15 PM"
      ]
    },
    featuresLabel: "疗程项目",
    featuresTitle: "热门医美疗程，先咨询再决定。",
    featuresCopy: "适合想安全了解选项、清楚预期效果，并按自身肌肤目标选择疗程的客人。",
    features: [
      {
        icon: Workflow,
        title: "个性化肌肤分析",
        description: "先了解肌肤问题、敏感度、生活习惯和目标，再制定合适疗程方案。"
      },
      {
        icon: Bot,
        title: "淡斑亮肤 laser",
        description: "针对色斑、肤色不均、日晒暗沉和 dullness，配合清晰 aftercare。"
      },
      {
        icon: Link2,
        title: "补水亮肤 facial",
        description: "深层清洁、温和去角质、补水修护和 glow finish，让肌肤看起来更精神。"
      },
      {
        icon: BarChart3,
        title: "痘痘与毛孔护理",
        description: "针对 breakout、粉刺、粗大毛孔和痘印，建立可持续的改善方案。"
      },
      {
        icon: DatabaseZap,
        title: "抗老保养方案",
        description: "结合紧致、更新、补水和定期保养，打造自然不夸张的长期效果。"
      },
      {
        icon: ShieldCheck,
        title: "术后护理指引",
        description: "提供简单清晰的 aftercare、产品建议和 follow-up 时间，让效果更稳定。"
      }
    ] satisfies Feature[],
    workflowLabel: "运作方式",
    workflowTitle: "从咨询到疗程效果，每一步都清楚。",
    workflowCopy: "GlowCare 让第一次咨询、疗程选择和后续护理都更安心、更有条理。",
    steps: [
      {
        label: "01",
        title: "预约肌肤咨询",
        description: "分享你的肌肤目标、问题、时间安排和过往疗程，团队会提前了解情况。"
      },
      {
        label: "02",
        title: "确认疗程方案",
        description: "与医美顾问比较不同选项、了解收费和效果，再选择合适下一步。"
      },
      {
        label: "03",
        title: "疗程、修复与保养",
        description: "完成疗程后取得 aftercare 指引和 realistic maintenance plan，让 glow 持续。"
      }
    ],
    pricingLabel: "价格",
    pricingTitle: "预约前先看清楚疗程收费。",
    pricingCopy: "你可以先选择入门疗程，也可以预约咨询后取得个性化建议。",
    popular: "最受欢迎",
    choose: "选择",
    plans: [
      {
        id: "starter",
        name: "Glow Facial",
        price: "$89",
        period: "/次",
        description: "适合第一次到店、想补水提亮和改善疲倦肤况的客人。",
        includes: ["肌肤查看", "深层清洁", "补水修护"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Brightening Laser",
        price: "$189",
        period: "/次",
        description: "适合肤色不均、日晒斑、暗沉，以及活动前想提升肤况的客人。",
        includes: ["色素评估", "局部 laser 疗程", "Aftercare kit"],
        highlighted: true
      },
      {
        id: "scale",
        name: "Signature Plan",
        price: "$349",
        period: "/方案",
        description: "适合想完整改善质感、亮度和后续保养节奏的客人。",
        includes: ["咨询", "2 次疗程", "效果查看"],
        highlighted: false
      }
    ],
    reviewsLabel: "客户评价",
    reviewsTitle: "受到想要自然改善和真诚建议的客人信任。",
    testimonials: [
      {
        quote: "GlowCare 很清楚解释每一步，也没有推销我不需要的疗程。几周后肤况看起来更稳定、更亮。",
        name: "Maya Chen",
        role: "淡斑 laser 客人"
      },
      {
        quote: "咨询过程很高级也很诚实。我选择痘痘方案，是因为顾问给了我很现实的时间表和护理建议。",
        name: "Ethan Brooks",
        role: "痘痘修复客人"
      },
      {
        quote: "我想在婚礼前让皮肤自然发光，团队安排的方案很刚好，没有过度疗程的感觉。",
        name: "Priya Shah",
        role: "Signature plan 客人"
      }
    ],
    demoLabel: "预约咨询",
    demoTitle: "先从个性化肌肤咨询开始。",
    demoCopy: "选择疗程方向，分享你的肌肤目标，GlowCare 团队会建议更安全合适的下一步。",
    demoCards: {
      selectedPlan: "已选疗程",
      bestFit: "适合改善",
      bestFitValue: "亮肤、痘痘、色素、毛孔、抗老",
      demoFocus: "咨询重点",
      demoFocusValue: "肌肤目标、疗程配合、aftercare"
    },
    form: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      email: "邮箱",
      emailPlaceholder: "you@example.com",
      company: "电话",
      companyPlaceholder: "你的联系电话",
      teamSize: "偏好时段",
      timeOptions: ["本周", "下周", "周末", "未确定"],
      goal: "肌肤目标",
      goalPlaceholder: "例如：淡斑、稳定痘痘、改善毛孔、活动前提升肤况...",
      send: "发送预约需求",
      copy: "复制需求",
      copied: "已复制"
    },
    faqLabel: "FAQ",
    faqTitle: "第一次疗程前常见问题。",
    faqCopy: "关于咨询、疗程适配、修复期和预约安排的清楚答案。",
    faqs: [
      {
        question: "一定要先做咨询才能预约疗程吗？",
        answer: "建议先咨询。这可以让团队了解你的肌肤状态、确认疗程是否合适、解释收费，并避免不必要疗程。"
      },
      {
        question: "多久可以看到效果？",
        answer: "补水和 glow 类疗程通常较快看到清新感；色素、痘痘和肤质改善通常需要数周和稳定 aftercare。"
      },
      {
        question: "疗程会定制化吗？",
        answer: "会。每个方案都会根据肤质、目标、敏感度、时间安排和过往疗程调整。"
      },
      {
        question: "可以为婚礼或活动前安排疗程吗？",
        answer: "可以。咨询时请告诉我们活动日期，团队会建议留有修复和 follow-up 空间的时间安排。"
      }
    ],
    finalTitle: "准备让肌肤更清透、更亮、更被好好照顾？",
    finalCopy: "预约咨询，了解你的选项，从一个真正适合你的疗程方案开始。",
    comparePricing: "查看收费",
    footer: "(c) 2026 GlowCare Aesthetics. All rights reserved.",
    mailSubject: "GlowCare 预约需求",
    requestLabels: {
      plan: "方案",
      name: "姓名",
      email: "邮箱",
      company: "电话",
      teamSize: "偏好时段",
      goal: "目标"
    }
  }
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-skybolt shadow-sm">
      <Sparkles className="h-4 w-4" />
      {children}
    </span>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DashboardPreview({ data }: { data: (typeof content)[Locale]["dashboard"] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
      className="mx-auto mt-12 w-full max-w-6xl rounded-xl border border-slate-200 bg-white p-3 shadow-soft"
    >
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-950">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 sm:block">
            glowcare.com/consultation
          </div>
        </div>

        <div className="dashboard-grid grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 text-left">
            <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
              {data.health}
            </span>
            <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
              {data.headline}
            </h3>
            <p className="mt-4 leading-7 text-white/65">{data.copy}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                <Play className="h-4 w-4 fill-ink" />
                {data.watch}
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                {data.compare}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {data.stats.map(([label, value, note]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-white/55">{label}</p>
                  <p className="mt-3 text-3xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/55">{data.queueLabel}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{data.queueTitle}</h3>
                </div>
                <ClipboardCheck className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {data.queue.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.35 + index * 0.08 }}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.06] p-3 text-sm text-white/75"
                  >
                    <Check className="h-4 w-4 text-emerald-300" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LandingClient() {
  const [locale, setLocale] = useState<Locale>("en");
  const [selectedPlanId, setSelectedPlanId] = useState("growth");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    goal: "",
    teamSize: "This week"
  });

  const t = content[locale];
  const selectedPlan = t.plans.find((plan) => plan.id === selectedPlanId) ?? t.plans[1];

  const requestText = useMemo(
    () =>
      `GlowCare appointment request\n${t.requestLabels.plan}: ${selectedPlan.name}\n${t.requestLabels.name}: ${form.name}\n${t.requestLabels.email}: ${form.email}\n${t.requestLabels.company}: ${form.company}\n${t.requestLabels.teamSize}: ${form.teamSize}\n${t.requestLabels.goal}: ${form.goal}`,
    [form, selectedPlan.name, t.requestLabels]
  );

  function choosePlan(id: string) {
    setSelectedPlanId(id);
    scrollToId("demo");
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(requestText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:hello@glowcare.com?subject=${encodeURIComponent(
        t.mailSubject
      )}&body=${encodeURIComponent(requestText)}`;
    }
  }

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.mailSubject} - ${selectedPlan.name}`);
    const body = encodeURIComponent(requestText);
    window.location.href = `mailto:hello@glowcare.com?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" className="overflow-hidden bg-white">
      <section className="relative bg-hero-mesh px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Zap className="h-4 w-4" />
            </span>
            GlowCare Aesthetics
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-slate-200 bg-white p-1">
              {languageOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setLocale(option.id);
                    setForm((current) => ({
                      ...current,
                      teamSize: content[option.id].form.timeOptions[0]
                    }));
                  }}
                  className={`h-8 min-w-9 rounded-full px-3 text-sm font-semibold transition ${
                    locale === option.id ? "bg-ink text-white" : "text-slate-500 hover:text-ink"
                  }`}
                  aria-pressed={locale === option.id}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <a
              href="#demo"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:inline-flex"
            >
              {t.ctaShort}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>

        <div className="mx-auto max-w-7xl pt-20 text-center lg:pt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>{t.heroBadge}</SectionLabel>
            <h1 className="mx-auto mt-7 max-w-5xl text-balance text-5xl font-bold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              {t.heroCopy}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                {t.heroPrimary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <Gauge className="h-5 w-5" />
                {t.heroSecondary}
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
              {t.trustSignals.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <DashboardPreview data={t.dashboard} />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {t.trustedBy}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-bold text-slate-500"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.featuresLabel}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.featuresTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.featuresCopy}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lavender text-iris">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-ink">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-cloud px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>{t.workflowLabel}</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
                {t.workflowTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{t.workflowCopy}</p>
            </div>
            <div className="grid gap-4">
              {t.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-panel rounded-lg p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
                      {step.label}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.pricingLabel}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.pricingTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.pricingCopy}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.plans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className={`relative rounded-lg border p-8 ${
                  plan.highlighted
                    ? "border-iris bg-ink text-white shadow-glow"
                    : "border-slate-200 bg-white text-ink shadow-sm"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-iris">
                    {t.popular}
                  </span>
                ) : null}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-white/60" : "text-slate-500"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-5 leading-7 ${plan.highlighted ? "text-white/70" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <button
                  type="button"
                  onClick={() => choosePlan(plan.id)}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-ink hover:bg-slate-100"
                      : "bg-ink text-white hover:bg-slate-800"
                  }`}
                >
                  {t.choose} {plan.name}
                </button>
                <div className="mt-8 space-y-4">
                  {plan.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 ${plan.highlighted ? "text-emerald-300" : "text-iris"}`} />
                      <span className={plan.highlighted ? "text-white/80" : "text-slate-700"}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-cloud px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.reviewsLabel}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.reviewsTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {t.testimonials.map((testimonial) => (
              <motion.figure
                key={testimonial.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 leading-8 text-slate-700">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-bold text-ink">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="bg-ink px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>{t.demoLabel}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl">
              {t.demoTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.demoCopy}</p>
            <div className="mt-8 grid gap-3">
              {[
                [t.demoCards.selectedPlan, selectedPlan.name],
                [t.demoCards.bestFit, t.demoCards.bestFitValue],
                [t.demoCards.demoFocus, t.demoCards.demoFocusValue]
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-white/45">{label}</p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submitDemo} className="rounded-lg border border-white/10 bg-white p-6 text-ink shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                {t.form.name}
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.form.namePlaceholder}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                {t.form.email}
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.form.emailPlaceholder}
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.form.company}
              <input
                required
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.form.companyPlaceholder}
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.form.teamSize}
              <select
                value={form.teamSize}
                onChange={(event) => setForm({ ...form, teamSize: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
              >
                {t.form.timeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.form.goal}
              <textarea
                required
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
                className="min-h-32 resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.form.goalPlaceholder}
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-iris px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BE8]"
              >
                <Mail className="h-5 w-5" />
                {t.form.send}
              </button>
              <button
                type="button"
                onClick={copyRequest}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-slate-300"
              >
                <CopyCheck className="h-5 w-5" />
                {copied ? t.form.copied : t.form.copy}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>{t.faqLabel}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.faqTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.faqCopy}</p>
          </div>
          <div className="space-y-4">
            {t.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-ink px-6 py-16 text-center text-white shadow-soft sm:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-white text-iris">
              <Zap className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-normal sm:text-5xl">
              {t.finalTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.finalCopy}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-100"
              >
                {t.ctaShort}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {t.comparePricing}
                <BarChart3 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={() => scrollToId("top")}
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-soft transition hover:-translate-y-1 hover:border-slate-300"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <footer className="px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <a href="#features" className="hover:text-ink">{t.nav[0].label}</a>
            <a href="#pricing" className="hover:text-ink">{t.nav[2].label}</a>
            <a href="#demo" className="hover:text-ink">{t.ctaShort}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
