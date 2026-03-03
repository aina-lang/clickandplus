"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BadgeVenteIcon from "@/assets/icons/badge-vente.svg";
import BadgeHappyIcon from "@/assets/icons/badge-happy.svg";
import BadgePriveeIcon from "@/assets/icons/badge-privee.svg";

const deals = [
  {
    topLabel: "Plus que 8 dispos",
    topLabelBg: "bg-white",
    topLabelColor: "text-[#0d0d0d]",
    BrandIcon: BadgeVenteIcon,
    category: "VENTE FLASH",
    title: "Chaussures, Jusqu'à -60% !",
    desc: "Des chaussures tendance à prix réduit\npour un style impeccable sans se ruiner.",
    imageSrc: "/images/shoes.png",
  },
  {
    topLabel: "03:12:08",
    topLabelBg: "bg-[#ff3b30]",
    topLabelColor: "text-white",
    BrandIcon: BadgeHappyIcon,
    category: "HAPPY HOURS",
    title: "Cashback X2 Aujourd'hui",
    desc: "Achetez vos chaussures et récupérez\nle double en bonus !",
    imageSrc: "/images/shoes2.png",
  },
  {
    topLabel: "2 places dispos",
    topLabelBg: "bg-white",
    topLabelColor: "text-[#0d0d0d]",
    BrandIcon: BadgePriveeIcon,
    category: "VENTES PRIVÉES",
    title: "Accés membres : Jusqu'à -40%",
    desc: "Jusqu'à -40% sur nos chaussures exclusives\npour membres, stock limité !",
    imageSrc: "/images/shoes.png",
  },
];

export default function LastChanceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#fcfcfc] py-20">
      <div className="section-container mx-0 px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading mb-14 text-center text-5xl"
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
              className="card-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              style={{ background: "#f0f0f0" }}
            >
              {/* Top — product image area */}
              <div className="relative bg-[#e8e8e8] flex items-center justify-center" style={{ minHeight: 240 }}>
                <img
                  src={deal.imageSrc}
                  alt={deal.title}
                  className="w-full h-full object-contain px-4 py-6"
                  style={{ maxHeight: 240 }}
                />

                {/* Top-right label pill */}
                <span
                  className={`absolute top-4 right-4 ${deal.topLabelBg} ${deal.topLabelColor} font-semibold text-sm px-4 py-1.5 rounded-full shadow-sm`}
                  style={{ fontFamily: "var(--font-alan)" }}
                >
                  {deal.topLabel}
                </span>
              </div>

              {/* Bottom — yellow info area */}
              <div className="flex flex-col px-5 pt-5 pb-6 h-full" style={{ background: "#ffde77" }}>
                {/* Brand logo + category row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm p-2 flex-shrink-0">
                    <deal.BrandIcon className="w-full h-full object-contain" />
                  </div>
                  <span
                    className="text-[#0d0d0d] font-bold text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-alan)", letterSpacing: "-0.3px" }}
                  >
                    {deal.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[#0d0d0d] font-bold mb-2 leading-tight"
                  style={{
                    fontFamily: "var(--font-alan)",
                    fontSize: "clamp(18px, 1.8vw, 24px)",
                    letterSpacing: "-0.8px",
                  }}
                >
                  {deal.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#0d0d0d] whitespace-pre-line"
                  style={{
                    fontFamily: "var(--font-alan)",
                    fontWeight: 300,
                    fontSize: "clamp(13px, 1.2vw, 16px)",
                    lineHeight: "1.6",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {deal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-darker text-white px-10 text-center flex mt-8 py-3.5 mx-auto rounded-full hover:bg-dark/50 cursor-pointer transition-colors text-[15px] font-medium"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Voir toutes les offres limitées
        </motion.button>
      </div>
    </section>
  );
}