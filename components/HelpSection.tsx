"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CashbackHelpIcon from "@/assets/icons/cashback-help-icon.svg";
import Info1Icon from "@/assets/icons/info-1.svg";
import ReferralHelpIcon from "@/assets/icons/referral-icon.svg";
import Info2Icon from "@/assets/icons/info-2.svg";
import TechIcon from "@/assets/icons/tech-icon.svg";
import Info3Icon from "@/assets/icons/info-3.svg";
import CodesPromoCardIcon from "@/assets/icons/codes-promo-card.svg";
import HelpArrowsIcon from "@/assets/icons/help-arrows.svg";

const helpCards = [
  {
    Icon: CashbackHelpIcon,
    InfoIcon: Info1Icon,
    title: "Cashback & Réductions",
    desc: "Comprenez comment activer, suivre et\nvalider vos cashbacks et réductions.",
  },
  {
    Icon: ReferralHelpIcon,
    InfoIcon: Info2Icon,
    title: "Parrainage",
    desc: "Découvrez comment inviter vos proches\net gagner des points convertibles.",
  },
  {
    Icon: TechIcon,
    InfoIcon: Info3Icon,
    title: "Assistance technique",
    desc: "Solutions aux problèmes techniques\nextension navigateur, bugs...",
  },
];

export default function HelpSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-[#0b0c0c] font-semibold"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(28px, 3.5vw, 46px)",
                letterSpacing: "-2.39px",
                lineHeight: "53px",
              }}
            >
              Centre d&apos;aide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#0b0c0c]"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 300,
                fontSize: "clamp(13px, 1.3vw, 20px)",
                letterSpacing: "-0.34px",
              }}
            >
              Trouvez rapidement les réponses à vos questions.
            </motion.p>
          </div>
          <HelpArrowsIcon className="hidden md:block" style={{ width: 93, height: 43 }} />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Help cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
            {helpCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="card-hover rounded-[27px] p-7 flex flex-col gap-4"
                style={{ background: "#fffdf6", minHeight: 340 }}
              >
                {/* Icon */}
                <card.Icon style={{ width: 42, height: 42 }} />

                {/* Title */}
                <h3
                  className="text-[#131313] font-semibold"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(18px, 1.8vw, 28px)",
                    letterSpacing: "-1.61px",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#0b0c0c] whitespace-pre-line flex-1"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 300,
                    fontSize: "clamp(12px, 1vw, 16px)",
                    lineHeight: "26px",
                    letterSpacing: "-0.25px",
                  }}
                >
                  {card.desc}
                </p>

                {/* CTA */}
                <button
                  className="flex items-center gap-3 self-start bg-[#0b0c0c] text-white rounded-[38px] px-5 py-3 font-medium text-sm hover:opacity-85 transition-opacity"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  En savoir plus
                  <card.InfoIcon style={{ width: 22, height: 22, color: "#fff" }} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right: codes promo card illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden lg:block shrink-0"
            style={{ width: 380 }}
          >
            <CodesPromoCardIcon style={{ width: "100%", height: "auto" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
