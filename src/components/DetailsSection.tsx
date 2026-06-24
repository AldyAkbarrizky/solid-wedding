"use client";

import { motion } from "motion/react";

const details = [
  {
    number: "01",
    title: "Wedding Parties",
    description: "Meet our favorite people.",
  },
  {
    number: "02",
    title: "Travel Logistics",
    description: "Plan your trip and stay.",
  },
  {
    number: "03",
    title: "Registry",
    description: "Your presence is enough, but if you insist...",
  },
  {
    number: "04",
    title: "Dress Code",
    description: "Summer garden party vibes.",
  },
  {
    number: "05",
    title: "Dinner Menu",
    description: "A quick look at what we are serving.",
  },
  {
    number: "06",
    title: "Music",
    description: "Cocktail hour and dance party playlists.",
  },
];

export function DetailsSection() {
  return (
    <section id="details" className="bg-[#f5f0e8] px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-neutral-400">
            and now
          </p>
          <h2 className="font-serif text-5xl italic leading-tight md:text-7xl">
            some additional details...
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">
            The people, places, and practical details that will make the weekend feel effortless.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.7,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer rounded-3xl border border-neutral-200 bg-white/40 p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/60"
            >
              <span className="text-xs tabular-nums text-neutral-300">{item.number}</span>
              <h3 className="mt-4 mb-3 font-serif text-2xl italic">{item.title}</h3>
              <p className="text-sm leading-6 text-neutral-500">{item.description}</p>
              <div className="mt-8 flex justify-end">
                <span className="inline-block text-sm text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-500">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Vision text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-24 max-w-2xl text-center"
        >
          <div className="mb-8 h-px w-full bg-neutral-200" />
          <p className="font-serif text-xl italic leading-8 text-neutral-600 md:text-2xl">
            The vision for the night is simple: all of our most beloved people in one place that happens
            to have a gorgeous garden, flowing drinks, and an unforgettable dance floor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
