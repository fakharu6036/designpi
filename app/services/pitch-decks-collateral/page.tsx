"use client";
import { motion } from "framer-motion";
import { Presentation, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function PitchDecksCollateralPage() {
  const features = [
    "Investor pitch decks",
    "Sales presentations",
    "Marketing collateral",
    "Brand templates",
    "Infographics & data viz",
    "Print & digital materials",
  ];

  const process = [
    {
      step: "01",
      title: "Brief",
      desc: "Understanding your story and audience.",
    },
    {
      step: "02",
      title: "Outline",
      desc: "Crafting narrative flow and key messages.",
    },
    {
      step: "03",
      title: "Design",
      desc: "Creating compelling visuals and layouts.",
    },
    {
      step: "04",
      title: "Refine",
      desc: "Polishing details and finalizing deliverables.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-soft-white via-white to-orange-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white mb-8">
              <Presentation className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">
              Pitch Decks & <span className="text-highlight">Collateral</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Compelling presentations and marketing materials that tell your
              story and win clients. From pitch decks to sales collateral.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional presentation and collateral design that converts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-6 rounded-xl bg-soft-white border border-gray-200"
              >
                <CheckCircle2 className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                <span className="text-[15px] text-gray-700 font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic approach to creating persuasive presentations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-highlight/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-primary mb-6">
              Ready to impress your audience?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's create presentations that captivate and convert.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
