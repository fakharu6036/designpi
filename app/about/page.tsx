"use client";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  Zap,
  Heart,
  Award,
  RefreshCw,
  GitMerge,
  Rocket,
  Workflow,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    img: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Sarah Chen",
    role: "Design Director",
    img: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "James Wilson",
    role: "Tech Lead",
    img: "https://i.pravatar.cc/300?img=33",
  },
  {
    name: "Maya Patel",
    role: "Product Manager",
    img: "https://i.pravatar.cc/300?img=45",
  },
];

const values = [
  {
    icon: Heart,
    title: "Human-Centered",
    desc: "Every solution anchored in user needs and empathy.",
  },
  {
    icon: Zap,
    title: "Velocity",
    desc: "Ship fast without sacrificing craft or clarity.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Relentless pursuit of quality and precision.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Transparent partnership at every stage.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-soft-white via-white to-accent/5 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary border border-blue-100">
                ✨ Human + AI, Together
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">
              About <span className="text-highlight">DesignPi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Product design and engineering partner accelerating velocity,
              clarity and craft for ambitious teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                DesignPi was founded in 2020 by a collective of designers and
                engineers frustrated by fragmented workflows and misaligned
                incentives in traditional agencies. We believed better outcomes
                require true partnership—not just handoffs.
              </p>
              <p>
                From day one, we embedded design, engineering, and strategy
                under one roof. This unified approach allows us to move faster,
                iterate smarter, and deliver products that resonate with users
                and scale with business growth.
              </p>
              <p>
                Today, we partner with startups and scale-ups across SaaS,
                FinTech, HealthTech, and emerging platforms—helping them
                accelerate from MVP to market leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-highlight/20 to-highlight/10 text-highlight flex items-center justify-center flex-shrink-0 shadow-md">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower product teams with integrated design and
                  engineering excellence—reducing friction, accelerating cycles,
                  and unlocking compounding value through transparent
                  collaboration and shared success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles guiding our craft and partnerships.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="border border-gray-200 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-highlight" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach ensures velocity, transparency, and excellence.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Rocket,
                title: "Collaborative Sprints",
                desc: "Weekly or bi-weekly cadences aligned to your backlog, milestones, and success metrics.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: GitMerge,
                title: "Embedded Partnership",
                desc: "We integrate with your tools, rituals, and team culture—no opaque handoffs.",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
                color: "from-orange-500 to-orange-700",
              },
              {
                icon: Workflow,
                title: "Design + Engineering Together",
                desc: "Designers and developers work in tight loops, ensuring feasibility and craft from day one.",
                img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
                color: "from-purple-500 to-purple-700",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Background Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-90 group-hover:opacity-80 transition-opacity z-10"
                      style={{
                        backgroundImage: `linear-gradient(135deg, var(--${item.color
                          .split(" ")[0]
                          .replace("from-", "color-")}), var(--${item.color
                          .split(" ")[1]
                          .replace("to-", "color-")}))`,
                      }}
                    />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Icon */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pt-5 pb-4">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented humans driving creativity and execution.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="relative w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-primary text-lg mb-1">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-600">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Stats */}
      <section className="py-24 bg-gradient-to-br from-soft-white via-white to-accent/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 leading-tight">
              Impact by the Numbers
            </h2>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Products Shipped", value: "150+" },
              { label: "Avg. Time-to-First-Release", value: "3 weeks" },
              { label: "Client NPS", value: "92" },
              { label: "Years in Practice", value: "10+" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl md:text-6xl font-black text-highlight mb-3">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              Trusted by forward-thinking teams
            </h2>
            <p className="text-lg text-gray-600">
              Selected partners and collaborators
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="h-16 rounded-xl border border-gray-200 bg-soft-white flex items-center justify-center text-gray-500 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                Logo
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "DesignPi accelerated our roadmap by months. The blend of design and engineering is rare and invaluable.",
                author: "VP Product, SaaS",
              },
              {
                quote:
                  "They ship fast and sweat the details. Our onboarding metrics improved within two sprints.",
                author: "Founder, FinTech",
              },
              {
                quote:
                  "A true partner. Transparent, proactive, and outcome-driven. We love working with this team.",
                author: "CTO, HealthTech",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl text-highlight mb-4 font-serif">"</div>
                <p className="text-gray-800 text-base leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="text-sm font-semibold text-gray-600">
                  {t.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-auto md:max-w-6xl mb-20 p-8 md:p-12 text-center force-white shadow-2xl bg-gradient-to-br from-deep-blue via-primary to-black/80">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-xl" />
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#ffffff" }}
        >
          Let’s build something meaningful
        </h2>
        <p
          className="text-white/90 mb-6 max-w-2xl mx-auto"
          style={{ color: "#ffffff" }}
        >
          We partner with teams to accelerate product outcomes with integrated
          design and engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-full btn-white hover:bg-soft-white transition-all"
            aria-label="Contact"
            onClick={(e) => {
              try {
                e.preventDefault();
                window.location.href = "/contact?projectType=About";
              } catch {}
            }}
          >
            Contact Us
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="/projects"
            className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-full btn-outline-white hover:bg-white/10 transition-all"
            aria-label="View Work"
          >
            View Our Work
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
