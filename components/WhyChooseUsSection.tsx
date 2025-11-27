"use client";
import { motion } from "framer-motion";

const rows = [
  {
    feature: "Speed to Market",
    designpi: "Agile sprints & rapid iteration",
    others: "Fragmented delivery cycles",
  },
  {
    feature: "Design Consistency",
    designpi: "Unified system + audits",
    others: "Ad-hoc styling",
  },
  {
    feature: "Code Quality",
    designpi: "Reviewed & tested patterns",
    others: "Inconsistent structure",
  },
  {
    feature: "Scalability",
    designpi: "Modular architecture",
    others: "Patchwork growth",
  },
  {
    feature: "Security",
    designpi: "Proactive hardening",
    others: "Reactive fixes",
  },
  {
    feature: "Collaboration",
    designpi: "Embedded + transparent",
    others: "Opaque handoffs",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white" id="why">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
          Why Choose DesignPi
        </h2>
        <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Purpose-built partnership vs. generic outsourcing.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-lg">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-soft-white text-primary">
                <th className="p-4 text-left font-bold">Feature</th>
                <th className="p-4 text-left font-bold text-highlight">
                  DesignPi
                </th>
                <th className="p-4 text-left font-bold">Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={r.feature}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ backgroundColor: "rgba(248, 248, 248, 0.5)" }}
                  className="border-t border-gray-100"
                >
                  <td className="p-4 font-semibold text-primary">
                    {r.feature}
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-highlight/10 text-primary text-[14px] font-semibold border border-highlight/20">
                      {r.designpi}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500">{r.others}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
