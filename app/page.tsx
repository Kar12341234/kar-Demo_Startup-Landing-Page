"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  BellRing,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  CopyCheck,
  CreditCard,
  Inbox,
  Mail,
  MessageSquareText,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Zap
} from "lucide-react";

type Locale = "en" | "zhTW" | "zhCN";

const localeOptions: Array<{ id: Locale; label: string }> = [
  { id: "en", label: "EN" },
  { id: "zhTW", label: "繁" },
  { id: "zhCN", label: "简" }
];

const featureIcons = [
  CalendarCheck,
  MessageSquareText,
  BellRing,
  CreditCard,
  UsersRound,
  BarChart3
];

const content = {
  en: {
    nav: [
      { label: "Product", href: "#product" },
      { label: "Workflow", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "Book demo",
    hero: {
      label: "Booking CRM for service teams",
      title: "Fill your calendar, follow up faster, and keep every client in one clean workspace.",
      body:
        "ClientFlow helps studios, clinics, coaches, consultants, and local service teams turn website visitors into booked appointments without messy spreadsheets or missed replies.",
      primary: "Book a live demo",
      secondary: "See pricing",
      proof: ["No credit card required", "Works on mobile", "Setup in one afternoon"]
    },
    preview: {
      browser: "clientflow.app/dashboard",
      badge: "This week",
      title: "23 new bookings",
      body: "See upcoming appointments, open follow-ups, payments, and client notes from one dashboard.",
      primary: "Schedule demo",
      secondary: "View plans",
      metrics: [
        ["Reply time", "8 min", "avg"],
        ["No-shows", "-31%", "month"],
        ["Revenue", "$18.4k", "tracked"]
      ],
      queueTitle: "Today’s client queue",
      queue: ["New lead from pricing page", "Invoice paid by Olivia Chen", "Reminder sent for 3:30 PM"]
    },
    product: {
      label: "Product",
      title: "Everything a service business needs before and after the booking.",
      body:
        "ClientFlow combines booking pages, client records, reminders, follow-up messages, and simple reporting so your team can stay focused on service.",
      items: [
        {
          title: "Online booking pages",
          description: "Let clients choose services, times, team members, and locations from a polished booking flow."
        },
        {
          title: "Client conversations",
          description: "Keep email, SMS notes, intake details, and follow-up history attached to every client profile."
        },
        {
          title: "Automatic reminders",
          description: "Reduce no-shows with confirmation messages, appointment reminders, and post-visit follow-ups."
        },
        {
          title: "Deposits and invoices",
          description: "Collect deposits, send payment links, and track paid or overdue balances before appointments."
        },
        {
          title: "Team scheduling",
          description: "Manage staff availability, private notes, service durations, buffers, and recurring sessions."
        },
        {
          title: "Simple performance reports",
          description: "Understand bookings, source quality, repeat clients, cancellations, and monthly revenue trends."
        }
      ]
    },
    workflow: {
      label: "Workflow",
      title: "From first visit to paid appointment in three simple steps.",
      body: "A practical flow for teams that want fewer admin tasks and more confirmed clients.",
      steps: [
        {
          label: "01",
          title: "Publish your booking page",
          description: "Add your services, availability, intake questions, and brand details in one guided setup."
        },
        {
          label: "02",
          title: "Capture and qualify leads",
          description: "Every enquiry lands in a client timeline with source, service interest, notes, and next action."
        },
        {
          label: "03",
          title: "Confirm, remind, and follow up",
          description: "Send reminders, collect deposits, and trigger follow-up messages after the appointment."
        }
      ]
    },
    pricingSection: {
      label: "Pricing",
      title: "Plans for solo providers, small teams, and growing locations.",
      body: "Start with the basics, then add automation, payments, and multi-location reporting when you need it.",
      popular: "Popular",
      select: "Choose"
    },
    pricing: [
      {
        id: "solo",
        name: "Solo",
        price: "$19",
        period: "/mo",
        description: "For independent providers who need a clean booking page and reminders.",
        includes: ["1 user", "Booking page", "Email reminders"],
        highlighted: false
      },
      {
        id: "studio",
        name: "Studio",
        price: "$49",
        period: "/mo",
        description: "For small teams that need shared calendars, follow-ups, and deposits.",
        includes: ["5 users", "SMS reminders", "Deposits and invoices"],
        highlighted: true
      },
      {
        id: "growth",
        name: "Growth",
        price: "$129",
        period: "/mo",
        description: "For busy service businesses with multiple services, teams, or locations.",
        includes: ["Unlimited users", "Advanced reporting", "Priority support"],
        highlighted: false
      }
    ],
    reviews: {
      label: "Reviews",
      title: "Built for teams that live by their calendar.",
      testimonials: [
        {
          quote:
            "We stopped losing leads in DMs. Clients book, pay a deposit, and receive reminders without our front desk chasing them.",
          name: "Maya Lin",
          role: "Owner, Glow Skin Studio"
        },
        {
          quote:
            "The dashboard is simple enough for our team to use every day. It replaced three tools and a lot of copy-paste work.",
          name: "Ryan Brooks",
          role: "Founder, Brookside Therapy"
        },
        {
          quote:
            "ClientFlow made our follow-up process consistent. Repeat bookings became easier to track within the first month.",
          name: "Sofia Martinez",
          role: "Operations Lead, Elevate Coaching"
        }
      ]
    },
    demo: {
      label: "Book a demo",
      title: "See how ClientFlow would fit your service business.",
      body:
        "Pick a plan, share your business details, and we will prepare a focused demo around your booking workflow.",
      selectedPlan: "Selected plan",
      highlights: [
        ["Typical setup", "Same day for most small teams"],
        ["Best fit", "Appointment-based services and consultations"]
      ],
      labels: {
        name: "Name",
        email: "Email",
        business: "Business type",
        teamSize: "Team size",
        goal: "What do you want to improve?"
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        business: "Studio, clinic, coaching, consulting...",
        goal: "Example: reduce missed enquiries, collect deposits, send reminders..."
      },
      teamSizes: [
        { id: "solo", label: "Just me" },
        { id: "small", label: "2-5 people" },
        { id: "team", label: "6+ people" }
      ],
      submit: "Send demo request",
      copy: "Copy request",
      copied: "Request copied",
      emailSubject: "ClientFlow demo request",
      emailLabels: {
        plan: "Plan",
        name: "Name",
        email: "Email",
        business: "Business type",
        teamSize: "Team size",
        goal: "Goal"
      }
    },
    faq: {
      label: "FAQ",
      title: "Questions before switching your booking workflow.",
      body: "ClientFlow is designed to be simple enough for daily use and flexible enough for real service operations.",
      items: [
        {
          question: "Can clients book directly from our website?",
          answer:
            "Yes. You can link to a hosted booking page or embed the booking flow into your existing website."
        },
        {
          question: "Does it support deposits?",
          answer:
            "Yes. The Studio and Growth plans support deposits, payment links, and invoice tracking."
        },
        {
          question: "Can our team manage separate calendars?",
          answer:
            "Yes. Each staff member can have availability, services, buffers, and private appointment notes."
        },
        {
          question: "Can we import existing clients?",
          answer:
            "Yes. You can import a CSV list or add clients manually as you move your booking workflow into ClientFlow."
        }
      ]
    },
    finalCta: {
      title: "Ready to make every enquiry easier to book?",
      body:
        "Start with one booking page, one client inbox, and one reliable workflow your team can actually use.",
      primary: "Book a demo",
      secondary: "Compare plans"
    },
    footer: "(c) 2026 ClientFlow. Booking CRM for modern service teams."
  },
  zhTW: {
    nav: [
      { label: "產品", href: "#product" },
      { label: "流程", href: "#workflow" },
      { label: "價格", href: "#pricing" },
      { label: "評價", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "預約 Demo",
    hero: {
      label: "為服務型團隊打造的預約 CRM",
      title: "填滿你的預約表，更快跟進客戶，並把所有客戶資料放在一個清晰工作台。",
      body:
        "ClientFlow 幫助工作室、診所、教練、顧問和本地服務團隊，把網站訪客轉化為已確認預約，告別混亂表格和漏回訊息。",
      primary: "預約產品 Demo",
      secondary: "查看價格",
      proof: ["無需信用卡", "手機可用", "半天內可完成設定"]
    },
    preview: {
      browser: "clientflow.app/dashboard",
      badge: "本週",
      title: "23 個新預約",
      body: "在同一個 dashboard 查看即將到來的預約、待跟進客戶、付款和客戶備註。",
      primary: "預約 Demo",
      secondary: "查看方案",
      metrics: [
        ["回覆時間", "8 分鐘", "平均"],
        ["缺席率", "-31%", "本月"],
        ["營收", "$18.4k", "已追蹤"]
      ],
      queueTitle: "今日客戶隊列",
      queue: ["來自價格頁的新 lead", "Olivia Chen 已付款", "已發送 3:30 PM 預約提醒"]
    },
    product: {
      label: "產品",
      title: "服務商家在預約前後需要的工具，都放在一起。",
      body:
        "ClientFlow 結合預約頁、客戶資料、提醒、跟進訊息和簡明報表，讓團隊專注在服務客戶。",
      items: [
        {
          title: "線上預約頁",
          description: "讓客戶自行選擇服務、時間、團隊成員和地點，完成順暢預約流程。"
        },
        {
          title: "客戶對話紀錄",
          description: "Email、SMS 備註、問卷資料和跟進紀錄都附在每個客戶檔案裡。"
        },
        {
          title: "自動提醒",
          description: "用確認訊息、預約提醒和服務後跟進，減少缺席和人工追訊息。"
        },
        {
          title: "訂金和發票",
          description: "收取訂金、發送付款連結，並在預約前追蹤已付和未付金額。"
        },
        {
          title: "團隊排程",
          description: "管理員工可預約時間、內部備註、服務時長、緩衝時間和固定課程。"
        },
        {
          title: "簡明營運報表",
          description: "了解預約數、來源品質、回訪客戶、取消率和每月營收變化。"
        }
      ]
    },
    workflow: {
      label: "流程",
      title: "從第一次訪問到完成付費預約，只需要三步。",
      body: "適合想減少行政工作、增加確認預約的服務型團隊。",
      steps: [
        {
          label: "01",
          title: "發布你的預約頁",
          description: "加入服務項目、可預約時間、預約問題和品牌資料，完成引導式設定。"
        },
        {
          label: "02",
          title: "收集並篩選客戶",
          description: "每個 enquiry 都會進入客戶時間線，包含來源、感興趣服務、備註和下一步。"
        },
        {
          label: "03",
          title: "確認、提醒和跟進",
          description: "發送提醒、收取訂金，並在預約後自動觸發跟進訊息。"
        }
      ]
    },
    pricingSection: {
      label: "價格",
      title: "適合個人服務者、小團隊和成長型門店的方案。",
      body: "從基本預約開始，需要時再加入自動提醒、付款和多地點報表。",
      popular: "熱門",
      select: "選擇"
    },
    pricing: [
      {
        id: "solo",
        name: "Solo",
        price: "$19",
        period: "/月",
        description: "適合需要乾淨預約頁和提醒功能的個人服務者。",
        includes: ["1 位使用者", "預約頁", "Email 提醒"],
        highlighted: false
      },
      {
        id: "studio",
        name: "Studio",
        price: "$49",
        period: "/月",
        description: "適合需要共享日曆、跟進流程和訂金的小型團隊。",
        includes: ["5 位使用者", "SMS 提醒", "訂金和發票"],
        highlighted: true
      },
      {
        id: "growth",
        name: "Growth",
        price: "$129",
        period: "/月",
        description: "適合有多項服務、多位員工或多門店的繁忙服務商家。",
        includes: ["不限使用者", "進階報表", "優先支援"],
        highlighted: false
      }
    ],
    reviews: {
      label: "評價",
      title: "為每天依靠預約表營運的團隊打造。",
      testimonials: [
        {
          quote: "我們不再把 lead 丟在 DM 裡。客戶可以自行預約、付訂金、收到提醒，前台不用一直追。",
          name: "Maya Lin",
          role: "Glow Skin Studio 店主"
        },
        {
          quote: "Dashboard 足夠簡單，團隊每天都願意用。它取代了三個工具和大量複製貼上。",
          name: "Ryan Brooks",
          role: "Brookside Therapy 創辦人"
        },
        {
          quote: "ClientFlow 讓跟進流程變得穩定。第一個月我們就更容易追蹤回訪預約。",
          name: "Sofia Martinez",
          role: "Elevate Coaching 營運主管"
        }
      ]
    },
    demo: {
      label: "預約 Demo",
      title: "看看 ClientFlow 如何適配你的服務業務。",
      body: "選擇方案，留下你的業務資料，我們會根據你的預約流程準備一個聚焦 demo。",
      selectedPlan: "已選方案",
      highlights: [
        ["一般設定", "多數小團隊可當天完成"],
        ["最適合", "預約制服務和諮詢業務"]
      ],
      labels: {
        name: "姓名",
        email: "Email",
        business: "業務類型",
        teamSize: "團隊人數",
        goal: "你想改善什麼？"
      },
      placeholders: {
        name: "你的姓名",
        email: "you@example.com",
        business: "工作室、診所、教練、顧問...",
        goal: "例：減少漏回 enquiry、收訂金、發送提醒..."
      },
      teamSizes: [
        { id: "solo", label: "只有我" },
        { id: "small", label: "2-5 人" },
        { id: "team", label: "6 人以上" }
      ],
      submit: "送出 Demo 需求",
      copy: "複製需求",
      copied: "已複製",
      emailSubject: "ClientFlow Demo 預約需求",
      emailLabels: {
        plan: "方案",
        name: "姓名",
        email: "Email",
        business: "業務類型",
        teamSize: "團隊人數",
        goal: "目標"
      }
    },
    faq: {
      label: "FAQ",
      title: "切換預約流程前常見問題。",
      body: "ClientFlow 設計得足夠簡單，可以每天使用，也足夠彈性，能支援真實服務營運。",
      items: [
        {
          question: "客戶可以直接在我們網站預約嗎？",
          answer: "可以。你可以連到 hosted booking page，也可以把預約流程嵌入現有網站。"
        },
        {
          question: "支援收訂金嗎？",
          answer: "支援。Studio 和 Growth 方案支援訂金、付款連結和發票追蹤。"
        },
        {
          question: "團隊可以管理不同日曆嗎？",
          answer: "可以。每位員工都可以設定可預約時間、服務項目、緩衝時間和內部備註。"
        },
        {
          question: "可以匯入現有客戶嗎？",
          answer: "可以。你可以匯入 CSV 名單，也可以在轉移預約流程時手動新增客戶。"
        }
      ]
    },
    finalCta: {
      title: "準備讓每個 enquiry 更容易變成預約嗎？",
      body: "從一個預約頁、一個客戶 inbox 和一套團隊真正會用的流程開始。",
      primary: "預約 Demo",
      secondary: "比較方案"
    },
    footer: "(c) 2026 ClientFlow. 為現代服務型團隊打造的預約 CRM。"
  },
  zhCN: {
    nav: [
      { label: "产品", href: "#product" },
      { label: "流程", href: "#workflow" },
      { label: "价格", href: "#pricing" },
      { label: "评价", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "预约 Demo",
    hero: {
      label: "为服务型团队打造的预约 CRM",
      title: "填满你的预约表，更快跟进客户，并把所有客户资料放在一个清晰工作台。",
      body:
        "ClientFlow 帮助工作室、诊所、教练、顾问和本地服务团队，把网站访客转化为已确认预约，告别混乱表格和漏回消息。",
      primary: "预约产品 Demo",
      secondary: "查看价格",
      proof: ["无需信用卡", "移动端可用", "半天内可完成设置"]
    },
    preview: {
      browser: "clientflow.app/dashboard",
      badge: "本周",
      title: "23 个新预约",
      body: "在同一个 dashboard 查看即将到来的预约、待跟进客户、付款和客户备注。",
      primary: "预约 Demo",
      secondary: "查看套餐",
      metrics: [
        ["回复时间", "8 分钟", "平均"],
        ["缺席率", "-31%", "本月"],
        ["营收", "$18.4k", "已追踪"]
      ],
      queueTitle: "今日客户队列",
      queue: ["来自价格页的新 lead", "Olivia Chen 已付款", "已发送 3:30 PM 预约提醒"]
    },
    product: {
      label: "产品",
      title: "服务商家在预约前后需要的工具，都放在一起。",
      body:
        "ClientFlow 结合预约页、客户资料、提醒、跟进消息和简明报表，让团队专注在服务客户。",
      items: [
        {
          title: "线上预约页",
          description: "让客户自行选择服务、时间、团队成员和地点，完成顺畅预约流程。"
        },
        {
          title: "客户对话记录",
          description: "Email、SMS 备注、问卷资料和跟进记录都附在每个客户档案里。"
        },
        {
          title: "自动提醒",
          description: "用确认消息、预约提醒和服务后跟进，减少缺席和人工追消息。"
        },
        {
          title: "订金和发票",
          description: "收取订金、发送付款链接，并在预约前追踪已付和未付金额。"
        },
        {
          title: "团队排程",
          description: "管理员工可预约时间、内部备注、服务时长、缓冲时间和固定课程。"
        },
        {
          title: "简明运营报表",
          description: "了解预约数、来源质量、回访客户、取消率和每月营收变化。"
        }
      ]
    },
    workflow: {
      label: "流程",
      title: "从第一次访问到完成付费预约，只需要三步。",
      body: "适合想减少行政工作、增加确认预约的服务型团队。",
      steps: [
        {
          label: "01",
          title: "发布你的预约页",
          description: "加入服务项目、可预约时间、预约问题和品牌资料，完成引导式设置。"
        },
        {
          label: "02",
          title: "收集并筛选客户",
          description: "每个 enquiry 都会进入客户时间线，包含来源、感兴趣服务、备注和下一步。"
        },
        {
          label: "03",
          title: "确认、提醒和跟进",
          description: "发送提醒、收取订金，并在预约后自动触发跟进消息。"
        }
      ]
    },
    pricingSection: {
      label: "价格",
      title: "适合个人服务者、小团队和成长型门店的套餐。",
      body: "从基础预约开始，需要时再加入自动提醒、付款和多地点报表。",
      popular: "热门",
      select: "选择"
    },
    pricing: [
      {
        id: "solo",
        name: "Solo",
        price: "$19",
        period: "/月",
        description: "适合需要干净预约页和提醒功能的个人服务者。",
        includes: ["1 位用户", "预约页", "Email 提醒"],
        highlighted: false
      },
      {
        id: "studio",
        name: "Studio",
        price: "$49",
        period: "/月",
        description: "适合需要共享日历、跟进流程和订金的小型团队。",
        includes: ["5 位用户", "SMS 提醒", "订金和发票"],
        highlighted: true
      },
      {
        id: "growth",
        name: "Growth",
        price: "$129",
        period: "/月",
        description: "适合有多项服务、多位员工或多门店的繁忙服务商家。",
        includes: ["不限用户", "进阶报表", "优先支持"],
        highlighted: false
      }
    ],
    reviews: {
      label: "评价",
      title: "为每天依靠预约表运营的团队打造。",
      testimonials: [
        {
          quote: "我们不再把 lead 丢在 DM 里。客户可以自行预约、付订金、收到提醒，前台不用一直追。",
          name: "Maya Lin",
          role: "Glow Skin Studio 店主"
        },
        {
          quote: "Dashboard 足够简单，团队每天都愿意用。它取代了三个工具和大量复制粘贴。",
          name: "Ryan Brooks",
          role: "Brookside Therapy 创办人"
        },
        {
          quote: "ClientFlow 让跟进流程变得稳定。第一个月我们就更容易追踪回访预约。",
          name: "Sofia Martinez",
          role: "Elevate Coaching 运营主管"
        }
      ]
    },
    demo: {
      label: "预约 Demo",
      title: "看看 ClientFlow 如何适配你的服务业务。",
      body: "选择套餐，留下你的业务资料，我们会根据你的预约流程准备一个聚焦 demo。",
      selectedPlan: "已选套餐",
      highlights: [
        ["一般设置", "多数小团队可当天完成"],
        ["最适合", "预约制服务和咨询业务"]
      ],
      labels: {
        name: "姓名",
        email: "Email",
        business: "业务类型",
        teamSize: "团队人数",
        goal: "你想改善什么？"
      },
      placeholders: {
        name: "你的姓名",
        email: "you@example.com",
        business: "工作室、诊所、教练、顾问...",
        goal: "例：减少漏回 enquiry、收订金、发送提醒..."
      },
      teamSizes: [
        { id: "solo", label: "只有我" },
        { id: "small", label: "2-5 人" },
        { id: "team", label: "6 人以上" }
      ],
      submit: "送出 Demo 需求",
      copy: "复制需求",
      copied: "已复制",
      emailSubject: "ClientFlow Demo 预约需求",
      emailLabels: {
        plan: "套餐",
        name: "姓名",
        email: "Email",
        business: "业务类型",
        teamSize: "团队人数",
        goal: "目标"
      }
    },
    faq: {
      label: "FAQ",
      title: "切换预约流程前常见问题。",
      body: "ClientFlow 设计得足够简单，可以每天使用，也足够灵活，能支持真实服务运营。",
      items: [
        {
          question: "客户可以直接在我们网站预约吗？",
          answer: "可以。你可以连到 hosted booking page，也可以把预约流程嵌入现有网站。"
        },
        {
          question: "支持收订金吗？",
          answer: "支持。Studio 和 Growth 套餐支持订金、付款链接和发票追踪。"
        },
        {
          question: "团队可以管理不同日历吗？",
          answer: "可以。每位员工都可以设置可预约时间、服务项目、缓冲时间和内部备注。"
        },
        {
          question: "可以导入现有客户吗？",
          answer: "可以。你可以导入 CSV 名单，也可以在转移预约流程时手动新增客户。"
        }
      ]
    },
    finalCta: {
      title: "准备让每个 enquiry 更容易变成预约吗？",
      body: "从一个预约页、一个客户 inbox 和一套团队真正会用的流程开始。",
      primary: "预约 Demo",
      secondary: "比较套餐"
    },
    footer: "(c) 2026 ClientFlow. 为现代服务型团队打造的预约 CRM。"
  }
} as const;

type PageCopy = (typeof content)[Locale];

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

function ProductPreview({ t }: { t: PageCopy }) {
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
            {t.preview.browser}
          </div>
        </div>

        <div className="dashboard-grid grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 text-left">
            <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
              {t.preview.badge}
            </span>
            <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
              {t.preview.title}
            </h3>
            <p className="mt-4 leading-7 text-white/65">{t.preview.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                <Play className="h-4 w-4 fill-ink" />
                {t.preview.primary}
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                {t.preview.secondary}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {t.preview.metrics.map(([label, value, note]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                >
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
                  <p className="text-sm text-white/55">{t.preview.queueTitle}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Client activity
                  </h3>
                </div>
                <Inbox className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {t.preview.queue.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.35 + index * 0.08 }}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.06] p-3 text-sm text-white/75"
                  >
                    <ClipboardCheck className="h-4 w-4 text-emerald-300" />
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [selectedPlanId, setSelectedPlanId] = useState("studio");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    goal: "",
    teamSize: "small"
  });

  const t = content[locale];
  const selectedPlan =
    t.pricing.find((plan) => plan.id === selectedPlanId) ?? t.pricing[1];
  const selectedTeamSize =
    t.demo.teamSizes.find((teamSize) => teamSize.id === form.teamSize)?.label ??
    t.demo.teamSizes[1].label;

  const requestText = useMemo(
    () =>
      `${t.demo.emailSubject}\n${t.demo.emailLabels.plan}: ${selectedPlan.name}\n${t.demo.emailLabels.name}: ${form.name}\n${t.demo.emailLabels.email}: ${form.email}\n${t.demo.emailLabels.business}: ${form.business}\n${t.demo.emailLabels.teamSize}: ${selectedTeamSize}\n${t.demo.emailLabels.goal}: ${form.goal}`,
    [form, selectedPlan.name, selectedTeamSize, t]
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
      window.location.href = `mailto:hello@clientflow.app?subject=${encodeURIComponent(
        t.demo.emailSubject
      )}&body=${encodeURIComponent(requestText)}`;
    }
  }

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.demo.emailSubject} - ${selectedPlan.name}`);
    const body = encodeURIComponent(requestText);
    window.location.href = `mailto:hello@clientflow.app?subject=${subject}&body=${body}`;
  }

  return (
    <main
      id="top"
      lang={locale === "en" ? "en" : locale === "zhTW" ? "zh-Hant" : "zh-Hans"}
      className="overflow-hidden bg-white"
    >
      <section className="relative bg-hero-mesh px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Rocket className="h-4 w-4" />
            </span>
            ClientFlow
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1">
              {localeOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setLocale(option.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    locale === option.id
                      ? "bg-ink text-white shadow-sm"
                      : "text-slate-500 hover:text-ink"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              {t.navCta}
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
            <SectionLabel>{t.hero.label}</SectionLabel>
            <h1 className="mx-auto mt-7 max-w-5xl text-balance text-5xl font-bold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              {t.hero.body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                {t.hero.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <BarChart3 className="h-5 w-5" />
                {t.hero.secondary}
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
              {t.hero.proof.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <Check className="h-4 w-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <ProductPreview t={t} />
        </div>
      </section>

      <section id="product" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.product.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.product.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.product.body}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.product.items.map((item, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={item.title}
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
                  <h3 className="mt-6 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
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
              <SectionLabel>{t.workflow.label}</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
                {t.workflow.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{t.workflow.body}</p>
            </div>
            <div className="grid gap-4">
              {t.workflow.steps.map((step, index) => (
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
            <SectionLabel>{t.pricingSection.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.pricingSection.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t.pricingSection.body}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.pricing.map((plan) => (
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
                    {t.pricingSection.popular}
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
                  {t.pricingSection.select} {plan.name}
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
            <SectionLabel>{t.reviews.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.reviews.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {t.reviews.testimonials.map((testimonial) => (
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
                  "{testimonial.quote}"
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
            <SectionLabel>{t.demo.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl">
              {t.demo.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.demo.body}</p>
            <div className="mt-8 grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm text-white/45">{t.demo.selectedPlan}</p>
                <p className="mt-1 font-semibold text-white">{selectedPlan.name}</p>
              </div>
              {t.demo.highlights.map(([label, value]) => (
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
                {t.demo.labels.name}
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.demo.placeholders.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                {t.demo.labels.email}
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.demo.placeholders.email}
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.demo.labels.business}
              <input
                required
                value={form.business}
                onChange={(event) => setForm({ ...form, business: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.demo.placeholders.business}
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.demo.labels.teamSize}
              <select
                value={form.teamSize}
                onChange={(event) => setForm({ ...form, teamSize: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
              >
                {t.demo.teamSizes.map((teamSize) => (
                  <option key={teamSize.id} value={teamSize.id}>
                    {teamSize.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.demo.labels.goal}
              <textarea
                required
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
                className="min-h-32 resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.demo.placeholders.goal}
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-iris px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BE8]"
              >
                <Mail className="h-5 w-5" />
                {t.demo.submit}
              </button>
              <button
                type="button"
                onClick={copyRequest}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-slate-300"
              >
                <CopyCheck className="h-5 w-5" />
                {copied ? t.demo.copied : t.demo.copy}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>{t.faq.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.faq.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.faq.body}</p>
          </div>
          <div className="space-y-4">
            {t.faq.items.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
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
              {t.finalCta.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.finalCta.body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-100"
              >
                {t.finalCta.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {t.finalCta.secondary}
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

      <footer className="px-5 py-10 text-center text-sm text-slate-500">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
