"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Globe,
  Box,
  Code,
  Clapperboard,
  Presentation,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand identity",
    desc: "From branding, through product and web, motion, MVP builds, AI engineering.",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
    color: "from-orange-400 to-orange-600",
    link: "/services/brand-identity",
  },
  {
    icon: Globe,
    title: "Website design & dev",
    desc: "Full-stack web development with modern frameworks and responsive design.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-700",
    link: "/services/website-design-dev",
  },
  {
    icon: Box,
    title: "MVPs & product design",
    desc: "Rapid prototyping and MVP development to validate your ideas.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    color: "from-orange-400 to-orange-600",
    link: "/services/mvp-product-design",
  },
  {
    icon: Code,
    title: "Custom code",
    desc: "Tailored software solutions built to your exact specifications.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    color: "from-gray-700 to-gray-900",
    link: "/services/custom-code",
  },
  {
    icon: Clapperboard,
    title: "3D Design & Motion",
    desc: "Stunning 3D visuals and motion graphics that bring your brand to life.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    color: "from-orange-500 to-orange-700",
    link: "/services/3d-design-motion",
  },
  {
    icon: Presentation,
    title: "Pitch Decks & Collateral",
    desc: "Compelling pitch decks and marketing materials that win investors.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    color: "from-blue-600 to-blue-800",
    link: "/services/pitch-decks-collateral",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-soft-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-primary mb-6 leading-tight"
          >
            Scaling your startup
            <br />
            shouldn't feel <span className="text-highlight">this hard.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From branding, through product and web, motion, MVP builds, AI
            engineering, software development, and marketing collateral. We do
            it all.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.link} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Dual Tilted Images Section */}
                  <div className="relative h-52 px-6 mb-6 pt-8">
                    {/* First Image - tilted right */}
                    <motion.div
                      className="absolute left-8 top-4 w-[55%] h-32 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200"
                      style={{ transform: "rotate(6deg)" }}
                      whileHover={{
                        y: -8,
                        x: -4,
                        rotate: 8,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <img
                        src={service.img}
                        alt={`${service.title} preview 1`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Second Image - tilted left, overlapping */}
                    <motion.div
                      className="absolute right-8 top-10 w-[55%] h-32 rounded-xl overflow-hidden shadow-xl border-2 border-gray-200"
                      style={{ transform: "rotate(-6deg)" }}
                      whileHover={{
                        y: -8,
                        x: 4,
                        rotate: -8,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <img
                        src={service.img}
                        alt={`${service.title} preview 2`}
                        className="w-full h-full object-cover brightness-95"
                      />
                    </motion.div>
                    {/* Icon Overlay */}
                    <div className="absolute left-6 -bottom-3">
                      <Icon className="w-10 h-10 text-highlight drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-6 pb-2 pt-3">
                    <h3 className="font-medium text-lg text-primary mb-1.5 uppercase tracking-wider">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-1">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
