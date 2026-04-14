"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
          filter: "blur(2px) brightness(0.35)",
          transform: "scale(1.05)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-black/60 via-dark-brown/40 to-soft-black/80" />

      {/* Batik texture overlay */}
      <div className="absolute inset-0 batik-overlay opacity-30" />

      {/* Top ornament */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute top-8 left-0 right-0 flex justify-center"
      >
        <OrnamentTop />
      </motion.div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <OrnamentBottom />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair text-gold-light text-sm md:text-base tracking-[0.3em] uppercase"
        >
          Bismillahirrahmanirrahim
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        {/* The Wedding of */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-inter text-cream/70 text-xs md:text-sm tracking-[0.4em] uppercase"
        >
          The Wedding of
        </motion.p>

        {/* Couple name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold italic gold-text leading-tight"
        >
          Dewi
          <br />
          <span className="text-2xl md:text-3xl font-normal not-italic text-gold/70 tracking-[0.5em]">
            &amp;
          </span>
          <br />
          Wisnu
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-gold/50" />
            <p className="font-inter text-cream/80 text-sm md:text-base tracking-[0.25em] uppercase">
              Sabtu, 12 Oktober 2024
            </p>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          <p className="font-inter text-gold/60 text-xs tracking-widest uppercase">
            Yogyakarta, Indonesia
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="mt-4 group relative px-10 py-4 overflow-hidden border border-gold/50 text-cream font-inter text-sm tracking-[0.3em] uppercase"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative">Buka Undangan</span>
        </motion.button>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
          className="text-cream/30 text-xs font-inter tracking-widest"
        >
          ✦ Ketuk untuk membuka ✦
        </motion.p>
      </div>
    </motion.div>
  );
}

function OrnamentTop() {
  return (
    <svg
      width="300"
      height="60"
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60"
    >
      <path
        d="M150 5 C130 5, 120 15, 100 15 C80 15, 60 5, 40 5 C20 5, 10 15, 0 20"
        stroke="#C9A84C"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M150 5 C170 5, 180 15, 200 15 C220 15, 240 5, 260 5 C280 5, 290 15, 300 20"
        stroke="#C9A84C"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="150" cy="5" r="3" fill="#C9A84C" />
      <circle cx="100" cy="15" r="2" fill="#C9A84C" opacity="0.6" />
      <circle cx="200" cy="15" r="2" fill="#C9A84C" opacity="0.6" />
      <path d="M130 25 L150 10 L170 25 L150 40 Z" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.4" />
      {[60, 90, 120, 180, 210, 240].map((x, i) => (
        <circle key={i} cx={x} cy="35" r="1.5" fill="#C9A84C" opacity="0.3" />
      ))}
    </svg>
  );
}

function OrnamentBottom() {
  return (
    <svg
      width="300"
      height="60"
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60 rotate-180"
    >
      <path
        d="M150 5 C130 5, 120 15, 100 15 C80 15, 60 5, 40 5 C20 5, 10 15, 0 20"
        stroke="#C9A84C"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M150 5 C170 5, 180 15, 200 15 C220 15, 240 5, 260 5 C280 5, 290 15, 300 20"
        stroke="#C9A84C"
        strokeWidth="0.8"
        fill="none"
      />
      <circle cx="150" cy="5" r="3" fill="#C9A84C" />
      <circle cx="100" cy="15" r="2" fill="#C9A84C" opacity="0.6" />
      <circle cx="200" cy="15" r="2" fill="#C9A84C" opacity="0.6" />
    </svg>
  );
}
