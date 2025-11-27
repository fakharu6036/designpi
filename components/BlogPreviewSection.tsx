"use client";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Design Insight 1",
    category: "Design",
    date: "2025-11-01",
    img: "https://framerusercontent.com/images/F169bRebhAT0SYGBfN1v53qpo.png",
  },
  {
    id: 2,
    title: "Design Insight 2",
    category: "Design",
    date: "2025-11-01",
    img: "https://framerusercontent.com/images/SwQbKxaMoCslafYGWpYj6XRnhg.jpg",
  },
  {
    id: 3,
    title: "Design Insight 3",
    category: "Design",
    date: "2025-11-01",
    img: "https://framerusercontent.com/images/dG0dONnU6oMKJ39q3gUw3GjAJEc.jpg",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
          Latest Insights
        </h2>
        <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Thinking driving product clarity.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-2xl group transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[13px] font-semibold mb-3">
                  <span className="px-3 py-1 bg-highlight/10 text-highlight rounded-full border border-highlight/20">
                    {p.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{p.date}</span>
                </div>
                <h3 className="font-bold text-primary text-lg leading-snug line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
