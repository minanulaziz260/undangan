"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Event from "@/components/Event";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Gift from "@/components/Gift";
import Footer from "@/components/Footer";
import MusicButton from "@/components/MusicButton";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <OpeningScreen key="opening" onOpen={() => setIsOpen(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Hero />
            <Couple />
            <Event />
            <LoveStory />
            <Gallery />
            <RSVP />
            <Gift />
            <Footer />
            <MusicButton />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
