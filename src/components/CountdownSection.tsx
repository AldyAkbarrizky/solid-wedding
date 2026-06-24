"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date("2026-07-04T00:00:00+07:00");

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
] as const;

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(getTimeLeft(WEDDING_DATE));

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="date"
      className="flex min-h-[100svh] items-center justify-center bg-white px-4 py-20 text-center text-[#5b0f0f] md:px-8 md:py-28"
    >
      <div className="mx-auto w-full max-w-[980px] translate-y-6 md:translate-y-[56px]">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto h-px w-[58px] origin-center bg-[#d7c5c0]"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.06 }}
          className="mt-16 font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[2px] text-[#8b7470] md:text-[18px] md:leading-[24px] md:tracking-[2.4px]"
        >
          Towards Our Happy Day
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mt-14 font-serif text-[44px] font-normal leading-none tracking-[1.2px] sm:text-[64px] md:text-[96px]"
        >
          Sabtu, 04 Juli 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="mx-auto mt-12 grid max-w-[560px] grid-cols-4 gap-2 sm:gap-4 md:mt-20 md:gap-5"
        >
          {units.map(({ key, label }) => (
            <div
              key={key}
              className="flex aspect-square min-w-0 flex-col items-center justify-center bg-[#FBFBF9] px-2 py-3"
            >
              <span className="font-serif text-[30px] font-normal leading-[36px] tracking-normal tabular-nums text-[#4a0e0e]">
                {String(timeLeft[key]).padStart(2, "0")}
              </span>
              <span className="mt-1 font-sans text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-[#9a817b]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
