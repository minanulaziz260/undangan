"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-dark-brown/30 to-soft-black text-center"
    >
      <div className="absolute inset-0 batik-overlay" />

      {/* Top ornament */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* Top decorative icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-gold text-2xl">✦</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold italic gold-text">
            Dewi & Wisnu
          </h2>
          <p className="font-inter text-cream/40 text-xs tracking-[0.4em] uppercase mt-2">
            12 Oktober 2024 · Yogyakarta
          </p>
        </motion.div>

        {/* Closing verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card px-8 py-6 border-l-2 border-gold/30 max-w-md"
        >
          <p className="font-playfair text-cream/80 text-sm md:text-base italic leading-relaxed">
            "Rabbana hablana min azwajina wa zurriyyatina qurrata a'yunin
            waj'alna lil-muttaqina imama."
          </p>
          <p className="font-inter text-cream/40 text-xs mt-2 tracking-widest uppercase">
            — QS. Al-Furqan: 74
          </p>
        </motion.div>

        {/* Thank you */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="font-playfair text-xl md:text-2xl italic text-cream/70">
            Terima kasih atas doa & restu
          </p>
          <p className="font-inter text-cream/40 text-sm">
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </p>
        </motion.div>

        {/* Family names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col gap-1 text-center"
        >
          <p className="font-inter text-cream/30 text-xs">Keluarga Besar</p>
          <p className="font-playfair text-gold/60 text-sm italic">H. Suharto Rahardjo & Hj. Sri Mulyani</p>
          <p className="font-inter text-cream/20 text-xs">&</p>
          <p className="font-playfair text-gold/60 text-sm italic">Ir. Bambang Prasetyo & Dra. Endah Wulandari</p>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-inter text-cream/20 text-xs tracking-wider"
        >
          Made with ❤ · Digital Wedding Invitation 2024
        </motion.p>
      </div>
    </footer>
  );
        }
