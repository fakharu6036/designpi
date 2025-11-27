"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What happens if my project scope changes mid-way?",
    a: "We adapt flexibly through sprint-based planning. Scope changes are discussed, prioritized, and integrated into upcoming sprints with transparent timeline and cost adjustments.",
  },
  {
    q: "Can you collaborate with our in-house team?",
    a: "Absolutely. We embed seamlessly with your existing team, using your preferred tools, workflows, and communication channels for transparent collaboration.",
  },
  {
    q: "Why not hire designers full-time?",
    a: "Full-time hires bring overhead, long ramp-up, and limited flexibility. With DesignPi, you get senior talent on-demand, diverse expertise, and scalable capacity without the commitment.",
  },
  {
    q: "Designme vs other contractors",
    a: "Unlike traditional contractors, we offer integrated design + engineering teams, transparent processes, proven systems, and a track record of accelerating product velocity.",
  },
  {
    q: "How many people work on my project?",
    a: "Depends on your velocity tier. Typically 2-5 specialists including designers, engineers, and a product lead, all coordinated for maximum efficiency.",
  },
  {
    q: "What if I don't have enough design work every month?",
    a: "Our flexible engagement model lets you scale up or down. Pause, adjust scope, or shift to project-based work—we adapt to your actual needs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading and CTA */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                STILL GOT QUESTIONS?
              </p>
              <h2 className="text-5xl md:text-6xl font-black text-primary mb-12 leading-tight">
                Read the <span className="text-highlight">FAQs</span>
              </h2>

              {/* Contact Card */}
              <div className="bg-soft-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Team member"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt="Team member"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md -ml-4"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=33"
                    alt="Team member"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md -ml-4"
                  />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  Can't find your answer?
                </h3>
                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                  Book a call or send us a message on Telegram
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Intro chat
                  </Link>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-primary bg-white hover:bg-soft-white rounded-full border-2 border-primary transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.773 13.98l-2.894-.918c-.63-.196-.642-.633.135-.93l11.566-4.458c.523-.194.982.114.814.547z" />
                    </svg>
                    Message
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left group"
                >
                  <span className="font-semibold text-lg text-primary pr-8 group-hover:text-highlight transition-colors duration-200">
                    {f.q}
                  </span>
                  <span
                    className={`transition-all duration-300 flex-shrink-0 mt-1 ${
                      open === i ? "rotate-45 text-highlight" : "text-gray-400"
                    }`}
                  >
                    <Plus className="w-6 h-6" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] text-gray-600 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
