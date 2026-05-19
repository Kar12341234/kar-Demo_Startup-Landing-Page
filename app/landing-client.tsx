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

const trustedLogos = ["Northstar", "Relay", "Vertex", "Atlas", "Foundry"];

const content = {
  en: {
    nav: [
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaShort: "Book demo",
    heroBadge: "AI productivity platform for startup teams",
    heroTitle: "Automate the work that slows your team down.",
    heroCopy:
      "OpsPilot connects your tools, turns repeated processes into AI-assisted workflows, and gives operators a clear dashboard for execution, blockers, and business efficiency.",
    heroPrimary: "Book a product demo",
    heroSecondary: "Explore features",
    trustSignals: ["10 min setup", "No code workflows", "Founder-friendly pricing"],
    trustedBy: "Trusted by fast-moving teams",
    dashboard: {
      health: "Live workflow health",
      headline: "184 hours saved this month",
      copy:
        "Track active workflows, overdue handoffs, AI summaries, and team capacity from one operating command center.",
      watch: "Watch demo",
      compare: "Compare plans",
      stats: [
        ["Cycle time", "-28%", "improved"],
        ["Open blockers", "12", "flagged"],
        ["Automations", "48", "active"]
      ],
      queueLabel: "Today's AI queue",
      queueTitle: "Recommended actions",
      queue: [
        "Create renewal task for 8 high-intent accounts",
        "Summarize blockers from product standup",
        "Escalate support tickets waiting over 24 hours"
      ]
    },
    featuresLabel: "Features",
    featuresTitle: "A practical AI layer for everyday operations.",
    featuresCopy:
      "Designed for teams that need fewer manual updates, better visibility, and faster decisions across the business.",
    features: [
      {
        icon: Workflow,
        title: "Workflow automation",
        description:
          "Turn recurring handoffs, approvals, and follow-ups into reliable workflows that run in the background."
      },
      {
        icon: Bot,
        title: "AI operations assistant",
        description:
          "Summarize meetings, draft next steps, assign owners, and surface blockers before they slow the team down."
      },
      {
        icon: Link2,
        title: "Tool sync",
        description:
          "Connect Slack, Notion, Linear, HubSpot, Google Workspace, and internal tools without rebuilding your stack."
      },
      {
        icon: BarChart3,
        title: "Performance reporting",
        description:
          "Track cycle time, response speed, workload, saved hours, and revenue impact from a single dashboard."
      },
      {
        icon: DatabaseZap,
        title: "Unified knowledge",
        description:
          "Search across briefs, tickets, docs, CRM notes, and decisions so teams stop asking the same questions."
      },
      {
        icon: ShieldCheck,
        title: "Admin controls",
        description:
          "Manage roles, workspace permissions, approval rules, and audit trails for safer AI-assisted execution."
      }
    ] satisfies Feature[],
    workflowLabel: "How it works",
    workflowTitle: "From scattered work to repeatable execution.",
    workflowCopy:
      "OpsPilot gives teams a clean path from connection to automation to measurable operating improvement.",
    steps: [
      {
        label: "01",
        title: "Connect your operating stack",
        description:
          "Bring in the tools your team already uses and map the data that matters for decisions and handoffs."
      },
      {
        label: "02",
        title: "Design repeatable workflows",
        description:
          "Choose a template or describe the process. OpsPilot builds the task flow, reminders, and approval points."
      },
      {
        label: "03",
        title: "Measure and improve",
        description:
          "Review saved hours, bottlenecks, response times, and workflow ROI so every process gets sharper over time."
      }
    ],
    pricingLabel: "Pricing",
    pricingTitle: "Plans that scale with your workflow maturity.",
    pricingCopy:
      "Start with simple automation, then add reporting, controls, and deeper integrations as the team grows.",
    popular: "Most popular",
    choose: "Choose",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "$39",
        period: "/mo",
        description: "For founders and small teams organizing early operating workflows.",
        includes: ["3 connected tools", "10 AI workflows", "Basic reporting"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Growth",
        price: "$99",
        period: "/mo",
        description: "For growing teams that need automation, visibility, and faster execution.",
        includes: ["Unlimited workflows", "Advanced analytics", "Priority support"],
        highlighted: true
      },
      {
        id: "scale",
        name: "Scale",
        price: "$249",
        period: "/mo",
        description: "For companies that need controls, custom workflows, and cross-team reporting.",
        includes: ["SSO and roles", "Custom integrations", "Dedicated onboarding"],
        highlighted: false
      }
    ],
    reviewsLabel: "Testimonials",
    reviewsTitle: "Built for teams that need momentum, not more meetings.",
    testimonials: [
      {
        quote:
          "OpsPilot replaced our weekly status chase with workflows that update themselves. The team spends more time shipping and less time reporting.",
        name: "Maya Chen",
        role: "COO, Northstar Labs"
      },
      {
        quote:
          "We connected support, sales, and product in one afternoon. The dashboard gave us the operating picture we were missing.",
        name: "Ethan Brooks",
        role: "Founder, RelayStack"
      },
      {
        quote:
          "The AI summaries are practical, not gimmicky. They help every owner know what changed, what is blocked, and what needs action.",
        name: "Priya Shah",
        role: "VP Growth, Aster AI"
      }
    ],
    demoLabel: "Book a demo",
    demoTitle: "See where automation can save your team the most time.",
    demoCopy:
      "Select a plan, share your workflow goal, and get a focused demo around your team's real operating process.",
    demoCards: {
      selectedPlan: "Selected plan",
      bestFit: "Best fit",
      bestFitValue: "Startup operations, AI workflow, SaaS teams",
      demoFocus: "Demo focus",
      demoFocusValue: "Automation, productivity, reporting"
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      company: "Company",
      companyPlaceholder: "Company name",
      teamSize: "Team size",
      goal: "Workflow goal",
      goalPlaceholder:
        "Example: automate onboarding tasks, summarize support escalations, improve sales follow-up...",
      send: "Send demo request",
      copy: "Copy request",
      copied: "Request copied"
    },
    faqLabel: "FAQ",
    faqTitle: "Questions before adding AI to operations.",
    faqCopy: "Clear answers for evaluating automation, team adoption, and technical fit.",
    faqs: [
      {
        question: "Can OpsPilot work with our current tools?",
        answer:
          "Yes. OpsPilot is designed to sit on top of your existing stack and connect common tools such as Slack, Notion, Linear, HubSpot, and Google Workspace."
      },
      {
        question: "Do we need engineers to build workflows?",
        answer:
          "No. Most workflows can be created from templates or natural-language instructions. Technical teams can add custom rules when needed."
      },
      {
        question: "What kind of teams is this best for?",
        answer:
          "OpsPilot is best for startup operators, SaaS teams, agencies, and growing companies that need repeatable workflows across sales, support, product, and operations."
      },
      {
        question: "Is this ready for business use?",
        answer:
          "This portfolio demo shows a production-style landing page experience with responsive UI, functional CTAs, pricing selection, and a demo request flow."
      }
    ],
    finalTitle: "Ready to run operations with less manual work?",
    finalCopy:
      "Connect your tools, automate repeatable workflows, and give every team the context they need to execute faster.",
    comparePricing: "Compare pricing",
    footer: "(c) 2026 OpsPilot AI. Startup SaaS landing page demo.",
    mailSubject: "OpsPilot demo request",
    requestLabels: {
      plan: "Plan",
      name: "Name",
      email: "Email",
      company: "Company",
      teamSize: "Team size",
      goal: "Goal"
    }
  },
  zhHant: {
    nav: [
      { label: "功能", href: "#features" },
      { label: "流程", href: "#workflow" },
      { label: "方案", href: "#pricing" },
      { label: "評價", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaShort: "預約示範",
    heroBadge: "為 Startup 團隊打造的 AI 生產力平台",
    heroTitle: "把拖慢團隊的重複工作自動化。",
    heroCopy:
      "OpsPilot 串接你的日常工具，將重複流程變成 AI 輔助工作流，讓營運、專案與銷售團隊用同一個儀表板掌握執行進度、阻塞點與效率成果。",
    heroPrimary: "預約產品示範",
    heroSecondary: "查看功能",
    trustSignals: ["10 分鐘完成設定", "免程式工作流", "適合新創團隊定價"],
    trustedBy: "受到高速成長團隊信任",
    dashboard: {
      health: "即時工作流健康度",
      headline: "本月已節省 184 小時",
      copy: "從同一個營運中樞追蹤活躍流程、逾期交接、AI 摘要與團隊負載。",
      watch: "觀看示範",
      compare: "比較方案",
      stats: [
        ["週期時間", "-28%", "已改善"],
        ["待處理阻塞", "12", "已標記"],
        ["自動化流程", "48", "運行中"]
      ],
      queueLabel: "今日 AI 佇列",
      queueTitle: "建議處理事項",
      queue: [
        "為 8 個高意向客戶建立續約任務",
        "整理產品站會中的阻塞與後續行動",
        "升級等待超過 24 小時的客服票"
      ]
    },
    featuresLabel: "核心功能",
    featuresTitle: "把 AI 真正放進日常營運流程。",
    featuresCopy: "適合需要減少手動追蹤、提升透明度，並加快跨部門決策的團隊。",
    features: [
      {
        icon: Workflow,
        title: "工作流自動化",
        description: "把交接、審批、提醒與跟進變成可靠流程，讓系統在背景自動推進。"
      },
      {
        icon: Bot,
        title: "AI 營運助理",
        description: "自動整理會議、產生下一步、分配負責人，並在問題拖慢團隊前提醒。"
      },
      {
        icon: Link2,
        title: "工具串接",
        description: "連接 Slack、Notion、Linear、HubSpot、Google Workspace 與內部工具。"
      },
      {
        icon: BarChart3,
        title: "績效報告",
        description: "用同一個 dashboard 追蹤週期時間、回應速度、工作量、節省時數與收益影響。"
      },
      {
        icon: DatabaseZap,
        title: "統一知識庫",
        description: "跨文件、票務、CRM 記錄與決策內容搜尋，減少團隊重複提問。"
      },
      {
        icon: ShieldCheck,
        title: "管理權限",
        description: "管理角色、權限、審批規則與稽核紀錄，讓 AI 輔助執行更安全。"
      }
    ] satisfies Feature[],
    workflowLabel: "運作方式",
    workflowTitle: "把分散工作變成可複製的執行系統。",
    workflowCopy: "從工具串接、自動化設定到成效追蹤，OpsPilot 讓營運改善變得清楚可衡量。",
    steps: [
      {
        label: "01",
        title: "串接你的營運工具",
        description: "導入團隊已在使用的工具，並整理決策與交接最需要的資料。"
      },
      {
        label: "02",
        title: "建立可重複工作流",
        description: "選擇範本或描述流程，OpsPilot 會建立任務、提醒與審批節點。"
      },
      {
        label: "03",
        title: "追蹤成效並持續優化",
        description: "查看節省時數、瓶頸、回應時間與流程 ROI，讓每個流程越跑越準。"
      }
    ],
    pricingLabel: "方案",
    pricingTitle: "隨團隊自動化成熟度擴展。",
    pricingCopy: "先從簡單自動化開始，再逐步加入報告、權限控制與更深入的整合。",
    popular: "最受歡迎",
    choose: "選擇",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "$39",
        period: "/月",
        description: "適合創辦人與小型團隊整理早期營運流程。",
        includes: ["3 個工具串接", "10 個 AI 工作流", "基礎報告"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Growth",
        price: "$99",
        period: "/月",
        description: "適合需要自動化、透明度與快速執行的成長團隊。",
        includes: ["不限工作流", "進階分析", "優先支援"],
        highlighted: true
      },
      {
        id: "scale",
        name: "Scale",
        price: "$249",
        period: "/月",
        description: "適合需要權限、客製流程與跨團隊報告的公司。",
        includes: ["SSO 與角色權限", "客製整合", "專屬導入"],
        highlighted: false
      }
    ],
    reviewsLabel: "客戶評價",
    reviewsTitle: "為需要推進速度，而不是更多會議的團隊打造。",
    testimonials: [
      {
        quote: "OpsPilot 讓我們不用每週追狀態，流程會自己更新。團隊把更多時間放在交付，而不是回報。",
        name: "Maya Chen",
        role: "COO, Northstar Labs"
      },
      {
        quote: "我們一個下午就把客服、銷售和產品串起來。dashboard 讓我們看到以前缺少的營運全貌。",
        name: "Ethan Brooks",
        role: "Founder, RelayStack"
      },
      {
        quote: "AI 摘要很實用，不是噱頭。每位負責人都知道變更、阻塞和下一步行動。",
        name: "Priya Shah",
        role: "VP Growth, Aster AI"
      }
    ],
    demoLabel: "預約示範",
    demoTitle: "看看哪些自動化最能幫你的團隊省時間。",
    demoCopy: "選擇方案，分享你的流程目標，我們會根據真實營運情境安排產品示範。",
    demoCards: {
      selectedPlan: "已選方案",
      bestFit: "最適合",
      bestFitValue: "Startup 營運、AI 工作流、SaaS 團隊",
      demoFocus: "示範重點",
      demoFocusValue: "自動化、生產力、報告"
    },
    form: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      email: "電郵",
      emailPlaceholder: "you@example.com",
      company: "公司",
      companyPlaceholder: "公司名稱",
      teamSize: "團隊規模",
      goal: "流程目標",
      goalPlaceholder: "例如：自動化 onboarding、整理客服升級、改善銷售跟進...",
      send: "送出示範需求",
      copy: "複製需求",
      copied: "已複製"
    },
    faqLabel: "FAQ",
    faqTitle: "導入 AI 營運前常見問題。",
    faqCopy: "幫你評估自動化、團隊採用與技術整合是否合適。",
    faqs: [
      {
        question: "OpsPilot 可以配合我們現有工具嗎？",
        answer: "可以。OpsPilot 設計成疊加在現有工作流程上，可串接 Slack、Notion、Linear、HubSpot、Google Workspace 等常用工具。"
      },
      {
        question: "建立工作流需要工程師嗎？",
        answer: "不需要。大多數流程可用範本或自然語言建立；技術團隊也可加入客製規則。"
      },
      {
        question: "最適合哪些團隊？",
        answer: "適合 Startup 營運團隊、SaaS 團隊、agency 和需要在銷售、客服、產品、營運之間建立可重複流程的成長公司。"
      },
      {
        question: "這個頁面是否有商業產品感？",
        answer: "這是一個 portfolio demo，但以正式 SaaS 產品 landing page 的方式製作，包含 responsive UI、可用 CTA、方案選擇與 demo request 流程。"
      }
    ],
    finalTitle: "準備用更少手動工作推進營運？",
    finalCopy: "串接工具、自動化重複流程，讓每個團隊都得到更清晰的執行脈絡。",
    comparePricing: "比較方案",
    footer: "(c) 2026 OpsPilot AI. Startup SaaS landing page demo.",
    mailSubject: "OpsPilot 示範需求",
    requestLabels: {
      plan: "方案",
      name: "姓名",
      email: "電郵",
      company: "公司",
      teamSize: "團隊規模",
      goal: "目標"
    }
  },
  zhHans: {
    nav: [
      { label: "功能", href: "#features" },
      { label: "流程", href: "#workflow" },
      { label: "价格", href: "#pricing" },
      { label: "评价", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    ctaShort: "预约演示",
    heroBadge: "为 Startup 团队打造的 AI 生产力平台",
    heroTitle: "把拖慢团队的重复工作自动化。",
    heroCopy:
      "OpsPilot 连接你的日常工具，将重复流程变成 AI 辅助工作流，让运营、项目与销售团队用同一个仪表盘掌握执行进度、阻塞点与效率成果。",
    heroPrimary: "预约产品演示",
    heroSecondary: "查看功能",
    trustSignals: ["10 分钟完成设置", "免代码工作流", "适合初创团队定价"],
    trustedBy: "受到高速成长团队信任",
    dashboard: {
      health: "实时工作流健康度",
      headline: "本月已节省 184 小时",
      copy: "从同一个运营中枢追踪活跃流程、逾期交接、AI 摘要与团队负载。",
      watch: "观看演示",
      compare: "比较方案",
      stats: [
        ["周期时间", "-28%", "已改善"],
        ["待处理阻塞", "12", "已标记"],
        ["自动化流程", "48", "运行中"]
      ],
      queueLabel: "今日 AI 队列",
      queueTitle: "建议处理事项",
      queue: [
        "为 8 个高意向客户建立续约任务",
        "整理产品站会中的阻塞与后续行动",
        "升级等待超过 24 小时的客服票"
      ]
    },
    featuresLabel: "核心功能",
    featuresTitle: "把 AI 真正放进日常运营流程。",
    featuresCopy: "适合需要减少手动追踪、提升透明度，并加快跨部门决策的团队。",
    features: [
      {
        icon: Workflow,
        title: "工作流自动化",
        description: "把交接、审批、提醒与跟进变成可靠流程，让系统在后台自动推进。"
      },
      {
        icon: Bot,
        title: "AI 运营助理",
        description: "自动整理会议、生成下一步、分配负责人，并在问题拖慢团队前提醒。"
      },
      {
        icon: Link2,
        title: "工具连接",
        description: "连接 Slack、Notion、Linear、HubSpot、Google Workspace 与内部工具。"
      },
      {
        icon: BarChart3,
        title: "绩效报告",
        description: "用同一个 dashboard 追踪周期时间、响应速度、工作量、节省时数与收益影响。"
      },
      {
        icon: DatabaseZap,
        title: "统一知识库",
        description: "跨文件、票务、CRM 记录与决策内容搜索，减少团队重复提问。"
      },
      {
        icon: ShieldCheck,
        title: "管理权限",
        description: "管理角色、权限、审批规则与审计记录，让 AI 辅助执行更安全。"
      }
    ] satisfies Feature[],
    workflowLabel: "运作方式",
    workflowTitle: "把分散工作变成可复制的执行系统。",
    workflowCopy: "从工具连接、自动化设置到成效追踪，OpsPilot 让运营改善变得清楚可衡量。",
    steps: [
      {
        label: "01",
        title: "连接你的运营工具",
        description: "导入团队已在使用的工具，并整理决策与交接最需要的数据。"
      },
      {
        label: "02",
        title: "建立可重复工作流",
        description: "选择模板或描述流程，OpsPilot 会建立任务、提醒与审批节点。"
      },
      {
        label: "03",
        title: "追踪成效并持续优化",
        description: "查看节省时数、瓶颈、响应时间与流程 ROI，让每个流程越跑越准。"
      }
    ],
    pricingLabel: "价格",
    pricingTitle: "随团队自动化成熟度扩展。",
    pricingCopy: "先从简单自动化开始，再逐步加入报告、权限控制与更深入的整合。",
    popular: "最受欢迎",
    choose: "选择",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "$39",
        period: "/月",
        description: "适合创始人与小型团队整理早期运营流程。",
        includes: ["3 个工具连接", "10 个 AI 工作流", "基础报告"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Growth",
        price: "$99",
        period: "/月",
        description: "适合需要自动化、透明度与快速执行的成长团队。",
        includes: ["不限工作流", "高级分析", "优先支持"],
        highlighted: true
      },
      {
        id: "scale",
        name: "Scale",
        price: "$249",
        period: "/月",
        description: "适合需要权限、定制流程与跨团队报告的公司。",
        includes: ["SSO 与角色权限", "定制整合", "专属导入"],
        highlighted: false
      }
    ],
    reviewsLabel: "客户评价",
    reviewsTitle: "为需要推进速度，而不是更多会议的团队打造。",
    testimonials: [
      {
        quote: "OpsPilot 让我们不用每周追状态，流程会自己更新。团队把更多时间放在交付，而不是汇报。",
        name: "Maya Chen",
        role: "COO, Northstar Labs"
      },
      {
        quote: "我们一个下午就把客服、销售和产品连接起来。dashboard 让我们看到以前缺少的运营全貌。",
        name: "Ethan Brooks",
        role: "Founder, RelayStack"
      },
      {
        quote: "AI 摘要很实用，不是噱头。每位负责人都知道变更、阻塞和下一步行动。",
        name: "Priya Shah",
        role: "VP Growth, Aster AI"
      }
    ],
    demoLabel: "预约演示",
    demoTitle: "看看哪些自动化最能帮你的团队省时间。",
    demoCopy: "选择方案，分享你的流程目标，我们会根据真实运营情境安排产品演示。",
    demoCards: {
      selectedPlan: "已选方案",
      bestFit: "最适合",
      bestFitValue: "Startup 运营、AI 工作流、SaaS 团队",
      demoFocus: "演示重点",
      demoFocusValue: "自动化、生产力、报告"
    },
    form: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      email: "邮箱",
      emailPlaceholder: "you@example.com",
      company: "公司",
      companyPlaceholder: "公司名称",
      teamSize: "团队规模",
      goal: "流程目标",
      goalPlaceholder: "例如：自动化 onboarding、整理客服升级、改善销售跟进...",
      send: "发送演示需求",
      copy: "复制需求",
      copied: "已复制"
    },
    faqLabel: "FAQ",
    faqTitle: "导入 AI 运营前常见问题。",
    faqCopy: "帮你评估自动化、团队采用与技术整合是否合适。",
    faqs: [
      {
        question: "OpsPilot 可以配合我们现有工具吗？",
        answer: "可以。OpsPilot 设计成叠加在现有工作流程上，可连接 Slack、Notion、Linear、HubSpot、Google Workspace 等常用工具。"
      },
      {
        question: "建立工作流需要工程师吗？",
        answer: "不需要。大多数流程可用模板或自然语言建立；技术团队也可加入定制规则。"
      },
      {
        question: "最适合哪些团队？",
        answer: "适合 Startup 运营团队、SaaS 团队、agency 和需要在销售、客服、产品、运营之间建立可重复流程的成长公司。"
      },
      {
        question: "这个页面是否有商业产品感？",
        answer: "这是一个 portfolio demo，但以正式 SaaS 产品 landing page 的方式制作，包含 responsive UI、可用 CTA、方案选择与 demo request 流程。"
      }
    ],
    finalTitle: "准备好用更少手动工作推进运营？",
    finalCopy: "连接工具、自动化重复流程，让每个团队都得到更清晰的执行脉络。",
    comparePricing: "比较方案",
    footer: "(c) 2026 OpsPilot AI. Startup SaaS landing page demo.",
    mailSubject: "OpsPilot 演示需求",
    requestLabels: {
      plan: "方案",
      name: "姓名",
      email: "邮箱",
      company: "公司",
      teamSize: "团队规模",
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
            opspilot.ai/dashboard
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
    teamSize: "11-50"
  });

  const t = content[locale];
  const selectedPlan = t.plans.find((plan) => plan.id === selectedPlanId) ?? t.plans[1];

  const requestText = useMemo(
    () =>
      `OpsPilot demo request\n${t.requestLabels.plan}: ${selectedPlan.name}\n${t.requestLabels.name}: ${form.name}\n${t.requestLabels.email}: ${form.email}\n${t.requestLabels.company}: ${form.company}\n${t.requestLabels.teamSize}: ${form.teamSize}\n${t.requestLabels.goal}: ${form.goal}`,
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
      window.location.href = `mailto:hello@opspilot.ai?subject=${encodeURIComponent(
        t.mailSubject
      )}&body=${encodeURIComponent(requestText)}`;
    }
  }

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.mailSubject} - ${selectedPlan.name}`);
    const body = encodeURIComponent(requestText);
    window.location.href = `mailto:hello@opspilot.ai?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" className="overflow-hidden bg-white">
      <section className="relative bg-hero-mesh px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Zap className="h-4 w-4" />
            </span>
            OpsPilot AI
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
                  onClick={() => setLocale(option.id)}
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
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>200+</option>
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
