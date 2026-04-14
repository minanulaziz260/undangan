"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiCalendar, FiClock, FiDownload } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

interface EventCardProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  index: number;
  isInView: boolean;
}

function EventCard({
  title,
  subtitle,
  date,
  time,
  venue,
  address,
  mapsUrl,
  index,
  isInView,
}: EventCardProps) {
  const handleSaveDate = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20241012T090000Z
DTEND:20241012T120000Z
SUMMARY:${title} - Dewi & Wisnu
DESCRIPTION:${title} Dewi & Wisnu
LOCATION:${venue}, ${address}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dewi-wisnu-${title.toLowerCase()}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="glass-card p-8 max-w-sm w-full flex flex-col gap-5 relative overflow-hidden"
    >
      {/* Corner ornament */}
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-gold/30" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-gold/30" />

      {/* Header */}
      <div>
        <p className="font-inter text-gold/60 text-xs tracking-[0.4em] uppercase mb-1">
          {subtitle}
        </p>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold italic text-cream">
          {title}
        </h3>
        <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent mt-2" />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <FiCalendar className="text-gold w-4 h-4 flex-shrink-0" />
          <p className="font-inter text-cream/80 text-sm">{date}</p>
        </div>
        <div className="flex items-center gap-3">
          <FiClock className="text-gold w-4 h-4 flex-shrink-0" />
          <p className="font-inter text-cream/80 text-sm">{time}</p>
        </div>
        <div className="flex items-start gap-3">
          <FiMapPin className="text-gold w-4 h-4 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-inter text-cream/90 text-sm font-medium">{venue}</p>
            <p className="font-inter text-cream/50 text-xs mt-0.5">{address}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-2">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-gold/40 text-gold text-xs font-inter tracking-widest uppercase py-3 px-4 hover:bg-gold/10 transition-colors duration-300"
        >
          <FiMapPin className="w-3.5 h-3.5" />
          Google Maps
        </a>
        <button
          onClick={handleSaveDate}
          className="flex items-center justify-center gap-2 bg-gold/10 border border-gold/20 text-cream/70 text-xs font-inter tracking-widest uppercase py-3 px-4 hover:bg-gold/20 transition-colors duration-300"
        >
          <FiDownload className="w-3.5 h-3.5" />
          Save the Date
        </button>
      </div>
    </motion.div>
  );
}

export default function Event() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-dark-brown/50 via-soft-black to-dark-brown/30"
    >
      <div className="absolute inset-0 batik-overlay" />

      {/* Decorative radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gold/3 blur-3xl" />
      </div>

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
            Jadwal Acara
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold italic text-cream">
            Rangkaian Acara
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <EventCard
            title="Akad Nikah"
            subtitle="Prosesi Sakral"
            date="Sabtu, 12 Oktober 2024"
            time="08:00 — 10:00 WIB"
            venue="Masjid Agung Kauman"
            address="Jl. Kauman No.1, Ngupasan, Yogyakarta"
            mapsUrl="https://maps.google.com/?q=Masjid+Agung+Kauman+Yogyakarta"
            index={1}
            isInView={isInView}
          />

          {/* Center divider */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden md:flex flex-col items-center justify-center gap-2 py-8"
          >
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          </motion.div>

          <EventCard
            title="Resepsi"
            subtitle="Pesta Pernikahan"
            date="Sabtu, 12 Oktober 2024"
            time="11:00 — 15:00 WIB"
            venue="Royal Ambarrukmo Yogyakarta"
            address="Jl. Laksda Adisucipto No.81, Depok, Sleman"
            mapsUrl="https://maps.google.com/?q=Royal+Ambarrukmo+Yogyakarta"
            index={3}
            isInView={isInView}
          />
        </div>

        {/* Countdown */}
        <CountdownTimer targetDate="2024-10-12" isInView={isInView} />
      </div>
    </section>
  );
}

function CountdownTimer({
  targetDate,
  isInView,
}: {
  targetDate: string;
  isInView: boolean;
}) {
  return (
    <motion.div
      custom={5}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mt-16 text-center"
    >
      <p className="font-inter text-cream/40 text-xs tracking-[0.4em] uppercase mb-6">
        Hitung Mundur
      </p>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {[
          { value: "12", label: "Oktober" },
          { value: "2024", label: "Tahun" },
          { value: "Sabtu", label: "Hari" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-gold/20">
              <span className="font-playfair text-xl md:text-2xl font-bold gold-text">
                {value}
              </span>
            </div>
            <span className="font-inter text-cream/40 text-[10px] tracking-widest uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
  }
