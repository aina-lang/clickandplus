"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import EbayLogoIcon from "@/assets/icons/airbnb-brand.svg";
import AirbnbLogoIcon from "@/assets/icons/airbnb-brand.svg";
import ZaraLogoIcon from "@/assets/icons/airbnb-brand.svg";
import AliexpressLogoIcon from "@/assets/icons/airbnb-brand.svg";
import GucciLogoIcon from "@/assets/icons/airbnb-brand.svg";
import NewBalanceLogoIcon from "@/assets/icons/airbnb-brand.svg";
import NikeLogoIcon from "@/assets/icons/airbnb-brand.svg";
import AsusLogoIcon from "@/assets/icons/airbnb-brand.svg";
import PumaLogoIcon from "@/assets/icons/airbnb-brand.svg";
import SonyLogoIcon from "@/assets/icons/airbnb-brand.svg";
import AmazonLogoIcon from "@/assets/icons/airbnb-brand.svg";
import McdonaldsLogoIcon from "@/assets/icons/airbnb-brand.svg";

type Tab = "TOP CASHBACKS" | "TOP CODES PROMO" | "TOP PARTENAIRES";

const cashbacks = [
    { BrandLogo: EbayLogoIcon, rate: "15%", top: "13%", featured: false },
    { BrandLogo: AirbnbLogoIcon, rate: "14%", top: "12,5%", featured: true },
    { BrandLogo: ZaraLogoIcon, rate: "13%", top: "11,5%", featured: false },
    { BrandLogo: AliexpressLogoIcon, rate: "12%", top: "10%", featured: false },
    { BrandLogo: GucciLogoIcon, rate: "12%", top: "9,5%", featured: false },
    { BrandLogo: NewBalanceLogoIcon, rate: "10%", top: "11,5%", featured: false },
    { BrandLogo: NikeLogoIcon, rate: "10%", top: "9,5%", featured: false },
    { BrandLogo: AsusLogoIcon, rate: "10%", top: "8,5%", featured: false },
    { BrandLogo: PumaLogoIcon, rate: "9%", top: "7,5%", featured: false },
    { BrandLogo: SonyLogoIcon, rate: "9%", top: "10,5%", featured: false },
    { BrandLogo: AmazonLogoIcon, rate: "8%", top: "7,5%", featured: false },
    { BrandLogo: McdonaldsLogoIcon, rate: "8%", top: "7,5%", featured: false },
];

function PlusIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export default function TopCashbacksSection() {
    const [activeTab, setActiveTab] = useState<Tab>("TOP CASHBACKS");
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
    const [selectedIdx, setSelectedIdx] = useState<number | null>(1); // Airbnb sélectionné par défaut

    return (
        <section ref={ref} className="bg-[#f5f5f5] py-20">
            <div className="section-container">

                {/* Tabs */}
                <div className="flex items-center justify-center gap-12 mb-16 border-b border-gray-200">
                    {(["TOP CASHBACKS", "TOP CODES PROMO", "TOP PARTENAIRES"] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 font-bold text-[15px] tracking-wide transition-colors relative cursor-pointer ${activeTab === tab ? "text-dark" : "text-gray-400 hover:text-gray-600"
                                }`}
                            style={{ fontFamily: "var(--font-alan)", letterSpacing: "0.5px" }}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="tab-underline"
                                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f5d90a] rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0"
                >
                    {cashbacks.map((item, i) => {
                        const isActive = selectedIdx === i;
                        return <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.05, duration: 0.45 }}
                            className={`relative flex flex-col items-center px-4 py-6 cursor-pointer rounded-2xl transition-all duration-200 ${isActive
                                ? "border-2 border-dark bg-white shadow-sm z-10"
                                : "border-2 border-transparent hover:border-gray-200 hover:bg-white/70"
                                }`}
                        >
                            {/* Top percentage */}
                            <span
                                className="absolute top-3 right-4 text-[12px] text-gray-400 font-medium line-through"
                                style={{ fontFamily: "var(--font-alan)" }}
                            >
                                {item.top}
                            </span>

                            {/* Brand logo */}
                            <div className="flex items-center justify-center h-16 w-full mb-4">
                                <item.BrandLogo className="max-h-10 max-w-[120px] w-auto object-contain" />
                            </div>

                            {/* Separator */}
                            <div className="w-full border-t border-dashed border-gray-300 mb-4" />

                            {/* Cashbacks label */}
                            <span
                                className="text-dark font-bold text-[13px] mb-2"
                                style={{ fontFamily: "var(--font-alan)" }}
                            >
                                Cashbacks
                            </span>

                            {/* Rate badge */}
                            <div
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[14px] ${item.featured ? "bg-dark text-white" : "bg-[#f5d90a] text-dark"
                                    }`}
                                style={{ fontFamily: "var(--font-alan)" }}
                            >
                                {item.rate}
                                <div
                                    className={`w-4 h-4 rounded-full flex items-center justify-center ${item.featured ? "bg-white/20" : "bg-dark/10"
                                        }`}
                                >
                                    <PlusIcon />
                                </div>
                            </div>
                        </motion.div>
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-16"
                >
                    <button
                        className="bg-dark text-white font-bold px-12 py-4 rounded-full hover:opacity-90 transition-opacity cursor-pointer text-[16px]"
                        style={{ fontFamily: "var(--font-alan)" }}
                    >
                        Voir toutes les offres
                    </button>
                </motion.div>

            </div>
        </section>
    );
}