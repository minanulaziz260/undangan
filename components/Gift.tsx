"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const banks = [
  {
    bank: "Bank BCA",
    accountName: "Dewi Ayu Ratnasari",
    accountNumber: "1234567890",
    logo: "BCA",
    color: "from-blue-900/30 to-blue-800/10",
  },
  {
    bank: "Bank Mandiri",
    accountName: "Wisnu Bayu Aji Saputra",
    accountNumber: "0987654321",
    logo: "MANDIRI",
    color: "from-yellow-900/30 to-yellow-800/10",
  },
];

function BankCard({ bank }: { bank: (typeof banks)[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bank.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`glass-card p-6 bg-gradient-to-br ${bank.color} relative overflow-hidden`}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-gold/20" />

      {/* Bank name */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-inter text-gold/60 text-xs tracking-[0.3em] uppercase mb-1">
            {bank.bank}
          </p>
          <p className="font-inter text-cream/70 text-sm">{bank.accountName}</p>
        </div>
        <div className="bg-gold/10 border border-gold/20 px-3 py-1.5">
          <span className="font-playfair font-bold text-gold text-sm">{bank.logo}</span>
        </div>
      </div>

      {/* Account number */}
      <div className="flex items-center justify-between bg-dark-brown/40 border border-gold/10 px-4 py-3">
        <span className="font-inter text-cream text-base md:text-lg tracking-widest">
          {bank.accountNumber}
        </span>
        <button
          onClick={handleCopy}
          className="ml-3 text-gold hover:text-gold-light transition-colors flex items-center gap-1.5"
        >
          {copied ? (
            <FiCheck className="w-4 h-4" />
          ) : (
            <FiCopy className="w-4 h-4" />
          )}
          <span className="font-inter text-xs">
            {copied ? "Tersalin!" : "Salin"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Gift() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-soft-black via-dark-brown/20 to-soft-black"
    >
      <div className="absolute inset-0 batik-overlay" />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-inter text-gold/60 text-xs tracking-[0.5em] uppercase mb-3">
            Hadiah Pernikahan
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold italic text-cream">
            Wedding Gift
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-inter text-cream/50 text-sm mt-4 leading-relaxed max-w-sm mx-auto">
            Doa dan kehadiran Anda adalah hadiah terbaik bagi kami. Namun jika
            ingin memberikan hadiah, berikut rekening kami:
          </p>
        </motion.div>

        {/* Bank cards */}
        <div className="flex flex-col gap-4">
          {banks.map((bank, index) => (
            <motion.div
              key={bank.bank}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <BankCard bank={bank} />
            </motion.div>
          ))}
        </div>

        {/* QR Code placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 glass-card p-8 flex flex-col items-center gap-4"
        >
          <p className="font-inter text-cream/50 text-xs tracking-widest uppercase">
            QRIS / Transfer Digital
          </p>
          {/* QR placeholder */}
          <div className="w-36 h-36 border border-gold/30 flex items-center justify-center bg-dark-brown/30 relative">
            <div className="absolute inset-2 border border-gold/10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-30 text-gold fill-current">
                <rect x="10" y="10" width="30" height="30" rx="2" />
                <rect x="60" y="10" width="30" height="30" rx="2" />
                <rect x="10" y="60" width="30" height="30" rx="2" />
                <rect x="15" y="15" width="20" height="20" rx="1" fill="#1a1209" />
                <rect x="65" y="15" width="20" height="20" rx="1" fill="#1a1209" />
                <rect x="15" y="65" width="20" height="20" rx="1" fill="#1a1209" />
                <rect x="60" y="60" width="10" height="10" />
                <rect x="75" y="60" width="15" height="10" />
                <rect x="60" y="75" width="15" height="15" />
                <rect x="40" y="10" width="10" height="10" />
                <rect x="10" y="40" width="10" height="10" />
                <rect x="45" y="45" width="10" height="10" />
                <rect x="25" y="45" width="10" height="5" />
              </svg>
            </div>
            <p className="absolute bottom-2 text-[8px] font-inter text-cream/30 tracking-widest">
              QR CODE
            </p>
          </div>
          <p className="font-inter text-cream/30 text-xs text-center">
            Scan untuk transfer via QRIS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
