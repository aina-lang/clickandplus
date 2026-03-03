"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 500, suffix: "k", label: "Membres déjà inscrits" },
  { target: 2.6, suffix: " M", label: "D'avantages reversés" },
  { target: 1340, prefix: "+ ", suffix: "", label: "Enseignes référencées" },
];

function AnimatedNumber({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(target < 10 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  const display =
    target < 10
      ? `${prefix}${value.toFixed(1)}${suffix}`
      : `${prefix}${Math.round(value).toLocaleString("fr-FR")}${suffix}`;

  return <span ref={ref}>{display}</span>;
}

export default function StatsBar() {
  return (
    <section className="bg-[#fcfcfc] py-10">
      <div className="section-container">
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-16">
              <div className="flex items-center flex-col gap-3 text-center">
                <span className="text-dark leading-tight font-bold text-4xl" style={{ fontFamily: "var(--font-alan)" }}>
                  <AnimatedNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </span>
                <span className="text-muted font-normal text-base" style={{ fontFamily: "var(--font-alan)" }}>
                  {stat.label}
                </span>
              </div>
              {idx < stats.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-gray-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
