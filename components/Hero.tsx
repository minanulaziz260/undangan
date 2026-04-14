"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.9, ease: "easeOut" },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax for background
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-soft-black via-dark-brown/30 to-soft-black" />
        <div className="absolute inset-0 batik-overlay" />

        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gold/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gold/3 rounded-full blur-2xl" />
      </motion.div>

      {/* Floating circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="w-[580px] h-[580px] rounded-full border border-gold/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-10 rounded-full border border-gold/8" />
        <div className="absolute inset-20 rounded-full border border-gold/6" />
      </div>

      {/* Content with soft parallax */}
      <motion.div
        ref={ref}
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-3xl px-4"
      >
        {/* Quran verse */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-card px-6 py-5 max-w-lg border-l-2 border-gold/40 relative"
        >
          {/* Corner accents */}
          <span className="absolute top-2 left-2 text-gold/20 text-xs">✦</span>
          <span className="absolute bottom-2 right-2 text-gold/20 text-xs">✦</span>
          <p className="font-playfair text-gold-light text-base md:text-lg italic leading-relaxed">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri..."
          </p>
          <p className="font-inter text-cream/40 text-xs mt-2 tracking-widest uppercase">
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
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <motion.span
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-gold text-sm"
          >
            ✦
          </motion.span>
          <div className="w-6 h-px bg-gold/40" />
          <span className="font-playfair text-xl italic text-gold">♦</span>
          <div className="w-6 h-px bg-gold/40" />
          <motion.span
            animate={{ rotate: [360, 180, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-gold text-sm"
          >
            ✦
          </motion.span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-inter text-cream/50 text-xs tracking-[0.5em] uppercase"
        >
          ✦ Kami Mengundang Anda ✦
        </motion.p>

        {/* Names with shimmer gold */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <h1 className="font-playfair text-6xl md:text-8xl font-bold italic gold-text leading-none drop-shadow-lg">
            Dewi
          </h1>
          <motion.p
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-playfair text-2xl md:text-3xl text-gold/50 italic my-2"
          >
            &amp;
          </motion.p>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold italic gold-text leading-none drop-shadow-lg">
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
          <div className="ornament-divider w-72 md:w-96">
            <span className="font-inter text-cream/70 text-sm tracking-[0.3em] uppercase whitespace-nowrap px-2">
              12 Oktober 2024
            </span>
          </div>
          <p className="font-inter text-cream/35 text-xs tracking-[0.4em] uppercase">
            Sabtu Legi · Yogyakarta
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gold/30 z-10"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold/40" />
        <div className="w-1 h-1 rounded-full bg-gold/40" />
        <span className="text-[10px] font-inter tracking-[0.4em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
