"use client";

import { motion } from "framer-motion";

export default function BigStatsBanner() {
    return (
        <section className="bg-[#0b0c0c] py-20 text-center">
            <div className="section-container">
                <h2
                    className="text-white text-4xl mb-4"
                    style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 500 }}
                >
                    Vous êtes plus de 2 600 000 !
                </h2>
                <div
                    className="text-white font-bold leading-tight"
                    style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "clamp(60px, 8vw, 120px)",
                        letterSpacing: "-2px"
                    }}
                >
                    2 600 000 €
                </div>
                <div className="mt-8">
                    <h3
                        className="text-white text-[28px] font-semibold mb-2"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                        Top deals du moment
                    </h3>
                    <p
                        className="text-white/60 text-[18px] max-w-2xl mx-auto"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Profitez des meilleures promotions sélectionnées pour vous par nos équipes.
                    </p>
                </div>
            </div>
        </section>
    );
}
