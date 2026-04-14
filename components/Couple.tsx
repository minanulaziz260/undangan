"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.9, ease: "easeOut" },
  }),
};

interface PersonCardProps {
  name: string;
  fullName: string;
  father: string;
  mother: string;
  imageUrl: string;
  role: string;
  index: number;
  isInView: boolean;
}

function PersonCard({
  name,
  fullName,
  father,
  mother,
  imageUrl,
  role,
  index,
  isInView,
}: PersonCardProps) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center gap-6 max-w-sm w-full"
    >
      {/* Photo frame */}
      <div className="relative">
        {/* Outer ornamental ring */}
        <div className="absolute -inset-4 rounded-full border border-gold/20" />
        <div className="absolute -inset-2 rounded-full border border-gold/30" />

        {/* Photo container */}
        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold/50">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 208px, 256px"
          />
          {/* Gold overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent" />
        </div>

        {/* Role badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-dark-brown border border-gold/50 px-4 py-1">
          <span className="font-inter text-gold text-xs tracking-widest uppercase">
            {role}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="text-center pt-3 flex flex-col gap-2">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold italic gold-text">
          {name}
        </h2>
        <p className="font-inter text-cream/70 text-sm md:text-base">{fullName}</p>

        <div className="mt-2 space-y-1 text-center">
          <p className="font-inter text-cream/40 text-xs tracking-widest uppercase">
            Putra/Putri dari
          </p>
          <p className="font-playfair text-cream/80 text-sm italic">
            Bapak {father}
          </p>
          <p className="font-inter text-cream/50 text-xs">&amp;</p>
          <p className="font-playfair text-cream/80 text-sm italic">
            Ibu {mother}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Couple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-soft-black to-dark-brown/50"
    >
      <div className="absolute inset-0 batik-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="font-inter text-gold/60 text-xs tracking-[0.5em] uppercase mb-3">
            Mempelai
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold italic text-cream">
            Calon Pengantin
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Couple cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <PersonCard
            name="Dewi"
            fullName="Dewi Ayu Ratnasari"
            father="H. Suharto Rahardjo"
            mother="Hj. Sri Mulyani"
            imageUrl="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face"
            role="Mempelai Wanita"
            index={1}
            isInView={isInView}
          />

          {/* Center ornament */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center gap-3 text-gold/50"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
            <span className="font-playfair text-4xl italic text-gold/60">&</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
          </motion.div>

          <PersonCard
            name="Wisnu"
            fullName="Wisnu Bayu Aji Saputra"
            father="Ir. Bambang Prasetyo"
            mother="Dra. Endah Wulandari"
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
            role="Mempelai Pria"
            index={3}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
