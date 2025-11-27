"use client";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project 1",
    img: "https://framerusercontent.com/images/uQjKePTDLsLavwXCbiGMnh6M0.png",
  },
  {
    id: 2,
    title: "Project 2",
    img: "https://framerusercontent.com/images/nuTexo2AXVnBHmMPZHHnpmis9I.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    img: "https://framerusercontent.com/images/hEtjLV8UxMFLHngghG3uh3y2mI.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    img: "https://framerusercontent.com/images/IzZVOZ8tjxV74vOoGwqSqGBKO0.png",
  },
  {
    id: 5,
    title: "Project 5",
    img: "https://framerusercontent.com/images/tXPA826BRaOgrYHgtCG9XAWgTk.jpg",
  },
  {
    id: 6,
    title: "Project 6",
    img: "https://framerusercontent.com/images/h70LeZ7oR20P084W3colLKjs1Y.jpg",
  },
  {
    id: 7,
    title: "Project 7",
    img: "https://framerusercontent.com/images/9jHPYEou6H4diBnoc8pM9iGT4.jpg",
  },
  {
    id: 8,
    title: "Project 8",
    img: "https://framerusercontent.com/images/2NFLHviqrXTEAV1o4Wg9r9XaZco.jpg",
  },
  {
    id: 9,
    title: "Project 9",
    img: "https://framerusercontent.com/images/KQVS9xzOhIjPe4bnvIsgCUL5Wg4.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-soft-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
          Recent Projects
        </h2>
        <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Representative work snapshots (placeholder).
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl border border-gray-200 transition-all duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white text-base font-bold drop-shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {p.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
