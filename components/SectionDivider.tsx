"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "lotus" | "diamond" | "star";
}

export default function SectionDivider({ variant = "lotus" }: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const icons = {
    lotus: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 30 C18 30 8 24 8 16 C8 12 12 9 16 10 C16 6 18 4 18 4 C18 4 20 6 20 10 C24 9 28 12 28 16 C28 24 18 30 18 30Z" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.8"/>
        <path d="M18 30 C18 30 12 22 12 16 C12 13 14.5 11 17 12 C17 9 18 7 18 7 C18 7 19 9 19 12 C21.5 11 24 13 24 16 C24 22 18 30 18 30Z" stroke="#E8C97E" strokeWidth="0.6" fill="rgba(201,168,76,0.08)" opacity="0.9"/>
        <circle cx="18" cy="18" r="2" fill="#C9A84C" opacity="0.7"/>
        <circle cx="18" cy="18" r="0.8" fill="#E8C97E"/>
      </svg>
    ),
    diamond: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="#C9A84C" strokeWidth="0.8" fill="rgba(201,168,76,0.06)"/>
        <path d="M14 6 L22 14 L14 22 L6 14 Z" stroke="#E8C97E" strokeWidth="0.5" fill="none" opacity="0.6"/>
        <circle cx="14" cy="14" r="1.5" fill="#C9A84C"/>
      </svg>
    ),
    star: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3 L16.8 11.2 L25 15 L16.8 18.8 L15 27 L13.2 18.8 L5 15 L13.2 11.2 Z" stroke="#C9A84C" strokeWidth="0.8" fill="rgba(201,168,76,0.08)"/>
        <path d="M15 7 L16.2 12.8 L22 15 L16.2 17.2 L15 23 L13.8 17.2 L8 15 L13.8 12.8 Z" stroke="#E8C97E" strokeWidth="0.5" fill="none" opacity="0.5"/>
        <circle cx="15" cy="15" r="1.2" fill="#E8C97E"/>
      </svg>
    ),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0.4 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="section-divider"
    >
      <div className="section-divider-inner">
        {/* Left side */}
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-12 md:w-20 h-px bg-gradient-to-l from-gold to-transparent" />
          <span className="text-gold/50 text-xs">✦</span>
          <div className="w-6 md:w-10 h-px bg-gradient-to-l from-gold/50 to-transparent" />
        </div>

        {/* Center icon */}
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          {icons[variant]}
        </motion.div>

        {/* Right side */}
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-6 md:w-10 h-px bg-gradient-to-r from-gold/50 to-transparent" />
          <span className="text-gold/50 text-xs">✦</span>
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-gold to-transparent" />
        </div>
      </div>
    </motion.div>
  );
          }
