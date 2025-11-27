"use client";
import { motion } from "framer-motion";
import { Box, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function MVPProductDesignPage() {
  const features = [
    "User research & validation",
    "Wireframing & prototyping",
    "UI/UX design",
    "Rapid MVP development",
    "User testing & iteration",
    "Product strategy consulting",
  ];

  const process = [
    {
      step: "01",
      title: "Validate",
      desc: "Understanding user needs and market fit.",
    },
    {
      step: "02",
      title: "Prototype",
      desc: "Creating interactive prototypes for testing.",
    },
    {
      step: "03",
      title: "Build",
      desc: "Developing the minimum viable product.",
    },
    {
      step: "04",
      title: "Iterate",
      desc: "Refining based on user feedback and data.",
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white mb-8">
              <Box className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">
              MVPs & Product <span className="text-highlight">Design</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Rapid prototyping and MVP development to validate your ideas
              quickly. From concept to market in record time.
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
              Everything you need to bring your product idea to life.
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
              Fast-track your product from idea to market validation.
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
              Ready to validate your idea?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's build an MVP that proves your concept and attracts
              investors.
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
