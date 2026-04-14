"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", attendance: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<
    { name: string; attendance: string; message: string }[]
  >([
    {
      name: "Budi Santoso",
      attendance: "yes",
      message: "Semoga menjadi keluarga yang sakinah mawaddah wa rahmah 🤲",
    },
    {
      name: "Ratna Dewi",
      attendance: "yes",
      message: "Barakallahu lakuma wa baraka 'alaykuma ❤️",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.attendance) return;
    setMessages((prev) => [form, ...prev]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", attendance: "", message: "" });
    }, 3000);
  };

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden bg-gradient-to-b from-dark-brown/40 to-soft-black"
    >
      <div className="absolute inset-0 batik-overlay" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="font-inter text-gold/60 text-xs tracking-[0.5em] uppercase mb-3">
            Konfirmasi Kehadiran
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold italic text-cream">
            RSVP
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-inter text-cream/50 text-sm mt-4 leading-relaxed">
            Kehadiran Anda adalah kehormatan dan kebahagiaan bagi kami.
            <br />
            Mohon konfirmasi sebelum 5 Oktober 2024.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          className="glass-card p-8 flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-cream/60 text-xs tracking-widest uppercase">
              Nama Lengkap *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Masukkan nama Anda..."
              required
              className="bg-dark-brown/50 border border-gold/20 text-cream font-inter text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors placeholder:text-cream/20"
            />
          </div>

          {/* Attendance */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-cream/60 text-xs tracking-widest uppercase">
              Kehadiran *
            </label>
            <div className="flex gap-3">
              {[
                { value: "yes", label: "✓ Hadir" },
                { value: "no", label: "✗ Tidak Hadir" },
              ].map(({ value, label }) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => setForm({ ...form, attendance: value })}
                  className={`flex-1 py-3 text-sm font-inter tracking-wider border transition-all duration-300 ${
                    form.attendance === value
                      ? "bg-gold/20 border-gold text-gold"
                      : "border-gold/20 text-cream/50 hover:border-gold/40"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-cream/60 text-xs tracking-widest uppercase">
              Ucapan & Doa
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tulis ucapan dan doa tulus untuk mempelai..."
              rows={4}
              className="bg-dark-brown/50 border border-gold/20 text-cream font-inter text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors placeholder:text-cream/20 resize-none"
            />
          </div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`py-4 font-inter text-sm tracking-[0.3em] uppercase transition-all duration-300 ${
              submitted
                ? "bg-gold/30 text-gold border border-gold/50"
                : "bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark-brown font-semibold hover:from-gold hover:to-gold"
            }`}
          >
            {submitted ? "✓ Terima Kasih!" : "Kirim RSVP"}
          </motion.button>
        </motion.form>

        {/* Messages */}
        {messages.length > 0 && (
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-8 flex flex-col gap-4"
          >
            <p className="font-inter text-gold/60 text-xs tracking-[0.4em] uppercase text-center">
              Ucapan & Doa
            </p>
            <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-2">
              {messages.map((msg, i) => (
                <div key={i} className="glass-card p-4 border border-gold/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-playfair text-gold italic text-sm">{msg.name}</p>
                    <span
                      className={`text-xs px-2 py-0.5 border font-inter ${
                        msg.attendance === "yes"
                          ? "text-emerald-400 border-emerald-400/30"
                          : "text-rose-400 border-rose-400/30"
                      }`}
                    >
                      {msg.attendance === "yes" ? "Hadir" : "Tidak Hadir"}
                    </span>
                  </div>
                  {msg.message && (
                    <p className="font-inter text-cream/60 text-xs leading-relaxed">
                      {msg.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
