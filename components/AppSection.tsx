"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExtensionFeaturesIcon from "@/assets/icons/extension-features.svg";
import PhoneMockupIcon from "@/assets/icons/mcdonalds.svg";
import GooglePlayIcon from "@/assets/icons/google-play.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import Image from "next/image";

export default function AppSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-20">
      <div className="section-container">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-heading text-center mb-16 text-4xl"
        >
          Gagner plus, dépenser moins
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Left: Extension ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <h3
              className="text-[#131313] font-bold text-center leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(22px, 2.4vw, 36px)",
                letterSpacing: "-1.2px",
              }}
            >
              Installez l&apos;extension Clickandplus et<br />économisez en 1 clic.
            </h3>

            {/* Browser mockup + browser icons side by side */}
            <div className="flex items-center justify-center gap-8">
              {/* Extension preview */}
              <Image src={"/images/ordinateur.png"} alt="extension" width={220} height={220} />

              {/* Browser icons stacked */}
              <div className="flex flex-col items-start gap-3 relative">
                <Image src={"/images/chrome.png"} className="" alt="chrome" width={64} height={64} />
                <Image src={"/images/firefox.png"} className="absolute top-0 left-10 " alt="firefox" width={64} height={64} />
                 <div className="flex justify-center">
              <button
                className="bg-dark text-white font-bold px-10 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer text-lg"
                style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.5px" }}
              >
                Ajouter a chrome
              </button>
            </div>
              </div>
            </div>

            {/* CTA */}
           
          </motion.div>

          {/* ── Right: App ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-10"
          >
            <h3
              className="text-[#131313] font-bold text-center leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(22px, 2.4vw, 36px)",
                letterSpacing: "-1.2px",
              }}
            >
              Suivez vos cashback et vos offres<br />depuis l&apos;app Clickandplus.
            </h3>

            {/* Phone mockup + store buttons side by side */}
            <div className="flex items-center justify-center gap-8">
              {/* Phone outline mockup */}
           <Image src={"/images/phone.png"} alt="phone" width={100} height={100} />
              {/* Store buttons stacked */}
              <div className="flex flex-col gap-3">
                {/* Google Play */}
                <button
                  className="flex items-center gap-3 bg-dark text-white rounded-xl px-5 py-3 hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ minWidth: 200 }}
                >
                  <GooglePlayIcon className="w-8 h-8 flex-shrink-0" />
                  <div className="flex flex-col text-left leading-tight">
                    <span
                      className="text-white/70 text-[11px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Disponible sur
                    </span>
                    <span
                      className="text-white font-bold text-[17px]"
                      style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.5px" }}
                    >
                      Google Play
                    </span>
                  </div>
                </button>

                {/* App Store */}
                <button
                  className="flex items-center gap-3 bg-dark text-white rounded-xl px-5 py-3 hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ minWidth: 200 }}
                >
                  <AppleIcon className="w-8 h-8 flex-shrink-0" />
                  <div className="flex flex-col text-left leading-tight">
                    <span
                      className="text-white/70 text-[11px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Disponible sur
                    </span>
                    <span
                      className="text-white font-bold text-[17px]"
                      style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.5px" }}
                    >
                      App Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}