"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LogoIcon from "@/assets/icons/logo.svg";
import UserInputIcon from "@/assets/icons/user-input.svg";
import EmailInputIcon from "@/assets/icons/email-input.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";

const footerLinks = {
  "Accès rapide": ["Bons plans du moment", "Codes promo", "Cashback", "Services +", "Bons d'achat", "Boutiques partenaires", "Catégories", "Devenir affilié"],
  "A propos de nous": ["Qui sommes-nous", "Recrutement", "Mentions légales", "Conditions générales d'utilisation", "Politique de confidentialité", "Politique cookies", "Gestion des cookies"],
  "Aide & Support": ["FAQ", "Centre d'aide", "Nous contacter", "Application", "Extension", "Ressources utiles"],
  "Partenaires": ["Devenir partenaire", "Espace marchands", "API & intégration", ""],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="w-full" style={{ background: "#000000" }}>
      <div className="section-container py-16">
        {/* Top: newsletter + footer links */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-12">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <h3
              className="text-white font-semibold mb-2 leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: "clamp(28px, 3vw, 51px)",
                letterSpacing: "-2.65px",
                lineHeight: "59px",
              }}
            >
              Recevez les meilleurs bons plans chaque semaine
            </h3>
            <p
              className="text-white/60 mb-6"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, fontSize: 18 }}
            >
              Inscrivez-vous pour ne rien manquer
            </p>

            {/* Name input */}
            <div
              className="flex items-center gap-4 rounded-[50px] px-6 py-4 mb-4"
              style={{ background: "#212121" }}
            >
              <UserInputIcon style={{ width: 17, height: 23, color: "#fff" }} />
              <input
                type="text"
                placeholder="Prénom"
                className="bg-transparent text-white placeholder-white/60 outline-none flex-1"
                style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20 }}
              />
            </div>

            {/* Email input */}
            <div
              className="flex items-center gap-4 rounded-[50px] px-6 py-4 mb-5"
              style={{ background: "#212121" }}
            >
              <EmailInputIcon style={{ width: 30, height: 25, color: "#fff" }} />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent text-white placeholder-white/60 outline-none flex-1"
                style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20 }}
              />
            </div>

            {/* Subscribe button */}
            <button
              className="w-full py-4 rounded-[8px] font-semibold text-[#0d0d0d] hover:opacity-90 transition-opacity"
              style={{
                background: "#ffde77",
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(14px, 1.5vw, 22px)",
                letterSpacing: "-0.34px",
              }}
            >
              S&apos;INSCRIRE À LA NEWSLETTER
            </button>
          </motion.div>

          {/* Footer links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-white font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 1.4vw, 22px)",
                  }}
                >
                  {section}
                </h4>
                <ul className="flex flex-col gap-2">
                  {links.filter(Boolean).map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/65 hover:text-white transition-colors"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 400,
                          fontSize: "clamp(12px, 1vw, 18px)",
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5e5e5e] mb-8" />

        {/* Bottom: social links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <LogoIcon className="h-10 w-auto" style={{ filter: "brightness(10)" }} />

          <div className="flex items-center gap-4">
            <span
              className="text-white/60"
              style={{ fontFamily: "var(--font-poppins)", fontSize: 17 }}
            >
              Suivez-nous sur
            </span>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <FacebookIcon style={{ width: 24, height: 24, color: "#fff" }} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <LinkedinIcon style={{ width: 24, height: 24, color: "#fff" }} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <WhatsappIcon style={{ width: 24, height: 24, color: "#fff" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
