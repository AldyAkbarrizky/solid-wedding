"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const galleryItems = [
  {
    caption: "First year on campus",
    gradient: "from-[#e0d8c8] to-[#c0a870]",
    tall: true,
  },
  {
    caption: "Coffee between classes",
    gradient: "from-[#d8d0e8] to-[#9088b8]",
    tall: false,
  },
  {
    caption: "The start of everything",
    gradient: "from-[#d4e4d8] to-[#80a888]",
    tall: true,
  },
  {
    caption: "A favorite city corner",
    gradient: "from-[#e8d8cc] to-[#b09078]",
    tall: false,
  },
  {
    caption: "Weekends downtown",
    gradient: "from-[#ccd8e8] to-[#7898b0]",
    tall: true,
  },
  {
    caption: "Our everyday ritual",
    gradient: "from-[#e8e0c8] to-[#c0b070]",
    tall: false,
  },
  {
    caption: "The weekend away",
    gradient: "from-[#d8d8e0] to-[#9898a8]",
    tall: true,
  },
  {
    caption: "Right after yes",
    gradient: "from-[#dce4d8] to-[#90a888]",
    tall: false,
  },
  {
    caption: "Celebrating together",
    gradient: "from-[#e4dcd0] to-[#b0988c]",
    tall: true,
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#f5f0e8] py-32">
      {/* Header */}
      <motion.div style={{ y: headerY }} className="mb-16 px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-[11px] uppercase tracking-[0.45em] text-neutral-400"
        >
          memories
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-serif text-6xl italic md:text-8xl"
        >
          little moments
        </motion.h2>
      </motion.div>

      {/* Drag carousel */}
      <div ref={constraintsRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          className="flex cursor-grab select-none gap-5 px-6 active:cursor-grabbing md:px-16"
          style={{ width: "max-content" }}
        >
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.caption}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.75,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="shrink-0"
            >
              <div
                className={`w-52 overflow-hidden rounded-3xl bg-linear-to-b md:w-64 ${item.gradient} ${
                  item.tall ? "h-80 md:h-96" : "h-60 md:h-72"
                }`}
              />
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Drag hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 px-6 text-[10px] uppercase tracking-[0.35em] text-neutral-300 md:px-16"
      >
        drag to explore →
      </motion.p>
    </section>
  );
}
