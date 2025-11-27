"use client";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "Free",
    features: ["Email support", "Community access", "Basic analytics"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$249",
    period: "/mo",
    features: [
      "Priority support",
      "Design + Dev sprints",
      "Advanced metrics",
      "Security reviews",
    ],
    cta: "Start Growth",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    features: [
      "Dedicated squad",
      "Architecture partner",
      "Performance tuning",
      "Roadmap co-planning",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
          Pricing
        </h2>
        <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Flexible plans aligned with stage & velocity needs.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 50px -10px rgba(30,41,59,0.25)",
                transition: { duration: 0.3 },
              }}
              className={`relative rounded-2xl border p-8 flex flex-col bg-white transition-all duration-300 ${
                t.highlighted
                  ? "border-highlight shadow-xl ring-2 ring-highlight/20"
                  : "border-gray-200"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-4 bg-highlight text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-3 text-primary">{t.name}</h3>
              <div className="text-4xl font-black text-primary mb-2">
                {t.price}
                <span className="text-lg font-medium ml-1">{t.period}</span>
              </div>
              <ul className="text-[15px] text-gray-600 space-y-2.5 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start">
                    <span className="mr-2 text-highlight font-bold">•</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`group w-full h-10 rounded-full px-4 text-sm font-semibold transition-all duration-300 ${
                  t.highlighted
                    ? "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-md"
                    : "bg-white text-primary hover:bg-soft-white border-2 border-primary"
                }`}
              >
                {t.cta}
                <svg
                  className={`inline-block ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    t.highlighted ? "" : "hidden"
                  }`}
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
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
