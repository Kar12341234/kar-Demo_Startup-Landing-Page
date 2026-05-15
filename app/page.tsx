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

const navItems = [
  { label: "Clients", href: "#clients" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" }
];

const clientTypes = [
  "Startup founders launching an MVP",
  "Coaches, consultants, and creators selling a premium offer",
  "Local service businesses that need qualified leads",
  "Agencies that need a polished campaign page fast"
];

const deliverables = [
  {
    icon: LayoutTemplate,
    title: "Conversion-first page structure",
    description:
      "Hero, offer, proof, benefits, pricing, FAQ, and CTA sections arranged for fast scanning."
  },
  {
    icon: PenTool,
    title: "Premium custom UI",
    description:
      "Clean SaaS-style visuals with responsive spacing, readable typography, and polished micro-interactions."
  },
  {
    icon: MessageSquareText,
    title: "Practical sales copy",
    description:
      "Clear headlines and section copy written around your audience, offer, objections, and next step."
  },
  {
    icon: MousePointerClick,
    title: "Working CTA flow",
    description:
      "Buttons scroll, select packages, open email briefs, or guide visitors to the right action."
  },
  {
    icon: ShieldCheck,
    title: "Build-ready code",
    description:
      "Next.js, TypeScript, Tailwind CSS, App Router, and Framer Motion with a successful production build."
  },
  {
    icon: BarChart3,
    title: "Launch checklist",
    description:
      "SEO metadata, mobile checks, deployment notes, and sensible sections for future analytics tracking."
  }
];

const process = [
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
];

const packages = [
  {
    name: "Starter",
    price: "$150+",
    timeline: "3-4 days",
    description: "A focused one-page site for a simple offer or early MVP.",
    includes: ["5 sections", "Responsive design", "Basic contact CTA"],
    highlighted: false
  },
  {
    name: "Growth",
    price: "$350+",
    timeline: "5-7 days",
    description: "Best for Fiverr and Upwork buyers who need a stronger sales page.",
    includes: ["8-10 sections", "Custom UI system", "Lead form and CTA flow"],
    highlighted: true
  },
  {
    name: "Launch",
    price: "$650+",
    timeline: "7-10 days",
    description: "A polished launch-ready page for paid ads, investor demos, or product campaigns.",
    includes: ["Advanced sections", "Motion design", "Deploy-ready handoff"],
    highlighted: false
  }
];

const testimonials = [
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
];

const faqs = [
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
];

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

function ProjectPreview() {
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
            client-landing-page / conversion-ready
          </div>
        </div>

        <div className="dashboard-grid grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6 text-left">
            <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
              Lead generation page
            </span>
            <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
              Turn paid traffic into booked calls.
            </h3>
            <p className="mt-4 leading-7 text-white/65">
              A realistic page preview with a clear audience, offer, benefits,
              proof, pricing, FAQ, and contact flow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#project-brief"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                Book a call
              </a>
              <a
                href="#packages"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                View packages
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["CTA clicks", "34%", "above avg"],
                ["Mobile score", "96", "checked"],
                ["Sections", "10", "ready"]
              ].map(([label, value, note]) => (
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
                  <p className="text-sm text-white/55">Page sections</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Built around buying decisions
                  </h3>
                </div>
                <BadgeCheck className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {["Clear offer", "Service benefits", "Package comparison", "Project brief form"].map(
                  (item, index) => (
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("Growth");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    goal: "",
    timeline: "This month"
  });

  const briefText = useMemo(
    () =>
      `Landing page request\nPackage: ${selectedPackage}\nName: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\nTimeline: ${form.timeline}\nGoal: ${form.goal}`,
    [form, selectedPackage]
  );

  function choosePackage(name: string) {
    setSelectedPackage(name);
    scrollToId("project-brief");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(
        "Landing page project brief"
      )}&body=${encodeURIComponent(briefText)}`;
    }
  }

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Landing page project brief - ${selectedPackage}`);
    const body = encodeURIComponent(briefText);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" className="overflow-hidden bg-white">
      <section className="relative bg-hero-mesh px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Rocket className="h-4 w-4" />
            </span>
            LandingLab
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#project-brief"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Request quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <div className="mx-auto max-w-7xl pt-20 text-center lg:pt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>For founders, consultants, creators, and service businesses</SectionLabel>
            <h1 className="mx-auto mt-7 max-w-5xl text-balance text-5xl font-bold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              A premium landing page that makes your offer easy to trust and easy to buy.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Custom Next.js landing pages for Fiverr and Upwork buyers who need a
              serious launch page: clear positioning, polished UI, working CTA flow,
              and production-ready code.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#project-brief"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                Get a project quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <BriefcaseBusiness className="h-5 w-5" />
                View packages
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
              {[
                "Build passed",
                "Mobile responsive",
                "Deploy ready"
              ].map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <ProjectPreview />
        </div>
      </section>

      <section id="clients" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Service audience</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Built for buyers who need a page that sells one clear offer.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Most marketplace clients are not asking for decoration. They need a
              page that explains the offer, removes doubt, and sends visitors to the
              right next step.
            </p>
            <a
              href="#project-brief"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Start my brief
              <FileText className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clientTypes.map((type, index) => (
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
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Practical pieces your page needs before traffic arrives.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The goal is not just a pretty screen. The goal is a page that can be
              reviewed, launched, shared, and improved.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
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
              <SectionLabel>Process</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
                Simple enough for a marketplace order. Structured enough for real launch work.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                You do not need a perfect brand guide. A clear offer and a few
                references are enough to start.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
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
            <SectionLabel>Packages</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Choose the scope that matches your launch.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pricing depends on final scope, assets, revisions, and integrations.
              These packages make the starting point clear.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((plan) => (
              <motion.div
                key={plan.name}
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
                    Most requested
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
                  onClick={() => choosePackage(plan.name)}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-ink hover:bg-slate-100"
                      : "bg-ink text-white hover:bg-slate-800"
                  }`}
                >
                  Select {plan.name}
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
            <SectionLabel>Client proof</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              The page should feel useful before the first call.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
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
            <SectionLabel>Project brief</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl">
              Send a clear brief in under two minutes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              The form opens an email draft with your selected package and project
              details. Replace the email address before using it with a real client inbox.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                ["Selected package", selectedPackage],
                ["Best for", "One clear offer, one focused conversion goal"],
                ["Handoff", "Source code, build notes, and GitHub-ready project"]
              ].map(([label, value]) => (
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
                Name
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              Business or offer
              <input
                required
                value={form.business}
                onChange={(event) => setForm({ ...form, business: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder="Online course, SaaS MVP, local service..."
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              Timeline
              <select
                value={form.timeline}
                onChange={(event) => setForm({ ...form, timeline: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
              >
                <option>This week</option>
                <option>This month</option>
                <option>Flexible</option>
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              Main goal
              <textarea
                required
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
                className="min-h-32 resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder="Example: collect consultation calls from paid traffic, launch a product waitlist, sell a coaching offer..."
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-iris px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BE8]"
              >
                <Mail className="h-5 w-5" />
                Email this brief
              </button>
              <button
                type="button"
                onClick={copyBrief}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-slate-300"
              >
                <CopyCheck className="h-5 w-5" />
                {copied ? "Brief copied" : "Copy brief"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Details buyers usually ask before ordering.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A high-converting page starts with a focused offer, not a long meeting.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
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
              Ready to turn your offer into a page people can act on?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Select a package, send a short brief, and get a custom landing page
              built for trust, clarity, and conversion.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#project-brief"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-100"
              >
                Send project brief
                <Upload className="h-5 w-5" />
              </a>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Review deliverables
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
        <p>(c) 2026 LandingLab. Custom landing page demo for marketplace clients.</p>
      </footer>
    </main>
  );
}
