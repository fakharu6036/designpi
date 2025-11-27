"use client";
import { motion } from "framer-motion";

const clientLogos = [
  { name: "Seamless.AI", logo: "Seamless.AI" },
  { name: "Lightdash", logo: "Lightdash" },
  { name: "N3XT", logo: "N3XT" },
  { name: "HighLevel", logo: "HighLevel" },
  { name: "COLDIQ", logo: "COLDIQ" },
  { name: "skipmatrix", logo: "skipmatrix" },
  { name: "datawizz", logo: "datawizz" },
  { name: "howtodesignbetter", logo: "howtodesignbetter" },
  { name: "droxy", logo: "droxy" },
  { name: "GENEX", logo: "GENEX" },
  { name: "zave.it", logo: "zave.it" },
  { name: "intro", logo: "intro" },
  { name: "FINVERITY", logo: "FINVERITY" },
  { name: "Kingdom Advisors", logo: "Kingdom Advisors" },
  { name: "Gan.AI", logo: "Gan.AI" },
  { name: "SPATIAL", logo: "SPATIAL" },
  { name: "Quotient", logo: "Quotient" },
  { name: "Statiq", logo: "Statiq" },
  { name: "Blockview.ai", logo: "Blockview.ai" },
  { name: "RecruitU", logo: "RecruitU" },
  { name: "Growtha", logo: "Growtha" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-200" id="partners">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            TRUSTED BY 50+ STARTUPS ACROSS AI, SAAS, AND FINTECH.
          </p>
        </motion.div>

        {/* Logo Grid - 3 rows, 7 columns */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-8 md:gap-12 items-center">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.03,
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="text-gray-700 font-semibold text-sm md:text-base text-center">
                {client.logo}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono">GDANSK | 9:49 PM GMT+1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-green-600">
              BOOKING FOR Q4'25
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono">NYC | 3:49 PM EST</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
