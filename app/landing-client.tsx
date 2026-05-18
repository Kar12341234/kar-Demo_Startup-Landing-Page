"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
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

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" }
];

const trustedLogos = ["Northstar", "Relay", "Vertex", "Atlas", "Foundry"];

const features = [
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
];

const steps = [
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
];

const plans = [
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
];

const testimonials = [
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
];

const faqs = [
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

function DashboardPreview() {
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
              Live workflow health
            </span>
            <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
              184 hours saved this month
            </h3>
            <p className="mt-4 leading-7 text-white/65">
              Track active workflows, overdue handoffs, AI summaries, and team
              capacity from one operating command center.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
              >
                <Play className="h-4 w-4 fill-ink" />
                Watch demo
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                Compare plans
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Cycle time", "-28%", "improved"],
                ["Open blockers", "12", "flagged"],
                ["Automations", "48", "active"]
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
                  <p className="text-sm text-white/55">Today&apos;s AI queue</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Recommended actions
                  </h3>
                </div>
                <ClipboardCheck className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {[
                  "Create renewal task for 8 high-intent accounts",
                  "Summarize blockers from product standup",
                  "Escalate support tickets waiting over 24 hours"
                ].map((item, index) => (
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
  const [selectedPlanId, setSelectedPlanId] = useState("growth");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    goal: "",
    teamSize: "11-50"
  });

  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[1];

  const requestText = useMemo(
    () =>
      `OpsPilot demo request\nPlan: ${selectedPlan.name}\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nTeam size: ${form.teamSize}\nGoal: ${form.goal}`,
    [form, selectedPlan.name]
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
        "OpsPilot demo request"
      )}&body=${encodeURIComponent(requestText)}`;
    }
  }

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`OpsPilot demo request - ${selectedPlan.name}`);
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
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Book demo
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
            <SectionLabel>AI productivity platform for startup teams</SectionLabel>
            <h1 className="mx-auto mt-7 max-w-5xl text-balance text-5xl font-bold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Automate the work that slows your team down.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              OpsPilot connects your tools, turns repeated processes into AI-assisted
              workflows, and gives operators a clear dashboard for execution, blockers,
              and business efficiency.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                Book a product demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <Gauge className="h-5 w-5" />
                Explore features
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
              {["10 min setup", "No code workflows", "Founder-friendly pricing"].map((item) => (
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

          <DashboardPreview />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Trusted by fast-moving teams
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
            <SectionLabel>Features</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              A practical AI layer for everyday operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Designed for teams that need fewer manual updates, better visibility,
              and faster decisions across the business.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
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
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
                From scattered work to repeatable execution.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                OpsPilot gives teams a clean path from connection to automation to
                measurable operating improvement.
              </p>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
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
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Plans that scale with your workflow maturity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with simple automation, then add reporting, controls, and deeper
              integrations as the team grows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
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
                    Most popular
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
                  Choose {plan.name}
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
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Built for teams that need momentum, not more meetings.
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
            <SectionLabel>Book a demo</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl">
              See where automation can save your team the most time.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Select a plan, share your workflow goal, and get a focused demo around
              your team&apos;s real operating process.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                ["Selected plan", selectedPlan.name],
                ["Best fit", "Startup operations, AI workflow, SaaS teams"],
                ["Demo focus", "Automation, productivity, reporting"]
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
              Company
              <input
                required
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder="Company name"
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              Team size
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
              Workflow goal
              <textarea
                required
                value={form.goal}
                onChange={(event) => setForm({ ...form, goal: event.target.value })}
                className="min-h-32 resize-none rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-iris"
                placeholder="Example: automate onboarding tasks, summarize support escalations, improve sales follow-up..."
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-iris px-6 py-3 font-semibold text-white transition hover:bg-[#5B4BE8]"
              >
                <Mail className="h-5 w-5" />
                Send demo request
              </button>
              <button
                type="button"
                onClick={copyRequest}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-ink transition hover:border-slate-300"
              >
                <CopyCheck className="h-5 w-5" />
                {copied ? "Request copied" : "Copy request"}
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
              Questions before adding AI to operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear answers for evaluating automation, team adoption, and technical fit.
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
              <Zap className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-normal sm:text-5xl">
              Ready to run operations with less manual work?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Connect your tools, automate repeatable workflows, and give every team
              the context they need to execute faster.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-100"
              >
                Book a demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Compare pricing
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
          <p>(c) 2026 OpsPilot AI. Startup SaaS landing page demo.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#pricing" className="hover:text-ink">Pricing</a>
            <a href="#demo" className="hover:text-ink">Demo</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
