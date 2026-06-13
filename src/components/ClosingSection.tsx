"use client";

import { motion } from "motion/react";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1a17] px-6 py-40 text-center md:px-16">
      {/* Subtle warm glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(180,140,90,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-[10px] uppercase tracking-[0.5em] text-neutral-500"
        >
          Jim &amp; Pam · June 18, 2027
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl italic leading-relaxed text-[#f5f0e8] md:text-6xl"
        >
          &ldquo;you&apos;re my favorite person to do anything with for the rest of my life.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 h-px w-20 origin-center bg-neutral-700"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-[10px] uppercase tracking-[0.4em] text-neutral-600"
        >
          Vancouver, BC · Cecil Green Park House
        </motion.p>
      </div>
    </section>
  );
}
