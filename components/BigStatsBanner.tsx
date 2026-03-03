"use client";

import { motion } from "framer-motion";

export default function BigStatsBanner() {
    return (
        <section className="bg-[#0b0c0c] py-20 text-center pb-0">
            <div className="section-container mb-0">
                <h2
                    className="text-white text-4xl mb-4"
                    style={{ fontFamily: "var(--font-alan)", fontWeight: 500 }}
                >
                    Vous êtes plus de 2 600 000 !
                </h2>
                <div
                    className="text-white font-bold leading-tight mt-10"
                    style={{
                        fontFamily: "var(--font-alan)",
                        fontSize: "clamp(60px, 8vw, 120px)",
                        letterSpacing: "-2px"
                    }}
                >
                    2 600 000 €
                </div>

            </div>
        </section>
    );
}
