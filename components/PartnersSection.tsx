"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import PartnerAdidasIcon from "@/assets/icons/partner-adidas.svg";
import PartnerAirbnbIcon from "@/assets/icons/partner-airbnb.svg";
import PartnerAmazonIcon from "@/assets/icons/partner-amazon.svg";
import PartnerPumaIcon from "@/assets/icons/partner-puma.svg";
import PartnerSonyIcon from "@/assets/icons/partner-sony.svg";
import PartnerNikeIcon from "@/assets/icons/partner-nike.svg";
import PartnerAsusIcon from "@/assets/icons/partner-asus.svg";
import ChanelLogoIcon from "@/assets/icons/chanel-logo.svg";
import BrandsLogosRowIcon from "@/assets/icons/brands-logos-row.svg";

const alphabet = ["Populaire", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const partners = [
  { FrameIcon: PartnerAdidasIcon, name: "Adidas", cashback: "Jusqu'à 7,5 % de cashback", img: null },
  { FrameIcon: PartnerPumaIcon, name: "Ebay", cashback: "Jusqu'à 9 % de cashback", img: "/images/ebay.png" },
  { FrameIcon: PartnerPumaIcon, name: "Chanel", cashback: "Jusqu'à 7 % de cashback", img: null, LogoIcon: ChanelLogoIcon },
  { FrameIcon: PartnerAirbnbIcon, name: "Airbnb", cashback: "Profitez de 10 % de cashback", img: null },
  { FrameIcon: PartnerAmazonIcon, name: "Amazon", cashback: "Gagnez jusqu'à 7,5 %", img: null },
  { FrameIcon: PartnerPumaIcon, name: "ZARA", cashback: "Cashback jusqu'à 7,5 %", img: "/images/zara.png" },
  { FrameIcon: PartnerPumaIcon, name: "Puma", cashback: "Jusqu'à 15 % de cashback", img: null },
  { FrameIcon: PartnerSonyIcon, name: "Sony", cashback: "Jusqu'à 5,5 % de cashback", img: null },
  { FrameIcon: PartnerNikeIcon, name: "Nike", cashback: "Cashback jusqu'à 10,5 %", img: null },
  { FrameIcon: PartnerAsusIcon, name: "Asus", cashback: "Jusqu'à 7,5 % de retour", img: null },
];

export default function PartnersSection() {
  const [activeAlpha, setActiveAlpha] = useState("Populaire");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-heading text-center mb-12 text-4xl"
        >
          Obtenez les meilleurs deals chez nos partenaires préférés
        </motion.h2>

        {/* Alphabet nav */}
        <div className="flex items-center gap-3 flex-wrap mb-10  scrollbar-hidden pb-2 justify-between">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveAlpha(letter)}
              className="relative flex items-center cursor-pointer gap-1 font-semibold transition-colors shrink-0 p-1 "
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(14px, 1.3vw, 22px)",
                letterSpacing: "-1.30px",
                color: activeAlpha === letter ? "#0b0c0c" : "#0b0c0c",
                backgroundColor: letter === "Populaire"? "#FFF6D8" : "transparent",
                borderRadius: "5px",
              
              }}
            >
              {letter === "Populaire" && (
                <span className="w-3.5 h-3.5 rounded-full bg-orange-500 inline-block absolute -top-1 -right-2" />
              )}
              {letter}
              {activeAlpha === letter && (
                <motion.div
                  layoutId="alpha-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0b0c0c]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Partner cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group flex flex-col items-center  cursor-pointer  rounded-xl border border-transparent "
            >
              {/* Partner frame / logo */}
              <div className="w-full aspect-square flex items-center justify-center rounded-xl overflow-hidden ">
                {partner.FrameIcon ? (
                  <partner.FrameIcon style={{ width: "100%", height: "100%" }} />
                ) : partner.LogoIcon ? (
                  <partner.LogoIcon style={{ width: "100%", height: "100%" }} />
                ) : partner.img ? (
                  <div className="relative w-4/4 h-4/4">
                    <Image
                      src={partner.img}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : null}
              </div>
              <div className="text-left  w-full  -mt-10">
                <p
                  className="text-dark/40 font-medium text-xs mb-1 uppercase tracking-wider text-left"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {partner.name}
                </p>
                <p
                  className="text-dark font-bold text-sm"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {partner.cashback.replace(" cashback", "")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See all */}
        <div className="flex justify-center mt-12">
          <button
            className="text-white bg-dark hover:opacity-90 transition-opacity px-10 py-3 rounded-full font-bold shadow-lg"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Découvrir tous nos partenaires
          </button>
        </div>
      </div>
    </section>
  );
}
