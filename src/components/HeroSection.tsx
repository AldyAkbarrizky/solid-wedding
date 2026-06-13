"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const NAV_LINKS = ["Travel Logistics", "Registry", "FAQ"];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Main image: full-screen → center card (via inset transitions) ────────
  // Starts at inset-0 (full screen), ends positioned below navbar with side margins
  const imgTop = useTransform(scrollYProgress, [0, 0.5], ["0px", "76px"]);
  const imgLeft = useTransform(scrollYProgress, [0, 0.5], ["0%", "24%"]);
  const imgRight = useTransform(scrollYProgress, [0, 0.5], ["0%", "24%"]);
  const imgBottom = useTransform(scrollYProgress, [0, 0.5], ["0px", "20px"]);
  const imageRadius = useTransform(scrollYProgress, [0, 0.5], [0, 28]);

  // ── Content inside image: fades out ────────────────────────────────────
  const titleOpacity = useTransform(scrollYProgress, [0, 0.26], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.26], [0, -50]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  // ── Navbar: transparent overlay → floating white pill ──────────────────
  const navBg = useTransform(
    scrollYProgress,
    [0, 0.32],
    ["rgba(0,0,0,0)", "rgba(252,250,246,0.97)"],
  );
  const navRadius = useTransform(scrollYProgress, [0, 0.32], [0, 9999]);
  const navMx = useTransform(scrollYProgress, [0, 0.32], [0, 16]);
  const navMt = useTransform(scrollYProgress, [0, 0.32], [0, 12]);
  const navShadow = useTransform(
    scrollYProgress,
    [0.1, 0.32],
    ["0 0 0 0 rgba(0,0,0,0)", "0 2px 20px rgba(0,0,0,0.07)"],
  );
  const navTextColor = useTransform(
    scrollYProgress,
    [0.05, 0.28],
    ["rgba(255,255,255,1)", "rgba(28,26,23,1)"],
  );

  // ── Side photos: fly in from off-screen ────────────────────────────────
  const leftX = useTransform(scrollYProgress, [0.08, 0.55], [-480, 0]);
  const rightX = useTransform(scrollYProgress, [0.08, 0.55], [480, 0]);
  const sideOpacity = useTransform(scrollYProgress, [0.08, 0.48], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* ── Sticky viewport ─────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden isolate bg-[#f5f0e8]">
        {/* ── Navbar ──────────────────────────────────────────────────── */}
        <div className="absolute inset-x-0 top-0 z-50">
          <motion.nav
            style={{
              background: navBg,
              borderRadius: navRadius,
              boxShadow: navShadow,
              marginLeft: navMx,
              marginRight: navMx,
              marginTop: navMt,
            }}
            className="flex items-center justify-between px-6 py-4"
          >
            {/* Logo */}
            <motion.span
              style={{ color: navTextColor }}
              className="font-serif text-xl italic font-semibold select-none"
            >
              J&amp;P
            </motion.span>

            {/* Nav links + CTA */}
            <div className="flex items-center gap-5">
              {NAV_LINKS.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ color: navTextColor }}
                  className="hidden text-sm tracking-wide transition-opacity hover:opacity-70 md:block"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#rsvp"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition"
                style={{ backgroundColor: "rgba(120,90,50,1)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Submit RSVP
              </motion.a>
            </div>
          </motion.nav>
        </div>

        {/* ── Left side photos (desktop only) ─────────────────────────── */}
        <motion.div
          style={{ x: leftX, opacity: sideOpacity }}
          className="absolute left-3 top-[10%] z-0 hidden flex-col gap-4 md:flex lg:left-8"
        >
          {/* Top-left: warm landscape (beach/cliff) */}
          <div
            className="h-52 w-72 overflow-hidden rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(160deg, #c9a455 0%, #a07840 35%, #704a20 70%, #503020 100%)",
            }}
          />
          {/* Mid-left: monochrome (dancing couple) */}
          <div
            className="ml-8 h-44 w-60 overflow-hidden rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(180deg, #7a7a7a 0%, #4a4a4a 45%, #252525 100%)",
            }}
          />
        </motion.div>

        {/* ── Right side photos (desktop only) ────────────────────────── */}
        <motion.div
          style={{ x: rightX, opacity: sideOpacity }}
          className="absolute right-3 top-[18%] z-0 hidden flex-col gap-4 md:flex lg:right-8"
        >
          {/* Top-right: cool cliff faces */}
          <div
            className="ml-auto h-44 w-52 overflow-hidden rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(180deg, #8090a8 0%, #506070 45%, #304050 100%)",
            }}
          />
          {/* Bottom-right: earthy dark (feet/shoes) */}
          <div
            className="h-56 w-56 overflow-hidden rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(160deg, #706858 0%, #4a4030 50%, #282018 100%)",
            }}
          />
        </motion.div>

        {/* ── Main image container ─────────────────────────────────────── */}
        <motion.div
          style={{
            position: "absolute",
            top: imgTop,
            left: imgLeft,
            right: imgRight,
            bottom: imgBottom,
            borderRadius: imageRadius,
            overflow: "hidden",
            zIndex: 10,
          }}
          className="shadow-2xl"
        >
          {/* Placeholder: sky → mountains → grass (landscape photo) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #7db8d8 0%, #90a8be 18%, #8a9aaa 32%, #6e8070 55%, #4a7048 75%, #3a5838 100%)",
            }}
          />

          {/* Subtle vignette for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.25) 100%)",
            }}
          />

          {/* ── Jim & Pam heading ── */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute bottom-16 left-8 right-4 md:bottom-24 md:left-12"
          >
            <h1 className="font-serif text-[68px] italic leading-none text-white drop-shadow-lg md:text-[100px] lg:text-[120px]">
              Jim &amp; Pam
            </h1>
          </motion.div>

          {/* ── Bottom bar with scroll hint ── */}
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-0 left-0 right-0 border-t border-white/20 px-6 py-5 md:px-10"
          >
            <div className="flex items-center justify-between">
              {/* Down arrow */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                  className="text-white/50"
                >
                  <path
                    d="M7 0v18M0.5 12l6.5 7 6.5-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              {/* Scroll hint text */}
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/55">
                Scroll to explore
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
