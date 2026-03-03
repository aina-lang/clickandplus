"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import GucciLogoIcon from "@/assets/icons/gucci-brand.svg";
import AirbnbLogoIcon from "@/assets/icons/airbnb-brand.svg";
import SonyLogoIcon from "@/assets/icons/sony-text.svg";
import AmazonLogoIcon from "@/assets/icons/amazon-text.svg";

const deals = [
  {
    image: "/images/fashion-accessories.jpg",
    category: "Mode & Accessoires",
    categoryHighlight: true,
    BrandLogo: GucciLogoIcon,
    desc: "Produit cosmétique GUCCI\nCollection Beauty, format luxe.",
  },
  {
    image: "/images/fashion-accessories.jpg",
    category: "Maison et Jardin",
    categoryHighlight: false,
    BrandLogo: AirbnbLogoIcon,
    desc: "Bon d'achat Airbnb valable sur\ntoutes les réservations.",
  },
  {
    image: "/images/fashion-accessories.jpg",
    category: "High-tech",
    categoryHighlight: false,
    BrandLogo: SonyLogoIcon,
    desc: "Accessoire smartphone SONY\nCompatibilité universelle.",
  },
  {
    image: "/images/fashion-accessories.jpg",
    category: "Toutes les catégories",
    categoryHighlight: false,
    BrandLogo: AmazonLogoIcon,
    desc: "Bon d'achat Amazon valable\nsur toutes les catégories.",
  },
];

export default function BestDealsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-20">
      <div className="section-container px-12">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading text-center mb-14 text-4xl"
        >
          Les meilleures réductions
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Image + brand block */}
              <div className=" relative">
                {/* Product image */}
                <div className="relative w-full aspect-[5/3] overflow-hidden ">
                  <Image
                    src={deal.image}
                    alt={deal.desc}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Category badge */}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-[13px] font-semibold ${deal.categoryHighlight
                        ? "bg-[#f5d90a] text-dark"
                        : "bg-white text-dark"
                      }`}
                    style={{ fontFamily: "var(--font-alan)" }}
                  >
                    {deal.category}
                  </span>
                </div>

                {/* Brand logo */}
                <div className="flex items-center justify-center px-6 py-4 bg-white w-1/2 mx-auto -bottom-4 absolute translate-x-1/2 rounded-2xl">
                  <deal.BrandLogo className="h-8 w-auto object-contain" />
                </div>
              </div>

              {/* Description */}
              <p
                className="text-dark text-center whitespace-pre-line mt-8 mb-5 leading-relaxed"
                style={{
                  fontFamily: "var(--font-alan)",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                {deal.desc}
              </p>

              {/* CTA button */}
              <button
                className="flex items-center w-3/4 mx-auto justify-center gap-2 bg-dark text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer text-[14px] "
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Profiter de l&apos;offre
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}