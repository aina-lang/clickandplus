"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import GucciIcon from "@/assets/icons/brand-gucci.svg";
import AirbnbTextIcon from "@/assets/icons/brand-airbnb-text.svg";
import SonyIcon from "@/assets/icons/brand-sony.svg";
import AmazonIcon from "@/assets/icons/brand-amazon.svg";
import ArrowExtIcon from "@/assets/icons/arrow-ext.svg";

type DealTab = "TOP CASHBACKS" | "TOP CODES PROMO" | "TOP PARTENAIRES";

const tabs: DealTab[] = ["TOP CASHBACKS", "TOP CODES PROMO", "TOP PARTENAIRES"];

const dealCards = [
  {
    category: "Mode & Accessoires",
    BrandIcon: GucciIcon,
    price: "8",
    desc: "Produit cosmétique GUCCI\nCollection Beauty, format luxe.",
    bg: "#f5f5f5",
  },
  {
    category: "Maison et Jardin",
    BrandIcon: AirbnbTextIcon,
    price: "15",
    desc: "Bon d'achat Airbnb valable sur\ntoutes les réservations.",
    bg: "#fff5f5",
  },
  {
    category: "High-tech",
    BrandIcon: SonyIcon,
    price: "10",
    desc: "Accessoire smartphone SONY\nCompatibilité universelle.",
    bg: "#f5f5f5",
  },
  {
    category: "Toutes les catégories",
    BrandIcon: AmazonIcon,
    price: "5",
    desc: "Bon d'achat Amazon valable\nsur toutes les catégories.",
    bg: "#fffaf0",
  },
];

export default function BestDealsSection() {
  const [activeTab, setActiveTab] = useState<DealTab>("TOP CASHBACKS");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-heading text-center mb-12"
        >
          Les meilleures réductions
        </motion.h2>

        {/* Deal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dealCards.map((card, i) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-hover rounded-[27px] p-6 flex flex-col gap-4 border border-gray-100"
              style={{ background: "#ffffff", minHeight: 420 }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-dark/40 font-bold"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "14px",
                  }}
                >
                  {card.category}
                </span>
                <div
                  className="bg-[#000] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {card.price}€
                </div>
              </div>

              {/* Brand logo */}
              <div className="flex-1 flex items-center justify-center py-6">
                <card.BrandIcon style={{ width: 140, height: 60, maxWidth: "100%" }} />
              </div>

              {/* Description */}
              <p
                className="text-dark font-medium text-center"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                {card.desc}
              </p>

              {/* CTA button */}
              <div className="flex justify-center">
                <button
                  className="bg-dark text-white rounded-full px-8 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Voir l'offre
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-12 rounded-[7px] py-4 px-8 flex-wrap"
          style={{ background: "#fbfbfb" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative pb-2 transition-colors font-semibold"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(14px, 1.5vw, 22px)",
                letterSpacing: "-1.35px",
                color: activeTab === tab ? "#0b0c0c" : "#656565",
              }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="deal-tab"
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-[#ffd03e]"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
