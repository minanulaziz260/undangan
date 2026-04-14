"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMusic, FiVolumeX } from "react-icons/fi";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Create audio element with a royalty-free music URL (replace with your own)
    audioRef.current = new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="glass-card px-3 py-1.5 border border-gold/20 mr-1"
          >
            <p className="font-inter text-cream/60 text-[10px] tracking-widest uppercase">
              ♪ Playing
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="relative w-12 h-12 rounded-full bg-dark-brown border border-gold/40 flex items-center justify-center shadow-lg shadow-black/50 hover:border-gold/70 transition-colors"
      >
        {/* Animated rings when playing */}
        {playing && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border border-gold/30"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-gold/20"
              animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}

        {playing ? (
          <FiMusic className="w-5 h-5 text-gold" />
        ) : (
          <FiVolumeX className="w-5 h-5 text-cream/50" />
        )}
      </motion.button>
    </div>
  );
    }
