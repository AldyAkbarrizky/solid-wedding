"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ScrollFillTextProps = {
  text: string;
};

export function ScrollFillText({ text }: ScrollFillTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl py-32">
      <p className="font-serif text-5xl leading-tight text-neutral-300 md:text-8xl">
        {text}
      </p>

      <motion.p
        aria-hidden
        style={{ clipPath }}
        className="absolute left-0 top-32 font-serif text-5xl leading-tight text-neutral-950 md:text-8xl"
      >
        {text}
      </motion.p>
    </div>
  );
}
