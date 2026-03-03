"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import CategoryArrowsIcon from "@/assets/icons/category-arrows.svg";

type Tab = "Produits" | "Services";

const categories = [
  {
    name: "High Tech",
    badge: "Populaire",
    featured: { image: "/images/featured-hitech.jpg", label: "Smartphones" },
    grid: [
      { image: "/images/laptop.jpg", label: "Ordinateurs" },
      { image: "/images/headphones.jpg", label: "Casques" },
      { image: "/images/smartwatch.jpg", label: "Montres" },
      { image: "/images/camera.jpg", label: "Appareils photo" },
    ],
  },
  {
    name: "Mode & Vêtements",
    badge: "Populaire",
    featured: { image: "/images/featured-mode.jpg", label: "Vêtements" },
    grid: [
      { image: "/images/shoes.jpg", label: "Chaussures" },
      { image: "/images/bag.jpg", label: "Sacs" },
      { image: "/images/glases.jpg", label: "Lunettes" },
      { image: "/images/watch.jpg", label: "Bijoux" },
    ],
  },
  {
    name: "Vert & Durable",
    badge: "Populaire",
    featured: { image: "/images/featured-vert.jpg", label: "Solaire" },
    grid: [
      { image: "/images/bicycle.jpg", label: "Vélos" },
      { image: "/images/garden.jpg", label: "Jardin" },
      { image: "/images/home.jpg", label: "Maison" },
      { image: "/images/eco.jpg", label: "Éco-responsable" },
    ],
  },
];

export default function FeaturedSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Produits");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-heading"
          >
            EN CE MOMENT SUR NOS MARCHANDS
          </motion.h2>

          <div className="flex items-center gap-8">
            <div className="flex bg-[#f6f6f6] rounded-full p-1 border border-gray-100">
              {(["Produits", "Services"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === tab ? "bg-dark text-white shadow-sm" : "text-dark/40"}`}
                  style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 16 }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <span className="sr-only">Précédent</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <span className="sr-only">Suivant</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="rounded-2xl p-6 bg-[#fbfbfb] border border-gray-50"
            >
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <h3 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>{cat.name}</h3>
                <span className="text-dark/40 font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>Populaire</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Large main image */}
                <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden group">
                  <div className="relative aspect-[1/2]">
                    <Image src={cat.featured.image} alt={cat.featured.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold p-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {cat.featured.label}
                    </div>
                  </div>
                </div>

                {/* 2x2 grid of small images */}
                <div className="col-span-1 grid grid-cols-2 gap-3">
                  {cat.grid.map((item, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden group aspect-square">
                      <Image src={item.image} alt={item.label} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/5" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button className="text-dark font-bold hover:underline py-2" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 16 }}>
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
