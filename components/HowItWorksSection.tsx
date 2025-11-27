"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "Clarify goals, constraints, user truths.",
    image: "https://framerusercontent.com/images/uQjKePTDLsLavwXCbiGMnh6M0.png",
  },
  {
    title: "Plan",
    desc: "Roadmap sprints & success metrics.",
    image:
      "https://framerusercontent.com/images/nuTexo2AXVnBHmMPZHHnpmis9I.jpg",
  },
  {
    title: "Build",
    desc: "Design + engineering in tight loops.",
    image:
      "https://framerusercontent.com/images/hEtjLV8UxMFLHngghG3uh3y2mI.jpg",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-soft-white" id="process">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
          How It Works
        </h2>
        <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Collaborative flow accelerating outcomes.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => {
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="text-left"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <h3 className="font-bold text-lg text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
