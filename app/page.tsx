"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  DatabaseZap,
  Link2,
  LockKeyhole,
  Play,
  Sparkles,
  Star,
  Workflow,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const navItems = ["Features", "Workflow", "Pricing", "FAQ"];

const features = [
  {
    icon: BrainCircuit,
    title: "AI task orchestration",
    description:
      "Prioritize work, draft next steps, and route tasks to the right person automatically."
  },
  {
    icon: Link2,
    title: "Tool integrations",
    description:
      "Connect Slack, Notion, Linear, HubSpot, Gmail, and product data in one clean hub."
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "Turn repeated operating playbooks into reliable automations your team can trust."
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    description:
      "Measure cycle time, blockers, adoption, and ROI from every automated workflow."
  },
  {
    icon: LockKeyhole,
    title: "Enterprise security",
    description:
      "Role-based access, audit-ready activity logs, and privacy-first AI controls."
  },
  {
    icon: DatabaseZap,
    title: "Smart knowledge base",
    description:
      "Find answers across docs, tickets, meetings, and customer conversations instantly."
  }
];

const steps = [
  {
    label: "01",
    title: "Connect tools",
    description:
      "Bring your apps, docs, messages, and customer data into a unified AI workspace."
  },
  {
    label: "02",
    title: "Automate workflow",
    description:
      "Choose a template or describe the process once. FlowPilot builds the operating loop."
  },
  {
    label: "03",
    title: "Track results",
    description:
      "Monitor team velocity, saved hours, handoff quality, and revenue impact in real time."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$29",
    description: "For founders and solo teams validating their first workflows.",
    features: ["3 connected tools", "10 automation runs", "AI meeting summaries"],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing teams ready to automate daily operations.",
    features: ["Unlimited workflows", "Advanced analytics", "Priority support"],
    highlighted: true
  },
  {
    name: "Business",
    price: "$199",
    description: "For companies that need scale, governance, and security.",
    features: ["SSO and roles", "Custom integrations", "Dedicated success manager"],
    highlighted: false
  }
];

const testimonials = [
  {
    quote:
      "FlowPilot replaced four manual reporting rituals and helped our product team recover an entire day every week.",
    name: "Maya Chen",
    role: "COO, Northstar Labs"
  },
  {
    quote:
      "The landing page sells the promise well, but the product experience is what converted our ops team into power users.",
    name: "Ethan Brooks",
    role: "Founder, RelayStack"
  },
  {
    quote:
      "We connected our support, CRM, and product tools in one afternoon. The visibility improvement was immediate.",
    name: "Priya Shah",
    role: "VP Growth, Aster AI"
  }
];

const faqs = [
  {
    question: "Can FlowPilot connect with our current SaaS stack?",
    answer:
      "Yes. The platform is designed around common startup workflows across Slack, Notion, Linear, HubSpot, Gmail, and custom APIs."
  },
  {
    question: "Is this suitable for non-technical teams?",
    answer:
      "Absolutely. Teams can launch templates, approve AI suggestions, and monitor automation results without writing code."
  },
  {
    question: "How is customer data protected?",
    answer:
      "FlowPilot uses scoped permissions, encrypted data flows, audit trails, and team-level AI controls for sensitive workflows."
  },
  {
    question: "Can we customize automations?",
    answer:
      "Yes. Each workflow can be tuned with triggers, routing rules, approval steps, and reporting dashboards."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-iris shadow-sm">
      <Sparkles className="h-4 w-4" />
      {children}
    </span>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto mt-12 w-full max-w-6xl rounded-[28px] border border-slate-200 bg-white p-3 shadow-soft"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-950">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 sm:block">
            flowpilot.ai/dashboard
          </div>
        </div>

        <div className="dashboard-grid grid gap-4 p-4 lg:grid-cols-[230px_1fr] lg:p-6">
          <aside className="hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 lg:block">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-iris">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">FlowPilot</p>
                <p className="text-xs text-white/50">AI command center</p>
              </div>
            </div>
            {["Overview", "Automations", "Insights", "Customers"].map((item, index) => (
              <div
                key={item}
                className={`mb-2 rounded-xl px-3 py-2 text-sm ${
                  index === 0
                    ? "bg-white text-slate-950"
                    : "text-white/60 hover:bg-white/5"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Saved hours", "184", "+32%"],
                ["Active workflows", "48", "+11%"],
                ["Tasks automated", "12.8k", "+58%"]
              ].map(([label, value, change]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="text-sm text-white/55">{label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-3xl font-bold text-white">{value}</p>
                    <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      {change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/55">Automation impact</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Weekly productivity lift
                    </h3>
                  </div>
                  <span className="rounded-full bg-indigo-400/20 px-3 py-1 text-xs font-semibold text-indigo-200">
                    Live
                  </span>
                </div>
                <div className="flex h-56 items-end gap-3">
                  {[36, 50, 42, 68, 74, 88, 82, 96].map((height, index) => (
                    <motion.div
                      key={height}
                      initial={{ height: 24 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.7, delay: index * 0.06 }}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-skybolt to-indigo-300"
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm text-white/55">AI recommendations</p>
                <div className="mt-5 space-y-3">
                  {[
                    "Route enterprise leads to sales within 3 min",
                    "Summarize support escalations every Friday",
                    "Create churn-risk tasks after 2 missed replies"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl bg-white/[0.06] p-3 text-sm text-white/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-hero-mesh px-5 pb-20 pt-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <Zap className="h-4 w-4" />
            </span>
            FlowPilot AI
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-ink">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Start free
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
            <SectionLabel>AI productivity SaaS platform</SectionLabel>
            <h1 className="mx-auto mt-7 max-w-5xl text-balance text-5xl font-bold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Automate busywork and turn team operations into measurable growth.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              FlowPilot connects your SaaS stack, coordinates AI-powered workflows,
              and gives startup teams a beautiful command center for getting more
              high-value work done.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-[#5B4BE8] sm:w-auto"
              >
                Launch your workflow
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#workflow"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-slate-300 sm:w-auto"
              >
                <Play className="h-5 w-5 fill-ink" />
                See how it works
              </a>
            </div>
          </motion.div>

          <DashboardPreview />
        </div>
      </section>

      <section id="features" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Features</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Everything a modern AI operating layer needs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Built for fast-moving startup teams that need polished automation,
              connected knowledge, and executive-ready reporting.
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
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender text-iris">
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
                From scattered tools to one AI-powered execution loop.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                FlowPilot keeps the setup simple: connect the stack, automate the
                process, and track the business result from one focused dashboard.
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
                  className="glass-panel rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-white">
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
              Plans that scale with your team.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start lean, then expand into advanced automation and enterprise controls.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-iris bg-ink text-white shadow-glow"
                    : "border-slate-200 bg-white text-ink shadow-sm"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-iris">
                    Popular
                  </span>
                ) : null}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-white/60" : "text-slate-500"}>
                    /month
                  </span>
                </div>
                <p className={`mt-5 leading-7 ${plan.highlighted ? "text-white/70" : "text-slate-600"}`}>
                  {plan.description}
                </p>
                <a
                  href="#final-cta"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-ink hover:bg-slate-100"
                      : "bg-ink text-white hover:bg-slate-800"
                  }`}
                >
                  Choose {plan.name}
                </a>
                <div className="mt-8 space-y-4">
                  {plan.features.map((item) => (
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

      <section className="bg-cloud px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Built for teams that move fast and measure everything.
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
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 leading-8 text-slate-700">
                  “{testimonial.quote}”
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

      <section id="faq" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
              Questions founders ask before they automate.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear answers for evaluating an AI productivity platform across
              teams, tools, and security needs.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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

      <section id="final-cta" className="px-5 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-ink px-6 py-16 text-center text-white shadow-soft sm:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-iris">
              <Clock3 className="h-7 w-7" />
            </div>
            <h2 className="mt-7 text-4xl font-bold tracking-normal sm:text-5xl">
              Give your team back its best hours.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Launch a polished AI productivity platform experience that feels ready
              for investors, customers, and high-intent SaaS buyers.
            </p>
            <a
              href="#pricing"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-100"
            >
              Start building with FlowPilot
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 text-center text-sm text-slate-500">
        <p>© 2026 FlowPilot AI. Startup SaaS landing page demo.</p>
      </footer>
    </main>
  );
}
