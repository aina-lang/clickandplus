"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import TrustpilotIcon from "@/assets/icons/trustpilot.svg";
import Stars5Icon from "@/assets/icons/stars-5.svg";
import CommentIcon from "@/assets/icons/comment.svg";

const reviews = [
  {
    name: "Anthony Morel",
    initials: "AM",
    bgColor: "#d8e8ff",
    photo: null,
    text: "Grâce à Clickandplus, j'ai économisé\nsur presque tous mes achats.\nL'application est simple et super !",
  },
  {
    name: "Camille Dupont",
    initials: "CD",
    bgColor: "#ffe8d8",
    photo: "/images/review-camille.jpg",
    text: "Je ne pensais pas que le cashback\npouvait rapporter autant. Chaque\nmois, je récupère une belle somme !",
  },
  {
    name: "Sophie Lambert",
    initials: "SL",
    bgColor: "#d8ffe8",
    photo: "/images/review-sophie.jpg",
    text: "J'adore les offres exclusives. Dès que\nje fais mes courses, je gagne des\npoints. Je recommande à 100 %",
  },
  {
    name: "Julien Martin",
    initials: "JM",
    bgColor: "#f0d8ff",
    photo: "/images/review-julien.jpg",
    text: "Le suivi des économies est clair et\nmotivant. C'est devenu l'une de mes\napps indispensables.",
  },
  {
    name: "Élodie Bernard",
    initials: "ÉB",
    bgColor: "#ffd8e8",
    photo: "/images/review-elodie.jpg",
    text: "Les promotions sont vraiment utiles\net le système est rapide. Je suis très\nsatisfait de l'expérience.",
  },
];

export default function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="section-container">
        {/* Trustpilot header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="bg-[#00b67a] text-white p-2 rounded-sm flex items-center justify-center"
              style={{ width: 44, height: 44 }}
            >
              <TrustpilotIcon className="w-8 h-8 fill-current" />
            </div>
            <span className="text-[#0d0d0d] font-bold text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Trustpilot
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center rounded-sm">
                  <Stars5Icon className="w-6 h-6 fill-white" />
                </div>
              ))}
            </div>
            <span className="text-[#0d0d0d] font-bold text-xl ml-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              EXCELLENT
            </span>
          </div>
          <p
            className="text-[#8d8d8d] font-medium text-center"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "18px",
            }}
          >
            Basé sur +20 000 avis
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-hover rounded-[15px] p-5 flex flex-col gap-3"
              style={{ background: "#f6f6f6" }}
            >
              {/* Avatar + name + stars */}
              <div className="flex items-center gap-3">
                {review.photo ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={review.photo}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: review.bgColor, color: "#333" }}
                  >
                    {review.initials}
                  </div>
                )}
                <span
                  className="text-[#0d0d0d] font-semibold text-sm leading-tight"
                  style={{ fontFamily: "var(--font-poppins)", fontSize: 15 }}
                >
                  {review.name}
                </span>
              </div>

              {/* Stars */}
              <Stars5Icon className="h-5 w-auto" />

              {/* Review text */}
              <p
                className="text-[#0d0d0d] whitespace-pre-line opacity-80 flex-1"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1vw, 15px)",
                  lineHeight: "22px",
                }}
              >
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
        >
          <button
            className="px-8 py-3 rounded-full font-bold text-dark"
            style={{ background: "var(--color-yellow)", fontFamily: "var(--font-space-grotesk)", fontSize: 18 }}
          >
            Lire les avis
          </button>
          <button
            className="flex items-center gap-3 px-8 py-3 rounded-full bg-dark text-white font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 18 }}
          >
            Laisser un avis
          </button>
        </motion.div>
      </div>
    </section>
  );
}
