"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import ArrowPrevIcon from "@/assets/icons/arrow-prev.svg";
import ArrowNextIcon from "@/assets/icons/arrow-next.svg";
import InfoIcon from "@/assets/icons/info-1.svg";
import ChanelLogo from "@/assets/icons/chanel-logo.svg";
import Image from "next/image";

interface OfferCard {
  id: number;
  imageSrc: string;
  brand: string;
  brandLogo?: any;
  title: string;
  type: string;
  hasPlayButton?: boolean;
  sponsored?: boolean;
}

const offers: OfferCard[] = [
  {
    id: 1,
    imageSrc: "/images/shoes.png",
    brand: "CHANEL",
    brandLogo: ChanelLogo,
    title: "Dès 20€ d'achat",
    type: "LIVRAISON OFFERTE",
    sponsored: true,
  },
  {
    id: 2,
    imageSrc: "/icons/offer-shoes-2.svg",
    brand: "PRADA",
    title: "10 € offerts",
    type: "BON D'ACHAT",
    sponsored: true,
  },
  {
    id: 3,
    imageSrc: "/images/shoes2.png",
    brand: "Dior",
    title: "Dès 15€ d'achat",
    type: "LIVRAISON OFFERTE",
    sponsored: true,
  },
  {
    id: 4,
    imageSrc: "/icons/offer-cashback-bg.svg",
    brand: "CARMINA",
    title: "Jusqu'à 8 %",
    type: "CASHBACK BOOSTÉ",
    hasPlayButton: true,
    sponsored: true,
  },
  {
    id: 5,
    imageSrc: "/images/shoes.png",
    brand: "GUCCI",
    title: "Ventes Privées",
    type: "JUSQU'À -50%",
    sponsored: true,
  },
  {
    id: 6,
    imageSrc: "/icons/offer-shoes-2.svg",
    brand: "HERMÈS",
    title: "Collection Été",
    type: "OFFRE EXCLUSIVE",
    sponsored: true,
  },
  {
    id: 7,
    imageSrc: "/images/shoes2.png",
    brand: "BALENCIAGA",
    title: "Livraison Express",
    type: "OFFERTE",
    sponsored: true,
  },
  {
    id: 8,
    imageSrc: "/icons/offer-cashback-bg.svg",
    brand: "LOUIS VUITTON",
    title: "Nouveautés",
    type: "DÉCOUVRIR",
    sponsored: true,
  },
];

export default function OffersSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chunk the offers into pages
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < offers.length; i += itemsPerView) {
      result.push(offers.slice(i, i + itemsPerView));
    }
    return result;
  }, [itemsPerView]);

  const totalPages = pages.length;

  // Reset index if itemsPerView changes and current index becomes invalid
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0);
    }
  }, [totalPages, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  return (
    <section ref={ref} className="bg-[#fcfcfc] py-16">
      <div className="section-container relative">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="section-heading text-4xl">Offres à ne pas manquer</h2>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-[45%] lg:top-1/2 -translate-y-1/2 left-4 lg:left-10 z-20">
          <button
            onClick={prevSlide}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all text-dark cursor-pointer"
            aria-label="Précédent"
          >
            <ArrowPrevIcon className="w-full h-full" />
          </button>
        </div>

        <div className="absolute top-[45%] lg:top-1/2 -translate-y-1/2 right-4 lg:right-10 z-20">
          <button
            onClick={nextSlide}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-white shadow-lg border border-gray-100 hover:bg-gray-50 transition-all text-dark cursor-pointer"
            aria-label="Suivant"
          >
            <ArrowNextIcon className="w-full h-full" />
          </button>
        </div>

        {/* Carousel Viewport — overflow-hidden clips the other pages */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {pages.map((page, pageIdx) => (
              <div
                key={`page-${pageIdx}`}
                className="min-w-full shrink-0 grid gap-8"
                style={{
                  gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`
                }}
              >
                {page.map((offer, i) => (
                  <div
                    key={`${offer.id}-${i}`}
                    className="flex flex-col group shrink-0"
                  >
                    {/* Image Container with Overlays */}
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-[#e5e5e5] mb-5 group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={offer.imageSrc}
                        alt={offer.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                      />

                      {/* Activer l'offre Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-yellow cursor-pointer hover:bg-yellow-muted transition-colors text-dark font-bold py-3.5 px-7 rounded-full shadow-xl text-sm whitespace-nowrap">
                          Activer l'offre
                        </button>
                      </div>

                      {/* Play Button Overlay */}
                      {offer.hasPlayButton && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1.5 shadow-sm" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Below Image */}
                    <div className="flex flex-col gap-1.5 px-1">
                      <h3 className="text-2xl font-bold font-alan tracking-tight text-dark leading-none">
                        {offer.title}
                      </h3>
                      <span className="text-[12px] font-bold text-golden tracking-wider font-alan uppercase">
                        {offer.type}
                      </span>

                      {offer.sponsored && (
                        <div className="flex items-center gap-2 mt-1 text-muted">
                          <InfoIcon className="w-4 h-4 bg-muted text-white rounded-full border-1 border-white" />
                          <span className="text-[12px] font-normal font-alan">Sponsorisé</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-dark shadow-sm scale-110" : "bg-[#e5e5e5] hover:bg-[#d1d1d1] cursor-pointer"}`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}