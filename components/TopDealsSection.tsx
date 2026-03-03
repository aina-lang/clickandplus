"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import DealBrand1Icon from "@/assets/icons/deal-brand-1.svg";
import DealBrand2Icon from "@/assets/icons/deal-brand-2.svg";
import DealBrand3Icon from "@/assets/icons/deal-brand-3.svg";

const deals = [
  {
    bg: "/images/deal-bg-gaming.png",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand1Icon,
    cashback: "10 % de Cashback",
  },
  {
    bg: "/images/deal-bg-fashion.jpg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand2Icon,
    cashback: "18 % de Cashback",
  },
  {
    bg: "/icons/deal-adidas-bg.svg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand3Icon,
    cashback: "15 % de Cashback",
  },
  {
    bg: "/icons/deal-adidas-bg.svg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand3Icon,
    cashback: "15 % de Cashback",
  },
  {
    bg: "/icons/deal-adidas-bg.svg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand3Icon,
    cashback: "15 % de Cashback",
  },
  {
    bg: "/icons/deal-adidas-bg.svg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand3Icon,
    cashback: "15 % de Cashback",
  },
];

const loopedDeals = [...deals, ...deals];

const CARD_WIDTH = 340;
const GAP = 20;
const HALF_WIDTH = deals.length * (CARD_WIDTH + GAP);
const AUTO_SPEED = 0.6; // px per frame

export default function TopDealsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-80px",
  });

  const offsetRef = useRef(0);
  const [, forceRender] = useState(0);
  const animRef = useRef<number | null>(null);

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const isPaused = useRef(false); // hover pause (ref to avoid re-render)

  // Clamp offset within seamless bounds
  const clamp = (val: number) => {
    let v = val % HALF_WIDTH;
    if (v < 0) v += HALF_WIDTH;
    return v;
  };

  // Main animation loop
  useEffect(() => {
    const step = () => {
      if (!isDragging.current) {
        // Apply momentum after drag release
        if (Math.abs(velocity.current) > 0.1) {
          offsetRef.current = clamp(offsetRef.current + velocity.current);
          velocity.current *= 0.92; // friction
        } else if (!isPaused.current) {
          // Auto-scroll
          offsetRef.current = clamp(offsetRef.current + AUTO_SPEED);
        }
        forceRender((n) => n + 1);
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // ── Mouse events ──────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    velocity.current = 0;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    offsetRef.current = clamp(dragStartOffset.current - dx);

    // Track velocity
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) velocity.current = ((lastX.current - e.clientX) / dt) * 16;
    lastX.current = e.clientX;
    lastTime.current = now;

    forceRender((n) => n + 1);
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // ── Touch events ──────────────────────────────────────────────
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    velocity.current = 0;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
    lastX.current = e.touches[0].clientX;
    lastTime.current = performance.now();
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    offsetRef.current = clamp(dragStartOffset.current - dx);

    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) velocity.current = ((lastX.current - e.touches[0].clientX) / dt) * 16;
    lastX.current = e.touches[0].clientX;
    lastTime.current = now;

    forceRender((n) => n + 1);
  }, []);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#0b0c0c] py-20 mt-0">
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white font-bold text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Top deals du moment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-base"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Trouvez les meilleurs bons plans du moment classés par univers
        </motion.p>
      </div>

      {/* Carousel */}
      <div
        className="w-full overflow-hidden"
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; isDragging.current = false; }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex select-none"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${offsetRef.current}px)`,
            willChange: "transform",
          }}
        >
          {loopedDeals.map((deal, i) => (
            <div
              key={i}
              className="relative group flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
              // Prevent click from firing after a drag
              onClick={(e) => { if (Math.abs(velocity.current) > 1) e.preventDefault(); }}
            >
              {/* Card — ENTIRE card blurs + darkens on hover */}
              <div
                className="rounded-2xl overflow-hidden transition-all duration-500 group-hover:blur-[3px] group-hover:brightness-50"
                style={{ background: (deal as any).highlight ? "#b0f000" : "#1c1c1c" }}
              >
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="bg-white text-dark text-[12px] font-semibold px-3 py-1.5 rounded-full"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {deal.category}
                  </span>
                </div>

                {/* Product image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={deal.bg}
                    alt={deal.cashback}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </div>

                {/* Bottom info bar */}
                <div className="relative px-5 pt-8 pb-5">
                  {/* Brand logo — overlapping image/bar boundary */}
                  <div className="absolute -top-6 left-5 w-15 h-15 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                    <deal.BrandIcon className="object-contain" />
                  </div>

                  <h3
                    className={`font-bold text-3xl leading-tight mt-3 ${(deal as any).highlight ? "text-dark" : "text-white"}`}
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {deal.cashback}
                  </h3>
                </div>
              </div>

              {/* Button — outside the blurred div, always rendered sharp */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none group-hover:pointer-events-auto">
                <button className="bg-yellow cursor-pointer hover:bg-yellow-muted transition-colors text-dark font-bold py-3.5 px-7 rounded-full shadow-xl text-sm whitespace-nowrap">
                  Activer l&apos;offre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-14">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/20 text-white px-10 py-3.5 rounded-full hover:bg-white/50 cursor-pointer transition-colors text-[15px] font-medium"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Voir toutes les catégories
        </motion.button>
      </div>
    </section>
  );
}