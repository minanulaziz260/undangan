"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stories = [
  {
    year: "2018",
    title: "Pertemuan Pertama",
    description:
      "Takdir mempertemukan kami di sebuah seminar budaya di Taman Budaya Yogyakarta. Tatapan pertama yang tak terlupakan, senyum yang menenangkan jiwa.",
    icon: "✨",
  },
  {
    year: "2019",
    title: "Menjalin Kasih",
    description:
      "Dengan bismillah dan doa restu kedua orang tua, kami memulai perjalanan indah bersama. Setiap langkah diiringi rasa syukur dan cinta yang tulus.",
    icon: "🌸",
  },
  {
    year: "2022",
    title: "Lamaran",
    description:
      "Di bawah langit Yogyakarta yang cerah, dengan cincin berlian sederhana namun penuh makna, Wisnu melamar Dewi. Sebuah janji yang terukir selamanya.",
    icon: "💍",
  },
  {
    year: "2024",
    title: "Hari Bahagia",
    description:
      "Kini saatnya kami menggenapi separuh agama. Menyatukan dua hati, dua keluarga, dalam ikatan suci yang diridhai Allah SWT.",
    icon: "🕌",
  },
];

export default function LoveStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-dark-brown/30 to-soft-black"
    >
      <div className="absolute inset-0 batik-overlay" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-gold/60 text-xs tracking-[0.5em] uppercase mb-3">
            Kisah Kami
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold italic text-cream">
            Love Story
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:-translate-x-px" />

          {stories.map((story, index) => (
            <TimelineItem
              key={story.year}
              story={story}
              index={index}
              isInView={isInView}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  story,
  index,
  isInView,
  isLeft,
}: {
  story: (typeof stories)[0];
  index: number;
  isInView: boolean;
  isLeft: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      className={`relative flex items-start gap-6 mb-12 pl-14 md:pl-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } md:gap-0`}
    >
      {/* Content card */}
      <div
        className={`glass-card p-6 w-full md:w-5/12 ${
          isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
        }`}
      >
        <div className="flex flex-col gap-2">
          <span className="text-2xl">{story.icon}</span>
          <p className="font-inter text-gold/70 text-xs tracking-[0.3em] uppercase">
            {story.year}
          </p>
          <h3 className="font-playfair text-xl font-bold italic text-cream">
            {story.title}
          </h3>
          <div className="w-8 h-px bg-gold/40" />
          <p className="font-inter text-cream/60 text-sm leading-relaxed">
            {story.description}
          </p>
        </div>
      </div>

      {/* Node dot */}
      <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-dark-brown border-2 border-gold md:-translate-x-2 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
      </div>
    </motion.div>
  );
}
