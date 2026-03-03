"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArrowPrevIcon from "@/assets/icons/arrow-prev.svg";
import ArrowNextIcon from "@/assets/icons/arrow-next.svg";

const heroImages = [
  { src: "/images/smartwatch.jpg", label: "High-Tech" },
  { src: "/images/fashion-shoes.jpg", label: "Mode" },
  { src: "/images/laptop.jpg", label: "Électronique" },
  { src: "/images/fashion-men.jpg", label: "Vêtements" },
  { src: "/images/headphones.jpg", label: "Audio" },
  { src: "/images/fashion-women.jpg", label: "Femme" },
  { src: "/images/home-furniture.jpg", label: "Maison" },
  { src: "/images/home-decor.jpg", label: "Déco" },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#d9d9d9]" style={{ height: 440 }}>
      {/* Empty hero for now as per reference image */}
    </section>
  );
}
