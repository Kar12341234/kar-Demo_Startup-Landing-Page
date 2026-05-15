"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CopyCheck,
  FileText,
  LayoutTemplate,
  Mail,
  MessageSquareText,
  MousePointerClick,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Upload,
  Zap
} from "lucide-react";

type Locale = "en" | "zhTW" | "zhCN";

const localeOptions: Array<{ id: Locale; label: string }> = [
  { id: "en", label: "EN" },
  { id: "zhTW", label: "繁" },
  { id: "zhCN", label: "简" }
];

const deliverableIcons = [
  LayoutTemplate,
  PenTool,
  MessageSquareText,
  MousePointerClick,
  ShieldCheck,
  BarChart3
];

const content = {
  en: {
    nav: [
      { label: "Clients", href: "#clients" },
      { label: "Deliverables", href: "#deliverables" },
      { label: "Process", href: "#process" },
      { label: "Packages", href: "#packages" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "Request quote",
    hero: {
      label: "For founders, consultants, creators, and service businesses",
      title: "A premium landing page that makes your offer easy to trust and easy to buy.",
      body:
        "Custom Next.js landing pages for Fiverr and Upwork buyers who need a serious launch page: clear positioning, polished UI, working CTA flow, and production-ready code.",
      primary: "Get a project quote",
      secondary: "View packages",
      proof: ["Build passed", "Mobile responsive", "Deploy ready"]
    },
    preview: {
      browser: "client-landing-page / conversion-ready",
      badge: "Lead generation page",
      title: "Turn paid traffic into booked calls.",
      body:
        "A realistic page preview with a clear audience, offer, benefits, proof, pricing, FAQ, and contact flow.",
      primary: "Book a call",
      secondary: "View packages",
      metrics: [
        ["CTA clicks", "34%", "above avg"],
        ["Mobile score", "96", "checked"],
        ["Sections", "10", "ready"]
      ],
      sectionLabel: "Page sections",
      sectionTitle: "Built around buying decisions",
      checks: ["Clear offer", "Service benefits", "Package comparison", "Project brief form"]
    },
    clients: {
      label: "Service audience",
      title: "Built for buyers who need a page that sells one clear offer.",
      body:
        "Most marketplace clients are not asking for decoration. They need a page that explains the offer, removes doubt, and sends visitors to the right next step.",
      cta: "Start my brief",
      types: [
        "Startup founders launching an MVP",
        "Coaches, consultants, and creators selling a premium offer",
        "Local service businesses that need qualified leads",
        "Agencies that need a polished campaign page fast"
      ]
    },
    deliverables: {
      label: "Deliverables",
      title: "Practical pieces your page needs before traffic arrives.",
      body:
        "The goal is not just a pretty screen. The goal is a page that can be reviewed, launched, shared, and improved.",
      items: [
        {
          title: "Conversion-first page structure",
          description:
            "Hero, offer, proof, benefits, pricing, FAQ, and CTA sections arranged for fast scanning."
        },
        {
          title: "Premium custom UI",
          description:
            "Clean SaaS-style visuals with responsive spacing, readable typography, and polished micro-interactions."
        },
        {
          title: "Practical sales copy",
          description:
            "Clear headlines and section copy written around your audience, offer, objections, and next step."
        },
        {
          title: "Working CTA flow",
          description:
            "Buttons scroll, select packages, open email briefs, or guide visitors to the right action."
        },
        {
          title: "Build-ready code",
          description:
            "Next.js, TypeScript, Tailwind CSS, App Router, and Framer Motion with a successful production build."
        },
        {
          title: "Launch checklist",
          description:
            "SEO metadata, mobile checks, deployment notes, and sensible sections for future analytics tracking."
        }
      ]
    },
    process: {
      label: "Process",
      title: "Simple enough for a marketplace order. Structured enough for real launch work.",
      body:
        "You do not need a perfect brand guide. A clear offer and a few references are enough to start.",
      steps: [
        {
          label: "01",
          title: "Share your offer",
          description:
            "Send your product, target customer, examples you like, and the main action you want visitors to take."
        },
        {
          label: "02",
          title: "Build the landing page",
          description:
            "I shape the layout, write practical section copy, code the page, and tune the UI for desktop and mobile."
        },
        {
          label: "03",
          title: "Review and launch",
          description:
            "You review the page, I handle focused revisions, then prepare the project for GitHub, Netlify, or your handoff."
        }
      ]
    },
    packagesSection: {
      label: "Packages",
      title: "Choose the scope that matches your launch.",
      body:
        "Pricing depends on final scope, assets, revisions, and integrations. These packages make the starting point clear.",
      popular: "Most requested",
      select: "Select"
    },
    packages: [
      {
        id: "starter",
        name: "Starter",
        price: "$150+",
        timeline: "3-4 days",
        description: "A focused one-page site for a simple offer or early MVP.",
        includes: ["5 sections", "Responsive design", "Basic contact CTA"],
        highlighted: false
      },
      {
        id: "growth",
        name: "Growth",
        price: "$350+",
        timeline: "5-7 days",
        description: "Best for Fiverr and Upwork buyers who need a stronger sales page.",
        includes: ["8-10 sections", "Custom UI system", "Lead form and CTA flow"],
        highlighted: true
      },
      {
        id: "launch",
        name: "Launch",
        price: "$650+",
        timeline: "7-10 days",
        description:
          "A polished launch-ready page for paid ads, investor demos, or product campaigns.",
        includes: ["Advanced sections", "Motion design", "Deploy-ready handoff"],
        highlighted: false
      }
    ],
    proof: {
      label: "Client proof",
      title: "The page should feel useful before the first call.",
      testimonials: [
        {
          quote:
            "The page finally explained our offer in a way clients understood. We used it for ads the same week.",
          name: "Elena Morris",
          role: "Founder, bookkeeping service"
        },
        {
          quote:
            "I needed something premium for a course launch, not a generic template. The final page felt tailored and ready to sell.",
          name: "Daniel Reed",
          role: "Business coach"
        },
        {
          quote:
            "Clear process, clean code, and every CTA worked. It was easy to hand off to our marketing team.",
          name: "Nora Kim",
          role: "SaaS product lead"
        }
      ]
    },
    brief: {
      label: "Project brief",
      title: "Send a clear brief in under two minutes.",
      body:
        "The form opens an email draft with your selected package and project details. Replace the email address before using it with a real client inbox.",
      stats: [
        ["Best for", "One clear offer, one focused conversion goal"],
        ["Handoff", "Source code, build notes, and GitHub-ready project"]
      ],
      selectedPackage: "Selected package",
      labels: {
        name: "Name",
        email: "Email",
        business: "Business or offer",
        timeline: "Timeline",
        goal: "Main goal"
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        business: "Online course, SaaS MVP, local service...",
        goal:
          "Example: collect consultation calls from paid traffic, launch a product waitlist, sell a coaching offer..."
      },
      timelines: [
        { id: "week", label: "This week" },
        { id: "month", label: "This month" },
        { id: "flexible", label: "Flexible" }
      ],
      submit: "Email this brief",
      copy: "Copy brief",
      copied: "Brief copied",
      emailSubject: "Landing page project brief",
      emailLabels: {
        package: "Package",
        name: "Name",
        email: "Email",
        business: "Business",
        timeline: "Timeline",
        goal: "Goal"
      }
    },
    faq: {
      label: "FAQ",
      title: "Details buyers usually ask before ordering.",
      body: "A high-converting page starts with a focused offer, not a long meeting.",
      items: [
        {
          question: "Who is this service best for?",
          answer:
            "It is best for founders, consultants, coaches, local service businesses, creators, and agencies that need a professional one-page landing page to sell one clear offer."
        },
        {
          question: "Do I need to provide finished copy?",
          answer:
            "No. You can send rough notes, a website link, competitor examples, or a short offer description. I will turn that into practical landing page copy."
        },
        {
          question: "Can the page be deployed later?",
          answer:
            "Yes. The project is built with Next.js and can be deployed to Netlify, Vercel, or another host once your account is ready."
        },
        {
          question: "What do I receive at handoff?",
          answer:
            "You receive the source code, responsive landing page, clean section structure, working CTA flow, and build instructions."
        }
      ]
    },
    finalCta: {
      title: "Ready to turn your offer into a page people can act on?",
      body:
        "Select a package, send a short brief, and get a custom landing page built for trust, clarity, and conversion.",
      primary: "Send project brief",
      secondary: "Review deliverables"
    },
    footer: "(c) 2026 LandingLab. Custom landing page demo for marketplace clients."
  },
  zhTW: {
    nav: [
      { label: "客戶類型", href: "#clients" },
      { label: "交付內容", href: "#deliverables" },
      { label: "流程", href: "#process" },
      { label: "方案", href: "#packages" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "取得報價",
    hero: {
      label: "為創業者、顧問、創作者和服務型商家打造",
      title: "一個高級落地頁，讓你的服務更容易被理解、信任和下單。",
      body:
        "專為 Fiverr / Upwork 常見買家打造的 Next.js 定製落地頁：定位清晰、UI 精緻、CTA 可操作、程式碼可交付並可部署。",
      primary: "取得項目報價",
      secondary: "查看方案",
      proof: ["Build 已通過", "手機版自適應", "可部署交付"]
    },
    preview: {
      browser: "client-landing-page / conversion-ready",
      badge: "Lead generation page",
      title: "把廣告流量變成預約諮詢。",
      body:
        "真實可用的頁面預覽：明確客戶、服務賣點、信任證明、方案、FAQ 和聯絡流程。",
      primary: "預約諮詢",
      secondary: "查看方案",
      metrics: [
        ["CTA 點擊", "34%", "高於平均"],
        ["手機評分", "96", "已檢查"],
        ["頁面區塊", "10", "已準備"]
      ],
      sectionLabel: "頁面結構",
      sectionTitle: "圍繞購買決策設計",
      checks: ["清楚報價", "服務利益", "方案比較", "項目簡報表單"]
    },
    clients: {
      label: "服務對象",
      title: "適合需要用一個頁面賣清楚一個服務的買家。",
      body:
        "多數平台客戶不是只要好看的設計，而是需要頁面講清楚服務、降低疑慮，並引導訪客完成下一步。",
      cta: "開始填寫簡報",
      types: [
        "準備發佈 MVP 的 Startup Founder",
        "銷售高單價服務的教練、顧問和創作者",
        "需要獲取有效客戶名單的本地服務商家",
        "需要快速交付活動頁的 Agency"
      ]
    },
    deliverables: {
      label: "交付內容",
      title: "在導入流量前，落地頁需要先具備這些實用元素。",
      body:
        "目標不是只有漂亮畫面，而是一個能審核、能上線、能分享、能繼續優化的頁面。",
      items: [
        {
          title: "以轉化為核心的頁面結構",
          description: "Hero、服務、信任證明、利益、方案、FAQ 和 CTA，按照瀏覽決策設計。"
        },
        {
          title: "高級定製 UI",
          description: "乾淨的 SaaS 風格、舒適留白、可讀字體和精緻微互動。"
        },
        {
          title: "實用銷售文案",
          description: "根據你的客戶、服務、疑慮和下一步行動，撰寫清晰頁面文案。"
        },
        {
          title: "可操作 CTA 流程",
          description: "按鈕可滾動、選方案、開 email brief，或引導訪客到正確動作。"
        },
        {
          title: "可 build 的程式碼",
          description: "Next.js、TypeScript、Tailwind CSS、App Router、Framer Motion，並通過 production build。"
        },
        {
          title: "上線檢查清單",
          description: "SEO metadata、手機版檢查、部署說明，以及日後接 analytics 的合理結構。"
        }
      ]
    },
    process: {
      label: "流程",
      title: "足夠簡單，可以平台下單；足夠完整，可以真正上線。",
      body: "你不需要先準備完美品牌手冊。只要有服務描述、目標客戶和幾個參考網站就能開始。",
      steps: [
        {
          label: "01",
          title: "提供你的服務資料",
          description: "傳給我產品或服務、目標客戶、喜歡的參考頁，以及你希望訪客完成的主要動作。"
        },
        {
          label: "02",
          title: "設計並開發落地頁",
          description: "我會整理架構、撰寫實用文案、完成頁面開發，並調整桌面和手機版體驗。"
        },
        {
          label: "03",
          title: "審核、修正和交付",
          description: "你審核頁面後，我處理聚焦修改，然後準備 GitHub、Netlify 或交付檔案。"
        }
      ]
    },
    packagesSection: {
      label: "方案",
      title: "選擇符合你上線目標的範圍。",
      body: "最終價格取決於範圍、素材、修改次數和整合需求。這些方案讓起點更清楚。",
      popular: "最多人選",
      select: "選擇"
    },
    packages: [
      {
        id: "starter",
        name: "入門",
        price: "$150+",
        timeline: "3-4 天",
        description: "適合簡單服務、早期 MVP 或單一 offer 的一頁式網站。",
        includes: ["5 個區塊", "響應式設計", "基本聯絡 CTA"],
        highlighted: false
      },
      {
        id: "growth",
        name: "增長",
        price: "$350+",
        timeline: "5-7 天",
        description: "適合 Fiverr / Upwork 買家需要更完整、更有說服力的銷售頁。",
        includes: ["8-10 個區塊", "定製 UI 系統", "Lead form 和 CTA 流程"],
        highlighted: true
      },
      {
        id: "launch",
        name: "啟動",
        price: "$650+",
        timeline: "7-10 天",
        description: "適合投放廣告、產品發佈、投資人展示或正式活動頁。",
        includes: ["進階區塊", "動效設計", "可部署交付"],
        highlighted: false
      }
    ],
    proof: {
      label: "客戶回饋",
      title: "一個好頁面，在第一次通話前就應該讓人覺得有用。",
      testimonials: [
        {
          quote: "頁面終於把我們的服務講清楚了，客戶看得懂，我們同一週就拿去投廣告。",
          name: "Elena Morris",
          role: "記帳服務創辦人"
        },
        {
          quote: "我需要的是高級課程發佈頁，不是模板感設計。最後頁面很貼合我的 offer。",
          name: "Daniel Reed",
          role: "商業教練"
        },
        {
          quote: "流程清楚、程式碼乾淨，每個 CTA 都能用，交給行銷團隊也很容易。",
          name: "Nora Kim",
          role: "SaaS 產品負責人"
        }
      ]
    },
    brief: {
      label: "項目簡報",
      title: "兩分鐘內送出清楚的項目需求。",
      body: "表單會根據你選擇的方案和項目資料打開 email 草稿。正式使用前可換成你的真實收件地址。",
      stats: [
        ["最適合", "一個清楚 offer，一個明確轉化目標"],
        ["交付", "源碼、build 說明、GitHub-ready 專案"]
      ],
      selectedPackage: "已選方案",
      labels: {
        name: "姓名",
        email: "Email",
        business: "業務或服務",
        timeline: "時間",
        goal: "主要目標"
      },
      placeholders: {
        name: "你的姓名",
        email: "you@example.com",
        business: "線上課程、SaaS MVP、本地服務...",
        goal: "例：從廣告流量收集諮詢預約、發佈產品 waitlist、銷售教練服務..."
      },
      timelines: [
        { id: "week", label: "本週" },
        { id: "month", label: "本月" },
        { id: "flexible", label: "時間彈性" }
      ],
      submit: "Email 發送簡報",
      copy: "複製簡報",
      copied: "已複製",
      emailSubject: "Landing page 項目簡報",
      emailLabels: {
        package: "方案",
        name: "姓名",
        email: "Email",
        business: "業務",
        timeline: "時間",
        goal: "目標"
      }
    },
    faq: {
      label: "FAQ",
      title: "買家下單前常問的細節。",
      body: "高轉化頁面從一個聚焦的 offer 開始，而不是一場很長的會議。",
      items: [
        {
          question: "這個服務最適合誰？",
          answer:
            "最適合創業者、顧問、教練、本地服務商家、創作者和 agency，用一頁式網站銷售一個清楚 offer。"
        },
        {
          question: "我需要先提供完整文案嗎？",
          answer: "不需要。你可以提供簡單筆記、網站連結、競品例子或服務描述，我會整理成實用落地頁文案。"
        },
        {
          question: "之後可以部署嗎？",
          answer: "可以。專案使用 Next.js，可以在 Netlify、Vercel 或其他主機部署。"
        },
        {
          question: "最後會收到什麼？",
          answer: "你會收到源碼、響應式落地頁、清楚頁面結構、可用 CTA 流程和 build 說明。"
        }
      ]
    },
    finalCta: {
      title: "準備把你的服務變成讓客戶願意行動的頁面嗎？",
      body: "選擇方案、送出簡短需求，獲得一個以信任、清晰和轉化為核心的定製落地頁。",
      primary: "送出項目簡報",
      secondary: "查看交付內容"
    },
    footer: "(c) 2026 LandingLab. 面向平台客戶的定製落地頁展示。"
  },
  zhCN: {
    nav: [
      { label: "客户类型", href: "#clients" },
      { label: "交付内容", href: "#deliverables" },
      { label: "流程", href: "#process" },
      { label: "套餐", href: "#packages" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "获取报价",
    hero: {
      label: "为创业者、顾问、创作者和服务型商家打造",
      title: "一个高级落地页，让你的服务更容易被理解、信任和下单。",
      body:
        "专为 Fiverr / Upwork 常见买家打造的 Next.js 定制落地页：定位清晰、UI 精致、CTA 可操作、代码可交付并可部署。",
      primary: "获取项目报价",
      secondary: "查看套餐",
      proof: ["Build 已通过", "移动端自适应", "可部署交付"]
    },
    preview: {
      browser: "client-landing-page / conversion-ready",
      badge: "Lead generation page",
      title: "把广告流量变成预约咨询。",
      body:
        "真实可用的页面预览：明确客户、服务卖点、信任证明、套餐、FAQ 和联系流程。",
      primary: "预约咨询",
      secondary: "查看套餐",
      metrics: [
        ["CTA 点击", "34%", "高于平均"],
        ["移动评分", "96", "已检查"],
        ["页面区块", "10", "已准备"]
      ],
      sectionLabel: "页面结构",
      sectionTitle: "围绕购买决策设计",
      checks: ["清楚报价", "服务利益", "套餐对比", "项目简报表单"]
    },
    clients: {
      label: "服务对象",
      title: "适合需要用一个页面卖清楚一个服务的买家。",
      body:
        "多数平台客户不是只要好看的设计，而是需要页面讲清楚服务、降低疑虑，并引导访客完成下一步。",
      cta: "开始填写简报",
      types: [
        "准备发布 MVP 的 Startup Founder",
        "销售高客单服务的教练、顾问和创作者",
        "需要获取有效客户名单的本地服务商家",
        "需要快速交付活动页的 Agency"
      ]
    },
    deliverables: {
      label: "交付内容",
      title: "在导入流量前，落地页需要先具备这些实用元素。",
      body:
        "目标不是只有漂亮画面，而是一个能审核、能上线、能分享、能继续优化的页面。",
      items: [
        {
          title: "以转化为核心的页面结构",
          description: "Hero、服务、信任证明、利益、套餐、FAQ 和 CTA，按照浏览决策设计。"
        },
        {
          title: "高级定制 UI",
          description: "干净的 SaaS 风格、舒适留白、可读字体和精致微交互。"
        },
        {
          title: "实用销售文案",
          description: "根据你的客户、服务、疑虑和下一步行动，撰写清晰页面文案。"
        },
        {
          title: "可操作 CTA 流程",
          description: "按钮可滚动、选套餐、打开 email brief，或引导访客到正确动作。"
        },
        {
          title: "可 build 的代码",
          description: "Next.js、TypeScript、Tailwind CSS、App Router、Framer Motion，并通过 production build。"
        },
        {
          title: "上线检查清单",
          description: "SEO metadata、移动端检查、部署说明，以及日后接 analytics 的合理结构。"
        }
      ]
    },
    process: {
      label: "流程",
      title: "足够简单，可以平台下单；足够完整，可以真正上线。",
      body: "你不需要先准备完美品牌手册。只要有服务描述、目标客户和几个参考网站就能开始。",
      steps: [
        {
          label: "01",
          title: "提供你的服务资料",
          description: "把产品或服务、目标客户、喜欢的参考页，以及你希望访客完成的主要动作发给我。"
        },
        {
          label: "02",
          title: "设计并开发落地页",
          description: "我会整理架构、撰写实用文案、完成页面开发，并调整桌面和移动端体验。"
        },
        {
          label: "03",
          title: "审核、修改和交付",
          description: "你审核页面后，我处理聚焦修改，然后准备 GitHub、Netlify 或交付文件。"
        }
      ]
    },
    packagesSection: {
      label: "套餐",
      title: "选择符合你上线目标的范围。",
      body: "最终价格取决于范围、素材、修改次数和集成需求。这些套餐让起点更清楚。",
      popular: "最多人选",
      select: "选择"
    },
    packages: [
      {
        id: "starter",
        name: "入门",
        price: "$150+",
        timeline: "3-4 天",
        description: "适合简单服务、早期 MVP 或单一 offer 的一页式网站。",
        includes: ["5 个区块", "响应式设计", "基础联系 CTA"],
        highlighted: false
      },
      {
        id: "growth",
        name: "增长",
        price: "$350+",
        timeline: "5-7 天",
        description: "适合 Fiverr / Upwork 买家需要更完整、更有说服力的销售页。",
        includes: ["8-10 个区块", "定制 UI 系统", "Lead form 和 CTA 流程"],
        highlighted: true
      },
      {
        id: "launch",
        name: "启动",
        price: "$650+",
        timeline: "7-10 天",
        description: "适合投放广告、产品发布、投资人展示或正式活动页。",
        includes: ["进阶区块", "动效设计", "可部署交付"],
        highlighted: false
      }
    ],
    proof: {
      label: "客户反馈",
      title: "一个好页面，在第一次通话前就应该让人觉得有用。",
      testimonials: [
        {
          quote: "页面终于把我们的服务讲清楚了，客户看得懂，我们同一周就拿去投广告。",
          name: "Elena Morris",
          role: "记账服务创办人"
        },
        {
          quote: "我需要的是高级课程发布页，不是模板感设计。最后页面很贴合我的 offer。",
          name: "Daniel Reed",
          role: "商业教练"
        },
        {
          quote: "流程清楚、代码干净，每个 CTA 都能用，交给营销团队也很容易。",
          name: "Nora Kim",
          role: "SaaS 产品负责人"
        }
      ]
    },
    brief: {
      label: "项目简报",
      title: "两分钟内送出清楚的项目需求。",
      body: "表单会根据你选择的套餐和项目资料打开 email 草稿。正式使用前可换成你的真实收件地址。",
      stats: [
        ["最适合", "一个清楚 offer，一个明确转化目标"],
        ["交付", "源码、build 说明、GitHub-ready 项目"]
      ],
      selectedPackage: "已选套餐",
      labels: {
        name: "姓名",
        email: "Email",
        business: "业务或服务",
        timeline: "时间",
        goal: "主要目标"
      },
      placeholders: {
        name: "你的姓名",
        email: "you@example.com",
        business: "线上课程、SaaS MVP、本地服务...",
        goal: "例：从广告流量收集咨询预约、发布产品 waitlist、销售教练服务..."
      },
      timelines: [
        { id: "week", label: "本周" },
        { id: "month", label: "本月" },
        { id: "flexible", label: "时间灵活" }
      ],
      submit: "Email 发送简报",
      copy: "复制简报",
      copied: "已复制",
      emailSubject: "Landing page 项目简报",
      emailLabels: {
        package: "套餐",
        name: "姓名",
        email: "Email",
        business: "业务",
        timeline: "时间",
        goal: "目标"
      }
    },
    faq: {
      label: "FAQ",
      title: "买家下单前常问的细节。",
      body: "高转化页面从一个聚焦的 offer 开始，而不是一场很长的会议。",
      items: [
        {
          question: "这个服务最适合谁？",
          answer:
            "最适合创业者、顾问、教练、本地服务商家、创作者和 agency，用一页式网站销售一个清楚 offer。"
        },
        {
          question: "我需要先提供完整文案吗？",
          answer: "不需要。你可以提供简单笔记、网站链接、竞品例子或服务描述，我会整理成实用落地页文案。"
        },
        {
          question: "之后可以部署吗？",
          answer: "可以。项目使用 Next.js，可以在 Netlify、Vercel 或其他主机部署。"
        },
        {
          question: "最后会收到什么？",
          answer: "你会收到源码、响应式落地页、清楚页面结构、可用 CTA 流程和 build 说明。"
        }
      ]
    },
    finalCta: {
      title: "准备把你的服务变成让客户愿意行动的页面吗？",
      body: "选择套餐、送出简短需求，获得一个以信任、清晰和转化为核心的定制落地页。",
      primary: "送出项目简报",
      secondary: "查看交付内容"
    },
    footer: "(c) 2026 LandingLab. 面向平台客户的定制落地页展示。"
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

function ProjectPreview({ t }: { t: PageCopy }) {
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
            <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
              {t.preview.title}
            </h3>
            <p className="mt-4 leading-7 text-white/65">{t.preview.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#project-brief"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                {t.preview.primary}
              </a>
              <a
                href="#packages"
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
                  <p className="text-sm text-white/55">{t.preview.sectionLabel}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {t.preview.sectionTitle}
                  </h3>
                </div>
                <BadgeCheck className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {t.preview.checks.map((item, index) => (
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [selectedPackageId, setSelectedPackageId] = useState("growth");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    goal: "",
    timeline: "month"
  });

  const t = content[locale];
  const selectedPackage =
    t.packages.find((plan) => plan.id === selectedPackageId) ?? t.packages[1];
  const selectedTimeline =
    t.brief.timelines.find((timeline) => timeline.id === form.timeline)?.label ??
    t.brief.timelines[1].label;

  const briefText = useMemo(
    () =>
      `${t.brief.emailSubject}\n${t.brief.emailLabels.package}: ${selectedPackage.name}\n${t.brief.emailLabels.name}: ${form.name}\n${t.brief.emailLabels.email}: ${form.email}\n${t.brief.emailLabels.business}: ${form.business}\n${t.brief.emailLabels.timeline}: ${selectedTimeline}\n${t.brief.emailLabels.goal}: ${form.goal}`,
    [form, selectedPackage.name, selectedTimeline, t]
  );

  function choosePackage(id: string) {
    setSelectedPackageId(id);
    scrollToId("project-brief");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(
        t.brief.emailSubject
      )}&body=${encodeURIComponent(briefText)}`;
    }
  }

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.brief.emailSubject} - ${selectedPackage.name}`);
    const body = encodeURIComponent(briefText);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" lang={locale === "en" ? "en" : locale === "zhTW" ? "zh-Hant" : "zh-Hans"} className="overflow-hidden bg-white">
      <section className="relative bg-hero-mesh px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-full border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Rocket className="h-4 w-4" />
            </span>
            LandingLab
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
              href="#project-brief"
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
                href="#project-brief"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                {t.hero.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <BriefcaseBusiness className="h-5 w-5" />
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

          <ProjectPreview t={t} />
        </div>
      </section>

      <section id="clients" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>{t.clients.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.clients.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.clients.body}</p>
            <a
              href="#project-brief"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              {t.clients.cta}
              <FileText className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.clients.types.map((type, index) => (
              <motion.div
                key={type}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-lavender text-iris">
                  <Check className="h-5 w-5" />
                </div>
                <p className="mt-5 text-lg font-bold leading-7 text-ink">{type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="deliverables" className="bg-cloud px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.deliverables.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.deliverables.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.deliverables.body}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.deliverables.items.map((item, index) => {
              const Icon = deliverableIcons[index];
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

      <section id="process" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>{t.process.label}</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
                {t.process.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{t.process.body}</p>
            </div>
            <div className="grid gap-4">
              {t.process.steps.map((step, index) => (
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

      <section id="packages" className="bg-cloud px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.packagesSection.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.packagesSection.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t.packagesSection.body}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.packages.map((plan) => (
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
                    {t.packagesSection.popular}
                  </span>
                ) : null}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-white/60" : "text-slate-500"}>
                    {plan.timeline}
                  </span>
                </div>
                <p className={`mt-5 leading-7 ${plan.highlighted ? "text-white/70" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <button
                  type="button"
                  onClick={() => choosePackage(plan.id)}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-ink hover:bg-slate-100"
                      : "bg-ink text-white hover:bg-slate-800"
                  }`}
                >
                  {t.packagesSection.select} {plan.name}
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

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.proof.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.proof.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {t.proof.testimonials.map((testimonial) => (
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

      <section id="project-brief" className="bg-ink px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>{t.brief.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl">
              {t.brief.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.brief.body}</p>
            <div className="mt-8 grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm text-white/45">{t.brief.selectedPackage}</p>
                <p className="mt-1 font-semibold text-white">{selectedPackage.name}</p>
              </div>
              {t.brief.stats.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-white/45">{label}</p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submitBrief} className="rounded-lg border border-white/10 bg-white p-6 text-ink shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                {t.brief.labels.name}
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.brief.placeholders.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                {t.brief.labels.email}
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.brief.placeholders.email}
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.brief.labels.business}
              <input
                required
                value={form.business}
                onChange={(event) => setForm({ ...form, business: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.brief.placeholders.business}
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.brief.labels.timeline}
              <select
                value={form.timeline}
                onChange={(event) => setForm({ ...form, timeline: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
              >
                {t.brief.timelines.map((timeline) => (
                  <option key={timeline.id} value={timeline.id}>
                    {timeline.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.brief.labels.goal}
              <textarea
                required
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
                className="min-h-32 resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.brief.placeholders.goal}
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-iris px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BE8]"
              >
                <Mail className="h-5 w-5" />
                {t.brief.submit}
              </button>
              <button
                type="button"
                onClick={copyBrief}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-slate-300"
              >
                <CopyCheck className="h-5 w-5" />
                {copied ? t.brief.copied : t.brief.copy}
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
              <TrendingUp className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-normal sm:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.finalCta.body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#project-brief"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-100"
              >
                {t.finalCta.primary}
                <Upload className="h-5 w-5" />
              </a>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {t.finalCta.secondary}
                <ArrowRight className="h-5 w-5" />
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
        <Zap className="h-5 w-5" />
      </button>

      <footer className="px-5 py-10 text-center text-sm text-slate-500">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
