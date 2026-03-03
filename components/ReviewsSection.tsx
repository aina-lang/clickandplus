"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import CommentIcon from "@/assets/icons/comment.svg";
import TrustpilotLogoIcon from "@/assets/icons/trustpilot.svg";

const reviews = [
  {
    name: "Anthony Morel",
    initials: "AM",
    bgColor: "#d8e8ff",
    photo: null,
    text: "Grâce à Clickandplus, j'ai économisé sur presque tous mes achats. L'application est simple et super !",
  },
  {
    name: "Camille Dupont",
    initials: "CD",
    bgColor: "#ffe8d8",
    photo: "/images/review-camille.jpg",
    text: "Je ne pensais pas que le cashback pouvait rapporter autant. Chaque mois, je récupère une belle somme !",
  },
  {
    name: "Sophie Lambert",
    initials: "SL",
    bgColor: "#d8ffe8",
    photo: "/images/review-sophie.jpg",
    text: "J'adore les offres exclusives. Dès que je fais mes courses, je gagne des points. Je recommande à 100 %",
  },
  {
    name: "Julien Martin",
    initials: "JM",
    bgColor: "#f0d8ff",
    photo: "/images/review-julien.jpg",
    text: "Le suivi des économies est clair et motivant. C'est devenu l'une de mes apps indispensables.",
  },
  {
    name: "Élodie Bernard",
    initials: "ÉB",
    bgColor: "#ffd8e8",
    photo: "/images/review-elodie.jpg",
    text: "Les promotions sont vraiment utiles et le système est rapide. Je suis très satisfait de l'expérience.",
  },
];

const loopedReviews = [...reviews, ...reviews];

const CARD_WIDTH = 260;
const GAP = 16;
const HALF_WIDTH = reviews.length * (CARD_WIDTH + GAP);
const AUTO_SPEED = 0.5;

function GreenStars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < count ? "#00b67a" : "#e0e0e0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TrustpilotStars() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-9 h-9 bg-[#00b67a] flex items-center justify-center rounded-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
      <div className="relative w-9 h-9 rounded-sm overflow-hidden">
        <div className="absolute inset-0 bg-[#e0e0e0]" />
        <div className="absolute inset-0 bg-[#00b67a]" style={{ clipPath: "inset(0 38% 0 0)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  const offsetRef = useRef(0);
  const [, forceRender] = useState(0);
  const animRef = useRef<number | null>(null);

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const isPaused = useRef(false);

  const clamp = (val: number) => {
    let v = val % HALF_WIDTH;
    if (v < 0) v += HALF_WIDTH;
    return v;
  };

  useEffect(() => {
    const step = () => {
      if (!isDragging.current) {
        if (Math.abs(velocity.current) > 0.1) {
          offsetRef.current = clamp(offsetRef.current + velocity.current);
          velocity.current *= 0.92;
        } else if (!isPaused.current) {
          offsetRef.current = clamp(offsetRef.current + AUTO_SPEED);
        }
        forceRender((n) => n + 1);
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

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
    offsetRef.current = clamp(dragStartOffset.current - (e.clientX - dragStartX.current));
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) velocity.current = ((lastX.current - e.clientX) / dt) * 16;
    lastX.current = e.clientX;
    lastTime.current = now;
    forceRender((n) => n + 1);
  }, []);

  const onMouseUp = useCallback(() => { isDragging.current = false; }, []);

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
    offsetRef.current = clamp(dragStartOffset.current - (e.touches[0].clientX - dragStartX.current));
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) velocity.current = ((lastX.current - e.touches[0].clientX) / dt) * 16;
    lastX.current = e.touches[0].clientX;
    lastTime.current = now;
    forceRender((n) => n + 1);
  }, []);

  const onTouchEnd = useCallback(() => { isDragging.current = false; }, []);

  return (
    <section ref={ref} className="bg-[#fcfcfc] py-20">

      {/* Header inside container */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <TrustpilotLogoIcon className="w-[400px] h-20 " />
            </div>
            {/* <TrustpilotStars /> */}
            <div className="flex flex-col leading-tight">
              <span className="text-[#0d0d0d] font-bold text-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Excellent 4.6 sur 5
              </span>
              <span className="text-[#6b6b6b] text-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                +20 000 avis vérifiés
              </span>
            </div>
          </div>
          <p className="text-[#0d0d0d] text-center " style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "18px", fontWeight: 400 }}>
            Chaque jour, nos clients économisent et partagent leur avis.
          </p>
        </motion.div>
      </div>

      {/* Infinite carousel — full bleed */}
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
          className="flex select-none py-2"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${offsetRef.current}px)`,
            willChange: "transform",
            paddingLeft: "32px",
          }}
        >
          {loopedReviews.map((review, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl p-5 flex flex-col gap-3 bg-gray-100 flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div className="flex items-center gap-3">
                {review.photo ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={review.photo} alt={review.name} fill className="object-cover" sizes="48px" draggable={false} />
                  </div>
                ) : (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: review.bgColor, color: "#333" }}
                  >
                    {review.initials}
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-[#0d0d0d] font-semibold leading-tight" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 15 }}>
                    {review.name}
                  </span>
                  <GreenStars count={5} />
                </div>
              </div>
              <p className="text-[#0d0d0d] opacity-80 flex-1" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400, fontSize: "14px", lineHeight: "22px" }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA inside container */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <button
            className="px-8 py-3 rounded-full font-bold text-dark cursor-pointer hover:brightness-95 transition-all"
            style={{ background: "#ffde77", fontFamily: "var(--font-space-grotesk)", fontSize: 17 }}
          >
            Lire plus d&apos;avis
          </button>
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-dark text-white font-bold cursor-pointer hover:opacity-90 transition-all"
            style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 17 }}
          >
            <CommentIcon className="w-5 h-5" />
            Laisser mon avis
          </button>
        </motion.div>
      </div>

    </section>
  );
}