"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import PlayArrowIcon from "@/assets/icons/play-arrow-left.svg";
import DealBrand1Icon from "@/assets/icons/deal-brand-1.svg";
import DealBrand2Icon from "@/assets/icons/deal-brand-2.svg";
import DealBrand3Icon from "@/assets/icons/deal-brand-3.svg";

const deals = [
  {
    bg: "/images/deal-bg-gaming.png",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand1Icon,
    cashback: "10 % de Cashback",
    btnLabel: "Activer l'offre",
  },
  {
    bg: "/images/deal-bg-fashion.jpg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand2Icon,
    cashback: "18 % de Cashback",
    btnLabel: "Activer l'offre",
  },
  {
    bg: "/icons/deal-adidas-bg.svg",
    category: "Mode & Lifestyle",
    BrandIcon: DealBrand3Icon,
    cashback: "15 % de Cashback",
    btnLabel: "Activer l'offre",
  },
];

export default function TopDealsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-[#0b0c0c] pb-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { img: "/images/deals/sneakers.png", cashback: "18% de Cashback", color: "var(--color-yellow)" },
            { img: "/images/deals/ps5.png", cashback: "12% de Cashback", color: "var(--color-yellow)" },
            { img: "/images/deals/laptop.png", cashback: "15% de Cashback", color: "var(--color-yellow)" },
            { img: "/images/deals/sneakers-2.png", cashback: "10% de Cashback", color: "var(--color-yellow)" },
          ].map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "1/1.2" }}
            >
              <img
                src={deal.img}
                alt="deal"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div
                  className="py-3 px-4 rounded-xl font-bold text-center text-dark"
                  style={{ backgroundColor: deal.color, fontFamily: "var(--font-space-grotesk)", fontSize: "16px" }}
                >
                  {deal.cashback}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Voir toutes les offres
          </button>
        </div>
      </div>
    </section>
  );
}
