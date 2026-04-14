"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0.1 = subtle, 0.3 = medium
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.15,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
