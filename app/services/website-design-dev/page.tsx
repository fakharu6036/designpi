"use client";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function WebsiteDesignDevPage() {
  const features = [
    "Responsive web design",
    "Modern framework development",
    "Performance optimization",
    "SEO-friendly architecture",
    "CMS integration",
    "E-commerce solutions",
  ];

  const process = [
    {
      step: "01",
      title: "Planning",
      desc: "Defining goals, user flows, and technical requirements.",
    },
    {
      step: "02",
      title: "Design",
      desc: "Creating high-fidelity mockups and interactive prototypes.",
    },
    {
      step: "03",
      title: "Development",
      desc: "Building with modern frameworks and best practices.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "Testing, deployment, and ongoing support.",
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-white mb-8">
              <Globe className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight">
              Website Design <span className="text-highlight">& Dev</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Full-stack web development with modern frameworks, responsive
              design, and performance optimization for exceptional user
              experiences.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              data-project-type="Website Design & Dev"
              onClick={(e) => {
                try {
                  const el = e.currentTarget as HTMLAnchorElement;
                  const projectType =
                    el.getAttribute("data-project-type") || "";
                  const url = `/contact?projectType=${encodeURIComponent(
                    projectType
                  )}`;
                  e.preventDefault();
                  window.location.href = url;
                } catch {}
              }}
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
              End-to-end web solutions from design to deployment.
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
              From concept to launch, we handle every aspect of web development.
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
              Ready to launch your website?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's build a high-performance web presence that drives results.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              data-project-type="Website Design & Dev"
              onClick={(e) => {
                try {
                  const el = e.currentTarget as HTMLAnchorElement;
                  const projectType =
                    el.getAttribute("data-project-type") || "";
                  const url = `/contact?projectType=${encodeURIComponent(
                    projectType
                  )}`;
                  e.preventDefault();
                  window.location.href = url;
                } catch {}
              }}
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
