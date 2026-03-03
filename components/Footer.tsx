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
  "Partenaires": ["Devenir partenaire", "Espace marchands", "API & intégration", "Ressources utiles"],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="w-full bg-black">
      <div className="section-container py-16">

        {/* ── Top: title left / form right ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12  justify-between"
        >
          {/* Left — title + subtitle */}
          <div className="pr-10">
            <h3
              className="text-white font-bold leading-tight mb-3"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(28px, 3vw, 52px)",
                letterSpacing: "-2px",
                lineHeight: "1.1",
              }}
            >
              Recevez les meilleurs bons plans chaque semaine
            </h3>
            <p
              className="text-white/60"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 300, fontSize: 18 }}
            >
              Inscrivez-vous pour ne rien manquer
            </p>
          </div>

          {/* Right — inputs + button */}
          <div className="flex flex-col gap-4 px-20">
            {/* Name input */}
            <div className="flex items-center gap-4 rounded-full px-6 py-4" style={{ background: "#212121" }}>
              <UserInputIcon className="w-5 h-5 text-white shrink-0" />
              <input
                type="text"
                placeholder="Prénom"
                className="bg-transparent text-white placeholder-white outline-none flex-1 text-[17px]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              />
            </div>

            {/* Email input */}
            <div className="flex items-center gap-4 rounded-full px-6 py-4" style={{ background: "#212121" }}>
              <EmailInputIcon className="w-5 h-5 text-white shrink-0" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent text-white placeholder-white outline-none flex-1 text-[17px]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              />
            </div>

            {/* Subscribe button */}
            <button
              className="w-full py-4 rounded-full font-bold text-dark hover:opacity-90 transition-opacity cursor-pointer"
              style={{
                background: "#ffde77",
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(14px, 1.3vw, 18px)",
                letterSpacing: "0.5px",
              }}
            >
              S&apos;INSCRIRE À LA NEWSLETTER
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#2e2e2e] mb-12" />

        {/* ── Footer links — 4 columns ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-white font-bold mb-5"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(15px, 1.3vw, 20px)",
                }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.filter(Boolean).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-white transition-colors"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 400,
                        fontSize: "clamp(13px, 1vw, 17px)",
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

        {/* Divider */}
        <div className="border-t border-[#2e2e2e] mb-8" />

        {/* ── Bottom: socials centered ── */}
        <div className="flex flex-col items-center gap-4">
          <span
            className="text-white/50"
            style={{ fontFamily: "var(--font-poppins)", fontSize: 15 }}
          >
            Suivez-nous sur
          </span>
          <div className="flex items-center gap-3">
            {[
              { Icon: FacebookIcon, href: "#" },
              { Icon: LinkedinIcon, href: "#" },
              { Icon: WhatsappIcon, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors"
              >
                <Icon className="w-6 h-6 text-black" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}