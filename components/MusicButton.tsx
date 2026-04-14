"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Use local file from /public/gamelan.mp3
    audioRef.current = new Audio("/gamelan.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    // Autoplay muted — silently attempt
    const tryAutoplay = async () => {
      try {
        await audioRef.current?.play();
        // Fade in volume slowly
        let vol = 0;
        const fadeIn = setInterval(() => {
          if (!audioRef.current) return clearInterval(fadeIn);
          vol = Math.min(vol + 0.02, 0.45);
          audioRef.current.volume = vol;
          if (vol >= 0.45) {
            clearInterval(fadeIn);
            setPlaying(true);
          }
        }, 100);
      } catch {
        // Autoplay blocked by browser — user must click
        setPlaying(false);
      }
    };

    tryAutoplay();

    // Hide hint after 5s
    const hintTimer = setTimeout(() => setShowHint(false), 5000);

    return () => {
      clearTimeout(hintTimer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      // Fade out
      let vol = audioRef.current.volume;
      const fadeOut = setInterval(() => {
        if (!audioRef.current) return clearInterval(fadeOut);
        vol = Math.max(vol - 0.03, 0);
        audioRef.current.volume = vol;
        if (vol <= 0) {
          audioRef.current.pause();
          clearInterval(fadeOut);
          setPlaying(false);
        }
      }, 60);
    } else {
      audioRef.current.volume = 0;
      try {
        await audioRef.current.play();
        // Fade in
        let vol = 0;
        const fadeIn = setInterval(() => {
          if (!audioRef.current) return clearInterval(fadeIn);
          vol = Math.min(vol + 0.03, 0.45);
          audioRef.current.volume = vol;
          if (vol >= 0.45) {
            clearInterval(fadeIn);
            setPlaying(true);
          }
        }, 60);
        setPlaying(true);
      } catch (err) {
        console.log("Play failed:", err);
      }
    }
    setShowHint(false);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Hint tooltip */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="glass-card px-3 py-2 border border-gold/25 flex items-center gap-2 mr-1"
          >
            <span className="text-gold text-xs">🎵</span>
            <p className="font-inter text-cream/60 text-[10px] tracking-widest uppercase whitespace-nowrap">
              {playing ? "Gamelan Playing" : "Tap to Play Music"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        title={playing ? "Pause Music" : "Play Music"}
        className={`relative w-12 h-12 rounded-full bg-dark-brown border flex items-center justify-center shadow-xl shadow-black/60 transition-all duration-500 ${
          playing
            ? "border-gold/60 music-pulse"
            : "border-gold/25 hover:border-gold/50"
        }`}
      >
        {/* Animated rings when playing */}
        {playing && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border border-gold/30"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-gold/20"
              animate={{ scale: [1, 1.9], opacity: [0.3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
          </>
        )}

        {/* Equalizer bars icon when playing */}
        {playing ? (
          <div className="flex items-end gap-[3px] h-5">
            {[1, 1.5, 0.8, 1.3, 1].map((delay, i) => (
              <motion.span
                key={i}
                className="w-[3px] bg-gold rounded-full"
                animate={{ height: ["40%", "100%", "40%"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                style={{ minHeight: "4px" }}
              />
            ))}
          </div>
        ) : (
          <svg className="w-5 h-5 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
            }
