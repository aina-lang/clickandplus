"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import LogoIcon from "@/assets/icons/logo.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import SearchGroupIcon from "@/assets/icons/search-group.svg";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import FlagFrIcon from "@/assets/icons/flag-fr.svg";
import GridIcon from "@/assets/icons/grid.svg";
import ChevronNavIcon from "@/assets/icons/chevron-nav.svg";

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Nos offres");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [offresOpen, setOffresOpen] = useState(false);

  // Sticky scroll state
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Add shadow/blur after 10px scroll
    setScrolled(latest > 10);
    lastScrollY.current = latest;
  });

  const accountRef = useRef<HTMLDivElement>(null);
  const offresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setAccountOpen(false);
      }
      if (offresRef.current && !offresRef.current.contains(event.target as Node)) {
        setOffresOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      className="bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        boxShadow: scrolled
          ? "0 4px 24px 0 rgba(0,0,0,0.08)"
          : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      {/* Top Row */}
      <div className="px-10 flex items-center justify-between relative h-[90px]">
        {/* Logo + tagline */}
        <div className="flex items-center gap-5">
          <LogoIcon className="w-[100px] h-[62px]" />
          <span
            className="hidden xl:block text-[#000] text-[14px]"
            style={{ fontFamily: "var(--font-alan)", fontWeight: 400 }}
          >
            Plus de 5 millions de deals disponibles dans plusieurs pays.
          </span>
        </div>

        {/* Search - Centered */}
        <div
          className="hidden md:flex items-center gap-3 px-12 h-[40px] rounded-[23px] border border-[#f0f0f0] relative"
          style={{ background: "#fbfbfb", width: 210 }}
        >
          <SettingsIcon className="w-[17px] h-[17px] absolute left-2" />
          <div className="h-4 w-px bg-gray-400 absolute left-8" />
          <input
            type="text"
            placeholder="Rechercher"
            className="bg-transparent text-[14px] flex-1 outline-none placeholder-dark/40"
            style={{ fontFamily: "var(--font-alan)" }}
          />
          <div className="w-8 h-8 rounded-full bg-[#FFF6D8] flex items-center justify-center shrink-0 absolute right-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Right links */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Account Dropdown */}
          <div className="relative" ref={accountRef}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setAccountOpen(!accountOpen);
                setOffresOpen(false);
              }}
            >
              <span
                className="text-dark font-bold text-[16px]"
                style={{ fontFamily: "var(--font-alan)" }}
              >
                Mon compte
              </span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${accountOpen ? "rotate-180" : ""}`} />
            </div>

            {accountOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full mt-2 left-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-[60]"
                style={{ fontFamily: "var(--font-alan)" }}
              >
                <a href="#" onClick={() => { setAccountOpen(false); setMobileOpen(false); }} className="block px-4 py-3 bg-[#FFF6D8] hover:bg-[#FFEAA8] transition-colors font-bold text-sm">
                  S&apos;inscrire
                </a>
                <a href="#" onClick={() => { setAccountOpen(false); setMobileOpen(false); }} className="block px-4 py-3 hover:bg-gray-50 transition-colors font-bold text-sm">
                  Se connecter
                </a>
              </motion.div>
            )}
          </div>

          <button
            className="bg-dark text-white px-6 py-2 rounded-full font-bold text-[15px] hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-alan)" }}
          >
            Nous contactez
          </button>

          <div className="h-6 w-px bg-gray-700 mx-2" />

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100">
              <FlagFrIcon className="w-full h-full object-cover shadow-sm" />
            </div>
            <span
              className="text-dark text-[15px] font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Français
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-black mb-1.5" />
          <div className="w-6 h-0.5 bg-black mb-1.5" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Bottom Row */}
      <div className="bg-white w-full ">
        <div className="section-container flex items-center h-[52px] gap-8 justify-around">
          <nav className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-16">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setActiveNavItem("Toutes les catégories");
                  setAccountOpen(false);
                  setMobileOpen(false);
                }}
              >
                <GridIcon className="w-[18px] h-[18px] text-yellow" />
                <span
                  className="text-dark font-bold text-[15px]"
                  style={{ fontFamily: "var(--font-alan)" }}
                >
                  Toutes les catégories
                </span>
              </div>

              {[
                { label: "Nos offres", hasChevron: true },
                { label: "Shop", hasChevron: false },
                { label: "Services +", hasChevron: false },
                { label: "Club Membres", hasChevron: false },
                { label: "Help Center", hasChevron: false },
                { label: "Mon espaces", hasChevron: false },
              ].map((item) => (
                <div key={item.label} className="relative" ref={item.hasChevron ? offresRef : null}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.hasChevron) {
                        setOffresOpen(!offresOpen);
                        setAccountOpen(false);
                      } else {
                        setActiveNavItem(item.label);
                        setAccountOpen(false);
                        setMobileOpen(false);
                        setOffresOpen(false);
                      }
                    }}
                    className={`flex items-center gap-1 text-dark font-bold text-[15px] transition-opacity hover:opacity-100 ${activeNavItem === item.label ? "opacity-100" : "opacity-70"}`}
                    style={{ fontFamily: "var(--font-alan)" }}
                  >
                    {item.label}
                    {item.hasChevron && (
                      <ChevronNavIcon className={`w-5 h-4 transition-transform ${offresOpen ? "rotate-180" : ""}`} />
                    )}
                  </a>

                  {item.hasChevron && offresOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full mt-2 left-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-[60]"
                      style={{ fontFamily: "var(--font-alan)" }}
                    >
                      <a
                        href="#"
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors font-bold text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveNavItem("Offres spéciales");
                          setOffresOpen(false);
                        }}
                      >
                        Offres spéciales
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors font-bold text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveNavItem("Deals du jour");
                          setOffresOpen(false);
                        }}
                      >
                        Deals du jour
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 overflow-hidden"
        >
          {["Nos offres", "Shop", "Services +", "Club Membres", "Help Center", "Mon espaces"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-dark text-base"
              onClick={() => {
                setActiveNavItem(item);
                setAccountOpen(false);
                setMobileOpen(false);
              }}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex-1 text-center py-2 bg-[#0b0c0c] text-white rounded-lg text-sm"
              onClick={() => { setAccountOpen(false); setMobileOpen(false); }}
            >
              S&apos;inscrire
            </a>
            <a
              href="#"
              className="flex-1 text-center py-2 bg-[#0b0c0c] text-white rounded-lg text-sm"
              onClick={() => { setAccountOpen(false); setMobileOpen(false); }}
            >
              Se connecter
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}