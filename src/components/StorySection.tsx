"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const chapters = [
  {
    label: "chapter one",
    title: "how we met",
    body: "We met at university, became fast friends, and eventually realized the best parts of every week were the parts we spent together.",
    gradient: "from-[#ecdcc0] to-[#a08060]",
  },
  {
    label: "chapter two",
    title: "falling in love",
    body: "Toronto became our home base for late dinners, weekend walks, shared routines, and all of the small moments that made life feel bigger.",
    gradient: "from-[#d8d0e4] to-[#908098]",
  },
  {
    label: "chapter three",
    title: "the next step",
    body: "A trip, a question, a very easy yes, and suddenly the future we had been imagining became something we could invite everyone into.",
    gradient: "from-[#d4e8d4] to-[#88a880]",
  },
];

export function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Chapter 1: in 0→0.05, hold 0.05→0.30, out 0.30→0.40
  const ch1Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.3, 0.4],
    [0, 1, 1, 0],
  );
  const ch1Y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.3, 0.4],
    [40, 0, 0, -40],
  );

  // Chapter 2: in 0.33→0.43, hold 0.43→0.62, out 0.62→0.70
  const ch2Opacity = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.62, 0.7],
    [0, 1, 1, 0],
  );
  const ch2Y = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.62, 0.7],
    [40, 0, 0, -40],
  );

  // Chapter 3: in 0.63→0.73, hold 0.73→0.96, out 0.96→1
  const ch3Opacity = useTransform(
    scrollYProgress,
    [0.63, 0.73, 0.96, 1],
    [0, 1, 1, 0],
  );
  const ch3Y = useTransform(
    scrollYProgress,
    [0.63, 0.73, 0.96, 1],
    [40, 0, 0, -40],
  );

  const opacities = [ch1Opacity, ch2Opacity, ch3Opacity];
  const yValues = [ch1Y, ch2Y, ch3Y];

  // Image opacity per chapter
  const img1Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.3, 0.4],
    [0, 1, 1, 0],
  );
  const img2Opacity = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.62, 0.7],
    [0, 1, 1, 0],
  );
  const img3Opacity = useTransform(
    scrollYProgress,
    [0.63, 0.73, 0.96, 1],
    [0, 1, 1, 0],
  );
  const imgOpacities = [img1Opacity, img2Opacity, img3Opacity];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#f5f0e8]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-16 md:px-16">
        <div className="w-full">
          {/* Section header */}
          <div className="mb-10 flex items-center gap-6">
            <div className="h-px flex-1 bg-neutral-200" />
            <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
              our story
            </p>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Text column */}
            <div className="relative h-[55vh] md:h-[65vh]">
              {chapters.map((chapter, i) => (
                <motion.div
                  key={chapter.title}
                  style={{ opacity: opacities[i], y: yValues[i] }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-neutral-400">
                    {chapter.label}
                  </p>
                  <h3 className="mb-5 font-serif text-4xl italic leading-tight md:text-6xl">
                    {chapter.title}
                  </h3>
                  <p className="max-w-md text-base leading-8 text-neutral-600 md:text-lg">
                    {chapter.body}
                  </p>
                  {/* Chapter indicators */}
                  <div className="mt-10 flex gap-2">
                    {chapters.map((_, j) => (
                      <div
                        key={j}
                        className={`h-px transition-all duration-500 ${
                          j === i ? "w-10 bg-neutral-950" : "w-4 bg-neutral-300"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image column — desktop only */}
            <div className="relative hidden h-[65vh] overflow-hidden rounded-4xl md:block">
              {chapters.map((chapter, i) => (
                <motion.div
                  key={chapter.title}
                  style={{ opacity: imgOpacities[i] }}
                  className={`absolute inset-0 bg-linear-to-b ${chapter.gradient}`}
                />
              ))}
              {/* Chapter label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="relative rounded-2xl bg-white/30 p-5 backdrop-blur-sm">
                  {chapters.map((chapter, i) => (
                    <motion.p
                      key={chapter.title}
                      style={{ opacity: imgOpacities[i] }}
                      className="absolute inset-0 flex items-center px-5 font-serif text-2xl italic text-neutral-900"
                    >
                      {chapter.title}
                    </motion.p>
                  ))}
                  {/* Spacer to give container height */}
                  <p className="invisible font-serif text-2xl italic">
                    placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
