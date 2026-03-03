"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

type Tab = "Produits" | "Services";

const categories = [
  {
    name: "Électronique",
    badge: "Populaire",
    grid: [
      { image: "/images/featured-hitech.jpg", label: "Smartphones" },
      { image: "/images/laptop.jpg", label: "Ordinateurs" },
      { image: "/images/headphones.jpg", label: "Casques audio" },
      { image: "/images/smartwatch.jpg", label: "Montres connectées" },
    ],
  },
  {
    name: "Mode & Vêtements",
    badge: "Populaire",
    grid: [
      { image: "/images/featured-mode.jpg", label: "Homme" },
      { image: "/images/shoes.jpg", label: "Femme" },
      { image: "/images/bag.jpg", label: "Chaussures" },
      { image: "/images/glases.jpg", label: "Accessoires" },
    ],
  },
  {
    name: "Maison & Jardin",
    badge: "Populaire",
    grid: [
      { image: "/images/featured-vert.jpg", label: "Meubles" },
      { image: "/images/home.jpg", label: "Décoration" },
      { image: "/images/bicycle.jpg", label: "Cuisine" },
      { image: "/images/garden.jpg", label: "Jardinage" },
    ],
  },
];

export default function FeaturedSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Produits");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-20">
      <div className="section-container">

        {/* Header */}
        <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-heading text-4xl"
          >
            En vedette chez nos utilisateurs
          </motion.h2>

          <div className="flex items-center gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {(["Produits", "Services"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full font-bold transition-all text-[15px] cursor-pointer ${activeTab === tab
                      ? "bg-dark text-white shadow-sm"
                      : "bg-white text-dark border border-gray-200 hover:bg-gray-50"
                    }`}
                  style={{ fontFamily: "var(--font-alan)" }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Précédent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Suivant"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="flex flex-col"
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="font-bold text-2xl text-dark"
                  style={{ fontFamily: "var(--font-alan)" }}
                >
                  {cat.name}
                </h3>
                <span
                  className="px-4 py-1.5 rounded-full font-bold text-sm text-dark"
                  style={{
                    background: "var(--color-yellow)",
                    fontFamily: "var(--font-alan)",
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              {/* 2×2 image grid */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                {cat.grid.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2 cursor-pointer group">
                    <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-200">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 16vw"
                      />
                    </div>
                    <span
                      className="text-dark font-semibold text-center text-[14px]"
                      style={{ fontFamily: "var(--font-alan)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-center mt-8">
                <button
                  className="bg-dark text-white font-bold px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer text-[15px]"
                  style={{ fontFamily: "var(--font-alan)" }}
                >
                  Voir tous les produits
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}