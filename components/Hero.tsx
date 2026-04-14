"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center section-padding overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-black via-dark-brown/30 to-soft-black" />
      <div className="absolute inset-0 batik-overlay" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5 animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-gold/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/3" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        {/* Quran verse */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-card rounded-none px-6 py-5 max-w-lg mx-auto border-l-2 border-gold/40"
        >
          <p className="font-playfair text-gold-light text-base md:text-lg italic leading-relaxed">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri..."
          </p>
          <p className="font-inter text-cream/50 text-xs mt-2 tracking-widest uppercase">
            — QS. Ar-Rum: 21
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-3 text-gold/60"
        >
          <span className="text-lg">✦</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="font-playfair text-xl italic text-gold">♦</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-lg">✦</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-inter text-cream/60 text-sm tracking-[0.4em] uppercase"
        >
          Kami Mengundang Anda
        </motion.p>

        {/* Couple names */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <h1 className="font-playfair text-6xl md:text-8xl font-bold italic gold-text leading-none">
            Dewi
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-gold/60 italic my-2">
            &amp;
          </p>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold italic gold-text leading-none">
            Wisnu
          </h1>
        </motion.div>

        {/* Wedding date */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-2"
        >
          <div className="ornament-divider w-64 md:w-80">
            <span className="font-inter text-cream/70 text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              12 Oktober 2024
            </span>
          </div>
          <p className="font-inter text-cream/40 text-xs tracking-widest">
            Sabtu Legi · Yogyakarta
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gold/40"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/40" />
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
