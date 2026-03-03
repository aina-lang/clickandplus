"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ChromeIcon from "@/assets/icons/chrome.svg";
import ExtensionFeaturesIcon from "@/assets/icons/extension-features.svg";
import ChromeExtScreenshotIcon from "@/assets/icons/chrome-ext-screenshot.svg";
import PhoneTopIcon from "@/assets/icons/phone-top.svg";
import PhoneBottomIcon from "@/assets/icons/phone-bottom.svg";
import GooglePlayIcon from "@/assets/icons/google-play.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import ExtensionIcon from "@/assets/icons/extension.svg";

export default function AppSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-heading text-center mb-12"
        >
          Gagner plus, dépenser moins
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Extension card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-[36px] p-8 flex flex-col gap-6"
            style={{ background: "rgba(248,248,248,0.5)", border: "1px solid #eee" }}
          >
            {/* Title */}
            <h3
              className="text-[#131313] font-semibold leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(28px, 2.8vw, 46px)",
                letterSpacing: "-2.39px",
                lineHeight: "48px",
              }}
            >
              Installez l&apos;extension Clickandplus et économisez en 1 clic.
            </h3>

            {/* Extension preview box */}
            <div
              className="rounded-[13px] p-4 flex items-center gap-4 border-[3px] border-[#e2e2e2]"
              style={{ background: "#fbfbfb" }}
            >
              <ExtensionFeaturesIcon style={{ width: 260, height: 120, flexShrink: 0 }} />
              <div className="flex flex-col gap-2">
                <ChromeExtScreenshotIcon style={{ width: 100, height: 70 }} />
                <ExtensionIcon style={{ width: 30, height: 18 }} />
              </div>
            </div>

            {/* Chrome button */}
            <button
              className="flex items-center gap-3 self-start bg-[#0b0c0c] text-white rounded-[43px] px-6 py-4 font-semibold hover:opacity-85 transition-opacity"
              style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 22, letterSpacing: "-1.40px" }}
            >
              <ChromeIcon style={{ width: 28, height: 28 }} />
              Ajouter a chrome
            </button>
          </motion.div>

          {/* Right: App card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[36px] p-8 flex flex-col gap-6"
            style={{ background: "rgba(248,248,248,0.5)", border: "1px solid #eee" }}
          >
            {/* Title */}
            <h3
              className="text-[#131313] font-semibold leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(28px, 2.8vw, 46px)",
                letterSpacing: "-2.39px",
                lineHeight: "48px",
              }}
            >
              Suivez vos cashback et vos offres depuis l&apos;app Clickandplus.
            </h3>

            {/* Phone mockup */}
            <div
              className="rounded-[18px] p-4 flex flex-col items-center gap-3 border-[4px] border-[#e2e2e2] self-center"
              style={{ background: "#fbfbfb", width: 127, minHeight: 222 }}
            >
              <PhoneTopIcon style={{ width: 90, height: 60 }} />
              <div className="w-full flex flex-col gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-[5px]"
                    style={{ height: 12, background: "#e2e2e2", width: i % 2 === 0 ? "100%" : "70%" }}
                  />
                ))}
              </div>
              <PhoneBottomIcon style={{ width: 90, height: 50 }} />
            </div>

            {/* Store buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                className="flex items-center gap-3 bg-[#0b0c0c] text-white rounded-[7px] px-4 py-3 hover:opacity-85 transition-opacity border border-[#f1f1f1]"
              >
                <GooglePlayIcon style={{ width: 42, height: 50 }} />
                <div className="flex flex-col text-left">
                  <span
                    className="text-white text-xs"
                    style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 400, lineHeight: "16px", letterSpacing: "-1.04px" }}
                  >
                    Disponible sur
                  </span>
                  <span
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20, letterSpacing: "-1.77px" }}
                  >
                    Google Play
                  </span>
                </div>
              </button>
              <button
                className="flex items-center gap-3 bg-[#0b0c0c] text-white rounded-[7px] px-4 py-3 hover:opacity-85 transition-opacity border border-[#f1f1f1]"
              >
                <AppleIcon style={{ width: 38, height: 50 }} />
                <div className="flex flex-col text-left">
                  <span
                    className="text-white text-xs"
                    style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 400, lineHeight: "16px", letterSpacing: "-1.04px" }}
                  >
                    Disponible sur
                  </span>
                  <span
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20, letterSpacing: "-1.77px" }}
                  >
                    App Store
                  </span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
