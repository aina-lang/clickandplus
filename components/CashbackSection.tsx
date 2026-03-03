"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import CircleArrowYellowIcon from "@/assets/icons/circle-arrow-yellow.svg";
import CircleArrowWhiteIcon from "@/assets/icons/circle-arrow-white.svg";
import AirbnbBrandIcon from "@/assets/icons/airbnb-brand.svg";
import GucciBrandIcon from "@/assets/icons/gucci-brand.svg";
import NewBalanceIcon from "@/assets/icons/new-balance.svg";
import NikeIcon from "@/assets/icons/nike.svg";
import AsusIcon from "@/assets/icons/asus.svg";
import PumaIcon from "@/assets/icons/puma.svg";
import SonyTextIcon from "@/assets/icons/sony-text.svg";
import AmazonTextIcon from "@/assets/icons/amazon-text.svg";
import McdIcon from "@/assets/icons/mcdonalds.svg";

interface BrandItem {
  oldRate: string;
  newRate: string;
  BrandLogo: React.FC<React.SVGProps<SVGElement>> | null;
  brandImg?: string;
  bgColor?: string;
  labelColor?: string;
}

const brands: BrandItem[] = [
  { oldRate: "13%", newRate: "15%", BrandLogo: null, brandImg: "/images/ebay.png" },
  { oldRate: "12,5%", newRate: "14%", BrandLogo: AirbnbBrandIcon, bgColor: "#ff5a5f" },
  { oldRate: "11,5%", newRate: "13%", BrandLogo: null, brandImg: "/images/zara.png" },
  { oldRate: "10%", newRate: "12%", BrandLogo: null, brandImg: "/images/aliexpress.png" },
  { oldRate: "9,5%", newRate: "12%", BrandLogo: GucciBrandIcon },
  { oldRate: "11,5%", newRate: "10%", BrandLogo: NewBalanceIcon },
  { oldRate: "9,5%", newRate: "10%", BrandLogo: NikeIcon, bgColor: "#585858" },
  { oldRate: "8,5%", newRate: "10%", BrandLogo: AsusIcon },
  { oldRate: "7,5%", newRate: "9%", BrandLogo: PumaIcon },
  { oldRate: "10,5%", newRate: "9%", BrandLogo: SonyTextIcon },
  { oldRate: "7,5%", newRate: "8%", BrandLogo: AmazonTextIcon },
  { oldRate: "7,5%", newRate: "8%", BrandLogo: McdIcon, bgColor: "#ffc300" },
];

function BrandCard({ brand, index, isInView }: { brand: BrandItem; index: number; isInView: boolean }) {
  const isHighlighted = index === 1; // Airbnb highlighted with border

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="card-hover rounded-[13px] p-4 flex flex-col items-center gap-3"
      style={{
        background: "#fbfbfb",
        border: isHighlighted ? "3px solid #0b0c0c" : "none",
        minHeight: 220,
      }}
    >
      {/* Old rate */}
      <span
        className="self-end text-[#cbcbcb] line-through"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 400,
          fontSize: 13,
          letterSpacing: "-0.83px",
        }}
      >
        {brand.oldRate}
      </span>

      {/* Brand logo */}
      <div
        className="flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          width: 120,
          height: 50,
          background: brand.bgColor || "transparent",
          padding: brand.bgColor ? "6px 10px" : 0,
        }}
      >
        {brand.brandImg ? (
          <img src={brand.brandImg} alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        ) : brand.BrandLogo ? (
          <brand.BrandLogo style={{ maxWidth: "100%", maxHeight: "100%", color: brand.bgColor ? "#fff" : undefined }} />
        ) : null}
      </div>

      {/* Dashed separator */}
      <div className="w-full border-t border-dashed border-[#c8c8c8]" />

      {/* Label */}
      <span
        className="text-[#131313] font-semibold text-sm"
        style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 14, letterSpacing: "-0.94px" }}
      >
        Cashbacks
      </span>

      {/* New rate + arrow */}
      <div
        className="flex items-center gap-2 rounded-[7px] px-3 py-2 w-full justify-between"
        style={{ background: "#ffd03e" }}
      >
        <span
          className="font-semibold"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: 17,
            letterSpacing: "-1.09px",
            color: "#0d0d0d",
          }}
        >
          {brand.newRate}
        </span>
        <CircleArrowYellowIcon className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

export default function CashbackSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        {/* Brand cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {brands.map((brand, i) => (
            <BrandCard key={i} brand={brand} index={i} isInView={isInView} />
          ))}
        </div>

        {/* See all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="text-[#0d0d0d] font-medium hover:underline"
            style={{ fontFamily: "var(--font-poppins)", fontSize: 20, letterSpacing: "-0.34px" }}
          >
            Voir toutes les offres
          </a>
        </motion.div>
      </div>
    </section>
  );
}
