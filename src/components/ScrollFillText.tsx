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
    <div ref={ref} className="relative mx-auto py-32 text-center">
      <p className="font-serif text-3xl leading-relaxed italic font-normal text-[#4A0E0E]/30 md:text-5xl">
        {text}
      </p>

      <motion.p
        aria-hidden
        style={{ clipPath }}
        className="absolute inset-x-0 top-32 font-serif text-3xl leading-relaxed italic font-normal text-[#4A0E0E] md:text-5xl"
      >
        {text}
      </motion.p>
    </div>
  );
}
