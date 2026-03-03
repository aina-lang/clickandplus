"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CashbackHelpIcon from "@/assets/icons/deal-adidas-bg.svg";
import CodesPromoIcon from "@/assets/icons/deal-adidas-bg.svg";
import ReferralHelpIcon from "@/assets/icons/deal-adidas-bg.svg";
import TechIcon from "@/assets/icons/deal-adidas-bg.svg";
import AdidaasLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import AsusLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import PumaLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import SonyLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import AirbnbLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import IkeaLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import GucciLogoIcon from "@/assets/icons/deal-adidas-bg.svg";
import AmazonLogoIcon from "@/assets/icons/deal-adidas-bg.svg";

const brandLogos = [
  AdidaasLogoIcon, AsusLogoIcon, PumaLogoIcon, SonyLogoIcon,
  AirbnbLogoIcon, IkeaLogoIcon, GucciLogoIcon, AmazonLogoIcon,
];

const helpCards = [
  {
    Icon: CashbackHelpIcon,
    title: "Cashback & Réductions",
    desc: "Comprenez comment activer, suivre et valider vos cashbacks et réductions.",
  },
  {
    Icon: CodesPromoIcon,
    title: "Codes promo",
    desc: "Apprenez à utiliser vos codes promo et découvrez les conditions d'application.",
  },
  {
    Icon: ReferralHelpIcon,
    title: "Parrainage",
    desc: "Découvrez comment inviter vos proches et gagner des points convertibles.",
  },
  {
    Icon: TechIcon,
    title: "Assistance technique",
    desc: "Solutions aux problèmes techniques extension navigateur, bugs...",
  },
];

export default function HelpSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number>(1);

  return (
    <section ref={ref} className="bg-[#f9f9f6] pt-10 pb-20">

      {/* Brand logo strip */}
      <div className="w-full overflow-hidden mb-16 border-y border-gray-100 py-8">
        <motion.div
          className="flex gap-20 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...brandLogos, ...brandLogos].map((Logo, i) => (
            <Logo
              key={i}
              className="h-8 w-auto opacity-20 hover:opacity-100 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            />
          ))}
        </motion.div>
      </div>

      <div className="section-container">

        {/* Header */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#0b0c0c] font-bold text-4xl"
            style={{ fontFamily: "var(--font-space-grotesk)",  letterSpacing: "-1.5px" }}
          >
            Centre d&apos;aide
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <p
              className="text-[#0b0c0c] hidden md:block"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, fontSize: "clamp(13px, 1.2vw, 18px)" }}
            >
              Trouvez rapidement les réponses à vos questions.
            </p>
            <div className="flex gap-2 shrink-0">
              <button className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Help cards */}
        {/* overflow-visible so the rotated card isn't clipped */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-visible py-6">
          {helpCards.map((card, i) => {
            const isActive = hoveredIdx === i;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(1)}
                // Tilt on hover: slight clockwise rotation + lift
                whileHover={{ rotate: -3, scale: 1.04, y: -6 }}
                style={{
                  background: isActive ? "#ffde77" : "transparent",
                  minHeight: 300,
                  rotate: isActive ? -3 : 0,
                  transformOrigin: "bottom center",
                }}
                className="rounded-[24px] p-7 flex flex-col gap-4 cursor-pointer transition-colors duration-300 will-change-transform"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <card.Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3
                  className="text-[#131313] font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(17px, 1.6vw, 22px)", letterSpacing: "-0.8px" }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#0b0c0c] flex-1"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, fontSize: "clamp(12px, 1vw, 15px)", lineHeight: "24px" }}
                >
                  {card.desc}
                </p>

                {/* CTA */}
                <button
                  className={`flex items-center gap-3 self-start rounded-full px-5 py-3 font-medium text-sm transition-all duration-300 ${
                    isActive ? "bg-white text-dark hover:bg-gray-50" : "bg-dark text-white hover:opacity-85"
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  En savoir plus
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}