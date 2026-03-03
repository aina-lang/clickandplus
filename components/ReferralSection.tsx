"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FriendsIllustrationIcon from "@/assets/icons/friends-illustration.svg";
import LinkIcon from "@/assets/icons/link.svg";

export default function ReferralSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full" style={{ background: "#0d0d0d", padding: "90px 0" }}>
      <div className="section-container -mx-10">
        <div className="flex items-center justify-between gap-9 flex-wrap relative">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex-1"
          >
            <h2
              className="text-white text-6xl font-bold text-nowrap"
            >
              Partagez et gagnez +
            </h2>

            <p
              className="mt-6 text-white"
              style={{
                fontFamily: "var(--font-alan)",
                fontWeight: 300,
                fontSize: "clamp(16px, 1.8vw, 26px)",
                letterSpacing: "-0.41px",
                lineHeight: "44px",
                maxWidth: 760,
              }}
            >
              Invitez d&apos;autres personnes à rejoindre Clickandplus et gagnez sur leurs achats des points
              convertibles en cash ou en réductions.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-8 mt-10 flex-wrap">
              <button
                className="flex items-center gap-3 text-[#0b0c0c] bg-white rounded-[43px] px-8 py-3 cursor-pointer font-semibold hover:opacity-85 transition-opacity border border-white/20"
                style={{ fontFamily: "var(--font-alan)", fontSize: 22 }}
              >
                Partager mon lien
                <LinkIcon className="w-8 h-8" style={{ color: "#0b0c0c" }} />
              </button>
              <a
                href="#"
                className="text-white font-semibold text-xl hover:opacity-75 transition-opacity"
                style={{ fontFamily: "var(--font-alan)", fontSize: 22 }}
              >
                En savoir plus
              </a>
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex-1 flex justify-end bg-red-500 w-full h-full"
          >
            <FriendsIllustrationIcon
              style={{ width: "100%", maxWidth: 560, height: "auto", }}
              className="w-full h-full object-contain absolute top-4 -right-10 "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
