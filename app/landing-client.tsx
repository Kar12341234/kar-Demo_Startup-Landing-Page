"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  CopyCheck,
  Home as HomeIcon,
  Mail,
  MapPin,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Timer,
  UsersRound,
  Zap
} from "lucide-react";

type Locale = "en" | "zhTW" | "zhCN";

const localeOptions: Array<{ id: Locale; label: string }> = [
  { id: "en", label: "EN" },
  { id: "zhTW", label: "繁" },
  { id: "zhCN", label: "简" }
];

const serviceIcons = [
  Home,
  SprayCan,
  CalendarCheck,
  ShieldCheck,
  UsersRound,
  BarChart3
];

const content = {
  en: {
    brand: "BrightNest",
    nav: [
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "Book cleaning",
    hero: {
      label: "Premium home cleaning in your neighborhood",
      title: "A spotless home without spending your weekend cleaning it.",
      body:
        "BrightNest gives busy families, renters, and professionals a reliable cleaning team, simple online booking, clear pricing, and reminders before every visit.",
      primary: "Get an instant quote",
      secondary: "View packages",
      proof: ["Vetted cleaners", "Eco-friendly supplies", "Flexible scheduling"]
    },
    preview: {
      browser: "brightnest.co/booking",
      badge: "Next available",
      title: "Tomorrow, 10:00 AM",
      body: "Choose your home size, cleaning type, preferred time, and extras in a booking flow made for busy homeowners.",
      primary: "Start booking",
      secondary: "Compare plans",
      metrics: [
        ["Avg rating", "4.9/5", "2,400+ reviews"],
        ["Arrival window", "30 min", "reliable"],
        ["Repeat clients", "68%", "monthly"]
      ],
      queueTitle: "Today’s schedule",
      queue: ["Deep clean in Central District", "Move-out cleaning at 2:00 PM", "Recurring weekly visit confirmed"]
    },
    services: {
      label: "Services",
      title: "Cleaning packages for real homes, real schedules, and real mess.",
      body:
        "From weekly upkeep to move-out cleaning, BrightNest keeps the booking process clear and the service experience consistent.",
      items: [
        {
          title: "Standard home cleaning",
          description: "Dusting, vacuuming, kitchen surfaces, bathrooms, floors, beds, and everyday reset work."
        },
        {
          title: "Deep cleaning",
          description: "Detailed cleaning for neglected spaces, appliances, fixtures, edges, and hard-to-reach areas."
        },
        {
          title: "Recurring visits",
          description: "Weekly, bi-weekly, or monthly cleaning plans with reminders and the same preferred team when possible."
        },
        {
          title: "Vetted professionals",
          description: "Background-checked cleaners, clear arrival windows, and service notes for every visit."
        },
        {
          title: "Family-safe supplies",
          description: "Eco-conscious products suitable for homes with children, pets, and sensitive surfaces."
        },
        {
          title: "Clear service reports",
          description: "After each clean, receive a short summary of completed rooms, extras, and follow-up notes."
        }
      ]
    },
    workflow: {
      label: "How it works",
      title: "Book a trusted cleaner in three simple steps.",
      body: "A service flow designed for local customers who want confidence before they book.",
      steps: [
        {
          label: "01",
          title: "Tell us about your home",
          description: "Choose home size, cleaning type, rooms, extras, and any special instructions."
        },
        {
          label: "02",
          title: "Pick your preferred time",
          description: "Select available time slots, set reminders, and get a confirmation before the visit."
        },
        {
          label: "03",
          title: "Relax after the clean",
          description: "Your cleaner completes the checklist, sends a short report, and leaves your home ready to enjoy."
        }
      ]
    },
    pricingSection: {
      label: "Pricing",
      title: "Simple starting prices. No surprise fees.",
      body: "Final quotes depend on home size, condition, extras, and travel area, but every booking starts with a clear package.",
      popular: "Most booked",
      select: "Choose"
    },
    pricing: [
      {
        id: "essential",
        name: "Essential",
        price: "$89+",
        period: "/visit",
        description: "For regular upkeep in apartments and smaller homes.",
        includes: ["Kitchen and bathrooms", "Floors and dusting", "Bedroom reset"],
        highlighted: false
      },
      {
        id: "deep",
        name: "Deep Clean",
        price: "$179+",
        period: "/visit",
        description: "For first-time cleans, seasonal resets, and homes needing extra detail.",
        includes: ["Inside appliances", "Fixtures and edges", "Detailed room checklist"],
        highlighted: true
      },
      {
        id: "move",
        name: "Move-In / Out",
        price: "$249+",
        period: "/visit",
        description: "For empty homes, rentals, property handoff, and move preparation.",
        includes: ["Cabinets and closets", "Baseboards", "Priority scheduling"],
        highlighted: false
      }
    ],
    reviews: {
      label: "Reviews",
      title: "Trusted by people who want their home to feel ready again.",
      testimonials: [
        {
          quote:
            "Booking took less than two minutes, and the team arrived exactly when promised. The kitchen looked brand new.",
          name: "Maya Lin",
          role: "Apartment owner"
        },
        {
          quote:
            "We use BrightNest every two weeks. The reminders, checklist, and consistent quality make it easy to keep the house under control.",
          name: "Ryan Brooks",
          role: "Parent of two"
        },
        {
          quote:
            "The move-out clean helped us hand over the apartment without stress. Clear pricing and excellent communication.",
          name: "Sofia Martinez",
          role: "Relocation client"
        }
      ]
    },
    quote: {
      label: "Get a quote",
      title: "Tell us what needs cleaning.",
      body:
        "Choose a package, share your home details, and BrightNest will prepare a clear quote with available time slots.",
      selectedPlan: "Selected package",
      highlights: [
        ["Response time", "Usually within 1 business hour"],
        ["Best for", "Homes, apartments, rentals, and move-out cleaning"]
      ],
      labels: {
        name: "Name",
        email: "Email",
        homeType: "Home type",
        rooms: "Rooms",
        details: "Cleaning notes"
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        homeType: "Apartment, house, rental, office...",
        details: "Example: 2 bathrooms, pet hair, oven cleaning, preferred date..."
      },
      roomOptions: [
        { id: "studio", label: "Studio / 1 bedroom" },
        { id: "two", label: "2-3 bedrooms" },
        { id: "large", label: "4+ bedrooms" }
      ],
      submit: "Request quote",
      copy: "Copy request",
      copied: "Request copied",
      emailSubject: "BrightNest cleaning quote request",
      emailLabels: {
        package: "Package",
        name: "Name",
        email: "Email",
        homeType: "Home type",
        rooms: "Rooms",
        details: "Cleaning notes"
      }
    },
    faq: {
      label: "FAQ",
      title: "Questions before booking your first clean.",
      body: "BrightNest keeps the process simple so customers know exactly what to expect.",
      items: [
        {
          question: "Do I need to be home during the cleaning?",
          answer:
            "No. Many customers provide access instructions. You can also stay home if you prefer."
        },
        {
          question: "Do cleaners bring supplies?",
          answer:
            "Yes. BrightNest teams bring standard eco-friendly supplies and equipment unless you request otherwise."
        },
        {
          question: "Can I book recurring service?",
          answer:
            "Yes. Weekly, bi-weekly, and monthly cleaning plans are available after your first visit."
        },
        {
          question: "How is the final quote calculated?",
          answer:
            "Quotes are based on home size, cleaning type, condition, extras, and travel area."
        }
      ]
    },
    finalCta: {
      title: "Ready to come home to a cleaner space?",
      body: "Start with a clear quote, choose a time that works, and let BrightNest handle the reset.",
      primary: "Get my quote",
      secondary: "Compare packages"
    },
    footer: "(c) 2026 BrightNest Cleaning. Premium home cleaning for busy households."
  },
  zhTW: {
    brand: "BrightNest",
    nav: [
      { label: "服務", href: "#services" },
      { label: "流程", href: "#workflow" },
      { label: "價格", href: "#pricing" },
      { label: "評價", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "預約清潔",
    hero: {
      label: "你附近的高級居家清潔服務",
      title: "不用把週末花在打掃，也能擁有乾淨舒服的家。",
      body:
        "BrightNest 為忙碌家庭、租客和專業人士提供可靠清潔團隊、簡單線上預約、清楚報價和每次服務前提醒。",
      primary: "取得即時報價",
      secondary: "查看方案",
      proof: ["清潔員已審核", "環保清潔用品", "彈性預約時間"]
    },
    preview: {
      browser: "brightnest.co/booking",
      badge: "最快可預約",
      title: "明天 10:00 AM",
      body: "依照房屋大小、清潔類型、偏好時間和加購服務，完成為忙碌屋主設計的預約流程。",
      primary: "開始預約",
      secondary: "比較方案",
      metrics: [
        ["平均評分", "4.9/5", "2,400+ 評價"],
        ["到達時段", "30 分鐘", "可靠"],
        ["回訪客戶", "68%", "每月"]
      ],
      queueTitle: "今日排程",
      queue: ["Central District 深度清潔", "2:00 PM 搬家退租清潔", "每週固定清潔已確認"]
    },
    services: {
      label: "服務",
      title: "適合真實家庭、真實行程和真實髒亂的清潔方案。",
      body:
        "從每週維護到搬家清潔，BrightNest 讓預約流程清楚，服務品質穩定。",
      items: [
        {
          title: "標準居家清潔",
          description: "除塵、吸塵、廚房表面、浴室、地板、床鋪整理和日常重置。"
        },
        {
          title: "深度清潔",
          description: "針對長期忽略區域、家電、五金、邊角和難清潔位置做細節清潔。"
        },
        {
          title: "定期清潔",
          description: "每週、雙週或每月清潔計劃，提供提醒並盡量安排固定團隊。"
        },
        {
          title: "可靠專業人員",
          description: "已審核清潔員、清楚到達時段，以及每次服務的備註記錄。"
        },
        {
          title: "家人友善用品",
          description: "使用適合孩子、寵物和敏感表面的環保清潔產品。"
        },
        {
          title: "清楚服務報告",
          description: "每次清潔後收到完成房間、加購項目和後續備註摘要。"
        }
      ]
    },
    workflow: {
      label: "流程",
      title: "三步預約可靠清潔團隊。",
      body: "為希望先建立信任再下單的本地客戶設計的服務流程。",
      steps: [
        {
          label: "01",
          title: "告訴我們你的房屋情況",
          description: "選擇房屋大小、清潔類型、房間、加購項目和特殊指示。"
        },
        {
          label: "02",
          title: "選擇偏好時間",
          description: "選擇可預約時段、設定提醒，並在服務前收到確認。"
        },
        {
          label: "03",
          title: "享受清潔後的家",
          description: "清潔員完成 checklist，發送簡短報告，讓你的家恢復舒服狀態。"
        }
      ]
    },
    pricingSection: {
      label: "價格",
      title: "清楚起始價格，沒有隱藏費用。",
      body: "最終報價取決於房屋大小、狀況、加購項目和服務區域，但每次預約都有清楚方案起點。",
      popular: "最多人預約",
      select: "選擇"
    },
    pricing: [
      {
        id: "essential",
        name: "基礎清潔",
        price: "$89+",
        period: "/次",
        description: "適合公寓和小型住宅的日常維護。",
        includes: ["廚房和浴室", "地板和除塵", "臥室整理"],
        highlighted: false
      },
      {
        id: "deep",
        name: "深度清潔",
        price: "$179+",
        period: "/次",
        description: "適合首次清潔、季節重置和需要更多細節的家庭。",
        includes: ["家電內部", "五金和邊角", "詳細房間 checklist"],
        highlighted: true
      },
      {
        id: "move",
        name: "搬家清潔",
        price: "$249+",
        period: "/次",
        description: "適合空屋、租屋交接、物業交付和搬家準備。",
        includes: ["櫃子和衣櫃", "踢腳線", "優先排程"],
        highlighted: false
      }
    ],
    reviews: {
      label: "評價",
      title: "受到希望重新擁有舒適居家空間的客戶信任。",
      testimonials: [
        {
          quote: "預約不到兩分鐘就完成，團隊準時到達。廚房看起來像新的一樣。",
          name: "Maya Lin",
          role: "公寓屋主"
        },
        {
          quote: "我們每兩週使用 BrightNest。提醒、checklist 和穩定品質讓家裡容易維持。",
          name: "Ryan Brooks",
          role: "兩個孩子的父親"
        },
        {
          quote: "搬家退租清潔讓交屋過程輕鬆很多。價格清楚，溝通也很好。",
          name: "Sofia Martinez",
          role: "搬家客戶"
        }
      ]
    },
    quote: {
      label: "取得報價",
      title: "告訴我們需要清潔的內容。",
      body: "選擇方案，留下房屋資料，BrightNest 會提供清楚報價和可預約時段。",
      selectedPlan: "已選方案",
      highlights: [
        ["回覆時間", "通常 1 個工作小時內"],
        ["最適合", "住宅、公寓、出租屋和搬家清潔"]
      ],
      labels: {
        name: "姓名",
        email: "Email",
        homeType: "房屋類型",
        rooms: "房間數",
        details: "清潔備註"
      },
      placeholders: {
        name: "你的姓名",
        email: "you@example.com",
        homeType: "公寓、住宅、出租屋、辦公室...",
        details: "例：2 間浴室、寵物毛、烤箱清潔、偏好日期..."
      },
      roomOptions: [
        { id: "studio", label: "套房 / 1 房" },
        { id: "two", label: "2-3 房" },
        { id: "large", label: "4 房以上" }
      ],
      submit: "送出報價需求",
      copy: "複製需求",
      copied: "已複製",
      emailSubject: "BrightNest 清潔報價需求",
      emailLabels: {
        package: "方案",
        name: "姓名",
        email: "Email",
        homeType: "房屋類型",
        rooms: "房間數",
        details: "清潔備註"
      }
    },
    faq: {
      label: "FAQ",
      title: "首次預約清潔前常見問題。",
      body: "BrightNest 讓流程足夠簡單，讓客戶清楚知道會發生什麼。",
      items: [
        {
          question: "清潔時我需要在家嗎？",
          answer: "不需要。很多客戶會提供進入方式。如果你希望在家也完全可以。"
        },
        {
          question: "清潔員會自備用品嗎？",
          answer: "會。BrightNest 團隊會自備標準環保清潔用品和工具，除非你有特別要求。"
        },
        {
          question: "可以預約定期清潔嗎？",
          answer: "可以。首次服務後，可安排每週、雙週或每月清潔計劃。"
        },
        {
          question: "最終報價怎麼計算？",
          answer: "報價會根據房屋大小、清潔類型、房屋狀況、加購項目和服務區域計算。"
        }
      ]
    },
    finalCta: {
      title: "準備回到一個更乾淨的家嗎？",
      body: "從清楚報價開始，選擇適合你的時間，讓 BrightNest 幫你完成居家重置。",
      primary: "取得我的報價",
      secondary: "比較方案"
    },
    footer: "(c) 2026 BrightNest Cleaning. 為忙碌家庭打造的高級居家清潔。"
  },
  zhCN: {
    brand: "BrightNest",
    nav: [
      { label: "服务", href: "#services" },
      { label: "流程", href: "#workflow" },
      { label: "价格", href: "#pricing" },
      { label: "评价", href: "#reviews" },
      { label: "FAQ", href: "#faq" }
    ],
    navCta: "预约清洁",
    hero: {
      label: "你附近的高级居家清洁服务",
      title: "不用把周末花在打扫，也能拥有干净舒服的家。",
      body:
        "BrightNest 为忙碌家庭、租客和专业人士提供可靠清洁团队、简单线上预约、清楚报价和每次服务前提醒。",
      primary: "获取即时报价",
      secondary: "查看套餐",
      proof: ["清洁员已审核", "环保清洁用品", "弹性预约时间"]
    },
    preview: {
      browser: "brightnest.co/booking",
      badge: "最快可预约",
      title: "明天 10:00 AM",
      body: "按照房屋大小、清洁类型、偏好时间和加购服务，完成为忙碌屋主设计的预约流程。",
      primary: "开始预约",
      secondary: "比较套餐",
      metrics: [
        ["平均评分", "4.9/5", "2,400+ 评价"],
        ["到达时段", "30 分钟", "可靠"],
        ["回访客户", "68%", "每月"]
      ],
      queueTitle: "今日排程",
      queue: ["Central District 深度清洁", "2:00 PM 搬家退租清洁", "每周固定清洁已确认"]
    },
    services: {
      label: "服务",
      title: "适合真实家庭、真实行程和真实脏乱的清洁套餐。",
      body:
        "从每周维护到搬家清洁，BrightNest 让预约流程清楚，服务品质稳定。",
      items: [
        {
          title: "标准居家清洁",
          description: "除尘、吸尘、厨房表面、浴室、地板、床铺整理和日常重置。"
        },
        {
          title: "深度清洁",
          description: "针对长期忽略区域、家电、五金、边角和难清洁位置做细节清洁。"
        },
        {
          title: "定期清洁",
          description: "每周、双周或每月清洁计划，提供提醒并尽量安排固定团队。"
        },
        {
          title: "可靠专业人员",
          description: "已审核清洁员、清楚到达时段，以及每次服务的备注记录。"
        },
        {
          title: "家人友好用品",
          description: "使用适合孩子、宠物和敏感表面的环保清洁产品。"
        },
        {
          title: "清楚服务报告",
          description: "每次清洁后收到完成房间、加购项目和后续备注摘要。"
        }
      ]
    },
    workflow: {
      label: "流程",
      title: "三步预约可靠清洁团队。",
      body: "为希望先建立信任再下单的本地客户设计的服务流程。",
      steps: [
        {
          label: "01",
          title: "告诉我们你的房屋情况",
          description: "选择房屋大小、清洁类型、房间、加购项目和特殊指示。"
        },
        {
          label: "02",
          title: "选择偏好时间",
          description: "选择可预约时段、设置提醒，并在服务前收到确认。"
        },
        {
          label: "03",
          title: "享受清洁后的家",
          description: "清洁员完成 checklist，发送简短报告，让你的家恢复舒服状态。"
        }
      ]
    },
    pricingSection: {
      label: "价格",
      title: "清楚起始价格，没有隐藏费用。",
      body: "最终报价取决于房屋大小、状况、加购项目和服务区域，但每次预约都有清楚套餐起点。",
      popular: "最多人预约",
      select: "选择"
    },
    pricing: [
      {
        id: "essential",
        name: "基础清洁",
        price: "$89+",
        period: "/次",
        description: "适合公寓和小型住宅的日常维护。",
        includes: ["厨房和浴室", "地板和除尘", "卧室整理"],
        highlighted: false
      },
      {
        id: "deep",
        name: "深度清洁",
        price: "$179+",
        period: "/次",
        description: "适合首次清洁、季节重置和需要更多细节的家庭。",
        includes: ["家电内部", "五金和边角", "详细房间 checklist"],
        highlighted: true
      },
      {
        id: "move",
        name: "搬家清洁",
        price: "$249+",
        period: "/次",
        description: "适合空屋、租屋交接、物业交付和搬家准备。",
        includes: ["柜子和衣柜", "踢脚线", "优先排程"],
        highlighted: false
      }
    ],
    reviews: {
      label: "评价",
      title: "受到希望重新拥有舒适居家空间的客户信任。",
      testimonials: [
        {
          quote: "预约不到两分钟就完成，团队准时到达。厨房看起来像新的一样。",
          name: "Maya Lin",
          role: "公寓屋主"
        },
        {
          quote: "我们每两周使用 BrightNest。提醒、checklist 和稳定品质让家里容易维持。",
          name: "Ryan Brooks",
          role: "两个孩子的父亲"
        },
        {
          quote: "搬家退租清洁让交屋过程轻松很多。价格清楚，沟通也很好。",
          name: "Sofia Martinez",
          role: "搬家客户"
        }
      ]
    },
    quote: {
      label: "获取报价",
      title: "告诉我们需要清洁的内容。",
      body: "选择套餐，留下房屋资料，BrightNest 会提供清楚报价和可预约时段。",
      selectedPlan: "已选套餐",
      highlights: [
        ["回复时间", "通常 1 个工作小时内"],
        ["最适合", "住宅、公寓、出租屋和搬家清洁"]
      ],
      labels: {
        name: "姓名",
        email: "Email",
        homeType: "房屋类型",
        rooms: "房间数",
        details: "清洁备注"
      },
      placeholders: {
        name: "你的姓名",
        email: "you@example.com",
        homeType: "公寓、住宅、出租屋、办公室...",
        details: "例：2 间浴室、宠物毛、烤箱清洁、偏好日期..."
      },
      roomOptions: [
        { id: "studio", label: "套房 / 1 房" },
        { id: "two", label: "2-3 房" },
        { id: "large", label: "4 房以上" }
      ],
      submit: "送出报价需求",
      copy: "复制需求",
      copied: "已复制",
      emailSubject: "BrightNest 清洁报价需求",
      emailLabels: {
        package: "套餐",
        name: "姓名",
        email: "Email",
        homeType: "房屋类型",
        rooms: "房间数",
        details: "清洁备注"
      }
    },
    faq: {
      label: "FAQ",
      title: "首次预约清洁前常见问题。",
      body: "BrightNest 让流程足够简单，让客户清楚知道会发生什么。",
      items: [
        {
          question: "清洁时我需要在家吗？",
          answer: "不需要。很多客户会提供进入方式。如果你希望在家也完全可以。"
        },
        {
          question: "清洁员会自备用品吗？",
          answer: "会。BrightNest 团队会自备标准环保清洁用品和工具，除非你有特别要求。"
        },
        {
          question: "可以预约定期清洁吗？",
          answer: "可以。首次服务后，可安排每周、双周或每月清洁计划。"
        },
        {
          question: "最终报价怎么计算？",
          answer: "报价会根据房屋大小、清洁类型、房屋状况、加购项目和服务区域计算。"
        }
      ]
    },
    finalCta: {
      title: "准备回到一个更干净的家吗？",
      body: "从清楚报价开始，选择适合你的时间，让 BrightNest 帮你完成居家重置。",
      primary: "获取我的报价",
      secondary: "比较套餐"
    },
    footer: "(c) 2026 BrightNest Cleaning. 为忙碌家庭打造的高级居家清洁。"
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

function BookingPreview({ t }: { t: PageCopy }) {
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
                href="#quote"
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
                    Live booking board
                  </h3>
                </div>
                <ClipboardCheck className="h-6 w-6 text-emerald-300" />
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
                    <MapPin className="h-4 w-4 text-emerald-300" />
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
  const [selectedPlanId, setSelectedPlanId] = useState("deep");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    homeType: "",
    details: "",
    rooms: "two"
  });

  const t = content[locale];
  const selectedPlan =
    t.pricing.find((plan) => plan.id === selectedPlanId) ?? t.pricing[1];
  const selectedRooms =
    t.quote.roomOptions.find((room) => room.id === form.rooms)?.label ??
    t.quote.roomOptions[1].label;

  const requestText = useMemo(
    () =>
      `${t.quote.emailSubject}\n${t.quote.emailLabels.package}: ${selectedPlan.name}\n${t.quote.emailLabels.name}: ${form.name}\n${t.quote.emailLabels.email}: ${form.email}\n${t.quote.emailLabels.homeType}: ${form.homeType}\n${t.quote.emailLabels.rooms}: ${selectedRooms}\n${t.quote.emailLabels.details}: ${form.details}`,
    [form, selectedPlan.name, selectedRooms, t]
  );

  function choosePlan(id: string) {
    setSelectedPlanId(id);
    scrollToId("quote");
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(requestText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:hello@brightnest.co?subject=${encodeURIComponent(
        t.quote.emailSubject
      )}&body=${encodeURIComponent(requestText)}`;
    }
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.quote.emailSubject} - ${selectedPlan.name}`);
    const body = encodeURIComponent(requestText);
    window.location.href = `mailto:hello@brightnest.co?subject=${subject}&body=${body}`;
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
              <HomeIcon className="h-4 w-4" />
            </span>
            {t.brand}
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
              href="#quote"
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
                href="#quote"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                {t.hero.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <Timer className="h-5 w-5" />
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

          <BookingPreview t={t} />
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{t.services.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              {t.services.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.services.body}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((item, index) => {
              const Icon = serviceIcons[index];
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

      <section id="quote" className="bg-ink px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>{t.quote.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl">
              {t.quote.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">{t.quote.body}</p>
            <div className="mt-8 grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm text-white/45">{t.quote.selectedPlan}</p>
                <p className="mt-1 font-semibold text-white">{selectedPlan.name}</p>
              </div>
              {t.quote.highlights.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm text-white/45">{label}</p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submitQuote} className="rounded-lg border border-white/10 bg-white p-6 text-ink shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                {t.quote.labels.name}
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.quote.placeholders.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                {t.quote.labels.email}
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder={t.quote.placeholders.email}
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.quote.labels.homeType}
              <input
                required
                value={form.homeType}
                onChange={(event) => setForm({ ...form, homeType: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.quote.placeholders.homeType}
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.quote.labels.rooms}
              <select
                value={form.rooms}
                onChange={(event) => setForm({ ...form, rooms: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
              >
                {t.quote.roomOptions.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              {t.quote.labels.details}
              <textarea
                required
                value={form.details}
                onChange={(event) => setForm({ ...form, details: event.target.value })}
                className="min-h-32 resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder={t.quote.placeholders.details}
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-iris px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BE8]"
              >
                <Mail className="h-5 w-5" />
                {t.quote.submit}
              </button>
              <button
                type="button"
                onClick={copyRequest}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-slate-300"
              >
                <CopyCheck className="h-5 w-5" />
                {copied ? t.quote.copied : t.quote.copy}
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
                href="#quote"
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
