"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BadgeVenteIcon from "@/assets/icons/badge-vente.svg";
import BadgeHappyIcon from "@/assets/icons/badge-happy.svg";
import BadgePriveeIcon from "@/assets/icons/badge-privee.svg";

const deals = [
  {
    topLabel: "Plus que 8 dispos",
    BadgeIcon: BadgeVenteIcon,
    category: "VENTE FLASH",
    title: "Chaussures, Jusqu'à -60% !",
    desc: "Des chaussures tendance à prix réduit\npour un style impeccable sans se ruiner.",
  },
  {
    topLabel: "03:12:08",
    BadgeIcon: BadgeHappyIcon,
    category: "HAPPY HOURS",
    title: "Cashback X2 Aujourd'hui",
    desc: "Achetez vos chaussures et récupérez\nle double en bonus !",
  },
  {
    topLabel: "2 places dispos",
    BadgeIcon: BadgePriveeIcon,
    category: "VENTES PRIVÉES",
    title: "Accès membres : Jusqu'à -40%",
    desc: "Jusqu'à -40% sur nos chaussures exclusives\npour membres, stock limité !",
  },
];

export default function LastChanceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading mb-10 text-center"
        >
          Dernière chance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="card-hover rounded-[14px] p-6 flex flex-col"
              style={{ background: "#ffde77", minHeight: 580 }}
            >
              {/* Top label */}
              <div className="flex justify-end">
                <span
                  className="text-[#0d0d0d] font-semibold text-lg"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: 22,
                    letterSpacing: "-1.25px",
                  }}
                >
                  {deal.topLabel}
                </span>
              </div>

              {/* Badge icon — large, centered */}
              <div className="flex-1 flex items-center justify-center my-6">
                <deal.BadgeIcon style={{ width: 142, height: 85 }} />
              </div>

              {/* Category */}
              <span
                className="text-[#0d0d0d] font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 22,
                  letterSpacing: "-1.30px",
                }}
              >
                {deal.category}
              </span>

              {/* Title */}
              <h3
                className="text-[#0d0d0d] font-semibold mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(20px, 2vw, 31px)",
                  letterSpacing: "-1.61px",
                  lineHeight: "37px",
                }}
              >
                {deal.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#0d0d0d] whitespace-pre-line mb-6"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.5vw, 20px)",
                  lineHeight: "32px",
                  letterSpacing: "-0.32px",
                }}
              >
                {deal.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#"
            className="font-medium text-[#0d0d0d] hover:underline"
            style={{ fontFamily: "var(--font-poppins)", fontSize: 20, letterSpacing: "-0.29px" }}
          >
            Voir toutes les offres limitées
          </a>
        </motion.div>
      </div>
    </section>
  );
}
